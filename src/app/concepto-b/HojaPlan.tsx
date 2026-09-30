"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { GLOBAL, INICIO } from "@/lib/textos";
import s from "./estilos.module.css";

gsap.registerPlugin(ScrollTrigger);

const { planEscrito } = INICIO;

/**
 * Momento memorable «El plan se escribe»: cada fase se traza en su renglón de izquierda a
 * derecha, luego el total, y al final cae el sello. Corre una sola vez, cuando la hoja entra
 * en pantalla (en escritorio eso ocurre al cargar). Con movimiento reducido la hoja ya está
 * escrita y sellada.
 */
export function HojaPlan() {
  const hoja = useRef<HTMLElement>(null);

  useEffect(() => {
    const nodo = hoja.current;
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
        const q = gsap.utils.selector(nodo);
        if (reducido) {
          gsap.set(q("[data-renglon]"), { scaleX: 1 });
          gsap.set(q("[data-escrito], [data-sello]"), { opacity: 1, x: 0, scale: 1 });
          nodo.dataset.listo = "true";
          return;
        }

        const tl = gsap.timeline({
          paused: true,
          onComplete: () => {
            nodo.dataset.listo = "true";
          },
        });

        q("[data-fila]").forEach((fila, i) => {
          const inicio = 0.25 + i * 0.18;
          tl.fromTo(
            fila.querySelector("[data-renglon]"),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.45, ease: "power2.inOut" },
            inicio,
          ).fromTo(
            fila.querySelectorAll("[data-escrito]"),
            { opacity: 0, x: -8 },
            { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
            inicio + 0.2,
          );
        });

        tl.fromTo(
          q("[data-cierre] [data-escrito]"),
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, duration: 0.35, ease: "power2.out", stagger: 0.1 },
          ">-0.05",
        ).fromTo(
          q("[data-sello]"),
          { opacity: 0, scale: 1.25 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.in" },
          "+=0.15",
        );

        ScrollTrigger.create({
          trigger: nodo,
          start: "top 85%",
          once: true,
          onEnter: () => tl.play(),
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <figure ref={hoja} className={s.hoja} aria-labelledby="titular-plan">
      <p className={s.membrete}>
        {GLOBAL.marca}
        <span>{GLOBAL.descriptor}</span>
      </p>

      <ol className={s.filas}>
        {planEscrito.fases.map((fase, i) => (
          <li key={fase.nombre} className={s.fila} data-fila="">
            <span className={`${s.filaNumero} ${s.pieza}`} data-escrito="">
              {i + 1}
            </span>
            <div className={`${s.filaTexto} ${s.pieza}`} data-escrito="">
              <p className={s.filaNombre}>{fase.nombre}</p>
              <p className={s.filaDuracion}>{fase.duracion}</p>
            </div>
            {"pago" in fase ? (
              <p className={`${s.filaPago} ${s.pieza}`} data-escrito="">
                {fase.pago}
              </p>
            ) : null}
            <span className={s.renglon} data-renglon="" aria-hidden="true" />
          </li>
        ))}
      </ol>

      <div className={s.cierre} data-cierre="">
        <p className={`${s.total} ${s.pieza}`} data-escrito="">
          {planEscrito.total}
        </p>
        <p className={`${s.hojaNota} ${s.pieza}`} data-escrito="">
          {planEscrito.nota}
        </p>
        {/* El sello repite la nota de TEXTOS.md ("Ejemplo ilustrativo"); por eso es aria-hidden. */}
        <span className={`${s.sello} ${s.pieza}`} data-sello="" aria-hidden="true">
          <span>Ejemplo</span>
          <span>ilustrativo</span>
        </span>
      </div>
    </figure>
  );
}
