import type { Proyecto } from "../../data/types";
import type { ImageMetadata } from "astro";

interface ProyectoEnriquecido extends Proyecto {
  cantidadObras: number;
  imagenPreview?: ImageMetadata;
}

interface Props {
  proyectos: ProyectoEnriquecido[];
}

export default function ProyectosPage({ proyectos }: Props) {
  return (
    <section className="bg-stone-50 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proyectos.map((proyecto) => (
            <a
              key={proyecto.id}
              href={`/proyectos/${proyecto.slug}`}
              className="group block bg-white border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-500"
            >
              {/* Imagen landscape - más ancha que alta */}
              <div className="aspect-16/10 overflow-hidden bg-stone-100">
                {proyecto.imagenPreview ? (
                  <img
                    src={proyecto.imagenPreview.src}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-stone-200" />
                )}
              </div>

              {/* Contenido compacto */}
              <div className="p-4">
                <h2 className="font-serif text-lg text-stone-900 leading-tight mb-2 group-hover:text-stone-600 transition-colors line-clamp-1">
                  {proyecto.titulo}
                </h2>

                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-stone-400">
                  <span>{proyecto.año}</span>
                  <span>{proyecto.cantidadObras} {proyecto.cantidadObras === 1 ? 'obra' : 'obras'}</span>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}