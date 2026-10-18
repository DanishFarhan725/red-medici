import './styles/main.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHeader } from './modules/header';
import { initHero } from './modules/hero';
import { initLoupe } from './modules/loupe';
import { initWaitlists } from './modules/waitlist';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

initHeader();
initWaitlists();
initHero(reducedMotion.matches);
initLoupe(reducedMotion);

// Fonts change line lengths and therefore pinned section heights.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
