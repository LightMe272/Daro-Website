import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, PhoneCall, ShieldCheck } from "lucide-react";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { VehicleCard } from "@/components/VehicleCard";
import { company } from "@/data/company";
import { getFeaturedVehicles } from "@/data/vehicles";

const heroImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=85";

export default function HomePage() {
  const featuredVehicles = getFeaturedVehicles();

  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-ink text-white">
        <Image src={heroImage} alt="Modernes Fahrzeug in einer hochwertigen Garage" fill priority className="object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-page relative flex min-h-[calc(100vh-80px)] items-center py-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-red-200">Autohandel & Garage</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Geprüfte Fahrzeuge. Persönliche Beratung. Sauberer Service.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              {company.name} präsentiert ausgewählte Occasionen und begleitet Sie vom ersten Besichtigungstermin bis
              zur zuverlässigen Wartung nach dem Kauf.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/fahrzeuge" className="btn-primary">
                Autos ansehen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/kontakt" className="btn-secondary">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
        <div className="container-page relative -mt-24 pb-10">
          <div className="grid gap-4 rounded-lg border border-white/15 bg-white p-5 text-ink shadow-soft md:grid-cols-3">
            {[
              { label: "Geprüfte Fahrzeuge", icon: ShieldCheck },
              { label: "Faire Beratung", icon: BadgeCheck },
              { label: "Service-Termin möglich", icon: CalendarCheck }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-red-50 text-signal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-black">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Über die Garage"
              title="Vertrauen, Erfahrung und Qualität aus einer Hand."
              description="Wir verbinden professionellen Fahrzeughandel mit klassischer Garagenarbeit. Jedes Fahrzeug wird sorgfältig geprüft, transparent beschrieben und persönlich erklärt."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="btn-dark">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Direkt anrufen
              </a>
              <Link href="/ueber-uns" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-ink transition hover:border-ink">
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-ink p-7 text-white">
              <p className="text-4xl font-black">15+</p>
              <p className="mt-2 text-sm text-slate-300">Jahre Erfahrung mit Fahrzeugen, Service und Beratung</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-7">
              <p className="text-4xl font-black text-ink">100%</p>
              <p className="mt-2 text-sm text-steel">Fokus auf transparente Fahrzeugangebote ohne Checkout-Druck</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-7 sm:col-span-2">
              <p className="text-xl font-black text-ink">Persönliche Beratung vor Ort</p>
              <p className="mt-3 text-sm leading-7 text-steel">
                Besichtigung, Probefahrt, Eintausch, Finanzierungspartner und Servicefragen klären wir direkt und
                verständlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Aktuelle Fahrzeuge"
              title="Ausgewählte Autos zum Verkauf"
              description="Eine Vorschau auf Fahrzeuge, die aktuell verfügbar sind. Weitere Details, Bilder und technische Angaben finden Sie auf der Fahrzeugseite."
            />
            <Link href="/fahrzeuge" className="btn-dark w-fit">
              Alle Autos ansehen
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Dienstleistungen"
              title="Alles rund um Wartung, Reparatur und Prüfung."
              description="Von Servicearbeiten bis zur MFK-Vorbereitung: Die Garage bleibt auch nach dem Fahrzeugkauf Ihr Ansprechpartner."
            />
            <Link href="/dienstleistungen" className="btn-dark w-fit">
              Dienstleistungen ansehen
            </Link>
          </div>
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>
    </>
  );
}
