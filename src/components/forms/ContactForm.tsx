"use client";
import { useState, ChangeEvent, FormEvent } from "react";

// Translates Supabase/Postgres error codes to user-facing messages
function resolveApiError(code?: string, fallback?: string): string {
  const errorMap: Record<string, string> = {
    '23505': 'This email address has already been registered.',
    '23503': 'Submission failed due to a data reference error. Please contact support.',
    '23514': 'The email address format provided is invalid.',
    '42501': 'Permission denied. Please check your submission and try again.',
  };
  if (code && errorMap[code]) return errorMap[code];
  return fallback || 'An unexpected error occurred. Please try again later.';
}

interface ContactFormPayload {
  first_name: string;
  last_name: string;
  email: string;
  company_size: string | null;
  problem_summary: string;
  lead_source: string;
  consent_given: boolean;
  // UTM fields forwarded from document location (populated at submission time)
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer_url: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companySize: "",
    problemSummary: "",
    consentGiven: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Extract UTM parameters from current browser URL at submission time
    const urlParams = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );

    const payload: ContactFormPayload = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      company_size: formData.companySize.trim() === "" ? null : formData.companySize,
      problem_summary: formData.problemSummary.trim(),
      lead_source: "Contact Form",
      consent_given: formData.consentGiven,
      utm_source: urlParams.get("utm_source"),
      utm_medium: urlParams.get("utm_medium"),
      utm_campaign: urlParams.get("utm_campaign"),
      referrer_url: typeof document !== "undefined" ? document.referrer || null : null,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        const humanError = resolveApiError(result?.code, result?.error);
        setStatus("error");
        setErrorMessage(humanError);
        return;
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companySize: "",
        problemSummary: "",
        consentGiven: false,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error. Please check your connection.";
      setStatus("error");
      setErrorMessage(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Enterprise Sales</h2>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md border border-green-200">
          Thank you! We have received your contact request and will be in touch shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md border border-red-200">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            required
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            required
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Business Email *
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
          Company Size
        </label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
          <option value="">Select company size...</option>
          <option value="1-50">1-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-1000">201-1000 employees</option>
          <option value="1000+">1000+ employees</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="problemSummary" className="block text-sm font-medium text-gray-700 mb-1">
          How can we help? *
        </label>
        <textarea
          required
          id="problemSummary"
          name="problemSummary"
          rows={4}
          value={formData.problemSummary}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-8">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              required
              id="consentGiven"
              name="consentGiven"
              type="checkbox"
              checked={formData.consentGiven}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consentGiven" className="font-medium text-gray-700">
              Privacy & Consent *
            </label>
            <p className="text-gray-500 text-xs mt-1">
              I consent to Support Studio Technologies processing my personal data in accordance
              with the Data Privacy Law. I understand I can withdraw my consent at any time.
            </p>
          </div>
        </div>
      </div>

      <button
        disabled={status === "submitting"}
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors disabled:bg-blue-300"
      >
        {status === "submitting" ? "Submitting..." : "Send Request"}
      </button>
    </form>
  );
}
