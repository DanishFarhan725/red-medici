// Single source for product facts shown on the page.
// Specs and price are preliminary launch placeholders: replace them with final figures here.

export const product = {
  brand: 'Red Medici',
  ref: 'RM-01',
  price: '$249',
  priceNote: 'Launch price, before tax',
  release: 'Pre-orders open early 2027',
};

export interface Detail {
  id: string;
  title: string;
  body: string;
  /** Focal point as a fraction of the product photo (0–1). */
  x: number;
  y: number;
  /** Magnification of the photo at this detail. */
  scale: number;
}

export const details: Detail[] = [
  {
    id: 'light-bar',
    title: 'Light bar',
    body: 'A diffused white bar along the front facet shows charge, pairing and game mode, so you can check status without reaching for your phone.',
    x: 0.652,
    y: 0.478,
    scale: 2.6,
  },
  {
    id: 'vents',
    title: 'Vent stack',
    body: 'Three machined ports relieve pressure behind the driver and feed the outer microphones, keeping long sessions comfortable and calls clear.',
    x: 0.615,
    y: 0.245,
    scale: 3.2,
  },
  {
    id: 'shell',
    title: 'Faceted shell',
    body: 'Flat planes instead of a smooth curve. The hard edges give your finger a clear place to tap, even mid-match or mid-sprint.',
    x: 0.66,
    y: 0.7,
    scale: 2.1,
  },
  {
    id: 'tips',
    title: 'Silicone tips',
    body: 'Soft white tips angled forward to follow the ear canal. Four sizes in the box, so the seal holds through a sprint and the bass stays intact.',
    x: 0.885,
    y: 0.455,
    scale: 2.6,
  },
];

export interface SpecGroup {
  title: string;
  rows: [label: string, value: string][];
}

export const specGroups: SpecGroup[] = [
  {
    title: 'Sound',
    rows: [
      ['Driver', '10 mm dynamic, dual magnet'],
      ['Frequency response', '20 Hz – 40 kHz'],
      ['Noise control', 'Hybrid ANC, transparency'],
      ['Codecs', 'LC3, AAC, SBC'],
    ],
  },
  {
    title: 'Play',
    rows: [
      ['Game mode latency', '45 ms'],
      ['Connection', 'Bluetooth 5.4, 2.4 GHz dongle'],
      ['Microphones', '6, beamforming'],
    ],
  },
  {
    title: 'Train',
    rows: [
      ['Sweat and water', 'IPX5'],
      ['Weight', '5.6 g per earbud'],
      ['Fit', '4 tip sizes, angled nozzle'],
    ],
  },
  {
    title: 'Power',
    rows: [
      ['Earbuds', '8 h, 6 h with ANC'],
      ['With case', '32 h'],
      ['Quick charge', '10 min for 2 h'],
      ['Charging', 'USB-C, Qi wireless'],
    ],
  },
  {
    title: 'In the box',
    rows: [
      ['Earbuds', 'RM-01 pair'],
      ['Case', 'Charging case'],
      ['Dongle', '2.4 GHz USB-C'],
      ['Tips', 'XS, S, M, L'],
      ['Cable', 'USB-C to USB-C'],
    ],
  },
];
