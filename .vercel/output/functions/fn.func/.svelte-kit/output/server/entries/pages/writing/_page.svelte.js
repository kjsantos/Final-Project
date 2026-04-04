import { f as fallback, b as attr, a6 as attr_style, s as slot, c as bind_props, a8 as stringify, a7 as ensure_array_like, e as escape_html } from "../../../chunks/renderer.js";
import { G as GotoTop } from "../../../chunks/GotoTop.js";
import { p as posts } from "../../../chunks/writing.js";
function Saos($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let animation = fallback($$props["animation"], "none");
    let animation_out = fallback($$props["animation_out"], "none; opacity: 0");
    let once = fallback($$props["once"], false);
    let top = fallback($$props["top"], 0);
    let bottom = fallback($$props["bottom"], 0);
    let css_observer = fallback($$props["css_observer"], "");
    let css_animation = fallback($$props["css_animation"], "");
    const countainer = `__saos-${Math.random()}__`;
    $$renderer2.push(`<div${attr("id", countainer)}${attr_style(css_observer)}>`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div${attr_style(`animation: ${stringify(animation)}; ${stringify(css_animation)}`)}><!--[-->`);
      slot($$renderer2, $$props, "default", {});
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, {
      animation,
      animation_out,
      once,
      top,
      bottom,
      css_observer,
      css_animation
    });
  });
}
function Writing($$renderer) {
  $$renderer.push(`<main class="mt-20 svelte-87a2ag"><div class="svelte-87a2ag"><section class="svelte-87a2ag">`);
  Saos($$renderer, {
    animation: "fade-in .3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    animation_out: "slide-out-fwd-center 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
    top: 100,
    bottom: 120,
    children: ($$renderer2) => {
      $$renderer2.push(`<h2 class="text-right svelte-87a2ag" style="color: white">Writing</h2>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <!--[-->`);
  const each_array = ensure_array_like(posts);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { title, subtitle, link, thumbnail } = each_array[$$index];
    Saos($$renderer, {
      animation: "fade-in .3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      animation_out: "slide-out-fwd-center 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      top: 80,
      bottom: 120,
      children: ($$renderer2) => {
        $$renderer2.push(`<a${attr("href", link)} data-sveltekit-reload=""${attr("target", link.startsWith("http") ? "_blank" : void 0)}${attr("rel", link.startsWith("http") ? "noopener noreferrer" : void 0)} class="svelte-87a2ag"><div class="my-1 flex content-center rounded-t-3xl rounded-bl-3xl p-8 shadow-2xl shadow-slate-800 svelte-87a2ag" style="background-color: #FFF5F5"><div class="justify-items-left container pr-20 svelte-87a2ag"><div class="pl-26 svelte-87a2ag"><h2 class="svelte-87a2ag">${escape_html(title)}</h2> <p class="svelte-87a2ag"><br class="svelte-87a2ag"/>${escape_html(subtitle)}</p></div></div> <div class="container w-1/3 self-center svelte-87a2ag"><img class="justify-items-left align-items-center object-scale-down p-2 svelte-87a2ag"${attr("src", thumbnail)}${attr("alt", `Thumbnail for ${stringify(title)}`)}/></div></div></a>`);
      },
      $$slots: { default: true }
    });
  }
  $$renderer.push(`<!--]--></section></div></main>`);
}
function _page($$renderer, $$props) {
  let data = $$props["data"];
  $$renderer.push(`<main>`);
  Writing($$renderer);
  $$renderer.push(`<!----> `);
  GotoTop($$renderer, { showAtPixel: 50 });
  $$renderer.push(`<!----></main>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
