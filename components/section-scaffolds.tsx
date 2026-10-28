import { ChartNoAxesColumnIncreasing, Lightbulb, UsersRound } from 'lucide-react';

export function SectionScaffolds() {
  return <div className="scaffolds container">
    <section id="oferta" className="offer scaffold" aria-labelledby="offer-title">
      <h2 id="offer-title">Trzy filary, jeden cel <span>— trwała zmiana.</span></h2>
      <div className="pillar-grid">{[
        { id: 'szkolenia', title: 'Szkolenia', Icon: UsersRound },
        { id: 'diagnoza', title: 'Diagnoza', Icon: ChartNoAxesColumnIncreasing },
        { id: 'projektowanie', title: 'Projektowanie rozwiązań', Icon: Lightbulb },
      ].map(({id,title,Icon}) => <article id={id} key={id} className="pillar"><Icon size={36} strokeWidth={1.4}/><h3>{title}</h3><span className="small-rule"/><p>Opis oferty w kolejnej iteracji.</p></article>)}</div>
    </section>
    <section id="jak-dzialamy" className="scaffold simple-section"><h2>Dlaczego <span className="accent">to działa?</span></h2><p>Miejsce na metodologię i sposoby pracy.</p></section>
    <section id="doswiadczenie" className="scaffold simple-section lavender"><h2>Doświadczenie i rezultaty</h2><p>Miejsce na potwierdzone projekty i dane.</p></section>
    <section id="o-nas" className="scaffold simple-section founder"><div className="portrait-placeholder">Miejsce na oryginalny portret Patrycji</div><div><p className="eyebrow">Ludzie Impact Lab</p><h2>O nas</h2><p>Miejsce na zatwierdzony biogram i prezentację zespołu.</p></div></section>
    <section id="kontakt" className="scaffold simple-section lavender"><h2>Porozmawiajmy<br/>o możliwościach<span className="accent">.</span></h2><p>Dane kontaktowe zostaną dodane po ich potwierdzeniu.</p></section>
    <footer className="iteration-note">Impact Lab · Podgląd pierwszej iteracji</footer>
  </div>;
}
