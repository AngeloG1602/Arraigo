# Imágenes con Gemini — Arraigo, paso a paso

Reemplaza el flujo de ChatGPT de `IMAGENES.md` (los nombres de archivo son los mismos). Suma dos imágenes del implante real y un video opcional, porque el dibujo plano del implante no convenció.

---

## Cómo funciona (léelo una vez)

1. **Todo en una sola conversación de Gemini**, en el orden de esta guía. Así la luz y la paleta se heredan de imagen en imagen.
2. **Primero la imagen ancla.** No sigas hasta que la sala te guste de verdad: todas las demás se parecen a ella.
3. **Corrige editando, no empezando de cero.** Si una imagen está casi bien, pide el cambio concreto: "baja la saturación", "quita la planta", "que la luz sea más fría". Gemini edita sobre la misma imagen.
4. **Pide variantes cuando dudes:** "Dame otra versión con el sillón más a la derecha".
5. **Descarga siempre en tamaño completo** y guárdala con el nombre exacto de la tabla.
6. **Nunca subas fotos de personas reales** como referencia. Todas las personas son inventadas.

> **Marca de agua:** según tu plan, Gemini puede poner un destello visible en una esquina. Si aparece, avísame. Si queda en el borde, la recorto; si no, genera la misma imagen en Google AI Studio (aistudio.google.com), que usa el mismo modelo.

---

## Paso 0 — Mensaje de estilo (pégalo primero, antes de cualquier imagen)

```
Vamos a crear una serie de fotografías para el sitio web de un consultorio de implantes dentales en Cedritos, Bogotá, Colombia. Todas deben parecer tomadas por el mismo fotógrafo, el mismo día y con el mismo equipo.

Reglas para toda la serie:
- Fotografía documental y editorial, como para una revista de arquitectura o de diseño. Nada de publicidad ni de foto de stock.
- Luz natural fría de mañana de Bogotá: cielo nublado, luz suave y difusa. Acentos cálidos de lámparas interiores solo cuando lo pida.
- Paleta: grises piedra, roble claro, verde grisáceo apagado, blancos cálidos, piel natural.
- Color con contraste suave, negros levantados, saturación baja, grano fino de película.
- Lentes de 35 mm o 50 mm, profundidad de campo corta.
- Personas colombianas creíbles, de edades reales, con piel con textura real, arrugas y canas cuando corresponda. Ropa cotidiana de Bogotá, sin logos.
- Nadie mira a la cámara, salvo en los retratos del equipo.
- Nada de sonrisas de catálogo ni dientes perfectos de anuncio.
- Sin texto, sin logos, sin marcas en equipos, pantallas ni ropa. Manos con cinco dedos y bien formadas.

No generes nada todavía. Responde solo "Entendido" y espera la primera imagen.
```

---

## Fase 1 — Para rehacer los conceptos (hazlas ya)

### 1 · `ancla.jpg` · horizontal 16:9 · hero y referencia de todo

```
Imagen 1 de la serie: la sala de valoración.

Fotografía editorial de una sala de valoración odontológica boutique en un piso 6 de Bogotá. Un ventanal amplio a la izquierda deja ver los cerros orientales, verdes, entre nubes bajas. Un sillón dental moderno tapizado en gris piedra, en el centro-derecha del encuadre, sin instrumental a la vista. Un mueble bajo de roble claro con cajones sin tiradores. Pared de microcemento verde grisáceo. Una planta de hojas grandes en una maceta de barro. Piso de madera clara. Sin personas.

Cámara a la altura de los ojos, lente de 35 mm, f/2.8. Deja el tercio izquierdo del encuadre más despejado y tranquilo. Luz natural fría de mañana entrando por el ventanal, sombras suaves. Aspecto de revista de arquitectura.

Formato horizontal 16:9, máxima resolución.
```

**Revisa:** que parezca un consultorio real y no un render, que no haya texto en ningún lado y que los cerros se vean al fondo.

### 2 · `implante-macro.jpg` · vertical 4:5 · el implante real (NUEVA)

```
Imagen 2 de la serie. Misma luz fría y suave, y la misma paleta que la sala.

Fotografía de producto, en macro, de un implante dental real ya ensamblado: tornillo de titanio con roscas finas, pilar metálico y encima una corona de porcelana color diente natural, con leve translucidez en el borde. El conjunto está de pie sobre una losa de piedra gris pulida. Fondo liso gris piedra que se desvanece.

Luz de estudio lateral suave, con un reflejo fino que recorre las roscas del titanio. Las roscas se ven nítidas. Profundidad de campo corta. Estética de fotografía de relojería o joyería: precisa, limpia, sobria. Sin texto ni marcas.

Formato vertical 4:5, máxima resolución.
```

**Revisa:** que el titanio parezca metal de verdad y no plástico, y que la corona no sea blanca brillante de anuncio.

### 3 · `implante-despiece.jpg` · vertical 4:5 · las tres piezas separadas (NUEVA)

```
Imagen 3 de la serie. El mismo implante de la imagen anterior, con la misma luz y los mismos materiales.

Ahora las tres piezas están separadas y alineadas en vertical, flotando en el aire, con la misma distancia entre ellas: la corona de porcelana arriba, el pilar metálico en el medio y el tornillo de titanio abajo. Las tres centradas.

Fondo liso gris piedra, completamente uniforme, sin sombras proyectadas sobre el fondo y sin superficie de apoyo (las piezas se van a recortar). Luz de estudio suave, reflejos finos en el metal.

Formato vertical 4:5, máxima resolución.
```

**Revisa:** que las tres piezas no se toquen y que el fondo sea parejo de borde a borde.

### 4 · `detalle-trabajo.jpg` · horizontal 3:2 · el plan escrito

```
Imagen 4 de la serie. Misma luz, paleta y estilo fotográfico que la sala de valoración.

Primer plano de las manos de una odontóloga de unos 45 años señalando con un bolígrafo una hoja impresa sobre un escritorio de roble claro. La hoja tiene una tabla de cinco filas, pero el texto no es legible (desenfocado o sin letras reales). Al lado, una tableta muestra una radiografía panorámica dental. Manga de bata gris claro, sin logos.

Profundidad de campo corta, foco en la punta del bolígrafo y en la hoja. Luz de ventana lateral.

Formato horizontal 3:2, máxima resolución.
```

**Revisa:** manos correctas, cinco dedos, y ninguna letra legible en la hoja.

### 5 · `familia-agenda.jpg` · horizontal 3:2 · quien agenda por su papá o su mamá

```
Imagen 5 de la serie. Misma luz, paleta y estilo fotográfico, pero ahora en una casa.

Una mujer colombiana de unos 40 años, sentada junto a su mamá de unos 68 años en la sala de una casa en Bogotá. La hija sostiene un celular y las dos miran la pantalla mientras conversan. No se ve lo que hay en la pantalla. Ropa cotidiana: la hija con saco de lana, la mamá con blusa estampada discreta. Sofá sencillo, cortina de lino, luz de tarde por la ventana.

Nadie mira a la cámara. Gesto natural, tranquilo, de estar decidiendo algo juntas. Lente de 50 mm, profundidad de campo corta.

Formato horizontal 3:2, máxima resolución.
```

### 6 · `paciente-hernando.jpg` · vertical 4:5 · testimonio

```
Imagen 6 de la serie. Misma luz, paleta y estilo fotográfico que la sala de valoración, en la sala de espera del mismo consultorio.

Retrato natural de un hombre colombiano de 67 años, persona inventada: pelo canoso corto, piel con arrugas reales, camisa de cuadros y chaqueta liviana. Está sentado junto al ventanal, mirando hacia afuera, no a la cámara, con una sonrisa leve y tranquila, con la boca casi cerrada. Luz lateral suave del ventanal.

Lente de 50 mm, profundidad de campo corta, fondo del consultorio desenfocado.

Formato vertical 4:5, máxima resolución.
```

---

## Fase 2 — Antes de las páginas internas (R1 a R3)

### 7 · `recepcion.jpg` · horizontal 3:2

```
Imagen 7 de la serie. Mismo consultorio, misma luz, paleta y estilo.

La recepción pequeña del consultorio: mostrador bajo de roble claro, dos sillas cómodas con apoyabrazos (pensadas para personas mayores), luz de ventana lateral y una lámpara cálida encendida sobre el mostrador. Una planta. Sin personas, sin pantallas encendidas, sin texto.

Lente de 35 mm, encuadre a la altura de los ojos. Formato horizontal 3:2, máxima resolución.
```

### 8 · `paciente-comiendo.jpg` · horizontal 3:2

```
Imagen 8 de la serie. Misma paleta y estilo fotográfico, en una casa bogotana.

Una mujer colombiana de unos 62 años, persona inventada, almorzando en una mesa familiar. Muerde una mazorca asada con naturalidad en medio de una conversación, riéndose un poco, sin mirar a la cámara. Plano medio, luz de día, fondo desenfocado de una cocina bogotana con baldosas.

Lente de 50 mm. Formato horizontal 3:2, máxima resolución.
```

### 9 · `dra-lucia.jpg` · vertical 4:5

```
Imagen 9 de la serie. Retrato del equipo, en la sala de valoración de la imagen 1, con la misma luz.

Retrato profesional de una odontóloga colombiana de unos 45 años, persona inventada: pelo castaño recogido, bata clínica gris claro sin logos. De pie, de medio cuerpo, mirando a la cámara con una expresión tranquila y segura. Fondo de la sala desenfocado.

Lente de 85 mm, f/2. Formato vertical 4:5, máxima resolución.
```

### 10 · `dr-esteban.jpg` · vertical 4:5

```
Imagen 10 de la serie. Mismo encuadre, luz y lente que el retrato de la doctora.

Retrato profesional de un cirujano oral colombiano de unos 50 años, persona inventada: barba corta con canas, uniforme quirúrgico verde grisáceo sin logos. De medio cuerpo, mirando a la cámara con una expresión seria y amable.

Formato vertical 4:5, máxima resolución.
```

### 11 · `paola.jpg` · vertical 4:5

```
Imagen 11 de la serie. Mismo encuadre, luz y lente que los retratos anteriores, junto al mostrador de la recepción (imagen 7).

Retrato de una mujer colombiana de unos 32 años, persona inventada, coordinadora de pacientes: blusa sencilla color crudo. De medio cuerpo, mirando a la cámara con una sonrisa natural, no de anuncio.

Formato vertical 4:5, máxima resolución.
```

---

## Fase 3 (opcional) — Video del hero con Veo

En Gemini, elige la opción de video, sube `ancla.jpg` y pega:

```
Anima esta fotografía sin cambiar la composición ni los objetos. La cámara avanza muy lentamente hacia el ventanal, casi imperceptible. Las nubes se mueven despacio sobre los cerros y la luz de la sala cambia levemente, como cuando pasa una nube. Nada más se mueve. Sin personas, sin texto, sin sonido. 8 segundos, horizontal 16:9.
```

Guárdalo como `ancla-loop.mp4`. Si el último cuadro queda muy distinto del primero, no importa: yo hago el bucle y lo comprimo.

---

## Descarta la imagen si ves

- Piel de plástico, caras demasiado simétricas o dientes perfectos de anuncio.
- Manos con dedos de más o deformes.
- Cualquier letra, logo o marca, aunque sea borrosa y parezca texto.
- Luz que no se parece a la de la sala (muy cálida, muy dorada o muy azul).
- Aspecto de render 3D o de banco de fotos.

## Cómo me las pasas

Adjúntalas en este chat (arrástralas al mensaje) con el nombre exacto. Yo las optimizo para la web, las pongo en `public/img/` y las subo.

Con las **seis de la Fase 1** ya puedo rehacer los conceptos.
