# PLAN — Arraigo

Estado: `pendiente` · `en curso` · `hecho`. Claude Code actualiza la columna al cerrar cada rebanada.

| ID | Rebanada | Criterios de aceptación | Estado |
|----|----------|-------------------------|--------|
| S1 | Proyecto base | Next.js + TS + Tailwind + ESLint en `src/`; gsap y lenis instalados; skills en `.claude/`; `npm run build` en verde | pendiente |
| C0 | Prototipos de concepto | `/concepto-a` y `/concepto-b` con hero + primera sección, direcciones claramente distintas, sin depender de fotografía, movimiento real con versión reducida; plan de diseño de cada uno escrito en el PR | pendiente |
| C1 | Fijar concepto | Concepto elegido documentado en `CLAUDE.md`; tokens en `src/styles/tokens.css`; logotipo y favicon en SVG; rutas de concepto eliminadas | pendiente |
| R0 | Esqueleto | Layout, navegación (con menú móvil accesible), pie, franja de simulación, `noindex` + `robots.txt`, fuentes, Lenis y GSAP configurados con `prefers-reduced-motion`, página 404 propia | pendiente |
| R1 | Inicio | Hero final con el momento memorable; secciones de `TEXTOS.md` → Inicio; botón de agendar y WhatsApp visibles en la primera pantalla en móvil; LCP ≤ 2,5 s en Lighthouse móvil | pendiente |
| R2 | Implantes y Rehabilitación completa | Dos páginas con su copy, ilustración SVG del implante (raíz, pilar, corona) en el estilo del concepto, preguntas frecuentes en acordeón accesible | pendiente |
| R3 | Cómo trabajamos y Equipo | Proceso en 5 fases (secuencia real, puede numerarse); tres perfiles del equipo con retrato | pendiente |
| R4 | Precios y pagos, WhatsApp y urgencias | Tabla de precios "desde" con la nota de R15; pago por fases (R13); garantía (R14); WhatsApp con mensaje prellenado distinto por página (ver `TEXTOS.md`); acceso de urgencias en el pie y en Precios (R12); evento `click_whatsapp` | pendiente |
| R5 | Reglas como lógica pura | `src/lib/reglas/`: franjas (R1), bloque único (R2), ventana 24 h–30 días (R3), festivos (R4), edad (R6), límite por persona (R11), inasistencias (R10), fecha de confirmación (R8); una prueba Vitest por regla, incluidos casos límite (medianoche, cambio de mes, festivo en sábado) | pendiente |
| R6 | Agenda de valoración | Flujo: para quién → motivo → día y hora disponibles → datos → autorización de datos (casilla sin marcar) → confirmación en pantalla; usa solo las funciones de R5; errores en texto; funciona con teclado; evento `solicitud_valoracion`; datos en memoria o Neon según `DATABASE_URL`; aviso de modo demostración | pendiente |
| R7 | Panel de Paola | `/panel` con contraseña (`ADMIN_PASSWORD`); citas de hoy y de la semana; marcar confirmada / asistió / no asistió / canceló; las inasistencias alimentan R10 | pendiente |
| R8 | Cierre | Página de Privacidad; títulos y descripciones por página; datos estructurados `Dentist`; imagen para redes 1200 × 630; GA4 por variable de entorno; Lighthouse móvil ≥ 90; axe limpio; checklist de publicación del sistema completo | pendiente |

**Si el tiempo aprieta:** R7 es la primera que se recorta. Nunca se recortan R5 ni la versión reducida del movimiento.
