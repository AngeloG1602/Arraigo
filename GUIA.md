# GUÍA — Arraigo, paso a paso

Todo el trabajo pasa por GitHub, Claude Code en la web (claude.ai/code) y Vercel. No necesitas instalar nada en tu computador.

**Qué hay en este kit**

| Archivo | Para qué |
|---|---|
| `GUIA.md` | Esta guía |
| `BRIEF.md` | El negocio completo: reglas, requerimientos, competencia, legal |
| `CLAUDE.md` | Las reglas que Claude Code sigue en cada sesión |
| `PLAN.md` | Las rebanadas con criterios de aceptación |
| `TEXTOS.md` | Todo el copy del sitio |
| `IMAGENES.md` | Los prompts de las 9 imágenes |
| `PROMPTS.md` | Los prompts de Claude Code, en orden |
| `_claude/skills/` | Skills: frontend-design, /rebanada, /verificar, /revision-diseno, /publicar |
| `referencias/notas.md` | Plantilla para tus referencias |

**Ritmo objetivo:** día 1, pasos 3 a 8 (hasta tener el concepto fijado). Día 2, rebanadas R0 a R4. Día 3, R5 a R8 y publicación.

---

## Día 1

**Paso 1 — Imágenes: se pueden dejar para después.** El sitio se construye con marcadores de posición donde irán las fotos. Genera las de `IMAGENES.md` cuando quieras (antes de publicar como máximo) y súbelas a `public/img/` con el nombre exacto; el sitio las toma sin cambiar código. Ojo: sin fotos el sitio funciona, pero la sensación premium final depende mucho de ellas.

**Paso 2 — Referencias: ya están.** `referencias/notas.md` trae tres sitios dentales premiados en Awwwards en 2026, con qué tomar y qué no de cada uno. Recomendado (5 minutos): ábrelos en tu navegador para que tu criterio también esté calibrado cuando revises los conceptos.

**Paso 3 — Repositorio (3 min).** En github.com → **New repository** → nombre `arraigo` → **Private** → marca **Add a README file** → **Create repository**.

**Paso 4 — Subir el kit (3 min).** En el repositorio: **Add file → Upload files**. Arrastra el *contenido* de la carpeta del kit (los archivos `.md` y las carpetas `_claude`, `referencias` e `img`), no la carpeta contenedora. Mensaje: `Kit inicial` → **Commit changes**. Revisa que se vean `_claude/skills/` con sus cinco carpetas.

**Paso 5 — Conectar Claude Code (5 min, solo la primera vez).** Entra a claude.ai/code, conecta GitHub y autoriza la app de Claude. Cuando te cree el entorno "Default", deja el nombre y el acceso de red como vienen → **Create & finish**.

**Paso 6 — Sesión "Base".** En claude.ai/code elige el repositorio `arraigo` y pega el prompt 1 de `PROMPTS.md`. Cuando abra el pull request, haz merge en GitHub.

**Paso 7 — Vercel (5 min).** En vercel.com → **Add New… → Project** → importa `arraigo` → deja todo por defecto → **Deploy**. Luego en **Settings → Environment Variables** agrega:
- `NEXT_PUBLIC_MODO_DEMO` = `true`
- `ADMIN_PASSWORD` = una contraseña tuya (para el panel de Paola)

Desde ahora, cada pull request de Claude Code tiene su link de vista previa en un comentario de Vercel. Para pruebas basta el plan Hobby; como el portafolio es para vender, al publicar en tu dominio pasa a Pro.

**Paso 8 — Conceptos y compuerta visual.** Sesión nueva con el prompt 2. Claude Code te muestra primero el plan de diseño de los dos conceptos: léelo y apruébalo o corrígelo. Cuando abra el pull request, revisa `/concepto-a` y `/concepto-b` en tu celular y en tu computador. Pide ajustes con el prompt 3 hasta que uno te guste de verdad. Luego sesión nueva con el prompt 4 para fijar el concepto y hacer el logotipo. Merge de ambos pull requests.

> **La regla de la compuerta:** si no te emociona, no se avanza. Es más barato iterar aquí que después de construir siete páginas.

---

## Día 2

**Paso 9 — Rebanadas R0 a R4.** Una sesión nueva por rebanada: `/rebanada R0`, apruebas el plan, revisas la vista previa, merge. Luego `/rebanada R1`, y así hasta R4. Revisa cada vista previa en el celular primero: el Perfil B entra por ahí.

**Antes de terminar el día — base de datos para la agenda (5 min).** En Vercel, dentro del proyecto: **Storage → Create Database → Neon** (desde el Marketplace) → conéctala al proyecto. Vercel agrega la variable de conexión automáticamente. Si no se llama `DATABASE_URL`, díselo a Claude Code en la sesión de R6.

---

## Día 3

**Paso 10 — Rebanadas R5 a R8.** Igual que ayer. R5 (reglas) no tiene nada visual: revisa que el pull request diga que todas las pruebas pasan. En R6 prueba la agenda completa en la vista previa: agenda para ti, para un familiar, con un año de nacimiento de menor de edad, y dos veces con el mismo WhatsApp. En R7 entra a `/panel` con tu contraseña.

**Paso 11 — Publicar.** Sesión nueva con `/publicar`. Corrige lo que falte. Tú haces la prueba en un iPhone y un Android reales. En Vercel → **Settings → Domains** agrega un subdominio de tu dominio de Nova (por ejemplo `arraigo.` + tu dominio).

**Paso 12 — Cerrar el caso (20 min).**
- Anota las horas reales que te tomó cada día. Es el dato para cotizar.
- Agrega Arraigo al registro de variedad del documento del sistema.
- Graba en tu celular un video de 20 a 30 segundos navegando el sitio y agendando una cita: es tu pieza para WhatsApp y anuncios.

---

## Cómo dar retroalimentación a Claude Code

- Concreto: "el titular se corta mal en 390 px" en vez de "no me gusta".
- Con lo que sí funciona: así no rompe lo bueno.
- Con referencia: "como el movimiento de la ref-2".
- Si algo se ve genérico, dilo tal cual y pide `/revision-diseno` más duro.
