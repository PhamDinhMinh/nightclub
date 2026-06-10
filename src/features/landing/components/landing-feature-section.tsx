import { Layers3, LayoutPanelTop, WandSparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";
import { LandingSection } from "@/features/landing/components/landing-section";

interface LandingFeatureSectionProps {
  content: AppMessages["landing"]["featureSection"];
}

const featureIcons = [Layers3, LayoutPanelTop, WandSparkles];
const featureImages = [
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=900&q=85",
];

export function LandingFeatureSection({ content }: LandingFeatureSectionProps) {
  return (
    <LandingSection
      description={content.description}
      eyebrow={content.eyebrow}
      id="space"
      title={content.title}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {content.items.map((item, index) => {
          const Icon = featureIcons[index] ?? Layers3;

          return (
            <Card
              className="border-border/70 bg-card/90 overflow-hidden shadow-lg shadow-black/5"
              key={item.title}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${featureImages[index]})` }}
              />
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
