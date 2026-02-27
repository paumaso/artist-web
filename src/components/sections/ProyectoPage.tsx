import { useState, useRef } from "react";
import type { Proyecto, Obra } from "../../data/types";
import FichaItem from "../ui/FichaItem";
import BackButton from "../ui/BackButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  proyecto: Proyecto;
  obras: Obra[];
}

export default function ProyectoPage({ proyecto, obras }: Props) {
  const [obraActiva, setObraActiva] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const obraActual = obras[obraActiva];
  const totalObras = obras.length;

  const scrollToObra = (index: number) => {
    setObraActiva(index);
    const container = scrollRef.current;
    if (!container) return;
    
    const obraElements = container.children;
    if (obraElements[index]) {
      obraElements[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-stone-50 min-h-screen">
      
      {/* Header del proyecto */}
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-6 md:pb-8">
          
          {/* Fila superior: Meta + Volver alineados */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
              Proyecto {proyecto.año}
            </span>
            <BackButton href="/proyectos" label="Volver a proyectos" />
          </div>

          {/* Título */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6">
            {proyecto.titulo}
          </h1>

          {/* Descripción a ancho completo */}
          <p className="text-stone-600 font-light leading-relaxed max-w-none text-base md:text-lg">
            {proyecto.descripcion}
          </p>

        </div>
      </div>

      {/* Contenido scrollable */}
      <div ref={scrollRef} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 space-y-24 md:space-y-32">
        {obras.map((obra, index) => (
          <article
            key={obra.id}
            id={`obra-${index}`}
            className="scroll-mt-48"
            data-index={index}
          >
            {/* Layout obra individual */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              
              {/* Galería de imágenes */}
              <div className="space-y-4">
                {obra.imagenes.map((img, imgIndex) => (
                  <div key={imgIndex} className="bg-stone-100">
                    <img
                      src={img.src}
                      alt={`${obra.titulo} - ${imgIndex + 1}`}
                      className="w-full h-auto object-contain max-h-[80vh]"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>

              {/* Info de la obra - Sticky */}
              <div className="lg:sticky lg:top-64 space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2 block">
                    Obra {index + 1} / {totalObras}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-2">
                    {obra.titulo}
                  </h2>
                </div>

                <div className="border-t border-stone-200 pt-6 space-y-4">
                  <FichaItem label="Año" value={obra.año} />
                  <FichaItem label="Técnica" value={obra.tecnica} />
                  <FichaItem label="Dimensiones" value={obra.dimensiones} />
                </div>

                {obra.descripcion && (
                  <p className="text-stone-600 font-light leading-relaxed border-t border-stone-200 pt-6">
                    {obra.descripcion}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}