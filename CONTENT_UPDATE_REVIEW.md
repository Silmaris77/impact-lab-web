# Wdrożenie treści Patrycji — 6 listopada 2026

Zakres pierwszego pakietu z planu: treści strony głównej, menu szkoleń i cztery obszary oferty. Podstrony rozbudowanych programów pozostają na kolejny etap. Bez publikacji.

## Wdrożone

- „O firmie” w miejscu „Ludzie Impact Lab”, tekst ze slajdu 3, nowy cytat, rozwinięcie firmy oraz osobna biografia Patrycji. Zachowane zdjęcie i kotwice.
- „Firma w liczbach”: 18+ lat doświadczenia zawodowego, 100+ projektów i różnych wyzwań, 30+ marek, trzy branże. Podpis wyjaśnia, że są to doświadczenia, na których opiera się marka, a nie deklaracja wieku spółki.
- „Dlaczego to działa?”: trzy wyróżniki ze slajdu 2. Proces współpracy nadal ma cztery etapy.
- Nagłówki trzech usług w szczegółach oferty; nowy nagłówek i opis Diagnozy z maila.
- Cztery tematy szkoleń ze slajdów 8–9, wspólne dane dla menu i paneli, odnośniki między tematami i kontakt.
- Menu na hover nad linkiem „Szkolenia”, przycisk rozwijania, klawiatura i wersja dotykowa. Escape najpierw zamyka podmenu, następnie menu mobilne, z powrotem fokusu.
- Linki tematów otwierają jeden panel, przewijają i ustawiają fokus. Obsługa ponownego wyboru tego samego hasha, odświeżenia i historii.
- Oryginalne logo z claimem osadzone w prezentacji wykorzystane w stopce bez retuszu. Znak w nagłówku bez zmian.
- Przycisk hero „Porozmawiajmy” prowadzi do kontaktu.

## Materiały i decyzje redakcyjne

- Slajd 6 opisuje filary; ich teksty są w szczegółach usług. W ten sposób nie powtarzamy trzech usług w „Dlaczego to działa?”.
- Brak nowej wersji Worda; wykorzystano prezentację, mail i wcześniejszy dokument.
- Nie publikowano procentów zewnętrznych badań, prognoz, list klientów ani certyfikatów wymagających uściślenia.
- Nie dodano sekcji „Zaufali nam” ani automatycznej karuzeli.
- Dane firmowe ze slajdu 2 wymagają ostatecznej oceny Patrycji w kontekście przypisania projektów i marek. Są pokazane z kwalifikacją doświadczenia, bez deklaracji wyników klientów.
- Przed kolejnym etapem doprecyzować kolejność konsultacji i szkolenia FRIS oraz zapis czasu „1/2 dni”.

## Kontrola

- Lint i kompilacja z TypeScriptem.
- Eksport statyczny dla `/impact-lab-web/` i kontrola lokalnych zasobów.
- Testy przeglądarkowe czterech tematów, wejścia przez hash, odświeżenia, Wstecz, zamykania menu i obsługi Enter/Tab/Escape.
- Kontrola szerokości 320, 375, 768, 1024, 1280 i 1440 px: brak poziomego przewijania i uciętych nagłówków/przycisków.
- Pierwszy widok: całe zdjęcie Patrycji na 320×568 i 375×667; cała sekcja firmy na laptopach 1280×620 i 1440×800.
- Wszystkie odnośniki do sekcji mają istniejące cele; obrazy w podglądzie ładują się poprawnie.

## Uzupełnienie doświadczenia na wyraźne zlecenie użytkownika

Dodano cały przekazany zestaw ze slajdu 5: 6 ważnych projektów, 26 nazw firm w trzech branżach i 7 pozycji certyfikatów. Dane są w rozwijanej części `#patrycja`, przypisane do doświadczenia zawodowego Patrycji. Poprawiono oczywiste literówki w nazwach Dimensions i Professional Scrum Master oraz odstępy; nie dodawano poziomów certyfikatów ani nowych uprawnień. Trzy kolumny na desktopie, jedna na telefonie. Lint, build Pages i kontrola responsywności przeszły poprawnie.
