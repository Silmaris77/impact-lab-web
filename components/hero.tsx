import { assetPath } from '@/lib/asset-path';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { hero } from '@/lib/content';

export function Hero() {
  return <section className="hero container" aria-labelledby="hero-heading">
    <div className="hero-copy">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 id="hero-heading">Ambitni ludzie.<br/>Mądrzejsze<br/>organizacje<span className="period">.</span></h1>
      <p className="hero-description"><strong>{hero.lead}</strong><br/>{hero.description}</p>
      <div className="hero-actions"><a className="button button-primary" href="#oferta">Poznaj naszą ofertę <ArrowRight size={17}/></a><a className="button button-outline" href="#jak-dzialamy">Zobacz, jak działamy <ArrowRight size={17}/></a></div>
    </div>
    <div className="hero-people-art"><Image src={assetPath("/images/hero-people-v1.png")} alt="Ilustracja koncepcyjna: ludzie w ruchu w jasnej przestrzeni biurowej, połączeni płynną magentową wstęgą" fill priority sizes="(max-width: 900px) 100vw, 65vw"/></div>
  </section>;
}

