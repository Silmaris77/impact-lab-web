export type ProgramModule = {
  title: string;
  description: string;
  audience?: string;
  method?: string;
  duration?: string;
  group?: string;
  outcome?: string;
  benefits?: string[];
  topics?: string[];
};

export type DevelopmentProgram = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  introduction: string;
  topicIds: string[];
  signals: string[];
  goals: string[];
  stages: { id: string; title: string; description: string; modules: ProgramModule[] }[];
};

export const programHref = (slug: string) => `/programy/${slug}/`;

/** Materiały Patrycji: Impact Lab oferta ogólnaver1.0, slajdy 10–16. */
export const ownershipProgram: DevelopmentProgram = {
  slug: 'kultura-odpowiedzialnosci',
  title: 'Kultura odpowiedzialności',
  subtitle: 'Od diagnozy blokad do odpowiedzialności w codziennej pracy.',
  summary: 'Pomagamy liderom i zespołom budować inicjatywę, samodzielność i odpowiedzialność za wspólny wynik.',
  introduction: 'Odpowiedzialność zależy od zachowań ludzi, sposobu zarządzania i warunków, jakie tworzy organizacja. Rozpoznajemy blokady, wspólnie projektujemy standardy pracy i wspieramy przełożenie ich na codzienne działania.',
  topicIds: ['przywodztwo', 'zmiana', 'wspolpraca'],
  signals: [
    'Cele są coraz słabiej realizowane, a zadania wymagają ciągłego monitorowania.',
    'Pracownicy rzadko wychodzą z inicjatywą i unikają podejmowania decyzji.',
    'Zespoły koncentrują się na swoim fragmencie zadania, tracąc z oczu efekt końcowy.',
    'Pojawiają się trudności z zaangażowaniem, absencją lub rotacją.',
    'Problemy są zgłaszane częściej niż propozycje rozwiązań.',
  ],
  goals: [
    'Zrozumienie organizacyjnych i liderskich blokad odpowiedzialności.',
    'Wspólne standardy działania oraz jasne role i oczekiwania.',
    'Rozwój inicjatywy, samodzielności i odpowiedzialności za rezultat.',
    'Praktyki wspierające współpracę, feedback i uczenie się z doświadczeń.',
  ],
  stages: [
    { id: 'diagnoza', title: 'Diagnoza', description: 'Zaczynamy od zrozumienia, co pomaga brać odpowiedzialność, a co ją blokuje. Dwa podejścia diagnostyczne można łączyć i skalować.', modules: [
      { title: 'Ownership DNA', description: 'Diagnoza blokad odpowiedzialności w organizacji. Sprawdzamy zarówno zachowania ludzi, jak i warunki, które wpływają na ich decyzje. Identyfikujemy bariery systemowe, środowiskowe, kompetencyjne i motywacyjne.', audience: 'Zespoły powyżej 6 osób, działy i całe organizacje; pracownicy oraz liderzy.', method: 'Badanie kwestionariuszowe oraz wywiad pogłębiony.', outcome: 'Raport Ownership DNA z analizą blokad odpowiedzialności.' },
      { title: 'Lead with Ownership', description: 'Diagnoza kompetencji lidera ważnych dla budowania kultury odpowiedzialności: bezpieczeństwa psychologicznego, komunikacji włączającej, feedbacku, oddawania odpowiedzialności oraz nadawania sensu i celu.', audience: 'Menedżerowie, liderzy i sukcesorzy.', method: 'Badanie kwestionariuszowe 180°, wywiad z pracownikami i obserwacja w sytuacjach zawodowych.', outcome: 'Indywidualny i grupowy raport Lead with Ownership.' },
    ] },
    { id: 'warsztaty', title: 'Warsztaty', description: 'Facylitujemy pracę, w której zespół wypracowuje własne rozwiązania i standardy działania.', modules: [
      { title: 'Ownership Playbook', description: 'Wypracowanie wspólnych standardów pracy odpowiedzialnej i modelu działania zespołu.', audience: 'Cały zespół lub wybrani pracownicy.', method: 'Warsztat z ćwiczeniami i analizą przypadków.', duration: '1 dzień (7–8 godzin) lub 2 spotkania po pół dnia.', group: '5–8 osób', outcome: 'Standardy pracy zespołu i plan wdrożenia na pierwsze 30 dni.', topics: ['Jak rozumiemy odpowiedzialność i jakie zachowania ją budują', 'Rytm odpowiedzialnej pracy: od celu do ewaluacji zadania', 'Zasady pracy w obszarach pomiędzy odpowiedzialnościami', 'Działanie i komunikacja w sytuacji problematycznej', 'Język feedbacku wokół odpowiedzialności'] },
      { title: 'Ownership Leadership Lab', description: 'Wypracowanie standardów budowania kultury odpowiedzialności przez liderów, z uwzględnieniem barier systemowych i współpracy między zespołami.', audience: 'Liderzy, sukcesorzy i osoby o wysokim potencjale.', method: 'Warsztat z ćwiczeniami i analizą przypadków.', duration: '1 dzień (7–8 godzin) lub 2 spotkania po pół dnia.', group: '5–8 osób', outcome: 'Usprawnienia liderskie i systemowe oraz plan wdrożenia na pierwsze 30 dni.', topics: ['Mapa miejsc, w których znika odpowiedzialność', 'Blokady kompetencyjne i systemowe', 'Projektowanie rozwiązań i zmiana wokół lidera', 'Współpraca liderów w budowaniu kultury odpowiedzialności'] },
    ] },
    { id: 'szkolenia', title: 'Szkolenia', description: 'Rozwijamy kompetencje liderów i pracowników, odnosząc je do realnych sytuacji w ich pracy.', modules: [
      { title: 'Lider Kultury Odpowiedzialności', description: 'Szkolenie dla osób, które chcą skuteczniej budować zaangażowanie i odpowiedzialność w swoich zespołach.', audience: 'Menedżerowie liniowi i średniego szczebla, liderzy, dyrektorzy HR i HRBP.', duration: '2 dni', group: 'Do 12 osób', benefits: ['Rozpoznawanie przyczyn braku odpowiedzialności w zespole', 'Budowanie bezpieczeństwa psychologicznego', 'Prowadzenie rozmów i feedbacku wspierających zmianę zachowania', 'Plan działania dla własnego zespołu'], topics: ['Osobisty, relacyjny i systemowy poziom odpowiedzialności', 'Psychologia zaangażowania i inicjatywy', 'Bezpieczeństwo psychologiczne i wpływ stylu lidera', 'Jasne oczekiwania oraz rozmowy o odpowiedzialności', 'Feedback korygujący i rozwojowy w praktyce', 'Pułapki liderskie: mikrozarządzanie, wyręczanie i unikanie problemów'] },
      { title: 'Od wykonawstwa do odpowiedzialności', description: 'Szkolenie rozwijające samodzielność, inicjatywę i myślenie o rezultacie własnych działań.', audience: 'Specjaliści, eksperci, osoby współpracujące między działami oraz zespoły realizujące inicjatywy i wdrożenia.', duration: '2 dni', group: 'Do 12 osób', benefits: ['Lepsze rozumienie wpływu własnych działań', 'Identyfikowanie usprawnień i proponowanie rozwiązań', 'Uczenie się z sukcesów i błędów', 'Rozwój współpracy i odpowiedzialności za wspólny wynik'], topics: ['Współodpowiedzialność i postawa właścicielska', 'Inicjatywa, myślenie procesowe i analiza potrzeb biznesowych', 'Przedstawianie inicjatyw w organizacji', 'Odpowiedzialność za rezultat, komunikacja i reagowanie na problemy', 'Rozliczanie inicjatyw z perspektywy celów i aktywności', 'Retrospektywa, feedback i nowe nawyki pracy zespołowej'] },
    ] },
    { id: 'wdrozenie', title: 'Wdrożenie', description: 'Wspieramy utrwalanie nowych zachowań w rzeczywistych zadaniach, także pod presją czasu i w trudnych sytuacjach.', modules: [
      { title: 'Wsparcie wdrożeniowe', description: 'Planowanie i wspieranie zmian w sposobie pracy pracowników, menedżerów i zespołów.', topics: ['Plan wdrożeniowy z celami i wskaźnikami dopasowanymi do projektu', 'Sesje warsztatowe dla menedżerów: mikrozmiany w realnej pracy', 'Zadania wdrożeniowe i eksperymenty behawioralne', 'Rytuały zespołowe i follow-up wdrożeniowy'] },
      { title: 'Training on the job', description: 'Konsultant towarzyszy pracownikom i menedżerom podczas realnych działań. Pomaga wdrażać nowe zachowania oraz rozwijać samodzielność i odpowiedzialność w praktyce.', method: 'Konsultacje 1:1 oparte na obserwacji, pytaniach rozwojowych, pracy ze sposobem myślenia i feedbacku.' },
    ] },
  ],
};

/** Materiały Patrycji: slajdy 17–20. Czas warsztatu ustalany w harmonogramie. */
export const frisProgram: DevelopmentProgram = {
  slug: 'sila-roznorodnosci-fris',
  title: 'Siła różnorodności z FRIS®',
  subtitle: 'Poznawcze style współpracy i podejmowania decyzji w zespole.',
  summary: 'Pomagamy zespołom lepiej wykorzystywać różne style myślenia, sprawniej się komunikować i podejmować wspólne decyzje.',
  introduction: 'Różne sposoby myślenia i działania mogą wzbogacać zespół, ale wymagają wspólnego języka i świadomej współpracy. Łączymy diagnozę FRIS®, indywidualną refleksję i pracę warsztatową nad rzeczywistymi wyzwaniami zespołu.',
  topicIds: ['wspolpraca', 'przywodztwo'],
  signals: ['Potencjał części osób pozostaje niewykorzystany.', 'Różne tempo i sposoby pracy utrudniają komunikację i angażowanie zespołu.', 'Spotkania się przedłużają, a wspólne decyzje przychodzą z trudem.', 'Różnice prowadzą do nieporozumień, wycofania lub eskalacji konfliktów.', 'Zespół ma trudności z realizacją wspólnych zadań i wdrażaniem zmian.'],
  goals: ['Lepsze rozumienie własnych mocnych stron i sposobu działania innych osób.', 'Wspólny język komunikacji uwzględniający różnice poznawcze.', 'Świadome planowanie współpracy i podejmowania decyzji.', 'Lepsze wykorzystanie potencjału zespołu oraz praca nad napięciami i konfliktami.'],
  stages: [
    { id: 'diagnoza-potrzeb', title: 'Diagnoza potrzeb', description: 'Poznajemy specyfikę zespołu, aby dopasować program do jego rzeczywistych potrzeb i dynamiki współpracy.', modules: [
      { title: 'Kontekst zespołu', description: 'Rozpoznanie wyzwań współpracy i oczekiwań wobec programu.', method: 'Wywiady ustrukturyzowane z wybranymi uczestnikami; opcjonalnie ankieta diagnostyczna.', outcome: 'Zakres programu dopasowany do wyzwań zespołu.' },
    ] },
    { id: 'kick-off', title: 'Spotkanie otwierające', description: 'Budujemy wspólne rozumienie celu i przygotowujemy uczestników do procesu.', modules: [
      { title: 'Kick-off', description: 'Przedstawienie założeń, omówienie harmonogramu i przygotowanie do diagnozy FRIS®.', method: 'Spotkanie online.', duration: 'Około 30–45 minut', outcome: 'Jasny cel, harmonogram i zasady udziału w programie.' },
    ] },
    { id: 'kwestionariusz', title: 'Kwestionariusz i raporty', description: 'Indywidualna diagnoza staje się punktem wyjścia do refleksji nad współpracą.', modules: [
      { title: 'Diagnoza FRIS®', description: 'Uczestnicy indywidualnie wypełniają kwestionariusz online.', outcome: 'Indywidualne raporty FRIS®; opcjonalnie raport zespołowy.' },
    ] },
    { id: 'konsultacje', title: 'Konsultacje indywidualne', description: 'Pomagamy przełożyć wyniki diagnozy na konkretne sytuacje zawodowe.', modules: [
      { title: 'Omówienie wyników FRIS®', description: 'Analiza własnego stylu myślenia i działania oraz jego wpływu na współpracę i zarządzanie zespołem.', method: 'Indywidualne sesje feedbackowe online.', duration: '60 minut na osobę', outcome: 'Pogłębione rozumienie własnego stylu oraz indywidualne pomysły na zastosowanie wniosków w pracy.' },
    ] },
    { id: 'warsztat', title: 'Warsztat zespołowy', description: 'Pracujemy nad poznawczymi stylami współpracy i podejmowania decyzji. Szczegółowy harmonogram konsultacji i warsztatu ustalamy na podstawie diagnozy potrzeb.', modules: [
      { title: 'Siła różnorodności', description: 'Praca nad wspólnym językiem współpracy i wykorzystaniem potencjału zespołu.', audience: 'Zespoły eksperckie, sprzedażowe i menedżerskie; osoby współpracujące między obszarami oraz pracownicy chcący lepiej wykorzystywać swój potencjał.', group: 'Do 12 osób', benefits: ['Świadomość mocnych stron i sposobów korzystania z własnego potencjału', 'Rozumienie zachowań innych i wpływu różnic na współpracę', 'Rozwijanie komunikacji i planowania zadań zespołowych', 'Budowanie kultury współpracy, odpowiedzialności i wymiany wiedzy'], topics: ['Różnorodność stylów poznawczych i stylów działania', 'Mocne strony i ryzyka przy podejmowaniu decyzji', 'Symulacja sytuacji zespołowej: mechanizmy nieporozumień i konfliktów', 'Wspólny język współpracy uwzględniający różnice poznawcze', 'Bariery współpracy', 'Wykorzystanie raportu zespołowego, jeśli jest częścią programu'] },
    ] },
  ],
};

export const developmentPrograms = [ownershipProgram, frisProgram];
