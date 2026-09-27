import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Footer } from "./components/footer";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// From the elexys.be homepage <title> and meta description.
const title = "Elektriciteit en aardgas voor bedrijven | Elexys";
const description =
  "Energieleverancier voor bedrijven. Elexys levert elektriciteit en aardgas en ondersteunt ondernemingen met strategisch energiebeheer en energie-optimalisatie.";

export const metadata: Metadata = {
  // Absolute base for the share-image URL; SITE_URL is set by scripts/deploy-pages.sh.
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: { default: title, template: "%s | Elexys" },
  description,
  openGraph: {
    title,
    description,
    siteName: "Elexys",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl-BE" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
