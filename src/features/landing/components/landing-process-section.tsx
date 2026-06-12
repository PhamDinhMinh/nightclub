import { Music, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AppMessages } from "@/types/i18n.types";

interface LandingProcessSectionProps {
  content: AppMessages["landing"]["processSection"];
}

const eventImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDI41KiOfkYIwfzNFnI7KDaEXDL23iYFg2hvgyHlnM4UuBpHt5PmDptjZ5C3GC0KxKtgtt_tTdnlvu8532DGqVxPaLn96x73wol1dir0A4fqOHOMGooszlhOr3pZT3lr4kc4hH9o3uBncvwwiEdAwUqTxRMi8b_60fZ9paKJYyG8SH1luin7niU_FKpAjzPA20upuRdK0fKM4tH9XK-ZY50nT9-Bgvc9oV_5elaTo0W-eSryW4GpSiFsu3dA7-AOmhvWEdrhi82arA";

export const LandingProcessSection = ({ content }: LandingProcessSectionProps) => {
  return (
    <section className="bg-background px-8 py-[120px]" id="events">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-primary mb-2 text-[32px] leading-[1.3] font-semibold uppercase">
              {content.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.6]">{content.description}</p>
          </div>
          <a
            className="font-display border-secondary/50 text-secondary hover:text-foreground w-fit border-b pb-1 text-sm font-semibold tracking-widest uppercase transition-colors"
            href="#events"
          >
            {content.actionLabel}
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="group relative h-[500px] overflow-hidden rounded-xl lg:col-span-8">
            <img
              alt={content.primaryEvent.imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={eventImageUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute top-6 right-6">
              <span className="neon-glow-primary bg-primary text-primary-foreground font-display rounded px-4 py-2 text-sm font-semibold tracking-widest uppercase">
                {content.primaryEvent.badge}
              </span>
            </div>
            <div className="absolute right-6 bottom-8 left-6 sm:right-10 sm:bottom-10 sm:left-10">
              <h3 className="font-display mb-2 text-[32px] leading-[1.3] font-semibold text-white uppercase">
                {content.primaryEvent.title}
              </h3>
              <div className="text-muted-foreground flex flex-col gap-3 text-sm font-semibold uppercase sm:flex-row sm:gap-6">
                <span className="flex items-center gap-2">
                  <Music className="text-primary size-4" />
                  {content.primaryEvent.genre}
                </span>
                <span className="flex items-center gap-2">
                  <User className="text-primary size-4" />
                  {content.primaryEvent.artist}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4">
            {content.items.map((item, index) => (
              <div
                className={[
                  "flex flex-1 flex-col justify-between rounded-xl p-8 transition-all",
                  index === 1
                    ? "border-secondary/20 bg-secondary/10 hover:neon-glow-secondary border"
                    : "glass-panel hover:border-primary/40",
                ].join(" ")}
                key={item.title}
              >
                <div>
                  <span className="font-display text-secondary mb-4 block text-sm font-semibold tracking-widest uppercase">
                    {item.eyebrow}
                  </span>
                  <h4
                    className={[
                      "font-display mb-4 text-[32px] leading-[1.3] font-semibold uppercase",
                      index === 1 ? "text-secondary" : "text-foreground dark:text-white",
                    ].join(" ")}
                  >
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-7">{item.description}</p>
                </div>
                <Button
                  className="mt-8 h-12 w-full rounded-lg font-bold tracking-widest uppercase"
                  variant={index === 1 ? "secondary" : "outline"}
                >
                  {item.actionLabel}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
