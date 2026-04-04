import { f as fallback, a as attr_class, b as attr, c as bind_props, h as head, s as slot } from "../../chunks/renderer.js";
/* empty css               */
/* empty css                                                */
function Hamburger($$renderer, $$props) {
  let open = fallback($$props["open"], false);
  $$renderer.push(`<button${attr_class("ml-2 cursor-pointer my-auto text-[#6f8896] hover:text-gray-700 focus:outline-none z-50 svelte-1ltwp5z", void 0, { "open": open })} aria-label="Toggle navigation menu"${attr("aria-expanded", open)}><svg width="50" height="50" class="svelte-1ltwp5z"><circle id="circle" cx="20" cy="22" r="20" fill="#A3B39A" opacity="0" class="svelte-1ltwp5z"></circle><line id="top" x1="6" y1="14" x2="32" y2="14" class="svelte-1ltwp5z"></line><line id="middle" x1="6" y1="22" x2="24" y2="22" class="svelte-1ltwp5z"></line><line id="bottom" x1="6" y1="30" x2="32" y2="30" class="svelte-1ltwp5z"></line></svg></button>`);
  bind_props($$props, { open });
}
function Navbar($$renderer, $$props) {
  let sidebar = fallback($$props["sidebar"], false);
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<header class="fixed my-auto bg-transparent svelte-rfuq4y"><nav class="flex">`);
    Hamburger($$renderer2, {
      get open() {
        return sidebar;
      },
      set open($$value) {
        sidebar = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----></nav></header>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
  bind_props($$props, { sidebar });
}
function Sidebar($$renderer, $$props) {
  let open = fallback($$props["open"], false);
  $$renderer.push(`<aside${attr_class("fixed flex h-screen w-screen items-center justify-center rounded-e-sm text-gray-600 svelte-129hoe0", void 0, { "open": open })} style="background-color: #B2DBCE; z-index: 10;"><nav class="my-auto h-fit p-12 text-xl"><a class="block p-10 text-center hover:text-gray-900" href="/" data-sveltekit-preload-data="">Home</a> <a class="block p-10 text-center hover:text-gray-900" href="/about" data-sveltekit-preload-data="">About</a> <a class="block p-10 hover:text-gray-900 text-center" href="/work" data-sveltekit-preload-data="">Work</a> <a class="block p-10 hover:text-gray-900 text-center" href="/writing" data-sveltekit-preload-data="">Writing</a> <a class="block p-10 hover:text-gray-900 text-center" href="/contact" data-sveltekit-preload-data="">Contact</a></nav></aside>`);
  bind_props($$props, { open });
}
function _layout($$renderer, $$props) {
  let open = fallback($$props["open"], false);
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="stylesheet" href="https://use.typekit.net/qem3paa.css"/>`);
    });
    Sidebar($$renderer2, {
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----> `);
    Navbar($$renderer2, {
      get sidebar() {
        return open;
      },
      set sidebar($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]-->`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
  bind_props($$props, { open });
}
export {
  _layout as default
};
