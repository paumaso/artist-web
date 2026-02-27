import { defineCollection, z } from "astro:content";

const obrasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    categoria: z.enum(["instalaciones", "escultura", "pintura", "digital"]),
    year: z.number(),
    tecnica: z.string(),
    materiales: z.array(z.string()),
    dimensiones: z.string(),
    descripcion: z.string(),
    imagen: z.string(), 
    galeria: z.array(z.string()).optional(),
    destacada: z.boolean().default(false),
    disponible: z.boolean().default(true),
    precio: z.string().optional(),
    ubicacion: z.string().optional(),
    fecha: z.date(),
    tags: z.array(z.string()).default([])
  })
});

const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descripcionCorta: z.string(),
    year: z.number(),
    tipo: z.enum(["exposicion", "residencia", "comision", "colaboracion"]),
    ubicacion: z.string(),
    fechaInicio: z.date(),
    fechaFin: z.date().optional(),
    imagen: z.string(),
    galeria: z.array(z.string()).optional(),
    comisario: z.string().optional(),
    institucion: z.string().optional(),
    enlace: z.string().url().optional(),
    destacado: z.boolean().default(false)
  })
});

export const collections = {
  obras: obrasCollection,
  proyectos: proyectosCollection
};