import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Check } from "lucide-react";
import Navigation from "./Navigation";
import { artista } from "../../data/artista";
import { getCategoriasOrdenadas } from "../../data/categorias";
import MobileMenu from "../ui/MobileMenu";

// Imports de logos
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";

type Props = {
  pathname: string;
};

export default function Header({ pathname }: Props) {
  const categorias = getCategoriasOrdenadas();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  const headerSolid = !isHome || scrolled;

  // Seleccionar logo según estado
  const logoSrc = headerSolid ? logoBlack : logoWhite;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out
        ${headerSolid
          ? "text-stone-800 bg-stone-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "text-white bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* LOGO en lugar de texto */}
          <a href="/" className="group z-50 relative">
            <img 
              src={logoSrc.src} 
              alt={artista.fullName}
              className="h-10 md:h-12 w-auto transition-opacity duration-300 group-hover:opacity-70"
            />
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <Navigation href="/" label="Inicio" isActive={isActive("/")} isHome={!headerSolid} />

            <div className="relative group">
              <Navigation href="/categorias" label="Obras" hasDropdown isHome={!headerSolid} />
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-stone-50 border border-stone-200 min-w-[16rem] shadow-lg">
                  <a href="/categorias" className="flex items-center justify-between px-6 py-3 text-sm font-light text-stone-800 hover:bg-stone-100 border-b border-stone-200">
                    Ver todas las obras
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex flex-col py-2">
                    {categorias.map((cat) => (
                      <a
                        key={cat.slug}
                        href={`/categorias/${cat.slug}`}
                        className={`flex items-center justify-between px-6 py-2.5 text-sm transition-all
                          ${isActive(`/categorias/${cat.slug}`)
                            ? "text-stone-900 bg-stone-100 pl-8"
                            : "text-stone-500 hover:text-stone-900 hover:pl-8 hover:bg-stone-50"
                          }`}
                      >
                        {cat.nombre}
                        {isActive(`/categorias/${cat.slug}`) && <Check className="w-3 h-3" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Navigation href="/proyectos" label="Proyectos" isActive={isActive("/proyectos")} isHome={!headerSolid} />
            <Navigation href="/biografia" label="Biografía" isActive={isActive("/biografia")} isHome={!headerSolid} />
            <Navigation href="/contacto" label="Contacto" isActive={isActive("/contacto")} isHome={!headerSolid} />
          </nav>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden relative z-50 p-2 -mr-2 transition-colors
              ${isHome && !headerSolid ? "text-white" : "text-stone-800"}
            `}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        pathname={pathname}
        categorias={categorias}
        isHome={isHome}
      />
    </header>
  );
}