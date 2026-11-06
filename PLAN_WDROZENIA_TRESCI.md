# Plan wdrożenia nowych treści Impact Lab

Data: 6 listopada 2026. Status: propozycja do oceny, bez zmian w działającej stronie i bez publikacji.

## 1. Źródła i pierwszeństwo treści

- Mail Patrycji przekazany w rozmowie określa zamierzone zmiany.
- „Impact Lab oferta ogólnaver1.0.pptx”: 20 slajdów, nowe treści oferty, programy oraz logo z claimem.
- „impact_Lab_www.docx”: dostępna wcześniejsza wersja dokumentu z 28 października, zawiera pozostałe nagłówki. Nie zakładamy, że to nowy załącznik wspomniany w mailu.
- Aktualna strona: zachowujemy architekturę Next.js, działającą nawigację, obsługę sekcji oferty, kolory przycisków, zdjęcie i kompaktowy pierwszy ekran.

Rozbieżności do rozstrzygnięcia na poziomie treści:

| Wskazanie w mailu | Zawartość otrzymanej prezentacji | Postępowanie |
| --- | --- | --- |
| „Dlaczego to działa”, slajd 5 | Slajd 5: projekty, klienci, certyfikaty. Slajd 6: „Dlaczego to działa?” | Dla tej sekcji przyjąć roboczo slajd 6, wskazać różnicę przed finalizacją tekstów. |
| Firma w liczbach, slajd 2 | Dane na slajdach 2 i 4, wraz z opisem podejścia | Wykorzystać jeden zestaw danych. |
| O firmie, slajd 3 | Tekst firmy i cytat Patrycji; cytat występuje dwukrotnie | Użyć jednego cytatu. |
| Pozostałe nagłówki w Wordzie | Dostępny wcześniejszy Word; nowe nagłówki również na slajdzie 6 | Nowy opis Diagnozy z maila ma pierwszeństwo. Dla pozostałych filarów użyć zgodnych nagłówków z prezentacji i Worda. |

## 2. Docelowa kolejność strony głównej

1. Nawigacja z rozwijanym menu szkoleń.
2. Obecne kompaktowe hero: pozostaje bez grafiki, z wyśrodkowanym tekstem.
3. „O firmie”: obecny blok Patrycji z treścią firmy ze slajdu 3, oryginalnym zdjęciem i nowym cytatem.
4. „Firma w liczbach”: zastępuje obecny pasek „Od 2008”, w tym samym miejscu pod blokiem firmy.
5. „Trzy filary”: główny wybór obszaru oferty, bez przywracania usuniętych ikon.
6. Kontekstowe szczegóły wybranej usługi lub tematu.
7. „Dlaczego to działa?”: dopracowane uzasadnienie podejścia, bez powtarzania całej listy usług.
8. „Jak wygląda współpraca?”: zachowane cztery etapy realizacji.
9. Kontakt i stopka.

Szczegółowe programy powinny mieć osobne statyczne podstrony. Ich obszerna zawartość nie powinna wydłużać strony głównej o kilkanaście ekranów.

## 3. Menu „Szkolenia” i przejście do szczegółów

Menu pierwszego poziomu:

- Wszystkie szkolenia → `#oferta-szkolenia`.
- Sprzedaż i relacje z klientami → `#szkolenia-sprzedaz`.
- Przywództwo i zarządzanie → `#szkolenia-przywodztwo`.
- Zmiana i innowacje → `#szkolenia-zmiana`.
- Współpraca → `#szkolenia-wspolpraca`.

To cztery obszary ze slajdów 7–9. Nie umieszczać w menu wszystkich punktów programów i nazw metod. Szczegółowe programy pokazać jako odnośniki wewnątrz odpowiedniego obszaru.

Zachowanie:

- Desktop: menu otwiera się po najechaniu oraz przyciskiem ze strzałką. Sam link „Szkolenia” nadal otwiera ogólną ofertę.
- Klawiatura: Tab do linku i przycisku, Enter/Spacja otwierają listę, Escape ją zamyka. Stan widoczny przez `aria-expanded` i `aria-controls`.
- Telefon: rozwijana grupa w obecnym menu mobilnym, otwierana dotknięciem.
- Wybór tematu zamyka nawigację, otwiera właściwy panel, przewija do jego nagłówka i przenosi tam fokus.
- Link z hashem działa po wklejeniu do przeglądarki, odświeżeniu i przez Wstecz/Dalej.
- Ponowne kliknięcie aktualnego tematu ponownie przewija do niego, także gdy hash się nie zmienił.
- Zachować dotychczasowe adresy `#oferta-szkolenia`, `#oferta-diagnoza`, `#oferta-projektowanie`.

## 4. Szczegóły czterech obszarów szkoleń

Każdy temat otrzymuje ten sam szablon: nazwa, mocny nagłówek, krótki opis wyzwania, podejście Impact Lab, przykładowe zakresy oraz przycisk kontaktu.

| Temat | Nagłówek | Źródło |
| --- | --- | --- |
| Sprzedaż i relacje z klientami | „Klient nie potrzebuje kolejnej oferty. Potrzebuje powodu, by wybrać właśnie Ciebie.” | Slajd 8 |
| Przywództwo i zarządzanie | „Zespół nie osiągnie więcej, niż pozwala mu sposób zarządzania.” | Slajd 8 |
| Zmiana i innowacje | „Innowacja to nie pomysł. To zmiana, którą udaje się wdrożyć.” | Slajd 9 |
| Współpraca | „Współpraca nie dzieje się sama. Trzeba ją zaprojektować.” | Slajd 9 |

Długie akapity skrócić redakcyjnie bez zmiany sensu. Listy zakresów pozostawić w rozwinięciu. Nie wymyślać czasu trwania, cen i liczby uczestników dla ogólnych obszarów, gdy źródło ich nie podaje.

## 5. O firmie, liczby i logo

„O firmie”:

- Zmienić etykietę „Ludzie Impact Lab” na „O firmie” i odpowiednio nazwać pozycję „O nas” w menu.
- Nagłówek ze slajdu 3: „Rozumiemy złożoność. Znajdujemy rozwiązania. Działamy konkretnie.”
- Wprowadzenie oprzeć na systemowym spojrzeniu na organizację i wspieraniu ambitnych zmian.
- Cytat: „Nie wiem czy to możliwe, ale mnie to nie ogranicza”, podpisany Patrycją.
- Przycisk „Poznaj nas” otwiera rozwinięcie opisu firmy; biografię Patrycji zachować jako osobny, jasno nazwany fragment.
- Zachować dotychczasowe `#o-nas` i `#patrycja` oraz pełny kadr zdjęcia.
- Dłuższy nowy nagłówek wymaga ponownego sprawdzenia pierwszego ekranu laptopa i telefonu. Na głównej pokazać skrót, resztę w rozwinięciu.

„Firma w liczbach”, źródło: slajd 2:

- 18+ lat — doświadczenie biznesowe z różnych perspektyw.
- 100+ — projektów i różnych wyzwań.
- 30+ — marek.
- 3 wiodące branże — finanse, retail, inżynieria.

To liczby dostarczone przez Patrycję. Przed finalizacją ustalić, czy opisują doświadczenie zespołu/założycielki, czy działalność samej marki. Nie sugerować, że Impact Lab jako firma istnieje od 18 lat, jeśli chodzi o doświadczenie zawodowe. Nie dodawać nowych wskaźników.

Logo z prezentacji zawiera claim „Szkolenia, od których zaczyna się więcej”. Jest dostępne jako osadzony obraz na slajdzie 1. Zachować oryginalny znak. Pełny wariant z claimem proponuję do stopki i szerszych miejsc, a w wąskiej nawigacji zachować czytelny obecny wariant. Do finalnego użycia warto uzyskać źródłowy plik SVG lub PNG z przezroczystością; nie odtwarzać claimu wewnątrz znaku na oko.

## 6. „Dlaczego to działa?” i nagłówki filarów

Mail wskazuje zmianę tej sekcji, ale slajd 6 opisuje przede wszystkim trzy usługi, a nie obecne cztery metody pracy. Nie powielać obok siebie dwóch pełnych prezentacji filarów.

Rekomendowany podział:

- Nagłówki i opisy trzech usług ze slajdu 6 wykorzystać w szczegółach oferty oraz ewentualnej karuzeli filarów.
- „Dlaczego to działa?” oprzeć na trzech wyróżnikach ze slajdu 2: „Myślimy strategicznie i odważnie”, „Szybko łączymy kropki”, „Uruchamiamy potencjał”.
- Diagnozę, konsultacje, warsztaty i wdrożenia opisać jako metody dobierane do projektu, zamiast ponownie tworzyć dużą listę usług.
- Zachować niezależny czteroetapowy proces współpracy. Etapy realizacji i formaty pracy pełnią różne role.

Dla Diagnozy zastosować dokładnie nowy kierunek z maila:

„Najpierw fakty. Potem decyzje. Bo decyzje bez danych to hazard”.

Opis: „Nie wszystko, co wymaga działania, jest widoczne na pierwszy rzut oka. Diagnoza pomaga odkryć to, czego organizacja jeszcze o sobie nie wie, i zamienić intuicję w świadome decyzje rozwojowe”.

Jeśli powstanie karuzela, powinna mieć ręczne sterowanie, widoczne nazwy filarów i brak automatycznego przełączania. Nie zastępować obecnego zwartego hero rozbudowanym sliderem bez osobnej decyzji wizualnej.

## 7. Rozbudowane programy — kolejny etap

| Strona programu | Zakres | Źródło |
| --- | --- | --- |
| Kultura odpowiedzialności | Wyzwania, diagnoza Ownership DNA i Lead with Ownership, warsztaty, szkolenia i wdrożenie | Slajdy 10–16 |
| Lider Kultury Odpowiedzialności | Odbiorcy, cele, program, 2 dni, do 12 osób | Slajd 14 |
| Od wykonawstwa do odpowiedzialności | Odbiorcy, cele, program, 2 dni, do 12 osób | Slajd 15 |
| Siła różnorodności FRIS® | Diagnoza potrzeb, kick-off, kwestionariusz, konsultacje indywidualne i szkolenie | Slajdy 17–20 |

Programy powiązać z obszarami „Przywództwo”, „Zmiana” i „Współpraca”. Jedna strona programu może być dostępna z kilku obszarów, bez kopiowania jej treści.

Przed publikacją FRIS uzgodnić kolejność konsultacji i szkolenia: slajd 18 pokazuje konsultacje przed szkoleniem, a slajd 19 numeruje je odwrotnie. Zapis czasu szkolenia „1/2 dni” doprecyzować, zamiast interpretować go samodzielnie jako pół dnia lub 1–2 dni.

## 8. Redakcja i dane wymagające sprawdzenia

- Usunąć literówki, brakujące spacje i powtórzenia powstałe w prezentacji; ujednolicić zapis nazw programów i FRIS®.
- Procenty 70% i 62%, przewidywania o najbliższych 2–3 latach oraz twierdzenia o wynikach zespołów wymagają konkretnego źródła i daty. Do czasu weryfikacji korzystać z opisów jakościowych. Nie są to wskaźniki wyników Impact Lab.
- Slajd 5 traktować jako materiał do doświadczenia i projektów. Nie tworzyć sekcji „Zaufali nam”. Nie przypisywać klientów byłych pracodawców automatycznie do marki Impact Lab.
- Nazwy certyfikatów sprawdzić przed użyciem; nie publikować odręcznie poprawionych nazw jako oficjalnych bez potwierdzenia.

## 9. Kolejność implementacji i odbiór

Etap A: porządek w treści. Przygotować dane firmy, statystyki, cztery obszary szkoleń i nagłówki filarów w jednym źródle danych. Rozstrzygnąć wskazane rozbieżności.

Etap B: strona główna. Zaktualizować blok firmy, cytat, liczby, „Dlaczego to działa?” i opisy usług. Zachować ostatnio dopracowane proporcje, brak ikon i szare przyciski z dotychczasowym hoverem.

Etap C: menu i szczegóły. Rozszerzyć obecne komponenty o podmenu i cztery panele tematów. Współdzielić dane menu i paneli, żeby nazwy i linki były zawsze zgodne.

Etap D: strony programów. Zbudować wspólny szablon dla dłuższych opisów. Wygenerować podstrony statycznie z zachowaniem `/impact-lab-web/` i zgodności z GitHub Pages.

Etap E: ocena i testy. Lint, kompilacja, kontrola eksportu Pages, ścieżek obrazów oraz linków. Test klawiatury, dotyku, zamykania menu i ponownego kliknięcia tego samego tematu. Sprawdzić bezpośrednie adresy, odświeżenie i historię. Porównać pierwszy widok na laptopie i telefonie oraz czytelność długich treści.

Pierwszy pakiet do oceny: etapy A–C. Szczegółowe programy po ocenie struktury. Publikacja pozostaje osobnym krokiem po zgodzie użytkownika.
