import { error } from "@sveltejs/kit";
import { p as posts } from "../../../../chunks/writing.js";
function load({ params }) {
  const post = posts.find((post2) => post2.slug === params.slug);
  if (!post) throw error(404);
  return {
    post
  };
}
export {
  load
};
