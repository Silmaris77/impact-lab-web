import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { navigation } from '@/lib/content';
import { company } from '@/lib/company';

export function Footer({ onHomePage = true }: { onHomePage?: boolean }) {
  return <footer className="site-footer"><div className="footer-inner">
    <div className="footer-brand"><Image src={assetPath('/impact-lab-logo-claim.png')} alt={`Impact.LAB — ${company.claim}`} width={1831} height={505} sizes="(max-width: 600px) 142px, (max-width: 1150px) 145px, 154px"/></div>
    <nav aria-label="Nawigacja w stopce">{navigation.map(item => <a key={item.href} href={onHomePage ? item.href : assetPath(`/${item.href}`)}>{item.label}</a>)}</nav>
    <p className="footer-address">Impact-Lab · Sarmacka 22a/88<br/>02-972 Warszawa · NIP 7712407782</p>
  </div></footer>;
}
