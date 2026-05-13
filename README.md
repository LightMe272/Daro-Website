# Garage-Website

Moderne Next.js-Website für eine Autogarage / einen Autohändler. Die Website präsentiert Fahrzeuge und Dienstleistungen, enthält aber bewusst keinen Warenkorb, keine Online-Zahlung und keinen Checkout.

## Inhalte bearbeiten

- Fahrzeuge: `src/data/vehicles.ts`
- Kontaktdaten, Adresse, Öffnungszeiten: `src/data/company.ts`
- Startseite: `src/app/page.tsx`
- Dienstleistungen: `src/app/dienstleistungen/page.tsx`
- Über uns: `src/app/ueber-uns/page.tsx`
- Kontakt: `src/app/kontakt/page.tsx`

## Entwicklung starten

```bash
npm install
npm run dev
```

Die Website ist danach normalerweise unter `http://localhost:3000` erreichbar.

## Fahrzeugbilder

Die Beispielbilder kommen aktuell von Unsplash. Für echte Fahrzeuge einfach die Bild-URLs in `src/data/vehicles.ts` ersetzen oder später lokale Bilder im `public`-Ordner verwenden.
