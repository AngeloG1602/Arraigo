---
name: publicar
description: Recorre el checklist de publicación del Sistema Express Nova y reporta qué falta antes de salir a producción. Úsala solo cuando el usuario escriba /publicar.
disable-model-invocation: true
---

# /publicar

Revisa cada punto y marca ✅, ❌ o "requiere revisión humana" con el motivo.

- [ ] `/verificar` completo en verde.
- [ ] Lighthouse móvil ≥ 90 en rendimiento en Inicio y Agendar; LCP ≤ 2,5 s, CLS ≤ 0,1.
- [ ] Todos los enlaces internos funcionan; 404 propia.
- [ ] Favicon, imagen para redes 1200 × 630 y título y descripción únicos por página.
- [ ] Franja de simulación visible en todas las páginas; `noindex, nofollow` y `robots.txt` bloqueando todo.
- [ ] Modo demostración activo: la agenda no contacta a nadie y los botones de WhatsApp muestran la ventana de demostración.
- [ ] Privacidad publicada y enlazada desde el formulario; casilla de autorización sin marcar.
- [ ] Ningún secreto en el repositorio; variables solo en Vercel.
- [ ] Ninguna frase prohibida en el sitio (busca en el código: "sin dolor", "garantizado", "el mejor", "resultados inmediatos").
- [ ] Tarjeta de puntuación de `/revision-diseno` ≥ 7 en Inicio.

**Requiere revisión humana (Angelo):** probar en un iPhone real con Safari y en un Android de gama media; completar una cita de punta a punta en la vista previa; mirar el sitio completo con ojos de cliente.
