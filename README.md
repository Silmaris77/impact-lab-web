# Impact Lab — podgląd lokalny

Next.js App Router, TypeScript, Tailwind CSS, Lucide i lokalny Manrope z polskimi znakami. Bez CMS, formularza i publikacji.

## Uruchomienie

```powershell
npm install
npm run dev
```

Tryb developerski: http://127.0.0.1:3000

```powershell
npm run lint
npm run build
npm start -- --port 3001
```

Podgląd produkcyjny: http://127.0.0.1:3001

Webpack jest wybrany jawnie z powodu błędu procesów pomocniczych Turbopack w lokalnym środowisku Windows.

## Struktura

- `app/`: strona, metadane, globalne tokeny i style responsywne.
- `components/header.tsx`: oryginalne logo, nawigacja desktop/mobile i Escape.
- `components/hero.tsx`: hero i CTA do sekcji.
- `components/orbital-art.tsx`: niezależny SVG, gradientowe sfery, światło i orbity.
- `components/section-scaffolds.tsx`: oferta, metodologia, doświadczenie, założycielka, kontakt i stopka.
- `components/anchor-details.tsx`: rozwijanie opisów po wejściu z kotwicy.
- `lib/content.ts`: treści hero i nawigacji.
- `public/`: dostarczone logo czarno-magentowe i portret Patrycji, bez zmian w plikach źródłowych.

## Źródła i pozostałe materiały

Wykorzystano brief źródłowy DOCX i portfolio PPTX, w tym metodologię ze slajdu 7. Kontakt, data rozpoczęcia działalności zawodowej i opis doświadczenia pochodzą z tych materiałów. Teksty kart są skróconą adaptacją źródeł. Nie przeniesiono fikcyjnych KPI ani cytatów z wizualizacji.

Karty usług wykorzystują zdjęcia ilustracyjne z Pexels. Źródła i autorzy: `public/images/SOURCES.md`. Nie przedstawiają realizacji ani zespołu Impact Lab. Nadal potrzebne jest zdjęcie do banera kontaktowego; obecnie baner pokazuje dane kontaktowe. Portret jest kadrowany wyłącznie przez CSS, bez modyfikacji twarzy. Metadane blokują indeksowanie wersji roboczej.


## Rozwinięcie oferty i ścieżka współpracy

- Treści trzech filarów i czterech kroków współpracy: `lib/services.ts`.
- Widok rozwinięć: `components/service-details.tsx`.
- Przykłady zakresów pochodzą z briefu DOCX, a projekty Patrycji z portfolio PPTX. Opisy są adaptacją redakcyjną do strony głównej. Cele współpracy nie są przedstawiane jako zmierzone rezultaty wcześniejszych projektów.
- Szczegóły oferty i proces współpracy znajdują się przed końcowym kontaktem.
