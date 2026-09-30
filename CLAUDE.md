# CLAUDE.md — Arraigo · Implantes y rehabilitación oral

Sitio de portafolio de Nova Network. **Negocio ficticio.** Lee también `BRIEF.md` (el negocio), `TEXTOS.md` (todo el copy) y `PLAN.md` (rebanadas y estado).

## Cómo trabajas

- Una rebanada a la vez, en el orden de `PLAN.md`. Antes de escribir código propones el plan de la rebanada y esperas aprobación.
- No inventas textos, precios, nombres ni reglas. Todo sale de `BRIEF.md` y `TEXTOS.md`. Si algo falta, te detienes y preguntas.
- No cambias la dirección visual por tu cuenta: aplicas el concepto de abajo. Si crees que algo del concepto no funciona, lo dices y propones, pero no lo cambias sin aprobación.
- Cada rebanada termina con `/verificar` en verde, `PLAN.md` actualizado y un pull request con capturas o, si no puedes tomarlas, con la lista de rutas a revisar en la vista previa de Vercel.
- Commits pequeños y en español: `R3: página Equipo`.
- Si una herramienta o dominio está bloqueado por la red, lo dices y sigues con lo demás. Nunca simulas un resultado.
- **Imágenes que todavía no existen:** si una foto de `IMAGENES.md` no está en `public/img/`, dejas un marcador de posición con la proporción final, un color del concepto y el nombre del archivo esperado en texto pequeño. Nunca usas fotos de stock ni imágenes externas. El diseño debe sostenerse sin fotos: tipografía, color, SVG y movimiento primero.

## Stack

Next.js (App Router, `src/`) · TypeScript estricto · Tailwind con tokens en `src/styles/tokens.css` · GSAP + ScrollTrigger + Lenis para movimiento · Vitest para reglas · Playwright + axe para flujos y accesibilidad · Vercel · Neon Postgres solo para la agenda (vía `DATABASE_URL`).

## Reglas de negocio

Están en `BRIEF.md`, sección 4 (R1 a R15). Se implementan como **funciones puras** en `src/lib/reglas/` y cada una tiene su prueba en `tests/reglas/`. La interfaz y la API solo llaman a esas funciones; nunca reimplementan una regla.

Zona horaria: siempre `America/Bogota`. Festivos: lista fija de festivos de Colombia 2026 y 2027 en `src/lib/reglas/festivos.ts`, con la fuente oficial citada en un comentario.

## Datos

- Acceso a datos detrás de una interfaz (`src/lib/datos/`). Implementación en memoria para desarrollo y pruebas; implementación Neon cuando existe `DATABASE_URL`.
- El formulario nunca pide datos de salud (R7).
- **Modo demostración** (`NEXT_PUBLIC_MODO_DEMO=true`, activo por defecto): no se envían correos ni mensajes a terceros; la confirmación se muestra en pantalla y avisa que es una demo. Los botones de WhatsApp y llamada no abren nada real: muestran una ventana con el mensaje prellenado (ver `TEXTOS.md` → Global).

## Concepto visual

> **Pendiente.** Se completa en la sesión "Fijar concepto" con: nombre, metáfora, paleta (hex con nombre), tipografía (familias y escala), diagramación, momento memorable y firma de movimiento.

## Movimiento

- Un solo momento orquestado por página como máximo (el del inicio es el principal). El resto son respuestas a acciones del usuario: abrir, elegir, enviar, confirmar.
- Nada de revelar cada sección con fade-up al hacer scroll.
- Solo se animan `transform` y `opacity`. Interfaz: 150–300 ms. Momento orquestado: 400–900 ms por elemento.
- `prefers-reduced-motion`: sin desplazamientos, sin Lenis, contenido completo visible.
- El texto del hero se ve sin esperar JavaScript. La animación nunca retrasa el LCP.
- Nada se mueve mientras la persona lee un bloque de texto.

## Legibilidad (público de 55 a 75 años)

Texto base ≥ 18 px, interlineado 1,6, contraste ≥ 7:1 en texto de cuerpo, zonas táctiles ≥ 48 px, sin carruseles automáticos, sin texto sobre foto sin respaldo sólido, errores de formulario explicados en texto.

## Prohibido

- Fondo crema con serif y acento terracota; fondo negro con un solo acento neón; azul clínico.
- Contenido cortado en tarjetas redondeadas idénticas con la misma sombra gris.
- Etiqueta en mayúsculas encima de cada título; una sola palabra resaltada en el titular.
- Numeración 01 / 02 / 03 si el contenido no es una secuencia (el proceso del tratamiento sí lo es).
- Flecha al final de cada botón; íconos genéricos dentro de círculos.
- Fotos de apretones de manos o gente sonriendo a la cámara.
- Frases: "sin dolor", "garantizado", "el mejor", "resultados inmediatos", "soluciones integrales", "calidad y compromiso".
- Secretos en el repositorio. Datos de salud en formularios.

## Simulación

Franja visible en todas las páginas: "Concepto de Nova Network — negocio ficticio". `noindex, nofollow` en todo el sitio y `robots.txt` que bloquea todo. Dirección con la marca "dirección ficticia".

## Terminado (por rebanada)

`npm run build` sin errores · tipos y lint limpios · Vitest en verde · Playwright en verde · axe sin fallos críticos ni serios · capturas a 390, 768 y 1440 px · `PLAN.md` actualizado.
