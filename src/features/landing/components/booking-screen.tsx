import { ArrowRight, CheckCircle, Gem, ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import type { AppMessages } from "@/types/i18n.types";

interface BookingScreenProps {
  messages: AppMessages;
}

const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAqz5LbxvtyxbZqCpcmGYxbA14b1myj1EM99NPnAtcasD38piEOBDIYCOyW9mtqEWeAg_DwGxXiBFuuRWr7wDeSXwQ4-mqAML6nB6DeWf0jdFRokClxBOD1XOcPXMcjdJLF8W77HTjEJDBmt1eeXYaK4An2DBh5IwVyMatrbazfMjiYvpI63Wnf7sqh4GAmPksORur89EMOulbm8ucHcaCAuilQQG5YudULRCUFTiJ7Y--8hkLiEMO1x_CaeFEGoZZzb-kVjwexcE4";

const packages = [
  {
    title: "GOLD",
    description: "Prime table location, 1 bottle included, 4 guest passes.",
    price: "$800+",
    icon: Sparkles,
  },
  {
    title: "PLATINUM",
    description: "VIP balcony access, 2 premium bottles, 8 guest passes.",
    price: "$1,500+",
    icon: Gem,
    active: true,
  },
  {
    title: "DIAMOND",
    description: "Main stage side booth, personal concierge, unlimited guest list.",
    price: "$3,000+",
    icon: ShieldCheck,
  },
];

const drinkMenus = [
  {
    title: "Champagne",
    items: [
      ["Dom Pérignon", "$800+"],
      ["Louis Roederer Cristal", "$950+"],
      ["Ace of Spades", "$1,200+"],
    ],
  },
  {
    title: "Vodka & Whisky",
    items: [
      ["Grey Goose", "$500+"],
      ["Belvedere", "$500+"],
      ["Macallan 18", "$750+"],
      ["Blue Label", "$850+"],
    ],
  },
  {
    title: "Signature Cocktails",
    items: [
      ["Neon Noir", "$25+"],
      ["PhamTien Pulse", "$28+"],
      ["Midnight Velvet", "$30+"],
    ],
  },
];

export const BookingScreen = ({ messages }: BookingScreenProps) => {
  const content = messages.screens.booking;

  return (
    <>
      <main className="pt-32">
        <section className="mx-auto mb-20 max-w-[1440px] px-8">
          <div className="border-border/30 bg-muted relative overflow-hidden rounded-xl p-12 dark:bg-[#1c1b1b]">
            <div className="relative z-10 max-w-2xl">
              <span className="text-primary mb-4 block text-sm font-semibold tracking-[0.2em] uppercase">
                {content.eyebrow}
              </span>
              <h1 className="text-glow font-display mb-6 text-[32px] leading-[1.2] font-extrabold md:text-7xl">
                {content.title}
              </h1>
              <p className="text-muted-foreground max-w-lg text-lg leading-[1.6]">
                {content.description}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-7">
              <div>
                <SectionTitle number="01" title={content.packageTitle} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {packages.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <button
                        className={[
                          "glass-panel hover:border-primary/50 rounded-xl p-6 text-left transition-all",
                          item.active ? "neon-glow-primary border-primary/60" : "",
                        ].join(" ")}
                        key={item.title}
                        type="button"
                      >
                        <Icon className="text-primary mb-4 size-10" />
                        <h3 className="font-display mb-2 text-lg font-bold">{item.title}</h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {content.packages[index].description}
                        </p>
                        <span className="text-primary text-sm font-semibold">{item.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <SectionTitle number="03" title={content.drinkTitle} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {drinkMenus.map((menu) => (
                    <div className="glass-panel rounded-xl p-6" key={menu.title}>
                      <h3 className="text-primary mb-4 text-sm font-semibold tracking-widest uppercase">
                        {menu.title}
                      </h3>
                      <ul className="space-y-3 text-sm">
                        {menu.items.map(([name, price]) => (
                          <li className="flex justify-between gap-4" key={name}>
                            <span>{name}</span>
                            <span className="text-primary">{price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle number="02" title={content.detailsTitle} />
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FieldShell label={content.fieldLabels.date}>
                      <input className="bg-transparent px-4 pb-3 outline-none" type="date" />
                    </FieldShell>
                    <FieldShell label={content.fieldLabels.guests}>
                      <select className="bg-transparent px-4 pb-3 outline-none">
                        {content.guestOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </FieldShell>
                  </div>
                  <FieldShell label={content.fieldLabels.table}>
                    <input
                      className="placeholder:text-foreground/20 bg-transparent px-4 pb-3 outline-none"
                      placeholder={content.placeholders.table}
                    />
                  </FieldShell>
                  <FieldShell label={content.fieldLabels.requests}>
                    <textarea
                      className="placeholder:text-foreground/20 bg-transparent px-4 pb-3 outline-none"
                      placeholder={content.placeholders.requests}
                      rows={3}
                    />
                  </FieldShell>
                  <Button
                    className="h-auto w-full rounded-lg py-5 text-lg font-semibold tracking-normal hover:tracking-widest"
                    type="submit"
                  >
                    {content.submit}
                    <ArrowRight className="size-5" />
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-6">
                <div className="glass-panel overflow-hidden rounded-xl p-4">
                  <div className="mb-4 flex items-center justify-between px-2">
                    <h3 className="text-sm font-semibold tracking-widest uppercase">
                      {content.mapTitle}
                    </h3>
                    <span className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-[10px] font-bold">
                      {content.availability}
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-white dark:bg-black/40">
                    <img
                      className="h-full w-full object-cover opacity-80 mix-blend-lighten transition-transform duration-700 hover:scale-105"
                      alt="Club Map"
                      src={mapImage}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary size-4 animate-ping rounded-full" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Legend color="bg-primary" label={content.legends[0]} />
                    <Legend color="bg-border" label={content.legends[1]} />
                  </div>
                </div>

                <div className="bg-card border-border/20 dark:bg-card/30 rounded-xl border p-8">
                  <h4 className="text-primary mb-4 text-sm font-semibold uppercase">
                    {content.policiesTitle}
                  </h4>
                  <ul className="text-muted-foreground space-y-3 text-sm">
                    {content.policies.map((policy) => (
                      <li className="flex items-start gap-3" key={policy}>
                        <CheckCircle className="text-primary mt-0.5 size-5 shrink-0" />
                        {policy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter content={messages.landing.footer} navigation={messages.navigation} />
    </>
  );
};

const SectionTitle = ({ number, title }: { number: string; title: string }) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full text-sm font-semibold">
        {number}
      </span>
      <h2 className="font-display text-[32px] leading-[1.3] font-semibold uppercase">{title}</h2>
    </div>
  );
};

const FieldShell = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <label className="neon-glow-primary bg-card flex flex-col gap-2 overflow-hidden rounded-lg dark:bg-[#353534]">
      <span className="text-muted-foreground px-4 pt-3 text-xs font-semibold tracking-widest uppercase">
        {label}
      </span>
      {children}
    </label>
  );
};

const Legend = ({ color, label }: { color: string; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={[color, "size-3 rounded-full"].join(" ")} />
      <span className="text-muted-foreground text-xs font-semibold">{label}</span>
    </div>
  );
};
