"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;
    let frame = 0;
    let isMousePointer = false;

    const render = () => {
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (!isMousePointer) {
        isMousePointer = true;
        document.body.classList.add("cursor-enhanced");
      }
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.dataset.visible = "true";
      ring.dataset.visible = "true";
    };

    const hover = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      const text = target?.dataset.cursor ?? "";
      ring.dataset.active = target ? "true" : "false";
      ring.dataset.labeled = text ? "true" : "false";
      label.textContent = text;
    };

    const leave = () => {
      dot.dataset.visible = "false";
      ring.dataset.visible = "false";
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", hover, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", hover);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("cursor-enhanced");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true">
        <span ref={labelRef} />
      </div>
    </>
  );
}
