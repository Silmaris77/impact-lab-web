'use client';

import { useEffect } from 'react';

/** Reveal the linked service before the browser scrolls to its content. */
export function AnchorDetails() {
  useEffect(() => {
    const reveal = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); }
      catch { return; }
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
      }
    };
    reveal();
    window.addEventListener('hashchange', reveal);
    const revealAgain = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href^="#"]');
      if (link?.getAttribute('href') === window.location.hash) reveal();
    };
    document.addEventListener('click', revealAgain);
    return () => {
      window.removeEventListener('hashchange', reveal);
      document.removeEventListener('click', revealAgain);
    };
  }, []);
  return null;
}
