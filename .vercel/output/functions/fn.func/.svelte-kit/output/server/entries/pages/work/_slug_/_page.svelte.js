import { h as head, a7 as ensure_array_like, e as escape_html, b as attr, a8 as stringify, c as bind_props } from "../../../../chunks/renderer.js";
import { G as GotoTop } from "../../../../chunks/GotoTop.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("9hm5jc", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.project.title)} — Kailen Santos</title>`);
      });
    });
    $$renderer2.push(`<main class="min-h-screen py-20"><article class="mx-auto max-w-3xl px-6"><nav class="mb-8" aria-label="Breadcrumb"><a href="/work" class="back-link svelte-9hm5jc">← Back to Work</a></nav> <header class="mb-8"><div class="mb-4 flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(data.project.tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="skill-tag svelte-9hm5jc">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <h1 class="svelte-9hm5jc">${escape_html(data.project.title)}</h1></header> <div class="thumbnail-wrap mb-8 svelte-9hm5jc"><img${attr("src", data.project.thumbnail)}${attr("alt", `Preview of ${stringify(data.project.title)}`)} class="thumbnail svelte-9hm5jc"/></div> <section class="content svelte-9hm5jc">${html(data.project.content)}</section> <div class="mt-12"><a${attr("href", data.project.link)} class="cta-btn svelte-9hm5jc" target="_blank" rel="noopener noreferrer">View Project ↗</a></div> `);
    if (data.project.tech.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-10 flex items-center gap-4 flex-wrap"><!--[-->`);
      const each_array_1 = ensure_array_like(data.project.tech);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let icon = each_array_1[$$index_1];
        $$renderer2.push(`<img${attr("src", `/images/${stringify(icon)}`)}${attr("alt", icon.replace("-logo.png", ""))} class="h-10 w-auto opacity-70"/>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></article></main> `);
    GotoTop($$renderer2, { showAtPixel: 300 });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
