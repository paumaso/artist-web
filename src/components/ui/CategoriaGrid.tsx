import { useState, useRef, useEffect } from "react";
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
      
      // Scroll suave al top del grid
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Esperar a que termine el scroll antes de cambiar página
      setTimeout(() => {
        setPaginaActual(nuevaPagina);
        setAnimando(false);
      }, 400);
    }
  };

  if (totalObras === 0) {
    return (
      <p className="text-center text-stone-500 mt-16">
        No hay obras disponibles en esta categoría.
      </p>
    );
  }

  return (
    <div className="space-y-8" ref={gridRef}>
      {/* Grid de obras con animación */}
      <div 
        className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-10 space-y-12 transition-all duration-500 ${
          animando ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {obrasPagina.map((obra) => {
          const img: ImageMetadata = obra.imagenPrincipal;

          return (
            <a
              key={obra.slug}
              href={`/obra/${obra.slug}`}
              className="group block break-inside-avoid"
            >
              {/* Imagen limpia */}
              <div className="overflow-hidden bg-stone-100">
                <img
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={`${obra.titulo} - ${obra.tecnica}, ${obra.año}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Pie editorial */}
              <div className="mt-4">
                <h3 className="font-serif text-[12px] md:text-base text-stone-900 transition-colors duration-300 group-hover:text-stone-600">
                  {obra.titulo}
                </h3>
                <p className="text-[10px] text-stone-500 mt-1 tracking-wide">
                  {obra.año} · {obra.tecnica}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Controles de paginación - Siempre en la misma posición */}
      <div className="min-h-20 flex flex-col items-center justify-center gap-4 pt-8 border-t border-stone-200">
        
        {/* Paginación */}
        {totalPaginas > 1 && (
          <div className="flex items-center gap-4">
            
            {/* Anterior */}
            <button
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1 || animando}
              className="flex items-center gap-2 px-3 py-2 text-sm text-stone-500 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            {/* Números de página */}
            <div className="flex items-center gap-1">
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

            {/* Siguiente */}
            <button
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas || animando}
              className="flex items-center gap-2 px-3 py-2 text-sm text-stone-500 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        )}

        {/* Info de resultados - Siempre visible para mantener altura */}
        <p className="text-center text-xs text-stone-400 tracking-wider">
          {totalPaginas > 1 
            ? `Página ${paginaActual} de ${totalPaginas} · `
            : ""
          }
          {totalObras} {totalObras === 1 ? 'obra' : 'obras'}
        </p>

      </div>
    </div>
  );
}