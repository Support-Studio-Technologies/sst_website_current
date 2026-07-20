"use client";

import Link from "next/link";
import Image from "next/image";
import locationIcon from "@/assets/career/icons/location.svg";
import modeOfWorkIcon from "@/assets/career/icons/mode of work.svg";
import typeOfWorkIcon from "@/assets/career/icons/type of work.svg";
import applicantsIcon from "@/assets/career/icons/applicants.svg";
import shareIcon from "@/assets/career/icons/share.svg";
import menuIcon from "@/assets/career/icons/menu.svg";
import viewJobDetailsIcon from "@/assets/career/icons/view job details.svg";

function MetaItem({ icon, label }) {
    return (
        <span className="inline-flex items-center gap-1.5 text-sm text-[#4a5565]">
            <Image src={icon} alt="" width={16} height={16} />
            {label}
        </span>
    );
}

function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-lg bg-[#eceef2] px-2.5 py-1 text-xs font-medium text-[#030213]">
            {children}
        </span>
    );
}

function BulletList({ items }) {
    return (
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item} className="flex gap-2 text-base leading-6 text-[#364153]">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function IconButton({ icon, label, onClick }) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white text-[#0a0a0a] transition-colors hover:bg-slate-50"
        >
            <Image src={icon} alt="" width={16} height={16} />
        </button>
    );
}

export default function JobDescription({ job, otherJobs = [] }) {
    const handleShare = () => {
        if (typeof window === "undefined") return;
        if (navigator.share) {
            navigator.share({ title: job.title, url: window.location.href }).catch(() => {});
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <div className="max-w-5xl mx-auto ml-2.5 space-y-4">
            {/* Job Details Card */}
            <div className="bg-white border border-black/10 rounded-[14px] p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex gap-4">
                        <div className="border-l-5 border-[#2d8ec5] pl-4">
                            <h1 className="text-base font-semibold text-[#0a0a0a]">{job.title}</h1>
                            <p className="text-base text-[#4a5565] mt-1">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                                <MetaItem icon={locationIcon} label={job.location} />
                                <span className="text-[#4a5565] text-sm">•</span>
                                <MetaItem icon={modeOfWorkIcon} label={job.modeOfWork} />
                                <span className="text-[#4a5565] text-sm">•</span>
                                <MetaItem icon={typeOfWorkIcon} label={job.typeOfWork} />
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-sm text-[#6a7282]">
                                <Image src={applicantsIcon} alt="" width={16} height={16} />
                                <span>{job.applicants} applicants</span>
                                <span>•</span>
                                <span>{job.postedAgo}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <Badge>{job.experienceLevel}</Badge>
                                <Badge>{job.typeOfWork}</Badge>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 self-start">
                        <IconButton icon={shareIcon} label="Share this job" onClick={handleShare} />
                        <IconButton icon={menuIcon} label="More options" />
                    </div>
                </div>

                <div className="border-t border-black/10 mt-6 pt-6 pl-5 pr-9 space-y-6">
                    <div>
                        <h2 className="text-xl font-medium text-[#0a0a0a] mb-2">About the job</h2>
                        <p className="text-base leading-6 text-[#364153]">{job.aboutJob}</p>
                    </div>

                    <div>
                        <h3 className="text-base font-medium text-[#0a0a0a] mb-2">Responsibilities</h3>
                        <BulletList items={job.responsibilities} />
                    </div>

                    <div>
                        <h3 className="text-base font-medium text-[#0a0a0a] mb-2">Qualifications</h3>
                        <BulletList items={job.qualifications} />
                    </div>
                </div>
            </div>

            {/* Instant Apply Card */}
            <div className="bg-white border border-black/10 rounded-[14px] p-5 sm:p-6">
                <h3 className="text-base font-medium text-[#0a0a0a]">Instant Apply</h3>
                <p className="text-sm text-[#4a5565] mt-1">Apply with one tap using your saved profile</p>

                <div className="border-t border-black/10 mt-4 pt-4">
                    <div className="bg-[#eff6ff] border border-[#bedbff] rounded-[10px] px-3.5 py-3">
                        <p className="text-xs leading-4 text-[#1c398e]">
                            <span className="font-bold">How Instant Apply works:</span> Upload your resume to apply in
                            seconds. We&apos;ll review your profile and contact you if there&apos;s a suitable
                            opportunity.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <Link
                            href="/careers/apply"
                            className="w-full h-10 rounded-lg bg-[#030213] text-white text-sm font-medium flex items-center justify-center transition-colors hover:bg-black"
                        >
                            Upload your Resume
                        </Link>
                        <Link
                            href="/careers/apply"
                            className="w-full h-9 rounded-lg border border-black/10 bg-white text-[#0a0a0a] text-sm font-medium flex items-center justify-center transition-colors hover:bg-slate-50"
                        >
                            Apply for This Job
                        </Link>
                    </div>
                </div>
            </div>

            {/* View More Jobs Card */}
            {otherJobs.length > 0 && (
                <div className="bg-white border border-black/10 rounded-[14px] p-5 sm:p-6">
                    <h4 className="text-base font-medium text-[#0a0a0a] mb-3">View More Jobs</h4>
                    <div className="space-y-4">
                        {otherJobs.map((other) => (
                            <div
                                key={other.slug}
                                className="flex items-center justify-between gap-4 border-l-4 border-[#2d8ec5] px-3 py-3"
                            >
                                <div>
                                    <p className="text-sm text-[#5c5c5c]">{other.title}</p>
                                    <p className="text-xs font-light text-[#5c5c5c] mt-0.5">
                                        {other.location} | {other.typeOfWork} | Experience: {other.experienceLevel}
                                    </p>
                                </div>
                                <Link
                                    href={`/careers/${other.slug}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#7f7f7f] px-3 py-1.5 text-xs text-[#2d8ec5] whitespace-nowrap transition-colors hover:bg-slate-50"
                                >
                                    View Job Details
                                    <Image src={viewJobDetailsIcon} alt="" width={8} height={8} />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/careers"
                        className="mt-4 w-full h-9 rounded-lg border border-black/10 bg-white text-[#0a0a0a] text-sm font-medium flex items-center justify-center transition-colors hover:bg-slate-50"
                    >
                        View More Jobs
                    </Link>
                </div>
            )}
        </div>
    );
}
