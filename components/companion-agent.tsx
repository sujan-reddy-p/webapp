"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CompanionAgent() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

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

  return (
    <div className="companion">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            className="companion-popover"
          >
            <button type="button" onClick={() => setOpen(false)} aria-label="Close agent preview"><X size={12} /></button>
            <span className="section-kicker">Sujan&apos;s agent</span>
            <p>Ask about my work, experience, or whether I could fit your team.</p>
            <span className="companion-coming"><Sparkles size={12} /> Conversation mode coming next</span>
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
