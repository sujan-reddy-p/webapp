"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, X } from "lucide-react";
import { useState } from "react";

export function RecruiterCta() {
  const [open, setOpen] = useState(false);

  return (
    <section className="recruiter-cta relative overflow-hidden border px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
      <div className="pointer-events-none absolute -right-16 -top-28 size-80 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />
      <div className="cta-layout relative">
        <div className="cta-copy">
          <p className="section-kicker">Let&apos;s make something useful</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[.92] tracking-[-.065em] sm:text-5xl lg:text-6xl">Could I be of help to your team?</h2>
          <p className="body-copy mt-6 text-base">I&apos;m looking for a team where care for the product and care for the implementation go together. If that sounds familiar, I&apos;d love to talk.</p>
        </div>
        <div className="cta-action-panel">
          <p className="cta-status"><span /> Open to a conversation</p>
          <button type="button" onClick={() => setOpen(!open)} data-cursor="OPEN" className="cta-button group">
            Start a conversation
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
          </button>
          <p className="cta-note">Email · LinkedIn · Calendar</p>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-10 grid gap-5 border-t border-[var(--line)] pt-7 sm:grid-cols-3">
              <Placeholder label="Email" value="sujanreddy.rp@gmail.com" href="mailto:sujanreddy.rp@gmail.com" />
              <Placeholder label="LinkedIn" value="Connect with Sujan" href="https://www.linkedin.com/in/sujan-reddy-p/" />
              <Placeholder label="Scheduling" value="Calendar link coming soon" />
              <button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 grid size-8 place-items-center rounded-full border border-[var(--line)]" aria-label="Close contact details"><X size={13} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Placeholder({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = <><Mail size={13} className="text-[var(--accent)]" />{value}</>;
  return <div><p className="section-kicker">{label}</p>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="mt-2 flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--site-text)]">{content}</a> : <p className="mt-2 flex items-center gap-2 text-sm text-[var(--muted)]">{content}</p>}</div>;
}
