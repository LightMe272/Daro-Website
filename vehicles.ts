export type FuelType = "Benzin" | "Diesel" | "Hybrid" | "Elektro";
export type Transmission = "Automat" | "Schaltgetriebe";

export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel: FuelType;
  transmission: Transmission;
  price: number;
  power: string;
  description: string;
  equipment: string[];
  images: string[];
  featured?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    slug: "bmw-330i-xdrive-touring",
    brand: "BMW",
    model: "330i xDrive Touring",
    year: 2021,
    mileage: 42000,
    fuel: "Benzin",
    transmission: "Automat",
    price: 38900,
    power: "258 PS",
    featured: true,
    description:
      "Gepflegter Schweizer Touring mit sportlicher Ausstattung, starkem Allradantrieb und hochwertigem Interieur. Ideal für Alltag, Familie und lange Strecken.",
    equipment: [
      "M Sportpaket",
      "Navigationssystem Professional",
      "LED-Scheinwerfer",
      "Sitzheizung vorne",
      "Rückfahrkamera",
      "Abstandstempomat",
      "19 Zoll Leichtmetallfelgen"
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    slug: "audi-a4-avant-40-tdi",
    brand: "Audi",
    model: "A4 Avant 40 TDI",
    year: 2020,
    mileage: 68500,
    fuel: "Diesel",
    transmission: "Automat",
    price: 29900,
    power: "190 PS",
    featured: true,
    description:
      "Eleganter Kombi mit sehr guter Langstreckentauglichkeit, effizientem Dieselmotor und sauber dokumentierter Servicehistorie.",
    equipment: [
      "S line Interieur",
      "Virtual Cockpit",
      "Matrix LED",
      "Einparkhilfe plus",
      "Elektrische Heckklappe",
      "Apple CarPlay",
      "3-Zonen-Klimaautomatik"
    ],
    images: [
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    slug: "mercedes-benz-c300e-amg-line",
    brand: "Mercedes-Benz",
    model: "C 300 e AMG Line",
    year: 2022,
    mileage: 27500,
    fuel: "Hybrid",
    transmission: "Automat",
    price: 46900,
    power: "313 PS",
    featured: true,
    description:
      "Moderner Plug-in-Hybrid mit AMG Line, niedrigem Kilometerstand und sehr komfortabler Ausstattung für Stadt und Autobahn.",
    equipment: [
      "AMG Line",
      "MBUX Navigation",
      "Panoramadach",
      "Aktiver Spurhalteassistent",
      "Ambientebeleuchtung",
      "Keyless-Go",
      "Burmester Soundsystem"
    ],
    images: [
      "https://images.unsplash.com/photo-1617814076668-8dfc6fe4ff6d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    slug: "vw-golf-variant-1-5-etsi",
    brand: "Volkswagen",
    model: "Golf Variant 1.5 eTSI",
    year: 2021,
    mileage: 36000,
    fuel: "Benzin",
    transmission: "Automat",
    price: 25900,
    power: "150 PS",
    description:
      "Praktischer und sparsamer Golf Variant mit moderner Assistenztechnik, viel Platz und sehr gutem Preis-Leistungs-Verhaeltnis.",
    equipment: [
      "Digital Cockpit",
      "LED Plus",
      "Adaptive Cruise Control",
      "Front Assist",
      "Dachreling",
      "Klimaautomatik",
      "ParkPilot"
    ],
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    slug: "tesla-model-3-long-range",
    brand: "Tesla",
    model: "Model 3 Long Range",
    year: 2022,
    mileage: 31500,
    fuel: "Elektro",
    transmission: "Automat",
    price: 34900,
    power: "498 PS",
    description:
      "Vollelektrische Limousine mit Allrad, grosser Reichweite und minimalistischem Innenraum. Frisch aufbereitet und sofort verfügbar.",
    equipment: [
      "Dual Motor Allrad",
      "Autopilot",
      "Glasdach",
      "Premium Interieur",
      "Wärmepumpe",
      "Sitzheizung vorne und hinten",
      "Induktives Laden"
    ],
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1571987502227-9231b837d92a?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  {
    slug: "skoda-octavia-combi-2-0-tdi",
    brand: "Skoda",
    model: "Octavia Combi 2.0 TDI",
    year: 2019,
    mileage: 82000,
    fuel: "Diesel",
    transmission: "Schaltgetriebe",
    price: 17900,
    power: "150 PS",
    description:
      "Zuverlässiger Kombi mit grossem Kofferraum, tiefen Betriebskosten und gepflegtem Zustand. Perfekt für Familie oder Gewerbe.",
    equipment: [
      "Navigationssystem",
      "Anhängerkupplung",
      "Sitzheizung",
      "Parksensoren vorne und hinten",
      "Tempomat",
      "Bluetooth",
      "Sommer- und Winterräder"
    ],
    images: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1400&q=85"
    ]
  }
];

export function getVehicleBySlug(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getFeaturedVehicles() {
  return vehicles.filter((vehicle) => vehicle.featured).slice(0, 3);
}
