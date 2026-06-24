"use client";
import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          first_name: "Subscriber",
          last_name: "Subscriber",
          email: email,
          lead_source: "Newsletter Form",
          consent_given: consentGiven,
          status: "New"
        }
      ]);

      if (error) throw error;

      setStatus("success");
      setEmail("");
      setConsentGiven(false);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Subscription failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      {status === 'success' && <p className="text-green-400 text-sm mb-2">Successfully subscribed!</p>}
      {status === 'error' && <p className="text-red-400 text-sm mb-2">{errorMessage}</p>}
      <div className="flex gap-2">
        <input 
          required 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-400"
        />
        <button 
          disabled={status === "submitting"} 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r transition-colors disabled:opacity-50 font-medium"
        >
          {status === "submitting" ? "..." : "Subscribe"}
        </button>
      </div>
      <div className="mt-3 flex items-start">
        <input 
          required 
          id="newsletterConsent" 
          type="checkbox" 
          checked={consentGiven} 
          onChange={(e) => setConsentGiven(e.target.checked)} 
          className="mt-1 flex-shrink-0 border-gray-700"
        />
        <label htmlFor="newsletterConsent" className="ml-2 text-xs text-gray-400">
          I consent to receive marketing emails and agree to the GDPR / PDPL compliant privacy policy.
        </label>
      </div>
    </form>
  );
}
