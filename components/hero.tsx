import { ArrowRight } from 'lucide-react';
import { hero } from '@/lib/content';
import { OrbitalArt } from './orbital-art';

export function Hero() {
  return <section className="hero container" aria-labelledby="hero-heading">
    <div className="hero-copy">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 id="hero-heading">Ambitni ludzie.<br/>Mądrzejsze<br/>organizacje<span className="period">.</span></h1>
      <p className="hero-description"><strong>{hero.lead}</strong><br/>{hero.description}</p>
      <div className="hero-actions"><a className="button button-primary" href="#oferta">Poznaj naszą ofertę <ArrowRight size={17}/></a><a className="button button-outline" href="#jak-dzialamy">Zobacz, jak działamy <ArrowRight size={17}/></a></div>
    </div>
    <OrbitalArt/>
  </section>;
}

