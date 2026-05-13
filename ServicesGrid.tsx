import { BadgeCheck, CarFront, Paintbrush, ScanSearch, Settings, ShieldCheck, Wrench } from "lucide-react";

const services = [
  {
    title: "Autoservice",
    description: "Regelmässige Wartung nach Herstellervorgaben inklusive Öl, Filter und Sicherheitscheck.",
    icon: CarFront
  },
  {
    title: "Reparaturen",
    description: "Fachgerechte Reparaturen an Motor, Bremsen, Fahrwerk, Elektrik und Verschleissteilen.",
    icon: Wrench
  },
  {
    title: "Lackierarbeiten",
    description: "Professionelle Lack- und Karosseriearbeiten von kleinen Schaeden bis zur Aufbereitung.",
    icon: Paintbrush
  },
  {
    title: "Reifenwechsel",
    description: "Saisonaler Reifenwechsel, Auswuchten, Kontrolle und Beratung zu passenden Pneus.",
    icon: Settings
  },
  {
    title: "Fahrzeugdiagnose",
    description: "Moderne Diagnosegeräte für schnelle Fehleranalyse und transparente Empfehlungen.",
    icon: ScanSearch
  },
  {
    title: "MFK-Vorbereitung",
    description: "Kontrolle und Vorbereitung für Prüfung, Nachkontrolle und technische Abnahme.",
    icon: ShieldCheck
  },
  {
    title: "Weitere Leistungen",
    description: "Aufbereitung, Batteriecheck, Klimaservice, An- und Verkauf sowie persönliche Beratung.",
    icon: BadgeCheck
  }
];

export function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-signal">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-black text-ink">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-steel">{service.description}</p>
          </article>
        );
      })}
    </div>
  );
}
