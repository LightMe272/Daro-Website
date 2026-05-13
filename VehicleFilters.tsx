"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { FuelType, Vehicle } from "@/data/vehicles";
import { formatMileage, formatPrice } from "@/lib/format";
import { VehicleCard } from "./VehicleCard";

type VehicleFiltersProps = {
  vehicles: Vehicle[];
};

export function VehicleFilters({ vehicles }: VehicleFiltersProps) {
  const maxPrice = Math.max(...vehicles.map((vehicle) => vehicle.price));
  const maxMileage = Math.max(...vehicles.map((vehicle) => vehicle.mileage));
  const brands = Array.from(new Set(vehicles.map((vehicle) => vehicle.brand))).sort();
  const fuels = Array.from(new Set(vehicles.map((vehicle) => vehicle.fuel))).sort() as FuelType[];

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("Alle");
  const [fuel, setFuel] = useState("Alle");
  const [price, setPrice] = useState(maxPrice);
  const [mileage, setMileage] = useState(maxMileage);

  const filteredVehicles = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return vehicles.filter((vehicle) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        `${vehicle.brand} ${vehicle.model} ${vehicle.description}`.toLowerCase().includes(normalizedSearch);
      const matchesBrand = brand === "Alle" || vehicle.brand === brand;
      const matchesFuel = fuel === "Alle" || vehicle.fuel === fuel;
      const matchesPrice = vehicle.price <= price;
      const matchesMileage = vehicle.mileage <= mileage;

      return matchesSearch && matchesBrand && matchesFuel && matchesPrice && matchesMileage;
    });
  }, [brand, fuel, mileage, price, search, vehicles]);

  function resetFilters() {
    setSearch("");
    setBrand("Alle");
    setFuel("Alle");
    setPrice(maxPrice);
    setMileage(maxMileage);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-signal" aria-hidden="true" />
            <h2 className="text-lg font-black text-ink">Filter</h2>
          </div>
          <button type="button" onClick={resetFilters} className="text-sm font-bold text-signal hover:text-red-700">
            Zurücksetzen
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-ink">Suche</span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="form-field pl-10"
                placeholder="Marke, Modell, Stichwort"
                type="search"
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-ink">Marke</span>
            <select value={brand} onChange={(event) => setBrand(event.target.value)} className="form-field">
              <option>Alle</option>
              {brands.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-ink">Treibstoff</span>
            <select value={fuel} onChange={(event) => setFuel(event.target.value)} className="form-field">
              <option>Alle</option>
              {fuels.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 flex items-center justify-between gap-3 text-sm font-bold text-ink">
              Max. Preis <span className="text-steel">{formatPrice(price)}</span>
            </span>
            <input
              value={price}
              min={10000}
              max={maxPrice}
              step={1000}
              onChange={(event) => setPrice(Number(event.target.value))}
              className="w-full accent-signal"
              type="range"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center justify-between gap-3 text-sm font-bold text-ink">
              Max. Kilometer <span className="text-steel">{formatMileage(mileage)}</span>
            </span>
            <input
              value={mileage}
              min={0}
              max={maxMileage}
              step={5000}
              onChange={(event) => setMileage(Number(event.target.value))}
              className="w-full accent-signal"
              type="range"
            />
          </label>
        </div>
      </aside>

      <section>
        <div className="mb-5 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-ink">
            {filteredVehicles.length} {filteredVehicles.length === 1 ? "Fahrzeug" : "Fahrzeuge"} gefunden
          </p>
          {(search || brand !== "Alle" || fuel !== "Alle" || price !== maxPrice || mileage !== maxMileage) && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 text-sm font-bold text-signal hover:text-red-700"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Filter löschen
            </button>
          )}
        </div>

        {filteredVehicles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-xl font-black text-ink">Keine Fahrzeuge gefunden</p>
            <p className="mt-3 text-steel">Bitte passen Sie die Filter an oder kontaktieren Sie uns direkt.</p>
          </div>
        )}
      </section>
    </div>
  );
}
