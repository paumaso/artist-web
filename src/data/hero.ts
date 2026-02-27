import carrusel1 from "../assets/images/hero/hero-carrusel-1.jpg";
import carrusel2 from "../assets/images/hero/hero-carrusel-2.jpg";
import carrusel3 from "../assets/images/hero/hero-carrusel-3.jpg"

import type { HeroSlide } from "./types";


export const heroSlides = [
  {
    id: "hero-001",
    imagen: carrusel1,
    alt: "Instalación lumínica en espacio arquitectónico",
    titulo: "Resonancias Lumínicas",
    subtitulo: "Instalación, 2023",
  },
  {
    id: "hero-002",
    imagen: carrusel2,
    alt: "Detalle de textura en óleo sobre lienzo",
    titulo: "Estratos de Memoria",
    subtitulo: "Óleo sobre lienzo, 120x150cm, 2023",
  },
  {
    id: "hero-003",
    imagen: carrusel3,
    alt: "Detalle de textura en óleo sobre lienzo",
    titulo: "Estratos de Memoria",
    subtitulo: "Óleo sobre lienzo, 120x150cm, 2023",
  },
] satisfies HeroSlide[];

export const getHeroSlides = (): readonly HeroSlide[] => heroSlides;

export const getHeroSlideById = (id: string): HeroSlide | undefined =>
  heroSlides.find((slide) => slide.id === id);