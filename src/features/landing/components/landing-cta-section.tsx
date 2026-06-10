import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";

interface LandingCtaSectionProps {
  content: AppMessages["landing"]["ctaSection"];
}

const bookingImageUrl =
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85";

export function LandingCtaSection({ content }: LandingCtaSectionProps) {
  return (
    <section className="mt-8 mb-4" id="booking">
      <Card className="border-border/70 bg-card/90 overflow-hidden shadow-xl shadow-black/5">
        <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {content.title}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-7 sm:text-base">
              {content.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

          <div
            className="min-h-80 bg-cover bg-center lg:min-h-full"
            style={{ backgroundImage: `url(${bookingImageUrl})` }}
          />
        </CardContent>
      </Card>
    </section>
  );
}
