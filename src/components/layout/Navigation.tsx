import React from 'react';

interface NavigationProps {
  href: string;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  isMobile?: boolean;
  isHome?: boolean;
}

export default function Navigation({
  href,
  label,
  isActive = false,
  hasDropdown = false,
  isMobile = false,
  isHome = false,
}: NavigationProps) {

  const baseClasses = isMobile
    ? "block py-5 text-xl font-light border-b border-stone-100 transition-all duration-500"
    : "relative py-2 text-sm font-light tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-50";

  const activeClasses = isActive
    ? isMobile
      ? "text-stone-900 pl-4 border-l-2 border-l-stone-900 bg-stone-50/50"
      : "opacity-40"
    : isMobile
      ? "text-stone-500 pl-4 hover:pl-6"
      : "text-stone-600";

  const textColor = !isMobile && isHome && !isActive ? "text-white" : "text-current";

  return (
    <a
      href={href}
      className={`${baseClasses} ${activeClasses} ${textColor} ${!isMobile ? "group" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="flex items-center justify-between md:justify-start gap-2">
        {label}

        {hasDropdown && !isMobile && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-500 group-hover:rotate-180 opacity-50"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </span>

      {/* Subrayado elegante (solo Desktop) */}
      {!isMobile && (
        <span
          className={`absolute -bottom-1 left-0 w-full h-px transform origin-left transition-transform duration-500 ease-out ${isHome ? "bg-white/40" : "bg-stone-900/20"
            } ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
        />
      )}
    </a>
  );
}