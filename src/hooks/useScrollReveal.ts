import { useEffect } from 'react';

/**
 * useScrollReveal
 * Monitors elements with the '.reveal-on-scroll' class inside <main> and
 * adds '.is-revealed' as the user scrolls down through the website sections.
 * 
 * STRICT EXCLUSION:
 * Footer elements are never observed or modified.
 */
export function useScrollReveal(triggerKey?: unknown) {
  useEffect(() => {
    // If IntersectionObserver is unsupported, reveal everything immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('main .reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed so it remains smoothly in place
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const observeElements = () => {
      // Strictly target elements inside <main>, never inside <footer>
      const elements = document.querySelectorAll<HTMLElement>('main .reveal-on-scroll');
      const viewportHeight = window.innerHeight;

      elements.forEach((el) => {
        // Double check not inside footer
        if (el.closest('footer')) return;

        // If already near or within the initial viewport on page load (e.g. Hero section),
        // reveal immediately with zero delay
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportHeight * 0.92) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial pass
    observeElements();

    // Re-check after minor delay in case images or dynamic state update layout
    const timer = setTimeout(observeElements, 250);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [triggerKey]);
}
