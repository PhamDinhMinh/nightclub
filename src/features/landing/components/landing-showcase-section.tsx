import { Languages, MoonStar, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { AppMessages } from "@/types/i18n.types";
import { LandingSection } from "@/features/landing/components/landing-section";

interface LandingShowcaseSectionProps {
  content: AppMessages["landing"]["showcaseSection"];
}

const showcaseIcons = [MoonStar, Store, Languages];
const showcaseImages = [
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=85",
];

export function LandingShowcaseSection({ content }: LandingShowcaseSectionProps) {
  return (
    <LandingSection
      description={content.description}
      eyebrow={content.eyebrow}
      id="menu"
      title={content.title}
    >
      <div className="grid gap-4 xl:grid-cols-3">
        {content.items.map((item, index) => {
          const Icon = showcaseIcons[index] ?? MoonStar;

          return (
            <Card
              className="border-border/70 bg-card overflow-hidden shadow-lg shadow-black/5"
              key={item.title}
            >
              <CardContent
                className="relative flex min-h-80 items-end overflow-hidden bg-cover bg-center p-0"
                style={{ backgroundImage: `url(${showcaseImages[index]})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="relative p-6 text-white">
                  <div className="inline-flex rounded-2xl bg-white/15 p-3 text-white backdrop-blur">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/76">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </LandingSection>
  );
}
