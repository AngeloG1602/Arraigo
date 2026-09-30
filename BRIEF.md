# BRIEF — Arraigo · Implantes y rehabilitación oral

**Tamaño:** Sitio con función · **Caso:** simulación de portafolio (negocio ficticio)
**Sistema:** Sistema Express Nova v1 · **Preparación:** 28 sep 2026

> Convención: `[ficticio]` = inventado para la simulación. `[fuente]` = dato real investigado, con enlace al final.
> Todo lo que no lleva marca es una decisión de diseño del proyecto.

---

## 1. Negocio

**Qué es.** Consultorio especializado en implantes dentales y rehabilitación oral para adultos que perdieron uno o varios dientes, o que usan prótesis removible y quieren algo fijo. `[ficticio]`

**Dónde.** Cedritos (Usaquén), Bogotá. Consultorio en torre médica, piso 6, tres unidades. Dirección en el sitio: "Calle 145 con Carrera 13 — dirección ficticia". `[ficticio]`

**Desde cuándo.** 2017. Nueve años, unos 1.400 implantes colocados. `[ficticio]`

**Equipo.** `[ficticio]`
- Dra. Lucía Montenegro — rehabilitadora oral, cofundadora. Diseña el plan y la parte visible (coronas, prótesis).
- Dr. Esteban Quiroga — cirujano oral e implantólogo, cofundador. Hace la cirugía.
- Paola Ríos — coordinadora de pacientes. Contesta el WhatsApp, agenda, confirma y cobra.
- Una auxiliar y una higienista.

**Horarios.** Lunes a viernes 8:00–18:00, sábado 8:00–13:00. `[ficticio]`

**Diferencial en una frase.** Antes de empezar, cada paciente sale con un plan escrito: fases, fechas y precio cerrado por fase, y el mismo especialista lo acompaña de principio a fin. `[ficticio]`

**Precios desde** (rangos anclados al mercado real de Bogotá 2026):

| Servicio | Precio en el sitio | Ancla real |
|---|---|---|
| Valoración con radiografía panorámica | $120.000 `[ficticio]` | Valoraciones en Bogotá ~ $100.000 [fuente 1] |
| Implante unitario con corona | desde $4.200.000 `[ficticio]` | Rango Bogotá $2.500.000–$6.000.000 por tratamiento completo [fuente 2] |
| Corona sobre implante (sola) | desde $2.100.000 `[ficticio]` | Rango $1.980.000–$3.200.000 [fuente 1] |
| Rehabilitación de arcada completa (prótesis fija sobre implantes) | "Precio tras valoración" | No se publica cifra: depende de hueso, número de implantes e injertos [fuente 2] |
| Sobredentadura (prótesis removible anclada a implantes) | "Precio tras valoración" | Ídem |

---

## 2. Objetivo del sitio

**Problema de negocio.** Casi todos los contactos llegan por WhatsApp preguntando "¿cuánto vale un implante?". Paola responde un rango, la conversación se enfría y muy pocos llegan a la valoración. Los pacientes mayores desconfían de lo que no entienden, y muchas veces quien escribe es el hijo o la hija. `[ficticio]`

**Acción principal:** agendar una valoración en una franja disponible → evento GA4 `solicitud_valoracion`.
**Acción secundaria:** escribir por WhatsApp con mensaje prellenado según la página → evento `click_whatsapp`.
**Medida de éxito (simulada):** valoraciones agendadas desde la web por mes y tasa de asistencia.

---

## 3. Visitantes

**Perfil A — El paciente (55 a 75 años).** Perdió dientes o usa "caja" (prótesis removible) hace años. Entra por Google o por el link que le mandó un familiar. Lee despacio, en tablet o computador, a veces con gafas. Tolerancia alta a leer, baja a lo confuso. Objeciones: "me va a doler", "a mi edad ya no vale la pena", "no sé si tengo hueso", "me van a cobrar más de lo que dicen".

**Perfil B — El hijo o la hija que agenda (35 a 50 años).** Investiga por su papá o su mamá desde el celular, entre reuniones. Entra por un anuncio de Meta o por Google. Tolerancia baja: quiere proceso, precio desde y agenda en menos de un minuto. Objeciones: "¿es confiable?", "¿cuánto se va a demorar todo?", "¿puedo agendar yo por él?".

**Decisión de experiencia que sale de aquí:** la agenda permite elegir "Para mí" o "Para un familiar", y el sitio se diseña para leer cómodo a 55+ sin volverse lento para el Perfil B.

---

## 4. Reglas de negocio (operador simulado: Paola, coordinadora)

Todas `[ficticio]`, redactadas para que no se puedan leer de dos formas. Cada una tendrá su prueba en `tests/reglas`.

- **R1 · Franjas de valoración.** Solo martes y jueves de 14:00 a 18:00 y sábados de 8:00 a 12:00. Bloques de 45 minutos, con inicio 14:00, 14:45, 15:30, 16:15, 17:00 (martes y jueves) y 8:00, 8:45, 9:30, 10:15, 11:00 (sábado).
- **R2 · Una valoración por bloque.** Un bloque tomado desaparece de la agenda para los demás.
- **R3 · Ventana de agendamiento.** Mínimo 24 horas y máximo 30 días calendario desde el momento de agendar. Hora de referencia: Bogotá (UTC−5).
- **R4 · Festivos.** Los festivos de Colombia no tienen franjas, aunque caigan martes, jueves o sábado.
- **R5 · Precio de la valoración.** $120.000, se paga en el consultorio. Se descuenta del tratamiento si este inicia dentro de los 60 días siguientes.
- **R6 · Para quién.** Solo se atiende a mayores de 18 años. Si agenda un familiar, se piden los datos de quien agenda (nombre, WhatsApp) y del paciente (nombre, año de nacimiento). El paciente debe tener 18 años o más al día de la cita.
- **R7 · Sin datos médicos en la web.** El formulario no pregunta enfermedades, medicamentos ni antecedentes. Solo motivo general a elegir: "Me falta un diente", "Me faltan varios", "Uso prótesis removible", "No estoy seguro". Lo médico se habla en la valoración.
- **R8 · Confirmación.** Paola confirma por WhatsApp el día hábil anterior, entre 8:00 y 18:00 (dentro del horario de la Ley 2300). Si la cita es el martes, confirma el lunes; si es el sábado, confirma el viernes.
- **R9 · Mover o cancelar.** Sin costo hasta 12 horas antes, solo por WhatsApp. El sitio no permite mover citas por sí mismo.
- **R10 · Inasistencias.** Si un mismo número de WhatsApp acumula dos inasistencias sin aviso, la siguiente valoración se agenda solo por WhatsApp con abono previo. La web muestra un mensaje que lo explica y el botón de WhatsApp.
- **R11 · Límite por persona.** Un mismo WhatsApp no puede tener más de una valoración futura activa.
- **R12 · Urgencias.** Dolor, implante suelto o prótesis rota no se agendan por la web: botón directo a WhatsApp y llamada, en horario de atención.
- **R13 · Pago por fases.** El tratamiento se paga en tres momentos: al iniciar, el día de la cirugía y al entregar la corona o prótesis. Arraigo no ofrece crédito propio.
- **R14 · Garantía.** 5 años sobre el implante y 2 años sobre la corona, condicionada a controles anuales y a higiene según indicación. Se detalla por escrito en el plan.
- **R15 · Precios en el sitio.** Siempre "desde", con la nota "el precio final se confirma en la valoración y queda escrito en tu plan".

**Estados que marca una persona (no el software):** confirmada, asistió, no asistió, canceló. Los marca Paola en el panel mínimo (RF9). Sin eso, R10 no se puede cumplir.

---

## 5. Requerimientos

**Funcionales**
- **RF1** Ver los servicios y en qué caso sirve cada uno, en lenguaje de paciente.
- **RF2** Ver el proceso completo: de la valoración a la corona, con tiempos aproximados.
- **RF3** Ver precios desde y cómo se paga (R13, R15).
- **RF4** Agendar una valoración: para mí / para un familiar → motivo → franja disponible → datos → autorización de datos → confirmación. Cumple R1–R7 y R11.
- **RF5** Recibir confirmación en pantalla con fecha, hora, dirección, qué llevar y qué pasa después, y un correo con lo mismo.
- **RF6** WhatsApp con mensaje prellenado según la página de origen.
- **RF7** Urgencias: acceso visible, fuera del flujo de agenda (R12).
- **RF8** Preguntas frecuentes por página, con las objeciones de cada perfil.
- **RF9** Panel mínimo para Paola, con contraseña: citas del día y de la semana, y marcar estado (confirmada, asistió, no asistió, canceló). *Primera rebanada que se sacrifica si el tiempo no alcanza.*

**No funcionales**
- **Legibilidad 55+:** texto base de 18 px o más, interlineado 1,6, contraste 7:1 en texto de cuerpo, zonas táctiles de 48 px, sin carruseles automáticos ni textos sobre fotos sin respaldo.
- **Accesibilidad:** WCAG 2.2 AA; navegación completa con teclado; formulario con errores explicados en texto.
- **Rendimiento:** LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1; Lighthouse móvil ≥ 90.
- **Movimiento:** respeta `prefers-reduced-motion`; nada se mueve mientras la persona lee.
- **Privacidad:** política publicada, autorización sin marcar previamente, ningún dato de salud (R7).
- **Idioma y zona:** español de Colombia, tuteo cálido y respetuoso, hora de Bogotá, pesos colombianos con punto de miles.
- **Dispositivos:** móvil primero para el Perfil B; tablet y escritorio impecables para el Perfil A.

**Páginas:** Inicio · Implantes · Rehabilitación completa · Cómo trabajamos · Equipo · Precios y pagos · Agendar valoración · Privacidad (+ 404 y panel).

---

## 6. Contenido y assets

**Qué existe:** nada. Negocio ficticio.
**Qué produce Nova:**
- Logo y favicon en SVG (sesión 2, Claude).
- Fotografía con IA: consultorio (3), equipo (3 retratos), pacientes adultos mayores en situaciones cotidianas (3). Sin rostros de personas reales.
- Ilustraciones del proceso (implante, pilar, corona) en SVG, en el estilo del concepto elegido. **No se usan fotos de antes y después:** en una simulación serían engañosas, y con clientes reales requieren consentimiento escrito.
- Imagen para compartir en redes (1200 × 630).

**Imagen ancla:** la sala de valoración del consultorio. Se genera primero y todas las demás heredan su luz y paleta.

---

## 7. Concepto visual

**Se decide en código, no en el chat.** Claude Code construye dos prototipos del hero (`/concepto-a` y `/concepto-b`) a partir de este brief, la imagen ancla y las referencias de Angelo en `referencias/`. Angelo elige en la vista previa de Vercel. El concepto elegido queda documentado en `CLAUDE.md` (nombre, metáfora, paleta con hex, tipografía, momento memorable y firma de movimiento).

**Ideas de partida** (Claude Code puede superarlas):
- *Estratos:* arraigo como raíz en suelo firme; capas minerales, titanio, piedra.
- *Plan escrito:* el diferencial del negocio convertido en el momento memorable; el visitante ve un plan con fases, fechas y precio.

**Restricciones del concepto:** nada de azul clínico (todos los competidores lo usan); nada de fondo crema con serif y acento terracota; legibilidad 55+ por encima de cualquier efecto.

## 8. Competencia real (Bogotá norte)

| Sitio | Qué hace bien | Qué deja abierto |
|---|---|---|
| odontologoenbogota.com — Dra. Verónica Forero, Usaquén [fuente 3] | Posiciona por servicio y barrio | Promociones con emojis en la entrada; mensaje de clínica general, no de especialista |
| periodoncistajohannacalderon.com — Cedritos/Usaquén [fuente 4] | Publica rangos de precio y explica qué incluye | Promete "resultados óptimos"; mucho texto de blog, poco recorrido hacia agendar |
| malodental.com.co [fuente 5] | Especialización clara en rehabilitación completa | Se autoproclama "los mejores"; enfocado en turismo dental |
| Doctoralia, listado de implantes en Bogotá [fuente 6] | Es donde el Perfil B compara precios | Todos se ven iguales: foto, precio desde, estrellas |

**El hueco para Arraigo:** nadie está diseñando para el lector de 55+ ni para el hijo que agenda por su papá, y todos dicen "depende de la valoración" sin explicar qué incluye la valoración ni qué pasa después.

---

## 9. Legal y restricciones

- Datos que se recogen: nombre, WhatsApp, correo opcional, año de nacimiento del paciente. Base: Ley 1581 de 2012 [fuente 7].
- Datos sensibles: **no** (R7).
- Mensajes de confirmación y recordatorio: solo dentro del horario de la Ley 2300 de 2023 [fuente 8].
- Publicidad odontológica: debe ser veraz y digna; la Ley 35 de 1989 regula la ética del odontólogo y la Corte Constitucional aclaró que la publicidad no está prohibida en sí misma [fuente 9]. Prohibido en el sitio: "sin dolor", "garantizado", "el mejor", "resultados inmediatos", y cualquier promesa de resultado clínico.
- Simulación: franja "Concepto de Nova Network — negocio ficticio", `noindex`, formulario en modo demostración (guarda en base de datos de prueba, avisa que es una demo, no envía mensajes a terceros).

## 10. Fuera de alcance

Pagos en línea · turismo dental e inglés · historia clínica · recordatorios automáticos por WhatsApp (los hace Paola) · blog · reprogramación de citas desde la web.

## 11. Decisiones pendientes

- **De Angelo:** elegir el concepto visual en la vista previa de Vercel.
- **Verificación del nombre (5 min, manual):** confirmar en el RUES y en la consulta de marcas de la SIC que no exista "Arraigo" en odontología en Bogotá. La búsqueda web del 28 sep no encontró ninguna clínica con ese nombre.

---

## Fuentes (consultadas el 28 sep 2026)

1. Kurati — precios de implantes y valoración en Bogotá: https://kurati.co/odontologia/implantes-dentales/precios/
2. Alejandra Bernal Smile — precio implante Bogotá 2026: https://alejandrabernalsmile.com/precio-implante-dental-bogota/
3. https://odontologoenbogota.com/implantes-dentales-en-usaquen-bogota/
4. https://periodoncistajohannacalderon.com/locations/usaquen/
5. https://malodental.com.co/
6. https://www.doctoralia.co/tratamientos-servicios/implante-dental/bogota
7. Ley 1581 de 2012: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981
8. Ley 2300 de 2023: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=213990
9. Corte Constitucional, C-355 de 1994 sobre publicidad en la Ley 35 de 1989: https://www.corteconstitucional.gov.co/relatoria/1994/C-355-94.htm
