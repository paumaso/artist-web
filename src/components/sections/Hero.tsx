import HeroCarousel from "../ui/HeroCarousel";
import Container from "../ui/Container";
import { artista } from "../../data/artista";
import { getHeroSlides } from "../../data/hero";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";

export default function Hero() {
  const slides = getHeroSlides();
  const { social } = artista;

  return (
    <section className="relative h-svh w-full overflow-hidden bg-stone-900">
      
      {/* SLIDER */}
      <HeroCarousel slides={slides} />

      {/* CONTENIDO */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Container className="w-full">
          <div className="max-w-x2 mx-auto text-center animate-fade-in px-6">

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-4 sm:mb-6">
              {artista.fullName}
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              
              <a
                href="/categorias"
                className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-stone-900 text-[11px] sm:text-xs uppercase tracking-widest font-medium hover:bg-stone-200 transition-all duration-300"
              >
                Ver obras
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-3 sm:gap-4">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener"
                    className="p-2 text-stone-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="p-2 text-stone-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>

            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}