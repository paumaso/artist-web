import type { Proyecto } from "./types";

import conColorYForma from "../assets/images/proyectos/con-color-y-forma.jpg"
import taller3 from "../assets/images/proyectos/taller-creacio-3.jpg"
import tempusFugit from "../assets/images/proyectos/deseos.jpg"

export const proyectos: Proyecto[] = [
  {
    id: "con-color-y-forma-transformo-el-espacio",
    slug: "con-color-y-forma-transformo-el-espacio",
    titulo: "Con color y forma transformo el espacio.",
    descripcion: `«Tengo miedo de lo que pueda pasar, pero como no puedo
hacer nada para evitar lo inevitable, prefiero permanecer en el
vacío, en la incertidumbre y refugiarme en un mundo
imaginario.
No creo que sea la única. Todos quieren escapar, cada uno vive
en un mundo diferente y eligen otras vías de escape.»
A partir de esta pequeña reflexión mi trabajo emprende un
camino donde las formas y los colores se funden para crear una
supuesta imagen.
El espacio, ya sea interior o exterior, determina nuestras vidas,
rutinas, vínculos, intereses… En este trabajo me planteo la
posibilidad de reconstruir espacios que habito (-amos) a través
de la pintura y el collage.
Tanto la pintura como el collage me permiten reformular esta
reconstrucción del espacio como un juego, un puzle sin
instrucciones.
En este caso, las obras producidas giran en torno espacios que
provocan una confusa aversión en mí, y en un intento de
combatir el nihilismo y la fatiga que persiste hoy en día, los
convierto en un juego de formas y colores.`,
    año: 2026,
    obras: ["mañana-sera-un-gran-dia", "la-estrella-magna", "paseo-nocturno", "radiografia-de-la-habitacion", "la-caceria", "cobarde", "veo-veo", "alla-donde-voy-me-acompaña", "montpedros", "oleaje-a-metros-de-profundidad-puedo-respirar"],
    imagenPortada: conColorYForma,
    destacado: false,
  },
  {
    id: "temus-fugit",
    slug: "temus-fugit",
    titulo: "Tempus Fugit",
    año: 2023,
    obras: ["deseo-1", "deseo-2", "deseo-3"],
    imagenPortada: tempusFugit,
    destacado: false,
  }
];

export const getProyectoBySlug = (slug: string): Proyecto | undefined =>
  proyectos.find((p) => p.slug === slug);

export const getProyectosDestacados = (): Proyecto[] =>
  proyectos
    .filter(p => p.destacado)
    .sort((a, b) => b.año - a.año);

export const getAllProyectos = (): Proyecto[] =>
  [...proyectos].sort((a, b) => b.año - a.año);

export const getObrasDeProyecto = (
  proyecto: Proyecto,
  todasLasObras: import("./types").Obra[]
) => {
  return proyecto.obras
    .map((obraId) => todasLasObras.find((o) => o.id === obraId))
    .filter((o): o is import("./types").Obra => o !== undefined);
};