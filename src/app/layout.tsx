import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppProvider } from "@/components/providers/app-provider";
import { DEFAULT_LOCALE } from "@/lib/i18n/translation-messages";
import { getTranslations } from "@/lib/i18n/get-translations";
import "./globals.css";

const defaultMessages = getTranslations(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: {
    default: defaultMessages.metadata.appName,
    template: `%s | ${defaultMessages.metadata.appName}`,
  },
  description: defaultMessages.metadata.appDescription,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
