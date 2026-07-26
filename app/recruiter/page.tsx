import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Recruiter brief — Sujan",
  description: "A concise introduction to Sujan, an early-career software engineer.",
};

const focusAreas = [
  ["Product engineering", "Thoughtful interfaces, sturdy implementation, and the details between them."],
  ["Applied AI", "Exploring practical ways intelligent systems can make software more useful."],
  ["Creative prototyping", "Turning small, specific ideas into real experiences people can try."],
];

export default function RecruiterPage() {
  return (
    <main className="min-h-svh bg-[#f7f5f0] text-[#1c1c1a]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="/" className="text-sm font-semibold tracking-[-.04em]">SUJAN<span className="text-[#a5a199]">.WORK</span></a>
        <a href="/explore" className="group flex items-center gap-2 text-xs text-[#66625b] transition-colors hover:text-[#1c1c1a]">Explore the visual portfolio <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#777269]">A short introduction / for recruiters</p>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[.94] tracking-[-.075em] sm:text-6xl md:text-8xl">Hi, I’m {profile.name}. I’m an early-career engineer drawn to useful, well-made software.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5e5a54] md:text-xl">I care about the whole experience: a clear problem, a considered interface, and the engineering that lets it hold up. I’m building toward product-minded software and applied AI work.</p>
          </div>
          <aside className="self-end border-t border-[#d6d2ca] pt-5 md:col-span-3 md:col-start-10">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-[#545149]"><span className="size-2 rounded-full bg-[#c97738]" /> Open to early-career roles</div>
            <p className="mt-4 text-sm leading-relaxed text-[#66625b]">Interested in teams building products where technical care and user empathy both matter.</p>
          </aside>
        </div>

        <div className="mt-20 grid border-y border-[#d6d2ca] md:grid-cols-3">
          {focusAreas.map(([title, copy], index) => <article key={title} className={`min-h-[210px] py-7 md:px-7 md:py-8 ${index > 0 ? "border-t border-[#d6d2ca] md:border-l md:border-t-0" : ""}`}><span className="font-mono text-[10px] text-[#a36032]">0{index + 1}</span><h2 className="mt-10 text-xl tracking-[-.04em]">{title}</h2><p className="mt-3 max-w-xs text-sm leading-relaxed text-[#716d65]">{copy}</p></article>)}
        </div>

        <section className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-3"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#777269]">What I’m building now</p></div>
          <div className="md:col-span-8 md:col-start-5"><h2 className="max-w-3xl text-4xl leading-[.98] tracking-[-.065em] md:text-6xl">A focused body of work, built in public and getting stronger with every release.</h2><p className="mt-7 max-w-xl text-base leading-relaxed text-[#67635c]">This portfolio is intentionally evolving. Rather than filling it with polished placeholders, I’m using it to document real projects, the decisions behind them, and what I learned along the way.</p><a href="/explore#work" className="group mt-9 inline-flex items-center gap-3 text-sm font-medium"><span className="grid size-10 place-items-center rounded-full bg-[#1c1c1a] text-[#f7f5f0] transition-transform duration-300 group-hover:rotate-45"><ArrowDownRight size={16} /></span> See work in progress</a></div>
        </section>

        <section className="border-y border-[#d6d2ca] py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12"><div className="md:col-span-3"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#777269]">How I show up</p></div><div className="grid gap-8 md:col-span-8 md:col-start-5 md:grid-cols-2"><div><Sparkles size={18} className="text-[#a36032]" /><h2 className="mt-5 text-2xl tracking-[-.045em]">Curious enough to begin.</h2><p className="mt-3 text-sm leading-relaxed text-[#716d65]">I’m comfortable learning in public, asking useful questions, and getting from uncertainty to a working first version.</p></div><div><span className="font-mono text-base text-[#a36032]">↗</span><h2 className="mt-5 text-2xl tracking-[-.045em]">Careful enough to finish.</h2><p className="mt-3 text-sm leading-relaxed text-[#716d65]">I take the last ten percent seriously: clarity, responsiveness, accessibility, and the small choices people actually feel.</p></div></div></div>
        </section>

        <footer className="flex flex-col justify-between gap-6 py-10 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#777269]">Let’s connect</p><p className="mt-3 max-w-md text-sm leading-relaxed text-[#716d65]">The most useful next step is a conversation about the problems your team is trying to solve.</p></div><a href="https://github.com/sujan-reddy-p" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 self-start text-sm font-medium sm:self-auto"><span className="grid size-10 place-items-center rounded-full border border-[#c9c4bb] transition-colors group-hover:bg-[#1c1c1a] group-hover:text-[#f7f5f0]"><Github size={16} /></span> GitHub <ArrowUpRight size={15} /></a></footer>
      </section>
    </main>
  );
}
