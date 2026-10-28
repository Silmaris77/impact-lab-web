# Kontrola jakości Impact Lab

28.10.2026 — lokalny przegląd wyglądu, treści i działania.

## Wykonane poprawki

- Powiększone i ujednolicone przyciski; okrągłe odnośniki kart mają 44 × 44 px.
- Mobilne nagłówki kart znajdują się poniżej zdjęć. Na tabletach karty mają pojedynczą kolumnę, aby dłuższe nazwy usług nie nachodziły na fotografie.
- Menu obsługuje Enter, Tab i Escape, zamyka się po opuszczeniu klawiaturą, kliknięciu poza nim i zmianie na układ desktopowy.
- Ponowne kliknięcie tej samej kotwicy otwiera opis nawet po jego ręcznym zamknięciu. Nieprawidłowo zakodowany fragment URL nie powoduje błędu komponentu.
- Link pomijający nawigację jest widoczny przy obsłudze klawiaturą; treść główna przyjmuje fokus.
- Mniej powtórzeń w sekcji założycielki. Kontakt opisuje rzeczywistą akcję „Napisz do nas”, bez sugerowania rezerwacji terminu.

## Sprawdzenia

- Szerokości 320, 390, 768, 1024 i 1440 px: brak poziomego przewijania i wychodzących nagłówków w kontrolowanych elementach.
- Menu: otwarcie Enterem, przejście Tabem do pierwszego odnośnika, zamknięcie Escape i powrót fokusu do przycisku.
- Rozwijana oferta: obsługa Enterem, zamknięcie i ponowne otwarcie linkiem do tej samej kotwicy.
- Wszystkie lokalne kotwice mają cel, obrazy mają atrybut alt, strona zawiera jeden nagłówek h1.
- Wyliczone kontrasty: biały tekst / #DC0064 = 4,97:1; biały / #C9005C = 5,77:1; tekst #454057 / biały = 9,89:1; podpis #62586F / #F4F2FA = 6,02:1; stopka #D1C9DB / #10111B = 11,71:1.

To ograniczony przegląd implementacji i ręczne sprawdzenia przeglądarkowe, nie pełny audyt zgodności WCAG ani badanie z użytkownikami czytników ekranu.

## Do kolejnej decyzji

- Akceptacja redakcji treści w CONTENT_REVIEW.md.
- Ewentualne docelowe fotografie usług i banera kontaktowego.
- Formularz, polityka prywatności oraz publiczne metadane i domena przed publikacją.
- Aktualnie nie ma publikacji, zewnętrznej analityki ani formularza wysyłającego dane.
