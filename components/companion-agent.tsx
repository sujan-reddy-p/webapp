"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const endNotes = [
  "A good next conversation can start with one message.",
  "The best teams are built one thoughtful hire at a time.",
  "If this work sparked a question, I’d be glad to answer it.",
  "There may be a useful next chapter here.",
  "A small conversation could lead somewhere meaningful.",
  "Curiosity is a good reason to say hello.",
  "Worth a quick conversation?",
  "Let’s see whether the fit is real.",
];

export function CompanionAgent() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [atPageEnd, setAtPageEnd] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);
  const wasAtPageEnd = useRef(false);

  useEffect(() => {
    const track = (event: PointerEvent) => {
      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.42;
      const distance = Math.max(Math.hypot(event.clientX - centerX, event.clientY - centerY), 1);
      const x = ((event.clientX - centerX) / distance) * 3.2;
      const y = ((event.clientY - centerY) / distance) * 2.5;
      button.style.setProperty("--eye-x", `${x}px`);
      button.style.setProperty("--eye-y", `${y}px`);
    };

    window.addEventListener("pointermove", track, { passive: true });
    return () => window.removeEventListener("pointermove", track);
  }, []);

  useEffect(() => {
    const trackPageEnd = () => {
      const reachedEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 32;
      if (reachedEnd && !wasAtPageEnd.current) {
        setNoteIndex((current) => (current + 1 + Math.floor(Math.random() * (endNotes.length - 1))) % endNotes.length);
      }
      wasAtPageEnd.current = reachedEnd;
      setAtPageEnd(reachedEnd);
    };

    trackPageEnd();
    window.addEventListener("scroll", trackPageEnd, { passive: true });
    window.addEventListener("resize", trackPageEnd);
    return () => {
      window.removeEventListener("scroll", trackPageEnd);
      window.removeEventListener("resize", trackPageEnd);
    };
  }, []);

  const showMessage = open || atPageEnd;

  return (
    <div className="companion">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            className={`companion-popover${atPageEnd && !open ? " companion-end-note" : ""}`}
          >
            {open && <button type="button" onClick={() => setOpen(false)} aria-label="Close agent preview"><X size={12} /></button>}
            <span className="section-kicker">{atPageEnd && !open ? "One last thing" : "Sujan’s agent"}</span>
            <p>{atPageEnd && !open ? endNotes[noteIndex] : "Ask about my work, experience, or whether I could fit your team."}</p>
            {!atPageEnd || open ? <span className="companion-coming"><Sparkles size={12} /> Conversation mode coming next</span> : <span className="companion-end-spark"><Sparkles size={12} /> Say hello</span>}
          </motion.div>
        )}
      </AnimatePresence>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          data-cursor="ASK"
          aria-label="Speak to Sujan's portfolio agent"
          className="companion-button"
        >
          <span className="companion-antenna" />
          <span className="companion-head">
            <span className="companion-eye" />
            <span className="companion-eye" />
          </span>
          <span className="companion-body"><Bot size={17} /></span>
          <span className="companion-label"><MessageCircle size={11} /> Ask my agent</span>
        </button>
    </div>
  );
}
