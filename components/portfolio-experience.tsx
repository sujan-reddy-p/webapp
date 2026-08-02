import Image from "next/image";
import { ArrowRight, ArrowUpRight, Asterisk, Beaker, Code2, Compass, Sparkles } from "lucide-react";
import { CompanionAgent } from "@/components/companion-agent";
import { profile } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { VoxelHero } from "@/components/voxel-hero";

const explorations = [
  {
    number: "01",
    label: "Flagship build / placeholder",
    title: "[A project with a reason to exist]",
    copy: "A full product story will live here: the person it helps, the interaction that makes it special, and the engineering underneath.",
    className: "exploration-sunset",
    size: "exploration-wide",
  },
  {
    number: "02",
    label: "Applied intelligence / placeholder",
    title: "[An AI feature that earns its place]",
    copy: "Useful behavior first. Models, infrastructure, and implementation details second.",
    className: "exploration-meadow",
    size: "exploration-tall",
  },
  {
    number: "03",
    label: "Tiny experiments",
    title: "A shelf for curious things.",
    copy: "Small interactions, prototypes, visual studies, and ideas that do not need to become startups.",
    className: "exploration-sky",
    size: "exploration-small",
  },
];

const notes = [
  ["01", "Notice", "Pay attention to the small friction everyone else accepts."],
  ["02", "Make", "Build the smallest version that proves the feeling."],
  ["03", "Listen", "Let real use change the original idea."],
];

export function PortfolioExperience() {
  return (
    <main id="top" className="explore-shell relative overflow-hidden bg-[var(--site-bg)] text-[var(--site-text)]">
      <div className="noise" />
      <SiteHeader />
      <CompanionAgent />

      <div data-companion-zone="hero"><VoxelHero name={profile.name} role={profile.role} /></div>

      <section id="work" data-companion-zone="projects" className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="section-kicker">Selected explorations</p>
            <h2 className="section-title mt-5 max-w-3xl">Things made with a little more curiosity.</h2>
          </div>
          <p className="section-lead text-sm md:col-span-3 md:col-start-10">This route is the visual notebook. Finished products and worthwhile experiments both belong here.</p>
        </Reveal>

        <div className="exploration-layout mt-16 md:mt-24">
          {explorations.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.06} className={`${project.size}`}>
              <article className={`exploration-card group ${project.className}`}>
                <div className="exploration-art" aria-hidden="true">
                  <span className="exploration-shape exploration-shape-one" />
                  <span className="exploration-shape exploration-shape-two" />
                  <span className="exploration-shape exploration-shape-three" />
                  {index === 0 && <div className="exploration-window"><span /><span /><span /><p>an idea becoming useful</p></div>}
                  {index === 1 && <div className="exploration-spark"><Sparkles size={22} /><span>signal</span></div>}
                  {index === 2 && <div className="exploration-code"><Code2 size={24} /><span>lab_03</span></div>}
                </div>
                <div className="exploration-copy">
                  <div className="flex items-center justify-between">
                    <span className="section-kicker">{project.label}</span>
                    <span className="font-mono text-[11px]">{project.number}</span>
                  </div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.copy}</p>
                    <a href={`#exploration-${project.number}`} data-cursor="SOON" aria-label={`${project.title} details coming soon`}>Explore project <ArrowUpRight size={15} /></a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-companion-zone="journey" className="field-notes px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="section-kicker">Field notes</p>
              <h2 className="section-title mt-5">How the work finds its shape.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {notes.map(([number, title, copy]) => (
                <article key={number} className="field-note group">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Asterisk className="field-note-mark" size={28} />
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-companion-zone="tools" className="visual-journal mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="visual-journal-collage md:col-span-6">
            <figure className="journal-photo journal-photo-one"><Image src="/journey-build.jpg" alt="A product design session with notes" fill sizes="(max-width: 768px) 80vw, 520px" className="object-cover" /></figure>
            <figure className="journal-photo journal-photo-two"><Image src="/journey-now.jpg" alt="Code displayed on a laptop" fill sizes="(max-width: 768px) 48vw, 300px" className="object-cover" /></figure>
            <span className="journal-sticker"><Beaker size={16} /> Work in public</span>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="section-kicker">The ongoing journal</p>
            <h2 className="section-title mt-5">The unfinished parts matter too.</h2>
            <p className="body-copy mt-6">This space will collect sketches, failed approaches, decisions, and small wins. It is less polished than a case study and more honest about how software gets made.</p>
            <span className="mt-8 inline-flex items-center gap-3 text-sm"><Compass size={16} /> Journal entries arrive with the projects.</span>
          </div>
        </Reveal>
      </section>

      <section id="contact" data-companion-zone="contact" className="explore-contact px-6 py-28 md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-[1440px]">
          <p className="section-kicker">Say hello</p>
          <div className="mt-7 grid gap-10 border-t border-[var(--line)] pt-8 md:grid-cols-12 md:items-end">
            <h2 className="max-w-5xl text-5xl leading-[.9] tracking-[-.075em] md:col-span-9 md:text-8xl">Good work starts with a <em>good question.</em></h2>
            <div className="md:col-span-3">
              <p className="body-copy text-sm">[Add email, LinkedIn, availability, and preferred way to start a conversation.]</p>
              <a href="/recruiter" data-cursor="GO" className="mt-7 inline-flex items-center gap-3 text-sm font-medium">Take the recruiter route <ArrowRight size={15} /></a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative border-t border-[var(--line)] px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between font-mono text-[11px] uppercase tracking-[.1em] text-[var(--muted)]">
          <span>© 2026 {profile.name}</span>
          <span>Made with care</span>
        </div>
      </footer>
    </main>
  );
}
