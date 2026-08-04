"use client";

import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Check,
  Database,
  Filter,
  Gauge,
  Github,
  Layers3,
  Network,
  Radio,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  BaseEdge,
  Edge,
  EdgeProps,
  Handle,
  Node,
  NodeProps,
  Position,
  ReactFlow,
  ReactFlowProvider,
  getBezierPath,
  useReactFlow,
} from "@xyflow/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ComponentType, SVGProps, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type SystemNodeData = {
  active: boolean;
  complete: boolean;
  eyebrow: string;
  label: string;
  metric?: string;
  detail: string;
  facts: readonly string[];
  tags: readonly string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  kind: "source" | "process" | "store" | "output";
};

const stages = [
  {
    number: "01",
    eyebrow: "Data ingestion",
    title: "Implemented asynchronous market ingestion",
    summary: "Built paginated Python asyncio collectors against the Polymarket Data and CLOB APIs to ingest condition metadata, resolved outcomes, and wallet activity.",
    stat: "463,296",
    statLabel: "conditions indexed",
    technologies: ["Polymarket Data API", "CLOB API", "Python asyncio", "paginated collectors"],
    evidence: "Indexed 463,296 conditions and expanded 9,989 wallet candidates into a reproducible research dataset.",
  },
  {
    number: "02",
    eyebrow: "Data engineering",
    title: "Built a columnar enrichment pipeline",
    summary: "Joined trade activity to resolved winners, categories, entities, leagues, and block timestamps with Pandas and PyArrow; persisted analytical artifacts in Parquet and SQLite.",
    stat: "96K",
    statLabel: "wallet/category profiles",
    technologies: ["Pandas", "Parquet", "PyArrow", "SQLite"],
    evidence: "Produced 96K wallet/category profiles and corrected buy-side-only P&L using activity-to-outcome joins.",
  },
  {
    number: "03",
    eyebrow: "Data quality",
    title: "Implemented deterministic behavior filters",
    summary: "Applied price-zone, bot, trap, market-maker, sizing, and minimum-evidence heuristics before estimating wallet skill.",
    stat: "7,230",
    statLabel: "clean tracked wallets",
    technologies: ["20–80¢ entry zone", "bot heuristics", "dollar-weighted P&L", "sizing analysis"],
    evidence: "Reduced 9,989 raw candidates to 7,230 validated wallets and excluded contaminated observations from downstream scoring.",
  },
  {
    number: "04",
    eyebrow: "Statistical modeling",
    title: "Designed conservative specialist scoring",
    summary: "Combined Wilson lower bounds, binomial significance, Bayesian aggregation, dynamic quartiles, recency, timing, and relative position sizing.",
    stat: "266",
    statLabel: "strict specialists",
    technologies: ["Wilson bounds", "binomial testing", "Bayesian aggregation", "dynamic quartiles"],
    evidence: "Identified 266 strict category specialists without treating aggregate profitability as sufficient evidence of repeatable skill.",
  },
  {
    number: "05",
    eyebrow: "Real-time processing",
    title: "Built same-side consensus detection",
    summary: "Processed live BUY events through an asynchronous WebSocket loop and clustered independently qualified wallets by condition, side, and time window.",
    stat: "837",
    statLabel: "resolved clusters sampled",
    technologies: ["WebSockets", "async event loop", "same-side clustering", "weighted consensus"],
    evidence: "Evaluated 837 resolved clusters using participant weights derived from category skill, conviction, timing, and entry context.",
  },
  {
    number: "06",
    eyebrow: "API and observability",
    title: "Exposed auditable signal records",
    summary: "Validated signals with Pydantic, persisted structured JSON artifacts, and exposed wallet profiles, clusters, and latest signals through read-only FastAPI endpoints.",
    stat: "67.4%",
    statLabel: "aggregate in-sample win rate",
    technologies: ["FastAPI", "Pydantic", "JSON records", "read-only endpoints"],
    evidence: "Achieved a 67.4% aggregate in-sample win rate while preserving every input, weight, and decision for paper-trading review.",
  },
] as const;

function SystemNode({ data }: NodeProps<Node<SystemNodeData>>) {
  const Icon = data.icon;

  return (
    <div className={`flow-node flow-node-${data.kind}${data.active ? " is-active" : ""}${data.complete ? " is-complete" : ""}`}>
      <Handle type="target" position={Position.Top} />
      <div className="flow-node-icon"><Icon width={16} height={16} /></div>
      <div>
        <small>{data.eyebrow}</small>
        <strong>{data.label}</strong>
        {data.metric && <b>{data.metric}</b>}
      </div>
      {data.complete && <Check className="flow-node-check" width={11} height={11} />}
      {data.active && (
        <div className="flow-node-inspector" role="tooltip">
          <p>{data.eyebrow}</p>
          <strong>{data.label}</strong>
          <ul>{data.facts.slice(0, 2).map((fact) => <li key={fact}>{fact}</li>)}</ul>
        </div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

function PacketEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data }: EdgeProps) {
  const [path] = getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, curvature: .34 });
  const isLive = Boolean(data?.live);
  const isComplete = Boolean(data?.complete);

  return (
    <>
      <BaseEdge id={id} path={path} className={`flow-edge${isLive ? " is-live" : ""}${isComplete ? " is-complete" : ""}`} />
      {isLive && (
        <>
          <circle r="4.5" className="flow-packet">
            <animateMotion dur="1.8s" repeatCount="indefinite" path={path} />
          </circle>
          <circle r="2.5" className="flow-packet flow-packet-late">
            <animateMotion begin=".65s" dur="1.8s" repeatCount="indefinite" path={path} />
          </circle>
        </>
      )}
    </>
  );
}

const nodeTypes = { system: SystemNode };
const edgeTypes = { packet: PacketEdge };

const nodeBlueprints = [
  { id: "activity", stage: 0, x: 5, y: 5, eyebrow: "Live source", label: "Market activity", detail: "Polymarket activity records are collected per wallet and retained at trade granularity for profiling and P&L reconstruction.", facts: ["Key: proxyWallet → wallet profile", "Fields: conditionId, side, price, size, usdcSize, outcomeIndex"], tags: ["Polymarket Data API", "activity JSON"], icon: Activity, kind: "source" },
  { id: "conditions", stage: 0, x: 215, y: 5, eyebrow: "Reference", label: "Conditions + CLOB", detail: "Condition and token metadata supplies the resolution truth that raw activity does not contain.", facts: ["Map: conditionId → winning token + outcome", "Winner flag resolves net inventory to $1 or $0"], tags: ["Polymarket CLOB API", "conditions_index.json"], icon: Radio, kind: "source" },
  { id: "collect", stage: 0, x: 110, y: 120, eyebrow: "asyncio", label: "Paginated collectors", metric: "463K indexed", detail: "Asynchronous Python collectors traverse paginated market and activity endpoints, then normalize source responses into stable research artifacts.", facts: ["463,296 conditions in the May 2026 snapshot", "Activity pages persisted per wallet before aggregation"], tags: ["Python asyncio", "pagination", "JSON artifacts"], icon: Workflow, kind: "process" },
  { id: "lake", stage: 1, x: 5, y: 245, eyebrow: "Parquet", label: "Raw research lake", detail: "Large trade history is stored outside Git as local analytical artifacts and queried independently of the presentation layer.", facts: ["38.5 GB trade-level Parquet source", "5.4M+ historical trades stored in SQLite"], tags: ["Parquet / PyArrow", "SQLite", "local snapshots"], icon: Database, kind: "store" },
  { id: "join", stage: 1, x: 215, y: 245, eyebrow: "Pandas + PyArrow", label: "Outcome enrichment", metric: "96K profiles", detail: "Activity is joined to resolution metadata and aggregated into wallet/category profiles with corrected position economics.", facts: ["Inventory key: conditionId + outcomeIndex", "PnL split into swing and hold-to-resolution"], tags: ["Pandas joins", "96K profiles", "winner map"], icon: Layers3, kind: "process" },
  { id: "filter", stage: 2, x: 110, y: 370, eyebrow: "Deterministic", label: "Noise filters", metric: "7,230 clean", detail: "Filtering removes observations that inflate trade-count accuracy without demonstrating directional skill.", facts: ["Predicate: 0.20 ≤ entry_price ≤ 0.80", "9,989 candidates → 7,230 clean wallets"], tags: ["bot / trap filters", "dollar-weighted P&L"], icon: Filter, kind: "process" },
  { id: "score", stage: 3, x: 110, y: 495, eyebrow: "Statistical", label: "Specialist scoring", metric: "266 strict", detail: "A category-specific weighted model converts historical evidence into a bounded conviction score rather than generalizing total wallet P&L.", facts: ["conviction = Σ(wᵢfᵢ) / Σwᵢ; capped at 1", "Weights: skill .30, timing .20, thickness .15, price .15, entity .12, recency .08"], tags: ["Wilson lower bound", "binomial significance", "266 specialists"], icon: Gauge, kind: "process" },
  { id: "socket", stage: 4, x: 5, y: 620, eyebrow: "WebSockets", label: "Live BUY events", detail: "The signal engine subscribes directly to Polymarket’s live activity stream and processes only tracked-wallet entries.", facts: ["wss://ws-live-data.polymarket.com", "Subscription: topic=activity, type=trades"], tags: ["websockets", "async for message"], icon: Radio, kind: "source" },
  { id: "cluster", stage: 4, x: 215, y: 620, eyebrow: "Same side", label: "Consensus engine", metric: "837 sampled", detail: "Qualified BUY events are deduplicated by wallet and accumulated into a condition-and-position cluster.", facts: ["Key: conditionId + YES/NO position", "Consensus = (YES weight − NO weight) / total"], tags: ["active_clusters", "weighted consensus", "837 resolved"], icon: Network, kind: "process" },
  { id: "signal", stage: 5, x: 110, y: 745, eyebrow: "Structured JSON", label: "Auditable signal", metric: "67.4% in sample", detail: "A fired cluster is serialized as an inspectable daily signal record for paper-trading evaluation.", facts: ["Stores side, cluster size, weights, and consensus", "File: signals/YYYY-MM-DD.json"], tags: ["signals/YYYY-MM-DD.json", "paper trading"], icon: ShieldCheck, kind: "output" },
  { id: "api", stage: 5, x: 110, y: 870, eyebrow: "FastAPI", label: "Read-only API", detail: "FastAPI reads the artifacts produced by the research pipeline; it does not duplicate scoring logic or mutate trading state.", facts: ["GET /wallets/{address} · /signals/latest", "GET /clusters/active · /health"], tags: ["GET /health", "environment-configured roots"], icon: ServerCog, kind: "output" },
] as const;

const edgeBlueprints = [
  ["activity", "collect", 0],
  ["conditions", "collect", 0],
  ["collect", "lake", 1],
  ["collect", "join", 1],
  ["lake", "join", 1],
  ["join", "filter", 2],
  ["filter", "score", 3],
  ["score", "cluster", 4],
  ["socket", "cluster", 4],
  ["cluster", "signal", 5],
  ["signal", "api", 5],
] as const;

const focusNodeIds = [
  ["activity", "conditions", "collect"],
  ["collect", "lake", "join"],
  ["join", "filter", "score"],
  ["filter", "score", "cluster"],
  ["score", "socket", "cluster", "signal"],
  ["cluster", "signal", "api"],
] as const;

function SystemCanvas({ active }: { active: number }) {
  const { fitView } = useReactFlow();
  const nodes = useMemo<Node<SystemNodeData>[]>(() => nodeBlueprints.map((node) => ({
    id: node.id,
    type: "system",
    position: { x: node.x, y: node.y },
    draggable: false,
    selectable: false,
    style: { pointerEvents: node.stage === active ? "auto" : "none" },
    data: {
      active: node.stage === active,
      complete: node.stage < active,
      eyebrow: node.eyebrow,
      label: node.label,
      metric: "metric" in node ? node.metric : undefined,
      detail: node.detail,
      facts: node.facts,
      tags: node.tags,
      icon: node.icon,
      kind: node.kind,
    },
  })), [active]);

  const edges = useMemo<Edge[]>(() => edgeBlueprints.map(([source, target, stage], index) => ({
    id: `edge-${index}`,
    source,
    target,
    type: "packet",
    data: { live: stage === active, complete: stage < active },
  })), [active]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const focus = new Set<string>(focusNodeIds[active]);
      void fitView({
        nodes: nodes.filter((node) => focus.has(node.id)),
        padding: .3,
        minZoom: .8,
        maxZoom: 1.22,
        duration: 0,
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [active, fitView, nodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      minZoom={.35}
      maxZoom={1.3}
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      preventScrolling={false}
      nodesConnectable={false}
      nodesFocusable={false}
      elementsSelectable={false}
      proOptions={{ hideAttribution: true }}
      aria-label="Convergence data architecture"
    />
  );
}

export function ConvergenceCaseStudy() {
  const [active, setActive] = useState(0);
  const systemRef = useRef<HTMLElement>(null);
  const activeRef = useRef(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = systemRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        snap: {
          snapTo: (progress) => Math.round(progress * (stages.length - 1)) / (stages.length - 1),
          duration: { min: .08, max: .18 },
          delay: .02,
          ease: "power2.inOut",
        },
        onUpdate: ({ progress }) => {
          const next = Math.min(stages.length - 1, Math.round(progress * (stages.length - 1)));
          if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
          }
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <main className="conv-page">
      <nav className="conv-nav">
        <a href="/recruiter">← Portfolio</a>
        <a href="https://github.com/sujan-reddy-p/Convergence" target="_blank" rel="noreferrer">View repository <Github size={14} /></a>
      </nav>

      <header className="conv-hero">
        <div>
          <p className="conv-kicker">Convergence / Polymarket research system</p>
          <h1>From market activity.<br /><em>To auditable signals.</em></h1>
          <p>Designed and implemented an asynchronous research pipeline that ingests Polymarket activity, identifies statistically validated category specialists, detects real-time same-side consensus, and exposes inspectable signal records through FastAPI.</p>
          <a href="#system">Inspect the architecture <ArrowDown size={15} /></a>
        </div>
        <div className="conv-hero-data" aria-label="Convergence key results">
          <span><strong>463K</strong><small>conditions indexed</small></span>
          <span><strong>96K</strong><small>wallet profiles</small></span>
          <span><strong>266</strong><small>strict specialists</small></span>
          <span><strong>837</strong><small>resolved clusters</small></span>
        </div>
      </header>

      <section id="system" ref={systemRef} className="conv-story-section">
        <div className="conv-story-shell">
          <div className="conv-story-copy">
            <p className="conv-story-label">System architecture</p>
            <div className="conv-story-stage-deck">
              {stages.map((stage, index) => (
                <article
                  key={stage.number}
                  aria-hidden={index !== active}
                  className={`conv-story-step${index === active ? " is-active" : ""}`}
                >
                  <div className="conv-story-marker"><span>{stage.number}</span><i /></div>
                  <p className="conv-story-eyebrow">{stage.eyebrow}</p>
                  <h3>{stage.title}</h3>
                  <p className="conv-story-summary">{stage.summary}</p>
                  <div className="conv-story-stat"><strong>{stage.stat}</strong><small>{stage.statLabel}</small></div>
                  <div className="conv-story-evidence">
                    <p><Sparkles size={13} /> Engineering evidence</p>
                    <strong>{stage.evidence}</strong>
                  </div>
                  <div className="conv-story-tech">{stage.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </article>
              ))}
            </div>
          </div>

          <aside className="conv-system-map">
            <div className="conv-system-map-head">
              <div><i /> System architecture</div>
              <span>{stages[active].number} <small>/ 06</small></span>
            </div>
            <div className="conv-flow-canvas">
              <ReactFlowProvider><SystemCanvas active={active} /></ReactFlowProvider>
            </div>
            <div className="conv-system-map-progress">
              {stages.map((stage, index) => <span key={stage.number} className={index <= active ? "is-active" : ""}>{stage.number}</span>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="conv-result">
        <div><p className="conv-kicker">Evaluation results</p><h2>Validated specialists produced stronger signals as independent cluster size increased.</h2></div>
        <div className="conv-result-grid"><span><strong>67.4%</strong><small>aggregate resolved cluster win rate</small></span><span><strong>86.7%</strong><small>five-wallet clusters, in sample</small></span><span><strong>20–80¢</strong><small>most repeatable entry zone</small></span></div>
      </section>

      <section className="conv-stack">
        <div><p className="conv-kicker">Technical implementation</p><h2>Asynchronous collection, columnar analytics, statistical validation, and a typed API surface.</h2></div>
        <div className="conv-stack-grid">{["Python", "asyncio", "FastAPI", "WebSockets", "Pandas", "SQLite", "Parquet", "PyArrow", "Polymarket APIs", "Wilson testing", "Bayesian scoring", "JSON artifacts"].map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <footer className="conv-footer">
        <p>Research and paper-trading system. Signal generation is auditable; live order execution is intentionally disabled.</p>
        <a href="https://github.com/sujan-reddy-p/Convergence" target="_blank" rel="noreferrer">Read the source <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
