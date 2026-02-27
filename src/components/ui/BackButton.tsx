import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackButton({
  href = "/",
  label = "Volver",
  className = "",
}: BackButtonProps) {
  
  const handleBack = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      onClick={handleBack}
      className={`
        group inline-flex items-center gap-3
        text-[10px] md:text-xs uppercase tracking-[0.25em]
        text-stone-400 hover:text-stone-900
        transition-all duration-300 ease-out
        ${className}
      `}
    >

      <ArrowLeft 
        className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
        strokeWidth={1.5}
      />
      
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
}