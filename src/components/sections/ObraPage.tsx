import type { Obra } from "../../data/types";
import ObraGaleria from "../ui/ObraGaleria";
import FichaItem from "../ui/FichaItem";
import BackButton from "../ui/BackButton";

interface Props {
  obra: Obra;
}

export default function ObraPage({ obra }: Props) {
  return (
    <section className="bg-stone-50 min-h-screen flex items-center justify-center pt-24 md:pt-32">
      
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto px-12 items-center justify-center gap-16">
        
        {/* Galería (lado izquierdo) */}
        <div className="w-[55%]">
          <ObraGaleria obra={obra} />
        </div>

        {/* Tarjeta info (lado derecho) */}
        <div className="w-[35%] max-w-md">
          <div className="border border-stone-300 p-10 bg-white/80 backdrop-blur-sm">
            
            <h1 className="font-serif text-3xl lg:text-4xl text-stone-900 leading-tight mb-2">
              {obra.titulo}
            </h1>

            <div className="space-y-5 border-t border-stone-200 pt-6">
              <FichaItem label="Año" value={obra.año} />
              <FichaItem label="Técnica" value={obra.tecnica} />
              <FichaItem label="Dimensiones" value={obra.dimensiones} />
            </div>

            <div className="mt-10 pt-6 border-t border-stone-200">
              <BackButton 
                href={`/categorias/${obra.categoriaSlug}`} 
                label="Volver a obras" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-6 md:px-12 flex flex-col items-center">
        
        <div className="w-full mb-8">
          <ObraGaleria obra={obra} />
        </div>

        <div className="w-full max-w-md border border-stone-300 p-8 bg-white/80">
          <h1 className="font-serif text-2xl md:text-3xl text-stone-900 text-center mb-2">
            {obra.titulo}
          </h1>

          <div className="space-y-4 mb-8">
            <FichaItem label="Año" value={obra.año} />
            <FichaItem label="Técnica" value={obra.tecnica} />
            <FichaItem label="Dimensiones" value={obra.dimensiones} />
          </div>

          <div className="pt-6 border-t border-stone-200 flex justify-center">
            <BackButton 
              href={`/categorias/${obra.categoriaSlug}`} 
              label="Volver a obras" 
            />
          </div>
        </div>
      </div>

    </section>
  );
}