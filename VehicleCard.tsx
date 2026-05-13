import Image from "next/image";
import Link from "next/link";
import { Calendar, Fuel, Gauge, Settings } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { formatMileage, formatPrice } from "@/lib/format";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/fahrzeuge/${vehicle.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image
            src={vehicle.images[0]}
            alt={`${vehicle.brand} ${vehicle.model}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-md bg-ink/90 px-3 py-2 text-sm font-black text-white">
            {formatPrice(vehicle.price)}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">{vehicle.brand}</p>
          <h3 className="mt-1 text-xl font-black text-ink">{vehicle.model}</h3>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-steel">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-signal" aria-hidden="true" />
            <dt className="sr-only">Jahrgang</dt>
            <dd>{vehicle.year}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-signal" aria-hidden="true" />
            <dt className="sr-only">Kilometerstand</dt>
            <dd>{formatMileage(vehicle.mileage)}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4 text-signal" aria-hidden="true" />
            <dt className="sr-only">Treibstoff</dt>
            <dd>{vehicle.fuel}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-signal" aria-hidden="true" />
            <dt className="sr-only">Getriebe</dt>
            <dd>{vehicle.transmission}</dd>
          </div>
        </dl>

        <Link href={`/fahrzeuge/${vehicle.slug}`} className="btn-dark mt-6 w-full">
          Details ansehen
        </Link>
      </div>
    </article>
  );
}
