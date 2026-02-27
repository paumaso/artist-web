import type { Artista } from "./types";
import perfil from "../assets/images/hero/bioimage.jpg";

export const artista: Artista = {
  nombre: "Leyre",
  apellido: "Bernuz Vera",
  fullName: "Leyre Bernuz Vera",
  profesion: "Artista Visual Contemporánea",
  bio: "Su práctica artística explora la materialidad del recuerdo y los objetos como archivos de memoria colectiva. Trabajando desde el collage, la instalación y la escultura, construye narrativas que dialogan entre lo personal y lo universal.",
  bioExtendida: "Residente en Barcelona, su trabajo ha sido exhibido en espacios independientes y colectivos de arte contemporáneo. Investiga las huellas que dejan los objetos cotidianos y su capacidad para evocar temporalidades compartidas.",
  imagenPerfil: perfil,
  social: {
    instagram: "https://www.instagram.com/bernuzveraleyre/",
    linkedin: "https://www.linkedin.com/in/leyre-bernuz-vera-78151127b/"
  },
  seo: {
    title: "Leyre Bernuz Vera | Artista Visual Contemporánea",
    description: "Portafolio oficial de Leyre Bernuz Vera. Explora sus obras de instalación, escultura y arte contemporáneo.",
    keywords: ["arte contemporáneo", "instalación", "escultura", "artista española", "Barcelona", "collage"]
  },
  formacion: [
    "Grado en Bellas Artes, Universidad de Barcelona",
  ],
  exposiciones: [
  ]
} as const;