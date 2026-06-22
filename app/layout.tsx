import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/foundation/providers";
import {
  PAGE_TITLE_SEPARATOR,
  PLATFORM_ACRONYM,
  PLATFORM_FULL_NAME,
} from "@/lib/brandLinks";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tmaas.digitalqatalyst.com"),
  title: {
    default: `${PLATFORM_ACRONYM}${PAGE_TITLE_SEPARATOR}${PLATFORM_FULL_NAME}`,
    template: `${PLATFORM_ACRONYM}${PAGE_TITLE_SEPARATOR}%s`,
  },
  description: `${PLATFORM_FULL_NAME} marketplace by DigitalQatalyst.`,
  openGraph: {
    title: `${PLATFORM_ACRONYM}${PAGE_TITLE_SEPARATOR}${PLATFORM_FULL_NAME}`,
    description: `${PLATFORM_FULL_NAME} marketplace by DigitalQatalyst.`,
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
