import { Compass, Rocket, TimerReset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";
import { LandingSection } from "@/features/landing/components/landing-section";

interface LandingProcessSectionProps {
  content: AppMessages["landing"]["processSection"];
}

const processIcons = [Compass, TimerReset, Rocket];

export function LandingProcessSection({ content }: LandingProcessSectionProps) {
  return (
    <LandingSection
      description={content.description}
      eyebrow={content.eyebrow}
      id="workflow"
      title={content.title}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {content.items.map((item, index) => {
          const Icon = processIcons[index] ?? Compass;

          return (
            <Card className="border-border/70 bg-card/90 shadow-lg shadow-black/5" key={item.title}>
              <CardContent className="p-6">
                <div className="bg-secondary text-secondary-foreground inline-flex rounded-2xl p-3">
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
