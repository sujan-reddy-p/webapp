"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Linkedin, Mail, MessageCircle, X } from "lucide-react";
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

const agentMessages = [
  "The agent is out of tokens for today. It spent them thinking about your next move.",
  "I checked the portfolio twice. The projects are still here. Good sign.",
  "My tiny brain recommends scrolling back to Local Lore.",
  "A recruiter, a map, and an agent walk into a portfolio...",
  "No buzzwords were harmed in the making of this page.",
  "I am currently optimizing for a very good first impression.",
  "The best technical decision today might be sending the message.",
  "I would explain the architecture, but the diagrams are doing fine.",
  "Somewhere between curious and employable feels like a good place to be.",
  "This agent has excellent taste in small interaction details.",
  "The map is live. The rest is a conversation.",
  "I found a source of truth. It says: build things people can use.",
  "A clean interface is just a good idea with better spacing.",
  "The system is calm. The hiring market is... being monitored.",
  "If you like thoughtful products, we may already have something in common.",
  "I have one job: make the next click feel worth it.",
  "The pixels are behaving. That is usually a promising start.",
  "There is a small agent behind the curtain. It brought documentation.",
  "The portfolio has shipped. The coffee is still in development.",
  "I am not saying this is destiny. I am saying the button works.",
  "A useful product beats a very impressive landing page every time.",
  "The map knows where to go next. I am still working on that.",
  "This is the part where a good team says hello.",
  "I support typed data, clear writing, and good snacks.",
  "No infinite scroll here. Just a finite amount of good work.",
  "My favorite feature is still the one that makes the product useful.",
  "The agent is thinking... mostly about edge cases.",
  "One thoughtful hire can change the shape of a team.",
  "I have seen the source code. It has opinions and comments.",
  "A small message can be the beginning of a very good project.",
  "The interface is quiet. The systems underneath are not.",
  "Good software should feel a little like finding a shortcut.",
  "I am keeping an eye on the map and an eye on the opportunity.",
  "The agent recommends curiosity with a side of TypeScript.",
  "Every strong project starts with a question worth answering.",
  "There is no chatbot here yet. There is, however, a very sincere button.",
  "The next version will have more tokens and possibly better jokes.",
  "Source-linked, outcome-minded, cautiously optimistic.",
  "If this feels like your kind of work, that is useful data.",
  "I will be here, quietly rooting for the next conversation.",
];

const localLoreNotes = [
  "Oh, this map has good instincts. I read the sources so you can spend your time choosing the adventure.",
  "Tiny field note: Local Lore is not just pins on a map. It is a curious little agent keeping the city guide fresh.",
  "I like this one. The map turns a normal afternoon into a small, source-backed San Francisco mission.",
  "The agent found the places; the map gives them somewhere to meet. That feels like a useful partnership.",
  "Look closely: every discovery starts as a page I read, then becomes a place you can actually go.",
  "This is my favorite kind of automation—quietly doing the reading, leaving the fun part to you.",
  "The map looks good because the details underneath it are doing their homework.",
  "A little agent, a lot of local context, and one excellent excuse to leave the house.",
];

export function CompanionAgent() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [atPageEnd, setAtPageEnd] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);
  const [agentMessageIndex, setAgentMessageIndex] = useState(-1);
  const [localLoreNoteIndex, setLocalLoreNoteIndex] = useState(0);
  const [localLoreVisible, setLocalLoreVisible] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const wasAtPageEnd = useRef(false);
  const wasLocalLoreVisible = useRef(false);

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
    const target = document.querySelector('[data-companion-zone="local-lore"]');
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !wasLocalLoreVisible.current) {
        setLocalLoreNoteIndex((current) => {
          const candidates = localLoreNotes.map((_, index) => index).filter((index) => index !== current);
          return candidates[Math.floor(Math.random() * candidates.length)];
        });
      }
      wasLocalLoreVisible.current = visible;
      setLocalLoreVisible(visible);
    }, { threshold: 0.32 });
    observer.observe(target);
    return () => observer.disconnect();
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

  useEffect(() => {
    const previous = Number(window.localStorage.getItem("portfolio-agent-message-index"));
    const candidates = agentMessages.map((_, index) => index).filter((index) => index !== previous);
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    setAgentMessageIndex(next);
    window.localStorage.setItem("portfolio-agent-message-index", String(next));
  }, []);

  const showMessage = !popupDismissed && (open || atPageEnd || localLoreVisible);
  const localLoreMode = localLoreVisible && !open && !atPageEnd;

  useEffect(() => {
    const hasTrigger = open || atPageEnd || localLoreVisible;
    if (!hasTrigger) {
      setPopupDismissed(false);
      return;
    }
    if (popupDismissed) return;
    setPopupDismissed(false);
    const timer = window.setTimeout(() => {
      setPopupDismissed(true);
      setOpen(false);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [open, atPageEnd, localLoreVisible, popupDismissed]);

  const toggleAgent = () => {
    if (!open) {
      setPopupDismissed(false);
      setAgentMessageIndex((current) => {
        const candidates = agentMessages.map((_, index) => index).filter((index) => index !== current);
        const next = candidates[Math.floor(Math.random() * candidates.length)];
        window.localStorage.setItem("portfolio-agent-message-index", String(next));
        return next;
      });
    }
    setOpen((value) => !value);
  };

  return (
    <div className="companion">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            className={`companion-popover${atPageEnd && !open ? " companion-end-note" : ""}${localLoreMode ? " companion-context-note" : ""}`}
          >
            {open && <button type="button" onClick={() => setOpen(false)} aria-label="Close agent preview"><X size={12} /></button>}
            <span className="section-kicker">{atPageEnd && !open ? "One last thing" : localLoreMode ? "Local Lore · field note" : "Sujan’s agent"}</span>
            <p>{atPageEnd && !open ? endNotes[noteIndex] : localLoreMode ? localLoreNotes[localLoreNoteIndex] : agentMessages[agentMessageIndex] ?? agentMessages[0]}</p>
            {atPageEnd && !open ? <div className="companion-end-actions"><a href="mailto:sujanreddy.rp@gmail.com"><Mail size={13} /><span>Email</span></a><a href="https://www.linkedin.com/in/sujan-reddy-p/" target="_blank" rel="noreferrer"><Linkedin size={13} /><span>DM on LinkedIn</span></a></div> : localLoreMode ? <span className="companion-coming">Reading the map · checking the good bits</span> : null}
          </motion.div>
        )}
      </AnimatePresence>

        <button
          ref={buttonRef}
          type="button"
          onClick={toggleAgent}
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
