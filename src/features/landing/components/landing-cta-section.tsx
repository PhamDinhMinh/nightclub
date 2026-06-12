import { Button } from "@/components/ui/button";
import type { AppMessages } from "@/types/i18n.types";

interface LandingCtaSectionProps {
  content: AppMessages["landing"]["ctaSection"];
}

const galleryAspectClasses = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-square",
  "aspect-[3/4]",
];

export const LandingCtaSection = ({ content }: LandingCtaSectionProps) => {
  return (
    <section className="overflow-hidden px-8 py-[120px]" id="gallery">
      <div className="mx-auto mb-16 max-w-[1440px] text-center">
        <h2 className="font-display mb-4 text-[32px] leading-[1.3] font-semibold text-[var(--media-foreground)] uppercase">
          {content.title}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-[1.6]">
          {content.description}
        </p>
      </div>

      <div className="gallery-mask mx-auto grid max-w-[1440px] grid-cols-2 gap-6 md:grid-cols-4">
        {content.items.map((item, index) => (
          <div className={index % 2 === 1 ? "space-y-6 pt-12" : "space-y-6"} key={item.alt}>
            <div
              className={[
                "group overflow-hidden rounded-xl",
                galleryAspectClasses[index] ?? "aspect-square",
              ].join(" ")}
            >
              <img
                alt={item.alt}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={item.src}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center" id="booking">
        <Button
          asChild
          className="border-border bg-card hover:bg-muted h-14 rounded-full px-10 font-bold tracking-widest uppercase"
          size="lg"
          variant="outline"
        >
          <a href={content.primaryAction.href}>{content.primaryAction.label}</a>
        </Button>
      </div>
    </section>
  );
};
