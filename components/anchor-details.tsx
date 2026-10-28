'use client';

import { useEffect } from 'react';

/** Reveal the linked service before the browser scrolls to its content. */
export function AnchorDetails() {
  useEffect(() => {
    const reveal = () => {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
      }
    };
    reveal();
    window.addEventListener('hashchange', reveal);
    return () => window.removeEventListener('hashchange', reveal);
  }, []);
  return null;
}
