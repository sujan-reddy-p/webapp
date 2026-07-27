"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, X } from "lucide-react";
import { useState } from "react";

export function RecruiterCta() {
  const [open, setOpen] = useState(false);

  return (
    <section className="recruiter-cta relative overflow-hidden border-y px-6 py-10 sm:px-9 sm:py-12">
      <div className="pointer-events-none absolute -right-12 -top-24 size-72 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
      <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
        <div>
          <p className="section-kicker">A useful next step</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.02] tracking-[-.055em] sm:text-5xl">Could I be useful to your team?</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">One click will eventually open a short, low-friction way to reach me about a role. The contact details will be connected when you provide them.</p>
        </div>
        <button type="button" onClick={() => setOpen(!open)} data-cursor="OPEN" className="primary-action group inline-flex min-h-12 shrink-0 items-center justify-between gap-8 self-start rounded-full px-5 text-sm font-medium lg:self-auto">
          Start a conversation
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-10 grid gap-5 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
              <Placeholder label="Email" value="[Add your email address]" />
              <Placeholder label="Preferred channel" value="[Email / LinkedIn / phone]" />
              <Placeholder label="Scheduling" value="[Add a calendar link]" />
              <button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 grid size-8 place-items-center rounded-full border border-[var(--line)]" aria-label="Close contact details"><X size={13} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Placeholder({ label, value }: { label: string; value: string }) {
  return <div><p className="font-mono text-[9px] uppercase tracking-[.14em] text-[var(--faint)]">{label}</p><p className="mt-2 flex items-center gap-2 text-sm text-[var(--muted)]"><Mail size={13} className="text-[var(--accent)]" />{value}</p></div>;
}
