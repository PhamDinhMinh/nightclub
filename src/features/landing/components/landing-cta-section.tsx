import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";

interface LandingCtaSectionProps {
  content: AppMessages["landing"]["ctaSection"];
}

export function LandingCtaSection({ content }: LandingCtaSectionProps) {
  return (
    <section className="mt-8 mb-4">
      <Card className="border-border/70 bg-card/90 overflow-hidden shadow-xl shadow-black/5">
        <CardContent className="p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {content.title}
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-7 sm:text-base">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg">
                <a href={content.primaryAction.href}>
                  {content.primaryAction.label}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={content.secondaryAction.href}>{content.secondaryAction.label}</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
