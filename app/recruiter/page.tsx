import type { Metadata } from "next";
import Image from "next/image";
import { Activity, ArrowUpRight, Check, CircleDot, Compass, Database, ExternalLink, Filter, Gauge, Github, Linkedin, Mail, MapPin, Network, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import {
  SiDocker,
  SiFastapi,
  SiFramer,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { CompanionAgent } from "@/components/companion-agent";
import { LocalLoreHeroCard } from "@/components/local-lore-hero-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Recruiter brief — Sujan",
  description: "A concise introduction to Sujan, an early-career software engineer.",
};

const projects: Array<{
  number: string;
  title: string;
  purpose: string;
  outcome: string;
  year: string;
  role: string;
  technologies: string[];
  visual: string;
  liveHref?: string;
  caseHref?: string;
  codeHref: string;
}> = [
  {
    number: "01",
    title: "Local Lore",
    purpose: "Built a source-linked San Francisco discovery guide with an automated agent that researches new events and keeps local listings current.",
    outcome: "The agent continuously checks approved sources, detects new events or discrepancies, and updates this niche city guide faster than a manual maintenance workflow.",
    year: "2026",
    role: "Agentic product system · San Francisco",
    technologies: ["Next.js", "TypeScript", "MapLibre", "Agent pipeline"],
    visual: "lore",
    liveHref: "https://local-lore-five.vercel.app/",
    codeHref: "https://github.com/sujan-reddy-p/local-lore",
  },
  {
    number: "02",
    title: "Convergence",
    purpose: "Built a Python research and paper-trading system that finds specialist Polymarket wallets and scores agreement across markets.",
    outcome: "Processed 463K Polymarket conditions and 5.4M+ historical trades with Python, Pandas, PyArrow, and SQLite; generated 96K wallet/category profiles and isolated 266 strict specialists.",
    year: "2026",
    role: "Research & data systems · Polymarket",
    technologies: ["Python", "FastAPI", "Pandas", "Statistical scoring"],
    visual: "convergence",
    caseHref: "/convergence",
    codeHref: "https://github.com/sujan-reddy-p/Convergence",
  },
  {
    number: "03",
    title: "Health analysis platform",
    purpose: "Built a multi-disease prediction platform using Python, TensorFlow, and scikit-learn to analyze patient data.",
    outcome: "Improved prediction accuracy by 25% across 10,000 patient records.",
    year: "2023 — 2024",
    role: "Software Engineer Assistantship · IBM",
    technologies: ["Python", "TensorFlow", "scikit-learn"],
    visual: "atlas",
    codeHref: "https://github.com/sujan-reddy-p",
  },
  {
    number: "04",
    title: "Semantic Analyzer",
    purpose: "Built an NLP-powered plagiarism analyzer for finding paraphrased content across local documents and web results.",
    outcome: "Won 1st place at Hack-A-League, competing with 200+ participants.",
    year: "2024",
    role: "NLP project · Hack-A-League",
    technologies: ["Python", "NLP", "Automation"],
    visual: "signal",
    codeHref: "https://github.com/sujan-reddy-p",
  },
];

const achievements = [
  {
    place: "01",
    title: "IBM Z Datathon",
    detail: "1st place · Bangalore · international field of 3,000+ participants",
    project: "Multi-level health analysis using medical-report data",
    built: "A health-analysis concept built around medical-report data and multi-level analysis.",
    signal: "Applied problem framing and data-focused product thinking in a large competitive field.",
  },
  {
    place: "02",
    title: "Hack-A-League",
    detail: "1st place · national field of 3,000+ participants",
    project: "Semantic Analyzer using NLP",
    built: "An NLP-based semantic analyzer for interpreting and comparing language-based content.",
    signal: "Demonstrates practical NLP application, clear problem selection, and competition delivery.",
  },
  {
    place: "03",
    title: "Hackerrupt ’22",
    detail: "2nd place · national field of 3,000+ participants",
    project: "Software Analyzer",
    built: "A software-analysis project developed for a national engineering competition.",
    signal: "Demonstrates analytical software development under an outcome-driven deadline.",
  },
  {
    place: "04",
    title: "Fantom Code",
    detail: "3rd place · national field of 3,000+ participants",
    project: "Inheritance of digital assets on blockchain",
    built: "A blockchain concept addressing inheritance and ownership of digital assets.",
    signal: "Demonstrates comfort exploring emerging technical domains and translating them into a product concept.",
  },
];

const journey = [
  {
    marker: "2020 — 2024",
    title: "A foundation in computer science and community",
    copy: "Completed a B.Tech. in Computer Science & Engineering at Global Academy of Technology, while leading the Linux GNU club and organizing development sessions for fellow students.",
    location: "Bangalore, IN",
    image: "/journey-discover.jpg",
    alt: "A wall of colorful notes used to organize ideas",
    credit: "Photo: Jo Szczepanska / Unsplash",
  },
  {
    marker: "2021 — 2022",
    title: "Learning what changes the product experience",
    copy: "At DHI, built a responsive React and Google Maps experience that increased engagement by 20%, while performance work reduced page-load time by 30%.",
    location: "Bangalore, IN",
    image: "/journey-build.jpg",
    alt: "A designer arranging notes during a product workshop",
    credit: "Photo: Christian Brok / Unsplash",
  },
  {
    marker: "2024 — 2026",
    title: "Computer science graduate study at SUNY Buffalo",
    copy: "Pursuing an MS in Computer Science while building a more focused body of work in product engineering and applied AI.",
    location: "San Francisco, CA",
    image: "/journey-now.jpg",
    alt: "A laptop displaying program code on a desk",
    credit: "Photo: Bernd Dittrich / Unsplash",
  },
];

const tools: Array<{ name: string; note: string; icon: IconType; color: string }> = [
  { name: "TypeScript", note: "Language", icon: SiTypescript, color: "#4285f4" },
  { name: "React", note: "Interfaces", icon: SiReact, color: "#54c7ec" },
  { name: "Next.js", note: "Products", icon: SiNextdotjs, color: "currentColor" },
  { name: "Python", note: "Systems & AI", icon: SiPython, color: "#fbbc04" },
  { name: "FastAPI", note: "APIs", icon: SiFastapi, color: "#34a853" },
  { name: "PostgreSQL", note: "SQL & data", icon: SiPostgresql, color: "#5f8fc9" },
  { name: "Docker", note: "Containers", icon: SiDocker, color: "#2496ed" },
  { name: "Git", note: "Workflow", icon: SiGit, color: "#f05d3c" },
  { name: "GitHub", note: "Collaboration", icon: SiGithub, color: "currentColor" },
  { name: "Tailwind", note: "UI systems", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Motion", note: "Interaction", icon: SiFramer, color: "#ff6f61" },
  { name: "PyTorch", note: "Applied AI", icon: SiPytorch, color: "#ee4c2c" },
];

export default function RecruiterPage() {
  return (
    <main id="top" className="recruiter-shell relative min-h-svh overflow-hidden bg-[var(--site-bg)] text-[var(--site-text)]">
      <nav className="fixed left-4 top-4 z-[70] flex items-center gap-7 sm:left-7 sm:top-6" aria-label="Portfolio sections">
        <a href="#top" className="text-lg font-semibold tracking-[-.05em]">SUJAN<span className="text-[var(--accent)]">.</span></a>
        <div className="hidden items-center gap-5 font-mono text-[13px] uppercase tracking-[.08em] text-[var(--muted)] md:flex">
          <a href="#projects" className="transition-colors hover:text-[var(--site-text)]">Work</a>
          <a href="#journey" className="transition-colors hover:text-[var(--site-text)]">Journey</a>
          <a href="#tools" className="transition-colors hover:text-[var(--site-text)]">Stack</a>
        </div>
      </nav>
      <ThemeToggle />
      <CompanionAgent />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <section data-companion-zone="hero" className="sr-hero sr-project-hero grid min-h-[76svh] items-center gap-12 border-b border-[var(--line)] py-10 md:min-h-[78svh] md:grid-cols-12 md:gap-8">
          <div className="relative z-10 md:col-span-6">
            <p className="hero-kicker">Agentic software engineer · Product-minded builder</p>
            <h1 className="sr-hero-title max-w-3xl text-5xl leading-[.92] tracking-[-.075em] sm:text-6xl md:text-[5.7rem] lg:text-[6.5rem]">Hi, I&apos;m {profile.name}.<br />I build useful products with <em>agents behind the scenes.</em></h1>
          </div>
          <div className="md:col-span-6"><LocalLoreHeroCard /></div>
        </section>

        <section id="projects" data-companion-zone="projects" className="py-24 md:py-28">
          <div className="border-b border-[var(--line)] pb-8 md:pb-10">
            <p className="section-kicker">Selected work</p>
            <h2 className="mt-4 text-4xl leading-[.95] tracking-[-.065em] sm:text-5xl md:text-6xl">Selected projects.</h2>
          </div>

          <div className="mt-14 space-y-20 md:mt-16 md:space-y-24">
            {projects.map((project, index) => (
              <article id={`project-${project.number}`} key={project.number} className={`project-story grid items-center gap-8 md:grid-cols-12 md:gap-10 ${index % 2 ? "project-story-reverse" : ""}`}>
                {project.liveHref || project.caseHref ? (
                  <a href={project.liveHref ?? project.caseHref} target={project.liveHref ? "_blank" : undefined} rel={project.liveHref ? "noreferrer" : undefined} data-cursor="OPEN" aria-label={`Open ${project.title}${project.liveHref ? " live project" : " case study"}`} className={`project-showcase project-showcase-${project.visual} project-showcase-link relative min-h-[260px] overflow-hidden rounded-[1.5rem] md:col-span-6 md:min-h-[320px]`}>
                    {project.visual === "lore" ? <iframe title="Local Lore project preview" src={project.liveHref} tabIndex={-1} className="project-live-preview" /> : <ProjectVisual type={project.visual} />}
                    <span className="project-preview-invite">{project.liveHref ? "Open the live city guide" : "Explore the technical case study"} <ArrowUpRight size={14} /></span>
                    <span className="project-number">{project.number}</span>
                  </a>
                ) : (
                  <div className={`project-showcase project-showcase-${project.visual} relative min-h-[260px] overflow-hidden rounded-[1.5rem] md:col-span-6 md:min-h-[320px]`}>
                    <ProjectVisual type={project.visual} />
                    <span className="project-number">{project.number}</span>
                  </div>
                )}
                <div className="project-copy md:col-span-5 md:col-start-8">
                  <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                    <span className="section-kicker">Project / {project.number}</span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">{project.year}</span>
                  </div>
                  <h3 className="mt-6 text-3xl leading-[1] tracking-[-.055em] sm:text-4xl">{project.title}</h3>
                  <p className="body-copy mt-4 text-[var(--site-text)]">{project.purpose}</p>
                  <p className="project-impact mt-4"><span>Impact</span>{project.outcome}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="tech-pill">{technology}</span>)}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveHref ? <a href={project.liveHref} target="_blank" rel="noreferrer" data-cursor="OPEN" className="project-action project-action-primary">View live project <ExternalLink size={14} /></a> : !project.caseHref && <a href={`#project-${project.number}`} aria-label={`${project.title} case study coming soon`} data-cursor="SOON" className="project-action project-action-primary">Case study <ArrowUpRight size={14} /></a>}
                    <a href={project.codeHref} target="_blank" rel="noreferrer" data-cursor="CODE" className="project-action">Source <Github size={14} /></a>
                  </div>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[.1em] text-[var(--muted)]">{project.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="achievements-section py-24 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="section-kicker">Notable recognition</p>
              <h2 className="section-title mt-4">Built under pressure.</h2>
              <p className="section-lead mt-5 text-sm">Four hackathon placements across applied AI, NLP, software analysis, and blockchain work.</p>
            </div>
            <div className="achievements-list md:col-span-7 md:col-start-6">
              {achievements.map((achievement) => (
                <article key={achievement.place} className="achievement-row" tabIndex={0}>
                  <span className="achievement-number">{achievement.place}</span>
                  <div>
                    <h3><Trophy size={16} aria-hidden="true" /> {achievement.title}</h3>
                    <p>{achievement.detail}</p>
                    <small>{achievement.project}</small>
                    <div className="achievement-detail">
                      <div className="achievement-detail-copy">
                        <div><span>Built</span><p>{achievement.built}</p></div>
                        <div><span>Hiring signal</span><p>{achievement.signal}</p></div>
                      </div>
                      <AchievementOutcome place={achievement.place} title={achievement.title} project={achievement.project} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" data-companion-zone="journey" className="journey-section py-24 md:py-36">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="section-kicker">The journey</p>
              <h2 className="section-title mt-4">A few turns in the road.</h2>
              <p className="section-lead mt-5 text-sm">Hover over a chapter to reveal the artifact behind it.</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              {[...journey].reverse().map((item, index) => (
                <article key={item.marker} className="journey-chapter group relative grid min-h-[210px] overflow-hidden border-t border-[var(--line)] py-8 sm:grid-cols-[110px_1fr]">
                  <div className="relative z-10"><span className="journey-index">0{index + 1}</span><p className="mt-4 font-mono text-[11px] tracking-[.12em] text-[var(--accent)]">{item.marker}</p></div>
                  <div className="relative z-10 max-w-xl pr-0 transition-transform duration-500 group-hover:-translate-x-3 sm:pr-40">
                    <h3 className="text-2xl leading-tight tracking-[-.045em]">{item.title}</h3>
                    <p className="body-copy mt-3 text-sm">{item.copy}</p>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[.1em] text-[var(--muted)]">{item.location}</p>
                  </div>
                  <figure className="journey-photo">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 65vw, 340px" className="object-cover" />
                    <figcaption>{item.credit}</figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" data-companion-zone="tools" className="tools-section border-y border-[var(--line)] py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="section-kicker">Tools behind the work</p>
              <h2 className="section-title mt-4">Tools I work with.</h2>
              <p className="section-lead mt-5 text-sm">A concise view of the technologies behind the work. Each one earns its place through real use, not keyword matching.</p>
            </div>
            <div className="tool-grid md:col-span-7 md:col-start-6">
              {tools.map(({ name, note, icon: Icon, color }) => (
                <div key={name} className="tool-mark" data-cursor={name.toUpperCase()}>
                  <span className="tool-icon" aria-hidden="true"><Icon size={25} style={{ color }} /></span>
                  <span className="tool-copy"><strong>{name}</strong><small>{note}</small></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-companion-zone="contact" className="recruiter-footer contact-stage py-24 md:py-32">
          <p className="section-kicker">The rest is a conversation</p>
          <h2 className="section-title mt-4">Open to the right opportunity.</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">San Francisco, California · Available for early-career software engineering roles</p>
          <div className="contact-stage-actions">
            <a href="mailto:sujanreddy.rp@gmail.com" data-cursor="EMAIL"><Mail size={18} /><span><small>Best for a quick note</small>Email Sujan</span><ArrowUpRight size={18} /></a>
            <a href="https://www.linkedin.com/in/sujan-reddy-p/" target="_blank" rel="noreferrer" data-cursor="DM"><Linkedin size={18} /><span><small>Prefer a direct message</small>DM on LinkedIn</span><ArrowUpRight size={18} /></a>
          </div>
        </section>
      </div>
    </main>
  );
}

function AchievementOutcome({ place, title, project }: { place: string; title: string; project: string }) {
  const outcome = place === "01" ? "1st / 3,000+" : place === "02" ? "1st / 3,000+" : place === "03" ? "2nd / 3,000+" : "3rd / 3,000+";
  const label = place === "01" ? "Health analysis" : place === "02" ? "Semantic NLP" : place === "03" ? "Software analysis" : "Blockchain concept";

  return (
    <div className={`achievement-outcome achievement-outcome-${place}`} aria-label={`${title}: ${outcome}`}>
      <div className="achievement-outcome-core"><Trophy size={16} /><strong>{outcome}</strong><small>{label}</small></div>
      <div className="achievement-outcome-project">{project}</div>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "lore") {
    return <LocalLoreVisual variant="card" />;
  }

  if (type === "atlas") {
    return <HealthAnalysisFlow />;
  }

  if (type === "convergence") {
    return (
      <div className="convergence-ui" aria-hidden="true">
        <div className="convergence-header"><span><Network size={14} /> Validated research pipeline</span><i /></div>
        <div className="convergence-pipeline">
          <div className="convergence-track"><span className="convergence-packet" /></div>
          <div className="convergence-stage convergence-stage-one"><span><Database size={15} /></span><strong>463K</strong><small>conditions</small></div>
          <div className="convergence-stage convergence-stage-two"><span><Activity size={15} /></span><strong>9,989</strong><small>candidates</small></div>
          <div className="convergence-stage convergence-stage-three"><span><Filter size={15} /></span><strong>7,230</strong><small>clean pool</small></div>
          <div className="convergence-stage convergence-stage-four"><span><ShieldCheck size={15} /></span><strong>266</strong><small>specialists</small></div>
          <div className="convergence-stage convergence-stage-five"><span><Network size={15} /></span><strong>same side</strong><small>convergence</small></div>
          <div className="convergence-stage convergence-stage-six"><span><Gauge size={15} /></span><strong>67.4%</strong><small>837 clusters</small></div>
        </div>
        <div className="convergence-signal"><span>weighted signal</span><i /><strong>Independent specialists agree</strong><small>category skill · conviction · entry timing</small></div>
        <div className="convergence-footer"><span>Python</span><span>FastAPI</span><span>statistical scoring</span></div>
      </div>
    );
  }

  return <SemanticAnalyzerFlow />;
}

function HealthAnalysisFlow() {
  return (
    <div className="project-flow-ui project-flow-health" aria-hidden="true">
      <div className="project-flow-header"><span><Activity size={13} /> Clinical inference pipeline</span><i /></div>
      <div className="project-flow-track"><b /><b /></div>
      <div className="project-flow-grid">
        <div className="project-flow-node project-flow-node-one"><span><Database size={15} /></span><div><small>Input</small><strong>Patient records</strong></div></div>
        <div className="project-flow-node project-flow-node-two"><span><Filter size={15} /></span><div><small>Process</small><strong>Feature prep</strong></div></div>
        <div className="project-flow-node project-flow-node-three"><span><Gauge size={15} /></span><div><small>Model</small><strong>Risk inference</strong></div></div>
        <div className="project-flow-node project-flow-node-four"><span><ShieldCheck size={15} /></span><div><small>Output</small><strong>Health profile</strong></div></div>
      </div>
      <div className="project-flow-result"><span>TensorFlow + scikit-learn</span><strong>Multi-disease analysis</strong><small>Structured features → prediction output</small></div>
    </div>
  );
}

function SemanticAnalyzerFlow() {
  return (
    <div className="project-flow-ui project-flow-semantic" aria-hidden="true">
      <div className="project-flow-header"><span><Sparkles size={13} /> Semantic comparison pipeline</span><i /></div>
      <div className="project-flow-track"><b /><b /></div>
      <div className="project-flow-grid">
        <div className="project-flow-node project-flow-node-one"><span><Database size={15} /></span><div><small>Input</small><strong>Documents</strong></div></div>
        <div className="project-flow-node project-flow-node-two"><span><Filter size={15} /></span><div><small>Process</small><strong>Text chunks</strong></div></div>
        <div className="project-flow-node project-flow-node-three"><span><Network size={15} /></span><div><small>Model</small><strong>Semantic match</strong></div></div>
        <div className="project-flow-node project-flow-node-four"><span><ShieldCheck size={15} /></span><div><small>Output</small><strong>Evidence flags</strong></div></div>
      </div>
      <div className="project-flow-result"><span>NLP + automation</span><strong>Paraphrase detection</strong><small>Local files + web references → reviewable overlap</small></div>
    </div>
  );
}

function LocalLoreVisual({ variant }: { variant: "hero" | "card" }) {
  return (
    <div className={`lore-map-visual lore-map-visual-${variant}`} aria-hidden="true">
      <div className="lore-map-water" />
      <div className="lore-map-grid" />
      <span className="lore-road lore-road-one" />
      <span className="lore-road lore-road-two" />
      <span className="lore-road lore-road-three" />
      <span className="lore-shore" />
      <div className="lore-building-cluster lore-building-cluster-one"><i /><i /><i /><i /></div>
      <div className="lore-building-cluster lore-building-cluster-two"><i /><i /><i /></div>
      <span className="lore-zone lore-zone-one"><Compass size={16} /></span>
      <span className="lore-zone lore-zone-two"><MapPin size={16} /></span>
      <span className="lore-zone lore-zone-three"><Sparkles size={15} /></span>
      <div className="lore-map-brand"><span>l</span><div><strong>Local Lore</strong><small>San Francisco field guide</small></div></div>
      <div className="lore-map-caption"><span>112 curated missions</span><strong>Where next?</strong><small>Sunset · Food ritual · Live music</small></div>
      <div className="lore-map-note"><i /><span>Map-first discovery</span></div>
    </div>
  );
}
