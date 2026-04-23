"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <Button
      aria-label="Toggle theme"
      className="w-full sm:w-auto"
      onClick={toggleTheme}
      size="sm"
      type="button"
      variant="outline"
    >
      {mounted && resolvedTheme === "dark" ? (
        <MoonStar className="size-4" />
      ) : (
        <SunMedium className="size-4" />
      )}
      <span>{mounted && resolvedTheme === "dark" ? "Dark mode" : "Light mode"}</span>
    </Button>
  );
}
