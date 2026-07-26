"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Compass } from "lucide-react";

const paths = [
  {
    eyebrow: "The fast path",
    title: "I’m a recruiter",
    copy: "A clear, concise view of what Sujan builds, how he thinks, and where to begin.",
    href: "/recruiter",
    icon: BriefcaseBusiness,
    className: "bg-[#f4f0e9] text-[#171716]",
    detailClassName: "text-[#5e5a54]",
  },
  {
    eyebrow: "The scenic route",
    title: "I’m here to explore",
    copy: "Step into a more visual collection of experiments, ideas, and work in progress.",
    href: "/explore",
    icon: Compass,
    className: "bg-[#17191f] text-[#f5f1ea]",
    detailClassName: "text-[#a9abb0]",
  },
];

export function AudienceGate() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#101115] px-5 py-5 text-[#f5f1ea] sm:px-8 sm:py-8">
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_14%_7%,rgba(245,217,175,.16),transparent_26%),radial-gradient(circle_at_84%_88%,rgba(104,119,174,.2),transparent_31%)]" />
      <div className="relative mx-auto flex min-h-[calc(100svh-40px)] max-w-[1440px] flex-col border border-white/10 p-6 sm:min-h-[calc(100svh-64px)] sm:p-9 lg:p-12">
        <header className="flex items-center justify-between">
          <a href="/" className="text-sm font-medium tracking-[-.03em]">SUJAN<span className="text-white/35">.WORK</span></a>
          <span className="font-mono text-[10px] uppercase tracking-[.16em] text-white/45">Choose your path</span>
        </header>

        <section className="my-auto py-16 sm:py-20 lg:py-24">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="font-mono text-[10px] uppercase tracking-[.16em] text-[#f1c58f]">Welcome in</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05 }} className="mt-5 max-w-4xl text-5xl leading-[.92] tracking-[-.075em] sm:text-7xl lg:text-8xl">There’s more than one way to get to know my work.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-7 max-w-xl text-base leading-relaxed text-white/62">Choose the version that is most useful to you. Both lead to the same person; they simply begin from a different place.</motion.p>

          <div className="mt-12 grid gap-3 lg:mt-16 lg:grid-cols-2">
            {paths.map((path, index) => {
              const Icon = path.icon;
              return (
                <motion.a
                  key={path.title}
                  href={path.href}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 + index * 0.08 }}
                  className={`group relative min-h-[250px] overflow-hidden p-6 transition-transform duration-500 hover:-translate-y-1 sm:min-h-[290px] sm:p-8 ${path.className}`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`font-mono text-[10px] uppercase tracking-[.15em] ${path.detailClassName}`}>{path.eyebrow}</span>
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h2 className="text-3xl tracking-[-.055em] sm:text-4xl">{path.title}</h2>
                        <p className={`mt-3 max-w-sm text-sm leading-relaxed ${path.detailClassName}`}>{path.copy}</p>
                      </div>
                      <span className="mb-1 grid size-10 shrink-0 place-items-center rounded-full border border-current/20 transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight size={17} /></span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[.14em] text-white/38">
          <span>Early-career engineer / 2026</span>
          <span>Designed to be read, not decoded.</span>
        </footer>
      </div>
    </main>
  );
}
