/** Gives the fixed header a solid ground once the page has scrolled. */
export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  const update = () => header.classList.toggle('is-solid', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });

  // Crimson marks one action at a time: while the hero form is on screen,
  // the header CTA steps back to a graphite outline.
  const heroForm = document.querySelector('.hero [data-waitlist]');
  if (heroForm) {
    new IntersectionObserver(([entry]) =>
      header.classList.toggle('is-quiet', entry.isIntersecting),
    ).observe(heroForm);
  }
}
