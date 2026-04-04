import { f as fallback, c as bind_props } from "./renderer.js";
function GotoTop($$renderer, $$props) {
  let showGotoTop;
  let showAtPixel = fallback($$props["showAtPixel"], 2e3);
  let scrollHeight = 0;
  showGotoTop = scrollHeight > showAtPixel;
  if (showGotoTop) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<button class="goto__top svelte-1mbcofi" title="Go to top"><div class="container flex space-x-1"><p class="align-top" style="color: white;">Go To Top</p> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 -4 28 28"><g fill="none" stroke="currentColor" stroke-width="1.5"><path fill="white" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="m15 13.5l-3-3l-3 3"></path></g></svg></div></button>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { showAtPixel });
}
export {
  GotoTop as G
};
