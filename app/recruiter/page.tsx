import type { Metadata } from "next";
import { ArrowUpRight, BrainCircuit, Braces, Cloud, Code2, Database, GitBranch, Terminal } from "lucide-react";
import { ProfileControls } from "@/components/profile-controls";
import { RecruiterCta } from "@/components/recruiter-cta";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Recruiter brief — Sujan",
  description: "A concise introduction to Sujan, an early-career software engineer.",
};

const projects = [
  {
    number: "01",
    title: "[Flagship project title]",
    purpose: "[One clear sentence describing the problem and who the project helps.]",
    outcome: "[Add the most useful result, metric, or engineering achievement here.]",
    role: "[Your role]",
    year: "[Year]",
    technologies: ["Next.js", "TypeScript", "API"],
    visual: "project-visual-blue",
  },
  {
    number: "02",
    title: "[Second project title]",
    purpose: "[Explain what makes this project useful, distinctive, or technically interesting.]",
    outcome: "[Add an outcome, learning, performance improvement, or user impact.]",
    role: "[Your role]",
    year: "[Year]",
    technologies: ["Python", "AI / ML", "Data"],
    visual: "project-visual-orange",
  },
];

const journey = [
  { marker: "START", title: "[How your development journey began]", copy: "[A brief, honest origin point: what pulled you toward software and what you built first.]" },
  { marker: "BUILD", title: "[Your first meaningful milestone]", copy: "[A project, internship, course, collaboration, or challenge that changed how you work.]" },
  { marker: "NOW", title: "Building toward product engineering and applied AI", copy: "Developing a focused body of work that demonstrates useful ideas, sound engineering, and thoughtful interaction design." },
];

const skills = [
  { icon: Braces, title: "Frontend", detail: "[Add languages and frameworks]" },
  { icon: Database, title: "Backend & data", detail: "[Add APIs, databases, and systems]" },
  { icon: BrainCircuit, title: "Applied AI", detail: "[Add models, tools, and techniques]" },
  { icon: Cloud, title: "Infrastructure", detail: "[Add cloud and deployment tools]" },
  { icon: GitBranch, title: "Workflow", detail: "Git, collaboration, iteration" },
  { icon: Terminal, title: "Currently learning", detail: "[Add your current focus]" },
];

const terminalNotes = [
  ["$ npm run build", "left-[4%] top-[11%]"],
  ["git commit -m 'keep going'", "right-[4%] top-[29%]"],
  ["const idea = await build();", "left-[7%] top-[55%]"],
  ["~/projects/next", "right-[8%] top-[74%]"],
];

export default function RecruiterPage() {
  return (
    <main className="recruiter-shell relative min-h-svh overflow-hidden bg-[var(--site-bg)] text-[var(--site-text)]">
      <ProfileControls current="recruiter" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {terminalNotes.map(([note, position]) => <span key={note} className={`terminal-whisper absolute ${position}`}>{note}</span>)}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <section className="grid min-h-[67svh] content-center gap-12 border-b border-[var(--line)] pb-20 md:grid-cols-12 md:gap-8 md:pb-28">
          <div className="md:col-span-8">
            <p className="section-kicker">Recruiter brief / early-career software engineer</p>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[.92] tracking-[-.078em] sm:text-7xl md:text-[5.6rem]">Hi, I’m {profile.name}. I build software that is useful, understandable, and considered.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">I’m interested in product engineering and applied AI—especially work where the quality of the experience matters as much as the implementation behind it.</p>
          </div>

          <aside className="relative self-end md:col-span-3 md:col-start-10">
            <div className="tiny-builder" aria-hidden="true">
              <div className="tiny-builder-antenna" />
              <div className="tiny-builder-head"><span /><span /></div>
              <div className="tiny-builder-body"><Code2 size={18} /></div>
              <div className="tiny-builder-shadow" />
            </div>
            <div className="mt-6 border-t border-[var(--line)] pt-5">
              <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.15em]"><span className="status-pulse size-2 rounded-full bg-[var(--accent)]" /> Open to early-career opportunities</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">[Add preferred roles, location, work authorization, and availability.]</p>
            </div>
          </aside>
        </section>

        <section className="py-20 md:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="section-kicker">Featured projects</p><h2 className="mt-4 text-4xl tracking-[-.065em] sm:text-5xl">Proof before promises.</h2></div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">A small selection of work, explained through the problem, the decisions, and the outcome.</p>
          </div>

          <div className="mt-12 space-y-5">
            {projects.map((project) => (
              <article key={project.number} data-cursor="SOON" className="project-card group grid overflow-hidden border border-[var(--line)] bg-[var(--panel)] md:grid-cols-12">
                <div className={`relative min-h-[280px] overflow-hidden border-b border-[var(--line)] md:col-span-6 md:min-h-[410px] md:border-b-0 md:border-r ${project.visual}`}>
                  <div className="project-terminal absolute inset-6 flex flex-col rounded-xl border p-4 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[-1deg] md:inset-10">
                    <div className="flex gap-1.5"><span /><span /><span /></div>
                    <div className="mt-8 space-y-3 font-mono text-[10px] opacity-70"><p><b>01</b> import &#123; idea &#125; from &quot;curiosity&quot;;</p><p><b>02</b> const problem = <i>&quot;[real problem]&quot;</i>;</p><p><b>03</b> const result = await build(problem);</p><p><b>04</b> ship(result);</p></div>
                    <div className="mt-auto flex items-end justify-between"><span className="font-mono text-[9px] uppercase tracking-[.12em] opacity-50">Project preview / replace later</span><ArrowUpRight size={17} /></div>
                  </div>
                </div>
                <div className="flex min-h-[360px] flex-col p-6 sm:p-8 md:col-span-6 md:p-10">
                  <div className="flex items-start justify-between"><span className="section-kicker">Project {project.number}</span><span className="font-mono text-[9px] text-[var(--faint)]">{project.year}</span></div>
                  <div className="my-auto py-12"><h3 className="text-3xl tracking-[-.055em] sm:text-4xl">{project.title}</h3><p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">{project.purpose}</p><p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--faint)]">{project.outcome}</p></div>
                  <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[var(--line)] pt-5"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="tech-pill">{technology}</span>)}</div><span className="font-mono text-[9px] uppercase tracking-[.12em] text-[var(--faint)]">{project.role}</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RecruiterCta />

        <section className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3"><p className="section-kicker">The journey</p><h2 className="mt-4 text-3xl tracking-[-.055em]">How I got here.</h2></div>
            <div className="journey-line relative md:col-span-8 md:col-start-5">
              {journey.map((item, index) => <article key={item.marker} className="journey-item relative grid gap-4 border-t border-[var(--line)] py-8 sm:grid-cols-[100px_1fr]"><div><span className="journey-dot" /><p className="font-mono text-[9px] tracking-[.16em] text-[var(--accent)]">{item.marker}</p></div><div><h3 className="text-2xl tracking-[-.045em]">{item.title}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{item.copy}</p>{index < 2 && <p className="mt-5 font-mono text-[9px] uppercase tracking-[.13em] text-[var(--faint)]">[Add date, place, and supporting artifact]</p>}</div></article>)}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] py-16 md:py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker">Skills & technologies</p><h2 className="mt-4 text-4xl tracking-[-.06em]">The tools behind the work.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">These remain placeholders until we map your actual experience accurately.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ icon: Icon, title, detail }) => <div key={title} className="min-h-[180px] bg-[var(--panel)] p-6"><Icon size={19} strokeWidth={1.6} className="text-[var(--accent)]" /><h3 className="mt-10 text-lg tracking-[-.035em]">{title}</h3><p className="mt-2 text-sm text-[var(--muted)]">{detail}</p></div>)}
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-7 py-12 sm:flex-row sm:items-end">
          <div><p className="section-kicker">Details to add</p><p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">[Email] · [LinkedIn] · [GitHub] · [Résumé] · [Location]</p></div>
          <a href="https://github.com/sujan-reddy-p" target="_blank" rel="noreferrer" data-cursor="OPEN" className="secondary-action inline-flex items-center gap-3 self-start rounded-full border px-5 py-3 text-sm sm:self-auto">Current GitHub <ArrowUpRight size={15} /></a>
        </footer>
      </div>
    </main>
  );
}
