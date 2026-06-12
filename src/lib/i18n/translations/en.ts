import type { AppMessages } from "@/types/i18n.types";

export const enMessages: AppMessages = {
  metadata: {
    appName: "PhamTienClub",
    appDescription:
      "PhamTienClub is a premium nightlife venue with neon energy, immersive sound, VIP service, and exclusive music experiences.",
  },
  navigation: {
    brand: "PhamTienClub",
    navItems: [
      { label: "Home", href: "home" },
      { label: "Events", href: "events" },
      { label: "Gallery", href: "gallery" },
      { label: "VIP/Booking", href: "booking" },
      { label: "Feedback", href: "feedback" },
    ],
    primaryAction: {
      label: "Book Now",
      href: "booking",
    },
  },
  controls: {
    languageSwitcherLabel: "Language switcher",
    themeToggleLabel: "Toggle theme",
    languages: {
      en: "English",
      vi: "Vietnamese",
    },
    themes: {
      light: "Light mode",
      dark: "Dark mode",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
  },
  screens: {
    events: {
      featuredLabel: "Featured Event",
      featuredDate: "This Saturday",
      featuredDescription:
        "Join us for a sensory-shattering experience at PhamTienClub with international headliner DJ AXON. Immersive 360° light show and premium bottle service packages available.",
      primaryAction: "Get Tickets",
      secondaryAction: "VIP Tables",
      heading: "Upcoming Nightfall",
      description: "Curated sonic experiences for the elite few at PhamTienClub.",
      filters: ["All Events", "Techno", "House", "Special Acts"],
      cards: [
        {
          month: "Oct",
          tag: "Midnight Rituals",
          title: "CHROMATIC DREAMS",
          description:
            "A deep dive into melodic techno with resident master DJ KAIRO and visual artist LUMA.",
          artist: "DJ KAIRO",
          action: "Join Guestlist",
        },
        {
          month: "Oct",
          tag: "Underground Sessions",
          title: "INFRARED LOBBY",
          description:
            "Redefining bass culture. A high-octane night featuring local legends and experimental sound design.",
          artist: "VOX POPULI",
          action: "Get Tickets",
        },
        {
          month: "Oct",
          tag: "Halloween Special",
          title: "THE OBSIDIAN GALA",
          description:
            "Our annual dark masquerade at PhamTienClub. Dress code: Onyx & Silver. Secret headliner revealed at midnight.",
          artist: "SECRET GUEST",
          action: "Waitlist",
        },
        {
          month: "Nov",
          tag: "Vocal House",
          title: "ECHO CHAMBER",
          description:
            "Soul-stirring vocals meet driving house beats. An intimate night focusing on the purity of the voice.",
          artist: "ELARA BLU",
          action: "Get Tickets",
        },
        {
          month: "Nov",
          tag: "VIP Tuesdays",
          title: "LIQUID VELVET",
          description:
            "Exclusive cocktail curation paired with downtempo grooves. The perfect mid-week escape for members.",
          artist: "LO-FI JAY",
          action: "Reserve",
        },
        {
          month: "Nov",
          tag: "Live Concept",
          title: "SYNTH WAVE LIVE",
          description:
            "A live hardware performance by SYNTH-A. Exploring the roots of 80s electronic in a modern context.",
          artist: "SYNTH-A",
          action: "Get Tickets",
        },
      ],
    },
    gallery: {
      title: "PhamTien Visuals",
      description:
        "A glimpse into the neon-noir soul of PHAMTIENCLUB. Experience the energy, the people, and the pulse of the night.",
      filters: ["All Moments", "Dancefloor", "VIP Lounge", "Mixology", "The DJs"],
      items: [
        { meta: "Dancefloor / 02:44 AM", title: "PhamTien Peak Energy" },
        { meta: "Bar / Signature", title: "Neon Nectar" },
        { meta: "Main Stage / Guest", title: "The Pulse of PhamTien" },
        { meta: "VIP / The Obsidian Room", title: "Reserved Exclusivity" },
        { meta: "Tech / Precision", title: "Sonic Craftsmanship" },
        { meta: "Event / Midnight Drop", title: "Gold Dust Memories" },
      ],
    },
    booking: {
      eyebrow: "Exclusive Experience",
      title: "VIP Reservations",
      description:
        "Elevate your night to extraordinary heights. Secure your private sanctuary in the heart of the pulse at PhamTienClub. Limited availability for the elite.",
      packageTitle: "Choose Your Package",
      drinkTitle: "Drink Menu",
      detailsTitle: "Reservation Details",
      packages: [
        { description: "Prime table location, 1 bottle included, 4 guest passes." },
        { description: "VIP balcony access, 2 premium bottles, 8 guest passes." },
        { description: "Main stage side booth, personal concierge, unlimited guest list." },
      ],
      fieldLabels: {
        date: "Select Date",
        guests: "Number of Guests",
        table: "Preferred Table / Booth Number",
        requests: "Special Requests",
      },
      guestOptions: ["1-4 Guests", "5-8 Guests", "9-12 Guests", "12+ Guests (Custom Quote)"],
      placeholders: {
        table: "e.g. V-04 (Refer to map)",
        requests: "Birthday, bottle preferences, arrival time...",
      },
      submit: "Request Reservation",
      mapTitle: "Club Floor Plan",
      availability: "Live Availability",
      legends: ["VIP Diamond", "Reserved"],
      policiesTitle: "VIP Policies",
      policies: [
        "Dress code: Upscale and fashionable. Management reserves all rights.",
        "21+ ID required for all guests in reservation.",
        "Minimum spend applies to all table bookings.",
      ],
    },
    feedback: {
      eyebrow: "Direct Contact",
      title: "Connect with our",
      highlightedTitle: "Space",
      titleSuffix: "",
      description:
        "Experience elevated nightlife and premium sound at PhamTienClub. Our team is always ready to support your special requests.",
      contactCards: [
        {
          title: "Address",
          lines: ["Pham Tien nightclub, Ngoc Nhi", "Quang Xuong, Thanh Hoa, Vietnam"],
        },
        {
          title: "VIP Hotline",
          lines: ["0386653135"],
        },
        {
          title: "Email",
          lines: ["phamminh030801@gmail.com"],
        },
      ],
      socialLabels: ["Share", "Website", "Photos"],
      formTitle: "Send Feedback",
      formDescription:
        "Your voice helps us shape more polished and memorable nights for every guest.",
      fields: {
        name: "Full name (optional)",
        email: "Email (optional)",
        subject: "Subject",
        message: "Your message",
      },
      placeholders: {
        name: "Alex Nguyen",
        email: "email@example.com if you want a reply",
        message: "Tell us how the night felt...",
      },
      subjects: [
        { value: "service-feedback", label: "Service feedback" },
        { value: "vip-booking", label: "VIP service & booking" },
        { value: "event-private-party", label: "Events & private party" },
        { value: "other", label: "Other issue" },
      ],
      submit: "Send now",
      sending: "Sending...",
      success: "Received!",
      error: "Could not send yet. Please try again or contact the hotline.",
      mapBadge: "Find us in Quang Xuong",
      mapTitle: "A destination for",
      mapHighlightedTitle: "Elevated Nights",
      mapImageAlt: "Night city atmosphere with pink and cyan neon lights.",
    },
  },
  landing: {
    hero: {
      eyebrow: "Premium Nightlife Venue",
      title: "THE ULTIMATE PhamTien EXPERIENCE",
      description:
        "Step into a world where neon pulses through the air and every beat is a memory waiting to happen. Experience exclusivity at its peak in the heart of the city with PhamTienClub.",
      announcement: "Scroll to explore",
      primaryAction: {
        label: "Book your table",
        href: "#booking",
      },
      secondaryAction: {
        label: "View calendar",
        href: "#events",
      },
      highlights: [],
      metrics: [],
    },
    featureSection: {
      eyebrow: "The PhamTien Ethos",
      title: "Sensory immersion beyond limits",
      description:
        "Every detail is tuned for a premium night: heavy sound, kinetic visuals, and cocktails that feel as theatrical as the room.",
      items: [
        {
          title: "State-of-the-art sound",
          description:
            "Spatial audio gives the room a visceral acoustic experience that moves through the crowd with each set.",
        },
        {
          title: "Dynamic visual arts",
          description:
            "Digital mapping and kinetic lighting transform the venue throughout the night, mirroring the dance floor energy.",
        },
        {
          title: "Artisanal mixology",
          description:
            "Master mixologists craft signature cocktails with smoke, glow, and polished service at every table.",
        },
      ],
    },
    processSection: {
      eyebrow: "Tonight's Lineup",
      title: "Tonight's lineup",
      description: "Do not miss the most exclusive set of the month at PhamTienClub.",
      actionLabel: "View all events",
      primaryEvent: {
        badge: "Live now: 22:00",
        title: "Cyberpunk Sessions feat. X-Neon",
        genre: "Melodic techno",
        artist: "DJ X-Neon + guests",
        imageAlt: "DJ performing in neon pink and cyan light.",
      },
      items: [
        {
          eyebrow: "Door Entry",
          title: "Ladies Night",
          description:
            "Complimentary drinks for ladies until midnight. Exclusive lounge access included.",
          actionLabel: "Get on the list",
        },
        {
          eyebrow: "VIP Exclusive",
          title: "Bottle Service",
          description:
            "Last 3 tables available for tonight's main event. Premium spirits and private host.",
          actionLabel: "Reserve now",
        },
      ],
    },
    showcaseSection: {
      eyebrow: "The PhamTien Ethos",
      title: "Sensory immersion beyond limits",
      description:
        "A refined nightlife room built from sound, light, service, and the kind of energy that feels immediate.",
      imageAlt: "Luxury nightclub bar with neon-lit bottles and dark reflective surfaces.",
      items: [
        {
          title: "State-of-the-art sound",
          description:
            "Advanced spatial audio delivers a physical, high-definition club experience.",
        },
        {
          title: "Dynamic visual arts",
          description:
            "Kinetic light installations reshape the room every hour with neon movement.",
        },
        {
          title: "Artisanal mixology",
          description:
            "Signature cocktails are prepared with premium ingredients and theatrical presentation.",
        },
      ],
    },
    ctaSection: {
      title: "The gallery",
      description:
        "A glimpse into the nights that define us. Witness the energy, the people, and the pulse of PhamTienClub.",
      primaryAction: {
        label: "Follow on Instagram",
        href: "#gallery",
      },
      secondaryAction: {
        label: "Book your table",
        href: "#booking",
      },
      items: [
        {
          alt: "Packed dance floor illuminated by red strobe lights.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlws8Vsb3IhEYVitTpCm3SG3rheicZsftVYF9MkshHlwWBs-xfFZj-defTPio37VB5Me5iOISo6ocYDkez0_Y7siEgQJEwegnFB4788mW03VxFARV2ONQ_z0fYm6-ehC-_a8A7WFkOq0-fIxenkfHxRZ8bgTmpsFEbt6LVS1QbfDc1C4MG70VjNp8PqXqy3FTswnuO-Gzbu3JgLg_DwKYZn0rJnpa9rAQpwYgGew4mG2NoAJfHBDzXv_kZpYXhRhmAvCepZf_sqBM",
        },
        {
          alt: "Cocktail on a glowing bar counter with blue backlighting.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR2MzQVIOa_U3yxd85qlsoeBPA0HnWLZi5UoKHg2IesbezGdtV76hZ_v7vXLCk2iCkJegdQr02TcGYzB5-b-aItHjSrHxsX2pnSy6VHyQY3oYS3VmNYBt_a22YH6FGBAP4a-I382Q3rzJfeMH9wH64KztyPtAyQTOkBiuoZ5xWhQKa8CFwcXsQoP_NIa4cB_-IetWzAq85bLC0VzKWS4R7IL3FhQEYElpbjNcklD2Bf2IKguw00owhzRpjnsZe1VrXzsH5HhjurbQ",
        },
        {
          alt: "DJ hand mixing on a turntable in a dark booth.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_nfEMOTMfONqN1mAuM57i1PfIoy_bWYxdfJfEBkzfLSXfO3KtM-HIWlZyBYjtLFGBMdnltUbUjzAeFQfrM58FBKm7fC-rFjqid69jhOs8TOj6B5ZKbBjUWLCAaSfsaEwGK7lgJLsEj4pOH_n4c9SfDOdycHdFefCBX2ibUzAhcXtacP8Hv4aSRTXFImxyq6Q1NlQaBuFkq0mSs10xbTK4atSl5qEYEhZeJId4I4SSSIXsTd248AKrChXAgPmObam_nj-CAS7tCU4",
        },
        {
          alt: "VIP guests dancing in a private booth.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdG8pS-wYlTLW09hpH8I_30GfmfKZUj7dhNAPncVxBsZgJy7J_2gkbC1doIbQTjJyx3LdzP7GBBtIGslhERGq-i7BaLHFZ33sQkfreQsDdTsJoiLmlxwZu3VzUlBNBOYdsphoFWwjIiuzifc1ZQ3iTEp_VcbMrYpOIcRs3sQrYJxUoHRTTG-LpOFI9lR20ovzb5wlV0_IoYMD28hYD-2EgWEF4KTKqWyOU2gOkdRCoKUd6fRV5rr7LhnV1fp_mPLLOkdsjDt67xXM",
        },
        {
          alt: "Neon nightclub ceiling with geometric lighting.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9RZveL7M5HKkEIZrC2impbaFAlZhU5JIFkqVT0z7WOz2JePErh_8nVE7Py9qWxMvff1-d5VOYWskSo8IA5rGfjHl3zjSj0F8Aohw3guHy424Dnfym-HcJvOtco08F_AxF9Ms5m1CyPjJzGYr7CErzBnxuOZkV2vRofCwehwrzCOZomOOXrVE0dYNnLAKb0iUmT1MGhxGokZ5QGcE-Pmk6k4S_1ZM54GFsU1inZywvu3aYjkEOYpotEIIW_nTroHUfmTYM1UNrcLw",
        },
        {
          alt: "Performer silhouette surrounded by stage light.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp7-JMezyNOoCZQXZjnvdb2cpjJFnS4rj8am6a_wIt2H_gL7QVMET0EwKEiIxsuYFPwISdJYN_XsNKUoHnfy-mhofrwP5Tg5knQAm5m3jfKPr2H2D_mkVqu8IYYmjW6StPlIQHRtvuf4dgGg9h34rtJgKfx4vGfN2TggFyJKKljZGBjLLs4pyNF9jbmwbCx6Dn-pEAAu_-zzLeCIdLH4ErDPuz3YXG6ZL0CvQARv1zX-PAIq9j9Del2BEaK91-D4uZvC3FKl7HpyE",
        },
        {
          alt: "Bottle service delivered to a VIP table.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrISHMpN1f_1oPqah5iHzQdF5gjmeaG3EJezSthYDgaaS3FZt-TmO5CCbVNVb6UqME14dC_wCJWYVZSVNYhQWFOz-qpUFXc9RsWuHFTcbPX6EfxgWJr56k-C8ADBQMzQ3vy-5AOkvinXGVx1vBsWz89kljWbKhuray0W9o9Fu0-qXDwnf1lDT5eUOVK5WVjnHKOdOYnn6OKRf9T-YHuj79kfpBzzcWFzZ3P1ogRhCGZo0yByOzXxuQf0RN1VnUC5dzl7edapzlpLQ",
        },
        {
          alt: "Aerial view of a busy dance floor under violet light.",
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UdmK8I3vz3rAx05s6JTTnCu4s8lsiHDilJRA9DUMvqjJ0HP0FMUX3Z1rpp51SgwCjadXpWlL0Cc8_ytSW5ubvvy_58wILpgvbzNy-emOL5VkwwkoHe5vcSLaZeVc5RMe18VVl0F5uzKrv9_OsXla1T-tQ93ceJTYTGmDLkzumiozGWFzQOM913yrgQxJpiRRu4547q30U25a8_CNLDQ3j4hp0S2HoQvde5gPWjz6PdP_MT1Ie1pN_wi-kh9x-Ul7fOSsn_oaBxw",
        },
      ],
    },
    footer: {
      tagline: "The premier destination for high-end nightlife and exclusive musical experiences.",
      addressLabel: "Location",
      address: "Pham Tien nightclub, Ngoc Nhi, Quang Xuong, Thanh Hoa, Vietnam",
      mapQuery: "Pham Tien nightclub Ngoc Nhi Quang Xuong Thanh Hoa Vietnam",
      hoursLabel: "Operating Hours",
      hours: "WED - SUN | 10PM - 5AM",
      contactLabel: "Contact",
      contact: "phamminh030801@gmail.com | 0386653135",
      quickLinksLabel: "Navigation",
      quickLinks: [
        { label: "Privacy Policy", href: "#top" },
        { label: "Terms of Service", href: "#top" },
        { label: "Contact", href: "#booking" },
        { label: "Hours", href: "#booking" },
      ],
      mapTitle: "PhamTienClub map",
      madeWith: "MADE WITH LOVE FOR THE NIGHT",
      copyright: "2024 PHAMTIENCLUB. ALL RIGHTS RESERVED.",
    },
  },
};
