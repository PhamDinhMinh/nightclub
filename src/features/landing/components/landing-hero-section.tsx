import { ArrowRight, Languages, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";

interface LandingHeroSectionProps {
  content: AppMessages["landing"]["hero"];
}

const highlightIcons = [Sparkles, Languages, Palette];

export function LandingHeroSection({ content }: LandingHeroSectionProps) {
  return (
    <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
      <Card className="border-border/70 bg-card/90 overflow-hidden shadow-xl shadow-black/5">
        <CardContent className="p-6 sm:p-8">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {content.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-8 sm:text-lg">
            {content.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={content.primaryAction.href}>
                {content.primaryAction.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={content.secondaryAction.href}>{content.secondaryAction.label}</a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {content.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;

              return (
                <div
                  className="bg-secondary/70 text-secondary-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                  key={highlight}
                >
                  <Icon className="size-4" />
                  <span>{highlight}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <Card className="border-primary/20 bg-primary/8 shadow-lg shadow-black/5">
          <CardContent className="p-6">
            <p className="text-primary text-sm font-medium">{content.announcement}</p>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {content.metrics.map((metric) => (
            <Card
              className="border-border/70 bg-card/88 shadow-lg shadow-black/5"
              key={metric.label}
            >
              <CardContent className="p-6">
                <p className="text-primary text-3xl font-semibold tracking-tight">{metric.value}</p>
                <p className="mt-2 text-base font-medium">{metric.label}</p>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
