import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { profile, projects } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { VoxelHero } from "@/components/voxel-hero";

const principles = [
  ["01", "Useful before novel", "Start with a problem worth caring about."],
  ["02", "Built to be explored", "Make complex ideas feel intuitive."],
  ["03", "Details carry weight", "Treat performance, accessibility, and polish as product work."],
];

export function PortfolioExperience() {
  const hasProjects = projects.length > 0;

  return (
    <main id="top" className="page-grid relative overflow-hidden bg-ink">
      <div className="noise" />
      <SiteHeader />

      <VoxelHero name={profile.name} role={profile.role} />

      <section id="work" className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="grid gap-8 border-b border-white/15 pb-6 md:grid-cols-12 md:items-end"><div className="md:col-span-7"><p className="eyebrow mb-4">Selected work</p><h2 className="max-w-xl text-4xl leading-[.93] tracking-[-.065em] md:text-6xl">A small collection, built with intent.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#9c9c96] md:col-span-3 md:col-start-10">Each project here will include a live demo, the engineering story, and the decisions behind it.</p></Reveal>

        {hasProjects ? <div className="mt-4 grid gap-4 md:grid-cols-2">{projects.map((project) => <a key={project.slug} href={project.href ?? "#"} className="group relative min-h-[380px] overflow-hidden border border-white/15 bg-[#101011] p-6 transition-colors hover:border-lime"><div className="absolute inset-0 opacity-50 transition-transform duration-500 group-hover:scale-110" style={{ background: `radial-gradient(circle at 80% 20%, ${project.accent}, transparent 44%)` }} /><div className="relative flex h-full flex-col justify-between"><div className="flex items-start justify-between"><span className="font-mono text-[10px] text-[#9b9b95]">{project.year}</span><ArrowUpRight size={18} /></div><div><p className="mb-3 font-mono text-[10px] uppercase tracking-[.13em] text-lime">{project.tags.join(" / ")}</p><h3 className="text-3xl tracking-[-.055em]">{project.title}</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-[#a7a7a1]">{project.summary}</p></div></div></a>)}</div> : <Reveal delay={0.1} className="mt-4"><div className="grid min-h-[420px] overflow-hidden border border-white/15 bg-[#101011] md:grid-cols-12"><div className="relative flex flex-col justify-between p-6 md:col-span-7 md:p-8"><div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 72% 32%, rgba(201,255,63,.16), transparent 34%), radial-gradient(circle at 90% 70%, rgba(98,112,255,.2), transparent 30%)" }} /><div className="relative flex items-center justify-between"><span className="eyebrow text-lime">Project 01 / In progress</span><span className="flex size-9 items-center justify-center rounded-full border border-white/15"><Sparkles size={16} /></span></div><div className="relative"><p className="mb-5 max-w-lg text-3xl leading-[.98] tracking-[-.055em] md:text-5xl">The first project deserves more than a placeholder.</p><p className="max-w-sm text-sm leading-relaxed text-[#aaa9a3]">This space is reserved for a future flagship project: something useful, interactive, and deeply considered.</p></div></div><div className="border-t border-white/15 bg-[#0c0c0d] p-6 md:col-span-5 md:border-l md:border-t-0 md:p-8"><p className="eyebrow">What you&apos;ll find here</p><div className="mt-12 space-y-6">{[[Code2, "A working product", "Not a concept mockup or static screen."], [Layers3, "The engineering story", "Architecture, tradeoffs, and what changed along the way."], [ArrowUpRight, "A path to inspect", "Live demo, source code, and a concise case study."]].map(([Icon, title, copy]) => { const IconComponent = Icon as typeof Code2; return <div key={title as string} className="flex gap-4"><IconComponent className="mt-0.5 shrink-0 text-lime" size={16} /><div><h3 className="text-sm font-medium">{title as string}</h3><p className="mt-1 text-sm leading-relaxed text-[#92928c]">{copy as string}</p></div></div>; })}</div></div></div></Reveal>}
      </section>

      <section id="about" className="relative border-y border-white/15 bg-[#0e0e0f] px-6 py-28 md:px-10 md:py-40"><div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12"><Reveal className="md:col-span-4"><p className="eyebrow">How I work</p></Reveal><Reveal delay={0.08} className="md:col-span-8"><p className="max-w-4xl text-3xl leading-[1.04] tracking-[-.06em] text-[#d6d6d0] md:text-6xl">I&apos;m interested in the space between a useful idea and the experience that makes someone want to return to it.</p><div className="mt-16 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-3">{principles.map(([number, title, copy]) => <div key={number} className="min-h-[210px] bg-[#0e0e0f] p-5"><p className="font-mono text-[10px] text-lime">{number}</p><h3 className="mt-12 text-lg tracking-[-.035em]">{title}</h3><p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-[#92928c]">{copy}</p></div>)}</div></Reveal></div></section>

      <section id="contact" className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40"><Reveal><p className="eyebrow">Say hello</p><div className="mt-7 grid gap-8 border-t border-white/15 pt-6 md:grid-cols-12 md:items-end"><h2 className="max-w-4xl text-5xl leading-[.9] tracking-[-.075em] md:col-span-9 md:text-8xl">Good work starts with a <span className="text-lime">good question.</span></h2><div className="md:col-span-3"><p className="text-sm leading-relaxed text-[#a3a39d]">Contact details and social links will live here. For now, explore the work as it takes shape.</p><span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-[#74746f]">Building in public / 2026</span></div></div></Reveal></section>

      <footer className="relative border-t border-white/15 px-6 py-5 md:px-10"><div className="mx-auto flex max-w-[1600px] items-center justify-between font-mono text-[10px] uppercase tracking-[.12em] text-[#74746f]"><span>© 2026 {profile.name}</span><span>Made with care</span></div></footer>
    </main>
  );
}
