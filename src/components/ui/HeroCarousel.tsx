import { useEffect, useRef, useState } from "react";
import type { HeroSlide } from "../../data/types";

type Props = {
  slides: HeroSlide[];
};

const AUTOPLAY = 7500;

export default function HeroCarousel({ slides }: Props) {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasMultiple = total > 1;

  const next = () => setCurrent((c) => (c + 1) % total);

  const start = () => {
    if (!hasMultiple) return;
    stop();
    intervalRef.current = setInterval(next, AUTOPLAY);
  };

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    start();
    return stop;
  }, [current, total]);

  if (!total) return null;

  return (
    <div className="relative h-full w-full overflow-hidden bg-stone-950">
      {/* SLIDES */}
      <div
        className="absolute inset-0"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 10 : 0,
            }}
          >
            <img
              src={slide.imagen.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Overlay sutil para legibilidad si hay texto encima */}
            <div className="absolute inset-0 bg-stone-950/30" />
          </div>
        ))}
      </div>

      {/* INDICADORES CENTRADOS Y SIMPLES */}
      {hasMultiple && (
        <div className="absolute bottom-10 left-0 w-full z-30 flex justify-center px-6">
          <div className="flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={`indicator-${i}`}
                onClick={() => setCurrent(i)}
                className="group relative py-4 focus:outline-none"
                aria-label={`Ver obra ${i + 1}`}
              >
                {/* Contenedor de la barra (Riel) */}
                <div className="relative h-px w-10 md:w-14 bg-white/20 overflow-hidden transition-colors duration-500 group-hover:bg-white/40">
                  {/* Progreso Activo */}
                  {i === current && (
                    <div
                      className="absolute inset-0 bg-white origin-left"
                      style={{
                        animation: `progress ${AUTOPLAY}ms linear forwards`,
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}