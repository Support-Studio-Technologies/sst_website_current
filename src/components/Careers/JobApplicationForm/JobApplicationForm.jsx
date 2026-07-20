"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import dropdownIcon from "@/assets/career/icons/dropdown.svg";
import uploadIcon from "@/assets/career/icons/upload.svg";

const inputClass =
    "w-full h-9 bg-[#f3f3f5] rounded-lg px-3 text-sm text-slate-900 placeholder:text-[#717182] border-0 outline-none focus:ring-2 focus:ring-blue-500/30 transition-shadow";

const textareaClass =
    "w-full min-h-16 bg-[#f3f3f5] rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-[#717182] border-0 outline-none focus:ring-2 focus:ring-blue-500/30 transition-shadow resize-none";

const labelClass = "block text-sm font-medium text-[#0a0a0a] mb-2";

function Field({ label, required, className, ...props }) {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={props.id} className={labelClass}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input {...props} required={required} className={inputClass} />
        </div>
    );
}

function TextareaField({ label, required, className, ...props }) {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={props.id} className={labelClass}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <textarea {...props} required={required} className={textareaClass} />
        </div>
    );
}

function SelectField({ label, required, className, options, placeholder, ...props }) {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={props.id} className={labelClass}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                <select {...props} required={required} className={`${inputClass} appearance-none pr-9 cursor-pointer`}>
                    <option value="" disabled>
                        {placeholder || "Select an option"}
                    </option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <Image
                    src={dropdownIcon}
                    alt=""
                    width={16}
                    height={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
            </div>
        </div>
    );
}

function Card({ title, description, children }) {
    return (
        <div className="bg-white border border-black/10 rounded-[14px]">
            <div className="px-6 pt-6 pb-2">
                <h3 className="text-base font-medium text-[#0a0a0a]">{title}</h3>
                {description && <p className="text-sm text-[#717182] mt-1">{description}</p>}
            </div>
            <div className="px-6 pb-6 pt-4 space-y-4">{children}</div>
        </div>
    );
}

const EXPERIENCE_LEVELS = ["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"];
const START_DATE_OPTIONS = ["Immediate", "Within 2 weeks", "Within 1 month", "More than 1 month"];
const SOURCE_OPTIONS = ["LinkedIn", "Indeed", "Company Website", "Employee Referral", "Job Fair", "Other"];

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    position: "",
    experience: "",
    jobTitle: "",
    employer: "",
    keySkills: "",
    coverLetter: "",
    startDate: "",
    currentSalary: "",
    expectedSalary: "",
    linkedin: "",
    portfolio: "",
    refName: "",
    refRelationship: "",
    refEmail: "",
    refPhone: "",
    hearAbout: "",
};

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

export default function JobApplicationForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeError, setResumeError] = useState("");
    const [status, setStatus] = useState("idle");
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleResumeSelect = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const isValidType = /\.(pdf|doc|docx)$/i.test(file.name);
        if (!isValidType) {
            setResumeError("Please upload a PDF or Word document.");
            setResumeFile(null);
            return;
        }
        if (file.size > MAX_RESUME_SIZE) {
            setResumeError("File is too large. Maximum size is 5MB.");
            setResumeFile(null);
            return;
        }

        setResumeError("");
        setResumeFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!resumeFile) {
            setResumeError("Resume/CV is required.");
            return;
        }

        setStatus("submitting");

        // Front-end only for now — no backend endpoint has been wired up yet.
        setTimeout(() => {
            setStatus("success");
        }, 600);
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                role="alert"
                aria-live="polite"
                className="max-w-4xl mx-auto text-center"
            >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-9 h-9" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Application Submitted</h2>
                <p className="text-slate-500 max-w-md mx-auto">
                    Thank you for applying. Our HR team will review your application and reach out if there&apos;s a match.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="max-w-[60rem] mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-medium text-[#101828]">Job Application Form</h1>
                <p className="text-[#4a5565] mt-2">Please fill out all required fields to submit your application</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Card title="Personal Information" description="Please provide your contact details">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="firstName" name="firstName" label="First Name" required placeholder="John" value={formData.firstName} onChange={handleChange} autoComplete="given-name" />
                        <Field id="lastName" name="lastName" label="Last Name" required placeholder="Doe" value={formData.lastName} onChange={handleChange} autoComplete="family-name" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="email" name="email" type="email" label="Email Address" required placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} autoComplete="email" />
                        <Field id="phone" name="phone" type="tel" label="Phone Number" required placeholder="+1 (555) 123-4567" value={formData.phone} onChange={handleChange} autoComplete="tel" />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="addressLine1" className={labelClass}>
                            Street Address <span className="text-red-500">*</span>
                        </label>
                        <input id="addressLine1" name="addressLine1" required placeholder="Address line 1" value={formData.addressLine1} onChange={handleChange} autoComplete="address-line1" className={inputClass} />
                        <input id="addressLine2" name="addressLine2" placeholder="Address line 2 (optional)" value={formData.addressLine2} onChange={handleChange} autoComplete="address-line2" className={inputClass} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="city" name="city" label="City" required placeholder="New York" value={formData.city} onChange={handleChange} autoComplete="address-level2" />
                        <Field id="state" name="state" label="State/Province" required placeholder="NY" value={formData.state} onChange={handleChange} autoComplete="address-level1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="zip" name="zip" label="ZIP/Postal Code" required placeholder="10001" value={formData.zip} onChange={handleChange} autoComplete="postal-code" />
                        <Field id="country" name="country" label="Country" required placeholder="United States" value={formData.country} onChange={handleChange} autoComplete="country-name" />
                    </div>
                </Card>

                <Card title="Professional Information" description="Tell us about your work experience">
                    <Field id="position" name="position" label="Position Applying For" required placeholder="e.g., Software Engineer, Marketing Manager" value={formData.position} onChange={handleChange} />
                    <SelectField id="experience" name="experience" label="Years of Experience" required placeholder="Select experience level" options={EXPERIENCE_LEVELS} value={formData.experience} onChange={handleChange} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="jobTitle" name="jobTitle" label="Current Job Title" placeholder="Senior Developer" value={formData.jobTitle} onChange={handleChange} />
                        <Field id="employer" name="employer" label="Current Employer" placeholder="Tech Corp Inc." value={formData.employer} onChange={handleChange} />
                    </div>
                </Card>

                <Card title="Resume & Cover Letter" description="Upload your resume and write a cover letter">
                    <div>
                        <label className={labelClass}>
                            Resume/CV <span className="text-red-500">*</span>
                        </label>
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full border-2 border-dashed border-[#d1d5dc] hover:border-blue-400 rounded-[10px] p-6 flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                            <Image src={uploadIcon} alt="" width={32} height={32} />
                            <span className="text-sm text-[#4a5565] text-center">
                                {resumeFile ? resumeFile.name : "Click to upload resume (PDF or Word, max 5MB)"}
                            </span>
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeSelect}
                            className="hidden"
                        />
                        {resumeError && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
                                <AlertCircle className="w-4 h-4" aria-hidden="true" /> {resumeError}
                            </p>
                        )}
                    </div>
                    <TextareaField id="keySkills" name="keySkills" label="Key Skills" required rows={3} placeholder="List your relevant skills separated by commas (e.g., JavaScript, React, Node.js, Project Management)" value={formData.keySkills} onChange={handleChange} />
                    <TextareaField id="coverLetter" name="coverLetter" label="Cover Letter" rows={3} placeholder="Write a brief cover letter explaining why you're a good fit for this position..." value={formData.coverLetter} onChange={handleChange} />
                </Card>

                <Card title="Availability & Additional Information" description="When can you start and other details">
                    <div className="max-w-[calc(50%-8px)]">
                        <SelectField id="startDate" name="startDate" label="Available Start Date" required placeholder="Select availability" options={START_DATE_OPTIONS} value={formData.startDate} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="currentSalary" name="currentSalary" label="Current Salary (Annual)" placeholder="$80,000" value={formData.currentSalary} onChange={handleChange} />
                        <Field id="expectedSalary" name="expectedSalary" label="Expected Salary (Annual)" placeholder="$80,000" value={formData.expectedSalary} onChange={handleChange} />
                    </div>
                    <Field id="linkedin" name="linkedin" type="url" label="LinkedIn Profile URL" placeholder="https://linkedin.com/in/yourprofile" value={formData.linkedin} onChange={handleChange} />
                    <Field id="portfolio" name="portfolio" type="url" label="Portfolio/Website URL" placeholder="https://yourportfolio.com" value={formData.portfolio} onChange={handleChange} />
                </Card>

                <Card title="Professional Reference" description="Provide at least one professional reference">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="refName" name="refName" label="Reference Full Name" placeholder="Jane Smith" value={formData.refName} onChange={handleChange} />
                        <Field id="refRelationship" name="refRelationship" label="Relationship" placeholder="Former Manager" value={formData.refRelationship} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field id="refEmail" name="refEmail" type="email" label="Reference Email" placeholder="jane.smith@company.com" value={formData.refEmail} onChange={handleChange} />
                        <Field id="refPhone" name="refPhone" type="tel" label="Reference Phone" placeholder="+1 (555) 987-6543" value={formData.refPhone} onChange={handleChange} />
                    </div>
                </Card>

                <Card title="Where did you hear about this opportunity?">
                    <div className="max-w-[calc(50%-8px)]">
                        <SelectField id="hearAbout" name="hearAbout" label="" placeholder="Select an option" options={SOURCE_OPTIONS} value={formData.hearAbout} onChange={handleChange} />
                    </div>
                </Card>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="bg-[#030213] hover:bg-black text-white text-sm font-medium rounded-lg h-[45px] min-w-[200px] px-6 flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                    >
                        {status === "submitting" ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Submitting...
                            </>
                        ) : (
                            "Submit Application"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
