import { AudioLines, Keyboard, Martini, Mic, Music, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import type { AppMessages } from "@/types/i18n.types";

interface EventsScreenProps {
  messages: AppMessages;
}

const featuredImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAam6C4SABn2hlVkiLCExFiANWaRQ46PkIaJ9NHyemDDLiUVz10bvYWpEnzylTO2AOon3djJ2u3xlAXhMejNiDgX9en_1soVlactzDkmngOzz6HbQz_QXIyfA-fXejpZucjLriRYhugVDXnwV6a3KsveB1CbkBOmNeRkFArWyq3zJ6xalTCJM1Ooe_iGNxmKfEk5JCA-vhL2gusSVShqzDeSDr_cCgWnKKCeIbKYbjDx2qnqn8CzM93-ZrwNIj5lIgZ6CjwGQVAUpE";

const eventCards = [
  {
    day: "24",
    icon: Music,
    outlined: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCR07mznAId-HT0JwGWPgBBEo45tIi8AIwibXAot1RxCBcXqkaDfmIDbCVX3UmAchtpW50dwPxC7COOk1AeGNcf7Xh7Dsjc7DhMYMPpjgXLKSA9rNxN4AYWTckxa3bsGnVa-7rQP7BhaFh9qkMtUNMKtRl-3aSYzI98RWuOBdoQIGqpCiHCnvDpQTTgsYUpKAglAAfdMnspBQrAXp5l6F0e4AfPtRj83CAovPiablctVZinw83E8F5goU30ebpRorRHdCifQlxId2E",
  },
  {
    day: "26",
    icon: AudioLines,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgBke3yWWuyuO63tS8l_M_WFzus5kmb5ELFaADbodzesi82LyY5Cqh2gWW1RcIs77UQkylVc01JlX8usqi1-hok_WYX3UqB9HQJXVe3bn9QxKj1BJ9CxB-0Ht3zn7B7cKfChahUHfduW0u9lu_HgyBys9nrT4b0GQAKLHhuUV0im8UeEas4BtvXHL7D-FrOUBUxASB-tUfMVB21UaMHva4cdJOo51vckiKAU619bsi2nM7vts0_hyWpWnJQe3Y-DApH7nodnDduQk",
  },
  {
    day: "31",
    icon: Shield,
    outlined: true,
    secondaryDate: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKrgTAYTqqoomSPF1BANnTwYSZYqaD-9psikthESSPePTGNWugiNccC44oFxTJ5ayYC1cabhlwNRUtBJ51w-ku7gEvMPeQybkJ1hgLHGjomBxx2h3ZXW0fxsGrjXpWgXk-QdDQP1dGvjwsMAy6pFlERVCE9zdujyX4euWhU5H6WB0zWA46F8ELBc0f_9Fb9UFTxy46vM9zqoAl4ephlobyvKheCCf1FfDWRNZHW5kQ8x_gS8LE0tmAhIpLleufPPPD5CBRdvv_hc",
  },
  {
    day: "02",
    icon: Mic,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBBwEPPES7V9_8kWMLmQDNgduQeYUpa1p5wfv_sXSn6arh_vVW8WBBbaGGOlyRx0amQ8B70z5lG5EstLk0ThAAZpIZmRAn9yQH1Je_WUn0lLYfbd9jVwNQavCcfB3OVE3yoLmngB0kCDCz8oTrpNQiwfSXDoB-LtizzOCwlSkZGdsyulHJFenKTXgORYI1qZSyKJhw61V82VqegbdYP91bbjlVXhl3vef0gSGkMrypo9NnZ0Y3d2vvguRy6wvTlpKvPYRiKpo8Xss",
  },
  {
    day: "05",
    icon: Martini,
    outlined: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKqLsGxEzG_vBlaK5RUyrriLCZbFgd-PgNqIPvc8oMMm9Ex5Xjk1YKzaw3C4uZIbzls4BHOMo6iYQK0v0A_YewkCF2-RlZLhAsrXdCgD__HS3qvNIFWhAWLeLFVyzqAcKiTRpcagBmX7CHYLeKY166IGOM2aRvqgnmvD0Mns5MaeL5jUHYVvumjZVu__2CygxOiwDAtoJee7jZnf4op00AMFAxImQ042MVjrpds3iztf14zu0chQPFjYHnL_YP2AZFbku1FuPbJic",
  },
  {
    day: "09",
    icon: Keyboard,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFURDs-W7YPgN5tlEu43uqLXU37qAK9JDKWdwqW5VBPQLXaZj9hgT0awt9ZRN5dPptUer_kF9KxL2R0G_CTi1zA5BzIeLwBbxYaxgSfAzBP5nUMZRquVNyrVj2qs7wVeDK_suHIyelfrQZqqkdPlzDfgIbqPhRNIPvS5MYvh6XJ6wT74fosBPZXdjtSKx5DMjURDF0aaappUENKvOOsEL1wmRMmFqqgXYnCDz9BcrPlqJJDMgIxrYkUDeemshSiMwB3n1NMwnMg2A",
  },
];

export const EventsScreen = ({ messages }: EventsScreenProps) => {
  const content = messages.screens.events;

  return (
    <>
      <main className="pt-32">
        <section className="mx-auto mb-20 max-w-[1440px] px-8">
          <div className="group border-primary/20 relative aspect-[21/9] cursor-pointer overflow-hidden rounded-xl border">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredImage})` }}
            />
            <div className="from-background via-background/40 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20">
              <div className="mb-2 flex items-center gap-2">
                <span className="neon-glow-primary bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-semibold tracking-widest uppercase">
                  {content.featuredLabel}
                </span>
                <span className="border-secondary/30 text-secondary rounded-full border bg-white/80 px-3 py-1 text-sm font-semibold tracking-widest backdrop-blur-md dark:bg-black/40">
                  {content.featuredDate}
                </span>
              </div>
              <h1 className="text-glow font-display mb-4 max-w-2xl text-6xl leading-[0.9] font-extrabold text-white drop-shadow-lg">
                NEON OVERDRIVE: VOL III
              </h1>
              <p className="mb-6 max-w-xl text-lg leading-[1.6] text-white/90 drop-shadow-md">
                {content.featuredDescription}
              </p>
              <div className="flex gap-2">
                <Button className="neon-glow-primary rounded-full px-8 py-4 uppercase">
                  {content.primaryAction}
                </Button>
                <Button
                  className="border-secondary text-secondary rounded-full px-8 py-4 uppercase"
                  variant="outline"
                >
                  {content.secondaryAction}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-6 flex max-w-[1440px] flex-col items-end justify-between gap-2 px-8 md:flex-row">
          <div>
            <h2 className="font-display text-5xl font-bold">{content.heading}</h2>
            <p className="text-muted-foreground">{content.description}</p>
          </div>
          <div className="flex gap-2 text-sm font-semibold">
            {content.filters.map((filter, index) => (
              <button
                className={
                  index === 0
                    ? "border-primary text-primary border-b-2 pb-1"
                    : "text-muted-foreground"
                }
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-8 md:grid-cols-2 lg:grid-cols-3">
          {eventCards.map((event, index) => {
            const Icon = event.icon;
            const eventContent = content.cards[index];

            return (
              <div
                className="glass-card flex flex-col overflow-hidden rounded-xl"
                key={eventContent.title}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={[
                      "absolute top-4 right-4 z-10 min-w-[60px] rounded-lg p-2 text-center",
                      event.secondaryDate
                        ? "neon-glow-secondary bg-secondary text-secondary-foreground"
                        : "neon-glow-primary bg-primary text-primary-foreground",
                    ].join(" ")}
                  >
                    <div className="text-xl leading-none font-bold">{event.day}</div>
                    <div className="text-[10px] font-semibold uppercase">{eventContent.month}</div>
                  </div>
                  <img
                    alt=""
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    src={event.image}
                  />
                  <div className="from-muted/50 dark:from-card absolute inset-0 bg-gradient-to-t to-transparent opacity-80" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-secondary mb-2 text-sm font-semibold tracking-tighter uppercase">
                    {eventContent.tag}
                  </div>
                  <h3 className="font-display mb-2 text-[32px] leading-[1.3] font-semibold">
                    {eventContent.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {eventContent.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Icon className="text-primary size-5" />
                      <span className="text-sm font-semibold">{eventContent.artist}</span>
                    </div>
                    <Button
                      className="rounded-full uppercase"
                      variant={event.outlined ? "outline" : "default"}
                    >
                      {eventContent.action}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <LandingFooter content={messages.landing.footer} navigation={messages.navigation} />
    </>
  );
};
