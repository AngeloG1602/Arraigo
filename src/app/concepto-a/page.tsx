import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { BotonWhatsappDemo } from "@/components/BotonWhatsappDemo";
import { DesplazamientoSuave } from "@/components/DesplazamientoSuave";
import { GLOBAL, INICIO } from "@/lib/textos";
import { CorteImplante } from "./CorteImplante";
import s from "./estilos.module.css";

// Una sola familia; el eje de ancho (wdth) separa titulares condensados de texto corrido.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--fuente-archivo" });

export const metadata: Metadata = {
  title: "Concepto A · Estratos — Arraigo",
  robots: { index: false, follow: false },
};

const { hero, planEscrito } = INICIO;

export default function ConceptoA() {
  return (
    <div className={`${archivo.variable} ${s.raiz}`}>
      <DesplazamientoSuave />
      <header className={s.cabecera}>
        <p className={s.franja}>{GLOBAL.franjaSimulacion}</p>
        <p className={s.marca}>
          {GLOBAL.marca}
          <span className={s.descriptor}>{GLOBAL.descriptor}</span>
        </p>
      </header>

      <main>
        <section className={s.hero} aria-labelledby="titular">
          <div className={s.heroTexto}>
            <h1 id="titular" className={s.titular}>
              {hero.titularA}
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
          </div>
          <CorteImplante />
        </section>

        <section className={s.plan} aria-labelledby="titular-plan">
          <div className={s.planTexto}>
            <h2 id="titular-plan" className={s.planTitular}>
              {planEscrito.titular}
            </h2>
            <p>{planEscrito.texto}</p>
          </div>

          <figure className={s.testigo}>
            <ol className={s.fases}>
              {planEscrito.fases.map((fase, i) => (
                <li key={fase.nombre} className={s.fase} data-fase={i + 1}>
                  <span className={s.nucleo} aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className={s.faseCuerpo}>
                    <h3 className={s.faseNombre}>{fase.nombre}</h3>
                    <p className={s.faseDuracion}>{fase.duracion}</p>
                    {"pago" in fase && fase.pago ? <p className={s.fasePago}>{fase.pago}</p> : null}
                  </div>
                </li>
              ))}
            </ol>
            <p className={s.total}>{planEscrito.total}</p>
            <figcaption className={s.planNota}>{planEscrito.nota}</figcaption>
          </figure>
        </section>
      </main>
    </div>
  );
}
