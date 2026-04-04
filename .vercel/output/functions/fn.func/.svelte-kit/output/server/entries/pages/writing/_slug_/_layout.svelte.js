import { s as slot, c as bind_props } from "../../../../chunks/renderer.js";
function _layout($$renderer, $$props) {
  let data = $$props["data"];
  $$renderer.push(`<div><main><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main></div>`);
  bind_props($$props, { data });
}
export {
  _layout as default
};
