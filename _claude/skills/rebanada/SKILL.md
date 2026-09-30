---
name: rebanada
description: Construye una rebanada del PLAN.md de principio a fin (plan, código, verificación, PR). Úsala solo cuando el usuario escriba /rebanada seguido de un ID, por ejemplo /rebanada R3.
disable-model-invocation: true
---

# /rebanada <ID>

1. Lee `CLAUDE.md`, `PLAN.md` y la fila de la rebanada pedida. Lee de `BRIEF.md` y `TEXTOS.md` solo lo que esa rebanada necesita.
2. Si la rebanada anterior no está en `hecho`, avisa y pregunta si seguir.
3. Escribe el plan de la rebanada: archivos que vas a crear o tocar, cómo cumples cada criterio de aceptación, qué textos e imágenes usas, y qué pruebas agregas. **Espera la aprobación del usuario.**
4. Crea una rama `rebanada/<id>-<nombre-corto>`.
5. Construye. Usa la skill frontend-design para todo lo visual y respeta el concepto de `CLAUDE.md`. Si falta un texto o una imagen, detente y pregunta; no inventes.
6. Corre `/verificar`. Si algo sale en rojo, corrígelo y vuelve a verificar. No sigas con una verificación en rojo.
7. Corre `/revision-diseno` sobre las páginas que tocaste y aplica las correcciones que tengan sentido.
8. Marca la rebanada como `hecho` en `PLAN.md`.
9. Abre un pull request con: qué hiciste, cómo se cumple cada criterio, resultado de `/verificar`, y la lista de rutas para revisar en la vista previa de Vercel.
