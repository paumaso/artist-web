import type { Obra } from "./types";

import cobarde from "../assets/images/obras/colages/cobarde.jpg"
import laCaceria from "../assets/images/obras/colages/la-caceria.jpg"
import paseoNocturno from "../assets/images/obras/colages/paseo-nocturno.jpg"
import puzzlePaisaje from "../assets/images/obras/otros/puzle-paisaje.jpg"
import puzzlePaisaje1 from "../assets/images/obras/otros/puzle-paisaje.1.jpg"
import puzzlePaisaje2 from "../assets/images/obras/otros/puzle-paisaje.2.jpg"
import lesterJr from "../assets/images/obras/otros/lesterjr.jpg"
import lesterJr1 from "../assets/images/obras/otros/lesterjr.1.jpg"
import pedralbes from "../assets/images/obras/pinturas/pedralbes.jpg"
import mañanaSeraUnGranDia from "../assets/images/obras/colages/mañana-sera-un-dran-dia.jpg"
import radiografiaDeLaHabitacion from "../assets/images/obras/colages/radiografia-de-la-habitacion.jpg"
import radiografiaDeLaHabitacion1 from "../assets/images/obras/colages/radiografia-de-la-habitacion.1.jpg"
import oleajeMetrosDeProfundidad from "../assets/images/obras/otros/oleaje-a-metros-de-profundidad-puedo-respirar.jpg"
import montpedros from "../assets/images/obras/otros/montpedros.jpg"
import allaDondeVoyMePersiguen from "../assets/images/obras/otros/alla-donde-voy-me-acompaña.jpg"
import veoVeo from "../assets/images/obras/colages/veo-veo.jpg"
import febrero from "../assets/images/obras/colages/febrero.jpg"
import gallo from "../assets/images/obras/pinturas/gallo.jpg"
import puerto from "../assets/images/obras/colages/puerto.jpg"
import ciervo from "../assets/images/obras/pinturas/ciervo.jpg"
import mouton from "../assets/images/obras/pinturas/mouton.jpg"
import paisajeNocturno from "../assets/images/obras/colages/paisaje-nocturno.jpg"
import laFlor from "../assets/images/obras/pinturas/la-flor.jpg"
import laFlor1 from "../assets/images/obras/pinturas/la-flor.1.jpg"

import principeDelBosque from "../assets/images/obras/pinturas/el-gran-principe-del-bosque.jpg"
import principeDelBosque1 from "../assets/images/obras/pinturas/el-gran-principe-del-bosque.1.jpg"

import juegoPiezas from "../assets/images/obras/otros/juego-de-piezas.jpg"
import juegoPiezas1 from "../assets/images/obras/otros/juego-de-piezas.1.jpg"
import caracol from "../assets/images/obras/pinturas/caracol.jpg"

import deseos1 from "../assets/images/obras/pinturas/deseos1.jpg"
import deseos2 from "../assets/images/obras/pinturas/deseos2.jpg"
import deseos3 from "../assets/images/obras/pinturas/deseos3.jpg"


export const obras: Obra[] = [
  {
    id: "cobarde",
    slug: "cobarde",
    titulo: "Cobarde",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2026,
    tecnica: "Collage y pintura al óleo",
    dimensiones: "120 x 150 cm",
    imagenes: [cobarde],
    imagenPrincipal: cobarde,
    destacada: true,
    disponible: true,
    materiales: ["Óleo"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "la-caceria",
    slug: "la-caceria",
    titulo: "La caceria",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2026,
    tecnica: "Collage",
    dimensiones: "80 x 60 cm",
    imagenes: [laCaceria],
    imagenPrincipal: laCaceria,
    destacada: true,
    disponible: true,
    materiales: ["Papel fotográfico", "Encaje", "Pigmentos", "Madera"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "paseo-nocturno",
    slug: "paseo-nocturno",
    titulo: "Paseo nocturno",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2025,
    tecnica: "Pintura al óleo",
    dimensiones: "54,1x 45,1 x 1,6 cm.",
    imagenes: [paseoNocturno],
    imagenPrincipal: paseoNocturno,
    destacada: false,
    disponible: true,
    materiales: ["Madera"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "mañana-sera-un-gran-dia",
    slug: "mañana-sera-un-gran-dia",
    titulo: "Mañana será un gran día",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2025,
    tecnica: "Collage, papeles pintados al óleo",
    dimensiones: " 20,5 x 27,5 cm",
    descripcion: "Reinterpretación de juguetes industriales desechados. La cerámica interviene para crear nuevas narrativas sobre la obsolescencia.",
    imagenes: [mañanaSeraUnGranDia],
    imagenPrincipal: mañanaSeraUnGranDia,
    destacada: false,
    disponible: true,
    materiales: ["Papel", "Oleó"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "radiografia-de-la-habitacion",
    slug: "radiografia-de-la-habitacion",
    titulo: "Radiografía de la habitación",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2025,
    tecnica: "Collage, carton",
    dimensiones: "75 x 55,7 cm.",
    descripcion: "Reinterpretación de juguetes industriales desechados. La cerámica interviene para crear nuevas narrativas sobre la obsolescencia.",
    imagenes: [radiografiaDeLaHabitacion, radiografiaDeLaHabitacion1],
    imagenPrincipal: radiografiaDeLaHabitacion,
    destacada: false,
    disponible: true,
    materiales: ["Carton"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "veo-veo",
    slug: "veo-veo",
    titulo: "Veo Veo",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2025,
    tecnica: "Collage y pintura al oleo",
    dimensiones: "98 x 79cm.",
    imagenes: [veoVeo],
    imagenPrincipal: veoVeo,
    destacada: false,
    disponible: true,
    materiales: ["Carton"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "oleaje-a-metros-de-profundidad-puedo-respirar",
    slug: "oleaje-a-metros-de-profundidad-puedo-respirar",
    titulo: "Oleaje a metros de profundidad puedo respirar",
    categoriaId: "otros",
    categoriaSlug: "otros",
    año: 2026,
    tecnica: "Móvil de papeles pintados y alambre",
    dimensiones: "98 x 79cm.",
    imagenes: [oleajeMetrosDeProfundidad],
    imagenPrincipal: oleajeMetrosDeProfundidad,
    destacada: false,
    disponible: true,
    materiales: ["Alambre", "Papel"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "montpedros",
    slug: "montpedros",
    titulo: "Montpedrós",
    categoriaId: "otros",
    categoriaSlug: "otros",
    año: 2026,
    tecnica: "Móvil de papeles pintados y alambre",
    dimensiones: "Medidas variables.",
    imagenes: [montpedros],
    imagenPrincipal: montpedros,
    destacada: false,
    disponible: true,
    materiales: ["Alambre", "Papel"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "alla-donde-voy-me-acompaña",
    slug: "alla-donde-voy-me-acompaña",
    titulo: "Allá donde voy me acompaña",
    categoriaId: "otros",
    categoriaSlug: "otros",
    año: 2026,
    tecnica: "Móvil de papeles pintados y alambre",
    dimensiones: "Medidas variables.",
    imagenes: [allaDondeVoyMePersiguen],
    imagenPrincipal: allaDondeVoyMePersiguen,
    destacada: false,
    disponible: true,
    materiales: ["Alambre", "Papel"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "febrero",
    slug: "febrero",
    titulo: "Febrero",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2025,
    tecnica: "Collage, papeles pintados al óleo",
    dimensiones: "42 x 29.7 cm",
    imagenes: [febrero],
    imagenPrincipal: febrero,
    destacada: false,
    disponible: true,
    materiales: ["Papel"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "gallo",
    slug: "gallo",
    titulo: "Gallo",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2025,
    tecnica: "Temple de huevo.",
    dimensiones: "41 x 33 cm",
    imagenes: [gallo],
    imagenPrincipal: gallo,
    destacada: false,
    disponible: true,
    materiales: ["Huevo"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "puerto",
    slug: "puerto",
    titulo: "Puerto",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2025,
    tecnica: "Collage y pintura al óleo.",
    dimensiones: "30 x 40 cm",
    imagenes: [puerto],
    imagenPrincipal: puerto,
    destacada: false,
    disponible: true,
    materiales: ["Lienzo"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "ciervo",
    slug: "ciervo",
    titulo: "Ciervo",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2025,
    tecnica: "Pintura al óleo.",
    dimensiones: "30 x 20 cm",
    imagenes: [ciervo],
    imagenPrincipal: ciervo,
    destacada: false,
    disponible: true,
    materiales: ["Carton"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "mouton",
    slug: "mouton",
    titulo: "Mouton",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2025,
    tecnica: "Pintura al óleo.",
    dimensiones: "27 x 11 cm",
    imagenes: [mouton],
    imagenPrincipal: mouton,
    destacada: false,
    disponible: true,
    materiales: ["Tela"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "paisaje-nocturno",
    slug: "paisaje-nocturno",
    titulo: "Paisaje nocturno",
    categoriaId: "colages",
    categoriaSlug: "colages",
    año: 2025,
    tecnica: "Colage.",
    dimensiones: "27 x 11 cm",
    imagenes: [paisajeNocturno],
    imagenPrincipal: paisajeNocturno,
    destacada: false,
    disponible: true,
    materiales: ["Carton", "Marco"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "juego-a-piezas",
    slug: "juego-a-piezas",
    titulo: "Juego a piezas",
    categoriaId: "otros",
    categoriaSlug: "otros",
    año: 2025,
    tecnica: "Arcilla y alambre pintado al óleo.",
    dimensiones: "Medidas varias.",
    imagenes: [juegoPiezas, juegoPiezas1],
    imagenPrincipal: juegoPiezas,
    destacada: false,
    disponible: true,
    materiales: ["Arcilla"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "el-gran-principe-del-bosque",
    slug: "el-gran-principe-del-bosque",
    titulo: "El Gran Príncipe del bosque",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2025,
    tecnica: "Acrílico, óleo y pintura vinílica",
    dimensiones: "Medidas varias.",
    imagenes: [principeDelBosque, principeDelBosque1],
    imagenPrincipal: principeDelBosque,
    destacada: false,
    disponible: true,
    materiales: ["Bastidor"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "la-flor",
    slug: "la-flor",
    titulo: "S/T",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2025,
    tecnica: "Temple de huevo y óleo",
    dimensiones: "75 x 105 cm",
    imagenes: [laFlor, laFlor1],
    imagenPrincipal: laFlor,
    destacada: false,
    disponible: true,
    materiales: ["Lienzo"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "puzle-paisaje",
    slug: "puzle-paisaje",
    titulo: "Paisaje",
    categoriaId: "otros",
    categoriaSlug: "otros",
    año: 2025,
    tecnica: "Madera recortada y pintada al óleo.",
    dimensiones: "23,5 x 23,5 cm x 1 cm (marco).",
    imagenes: [puzzlePaisaje, puzzlePaisaje1, puzzlePaisaje2],
    imagenPrincipal: puzzlePaisaje,
    destacada: false,
    disponible: true,
    materiales: ["Madera"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "deseos-1",
    slug: "deseos-1",
    titulo: "S/T",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2023,
    tecnica: "Pintura al óleo.",
    dimensiones: "24 x 30 cm",
    imagenes: [deseos1],
    imagenPrincipal: deseos1,
    destacada: false,
    disponible: true,
    materiales: ["Lienzo"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "deseos-2",
    slug: "deseos-2",
    titulo: "S/T",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2023,
    tecnica: "Pintura al óleo.",
    dimensiones: "24 x 30 cm",
    imagenes: [deseos2],
    imagenPrincipal: deseos2,
    destacada: false,
    disponible: true,
    materiales: ["Lienzo"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "lesterjr",
    slug: "lesterjr",
    titulo: "Lester",
    categoriaId: "otros",
    categoriaSlug: "otros",
    año: 2025,
    tecnica: "Cartón y plástico pintado",
    dimensiones: "52,8 x 20 x 30 cm",
    imagenes: [lesterJr, lesterJr1],
    imagenPrincipal: lesterJr,
    destacada: false,
    disponible: true,
    materiales: ["Carton", "Plastico"],
    ubicacion: "Estudio Barcelona"
  },
{
    id: "caracol",
    slug: "caracol",
    titulo: "S/T",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2025,
    tecnica: "Pintura al óleo y cera ",
    dimensiones: "100 x 81 cm",
    imagenes: [caracol],
    imagenPrincipal: caracol,
    destacada: false,
    disponible: true,
    materiales: ["Madera"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "deseos-3",
    slug: "deseos-3",
    titulo: "S/T",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2023,
    tecnica: "Pintura al óleo.",
    dimensiones: "40 x 50 cm",
    imagenes: [deseos3],
    imagenPrincipal: deseos3,
    destacada: false,
    disponible: true,
    materiales: ["Lienzo"],
    ubicacion: "Estudio Barcelona"
  },
  {
    id: "pedralbes",
    slug: "pedralbes",
    titulo: "Pedralbes",
    categoriaId: "pinturas",
    categoriaSlug: "pinturas",
    año: 2025,
    tecnica: "Pintura al Oleo",
    dimensiones: "35 x 25 x 40 cm",
    imagenes: [pedralbes],
    imagenPrincipal: pedralbes,
    destacada: false,
    disponible: true,
    materiales: ["Oleó"],
    ubicacion: "Estudio Barcelona"
  }
];

export const getObrasByCategoria = (categoriaSlug: string): Obra[] =>
  obras.filter(o => o.categoriaSlug === categoriaSlug);

export const getObraBySlug = (slug: string): Obra | undefined =>
  obras.find(o => o.slug === slug);

export const getObrasDestacadas = (): Obra[] =>
  obras.filter(o => o.destacada);

export const getObrasForCarousel = (): Obra[] =>
  obras.filter(o => o.destacada).slice(0, 5);

export const getAllObras = (): Obra[] => obras;