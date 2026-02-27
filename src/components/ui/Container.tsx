import React from "react";

type Props<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

export default function Container<T extends React.ElementType = "div">({
  as,
  className = "",
  narrow = false,
  wide = false,
  children,
  ...props
}: Props<T>) {
  const Tag = as || "div";

  const baseClasses = "w-full mx-auto px-6 md:px-12 lg:px-16";

  const sizeClass = narrow
    ? "max-w-4xl"
    : wide
    ? "max-w-[100rem]"
    : "max-w-7xl";

  return (
    <Tag className={`${baseClasses} ${sizeClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
}