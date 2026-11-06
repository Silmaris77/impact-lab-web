import { assetPath } from '@/lib/asset-path';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { company, companyFigures, differentiators } from '@/lib/company';
import { ServiceDetails, CollaborationProcess } from './service-details';
import { ExperienceDetails } from './experience-details';
import { ProgramCards } from './program-cards';
import { Footer } from './footer';

const pillars = [
  { id: 'szkolenia', title: 'Szkolenia', text: 'Rozwijamy kompetencje, które pomagają działać skuteczniej.', detail: 'Projektujemy rozwój wokół realnych wyzwań biznesu. Wzmacniamy kompetencje ludzi, zespołów i całych organizacji.', areas: 'Sprzedaż i relacje z klientami · Przywództwo i zarządzanie · Zmiana i innowacje · Współpraca' },
  { id: 'diagnoza', title: 'Diagnoza', text: 'Najpierw fakty. Potem decyzje. Zaczynamy od przyczyn.', detail: 'Łączymy dane, obserwacje i perspektywy pracowników. Pomagamy zrozumieć organizację, zespoły i ludzi.', areas: 'Potencjał pracowników i zespołów · Badania pracowników · FRIS® · MTQ48 · Efektywność organizacji' },
  { id: 'projektowanie', title: 'Projektowanie rozwiązań', text: 'Pomagamy zespołom tworzyć rozwiązania, które mają sens.', detail: 'Facylitujemy pracę zespołów, pomagając im przełamywać schematy i tworzyć odważne rozwiązania dopasowane do ich rzeczywistości.', areas: 'Modele i standardy pracy · Rozwiązania HR · Kultura odpowiedzialności · Innowacje · Zmiana' },
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
      <section id="o-nas" className="founder-section scaffold" aria-labelledby="founder-title">
        <div className="founder-photo"><Image src={assetPath("/patrycja-zwierzchowska.jpg")} alt="Patrycja Zwierzchowska, założycielka Impact Lab" width={1024} height={1024} sizes="(max-width: 600px) 100vw, 36vw"/></div>
        <div className="founder-copy"><p className="eyebrow">O firmie</p><h2 id="founder-title">{company.headline}</h2><p>{company.introduction}</p><a href="#firma" className="button button-outline">Poznaj nas <ArrowRight size={16}/></a></div>
        <aside className="founder-note"><span className="quote-mark" aria-hidden="true">“</span><p>{company.quote}</p><div><strong>Patrycja Zwierzchowska</strong><span>Założycielka Impact Lab</span><span>Trenerka · Konsultantka · Facylitatorka</span></div></aside>
      </section>
      <section id="doswiadczenie" className="company-figures scaffold" aria-labelledby="figures-title"><div className="figures-heading"><h2 id="figures-title">Firma w liczbach</h2><p>Doświadczenie zawodowe i projektowe, na którym opiera się Impact Lab.</p></div><div className="experience-strip">{companyFigures.map(figure => <div key={figure.value}><strong>{figure.value}</strong><p>{figure.label}</p></div>)}</div></section>
      <details id="firma" className="founder-bio"><summary>Poznaj Impact Lab<ArrowRight size={20}/></summary><p>{company.description}</p><p>Wspieramy liderów, którzy chcą więcej niż utrzymania obecnego stanu. Pomagamy szukać możliwości rozwoju, angażować ludzi w zmianę i przekładać pomysły na działania.</p><p>Łączymy diagnozę, konsultacje, warsztaty, szkolenia i wsparcie wdrożeniowe. Najpierw poznajemy kontekst organizacji, potem dobieramy metody i projektujemy proces.</p><a href="#patrycja" className="button button-outline">Poznaj Patrycję Zwierzchowską <ArrowRight size={16}/></a></details>
      <details id="patrycja" className="founder-bio"><summary>Patrycja Zwierzchowska — projekty, klienci i certyfikaty<ArrowRight size={20}/></summary><p>Moje doświadczenie zawodowe zaczęło się od pracy w sprzedaży i obsłudze klienta, a następnie objęło HR w firmach finansowych i usługowych. Od 2008 roku pracuję jako ekspert rozwoju, rozwijając ludzi, zespoły i organizacje.</p><p>Projektuję i realizuję działania rozwojowe oraz diagnostyczne, wspieram menedżerów i pomagam zespołom wypracowywać rozwiązania odpowiadające na rzeczywiste wyzwania biznesowe.</p><ExperienceDetails/></details>

      <section id="oferta" className="offer scaffold" aria-labelledby="offer-title">
        <div className="section-heading"><h2 id="offer-title">Trzy filary, jeden cel <span>— trwała zmiana.</span></h2><a className="button button-outline" href="#wspolpraca">Jak współpracujemy <ArrowRight size={16}/></a></div>
        <div className="pillar-grid">{pillars.map(({ id,title,text }, index) => <article id={id} key={id} className="pillar pillar-without-icon">
          <div className={`pillar-visual visual-${index}`}><Image src={assetPath(servicePhotos[index].src)} alt={servicePhotos[index].alt} fill sizes="(max-width: 600px) 55vw, (max-width: 900px) 18vw, 240px"/></div>
          <h3>{title}</h3><span className="small-rule"/>
          <div className="pillar-bottom"><p>{text}</p><a href={`#oferta-${id}`} className="circle-link" aria-label={`Poznaj ofertę: ${title}`}><ArrowRight size={19}/></a></div>
        </article>)}</div>
        <ServiceDetails/>
      </section>
      <ProgramCards/>
      <section id="jak-dzialamy" className="method-section scaffold" aria-labelledby="method-title">
        <div className="method-intro"><h2 id="method-title">Dlaczego <span className="accent">to działa?</span></h2><p>Rozumiemy złożoność organizacji. Łączymy różne perspektywy i angażujemy ludzi w tworzenie rozwiązań.</p><a href="#wspolpraca" className="button button-outline">Poznaj nasz sposób działania <ArrowRight size={16}/></a></div>
        <div className="methods methods-differentiators">{differentiators.map(({title,text}) => <article key={title}><h3>{title}</h3><p>{text}</p><span className="method-dot" aria-hidden="true"/></article>)}</div>
      </section>

      <CollaborationProcess/>
      <section id="kontakt" className="contact-banner contact-orbital scaffold" aria-labelledby="contact-title"><div><h2 id="contact-title">Porozmawiajmy<br/>o możliwościach<span className="accent">.</span></h2><p>Opowiedz nam o swoich wyzwaniach.<br/>Zobaczmy, jak możemy Cię wesprzeć.</p></div><a className="button button-primary" href="mailto:patrycja@impact-lab.pl">Napisz do nas <ArrowRight size={17}/></a><div className="contact-details"><a href="mailto:patrycja@impact-lab.pl">patrycja@impact-lab.pl</a><a href="tel:+48606721789">+48 606 721 789</a><span>Warszawa</span></div></section>

    </div>
    <Footer/>
  </>;
}





