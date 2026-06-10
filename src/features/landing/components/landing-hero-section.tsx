import { ArrowRight, Languages, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";

interface LandingHeroSectionProps {
  content: AppMessages["landing"]["hero"];
}

const highlightIcons = [Sparkles, Languages, Palette];
const heroImageUrl =
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=85";

export function LandingHeroSection({ content }: LandingHeroSectionProps) {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-2xl shadow-black/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/82 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative grid min-h-[560px] gap-6 p-5 sm:min-h-[620px] sm:p-8 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:p-10">
        <div className="max-w-3xl self-center py-8 sm:py-12">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {content.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          <div className="mt-7 flex flex-wrap gap-3">
            {content.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;

              return (
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-4 py-2 text-sm shadow-lg shadow-black/10 backdrop-blur"
                  key={highlight}
                >
                  <Icon className="text-primary size-4" />
                  <span>{highlight}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 self-end">
          <Card className="border-primary/25 bg-background/72 shadow-xl shadow-black/20 backdrop-blur-xl">
            <CardContent className="p-6">
              <p className="text-primary text-sm font-medium">{content.announcement}</p>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3">
            {content.metrics.map((metric) => (
              <Card
                className="border-white/10 bg-background/72 shadow-xl shadow-black/20 backdrop-blur-xl"
                key={metric.label}
              >
                <CardContent className="p-6">
                  <p className="text-primary text-3xl font-semibold tracking-tight">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-base font-medium">{metric.label}</p>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
