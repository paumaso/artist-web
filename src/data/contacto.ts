import type { Contacto } from "./types";

export const contacto: Contacto = {
  email: "leyrebernuzvera@gmail.com",
  telefono: "+34 612 345 678",
  social: {
    instagram: "https://www.instagram.com/bernuzveraleyre/",
    linkedin: "https://www.linkedin.com/in/leyre-bernuz-vera-78151127b/"
  },
  formulario: {
    campos: [
      { name: "nombre", label: "Nombre", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "mensaje", label: "Mensaje", type: "textarea", required: true }
    ]
  }
} as const;