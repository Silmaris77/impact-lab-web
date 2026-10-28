'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { services, collaboration } from '@/lib/services';

function subscribe(listener: () => void) {
  window.addEventListener('hashchange', listener);
  return () => window.removeEventListener('hashchange', listener);
}

/** One contextual service panel, reached directly from the three offer cards. */
export function ServiceDetails() {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => '');
  const selected = services.find(service => hash === `#oferta-${service.id}`);
  useEffect(() => {
    if (!selected) return;
    const frame = requestAnimationFrame(() => {
      const panel = document.getElementById(`oferta-${selected.id}`);
      panel?.scrollIntoView({ block: 'start' });
      panel?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [selected]);

  return <div className="offer-service-panels">
    {services.map(service => <section key={service.id} id={`oferta-${service.id}`} className="offer-service-panel" hidden={selected?.id !== service.id} aria-labelledby={`service-title-${service.id}`} tabIndex={-1}>
      <div className="service-panel-heading"><div><p className="eyebrow">Szczegóły oferty</p><h3 id={`service-title-${service.id}`}>{service.title}</h3></div><a href="#oferta" className="panel-close" aria-label="Zamknij szczegóły oferty" onClick={() => requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>(`#${service.id} .circle-link`)?.focus({ preventScroll: true }))}><X size={21}/></a></div>
      <p className="service-panel-lead">{service.description}</p>
      <div className="service-columns">
        <div><h4>Kiedy warto?</h4><p>{service.need}</p><h4>Obszary pracy</h4><ul>{service.areas.map(area => <li key={area}><Check size={16} aria-hidden="true"/>{area}</li>)}</ul></div>
        <div><h4>Przykładowe zakresy</h4><ul>{service.examples.map(example => <li key={example}><Check size={16} aria-hidden="true"/>{example}</li>)}</ul><h4>Jak pracujemy?</h4><p>{service.approach}</p></div>
      </div>
      <div className="service-outcome"><h4>Cel współpracy</h4><p>{service.outcome}</p></div>
      <a className="button button-primary" href="#kontakt">Porozmawiajmy o Twoim projekcie <ArrowRight size={17}/></a>
    </section>)}
  </div>;
}

export function CollaborationProcess() {
  return <section id="wspolpraca" className="collaboration-section scaffold" aria-labelledby="collaboration-title">
    <div className="collaboration-heading"><p className="eyebrow">Od rozmowy do działania</p><h2 id="collaboration-title">Jak wygląda współpraca?</h2><p>Najpierw rozumiemy wyzwanie. Potem dobieramy działania.</p></div>
    <ol>{collaboration.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
  </section>;
}
