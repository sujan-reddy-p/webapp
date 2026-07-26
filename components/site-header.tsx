"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["Work", "About"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 text-sm font-medium tracking-tight" aria-label="Sujan home">
          <span className="grid size-7 place-items-center rounded-full bg-paper text-xs font-bold text-ink transition-transform duration-300 group-hover:rotate-12">S</span>
          <span>SUJAN<span className="text-[#84847e]">.WORK</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-[#b6b6b1] transition-colors hover:text-paper">{link}</a>)}
          <a href="#contact" className="flex items-center gap-1 text-xs text-paper transition-colors hover:text-lime">Get in touch <ArrowUpRight size={13} /></a>
        </nav>
        <button onClick={() => setOpen(!open)} className="grid size-9 place-items-center rounded-full border border-white/15 md:hidden" aria-label="Toggle navigation">
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-3 max-w-[1600px] border border-white/10 bg-[#151515] p-4 md:hidden">
          {links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block border-b border-white/10 py-4 text-lg last:border-0">{link}</a>)}
          <a onClick={() => setOpen(false)} href="#contact" className="block pt-4 text-lg text-lime">Get in touch ↗</a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
