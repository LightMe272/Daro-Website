"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

type ContactFormProps = {
  vehicles?: Vehicle[];
  selectedVehicle?: string;
};

export function ContactForm({ vehicles = [], selectedVehicle }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">Name</span>
          <input className="form-field" name="name" placeholder="Ihr Name" required />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">E-Mail</span>
          <input className="form-field" name="email" placeholder="name@beispiel.ch" required type="email" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">Telefonnummer</span>
          <input className="form-field" name="phone" placeholder="+41 ..." type="tel" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">Interesse an Fahrzeug</span>
          <select className="form-field" name="vehicle" defaultValue={selectedVehicle ?? ""}>
            <option value="">Bitte auswählen</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.slug} value={`${vehicle.brand} ${vehicle.model}`}>
                {vehicle.brand} {vehicle.model}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-bold text-ink">Nachricht</span>
        <textarea className="form-field min-h-36 resize-y" name="message" placeholder="Wie können wir Ihnen helfen?" />
      </label>
      <button type="submit" className="btn-primary mt-6">
        <Send className="h-4 w-4" aria-hidden="true" />
        Anfrage senden
      </button>
      {sent ? (
        <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-ink">
          Vielen Dank. Dies ist ein Demo-Formular; die echte Versandfunktion kann später angebunden werden.
        </p>
      ) : null}
    </form>
  );
}
