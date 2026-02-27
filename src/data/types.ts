import type { ImageMetadata } from "astro";

// ==================== BASE ====================
export interface Artista {
  nombre: string;
  apellido: string;
  fullName: string;
  profesion: string;
  bio: string;
  bioExtendida?: string;
  imagenPerfil: ImageMetadata;
  social: {
    instagram: string;
    linkedin: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  formacion?: string[];
  exposiciones?: string[];
}

export interface Contacto {
  email: string;
  telefono: string;
  social: {
    instagram?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  formulario: {
    campos: CampoFormulario[];
  };
}

export interface CampoFormulario {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required?: boolean;
  opciones?: string[];
}

// ==================== CATEGORÍAS ====================
export interface Categoria {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  imagenDestacada: ImageMetadata;
  orden: number;
  color: string;
  obrasCount?: number;
}

// ==================== OBRAS ====================
export interface Obra {
  id: string;
  slug: string;
  titulo: string;
  categoriaId: string;
  categoriaSlug: string;
  año: number;
  tecnica: string;
  dimensiones: string;
  descripcion?: string;
  imagenes: (ImageMetadata)[];
  imagenPrincipal: ImageMetadata;
  destacada: boolean;
  disponible: boolean;
  precio?: string; 
  materiales?: string[];
  ubicacion?: string;
}

// ==================== PROYECTOS ====================
export interface Proyecto {
  id: string;
  slug: string;
  titulo: string;
  descripcion?: string;
  año: number;
  obras: string[];
  imagenPortada?: ImageMetadata;
  destacado?: boolean;
}

export interface HeroSlide {
  id: string;
  imagen: ImageMetadata;
  alt: string;
  titulo?: string;
  subtitulo?: string;
}