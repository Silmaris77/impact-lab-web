/** Oferta Patrycji: prezentacja Impact Lab oferta ogólnaver1.0, slajdy 8–9. */
export const trainingTopics = [
  {
    id: 'sprzedaz', title: 'Sprzedaż i relacje z klientami',
    headline: 'Klient nie potrzebuje kolejnej oferty. Potrzebuje powodu, by wybrać właśnie Ciebie.',
    description: 'Klienci są dziś lepiej przygotowani do rozmów handlowych niż kiedykolwiek wcześniej. Skuteczna sprzedaż wymaga zrozumienia ich perspektywy i pokazania wartości, która ma znaczenie dla ich biznesu.',
    approach: 'Rozwijamy kompetencje zespołów i projektujemy procesy sprzedażowe, dzięki którym organizacja w sposób powtarzalny dostarcza klientom realną wartość. Łączymy pracę nad umiejętnościami z usprawnianiem sposobu działania.',
    examples: ['Standaryzacja procesów sprzedaży', 'Wzmacnianie efektywności menedżerów sprzedaży', 'Procesy zorientowane wokół klienta', 'Rozmowy handlowe, negocjacje i prezentowanie wartości', 'Prezentacje i wystąpienia publiczne'],
  },
  {
    id: 'przywodztwo', title: 'Przywództwo i zarządzanie',
    headline: 'Zespół nie osiągnie więcej, niż pozwala mu sposób zarządzania.',
    description: 'Awans na stanowisko liderskie oznacza nowe wyzwania: budowanie zaangażowania, odpowiedzialności i efektywnej współpracy. Wiedza ekspercka potrzebuje uzupełnienia o umiejętność pracy z ludźmi.',
    approach: 'Rozwijamy przywództwo oparte na dobrych praktykach zarządzania, świadomości własnego wpływu, elastyczności i skuteczności. Dobieramy działania do sytuacji liderów i ich zespołów.',
    examples: ['Budowanie kultury odpowiedzialności i współpracy', 'Feedback, coaching menedżerski i rozmowy rozwojowe', 'Zarządzanie zmianą', 'Przywództwo sytuacyjne', 'Zarządzanie zespołem sprzedażowym', 'Akademia zarządzania'],
  },
  {
    id: 'zmiana', title: 'Zmiana i innowacje',
    headline: 'Innowacja to nie pomysł. To zmiana, którą udaje się wdrożyć.',
    description: 'Wiele organizacji wie, że musi się zmieniać. Wyzwanie pojawia się wtedy, gdy zmiana pozostaje decyzją kierownictwa, a pomysły kończą się na warsztatowych flipchartach.',
    approach: 'Pomagamy angażować ludzi w rozwiązywanie problemów i przekładanie pomysłów na codzienne działania. Rozwijamy kompetencje potrzebne do przeprowadzania zmian i budowania kultury, w której ludzie aktywnie współtworzą nową rzeczywistość.',
    examples: ['Kultura odpowiedzialności', 'Wdrażanie zmian w organizacji', 'Rozwiązywanie problemów i wdrażanie innowacji', 'Design Thinking', 'Facylitacja spotkań i procesów zespołowych', 'Wdrażanie produktów, usług i procesów'],
  },
  {
    id: 'wspolpraca', title: 'Współpraca',
    headline: 'Współpraca nie dzieje się sama. Trzeba ją zaprojektować.',
    description: 'Współpraca wymaga uzgadniania perspektyw, podejmowania decyzji i radzenia sobie z różnicami. Potrzebuje jasnych zasad działania i kompetencji, które pozwalają ludziom skutecznie pracować razem.',
    approach: 'Pracujemy dwutorowo: projektujemy procesy, role i zasady współpracy oraz rozwijamy kompetencje ludzi. Pomagamy wykorzystywać różnorodność, rozwiązywać konflikty i budować odpowiedzialność za wspólny wynik.',
    examples: ['Modele współpracy w zespole i między działami', 'Współpraca ponad silosami: cele, role i odpowiedzialności', 'Odpowiedzialność za wspólny wynik', 'Różnorodność i model FRIS®', 'Komunikacja i zwinna współpraca', 'Teambuilding Program'],
  },
];

export const trainingHref = (id: string) => `#szkolenia-${id}`;
