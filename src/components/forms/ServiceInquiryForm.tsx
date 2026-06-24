"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ServiceOption {
  id: string;
  name: string;
}

export default function ServiceInquiryForm() {
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    serviceId: "",
    message: "",
    consentGiven: false,
  });
  const [status, setStatus] = useState<"idle" | "loadingServices" | "submitting" | "success" | "error">("loadingServices");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase.from("services").select("id, name");
        if (error) throw error;
        setServices(data || []);
        setStatus("idle");
      } catch (err) {
        console.error("Error fetching services:", err);
        setStatus("idle"); 
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // @ts-ignore
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // 1. Create Lead First
      const { data: leadData, error: leadError } = await supabase.from("leads").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          lead_source: "Service Inquiry",
          consent_given: formData.consentGiven,
        }
      ]).select('id').single();

      if (leadError) throw leadError;

      // 2. Create Inquiry record
      const { error: inquiryError } = await supabase.from("inquiries").insert([
        {
          lead_id: leadData.id,
          service_id: formData.serviceId,
          message: formData.message,
          inquiry_type: "Service Specific",
        }
      ]);

      if (inquiryError) throw inquiryError;

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", serviceId: "", message: "", consentGiven: false });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit inquiry.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
       <h2 className="text-2xl font-bold text-gray-900 mb-6">Inquire About Our Services</h2>
       {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md border border-green-200">
          Your inquiry has been sent successfully.
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md border border-red-200">
          {errorMessage}
        </div>
      )}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
           <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
         </div>
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
           <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
         </div>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
         <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
         <select required name="serviceId" value={formData.serviceId} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
           <option value="">-- Choose a Service --</option>
           {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
         </select>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
         <textarea required name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
       </div>
       <div className="mb-6">
        <label className="flex items-start text-sm">
          <input required type="checkbox" name="consentGiven" checked={formData.consentGiven} onChange={handleChange} className="mt-1 mr-2" />
          <span className="text-gray-600">I consent to the collection and processing of my data in accordance with standard Data Privacy regulations.</span>
        </label>
       </div>
       <button disabled={status === "submitting" || status === "loadingServices"} type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md disabled:bg-indigo-300">
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
       </button>
    </form>
  );
}
