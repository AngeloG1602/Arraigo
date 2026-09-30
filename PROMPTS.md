# PROMPTS — Claude Code (en orden)

Cada prompt se pega en una **sesión nueva** de claude.ai/code con el repositorio `arraigo` seleccionado. Una sesión por paso: así cada una arranca limpia y consume menos uso de tu plan.

---

## 1 · Sesión "Base" (S1)

```
Este repositorio es el sitio de Arraigo, un negocio ficticio para el portafolio de Nova Network. Lee CLAUDE.md, BRIEF.md y PLAN.md completos. En esta sesión solo haces la rebanada S1, la base técnica; nada de diseño.

1. Renombra la carpeta _claude a .claude (contiene skills del proyecto; no cambies su contenido).
2. Crea un proyecto Next.js con TypeScript, Tailwind, ESLint y App Router dentro de src/, en la raíz del repositorio. No borres ni sobrescribas BRIEF.md, CLAUDE.md, PLAN.md, TEXTOS.md, IMAGENES.md, PROMPTS.md, GUIA.md ni la carpeta referencias/. Si create-next-app no acepta una carpeta con archivos, créalo en una carpeta temporal y mueve lo necesario.
3. Mueve img/ a public/img/ (puede tener solo LEEME.txt; las fotos llegan después).
4. Instala gsap y lenis. Instala y configura Vitest y Playwright con @axe-core/playwright. Agrega capturas/ al .gitignore.
5. Verifica que npm run build pase sin errores.
6. Marca S1 como hecho en PLAN.md y abre un pull request con el resumen.
```

**Después:** en GitHub, abre el pull request → **Merge pull request** → **Confirm merge**.

---

## 2 · Sesión "Conceptos" (C0)

```
Rebanada C0 de PLAN.md. Lee CLAUDE.md, BRIEF.md (sobre todo secciones 3 y 7), TEXTOS.md (Inicio) y referencias/notas.md (tres sitios dentales premiados en Awwwards en 2026, con qué tomar y qué no de cada uno). Si la red te deja abrir sus links, míralos; si no, trabaja con las notas.

Usando la skill frontend-design, construye dos prototipos del hero y de la sección "El plan escrito" de la página de inicio, en /concepto-a y /concepto-b. Deben ser dos direcciones visuales claramente distintas entre sí, no variaciones de color. Todavía no hay fotografías: cada concepto debe verse de nivel premiado solo con tipografía, color, composición, SVG (por ejemplo, el implante: raíz, pilar y corona) y movimiento. Si un concepto necesita foto, deja el marcador de posición que indica CLAUDE.md. Usa los textos de TEXTOS.md.

Antes de escribir código, escribe en el chat el plan de diseño de cada concepto: nombre, metáfora sacada del oficio del negocio, paleta con hex, tipografías, diagramación, momento memorable y firma de movimiento. Revisa cada plan contra la lista "Prohibido" de CLAUDE.md y contra lo que harías por defecto para cualquier clínica dental: si algo es el camino por defecto, cámbialo y dime qué cambiaste. Espera mi aprobación.

Al construir: movimiento real con GSAP y Lenis, versión completa con prefers-reduced-motion, legible para personas de 65 años, impecable en 390 px y en 1440 px. Luego corre /verificar y /revision-diseno sobre las dos rutas, corrige una vuelta y abre un pull request con el plan de diseño de cada concepto y las rutas a revisar.
```

**Después:** en el pull request aparece un comentario de Vercel con el link de vista previa. Abre `/concepto-a` y `/concepto-b` en tu celular y en tu computador. No hagas merge todavía.

---

## 3 · Ajustes a un concepto (en la misma sesión de Conceptos)

Úsalo si ninguno te convence del todo. Sé concreto: qué ves, qué sientes y qué quieres.

```
Sobre /concepto-[a o b]:
- Lo que funciona y no se toca: [...]
- Lo que no me gusta: [qué exactamente, en qué parte, y por qué]
- Lo que quiero sentir: [por ejemplo "más editorial", "más cálido", "menos vacío"]
- Referencia: [link o nombre de la captura en referencias/ que se acerca a lo que quiero]
Corrige, corre /revision-diseno de nuevo y actualiza el mismo pull request.
```

---

## 4 · Sesión "Fijar concepto" (C1)

```
Rebanada C1 de PLAN.md. Elegí el concepto [A o B] (/concepto-[a o b]) del pull request de C0[, con estos ajustes: ...].

1. Documenta el concepto en la sección "Concepto visual" de CLAUDE.md: nombre, metáfora, paleta con hex y nombre, tipografías con escala, diagramación, momento memorable y firma de movimiento (tiempos y curvas).
2. Pasa sus tokens a src/styles/tokens.css y a la configuración de Tailwind.
3. Diseña el logotipo de Arraigo y el favicon en SVG, coherentes con el concepto. Muéstrame el logotipo antes de seguir.
4. Elimina /concepto-a y /concepto-b.
5. /verificar, marca C1 como hecho y abre el pull request.
```

**Después:** merge del pull request de C0 (si no lo hiciste) y del de C1.

---

## 5 · Sesiones de rebanadas (R0 a R8)

Una sesión nueva por rebanada. Solo escribe:

```
/rebanada R0
```

Claude Code te muestra el plan de la rebanada. Respóndele:
- Si está bien: `Aprobado, adelante.`
- Si no: qué cambiar, en frases concretas.

Al terminar abre un pull request. Revisa la vista previa de Vercel, pide cambios en la misma sesión si hace falta, y haz merge. Luego sesión nueva con la siguiente rebanada.

**Antes de R6 (agenda):** conecta la base de datos (ver `GUIA.md`, paso 9).

---

## 6 · Sesión "Publicar"

```
/publicar
```

Corrige lo que salga en ❌ con Claude Code en la misma sesión. Lo marcado como "requiere revisión humana" lo haces tú.

---

## Si algo sale mal

- **Error de build o prueba que no entiendes:** pégalo en la sesión y di "explícamelo en simple y corrígelo".
- **Claude Code se desvía de CLAUDE.md:** "Revisa CLAUDE.md, sección [X]. Lo que hiciste lo contradice en [...]. Corrígelo."
- **El diseño se ve genérico:** "/revision-diseno sobre [ruta]. Sé más duro: ¿qué haría un estudio premiado distinto aquí?"
- **Se acabó el uso del plan en medio de una sesión:** espera a que se renueve y continúa en la misma sesión; el trabajo queda guardado en la rama.
