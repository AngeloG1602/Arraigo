---
name: revision-diseno
description: Revisa con ojo crítico el diseño de las páginas indicadas contra el concepto de CLAUDE.md, la lista de prohibidos y la tarjeta de puntuación anti-genérica. Úsala al cerrar una rebanada visual o cuando el usuario escriba /revision-diseno.
---

# /revision-diseno

Actúa como director de arte exigente de un estudio que nunca entrega algo genérico. Revisa las capturas de `capturas/` (o el código, si no hay capturas) de las páginas indicadas.

**Tarjeta de puntuación (8 puntos; se aprueba con 7)**
1. Si quito el logo, el diseño todavía dice de qué negocio y de qué nicho es.
2. Hay un momento memorable que se puede señalar.
3. No aparece nada de la lista "Prohibido" de `CLAUDE.md`.
4. El hero dice qué ofrece, para quién y qué hacer, en menos de 5 segundos.
5. El copy usa datos específicos del negocio (no frases que sirvan a cualquier competidor).
6. Las fotos son coherentes entre sí y con el concepto.
7. El movimiento responde a acciones y existe la versión reducida.
8. Es legible para una persona de 65 años en un celular: tamaño, contraste, zonas táctiles.

**Además revisa:** jerarquía tipográfica, ritmo de espacios, alineaciones que se rompen entre 390 y 1440 px, estados de hover y foco, y cualquier sección que se vea como plantilla.

**Salida:** puntaje con una línea por punto, las 3 correcciones de mayor impacto (concretas: qué cambiar y dónde) y, aparte, lo que está bien y no se debe tocar.
