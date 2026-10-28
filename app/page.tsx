import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SectionScaffolds } from '@/components/section-scaffolds';
import { AnchorDetails } from '@/components/anchor-details';

export default function Home() {
  return <><AnchorDetails/><a href="#main" className="skip-link">Przejdź do treści</a><Header/><main id="main"><Hero/><SectionScaffolds/></main></>;
}
