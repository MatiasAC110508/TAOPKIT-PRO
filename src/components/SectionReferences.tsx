"use client";

import { BookOpen, ExternalLink } from "lucide-react";

type SectionReference = {
  label: string;
  href?: string;
};

type SectionReferencesProps = {
  title?: string;
  references: SectionReference[];
  className?: string;
};

export default function SectionReferences({
  title = "Fuentes usadas en esta parte",
  references,
  className = "",
}: SectionReferencesProps) {
  return (
    <div className={`mt-8 min-w-0 rounded-2xl border border-white/5 bg-white/[0.03] p-4 md:p-5 ${className}`}>
      <div className="mb-3 flex min-w-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
        <BookOpen className="h-4 w-4" />
        <span className="min-w-0 break-words">{title}</span>
      </div>
      <div className="min-w-0 space-y-2">
        {references.map((ref) =>
          ref.href ? (
            <a
              key={ref.label}
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-start gap-2 text-xs leading-relaxed text-teal-100/60 transition-colors hover:text-teal-100"
            >
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-400/70" />
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">{ref.label}</span>
            </a>
          ) : (
            <p key={ref.label} className="flex min-w-0 items-start gap-2 text-xs leading-relaxed text-teal-100/60">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/70" />
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">{ref.label}</span>
            </p>
          )
        )}
      </div>
    </div>
  );
}
