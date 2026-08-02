"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = { number: string; title: string; tag: string; description: string; accent: string; className?: string };

export function ProjectCard({ number, title, tag, description, accent, className = "" }: ProjectCardProps) {
  return <motion.article whileHover="hover" className={`group relative overflow-hidden border border-white/15 bg-[#101011] p-5 md:p-7 ${className}`}>
    <motion.div variants={{ hover: { scale: 1.04 } }} transition={{ duration: .6, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 78% 20%, ${accent}, transparent 36%)` }} />
    <div className="relative flex h-full min-h-[250px] flex-col justify-between">
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] text-[#c0bbb3]">{number}</span>
        <motion.div variants={{ hover: { rotate: 45, backgroundColor: "#c9ff3f", color: "#09090b" } }} className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors"><ArrowUpRight size={16} /></motion.div>
      </div>
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[.1em] text-lime">{tag}</p>
        <h3 className="text-2xl font-medium tracking-[-.04em] md:text-3xl">{title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#a6a6a0]">{description}</p>
      </div>
    </div>
  </motion.article>;
}
