"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import type { AppMessages } from "@/types/i18n.types";

interface GalleryScreenProps {
  messages: AppMessages;
}

const galleryItems = [
  {
    meta: "DANCEFLOOR / 02:44 AM",
    title: "PhamTien Peak Energy",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxppztYJdXbzqIz4bLGBcsbquAlzxTjGIZO42-yqv5at0zk8AaxOX3fwcvySBjtJFswaEJAWNyKWhtds-iWICeLyAeSokrPBAcaysEllebFvhR56PXjtXg0eKj1mrcUxqw2JQqVRK1nLj334E5QJyvUQ8k_64a4xN63QT-i17el8ZqwWdOfTean--9Zz0Uog4rR9CzIzxPZCrSyPRuYm0pTjjEcCUO3d-YSq1uBENQv_sPRHaCIBriH2pHuJYMWeofMZbvrfcCo4w",
  },
  {
    meta: "BAR / SIGNATURE",
    title: "Neon Nectar",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHnt5L4ZvETaXQw3oZNxQDd9LIS_v-ajkv1Z9QbhooWWptcEOQca3-L1jODXiyLRmvfRBMxSkhXH2LBwvDc_bkmYi6EQLoL9GaO2QQ33daHL02iuw5Eo_aaHu5mazQ0s8Rw9enUqoPFSJAABZpko6TuMyMhobWPDZgiNxCbzqOp5aNNqPS8f_fyikwte1eDsg_4t-ODqgUpsIMGTQmvr9AhrvqijkYiXRh0KmxTs8-Thl-N_HlKE59UJnts0A4-q5ch4_-T-3WbVQ",
  },
  {
    meta: "MAIN STAGE / GUEST",
    title: "The Pulse of PhamTien",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb1Gdp4p_ELy94Y0ZMYrQMb4WNpf8DJDOJZSJ_X4pETiDC1wU3XJmuE-PJMQ7qB7AoM-Sh3Mpd0J0BdAnS1ByRBZf7nSwrYgpSarGkDoAo9oSCmB1XpgmPf8mzOUs7dVsEuDg0N24R8sJXx5p_XQtOHpakBdZkHzdgjoF_tLirWQm-0Kb1RQM96uX7HVAq5WBf1CMERli_dLMf6c5kzngY6TDZ2yhfir6EzizL3HUZFLLFKGALDJkg1yisMnT-ISh8tY5gN8gMKf8",
  },
  {
    meta: "VIP / THE OBSIDIAN ROOM",
    title: "Reserved Exclusivity",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtP2klYJdqexdUtuzsL5SnhySj2FnJKZq9C2tOY0yMkX62Dnp2jishRTDbXYotHMgKlYbuV7VtlJoiiDUr3GyAkAIIKURDSiggYfUUKWV-MAF-GI6uUkPOTh6NkJpLmUZ_91UcRcf37yKISZBQczAJnxsySYodS-yG3taUPvPqqs1hrjnbSlGl-xDuGONMzHY_sja2umJixNbi37Gj2M69WSSISKRMxeanJhkojxfgXGOVeLd046BsRC710YWTgmkdvpmIiSJP9Xo",
  },
  {
    meta: "TECH / PRECISION",
    title: "Sonic Craftsmanship",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnvHYWV_TD3Lvp5_NFQNj-cDHH3P7lXPOMKk5YuvQeECmc7TIH7RgoJH5EFxKGgOTB_zb7OrQqu6DxhMBShTXwozRlFMgBajCnJXP_ExglVonNCXSBZ8ub8P7CJdM0s-uA--E7jpLKdOOMv9tQq-RpNNVxu7lw3b8RRPY3_WKB6birApamj90KBaqiTCA8LGeP7jUjTNCXpSnoI5vlxo-ydNsEuLONA1C7obNXXG0UkGLCX3e3yrgRpFX1c7vSyMzYHWfU5QkhuHc",
  },
  {
    meta: "EVENT / MIDNIGHT DROP",
    title: "Gold Dust Memories",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEOo8mA-hq5fZeqbfTOsl8z9bu3nIwIMHe7Dfk88bMUzlpJVDnsgHXOM2paimlTSJrkwdE3chjC3TBjWIFv_srIsp56dZZ3JSt7SGQQeEscG2VIE01HK8j8JWhDMyhgHzW9qyZvben8Brk81CgcfoqBZo6cLUE0hVC7hfCgLA2bVfKZ2JAeNu9tcEa7ZhvQGhXHe04SxOpNBQ_7vUbmPLygn0ClNHNd_ubau9tKADxXwzvKlNmSiM9R6M5AXpP7t_3KSxoyFC5isA",
  },
];

export const GalleryScreen = ({ messages }: GalleryScreenProps) => {
  const content = messages.screens.gallery;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeLightbox = () => setActiveImage(null);
  const activeImage = activeIndex === null ? null : galleryItems[activeIndex];
  const activeContent = activeIndex === null ? null : content.items[activeIndex];

  function setActiveImage(index: number | null) {
    setActiveIndex(index);
  }

  return (
    <>
      <main className="mx-auto max-w-[1440px] px-8 pt-36">
        <header className="mb-20 text-center">
          <h1 className="font-display text-primary mb-4 text-[64px] font-extrabold tracking-tighter uppercase md:text-7xl">
            {content.title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-[1.6] opacity-80">
            {content.description}
          </p>
        </header>

        <div className="mb-20 flex flex-wrap justify-center gap-4">
          {content.filters.map((filter, index) => (
            <Button
              className={
                index === 0
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground"
              }
              key={filter}
              variant="outline"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="columns-1 gap-6 pb-[120px] md:columns-2 lg:columns-3">
          {galleryItems.map((item, index) => (
            <button
              className="glass-card group relative mb-6 w-full cursor-pointer overflow-hidden rounded-xl text-left"
              key={item.title}
              onClick={() => setActiveImage(index)}
              type="button"
            >
              <img alt="" className="h-auto w-full object-cover" src={item.src} />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-primary text-sm font-semibold">
                  {content.items[index].meta}
                </span>
                <h3 className="font-display text-xl font-semibold text-white">
                  {content.items[index].title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </main>

      <div
        className={[
          "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-8 transition-all duration-300",
          activeImage ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <button
          className="hover:text-primary absolute top-8 right-8 text-white"
          onClick={closeLightbox}
          type="button"
        >
          <X className="size-9" />
        </button>
        {activeImage && (
          <div className="text-center">
            <img
              alt=""
              className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-[0_0_100px_rgba(255,177,195,0.3)]"
              src={activeImage.src}
            />
            <p className="font-display text-primary mt-4 text-xl font-semibold">
              {activeContent?.title}
            </p>
          </div>
        )}
      </div>
      <LandingFooter content={messages.landing.footer} navigation={messages.navigation} />
    </>
  );
};
