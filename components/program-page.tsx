import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from './header';
import { Footer } from './footer';
import { assetPath } from '@/lib/asset-path';
import { developmentPrograms, programHref, type DevelopmentProgram, type ProgramModule } from '@/lib/programs';

function Module({ module }: { module: ProgramModule }) {
  const facts = [
    ['Dla kogo', module.audience], ['Metoda', module.method], ['Czas trwania', module.duration], ['Grupa', module.group], ['Rezultat pracy', module.outcome],
  ].filter(([, value]) => value);
  return <article className="program-module">
    <div className="program-module-intro"><h3>{module.title}</h3><p>{module.description}</p></div>
    {facts.length > 0 && <dl className="program-facts">{facts.map(([label, value]) => <div key={label} className={label === 'Czas trwania' || label === 'Grupa' ? '' : 'program-fact-wide'}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
    {module.benefits && <div className="program-benefits"><h4>Cele rozwojowe</h4><ul>{module.benefits.map(item => <li key={item}>{item}</li>)}</ul></div>}
    {module.topics && <details className="program-curriculum"><summary>Zakres programu <ArrowRight size={18} aria-hidden="true"/></summary><ul>{module.topics.map(item => <li key={item}>{item}</li>)}</ul></details>}
  </article>;
}

export function ProgramPage({ program }: { program: DevelopmentProgram }) {
  const other = developmentPrograms.find(item => item.slug !== program.slug)!;
  const compactStages = program.stages.every(stage => stage.modules.length === 1);
  return <>
    <a href="#main" className="skip-link">Przejdź do treści</a><Header onHomePage={false}/>
    <main id="main" tabIndex={-1} className="program-page">
      <section className="program-hero container" aria-labelledby="program-title">
        <a className="program-back" href={assetPath('/#programy')}><ArrowLeft size={17} aria-hidden="true"/>Programy rozwojowe</a>
        <div className="program-hero-grid"><div><p className="eyebrow">Program rozwojowy</p><h1 id="program-title">{program.title}</h1><p className="program-subtitle">{program.subtitle}</p></div>
          <div><p className="program-introduction">{program.introduction}</p><div className="program-hero-actions"><a className="button button-primary" href="#kontakt-program">Porozmawiajmy o programie <ArrowRight size={17} aria-hidden="true"/></a><a className="button button-outline" href="#przebieg">Zobacz przebieg <ArrowRight size={17} aria-hidden="true"/></a></div></div>
        </div>
      </section>
      <div className="program-content container">
        <section className="program-context" aria-label="Wyzwania i cele programu">
          <div><p className="eyebrow">Kiedy warto?</p><h2>Rozpoznajesz te wyzwania?</h2><ul>{program.signals.map(item => <li key={item}>{item}</li>)}</ul></div>
          <div><p className="eyebrow">Cel współpracy</p><h2>Nad czym pracujemy</h2><ul>{program.goals.map(item => <li key={item}>{item}</li>)}</ul></div>
        </section>
        <section id="przebieg" className="program-process" aria-labelledby="process-title">
          <p className="eyebrow">Proces dopasowany do organizacji</p><h2 id="process-title">Jak przebiega program?</h2><p>Zakres działań i harmonogram ustalamy na podstawie potrzeb. Poniżej poznasz elementy, z których możemy zbudować proces dla Twojej organizacji.</p>
          <nav aria-label="Etapy programu"><ol>{program.stages.map((stage, index) => <li key={stage.id}><a href={`#${stage.id}`}><span aria-hidden="true">0{index + 1}</span>{stage.title}<ArrowRight size={17} aria-hidden="true"/></a></li>)}</ol></nav>
        </section>
        <div className={`program-stages${compactStages ? ' program-stages-grid' : ''}`}>{program.stages.map((stage, index) => <section key={stage.id} id={stage.id} className="program-stage" aria-labelledby={`${stage.id}-title`}>
          <div className="program-stage-heading"><span className="program-stage-number" aria-hidden="true">0{index + 1}</span><div><h2 id={`${stage.id}-title`}>{stage.title}</h2><p>{stage.description}</p></div></div>
          <div className={`program-modules${stage.modules.length === 1 ? ' program-modules-single' : ''}`}>{stage.modules.map(module => <Module key={module.title} module={module}/>)}</div>
        </section>)}</div>
        <section id="kontakt-program" className="program-contact" aria-labelledby="program-contact-title"><div><p className="eyebrow">Zacznijmy od rozmowy</p><h2 id="program-contact-title">Porozmawiajmy o Twoim zespole.</h2><p>Opowiedz nam o swoich wyzwaniach. Wspólnie ustalimy, od czego warto zacząć.</p></div><div><a className="button button-primary" href="mailto:patrycja@impact-lab.pl">Napisz do Patrycji <ArrowRight size={17} aria-hidden="true"/></a><a className="program-contact-phone" href="tel:+48606721789">+48 606 721 789</a></div></section>
        <nav className="program-bottom-nav" aria-label="Pozostała oferta"><a href={assetPath('/#programy')}><ArrowLeft size={17} aria-hidden="true"/>Wróć do programów</a><a href={assetPath(programHref(other.slug))}>{other.title}<ArrowRight size={17} aria-hidden="true"/></a></nav>
      </div>
    </main><Footer onHomePage={false}/>
  </>;
}
