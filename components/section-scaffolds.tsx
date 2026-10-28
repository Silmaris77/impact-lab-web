import { assetPath } from '@/lib/asset-path';
import Image from 'next/image';
import { ArrowRight, ChartNoAxesColumnIncreasing, Lightbulb, UsersRound, Search, MessagesSquare, Presentation, GraduationCap } from 'lucide-react';
import { navigation } from '@/lib/content';
import { ServiceDetails } from './service-details';

const pillars = [
  { id: 'szkolenia', title: 'Szkolenia', Icon: UsersRound, text: 'Rozwijamy kompetencje, które pomagają działać skuteczniej.', detail: 'Projektujemy rozwój wokół realnych wyzwań biznesu. Wzmacniamy kompetencje ludzi, zespołów i całych organizacji.', areas: 'Sprzedaż i relacje z klientami · Przywództwo i zarządzanie · Zmiana i innowacje · Współpraca' },
  { id: 'diagnoza', title: 'Diagnoza', Icon: ChartNoAxesColumnIncreasing, text: 'Najpierw fakty. Potem decyzje. Zaczynamy od przyczyn.', detail: 'Łączymy dane, obserwacje i perspektywy pracowników. Pomagamy zrozumieć organizację, zespoły i ludzi.', areas: 'Potencjał pracowników i zespołów · Badania pracowników · FRIS® · MTQ48 · Efektywność organizacji' },
  { id: 'projektowanie', title: 'Projektowanie rozwiązań', Icon: Lightbulb, text: 'Pomagamy zespołom tworzyć rozwiązania, które mają sens.', detail: 'Facylitujemy pracę zespołów, pomagając im przełamywać schematy i tworzyć odważne rozwiązania dopasowane do ich rzeczywistości.', areas: 'Modele i standardy pracy · Rozwiązania HR · Kultura odpowiedzialności · Innowacje · Zmiana' },
];
const methods = [
  { title: 'Diagnoza', Icon: Search, text: 'Decyzje bez danych to hazard. Najpierw rozumiemy, co naprawdę się dzieje.' },
  { title: 'Konsultacje i doradztwo', Icon: MessagesSquare, text: 'Doświadczenie to skrót, za który nie musisz płacić własnymi błędami.' },
  { title: 'Warsztaty', Icon: Presentation, text: 'Mądrość jest w zespole. Angażujemy ludzi w wypracowanie własnych rozwiązań.' },
  { title: 'Szkolenia', Icon: GraduationCap, text: 'Rozwój ma sens, gdy wiadomo, co zmieni. Przekładamy wiedzę na codzienne działanie.' },
];
const servicePhotos = [
  { src: '/images/szkolenia.jpg', alt: 'Zdjęcie ilustracyjne: warsztat przy tablicy z karteczkami' },
  { src: '/images/diagnoza.jpg', alt: 'Zdjęcie ilustracyjne: analiza dokumentów podczas spotkania biznesowego' },
  { src: '/images/projektowanie.jpg', alt: 'Zdjęcie ilustracyjne: praca nad pomysłami na tablicy warsztatowej' },
];

export function SectionScaffolds() {
  return <>
    <svg width="0" height="0" aria-hidden="true" className="photo-clip-defs"><defs><clipPath id="service-photo-clip" clipPathUnits="objectBoundingBox"><path d="M .1 0 H .88 Q 1 0 1 .14 V .86 Q 1 1 .86 1 H .42 C .25 1 .2 .92 .15 .79 L .025 .2 Q -.04 0 .1 0 Z"/></clipPath></defs></svg>
    <div className="scaffolds container">
      <section id="oferta" className="offer scaffold" aria-labelledby="offer-title">
        <div className="section-heading"><h2 id="offer-title">Trzy filary, jeden cel <span>— trwała zmiana.</span></h2><a className="button button-outline" href="#specjalizacje">Zobacz całą ofertę <ArrowRight size={16}/></a></div>
        <div className="pillar-grid">{pillars.map(({ id,title,Icon,text }, index) => <article id={id} key={id} className="pillar">
          <div className={`pillar-visual visual-${index}`}><Image src={assetPath(servicePhotos[index].src)} alt={servicePhotos[index].alt} fill sizes="(max-width: 600px) 55vw, (max-width: 900px) 18vw, 240px"/></div>
          <Icon className="pillar-icon" size={43} strokeWidth={1.3}/><h3>{title}</h3><span className="small-rule"/>
          <div className="pillar-bottom"><p>{text}</p><a href={`#oferta-${id}`} className="circle-link" aria-label={`Poznaj ofertę: ${title}`}><ArrowRight size={19}/></a></div>
        </article>)}</div>
      </section>
      <section id="jak-dzialamy" className="method-section scaffold" aria-labelledby="method-title">
        <div className="method-intro"><h2 id="method-title">Dlaczego <span className="accent">to działa?</span></h2><p>Najpierw poznajemy kontekst i potrzeby organizacji. Następnie dobieramy metody i projektujemy proces.</p><a href="#wspolpraca" className="button button-outline">Poznaj nasz sposób działania <ArrowRight size={16}/></a></div>
        <div className="methods">{methods.map(({title,Icon,text}) => <article key={title}><Icon size={43} strokeWidth={1.3}/><h3>{title}</h3><p>{text}</p><span className="method-dot"/></article>)}</div>
      </section>
      <section id="doswiadczenie" className="experience-strip scaffold" aria-label="Doświadczenie Impact Lab"><div><strong>Od 2008</strong><p>doświadczenie w rozwoju<br/>ludzi i organizacji</p></div><div><strong>Biznes od środka</strong><p>sprzedaż, obsługa klienta<br/>i rozwiązania HR</p></div><div><strong>Różne perspektywy</strong><p>finanse, farmacja, FMCG,<br/>przemysł i usługi</p></div><div><strong>Realne wyzwania</strong><p>przywództwo, współpraca,<br/>zmiana i innowacje</p></div></section>
      <section id="o-nas" className="founder-section scaffold" aria-labelledby="founder-title">
        <div className="founder-photo"><Image src={assetPath("/patrycja-zwierzchowska.jpg")} alt="Patrycja Zwierzchowska, założycielka Impact Lab" width={1024} height={1024} sizes="(max-width: 600px) 100vw, 36vw"/></div>
        <div className="founder-copy"><p className="eyebrow">Ludzie Impact Lab</p><h2 id="founder-title">Doświadczenie.<br/>Perspektywa.<br/>Realny wpływ<span className="accent">.</span></h2><p>Za Impact Lab stoi doświadczenie zdobywane w sprzedaży, obsłudze klienta i HR. Od 2008 roku Patrycja Zwierzchowska rozwija ludzi, zespoły i organizacje.</p><p>Łączymy diagnozę, rozwój kompetencji oraz warsztaty i facylitację, aby wypracowywać rozwiązania dopasowane do rzeczywistości organizacji.</p><a href="#patrycja" className="button button-outline">Poznaj założycielkę <ArrowRight size={16}/></a></div>
        <aside className="founder-note"><span className="quote-mark" aria-hidden="true">“</span><p>Znam biznes od środka. Rozumiem ludzi. Łączę jedno z drugim.</p><div><strong>Patrycja Zwierzchowska</strong><span>Założycielka Impact Lab</span><span>Trenerka · Konsultantka · Facylitatorka</span></div></aside>
      </section>
      <details id="patrycja" className="founder-bio"><summary>Patrycja Zwierzchowska — doświadczenie<ArrowRight size={20}/></summary><p>Moje doświadczenie zawodowe zaczęło się od pracy w sprzedaży i obsłudze klienta, a następnie objęło HR w firmach finansowych i usługowych. Od 2008 roku pracuję jako ekspert rozwoju, rozwijając ludzi, zespoły i organizacje.</p><p>Projektuję i realizuję działania rozwojowe oraz diagnostyczne, wspieram menedżerów i pomagam zespołom wypracowywać rozwiązania odpowiadające na rzeczywiste wyzwania biznesowe.</p><h3>Wybrane projekty z mojego doświadczenia</h3><ul><li>Wdrożenie standardów sprzedaży i zarządzania sprzedażą w branżach FMCG, farmaceutycznej, finansowej i budowlano-przemysłowej.</li><li>Diagnoza DC i programy rozwojowe dla dyrektorów sprzedaży w branży finansowej.</li><li>Projekt i wdrożenie kultury wprowadzania innowacji dla dyrektorów i menedżerów.</li><li>Rozwój różnorodności i współpracy w oparciu o FRIS®.</li></ul></details>
      <ServiceDetails/>
      <section id="kontakt" className="contact-banner scaffold" aria-labelledby="contact-title"><div><h2 id="contact-title">Porozmawiajmy<br/>o możliwościach<span className="accent">.</span></h2><p>Opowiedz nam o swoich wyzwaniach.<br/>Zobaczmy, jak możemy Cię wesprzeć.</p></div><a className="button button-primary" href="mailto:patrycja@impact-lab.pl">Napisz do nas <ArrowRight size={17}/></a><div className="contact-details"><a href="mailto:patrycja@impact-lab.pl">patrycja@impact-lab.pl</a><a href="tel:+48606721789">+48 606 721 789</a><span>Warszawa</span></div></section>

    </div>
    <footer className="site-footer"><div className="footer-inner"><div><Image src={assetPath("/impact-lab-logo.png")} alt="Impact.LAB" width={2728} height={631} sizes="145px"/><p>Ludzie · Pomysły · Zmiana</p></div><nav aria-label="Nawigacja w stopce">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><p className="footer-address">Impact-Lab · Sarmacka 22a/88<br/>02-972 Warszawa · NIP 7712407782</p></div></footer>
  </>;
}




