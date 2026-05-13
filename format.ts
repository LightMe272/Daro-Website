export function formatPrice(value: number) {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatMileage(value: number) {
  return `${new Intl.NumberFormat("de-CH").format(value)} km`;
}
