import { Layers3, LayoutPanelTop, WandSparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";
import { LandingSection } from "@/features/landing/components/landing-section";

interface LandingFeatureSectionProps {
  content: AppMessages["landing"]["featureSection"];
}

const featureIcons = [Layers3, LayoutPanelTop, WandSparkles];

export function LandingFeatureSection({ content }: LandingFeatureSectionProps) {
  return (
    <LandingSection
      description={content.description}
      eyebrow={content.eyebrow}
      id="services"
      title={content.title}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {content.items.map((item, index) => {
          const Icon = featureIcons[index] ?? Layers3;

          return (
            <Card className="border-border/70 bg-card/90 shadow-lg shadow-black/5" key={item.title}>
              <CardContent className="p-6">
                <div className="bg-primary/12 text-primary inline-flex rounded-2xl p-3">
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
