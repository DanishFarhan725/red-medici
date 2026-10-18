import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin);

const PHOTO_RATIO = 1536 / 1024;

interface Focus {
  x: number;
  y: number;
  s: number;
}

/**
 * Places a photo inside a frame so that focal point (x, y) sits as close to the
 * frame's centre as the photo's edges allow, at magnification s.
 * Returns the focal point's position inside the frame.
 */
function place(img: HTMLElement, frameW: number, frameH: number, f: Focus) {
  const baseW = Math.max(frameW, frameH * PHOTO_RATIO);
  const baseH = baseW / PHOTO_RATIO;
  const w = baseW * f.s;
  const h = baseH * f.s;
  const tx = gsap.utils.clamp(frameW - w, 0, frameW / 2 - f.x * w);
  const ty = gsap.utils.clamp(frameH - h, 0, frameH / 2 - f.y * h);

  img.style.width = `${baseW}px`;
  img.style.height = `${baseH}px`;
  img.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${f.s})`;
  return { x: tx + f.x * w, y: ty + f.y * h };
}

function readFocus(el: HTMLElement): Focus {
  return { x: Number(el.dataset.x), y: Number(el.dataset.y), s: Number(el.dataset.scale) };
}

/**
 * The macro explorer. On wide screens with motion allowed, the stage pins and
 * scrolling moves a loupe across the real product photo, one detail at a time.
 * Otherwise every detail gets its own static, pre-cropped plate.
 */
export function initLoupe(reducedMotion: MediaQueryList): void {
  const section = document.querySelector<HTMLElement>('[data-loupe]');
  if (!section) return;

  const stage = section.querySelector<HTMLElement>('[data-loupe-stage]')!;
  const windowEl = section.querySelector<HTMLElement>('.loupe__window')!;
  const img = section.querySelector<HTMLElement>('[data-loupe-img]')!;
  const reticle = section.querySelector<HTMLElement>('[data-reticle]')!;
  const tickX = section.querySelector<HTMLElement>('[data-tick-x]')!;
  const tickY = section.querySelector<HTMLElement>('[data-tick-y]')!;
  const items = Array.from(section.querySelectorAll<HTMLElement>('.detail'));
  const foci = items.map(readFocus);

  // Static plates: crop each detail once, and again on resize.
  const plates = items.map((item) => item.querySelector<HTMLElement>('.detail__plate')!);
  const layoutPlates = () => {
    if (section.classList.contains('is-pinned')) return;
    plates.forEach((plate, i) => {
      const plateImg = plate.querySelector<HTMLElement>('img');
      if (plateImg && plate.clientWidth) {
        place(plateImg, plate.clientWidth, plate.clientHeight, { ...foci[i], s: foci[i].s * 0.8 });
      }
    });
  };
  new ResizeObserver(layoutPlates).observe(section);

  const mm = gsap.matchMedia();
  mm.add('(min-width: 861px) and (prefers-reduced-motion: no-preference)', () => {
    section.classList.add('is-pinned');

    // Titles become controls that jump to their detail.
    const labels = items.map((item, i) => {
      const span = item.querySelector<HTMLElement>('.detail__label')!;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = span.className;
      button.setAttribute('aria-controls', 'loupe-frame');
      button.append(...Array.from(span.childNodes));
      span.replaceWith(button);
      button.addEventListener('click', () => jumpTo(i));
      return { span, button };
    });

    const focus: Focus = { x: 0.5, y: 0.5, s: 1 };
    let active = -2;

    const render = () => {
      const p = place(img, windowEl.clientWidth, windowEl.clientHeight, focus);
      const zoom = gsap.utils.clamp(0, 1, (focus.s - 1) / 0.8);
      reticle.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      reticle.style.opacity = String(zoom);
      tickX.style.transform = `translateX(${p.x}px)`;
      tickY.style.transform = `translateY(${p.y}px)`;
    };

    const times: number[] = [];
    let jumpProgress: number | null = null;
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' }, onUpdate: render });
    tl.addLabel('overview', 0).to({}, { duration: 0.5 });
    times.push(0);
    foci.forEach((f, i) => {
      tl.to(focus, { ...f, duration: 1 });
      tl.addLabel(`detail-${i}`);
      times.push(tl.duration());
      tl.to({}, { duration: 0.7 });
    });

    const setActive = (index: number) => {
      if (index === active) return;
      active = index;
      items.forEach((item, i) => {
        item.classList.toggle('is-active', i === index);
        labels[i].button.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
    };

    const st = ScrollTrigger.create({
      trigger: stage,
      // Centre the stage in the space below the fixed header.
      start: () => {
        const headerH = document.querySelector<HTMLElement>('[data-header]')?.offsetHeight ?? 0;
        return `center ${(window.innerHeight + headerH) / 2}px`;
      },
      end: () => `+=${window.innerHeight * 3.4}`,
      pin: true,
      scrub: 0.7,
      animation: tl,
      snap: {
        // Nearest label; while a title click is travelling, hold its destination.
        snapTo: (value: number) => {
          if (jumpProgress !== null) return jumpProgress;
          const stops = times.map((t) => t / tl.duration());
          return stops.reduce((a, b) => (Math.abs(b - value) < Math.abs(a - value) ? b : a));
        },
        duration: { min: 0.25, max: 0.7 },
        delay: 0.08,
        ease: 'power2.inOut',
      },
      onUpdate: () => {
        const t = tl.time();
        let nearest = 0;
        times.forEach((time, k) => {
          if (Math.abs(t - time) < Math.abs(t - times[nearest])) nearest = k;
        });
        setActive(nearest - 1);
      },
      onRefresh: render,
    });

    function jumpTo(i: number) {
      jumpProgress = times[i + 1] / tl.duration();
      gsap.to(window, {
        scrollTo: st.start + jumpProgress * (st.end - st.start),
        duration: 0.9,
        ease: 'power2.inOut',
        overwrite: true,
        onComplete: () => void gsap.delayedCall(0.5, () => (jumpProgress = null)),
      });
    }

    render();
    setActive(-1);

    return () => {
      section.classList.remove('is-pinned');
      labels.forEach(({ span, button }) => {
        span.append(...Array.from(button.childNodes));
        button.replaceWith(span);
      });
      items.forEach((item) => item.classList.remove('is-active'));
      img.removeAttribute('style');
      requestAnimationFrame(layoutPlates);
    };
  });

  // matchMedia callbacks run synchronously; lay plates out for the static case.
  layoutPlates();
  reducedMotion.addEventListener?.('change', () => ScrollTrigger.refresh());
}
