"use client";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

const stops: Array<{ center: [number, number]; zoom: number; bearing: number }> = [
  { center: [15, 28], zoom: 1.25, bearing: -8 },
  { center: [20, 28], zoom: 1.65, bearing: 5 },
  { center: [-20, 34], zoom: 1.35, bearing: -4 },
];

export function TravelMap() {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const map = new maplibregl.Map({
      container: mapElement.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: stops[0].center,
      zoom: stops[0].zoom,
      bearing: stops[0].bearing,
      pitch: 32,
      interactive: false,
      attributionControl: false,
      fadeDuration: 0,
      renderWorldCopies: false,
    });

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let stopIndex = 0;

    const move = () => {
      const next = stops[stopIndex % stops.length];
      map.flyTo({
        ...next,
        pitch: 42,
        duration: 8500,
        essential: false,
        curve: 1.05,
      });
      stopIndex += 1;
      timeoutId = setTimeout(move, 10200);
    };

    map.on("load", () => {
      if (reducedMotion) return;
      timeoutId = setTimeout(move, 1600);
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      map.remove();
    };
  }, []);

  return <div ref={mapElement} className="travel-map-canvas" aria-label="Animated world map" role="img" />;
}
