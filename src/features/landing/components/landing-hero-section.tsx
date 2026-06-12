import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AppMessages } from "@/types/i18n.types";

interface LandingHeroSectionProps {
  content: AppMessages["landing"]["hero"];
}

const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAt3PC_Rn-flNlXnjIPIrECYOuQZ8RaazS9dPpwkFEbRuY26eSJYWcUnKRjXd3ILpBsE-zhR1cesdOU7eXDelUmzYJxESe21SotUIVdkepfdtUjgNmEjErryROpFqB-IyygZTNetVCxp0mNRLa3pR13i8_shyHgNduXkAC2LirUCGIjmSCdz-ynvGfAGJ6A2HBT3FQ8uVC_eGpg1ewlC_adTbNkPo52JjQpsekDzTnn3-HANiN_hc8bKyz-Su9xrc4BQQ1lfrv3teE";

export const LandingHeroSection = ({ content }: LandingHeroSectionProps) => {
  const [titleBeforeHighlight, titleAfterHighlight = ""] = content.title.split("PhamTien");

  return (
    <header className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img alt="" className="h-full w-full object-cover" src={heroImageUrl} />
        <div className="absolute inset-0 z-10 bg-white/20 dark:bg-black/60" />
        <div className="to-background absolute inset-0 z-20 bg-gradient-to-b from-transparent" />
      </div>

      <div className="relative z-30 mx-auto w-full max-w-[1440px] px-8">
        <div className="max-w-4xl">
          <div className="border-primary/30 bg-primary/10 text-primary mb-6 inline-flex rounded-full border px-4 py-1">
            <span className="font-display text-sm font-semibold tracking-widest uppercase">
              {content.eyebrow}
            </span>
          </div>
          <h1 className="font-display mb-8 max-w-4xl text-[32px] leading-[1.2] font-extrabold text-[var(--media-foreground)] uppercase md:text-7xl md:leading-[1.1]">
            {titleBeforeHighlight}
            <span className="text-primary italic">PhamTien</span>
            {titleAfterHighlight}
          </h1>
          <p className="text-muted-foreground mb-10 max-w-2xl text-lg leading-[1.6]">
            {content.description}
          </p>

          <div className="flex flex-col gap-6 sm:flex-row">
            <Button
              asChild
              className="neon-glow-primary h-auto rounded-full px-10 py-5 font-bold tracking-widest uppercase hover:scale-105"
              size="lg"
            >
              <a href={content.primaryAction.href}>
                {content.primaryAction.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              className="border-border text-foreground hover:bg-muted/50 h-auto rounded-full px-10 py-5 font-bold tracking-widest uppercase"
              size="lg"
              variant="outline"
            >
              <a href={content.secondaryAction.href}>{content.secondaryAction.label}</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="text-primary absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <ArrowDown aria-label={content.announcement} className="size-9" />
      </div>
    </header>
  );
};
