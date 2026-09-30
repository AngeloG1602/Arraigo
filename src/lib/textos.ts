// Copy literal de TEXTOS.md. No se redacta aquí: si falta un texto, se agrega primero en TEXTOS.md.

export const GLOBAL = {
  franjaSimulacion:
    "Concepto de Nova Network — negocio ficticio. Los datos, personas y testimonios son ilustrativos.",
  marca: "Arraigo",
  descriptor: "Implantes y rehabilitación oral",
  ventanaDemo: {
    intro: "En el sitio real, este botón abre WhatsApp con este mensaje:",
    cerrar: "Entendido",
  },
  whatsapp: {
    inicio: "Hola, vengo de la web de Arraigo y quiero saber si soy candidato a implantes.",
  },
} as const;

export type FasePlan = {
  nombre: string;
  duracion: string;
  pago?: string;
};

export const INICIO = {
  hero: {
    titularA: "Vuelve a morder sin pensarlo.",
    titularB: "Antes de empezar, tu plan por escrito.",
    bajada:
      "Implantes y rehabilitación oral en Cedritos. De la valoración sales con un plan escrito: fases, fechas y precio de cada fase. El mismo especialista te acompaña de principio a fin.",
    botonPrincipal: "Agendar valoración",
    botonSecundario: "Escribir por WhatsApp",
    nota: "Valoración con radiografía panorámica: $120.000. Se descuenta del tratamiento si empiezas en los 60 días siguientes.",
  },
  planEscrito: {
    titular: "Sabes qué va a pasar, cuándo y cuánto cuesta. Antes de empezar.",
    texto:
      "En la valoración revisamos tu boca y tu radiografía, te explicamos las opciones y te entregamos un plan por escrito. Cada fase tiene fecha aproximada y precio cerrado. Si algo cambia en el camino, te lo decimos antes de hacerlo, nunca después.",
    fases: [
      { nombre: "Valoración y radiografía panorámica", duracion: "45 minutos", pago: "$120.000" },
      { nombre: "Cirugía del implante", duracion: "1 hora, con anestesia local", pago: "pago 2 de 3" },
      { nombre: "Cicatrización", duracion: "de 3 a 4 meses, con un diente provisional si está a la vista" },
      { nombre: "Corona definitiva", duracion: "2 citas", pago: "pago 3 de 3" },
      { nombre: "Controles", duracion: "una vez al año" },
    ] satisfies FasePlan[],
    total: "Total desde $4.200.000, pagado en tres momentos.",
    nota: "Ejemplo ilustrativo. Tu plan depende de tu caso.",
  },
} as const;

export const IMPLANTE = {
  // Nombres de las partes según TEXTOS.md → Implantes → Ilustración.
  partes: { corona: "Corona", pilar: "Pilar", raiz: "Raíz (implante)" },
} as const;
