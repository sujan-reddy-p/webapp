import { FileText, Linkedin } from "lucide-react";

export function ContactLinks() {
  return (
    <div className="contact-links fixed right-4 top-4 z-[70] flex items-center gap-2 sm:right-7 sm:top-6" aria-label="Profile links">
      <a href="https://www.linkedin.com/in/sujan-reddy-p/" target="_blank" rel="noreferrer" data-cursor="OPEN" className="contact-link inline-flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-[11px] uppercase tracking-[.1em] shadow-xl backdrop-blur-xl sm:px-4">
        <Linkedin size={14} aria-hidden="true" /><span className="hidden sm:inline">LinkedIn</span><span className="sm:hidden">LI</span>
      </a>
      <a href="/resume.pdf" target="_blank" rel="noreferrer" data-cursor="OPEN" className="contact-link inline-flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-[11px] uppercase tracking-[.1em] shadow-xl backdrop-blur-xl sm:px-4">
        <FileText size={14} aria-hidden="true" />Resume
      </a>
    </div>
  );
}
