import type { Categoria } from "./types";

import pinturasImg from "../assets/images/categorias/pinturas.jpg";
import colagesImg from "../assets/images/categorias/colages.jpg";
import otrosImg from "../assets/images/categorias/otros.jpg"
import sobrePapelImg from "../assets/images/categorias/sobre-papel.jpg";

export const categorias: Categoria[] = [
  {
    id: "pinturas",
    slug: "pinturas",
    nombre: "Pinturas",
    descripcion: "Exploración cromática y texturas sobre diversos soportes. Óleos y acrílicos que dialogan con la materialidad del lienzo.",
    imagenDestacada: pinturasImg,
    orden: 1,
    color: "#A89F91"
  },
  {
    id: "colages",
    slug: "colages",
    nombre: "Colages",
    descripcion: "Composiciones táctiles y ensamblajes de elementos encontrados. Papel, tela y objetos resignificados.",
    imagenDestacada: colagesImg,
    orden: 2,
    color: "#8B7E74"
  },
  {
    id: "otros",
    slug: "otros",
    nombre: "Instalaciones o varios",
    descripcion: "Objetos lúdicos y piezas escultóricas de pequeño formato. La infancia revisitada desde la ironía contemporánea.",
    imagenDestacada: otrosImg,
    orden: 3,
    color: "#6B5B4F"
  },
  {
    id: "sobre-papel",
    slug: "sobre-papel",
    nombre: "Sobre papel",
    descripcion: "Obras delicadas, dibujos y experimentación técnica. La fragilidad del soporte como metáfora.",
    imagenDestacada: sobrePapelImg,
    orden: 4,
    color: "#D4C5B9"
  }
];

// Helpers
export const getCategoriaBySlug = (slug: string): Categoria | undefined => 
  categorias.find(c => c.slug === slug);

export const getCategoriasOrdenadas = (): Categoria[] => 
  [...categorias].sort((a, b) => a.orden - b.orden);

export const getCategoriaById = (id: string): Categoria | undefined =>
  categorias.find(c => c.id === id);