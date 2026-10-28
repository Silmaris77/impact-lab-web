# Publikacja Impact Lab na GitHub Pages

## Co jest przygotowane

- `npm run build:pages` generuje statyczną stronę w `out/` dla adresu https://silmaris77.github.io/impact-lab-web/.
- Prefiks `/impact-lab-web` jest dodawany do zasobów, także logo i zdjęć.
- W tym trybie obrazy są serwowane jako pliki, bez serwerowej usługi optymalizacji Next.js.
- Workflow `.github/workflows/pages.yml` publikuje `out/`. Uruchamia się wyłącznie ręcznie.
- Zwykłe `npm run dev` i `npm run build` zachowują lokalny adres bez prefiksu.

## Lokalna weryfikacja eksportu

```powershell
npm run build:pages
npm run check:pages
npm run preview:pages
```

Otwórz http://127.0.0.1:3002/impact-lab-web/.

Podgląd eksportu uruchamiaj skryptem `preview:pages`, nie `npm start`. `next start` służy do zwykłej kompilacji serwerowej, a nie do katalogu `out`.

## Kroki na GitHub

1. Wgraj wszystkie aktualne zmiany projektu do repozytorium `Silmaris77/impact-lab-web`, na jego domyślną gałąź `master`. Uwzględnij plik workflow, konfigurację Next.js, skrypty, komponenty, publiczne zasoby i package.json. Nie wgrywaj `node_modules`, `.next` ani `out`.
2. Wejdź w Settings → Pages → Build and deployment → Source i wybierz **GitHub Actions** zamiast publikowania bezpośrednio z gałęzi.
3. Wejdź w Actions → **Deploy Impact Lab to GitHub Pages** → **Run workflow**. Wybierz `master` i uruchom.
4. Zaczekaj, aż zadania `build` i `deploy` zakończą się powodzeniem.
5. Otwórz https://silmaris77.github.io/impact-lab-web/ i odśwież stronę. Powinna pojawić się aplikacja zamiast README.

Każdą następną wersję publikujesz po wgraniu kodu i ponownym ręcznym uruchomieniu workflow. Sam push nie wyzwala publikacji.

## Ograniczenia i późniejsza domena

GitHub Pages obsługuje wyłącznie pliki statyczne. Obecne kotwice, menu, rozwijane opisy i linki mailto/tel działają bez serwera. Formularz obsługiwany po stronie serwera wymagałby osobnej usługi.

Konfiguracja prefiksu jest przeznaczona dla tej konkretnej nazwy repozytorium. Własna domena wymaga zmiany prefiksu i ponownej kompilacji. Wersja robocza nadal zawiera `noindex` zgodnie z dotychczasowymi ustawieniami.

Przygotowanie plików lokalnie nie oznacza publikacji. Nie uruchomiono workflow i nie zmieniono ustawień repozytorium.
