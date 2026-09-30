# Método Nova — sitios que no se ven como uno más

Borrador v0, escrito durante Arraigo (septiembre de 2026). Cuando Arraigo lo valide, se convierte en una skill reutilizable para todos los proyectos de Nova.

---

## Lo que aprendimos en Arraigo C0 (por qué salió genérico)

1. **Se diseñó sin la imagen ancla.** Sin foto, video ni objeto real, todo quedó en bloques de color planos. Lo premium se percibe primero en la imagen.
2. **Se prototipó un fragmento** (hero más una sección). Así no se puede juzgar el ritmo ni la sensación de recorrer el sitio.
3. **Faltaba contexto:** sin menú de navegación, la primera pantalla no decía "esto es una clínica y aquí están sus servicios".
4. **El elemento protagonista era un dibujo simple.** Un objeto del oficio solo funciona si se ve real (foto macro o 3D con materiales reales).
5. **El movimiento era decorativo.** Animaba una pieza al cargar, pero no estaba ligado a lo que el visitante viene a hacer.

---

## Los cinco ingredientes de lo premium

1. **Dirección de arte con imagen real y coherente.** Foto, video o 3D, todo con la misma luz y paleta. La paleta del sitio sale de la imagen ancla, no al revés.
2. **Una idea firma ligada a la función del negocio.** No es un efecto: es la forma en que el sitio hace su trabajo mejor que la competencia (por ejemplo, un hero que ya muestra los horarios libres).
3. **Tipografía y espacio con intención.** Menos elementos, más grandes, más aire. Una tipografía con carácter elegida para el proyecto.
4. **Oficio en las transiciones.** Paso entre páginas sin cortes, desplazamiento suave, respuestas a cada acción (abrir, elegir, confirmar). Todo a 60 fps.
5. **Rendimiento y accesibilidad como parte del lujo.** Cargar rápido y leerse bien a los 65 años también es premium.

---

## Proceso por proyecto

| Paso | Qué se hace | Entregable |
|---|---|---|
| 0 · Referencias | 3 a 5 sitios premiados del nicho o de fuera, con qué tomar y qué no de cada uno | `referencias/notas.md` |
| 1 · Imágenes ancla | Antes de diseñar: la imagen ancla, el objeto protagonista y una persona, con Gemini (ver `IMAGENES-GEMINI.md` como plantilla) | 3 a 6 imágenes en `public/img/` |
| 2 · Idea firma | Una interacción que resuelva el objetivo principal del negocio de forma memorable | Una frase y un boceto |
| 3 · Direcciones | 2 o 3 direcciones de **página completa** (con menú y todas las secciones de Inicio), con las fotos reales, en rutas de prueba | `/concepto-a`, `/concepto-b`… |
| 4 · Compuerta | Revisar en celular real. La pregunta: "¿se lo mostraría a un cliente como pieza de portafolio?". Si no emociona, no se avanza | Elección documentada en `CLAUDE.md` |
| 5 · Construcción | Rebanadas, con la idea firma protegida | PR por rebanada |
| 6 · Pulido | Una pasada solo de oficio: tiempos, estados, transiciones, detalles a 390 y 1440 px | Checklist en verde |

---

## Caja de herramientas

| Herramienta | Para qué | Costo |
|---|---|---|
| **Gemini (Nano Banana)** | Fotografía coherente por serie, editable por instrucciones | Plan de Gemini |
| **Veo (en Gemini)** | Video corto en bucle para héroes, a partir de la imagen ancla | Plan de Gemini |
| **GSAP 3.15** con SplitText, Flip, MorphSVG, DrawSVG y ScrollTrigger | Coreografías de texto, transiciones de un estado a otro, trazos SVG, escenas ligadas al scroll | Gratis (ya instalado) |
| **Lenis** | Desplazamiento suave (se apaga con movimiento reducido) | Gratis (ya instalado) |
| **View Transitions API** | Paso entre páginas sin cortes; una foto que se expande y se convierte en la siguiente página | Gratis (nativo del navegador) |
| **CSS scroll-driven animations** | Efectos ligados al scroll sin JavaScript, muy livianos | Gratis (nativo) |
| **Three.js / React Three Fiber** | 3D real con materiales (titanio, porcelana, luz) | Gratis |
| **Spline** | Escenas 3D diseñadas visualmente, sin código, exportables al sitio | Plan gratis o de pago |
| **Rive** | Animaciones interactivas con estados (por ejemplo, un ícono que responde al elegir) | Plan gratis o de pago |
| **Fontshare** y tipografías de fundición | Tipografías con carácter; las de pago son una inversión que se nota | Gratis o de pago |

---

## Checklist "¿es premium?" (antes de mostrarle a un cliente)

- [ ] En 3 segundos se entiende qué negocio es, para quién y qué hacer.
- [ ] Hay imagen real y coherente; nada parece de banco de fotos ni hecho "rápido con IA".
- [ ] Existe una idea firma que un competidor no tiene y que se puede señalar.
- [ ] Recorrerlo se siente placentero: no hay saltos, cortes ni esperas.
- [ ] Cada animación responde a algo o cuenta algo; ninguna está de adorno.
- [ ] Funciona en un celular de gama media y con movimiento reducido.
- [ ] Si le quito el logo, todavía parece de este negocio y no de cualquiera.
