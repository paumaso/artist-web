import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import type { Obra } from "../../data/types";

interface Props {
  obra: Obra;
  open: boolean;
  onClose: () => void;
  imagenIndex?: number;
  onChangeImagen?: (index: number) => void;
}

export default function ObraModal({
  obra,
  open,
  onClose,
  imagenIndex = 0,
  onChangeImagen
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(imagenIndex);

  const imagenes = obra.imagenes;
  const totalImagenes = imagenes.length;
  const img = imagenes[currentIndex];

  useEffect(() => {
    const el = document.getElementById("modal-portal");
    if (el) {
      setPortalElement(el);
    }
  }, []);

  useEffect(() => {
    setCurrentIndex(imagenIndex);
  }, [imagenIndex, open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setIsVisible(true));
      setScale(1);
      if (portalElement) portalElement.classList.remove("pointer-events-none");
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
        if (portalElement) portalElement.classList.add("pointer-events-none");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open, portalElement]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") cambiarImagen(-1);
      if (e.key === "ArrowRight") cambiarImagen(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, currentIndex, totalImagenes]);

  const cambiarImagen = (direccion: number) => {
    const nuevoIndex = (currentIndex + direccion + totalImagenes) % totalImagenes;
    setCurrentIndex(nuevoIndex);
    if (onChangeImagen) onChangeImagen(nuevoIndex);
    setScale(1);
  };

  if (!open || !portalElement) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ zIndex: 9999 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-950/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
        <div className="text-white/80">
          <span className="font-serif text-lg">{obra.titulo}</span>
          <span className="mx-3 text-white/40">|</span>
          <span className="uppercase tracking-wider text-xs">{obra.tecnica}</span>
          {totalImagenes > 1 && (
            <span className="ml-3 text-white/40 text-xs">
              {currentIndex + 1} / {totalImagenes}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(s => Math.max(0.5, s - 0.25))}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={() => setScale(s => Math.min(3, s + 0.25))}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="ml-2 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navegación lateral (solo si hay múltiples) */}
      {totalImagenes > 1 && (
        <>
          <button
            onClick={() => cambiarImagen(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => cambiarImagen(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Imagen central */}
      <div
        className="absolute inset-0 flex items-center justify-center p-20 pt-24 pb-32"
        onClick={onClose}
      >
        <div
          className={`transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          style={{ transform: `scale(${scale})` }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={img.src}
            alt={`${obra.titulo} - ${currentIndex + 1}`}
            className="max-w-full max-h-[calc(100vh-12rem)] w-auto h-auto object-contain shadow-2xl"
          />
        </div>
      </div>

      {/* Thumbnails en el modal (si hay múltiples) */}
      {totalImagenes > 1 && (
        <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center gap-2 bg-linear-to-t from-black/50 to-transparent">
          {imagenes.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                if (onChangeImagen) onChangeImagen(idx);
                setScale(1);
              }}
              className={`w-12 h-12 md:w-16 md:h-16 overflow-hidden border-2 transition-all ${idx === currentIndex
                  ? "border-white opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
                }`}
            >
              <img
                src={img.src}
                alt={`${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Info */}
      <div className="absolute bottom-6 left-6 text-white/40 text-xs">
        {obra.dimensiones} • {obra.año}
        {scale !== 1 && <span className="ml-4">{Math.round(scale * 100)}%</span>}
      </div>
    </div>
  );

  return createPortal(modalContent, portalElement);
}