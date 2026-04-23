import { Languages, MoonStar, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";
import { LandingSection } from "@/features/landing/components/landing-section";

interface LandingShowcaseSectionProps {
  content: AppMessages["landing"]["showcaseSection"];
}

const showcaseIcons = [MoonStar, Store, Languages];

export function LandingShowcaseSection({ content }: LandingShowcaseSectionProps) {
  return (
    <LandingSection
      description={content.description}
      eyebrow={content.eyebrow}
      title={content.title}
    >
      <div className="grid gap-4 xl:grid-cols-3">
        {content.items.map((item, index) => {
          const Icon = showcaseIcons[index] ?? MoonStar;

          return (
            <Card
              className="border-border/70 from-card via-card to-secondary/40 bg-gradient-to-br shadow-lg shadow-black/5"
              key={item.title}
            >
              <CardContent className="p-6">
                <div className="bg-accent/18 text-accent-foreground inline-flex rounded-2xl p-3">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-7">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </LandingSection>
  );
}
