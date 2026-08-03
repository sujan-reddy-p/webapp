"use client";

import { ArrowUpRight, Bot, Braces, ChevronRight, FileJson2, Filter, Map, RotateCcw, ScanSearch, ShieldCheck } from "lucide-react";
import { useState } from "react";

const liveProject = "https://local-lore-five.vercel.app/";

const walkthrough = [
  { label: "Build", copy: "Next.js + TypeScript define typed source adapters and a safe ingestion boundary." },
  { label: "Ingest", copy: "Source-specific adapters turn venue pages, calendars, and feeds into one mission record." },
  { label: "Enrich", copy: "The AI layer returns schema-bound JSON for category, traits, and editorial context." },
  { label: "Validate", copy: "Deterministic rules protect dates, locations, URLs, expiry, and duplicates." },
  { label: "Render", copy: "MapLibre turns verified, source-linked records into an interactive city guide." },
];

export function LocalLoreHeroCard() {
  const [showSystem, setShowSystem] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div className={`hero-lore-stage${showSystem ? " is-flipped" : ""}`}>
      <div className="hero-lore-flipper">
        <div className="hero-lore-face hero-lore-front">
          <a href={liveProject} target="_blank" rel="noreferrer" data-cursor="OPEN" className="hero-project-preview" aria-label="Open Local Lore in a new tab">
            <iframe title="Local Lore live project preview" src={liveProject} tabIndex={-1} />
            <span className="sr-only">Open Local Lore in a new tab</span>
          </a>
          <button type="button" onClick={() => setShowSystem(true)} data-cursor="FLOW" className="hero-agent-callout" aria-label="Learn how the Local Lore agent keeps the guide current">
            <span className="hero-agent-beacon"><ScanSearch size={16} /></span>
            <span><small>Agent-maintained guide</small>An agent reads the web each day to keep this city guide current.</span>
          </button>
        </div>

        <div className="hero-lore-face hero-lore-back">
          <button type="button" onClick={() => { setShowSystem(false); setStep(0); }} data-cursor="MAP" className="hero-back-label">Back to the map <Map size={14} /></button>
          <div className="hero-walkthrough" data-step={step} aria-label={`Local Lore agent walkthrough: ${walkthrough[step].label}`}>
            <div className="walkthrough-top"><span>How the guide stays current</span><b>0{step + 1} / 05</b></div>
            <div className="walkthrough-stage">
              <div className="walkthrough-route"><i /><i /><i /><i /><i /></div>
              <div className="walkthrough-stack" aria-hidden="true"><span><Braces size={16} /></span><div><b>Next.js</b><i>TypeScript</i></div></div>
              <div className="walkthrough-reading" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="walkthrough-json" aria-hidden="true"><FileJson2 size={17} /><span><i /><i /><i /></span></div>
              <div className="walkthrough-filter" aria-hidden="true"><Filter size={18} /></div>
              <div className="walkthrough-check" aria-hidden="true"><ShieldCheck size={19} /><i>✓</i></div>
              <div className="walkthrough-map" aria-hidden="true"><Map size={18} /><i /><i /><i /></div>
              <div className="walkthrough-agent"><span><Bot size={24} /></span><b>agent</b></div>
            </div>
            <div className="walkthrough-bottom"><div><span>{walkthrough[step].label}</span><p>{walkthrough[step].copy}</p></div><button type="button" onClick={() => setStep((current) => current === walkthrough.length - 1 ? 0 : current + 1)} data-cursor="NEXT">{step === walkthrough.length - 1 ? <><RotateCcw size={15} /> Again</> : <>Next <ChevronRight size={16} /></>}</button></div>
          </div>
          <a href={liveProject} target="_blank" rel="noreferrer" data-cursor="OPEN" className="hero-system-open">Open Local Lore <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </div>
  );
}
