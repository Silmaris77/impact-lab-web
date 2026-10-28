import { ArrowRight, Check } from 'lucide-react';
import { services, collaboration } from '@/lib/services';

export function ServiceDetails() {
  return <>
    <section id="specjalizacje" className="service-details scaffold" aria-labelledby="details-title">
      <p className="eyebrow">Bliżej Twoich wyzwań</p>
      <h2 id="details-title">Rozwój, który ma znaczenie<span className="accent">.</span></h2>
      <p className="section-lead">Możemy zacząć od konkretnej potrzeby lub wspólnie sprawdzić, co wymaga zmiany. Łączymy trzy filary w proces dopasowany do Twojej organizacji.</p>
      {services.map(service => <details id={`oferta-${service.id}`} key={service.id} className="service-accordion">
        <summary><span>{service.title}<small>{service.headline}</small></span><ArrowRight size={22}/></summary>
        <div className="service-expanded">
          <p className="service-description">{service.description}</p>
          <div className="service-columns">
            <div><h3>Kiedy warto?</h3><p>{service.need}</p><h3>Obszary pracy</h3><ul>{service.areas.map(area => <li key={area}><Check size={16} aria-hidden="true"/>{area}</li>)}</ul></div>
            <div><h3>Przykładowe zakresy</h3><ul>{service.examples.map(example => <li key={example}><Check size={16} aria-hidden="true"/>{example}</li>)}</ul><h3>Jak pracujemy?</h3><p>{service.approach}</p></div>
          </div>
          <div className="service-outcome"><h3>Co ma dać ta praca?</h3><p>{service.outcome}</p></div>
          <a className="button button-primary" href="#kontakt">Porozmawiajmy o Twoim projekcie <ArrowRight size={17}/></a>
        </div>
      </details>)}
    </section>
    <section id="wspolpraca" className="collaboration-section scaffold" aria-labelledby="collaboration-title">
      <div className="collaboration-heading"><p className="eyebrow">Od rozmowy do działania</p><h2 id="collaboration-title">Jak wygląda współpraca?</h2><p>Najpierw rozumiemy wyzwanie. Potem dobieramy działania.</p></div>
      <ol>{collaboration.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
    </section>
  </>;
}
