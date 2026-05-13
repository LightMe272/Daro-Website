import Link from "next/link";
import { Car, Menu, Phone } from "lucide-react";
import { company } from "@/data/company";

const navigation = [
  { href: "/", label: "Start" },
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Zur Startseite">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-signal">
            <Car className="h-6 w-6" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-black tracking-wide">{company.name}</span>
            <span className="block text-xs font-medium uppercase text-slate-300">Fahrzeuge & Service</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="btn-secondary py-2.5">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 bg-white/10">
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Menü öffnen</span>
          </summary>
          <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-md border border-slate-200 bg-white py-2 text-ink shadow-soft">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-semibold transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phone.replaceAll(" ", "")}`}
              className="mx-3 mt-2 flex items-center justify-center gap-2 rounded-md bg-signal px-4 py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Anrufen
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
