import { ArrowRight } from 'lucide-react';
import { assetPath } from '@/lib/asset-path';
import { developmentPrograms, programHref } from '@/lib/programs';

export function ProgramCards() {
  return <section id="programy" className="programs-section scaffold" aria-labelledby="programs-title">
    <div className="programs-heading"><p className="eyebrow">Od wyzwania do działania</p><h2 id="programs-title">Programy rozwojowe</h2><p>Procesy, które łączą diagnozę, rozwój kompetencji i pracę nad codziennymi wyzwaniami organizacji.</p></div>
    <div className="program-card-grid">{developmentPrograms.map((program, index) => <article className="program-card" key={program.slug}>
      <p className="program-number" aria-hidden="true">0{index + 1}</p><h3>{program.title}</h3><p>{program.summary}</p>
      <a className="button button-outline" href={assetPath(programHref(program.slug))} aria-label={`Poznaj program: ${program.title}`}>Poznaj program <ArrowRight size={17} aria-hidden="true"/></a>
    </article>)}</div>
  </section>;
}

export function RelatedPrograms({ topicId }: { topicId?: string }) {
  const programs = topicId ? developmentPrograms.filter(program => program.topicIds.includes(topicId)) : developmentPrograms;
  if (!programs.length) return null;
  return <div className="related-programs"><h4>Programy w tym obszarze</h4><div className="related-program-links">{programs.map(program => <a key={program.slug} href={assetPath(programHref(program.slug))}>{program.title}<ArrowRight size={18} aria-hidden="true"/></a>)}</div></div>;
}
