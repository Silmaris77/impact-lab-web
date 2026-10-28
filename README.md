# Impact Lab — iteracja 1

Lokalna strona główna: Next.js App Router, TypeScript, Tailwind CSS, Lucide i lokalny Manrope (polskie znaki). Bez CMS, formularza i publikacji.

## Uruchomienie

```powershell
npm install
npm run dev
```

Podgląd: http://127.0.0.1:3000

```powershell
npm run lint
npm run build
npm start
```

## Struktura

- `app/`: strona, metadane i globalne tokeny oraz style responsywne.
- `components/header.tsx`: nawigacja desktop/mobile, klawiatura i Escape.
- `components/hero.tsx`: kompozycja hero i CTA do istniejących sekcji.
- `components/orbital-art.tsx`: niezależny SVG, gradienty sfer, orbity i głębia.
- `components/section-scaffolds.tsx`: szkielety sekcji do kolejnej iteracji.
- `lib/content.ts`: treści hero i nawigacji.
- `public/`: miejsce na oryginalne zasoby marki.

## Materiały do dostarczenia

Oryginalne logo na jasnym tle, oryginalny portret Patrycji, brief `impact_Lab_www.docx`, portfolio PPTX (zwłaszcza slajd 7), zdjęcia usługowe wraz z prawami do wykorzystania, zatwierdzone treści i dane kontaktowe. Logo i portret mają jawnie oznaczone miejsca. Brak fikcyjnych statystyk, referencji i cytatów.

Referencja estetyczna nie jest źródłem danych. Pozostałe sekcje są celowo szkieletowe. Metadane blokują indeksowanie wersji roboczej. Wymaga to zmiany przed przyszłą publikacją.
