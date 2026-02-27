import type { Proyecto, Obra } from "../../data/types";
import FichaItem from "../ui/FichaItem";
import BackButton from "../ui/BackButton";

interface Props {
  proyecto: Proyecto;
  obras: Obra[];
}

export default function ProyectoPage({ proyecto, obras }: Props) {
  return (
    <section className="bg-stone-50 min-h-screen">
      {/* Header del proyecto */}
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16">
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            </span>
            <BackButton href="/proyectos" label="Volver" />
          </div>

          <h1 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-stone-900 mb-8 max-w-4xl">
            {proyecto.titulo}
          </h1>

          <p className="text-stone-600 font-light leading-relaxed max-w-2xl text-lg md:text-xl">
            {proyecto.descripcion}
          </p>
        </div>
      </div>

      {/* Grid de obras: Imagen Izquierda / Texto Derecha */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 space-y-32">
        {obras.map((obra) => (
          <a 
            key={obra.id} 
            href={`/obra/${obra.slug}`}
            className="block group"
          >
            {/* Aquí definimos el orden: Imagen primero (izquierda), Info después (derecha) */}
            <article className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Imagen - Izquierda */}
              <div className="lg:col-span-7 bg-stone-200 overflow-hidden shadow-lg transition-shadow duration-500 group-hover:shadow-xl">
                <img
                  src={obra.imagenPrincipal.src}
                  alt={obra.titulo}
                  className="w-full h-auto  transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info - Derecha */}
              <div className="lg:col-span-5 flex flex-col justify-top h-full pt-4">
                <h2 className="font-serif italic text-3xl md:text-4xl text-stone-900 mb-6 transition-colors duration-300 group-hover:text-stone-600">
                  {obra.titulo}
                </h2>

                <div className="border-t border-stone-300 pt-6 space-y-4">
                  <div className="text-lg text-stone-700 space-y-2">
                    <FichaItem label="Año" value={obra.año} />
                    <FichaItem label="Técnica" value={obra.tecnica} />
                    <FichaItem label="Dimensiones" value={obra.dimensiones} />
                  </div>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}