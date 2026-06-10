"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { useTranslation } from "@/hooks/use-translation";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const { messages } = useTranslation();

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <Button
      aria-label={messages.controls.themeToggleLabel}
      className="size-9 rounded-full p-0"
      onClick={toggleTheme}
      size="icon"
      type="button"
      variant="outline"
    >
      {mounted && resolvedTheme === "dark" ? (
        <MoonStar className="size-4" />
      ) : (
        <SunMedium className="size-4" />
      )}
    </Button>
  );
}
