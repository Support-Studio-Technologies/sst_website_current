"use client";
import { useState, ChangeEvent, FormEvent } from "react";

// Translates Supabase/Postgres error codes to user-facing messages
function resolveApiError(code?: string, fallback?: string): string {
  const errorMap: Record<string, string> = {
    '23505': 'This phone number or email has already been registered.',
    '23503': 'Submission failed due to a reference error. Please try again.',
    '23514': 'A field value provided is invalid.',
    '42501': 'Permission denied. Please try again or contact support.',
    '404':   'Could not link your callback request to your profile. Please try again.',
  };
  if (code && errorMap[code]) return errorMap[code];
  return fallback || 'Transaction failed. Please try again later.';
}

export default function CallbackRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    consentGiven: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : undefined;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "N/A";

    // Step 1: Create the parent lead record via /api/leads
    try {
      const leadResponse = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: "callback@pending.local",
          phone: formData.phone.trim(),
          lead_source: "Callback Request",
          consent_given: formData.consentGiven,
        }),
      });

      const leadResult = await leadResponse.json();

      if (!leadResponse.ok) {
        const humanError = resolveApiError(leadResult?.code, leadResult?.error);
        setStatus("error");
        setErrorMessage(humanError);
        return;
      }

      const { lead_id } = leadResult;

      // Step 2: Create the inquiry record linked to the lead via /api/inquiries
      const inquiryResponse = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_id,
          inquiry_type: "Callback Request",
          message: `User requested a callback. Preferred Time: ${formData.preferredTime}`,
          preferred_time: formData.preferredTime,
        }),
      });

      const inquiryResult = await inquiryResponse.json();

      if (!inquiryResponse.ok) {
        const humanError = resolveApiError(
          inquiryResult?.code || String(inquiryResponse.status),
          inquiryResult?.error
        );
        setStatus("error");
        setErrorMessage(humanError);
        return;
      }

      setStatus("success");
      setFormData({ name: "", phone: "", preferredTime: "", consentGiven: false });

    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Network error. Please check your connection.";
      setStatus("error");
      setErrorMessage(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-slate-50 border-t-4 border-indigo-600 rounded-b-xl shadow-md"
    >
      <h3 className="text-xl font-bold text-slate-800 mb-4">Request a Callback</h3>

      {status === "success" && (
        <div className="mb-4 text-green-700 bg-green-100 p-2 rounded border border-green-200">
          We will call you soon!
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 text-red-700 bg-red-100 p-2 rounded border border-red-200">
          {errorMessage}
        </div>
      )}

      <div className="mb-3">
        <input
          required
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded"
        />
      </div>

      <div className="mb-3">
        <input
          required
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded"
        />
      </div>

      <div className="mb-4">
        <select
          required
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-slate-600"
        >
          <option value="">Select Preferred Time</option>
          <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
          <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
          <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="flex items-start text-xs text-slate-500">
          <input
            required
            type="checkbox"
            name="consentGiven"
            checked={formData.consentGiven}
            onChange={handleChange}
            className="mt-0.5 mr-2"
          />
          I agree to be contacted and accept the Data Privacy Terms.
        </label>
      </div>

      <button
        disabled={status === "submitting"}
        type="submit"
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded transition-opacity disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Request Callback"}
      </button>
    </form>
  );
}
