import { e as escape_html, b as attr, a8 as stringify, c as bind_props } from "../../../../chunks/renderer.js";
/* empty css                     */
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    $$renderer2.push(`<div class="flex-column container mx-auto w-3/5"><br/><br/> <div class="flex-column container w-1/2"><h1 class="svelte-1k78aqt">${escape_html(data.post.title)}</h1> <img${attr("src", data.post.image)}${attr("alt", `Illustration for ${stringify(data.post.title)}`)}/></div> ${html(data.post.content)} <br/><br/></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
