import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-black">{company.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Ihr professioneller Partner für Occasionen, Wartung und Reparaturen. Persönliche Beratung,
            transparente Angebote und sorgfältig geprüfte Fahrzeuge.
          </p>
        </div>

        <div>
          <p className="font-bold">Kontakt</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <a className="flex items-center gap-2 hover:text-white" href={`tel:${company.phone.replaceAll(" ", "")}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${company.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {company.email}
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {company.address}
            </p>
          </div>
        </div>

        <div>
          <p className="font-bold">Schnellzugriff</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <Link href="/fahrzeuge" className="hover:text-white">
              Fahrzeuge ansehen
            </Link>
            <Link href="/dienstleistungen" className="hover:text-white">
              Dienstleistungen
            </Link>
            <Link href="/kontakt" className="hover:text-white">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</span>
          <span>Keine Online-Zahlung, kein Warenkorb, kein Checkout.</span>
        </div>
      </div>
    </footer>
  );
}
