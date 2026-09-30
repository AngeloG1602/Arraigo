"use client";

import { useId, useRef } from "react";
import { GLOBAL } from "@/lib/textos";

type Clases = {
  boton: string;
  ventana: string;
  mensaje: string;
  cerrar: string;
};

/**
 * Modo demostración (CLAUDE.md → Datos): el botón no abre WhatsApp; muestra el mensaje
 * prellenado en una ventana modal nativa, que ya maneja foco, Escape y fondo inerte.
 */
export function BotonWhatsappDemo({
  texto,
  mensaje,
  clases,
}: {
  texto: string;
  mensaje: string;
  clases: Clases;
}) {
  const ventana = useRef<HTMLDialogElement>(null);
  const idIntro = useId();

  return (
    <>
      <button type="button" className={clases.boton} onClick={() => ventana.current?.showModal()}>
        {texto}
      </button>
      <dialog ref={ventana} className={clases.ventana} aria-labelledby={idIntro}>
        <p id={idIntro}>{GLOBAL.ventanaDemo.intro}</p>
        <blockquote className={clases.mensaje}>{mensaje}</blockquote>
        <form method="dialog">
          <button type="submit" className={clases.cerrar} autoFocus>
            {GLOBAL.ventanaDemo.cerrar}
          </button>
        </form>
      </dialog>
    </>
  );
}
