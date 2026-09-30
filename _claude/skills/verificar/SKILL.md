---
name: verificar
description: Corre todas las verificaciones automáticas del proyecto (build, tipos, lint, pruebas, accesibilidad, capturas) y devuelve un resumen en verde o rojo. Úsala al cerrar cada rebanada o cuando el usuario escriba /verificar.
---

# /verificar

Corre en este orden y no te detengas en el primer error: recoge todo.

1. `npm run build`
2. `npx tsc --noEmit`
3. `npm run lint`
4. `npx vitest run` (si existe `tests/reglas/`)
5. Playwright: `npx playwright test` (flujos de conversión y accesibilidad con axe). Si los navegadores de Playwright no se pueden descargar por la red, dilo en el resumen y marca este punto como "no ejecutado", nunca como aprobado.
6. Capturas a 390, 768 y 1440 px de las rutas tocadas, guardadas en `capturas/` (carpeta ignorada por git). Mismo aviso que el punto 5 si no se puede.
7. Una prueba con `reducedMotion: 'reduce'` que confirme que el contenido del hero es visible sin animación.

**Resumen de salida** (tabla): verificación · resultado (verde / rojo / no ejecutado) · detalle. Al final, una línea: "Listo para PR" o "No listo: <motivo>".
