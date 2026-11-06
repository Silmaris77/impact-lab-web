'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { services, collaboration } from '@/lib/services';
import { trainingTopics, trainingHref } from '@/lib/training';
import { RelatedPrograms } from './program-cards';

function subscribe(listener: () => void) {
  window.addEventListener('hashchange', listener);
  return () => window.removeEventListener('hashchange', listener);
}

/** A single contextual panel, shared by offer cards and the navigation. */
export function ServiceDetails() {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => '');
  const selected = services.find(service => hash === `#oferta-${service.id}`);
  const topic = trainingTopics.find(item => hash === trainingHref(item.id));
  useEffect(() => {
    const panelId = topic ? `szkolenia-${topic.id}` : selected ? `oferta-${selected.id}` : null;
    if (!panelId) return;
    const reveal = () => {
      const panel = document.getElementById(panelId);
      panel?.scrollIntoView({ block: 'start' });
      panel?.focus({ preventScroll: true });
    };
    const frame = requestAnimationFrame(reveal);
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
      if (link?.getAttribute('href') === `#${panelId}`) requestAnimationFrame(reveal);
    };
    document.addEventListener('click', onClick);
    return () => { cancelAnimationFrame(frame); document.removeEventListener('click', onClick); };
  }, [selected, topic]);

  return <div className="offer-service-panels">
    {services.map(service => <section key={service.id} id={`oferta-${service.id}`} className="offer-service-panel" hidden={selected?.id !== service.id} aria-labelledby={`service-title-${service.id}`} tabIndex={-1}>
      <div className="service-panel-heading"><div><p className="eyebrow">Szczegóły oferty</p><h3 id={`service-title-${service.id}`}>{service.title}</h3></div><a href="#oferta" className="panel-close" aria-label="Zamknij szczegóły oferty" onClick={() => requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>(`#${service.id} .circle-link`)?.focus({ preventScroll: true }))}><X size={21}/></a></div>
      <p className="service-headline">{service.headline}</p>
      <p className="service-panel-lead">{service.description}</p>
      {service.id === 'szkolenia' && <nav className="training-topic-links" aria-label="Obszary szkoleń">{trainingTopics.map(item => <a key={item.id} href={trainingHref(item.id)}>{item.title}<ArrowRight size={18} aria-hidden="true"/></a>)}</nav>}
      <div className="service-columns">
        <div><h4>Kiedy warto?</h4><p>{service.need}</p><h4>Obszary pracy</h4><ul>{service.areas.map(area => <li key={area}><Check size={16} aria-hidden="true"/>{area}</li>)}</ul></div>
        <div><h4>Przykładowe zakresy</h4><ul>{service.examples.map(example => <li key={example}><Check size={16} aria-hidden="true"/>{example}</li>)}</ul><h4>Jak pracujemy?</h4><p>{service.approach}</p></div>
      </div>
      <div className="service-outcome"><h4>Cel współpracy</h4><p>{service.outcome}</p></div>
      <RelatedPrograms/>
      <a className="button button-primary" href="#kontakt">Porozmawiajmy o Twoim projekcie <ArrowRight size={17}/></a>
    </section>)}
    {trainingTopics.map(item => <section key={item.id} id={`szkolenia-${item.id}`} className="offer-service-panel training-topic-panel" hidden={topic?.id !== item.id} aria-labelledby={`topic-title-${item.id}`} tabIndex={-1}>
      <div className="service-panel-heading"><div><p className="eyebrow">Szkolenia</p><h3 id={`topic-title-${item.id}`}>{item.title}</h3></div><a href="#oferta-szkolenia" className="panel-close" aria-label="Wróć do wszystkich szkoleń"><X size={21}/></a></div>
      <p className="service-headline">{item.headline}</p>
      <p className="service-panel-lead">{item.description}</p>
      <div className="service-columns"><div><h4>Jak pracujemy?</h4><p>{item.approach}</p></div><div><h4>Przykładowe zakresy</h4><ul>{item.examples.map(example => <li key={example}><Check size={16} aria-hidden="true"/>{example}</li>)}</ul></div></div>
      <RelatedPrograms topicId={item.id}/>
      <div className="topic-actions"><a className="button button-primary" href="mailto:patrycja@impact-lab.pl">Porozmawiajmy o tym szkoleniu <ArrowRight size={17}/></a><a className="button button-outline" href="#oferta-szkolenia">Wszystkie szkolenia <ArrowRight size={17}/></a></div>
      <nav className="training-topic-links" aria-label={`Inne obszary szkoleń — ${item.title}`}>{trainingTopics.filter(other => other.id !== item.id).map(other => <a key={other.id} href={trainingHref(other.id)}>{other.title}<ArrowRight size={18} aria-hidden="true"/></a>)}</nav>
    </section>)}
  </div>;
}

export function CollaborationProcess() {
  return <section id="wspolpraca" className="collaboration-section scaffold" aria-labelledby="collaboration-title">
    <div className="collaboration-heading"><p className="eyebrow">Od rozmowy do działania</p><h2 id="collaboration-title">Jak wygląda współpraca?</h2><p>Najpierw rozumiemy wyzwanie. Potem dobieramy działania.</p></div>
    <ol>{collaboration.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
  </section>;
}
