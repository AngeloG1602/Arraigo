"use client";

import { gsap } from "gsap";
import { type CSSProperties, useEffect, useRef } from "react";
import { IMPLANTE } from "@/lib/textos";
import s from "./estilos.module.css";

/**
 * Corte del maxilar: encía, hueso cortical, hueso esponjoso y basalto.
 * Momento memorable «El implante se asienta»: la raíz baja enroscándose, encaja el pilar
 * y se posa la corona. Solo se animan transform y opacity. Con movimiento reducido
 * las piezas ya están puestas (el CSS nunca las oculta en ese caso).
 */
// El viewBox recorta el aire vacío y el borde izquierdo para que el diente llene la columna;
// los estratos siguen de largo hasta el borde derecho.
const X0 = 40;
const ANCHO = 560;
const Y0 = 120;
const ALTO = 580;
const alto = (y: number) => `${((y - Y0) / ALTO) * 100}%`;

export function CorteImplante() {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodo = raiz.current;
    if (!nodo) return;
    nodo.dataset.mov = "activo";

    const mm = gsap.matchMedia();
    mm.add(
      {
        movimiento: "(prefers-reduced-motion: no-preference)",
        reducido: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        const { reducido } = ctx.conditions as { movimiento: boolean; reducido: boolean };
        if (reducido) {
          gsap.set(nodo.querySelectorAll("[data-pieza]"), { opacity: 1, y: 0 });
          nodo.dataset.listo = "true";
          return;
        }

        const q = gsap.utils.selector(nodo);
        gsap
          .timeline({
            delay: 0.3,
            defaults: { ease: "power3.out" },
            onComplete: () => {
              nodo.dataset.listo = "true";
            },
          })
          .fromTo(q("[data-pieza=raiz]"), { y: -230, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
          // Las roscas avanzan tres pasos mientras baja: se lee como un tornillo que entra.
          .fromTo(q("[data-roscas]"), { y: 0 }, { y: -54, duration: 0.9 }, "<")
          .fromTo(q("[data-pieza=pilar]"), { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
          .fromTo(q("[data-pieza=corona]"), { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
          .fromTo(
            q("[data-pieza=rotulo]"),
            { opacity: 0 },
            { opacity: 1, duration: 0.25, stagger: 0.08 },
            "-=0.1",
          );
      },
    );

    return () => mm.revert();
  }, []);

  const roscas = Array.from({ length: 22 }, (_, i) => 250 + i * 18);

  return (
    <div ref={raiz} className={s.corte}>
      <svg viewBox={`${X0} ${Y0} ${ANCHO} ${ALTO}`} className={s.corteSvg} aria-hidden="true" focusable="false">
        <defs>
          <pattern id="trabeculas" width="48" height="40" patternUnits="userSpaceOnUse">
            <rect width="48" height="40" fill="#C9A24E" />
            <ellipse cx="12" cy="10" rx="7" ry="4.5" fill="#B38C3E" />
            <ellipse cx="36" cy="16" rx="5" ry="6" fill="#B38C3E" />
            <ellipse cx="22" cy="31" rx="8" ry="4" fill="#B38C3E" />
            <ellipse cx="44" cy="36" rx="3.5" ry="3" fill="#B38C3E" />
          </pattern>
          <clipPath id="cuerpo-implante">
            <path d="M238 300 H302 L296 520 Q270 572 244 520 Z" />
          </clipPath>
        </defs>

        {/* Estratos: encía con festón alrededor del diente, cortical, esponjoso, basalto */}
        <path
          d="M0 276 C120 276 180 274 200 268 C208 265 214 264 222 264 L318 264 C326 264 332 265 340 268 C360 274 420 276 800 276 V330 H0 Z"
          fill="#8E3F48"
        />
        <rect x="0" y="330" width="800" height="30" fill="#CFC9BC" />
        <rect x="0" y="360" width="800" height="250" fill="url(#trabeculas)" />
        <rect x="0" y="610" width="800" height="90" fill="#231F1D" />

        {/* Raíz de titanio con roscas recortadas a su silueta */}
        <g data-pieza="raiz" className={s.pieza}>
          <path d="M238 300 H302 L296 520 Q270 572 244 520 Z" fill="#9AA0A4" />
          <g clipPath="url(#cuerpo-implante)">
            <g data-roscas="">
              {roscas.map((y) => (
                <path key={y} d={`M230 ${y + 6} L310 ${y - 2}`} stroke="#6E7478" strokeWidth="5" />
              ))}
            </g>
          </g>
          <rect x="262" y="306" width="6" height="220" fill="#C3C8CB" opacity="0.7" />
        </g>

        {/* Pilar */}
        <path data-pieza="pilar" className={s.pieza} d="M250 258 H290 L298 302 H242 Z" fill="#B7BCBF" />

        {/* Corona: molar con cúspides */}
        <path
          data-pieza="corona"
          className={s.pieza}
          d="M200 262 C192 222 192 180 206 156 C216 140 232 144 242 154 C254 140 270 138 284 152 C296 140 314 138 328 154 C342 170 348 214 342 262 C318 270 224 270 200 262 Z"
          fill="#F4F3EF"
          stroke="#231F1D"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Líneas guía hacia los rótulos */}
        <g data-pieza="rotulo" className={s.pieza} stroke="#231F1D" strokeWidth="2">
          <line x1="348" y1="200" x2="362" y2="200" />
          <line x1="300" y1="282" x2="362" y2="282" />
          <line x1="304" y1="450" x2="362" y2="450" />
        </g>
      </svg>

      <ul
        className={s.rotulos}
        aria-hidden="true"
        style={{ "--rotulo-x": `${((362 - X0) / ANCHO) * 100}%` } as CSSProperties}
      >
        <li data-pieza="rotulo" className={s.pieza} style={{ top: alto(200) }}>
          {IMPLANTE.partes.corona}
        </li>
        <li data-pieza="rotulo" className={s.pieza} style={{ top: alto(282) }}>
          {IMPLANTE.partes.pilar}
        </li>
        <li data-pieza="rotulo" className={s.pieza} style={{ top: alto(450) }}>
          {IMPLANTE.partes.raiz}
        </li>
      </ul>
    </div>
  );
}
