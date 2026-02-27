import type { Proyecto } from "./types";

import conColorYForma from "../assets/images/proyectos/con-color-y-forma.jpg"
import deseos from "../assets/images/proyectos/deseos.jpg"
import taller3 from "../assets/images/proyectos/taller-creacio-3.jpg"

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
    id: "deseos",
    slug: "deseos",
    titulo: "Deseos.",
    descripcion: `Les següents pintures mostren els meus desitjos més recents, tenir un control del temps. 
El temps és una cosa inevitable i incontrolable, no podem jugar a ser Déu, i és per això que al final, la frustració ens acaba consumint. No tenir el control de les coses és un fet que l’ésser humà, la majoria de vegades, no pot suportar bé, encara que es pot aprendre des de l’imprevist i no caure en el descontrol.
El descontrol és quan no hi ha cap mena de control, la frustració i la desesperació s'apoderen del cos humà i el fan arribar al seu límit. En aquesta sèrie d’obres s’il·lustra el desesperat desig de poder manipular el temps un cop ja l’ésser humà arriba al seu límit.

Durant el procés de creació he pogut sentir aquest descontrol, però a la vegada he après a aprendre dels imprevistos i de no fer tot d’una manera exactament perfecta. Irònicament, el fet d’utilitzar pintura a l’oli per fer les pintures ha fet que hagués de prendre més temps encara perquè la pintura s'assequés, i això va fer que al principi m’amoïnes pel fet que potser no s’assecaven a temps. Més tard vaig adonar-me que si la pintura no s’assecava o alguna pinzellada no sortia com tenia planejada, no era cap problema, ja que era inevitable i incontrolable.
`,
    año: 2023,
    obras: ["deseos-1", "deseos-2", "deseos-3"],
    imagenPortada: deseos,
    destacado: false,
  },
  {
    id: "taller-creacio-3",
    slug: "taller-creacio-3",
    titulo: "Taller de Creació III.",
    año: 2024,
    obras: ["febrero", "gallo", "puerto", "ciervo", "mouton", "paseo-nocturno", "juego-a-piezas", "el-gran-principe-del-bosque", "la-flor", "puzle-paisaje", "lester", "caracol"],
    imagenPortada: taller3,
    destacado: false,
  },
];

export const getProyectoBySlug = (slug: string): Proyecto | undefined =>
  proyectos.find((p) => p.slug === slug);

export const getProyectosDestacados = (): Proyecto[] =>
  proyectos.filter((p) => p.destacado);

export const getAllProyectos = (): Proyecto[] => proyectos;

export const getObrasDeProyecto = (
  proyecto: Proyecto,
  todasLasObras: import("./types").Obra[]
) => {
  return proyecto.obras
    .map((obraId) => todasLasObras.find((o) => o.id === obraId))
    .filter((o): o is import("./types").Obra => o !== undefined);
};