"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Stat = { value: string; label: string };

export default function PageHero({
  crumb,
  eyebrow,
  title,
  accent,
  description,
  actions,
  visualTone = "navy",
  visualKicker,
  visualBody,
  photoSrc,
  photoAlt,
  photoPosition,
  stats,
}: {
  crumb: string;
  eyebrow: React.ReactNode;
  title: string;
  accent: string;
  description: React.ReactNode;
  actions?: React.ReactNode;
  visualTone?: "navy" | "light";
  visualKicker?: string;
  visualBody?: string;
  photoSrc?: string;
  photoAlt?: string;
  photoPosition?: string;
  stats?: Stat[];
}) {
  const isNavy = visualTone === "navy";

  return (
    <section className="pt-28 pb-16 sm:pb-20 px-5 sm:px-6 lg:px-8 bg-solar-subtle border-b border-solar-border relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-amber/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-solar-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-solar-muted mb-6">
          <Link href="/" className="hover:text-solar-navy transition-colors">
            Home
          </Link>
          <span className="text-solar-border">/</span>
          <span className="text-solar-navy font-semibold">{crumb}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl">
            {/* Clean accent line eyebrow instead of pill */}
            <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-solar-amber mb-4">
              <span className="w-6 h-0.5 bg-solar-amber rounded-full" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-display font-extrabold text-solar-navy leading-[1.15] mb-5 tracking-tight">
              {title} <span className="text-solar-amber">{accent}</span>
            </h1>

            <div className="text-solar-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-sans">
              {description}
            </div>

            {actions ? (
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                {actions}
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-[440px] aspect-[4/3] rounded-2xl overflow-hidden border border-solar-border shadow-lg ${
                isNavy ? "bg-solar-navy" : "bg-white"
              }`}
            >
              {photoSrc ? (
                <Image
                  src={photoSrc}
                  alt={photoAlt || "Solar installation"}
                  fill
                  className="object-cover"
                  style={{ objectPosition: photoPosition || "center" }}
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-solar-navy to-solar-deep" />
              )}

              {photoSrc && (
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/85 via-solar-deep/30 to-transparent" />
              )}

              <div className="absolute inset-0 p-5 flex flex-col justify-end gap-3 z-10">
                {stats && stats.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2.5 w-full">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="bg-solar-deep/80 border border-white/10 rounded-xl p-3 text-white backdrop-blur-md"
                      >
                        <p className="text-xl sm:text-2xl font-display font-extrabold text-solar-amber">
                          {s.value}
                        </p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : visualKicker ? (
                  <div className="bg-solar-deep/85 border border-white/10 rounded-xl p-4 text-white backdrop-blur-md w-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-solar-amber mb-1">
                      {visualKicker}
                    </p>
                    <p className="text-sm text-slate-200">
                      {visualBody}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
