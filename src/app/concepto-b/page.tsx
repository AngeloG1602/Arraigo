import type { Metadata } from "next";
import { Literata, Schibsted_Grotesk } from "next/font/google";
import { BotonWhatsappDemo } from "@/components/BotonWhatsappDemo";
import { DesplazamientoSuave } from "@/components/DesplazamientoSuave";
import { GLOBAL, INICIO } from "@/lib/textos";
import { HojaPlan } from "./HojaPlan";
import s from "./estilos.module.css";

// Literata para leer (titulares y texto); Schibsted Grotesk para botones, cifras y la hoja.
const literata = Literata({ subsets: ["latin"], axes: ["opsz"], variable: "--fuente-literata" });
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--fuente-schibsted" });

export const metadata: Metadata = {
  title: "Concepto B · Plan con sello — Arraigo",
  robots: { index: false, follow: false },
};

const { hero, planEscrito } = INICIO;

export default function ConceptoB() {
  return (
    <div className={`${literata.variable} ${schibsted.variable} ${s.raiz}`}>
      <DesplazamientoSuave />
      <header className={s.cabecera}>
        <p className={s.franja}>{GLOBAL.franjaSimulacion}</p>
        <p className={s.marca}>
          {GLOBAL.marca}
          <span className={s.descriptor}>{GLOBAL.descriptor}</span>
        </p>
      </header>

      <main className={s.lienzo}>
        <div className={s.columnaTexto}>
          <section className={s.hero} aria-labelledby="titular">
            <h1 id="titular" className={s.titular}>
              {hero.titularB}
            </h1>
            <p className={s.bajada}>{hero.bajada}</p>
            <div className={s.acciones}>
              <a href="/agendar" className={s.botonPrincipal}>
                {hero.botonPrincipal}
              </a>
              <BotonWhatsappDemo
                texto={hero.botonSecundario}
                mensaje={GLOBAL.whatsapp.inicio}
                clases={{
                  boton: s.botonSecundario,
                  ventana: s.ventana,
                  mensaje: s.ventanaMensaje,
                  cerrar: s.botonPrincipal,
                }}
              />
            </div>
            <p className={s.nota}>{hero.nota}</p>
          </section>

          <section className={s.plan} aria-labelledby="titular-plan">
            <h2 id="titular-plan" className={s.planTitular}>
              {planEscrito.titular}
            </h2>
            <p>{planEscrito.texto}</p>
          </section>
        </div>

        <div className={s.columnaHoja}>
          <HojaPlan />
        </div>
      </main>
    </div>
  );
}
