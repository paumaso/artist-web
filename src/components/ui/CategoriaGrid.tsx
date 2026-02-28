import { useState, useRef } from "react";
import type { Obra } from "../../data/types";
import type { ImageMetadata } from "astro";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  obras: Obra[];
  obrasPorPagina?: number;
}

export default function CategoriaGrid({ obras, obrasPorPagina = 8 }: Props) {
  const [paginaActual, setPaginaActual] = useState(1);
  const [animando, setAnimando] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const totalObras = obras.length;
  const totalPaginas = Math.ceil(totalObras / obrasPorPagina);
  
  const indiceInicio = (paginaActual - 1) * obrasPorPagina;
  const indiceFin = indiceInicio + obrasPorPagina;
  const obrasPagina = obras.slice(indiceInicio, indiceFin);

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas && !animando) {
      setAnimando(true);
      
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      
      setTimeout(() => {
        setPaginaActual(nuevaPagina);
        setAnimando(false);
      }, 400);
    }
  };

  if (totalObras === 0) {
    return (
      <p className="text-center text-stone-500 mt-16 font-light">
        No hay obras disponibles en esta categoría.
      </p>
    );
  }

  return (
    <div className="space-y-12" ref={gridRef}>
      {/* Grid por filas con alturas variables */}
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 items-start transition-all duration-500 ${
          animando ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {obrasPagina.map((obra) => {
          const img: ImageMetadata = obra.imagenPrincipal;

          return (
            <a
              key={obra.slug}
              href={`/obra/${obra.slug}`}
              className="group block"
            >
              {/* Imagen con altura natural */}
              <div className="overflow-hidden bg-stone-100">
                <img
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={`${obra.titulo} - ${obra.tecnica}, ${obra.año}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  style={{
                    aspectRatio: `${img.width} / ${img.height}`
                  }}
                />
              </div>

              {/* Pie editorial */}
              <div className="mt-5">
                <h3 className="font-serif italic text-base text-stone-900 leading-snug transition-colors duration-300 group-hover:text-stone-600 line-clamp-2">
                  {obra.titulo}
                </h3>
                
                <p className="text-xs text-stone-400 mt-2 tracking-[0.1em] font-light">
                  {obra.año} · {obra.tecnica}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Paginación */}
      <div className="min-h-24 flex flex-col items-center justify-center gap-5 pt-10 border-stone-200">
        
        {totalPaginas > 1 && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1 || animando}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-stone-500 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => cambiarPagina(num)}
                  disabled={animando}
                  className={`w-10 h-10 text-xs transition-all cursor-pointer ${
                    num === paginaActual
                      ? "bg-stone-900 text-white"
                      : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas || animando}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-stone-500 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}