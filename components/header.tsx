'use client';

import { assetPath } from '@/lib/asset-path';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navigation } from '@/lib/content';
import Image from 'next/image';

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1101px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);
  return <header ref={header} className="header container" onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
  }}>
    <a href="#main" className="brand" aria-label="Impact Lab — strona główna"><Image src={assetPath("/impact-lab-logo.png")} alt="Impact.LAB" width={2728} height={631} priority sizes="160px"/></a>
    <nav aria-label="Nawigacja główna" className="desktop-nav">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <a className="button button-primary header-cta" href="#kontakt">Porozmawiajmy <ArrowRight size={16}/></a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav id="mobile-navigation" aria-label="Nawigacja mobilna" className="mobile-nav" hidden={!open}>{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowRight size={16}/></a>)}</nav>
  </header>;
}

