"use client";

import Image from "next/image";
import authors from "@/components/blog/AuthorData";

export default function AuthorSection() {
    return (
        <section className="py-20">
            <div className="text-center mb-12">

                <h2 className="text-4xl font-bold mt-2">
                    Meet Our Authors
                </h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                    Our experts share practical insights on AI, ERP, CRM,
                    cloud technologies, and digital transformation.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:mx-6 gap-8">
                {authors.map((author) => (
                    <div
                        key={author.id}
                        className="rounded-3xl border border-slate-200 bg-white p-6 text-center hover:shadow-xl transition"
                    >
                        <Image
                            src={author.image}
                            alt={author.name}
                            width={90}
                            height={90}
                            className="rounded-full mx-auto object-cover"
                        />

                        <h3 className="mt-5 text-xl font-bold">
                            {author.name}
                        </h3>

                        <p className="text-blue-600 text-sm font-medium mt-1">
                            {author.role}
                        </p>

                        <p className="mt-4 text-sm text-slate-600">
                            {author.bio}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}