import { artista } from "../../data/artista";
import { Instagram, Linkedin, MapPin } from "lucide-react";

export default function BiografiaPage() {
  const tieneFormacion = artista.formacion && artista.formacion.length > 0;
  const tieneExposiciones = artista.exposiciones && artista.exposiciones.length > 0;

  return (
    <section className="bg-stone-50 min-h-screen">
      
      {/* Desktop: Split */}
      <div className="hidden lg:flex min-h-screen">
        
        {/* Izquierda: Imagen (45%) */}
        <div className="w-[45%] bg-stone-200 sticky top-0 h-screen">
          <img
            src={artista.imagenPerfil.src}
            alt={artista.fullName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Derecha: Contenido (55%) - Scrollable */}
        <div className="w-[55%] py-34 px-12 xl:px-20">
          <div className="max-w-xl">

            <h1 className="font-serif text-4xl xl:text-5xl text-stone-900 leading-tight mb-8">
              {artista.nombre} {artista.apellido}
            </h1>

            {/* Bio principal */}
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-6">
              {artista.bio}
            </p>

            {artista.bioExtendida && (
              <p className="text-stone-500 font-light leading-relaxed mb-12">
                {artista.bioExtendida}
              </p>
            )}

            {/* Formación (opcional) */}
            {tieneFormacion && (
              <div className="border-t border-stone-200 pt-8 mb-8">
                <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4">
                  Formación
                </h3>
                <ul className="space-y-2">
                  {artista.formacion!.map((item, idx) => (
                    <li key={idx} className="text-stone-600 font-light text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Exposiciones (opcional) */}
            {tieneExposiciones && (
              <div className="border-t border-stone-200 pt-8 mb-12">
                <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4">
                  Exposiciones y Residencias
                </h3>
                <ul className="space-y-2">
                  {artista.exposiciones!.map((item, idx) => (
                    <li key={idx} className="text-stone-600 font-light text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ubicación */}
            <div className="flex items-center gap-2 text-stone-400 border-t border-stone-200 pt-8">
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-light">Barcelona, España</span>
            </div>

            {/* Redes */}
            <div className="flex gap-3 mt-8">
              <a
                href={artista.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href={artista.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile: Vertical */}
      <div className="lg:hidden pt-20">
        
        {/* Imagen hero */}
        <div className="aspect-4/5 relative bg-stone-200">
          <img
            src={artista.imagenPerfil.src}
            alt={artista.fullName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="px-6 py-12 max-w-xl mx-auto">

          <h1 className="font-serif text-2xl text-stone-900 text-center mb-8">
            {artista.fullName}
          </h1>

          <p className="text-stone-600 font-light leading-relaxed mb-6 text-center">
            {artista.bio}
          </p>

          {artista.bioExtendida && (
            <p className="text-stone-500 font-light leading-relaxed mb-10 text-center">
              {artista.bioExtendida}
            </p>
          )}

          {/* Formación móvil */}
          {tieneFormacion && (
            <div className="border-t border-stone-200 pt-8 mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 text-center">
                Formación
              </h3>
              <ul className="space-y-2 text-center">
                {artista.formacion!.map((item, idx) => (
                  <li key={idx} className="text-stone-600 font-light text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Exposiciones móvil */}
          {tieneExposiciones && (
            <div className="border-t border-stone-200 pt-8 mb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 text-center">
                Exposiciones
              </h3>
              <ul className="space-y-2 text-center">
                {artista.exposiciones!.map((item, idx) => (
                  <li key={idx} className="text-stone-600 font-light text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Redes */}
          <div className="flex justify-center gap-3 mt-8 pt-8 border-t border-stone-200">
            <a
              href={artista.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href={artista.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}