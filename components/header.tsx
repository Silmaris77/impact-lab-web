'use client';

import { assetPath } from '@/lib/asset-path';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { navigation } from '@/lib/content';
import { trainingTopics, trainingHref } from '@/lib/training';
import { developmentPrograms, programHref } from '@/lib/programs';
import Image from 'next/image';

export function Header({ onHomePage = true }: { onHomePage?: boolean }) {
  const sectionHref = (hash: string) => onHomePage ? hash : assetPath(`/${hash}`);
  const [open, setOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const trainingToggle = useRef<HTMLButtonElement>(null);
  const mobileTrainingToggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const close = () => { setOpen(false); setTrainingOpen(false); };
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (trainingOpen) {
        setTrainingOpen(false);
        (open ? mobileTrainingToggle : trainingToggle).current?.focus();
      } else if (open) { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) { setOpen(false); setTrainingOpen(false); }
    };
    const desktop = window.matchMedia('(min-width: 1101px)');
    const closeOnDesktop = () => { setOpen(false); setTrainingOpen(false); };
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open, trainingOpen]);
  return <header ref={header} className="header container" onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
  }}>
    <a href={sectionHref('#main')} className="brand" aria-label="Impact Lab — strona główna"><Image src={assetPath("/impact-lab-logo.png")} alt="Impact.LAB" width={2728} height={631} priority sizes="160px"/></a>
    <nav aria-label="Nawigacja główna" className="desktop-nav">{navigation.map(item => item.href === '#oferta-szkolenia' ?
      <div key={item.href} className="training-nav" onMouseLeave={event => {
        if (!event.currentTarget.contains(document.activeElement)) setTrainingOpen(false);
      }} onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setTrainingOpen(false);
      }}>
        <div className="training-nav-heading"><a href={sectionHref(item.href)} onMouseEnter={() => setTrainingOpen(true)} onClick={close}>{item.label}</a><button ref={trainingToggle} type="button" className="training-toggle" aria-label="Tematy szkoleń" aria-expanded={trainingOpen} aria-controls="desktop-training-topics" onClick={() => setTrainingOpen(!trainingOpen)}><ChevronDown size={15} aria-hidden="true"/></button></div>
        <ul id="desktop-training-topics" className="training-dropdown" hidden={!trainingOpen}>
          <li><a href={sectionHref(item.href)} onClick={close}>Wszystkie szkolenia</a></li>
          {trainingTopics.map(topic => <li key={topic.id}><a href={sectionHref(trainingHref(topic.id))} onClick={close}>{topic.title}<ArrowRight size={15} aria-hidden="true"/></a></li>)}
          <li className="training-program-label">Programy rozwojowe</li>
          {developmentPrograms.map(program => <li key={program.slug}><a href={assetPath(programHref(program.slug))} onClick={close}>{program.title}<ArrowRight size={15} aria-hidden="true"/></a></li>)}
        </ul>
      </div> : <a key={item.href} href={sectionHref(item.href)} onClick={close}>{item.label}</a>)}</nav>
    <a className="button button-primary header-cta" href={onHomePage ? '#kontakt' : '#kontakt-program'}>Porozmawiajmy <ArrowRight size={16}/></a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} onClick={() => { setOpen(!open); setTrainingOpen(false); }}>{open ? <X/> : <Menu/>}</button>
    <nav id="mobile-navigation" aria-label="Nawigacja mobilna" className="mobile-nav" hidden={!open}>{navigation.map(item => item.href === '#oferta-szkolenia' ?
      <div key={item.href} className="mobile-training-group">
        <div className="training-nav-heading"><a href={sectionHref(item.href)} onClick={close}>{item.label}</a><button ref={mobileTrainingToggle} type="button" className="training-toggle" aria-label="Tematy szkoleń" aria-expanded={trainingOpen} aria-controls="mobile-training-topics" onClick={() => setTrainingOpen(!trainingOpen)}><ChevronDown size={18} aria-hidden="true"/></button></div>
        <ul id="mobile-training-topics" className="mobile-training-topics" hidden={!trainingOpen}>
          {trainingTopics.map(topic => <li key={topic.id}><a href={sectionHref(trainingHref(topic.id))} onClick={close}>{topic.title}<ArrowRight size={15} aria-hidden="true"/></a></li>)}
          <li className="training-program-label">Programy rozwojowe</li>
          {developmentPrograms.map(program => <li key={program.slug}><a href={assetPath(programHref(program.slug))} onClick={close}>{program.title}<ArrowRight size={15} aria-hidden="true"/></a></li>)}
        </ul>
      </div> : <a key={item.href} href={sectionHref(item.href)} onClick={close}>{item.label}<ArrowRight size={16}/></a>)}</nav>
  </header>;
}

