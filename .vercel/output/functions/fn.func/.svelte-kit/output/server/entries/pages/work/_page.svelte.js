import { h as head, a7 as ensure_array_like, a as attr_class, b as attr, e as escape_html, a8 as stringify } from "../../../chunks/renderer.js";
import { p as projects } from "../../../chunks/work.js";
import { G as GotoTop } from "../../../chunks/GotoTop.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filtered;
    const ALL = "All";
    const tags = [
      ALL,
      "Data Visualization",
      "Web Development",
      "Data Analysis",
      "Machine Learning",
      "UX Research"
    ];
    let activeTag = ALL;
    filtered = projects;
    head("oqsuc6", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Work — Kailen Santos</title>`);
      });
    });
    $$renderer2.push(`<main class="min-h-screen pt-20 pb-16"><section class="mx-auto max-w-6xl px-6"><h1 class="mb-2 svelte-oqsuc6">Work</h1> <p class="mb-10 svelte-oqsuc6" style="font-size: 1.1rem; color: #9ab3ae;">A selection of projects spanning data visualization, web development, machine learning, and UX research.</p> <div class="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filter projects by skill"><!--[-->`);
    const each_array = ensure_array_like(tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<button${attr_class("filter-btn svelte-oqsuc6", void 0, { "active": activeTag === tag })}${attr("aria-pressed", activeTag === tag)}>${escape_html(tag)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
    const each_array_1 = ensure_array_like(filtered);
    for (let $$index_3 = 0, $$length = each_array_1.length; $$index_3 < $$length; $$index_3++) {
      let project = each_array_1[$$index_3];
      $$renderer2.push(`<a${attr("href", `/work/${stringify(project.slug)}`)} class="project-card group svelte-oqsuc6"><div class="card-image-wrap svelte-oqsuc6"><img${attr("src", project.thumbnail)}${attr("alt", `Preview of ${stringify(project.title)}`)} class="card-image svelte-oqsuc6"/></div> <div class="card-body svelte-oqsuc6"><h2 class="card-title svelte-oqsuc6">${escape_html(project.title)}</h2> <p class="card-desc svelte-oqsuc6">${escape_html(project.description)}</p> <div class="mt-3 flex flex-wrap gap-2"><!--[-->`);
      const each_array_2 = ensure_array_like(project.tags);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let tag = each_array_2[$$index_1];
        $$renderer2.push(`<span class="skill-tag svelte-oqsuc6">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (project.tech.length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="mt-4 flex items-center gap-3"><!--[-->`);
        const each_array_3 = ensure_array_like(project.tech);
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          let icon = each_array_3[$$index_2];
          $$renderer2.push(`<img${attr("src", `/images/${stringify(icon)}`)}${attr("alt", icon.replace("-logo.png", ""))} class="h-7 w-auto opacity-70 group-hover:opacity-100 transition-opacity"/>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></a>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (filtered.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="mt-16 text-center svelte-oqsuc6" style="color: #9ab3ae;">No projects in this category yet.</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></section></main> `);
    GotoTop($$renderer2, { showAtPixel: 300 });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
