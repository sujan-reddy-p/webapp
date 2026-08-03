import { ArrowRight, Camera, MapPin, Music2, Plane, Route } from "lucide-react";
import { CompanionAgent } from "@/components/companion-agent";
import { profile } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { TravelMap } from "@/components/travel-map";

const photos = [
  { image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=82", alt: "Stock placeholder of a person walking through a landscape", note: "The long way home" },
  { image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=82", alt: "Stock placeholder of a mountain lake", note: "Stillness, somewhere" },
  { image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=82", alt: "Stock placeholder of a road through the mountains", note: "Room to wander" },
  { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=82", alt: "Stock placeholder of a mountainous horizon", note: "A wider frame" },
];

function StockImage({ image, alt, className = "" }: { image: string; alt: string; className?: string }) {
  return <div role="img" aria-label={alt} className={`stock-image ${className}`} style={{ backgroundImage: `url(${image})` }} />;
}

export function PortfolioExperience() {
  return (
    <main id="top" className="explore-shell visitor-shell relative overflow-hidden bg-[var(--site-bg)] text-[var(--site-text)]">
      <div className="noise" />
      <SiteHeader />
      <CompanionAgent />

      <section id="work" data-companion-zone="projects" className="visitor-intro relative mx-auto max-w-[1120px] px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-44">
        <Reveal className="grid gap-9 border-b border-[var(--line)] pb-14 md:grid-cols-12 md:items-end md:pb-16">
          <div className="md:col-span-8">
            <p className="section-kicker">Outside work</p>
            <h1 className="visitor-display mt-5">A few things I spend time on.</h1>
          </div>
          <p className="section-lead text-sm md:col-span-3 md:col-start-10">Not a second résumé—just the interests that keep my weeks interesting.</p>
        </Reveal>

        <div className="interest-list">
          <Reveal className="interest-row group">
            <span className="interest-number">01</span><StockImage image={photos[0].image} alt={photos[0].alt} className="interest-image" />
            <div><h2><Route size={18} /> Travel</h2><p>New places, long walks, and a growing list of photographs to come back to.</p></div>
          </Reveal>
          <Reveal delay={0.04} className="interest-row group">
            <span className="interest-number">02</span><StockImage image={photos[1].image} alt={photos[1].alt} className="interest-image" />
            <div><h2><Camera size={18} /> Photography</h2><p>A reason to slow down and pay closer attention to ordinary scenes.</p></div>
          </Reveal>
          <Reveal delay={0.08} className="interest-row group">
            <span className="interest-number">03</span><StockImage image="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=82" alt="Stock placeholder of a drone over a landscape" className="interest-image" />
            <div><h2><Plane size={18} /> FPV drones</h2><p>Building, tuning, and flying a small system where every adjustment has a consequence.</p></div>
          </Reveal>
          <Reveal delay={0.12} className="interest-row group">
            <span className="interest-number">04</span><div className="interest-piano" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <div><h2><Music2 size={18} /> Piano</h2><p>Learning from the beginning. No performance yet—just practice.</p></div>
          </Reveal>
        </div>
      </section>

      <section data-companion-zone="journey" className="travel-map-section relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <p className="section-kicker">A map of perspective</p>
            <h2 className="visitor-section-title mt-5">Places I&apos;ll add to the map.</h2>
            <p className="body-copy mt-6">This is a living travel log, not a destination list. The map will eventually hold the places, routes, and small stories worth keeping.</p>
            <p className="visitor-placeholder-note mt-7"><MapPin size={14} /> A real map for now. My own pins and notes come next.</p>
          </Reveal>
          <Reveal delay={0.08} className="travel-map md:col-span-6 md:col-start-7">
            <TravelMap />
            <div className="travel-map-caption"><span>Travel log / Draft 01</span><strong>Map in motion.</strong><small>Built on open map data. Personal pins arrive with the photos.</small></div>
          </Reveal>
        </div>
      </section>

      <section data-companion-zone="tools" className="visitor-photo-section mx-auto max-w-[1320px] px-6 py-28 md:px-10 md:py-40">
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="section-kicker">Through the lens</p>
            <h2 className="visitor-section-title mt-5">Small scenes worth keeping.</h2>
          </div>
          <p className="section-lead text-sm md:col-span-3 md:col-start-10">Stock-photo placeholders for now. This will become a small contact sheet of my own work.</p>
        </Reveal>
        <div className="contact-sheet mt-12 md:mt-16">
          {photos.map((photo, index) => (
            <Reveal key={photo.note} delay={index * 0.05} className={`contact-frame contact-frame-${index + 1}`}>
              <StockImage image={photo.image} alt={photo.alt} />
              <div className="contact-caption"><span>0{index + 1}</span><p>{photo.note}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="fpv-note-section px-6 py-28 md:px-10 md:py-40">
        <Reveal className="fpv-note mx-auto max-w-[1320px]">
          <div className="fpv-note-art"><StockImage image="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1300&q=82" alt="Stock placeholder of a drone in flight" /><span className="fpv-orbit fpv-orbit-one" /><span className="fpv-orbit fpv-orbit-two" /></div>
          <div className="fpv-note-copy">
            <p className="section-kicker">Field note / FPV</p>
            <h2>Build. Fly. <em>Tune.</em> Repeat.</h2>
            <p>FPV is a hands-on engineering hobby: tune a setup, test it, see what changes, then try again.</p>
            <div className="fpv-note-tags"><span>Build</span><span>Test</span><span>Fly</span><span>Repeat</span></div>
          </div>
        </Reveal>
      </section>

      <section id="contact" data-companion-zone="contact" className="explore-contact px-6 py-28 md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-[1320px]">
          <p className="section-kicker">The person behind the résumé</p>
          <div className="mt-7 grid gap-10 border-t border-[var(--line)] pt-8 md:grid-cols-12 md:items-end">
            <h2 className="max-w-5xl text-5xl leading-[.9] tracking-[-.075em] md:col-span-9 md:text-8xl">Curiosity makes the work <em>better.</em></h2>
            <div className="md:col-span-3">
              <p className="body-copy text-sm">Want the concise version? The recruiter view has the projects, results, and ways to get in touch.</p>
              <a href="/recruiter" data-cursor="GO" className="mt-7 inline-flex items-center gap-3 text-sm font-medium">Take the recruiter route <ArrowRight size={15} /></a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative border-t border-[var(--line)] px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between font-mono text-[11px] uppercase tracking-[.1em] text-[var(--muted)]">
          <span>© 2026 {profile.name}</span>
          <span>Made with care</span>
        </div>
      </footer>
    </main>
  );
}
