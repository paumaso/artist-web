import { X, ArrowRight } from "lucide-react";

type Categoria = {
  slug: string;
  nombre: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  categorias: Categoria[];
  isHome: boolean;
};

export default function MobileMenu({ isOpen, onClose, pathname, categorias, isHome }: Props) {
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-500 ease-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER */}
      <div className="absolute top-0 left-0 right-0 px-6 h-20 flex items-center justify-between border-b border-stone-200">
        <span />
        <button
          onClick={onClose}
          className={`p-2 -mr-2 ${isHome ? "text-stone-900" : "text-stone-900"}`}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="h-screen flex flex-col pt-24 pb-8 px-6 overflow-y-auto bg-stone-50">
        <nav className="flex flex-col">
          <a
            href="/"
            onClick={onClose}
            className={`py-4 text-lg border-b border-stone-200 ${
              isActive("/") ? "text-stone-900 pl-4 border-l-2 border-l-stone-900" : "text-stone-600 pl-4 hover:pl-6"
            }`}
          >
            Inicio
          </a>

          {/* OBRAS */}
          <div className="border-b border-stone-200">
            <a href="/categorias" className="block py-4 text-lg font-light">
              Obras
            </a>

            <div className="pb-4 pl-8 space-y-2">
              <a
                href="/categorias"
                onClick={onClose}
                className="flex items-center gap-2 py-2 text-sm text-stone-500 hover:text-stone-800"
              >
                Ver todas <ArrowRight className="w-3 h-3" />
              </a>

              {categorias.map((cat) => (
                <a
                  key={cat.slug}
                  href={`/categorias/${cat.slug}`}
                  onClick={onClose}
                  className={`block py-2 text-sm ${
                    isActive(`/categoria/${cat.slug}`) ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {cat.nombre}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/proyectos"
            onClick={onClose}
            className={`py-4 text-lg border-b border-stone-200 ${
              isActive("/proyectos") ? "text-stone-900 pl-4 border-l-2 border-l-stone-900" : "text-stone-600 pl-4 hover:pl-6"
            }`}
          >
            Proyectos
          </a>

          <a
            href="/biografia"
            onClick={onClose}
            className={`py-4 text-lg border-b border-stone-200 ${
              isActive("/biografia") ? "text-stone-900 pl-4 border-l-2 border-l-stone-900" : "text-stone-600 pl-4 hover:pl-6"
            }`}
          >
            Biografia
          </a>

          <a
            href="/contacto"
            onClick={onClose}
            className={`py-4 text-lg border-b border-stone-200 ${
              isActive("/contacto") ? "text-stone-900 pl-4 border-l-2 border-l-stone-900" : "text-stone-600 pl-4 hover:pl-6"
            }`}
          >
            Contacto
          </a>
        </nav>
      </div>
    </div>
  );
}