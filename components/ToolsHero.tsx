"use client";

import { ReactNode } from "react";

interface ToolsHeroProps {
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export default function ToolsHero({ title, description, children }: ToolsHeroProps) {
  return (
    <section 
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="tools-hero-title"
    >
      <div className="container-max text-center">
        <h1 
          id="tools-hero-title"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
        >
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
