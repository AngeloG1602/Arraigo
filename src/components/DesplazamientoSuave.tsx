"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis sincronizado con el ticker de GSAP. Con prefers-reduced-motion no se crea:
 * el desplazamiento queda nativo.
 */
export function DesplazamientoSuave() {
  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (consulta.matches) return;

    const lenis = new Lenis({ lerp: 0.12 });
    const alAvanzar = (tiempo: number) => lenis.raf(tiempo * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(alAvanzar);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(alAvanzar);
      lenis.destroy();
    };
  }, []);

  return null;
}
