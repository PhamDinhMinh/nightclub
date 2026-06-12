import { Eye, Volume2, Wine } from "lucide-react";
import type { AppMessages } from "@/types/i18n.types";

interface LandingShowcaseSectionProps {
  content: AppMessages["landing"]["showcaseSection"];
}

const ethosImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDae9ui1FDFOjvqDqkGUxrAcotA7sNIrJaVhHgSBf5FOt16uKDusr-boEPlCMc5r_PS8RnaqQHf1cav67aLzc6d5f1kP3kQ3ncNFyjGfkdkr56xD8A_vU4SoCVgIORk8UA8daJiZSlEm1TuoRuffsO07F29wxV6Ew_BjgTP0hf-uMMgwtK7nVOuVjwFnxGUI5grczmJ1pcUta1wz_LXCxpKugVizajBYVaFv3FjCoN73mEV8TLtZ_b3_DfYVyUfUcnQVqmuOps9b50";

const ethosIcons = [Volume2, Eye, Wine];

export const LandingShowcaseSection = ({ content }: LandingShowcaseSectionProps) => {
  return (
    <section className="bg-muted relative overflow-hidden py-[120px] dark:bg-[#0e0e0e]" id="space">
      <div className="bg-primary/10 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[100px]" />
      <div className="bg-secondary/10 absolute -right-24 -bottom-24 h-96 w-96 rounded-full blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-20 px-8 md:grid-cols-2">
        <div className="group relative">
          <div className="bg-primary/20 group-hover:bg-primary/30 absolute -inset-4 rounded-2xl blur-xl transition-all" />
          <img
            alt={content.imageAlt}
            className="relative z-10 aspect-square w-full rounded-xl object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            src={ethosImageUrl}
          />
        </div>

        <div>
          <span className="font-display text-primary block text-sm font-semibold tracking-widest uppercase">
            {content.eyebrow}
          </span>
          <h2 className="font-display mt-6 text-[32px] leading-[1.2] font-bold text-[var(--media-foreground)] uppercase md:text-5xl">
            {content.title}
          </h2>

          <div className="mt-8 space-y-6">
            {content.items.map((item, index) => {
              const Icon = ethosIcons[index] ?? Volume2;

              return (
                <div className="flex gap-4" key={item.title}>
                  <div className="border-border/30 bg-card grid size-12 shrink-0 place-items-center rounded-lg border">
                    <Icon className="text-primary size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--media-foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 leading-7">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
