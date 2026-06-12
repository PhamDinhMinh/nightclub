import { Megaphone, PlayCircle } from "lucide-react";
import type { AppMessages } from "@/types/i18n.types";

interface LandingFooterProps {
  content: AppMessages["landing"]["footer"];
  navigation: AppMessages["navigation"];
}

const logoUrl = "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg";

export const LandingFooter = ({ content, navigation }: LandingFooterProps) => {
  const mapQuery = encodeURIComponent(content.mapQuery);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&z=17&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <footer className="bg-muted border-border w-full border-t dark:bg-[#0e0e0e]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-8 py-20 md:grid-cols-3">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <img alt="" className="h-8 w-auto" src={logoUrl} />
            <div className="font-display text-primary text-3xl leading-none font-semibold">
              {navigation.brand}
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-xs leading-7">{content.tagline}</p>
          <div className="mt-8 flex gap-4">
            <a
              aria-label={navigation.brand}
              className="border-border text-foreground hover:border-primary hover:text-primary grid size-10 place-items-center rounded-full border transition-all"
              href="#top"
            >
              <Megaphone className="size-4" />
            </a>
            <a
              aria-label={navigation.navItems[1]?.label ?? navigation.brand}
              className="border-border text-foreground hover:border-primary hover:text-primary grid size-10 place-items-center rounded-full border transition-all"
              href="#events"
            >
              <PlayCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-primary mb-6 text-sm font-semibold tracking-widest uppercase">
            {content.quickLinksLabel}
          </h2>
          <ul className="space-y-4">
            {content.quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-primary mb-6 text-sm font-semibold tracking-widest uppercase">
            {content.addressLabel}
          </h2>
          <p className="text-muted-foreground mb-2 leading-7">{content.address}</p>
          <p className="text-muted-foreground mb-6 leading-7">{content.contact}</p>
          <div className="bg-card border-border/30 rounded-lg border p-4">
            <p className="font-display text-foreground mb-2 text-sm font-semibold italic dark:text-white">
              {content.hoursLabel}
            </p>
            <p className="text-muted-foreground text-sm">{content.hours}</p>
          </div>
          <div className="border-border/30 bg-card mt-4 overflow-hidden rounded-lg border">
            <iframe
              allowFullScreen
              className="h-48 w-full grayscale dark:invert-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapSrc}
              title={content.mapTitle}
            />
          </div>
          <a
            className="text-primary hover:text-secondary mt-3 inline-flex text-sm font-semibold transition-colors"
            href={mapLink}
            rel="noreferrer"
            target="_blank"
          >
            {content.mapTitle}
          </a>
        </div>
      </div>

      <div className="border-border border-t px-8 py-8">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-display text-muted-foreground text-xs font-semibold tracking-widest uppercase">
            © {content.copyright}
          </p>
          <p className="font-display text-muted-foreground/60 text-xs font-semibold tracking-widest uppercase">
            {content.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};
