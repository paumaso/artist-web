import { useState } from "react";
import type { Obra } from "../../data/types";

interface Props {
  obra: Obra;
}

export default function ObraGaleria({ obra }: Props) {
  const [imagenActual, setImagenActual] = useState(0);
  
  const imagenes = obra.imagenes;
  const totalImagenes = imagenes.length;
  const tieneMultiples = totalImagenes > 1;

  if (totalImagenes === 1) {
    return (
      <div className="flex items-center justify-center h-full">
        <img
          src={imagenes[0].src}
          alt={obra.titulo}
          className="max-h-[70vh] w-auto object-contain shadow-lg"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-full">
      <div className={`flex ${tieneMultiples ? 'lg:flex-col' : 'hidden'} gap-2 lg:gap-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden lg:w-24 lg:max-h-[70vh] pb-2 lg:pb-0 px-1 lg:px-0 order-1 lg:order-0`}>
        {imagenes.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setImagenActual(idx)}
            className={`relative shrink-0 w-16 h-16 lg:w-20 lg:h-20 overflow-hidden transition-all duration-200 m-2 ${
              idx === imagenActual 
                ? "ring-2 ring-stone-900 opacity-100 shadow-md" 
                : "opacity-50 hover:opacity-80 hover:ring-1 hover:ring-stone-300"
            }`}
          >
            <img
              src={img.src}
              alt={`${obra.titulo} - ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Imagen principal */}
      <div className="flex-1 flex items-center justify-center order-2 lg:order-0 min-h-[50vh] lg:min-h-0">
        <img
          src={imagenes[imagenActual].src}
          alt={`${obra.titulo} - ${imagenActual + 1}`}
          className="max-h-[60vh] lg:max-h-[70vh] w-auto object-contain shadow-lg transition-opacity duration-300"
        />
      </div>

      {/* Contador (solo móvil, debajo de imagen) */}
      {tieneMultiples && (
        <div className="lg:hidden text-center order-3">
          <span className="text-xs uppercase tracking-wider text-stone-400">
            {imagenActual + 1} / {totalImagenes}
          </span>
        </div>
      )}
    </div>
  );
}