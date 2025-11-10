"use client";

import { ReactNode } from "react";
import Button, { ButtonProps } from "../ui/Button";

export interface HeroCTA {
  label: string;
  onClick: () => void;
  variant?: ButtonProps["variant"];
  ariaLabel?: string;
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctas?: HeroCTA[];
  media?: ReactNode;
  alignment?: "center" | "left";
  background?: "default" | "gradient" | "muted";
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  description,
  ctas = [],
  media,
  alignment = "center",
  background = "default"
}: HeroProps) {
  const alignmentStyles = {
    center: "text-center items-center",
    left: "text-left items-start"
  };

  const backgroundStyles = {
    default: "bg-background",
    gradient: "bg-gradient-to-b from-muted to-background",
    muted: "bg-muted"
  };

  const containerAlignment = alignment === "center" ? "mx-auto" : "";
  const ctaJustify = alignment === "center" ? "justify-center" : "justify-start";

  return (
    <section className={`relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 ${backgroundStyles[background]}`}>
      <div className="container-max">
        <div className={`grid gap-8 lg:gap-12 ${media ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          {/* Content */}
          <div className={`flex flex-col gap-4 sm:gap-5 md:gap-6 ${alignmentStyles[alignment]} ${containerAlignment} ${media ? "" : "max-w-4xl"}`}>
            {eyebrow && (
              <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-muted-foreground">
                {eyebrow}
              </p>
            )}
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight text-balance">
              {title}
            </h1>
            
            {subtitle && (
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground leading-snug text-balance">
                {subtitle}
              </h2>
            )}
            
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                {description}
              </p>
            )}
            
            {ctas.length > 0 && (
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 ${ctaJustify}`}>
                {ctas.map((cta, index) => (
                  <Button
                    key={index}
                    variant={cta.variant || (index === 0 ? "primary" : "outline")}
                    onClick={cta.onClick}
                    aria-label={cta.ariaLabel || cta.label}
                    className="motion-safe:transition-transform"
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Media Slot */}
          {media && (
            <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last">
              <div className="w-full max-w-xl lg:max-w-none motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
                {media}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
