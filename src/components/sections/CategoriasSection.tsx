import type { Categoria } from "../../data/types";

interface Props {
  categorias: Categoria[];
}

export default function CategoriasSection({ categorias }: Props) {
  return (
    <section className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {categorias.map((cat, index) => (
            <a
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="group relative block overflow-hidden bg-stone-200"
            >

              {/* Contenedor con aspect ratio */}
              <div className="aspect-4/5 relative">
                
                {/* Imagen con zoom sutil en hover (desktop) */}
                <img
                  src={cat.imagenDestacada.src}
                  alt={cat.nombre}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.04]"
                />

                {/* Overlay SIEMPRE visible en móvil, hover en desktop */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent md:from-black/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                {/* Contenido SIEMPRE visible en móvil */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <div className="transform transition-all duration-500 ease-out md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    
                    <h2 className="font-serif text-xl md:text-2xl text-white leading-tight mb-1">
                      {cat.nombre}
                    </h2>

                    <span className="inline-flex items-center gap-1 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/80">
                      Ver obras 
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>

                  </div>
                </div>
              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  );
}