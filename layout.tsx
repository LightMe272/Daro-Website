import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Garage Muster AG | Fahrzeuge, Service und Reparaturen",
  description:
    "Moderne Website für eine Autogarage mit Fahrzeugangebot, Dienstleistungen, Über-uns-Seite und Kontaktformular."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
