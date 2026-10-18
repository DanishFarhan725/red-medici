import { defineConfig, type Plugin } from 'vite';
import { details, product, specGroups } from './src/data';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderDetails(): string {
  return details
    .map(
      (d, i) => `
        <li class="detail" data-index="${i}" data-x="${d.x}" data-y="${d.y}" data-scale="${d.scale}">
          <figure class="detail__plate" aria-hidden="true">
            <img src="/media/earbuds.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
          </figure>
          <h3 class="detail__head">
            <span class="detail__label"><span class="ref">${esc(product.ref)}.${i + 1}</span><span class="detail__title">${esc(d.title)}</span></span>
          </h3>
          <div class="detail__more"><p class="detail__body">${esc(d.body)}</p></div>
        </li>`,
    )
    .join('');
}

function renderSpecs(): string {
  return specGroups
    .map(
      (g) => `
        <section class="spec-group" aria-labelledby="spec-${g.title.toLowerCase().replace(/\W+/g, '-')}">
          <h3 id="spec-${g.title.toLowerCase().replace(/\W+/g, '-')}">${esc(g.title)}</h3>
          <dl>${g.rows
            .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
            .join('')}</dl>
        </section>`,
    )
    .join('');
}

/** Renders src/data.ts into index.html so content ships as static HTML. */
function productData(): Plugin {
  return {
    name: 'product-data',
    transformIndexHtml(html) {
      return html
        .replace('<!--details-->', renderDetails())
        .replace('<!--specs-->', renderSpecs())
        .replace(/\{\{(\w+)\}\}/g, (m, key: string) =>
          key in product ? esc(product[key as keyof typeof product]) : m,
        );
    },
  };
}

export default defineConfig({
  plugins: [productData()],
  server: { watch: { ignored: ['**/source/**'] } },
});
