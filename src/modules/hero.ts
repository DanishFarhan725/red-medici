import { gsap } from 'gsap';

/**
 * Hero: plays the hover loop, drives the minute-track hand from video time,
 * offers a pause control (WCAG 2.2.2), and runs the single page-load sequence.
 */
export function initHero(reducedMotion: boolean): void {
  const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
  const hand = document.querySelector<HTMLElement>('[data-dial-hand]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
  const label = document.querySelector<HTMLElement>('[data-motion-label]');

  if (video && hand && toggle && label) {
    const track = hand.parentElement as HTMLElement;
    let raf = 0;

    // Whole-pixel tick pitch keeps the minute track evenly spaced at any width.
    const snapTicks = () => {
      const css = getComputedStyle(track);
      const ticks = Number(css.getPropertyValue('--ticks')) || 60;
      const major = Number(css.getPropertyValue('--major')) || 12;
      const pitch = Math.max(2, Math.floor((track.clientWidth - 1) / ticks));
      track.style.setProperty('--pitch', `${pitch}px`);
      track.style.setProperty('--major-pitch', `${pitch * (ticks / major)}px`);
      track.style.setProperty('--span', `${pitch * ticks + 1}px`);
    };
    new ResizeObserver(snapTicks).observe(track);

    const drawHand = () => {
      const progress = video.duration ? video.currentTime / video.duration : 0;
      const span = parseFloat(track.style.getPropertyValue('--span')) || track.clientWidth;
      hand.style.setProperty('--hand', `${progress * (span - 2)}px`);
      raf = video.paused ? 0 : requestAnimationFrame(drawHand);
    };

    const setPaused = (paused: boolean) => {
      toggle.setAttribute('aria-pressed', String(paused));
      label.textContent = paused ? 'Play motion' : 'Pause motion';
    };

    video.addEventListener('play', () => {
      setPaused(false);
      if (!raf) raf = requestAnimationFrame(drawHand);
    });
    video.addEventListener('pause', () => {
      setPaused(true);
      drawHand();
    });

    let userPaused = reducedMotion;
    toggle.addEventListener('click', () => {
      userPaused = !video.paused;
      if (userPaused) video.pause();
      else void video.play();
    });

    // Pause off-screen so the loop costs nothing while reading further down.
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused) void video.play().catch(() => setPaused(true));
      else if (!entry.isIntersecting && !video.paused) video.pause();
    }).observe(video);

    if (reducedMotion) setPaused(true);
  }

  const root = document.documentElement;
  // Skip the intro when motion is reduced or the page loads in a background tab.
  if (reducedMotion || document.visibilityState === 'hidden') {
    root.classList.remove('intro-hold');
    return;
  }

  const lines = gsap.utils.toArray<HTMLElement>('[data-intro-line]');
  const items = gsap.utils.toArray<HTMLElement>('[data-intro]');
  const media = document.querySelector('.hero__media');

  gsap.set(lines, { yPercent: 105 });
  gsap.set(items, { autoAlpha: 0, y: 14 });
  gsap.set(media, { autoAlpha: 0, scale: 1.04 });
  gsap.set('.scale', { clipPath: 'inset(0 100% 0 0)' });
  root.classList.remove('intro-hold');

  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  // If animation frames stall (throttled or embedded views), never leave the hero hidden.
  window.setTimeout(() => intro.progress() < 1 && intro.progress(1), 3500);

  intro
    .to(media, { autoAlpha: 1, scale: 1, duration: 1.8 }, 0)
    .to('.scale', { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power3.inOut' }, 0.1)
    .to(items[0], { autoAlpha: 1, y: 0, duration: 0.9 }, 0.35)
    .to(lines, { yPercent: 0, duration: 1.2, stagger: 0.1 }, 0.45)
    .to(items.slice(1), { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08 }, 0.8);
}
