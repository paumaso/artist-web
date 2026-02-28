import { artista } from "../../data/artista";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 tracking-wider">
          
          <p className="text-center md:text-left">
            © {currentYear} {artista.fullName}. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}