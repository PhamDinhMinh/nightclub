import { Clock, MapPin, Martini, Phone } from "lucide-react";
import type { AppMessages } from "@/types/i18n.types";

interface LandingFooterProps {
  content: AppMessages["landing"]["footer"];
  navigation: AppMessages["navigation"];
}

const mapSrc =
  "https://www.google.com/maps?q=Ph%E1%BA%A1m%20Ti%E1%BA%BFn%20h%E1%BB%99p%20%C4%91%C3%AAm%2C%20Ng%E1%BB%8Dc%20Nh%E1%BB%8B%2C%20Qu%E1%BA%A3ng%20X%C6%B0%C6%A1ng%2C%20Thanh%20H%C3%B3a%2C%20Vi%E1%BB%87t%20Nam&z=18&output=embed";

export function LandingFooter({ content, navigation }: LandingFooterProps) {
  return (
    <footer className="mt-8 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl shadow-black/5">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Martini className="size-5" />
            </span>
            <div>
              <p className="text-xl font-bold tracking-tight">
                {navigation.brand}
                <span className="text-primary">.</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{content.tagline}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">{content.addressLabel}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{content.address}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">{content.hoursLabel}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{content.hours}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">{content.contactLabel}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{content.contact}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold">{content.quickLinksLabel}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {navigation.navItems.map((item) => (
                <a
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">© {content.copyright}</p>
        </div>

        <div className="min-h-80 border-t border-border/70 bg-muted lg:min-h-full lg:border-t-0 lg:border-l">
          <iframe
            allowFullScreen
            className="h-full min-h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
            title={content.mapTitle}
          />
        </div>
      </div>
    </footer>
  );
}
