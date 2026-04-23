import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { TranslationSectionContent } from "@/types/i18n.types";

interface LandingSectionProps extends TranslationSectionContent {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function LandingSection({
  children,
  className,
  description,
  eyebrow,
  id,
  title,
}: LandingSectionProps) {
  return (
    <section className={cn("mt-8", className)} id={id}>
      <div className="mb-6 max-w-3xl">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="text-muted-foreground mt-3 text-sm leading-7 sm:text-base">{description}</p>
      </div>
      {children}
    </section>
  );
}
