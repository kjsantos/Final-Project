import "clsx";
function TitleCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<main class="m-auto">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></main>`);
  });
}
function _page($$renderer) {
  $$renderer.push(`<div class="min-h-screen pt-20 pb-16 px-6"><div class="mx-auto max-w-3xl">`);
  TitleCard($$renderer);
  $$renderer.push(`<!----> <div class="about-body mt-12 svelte-cwls5q"><h2 class="svelte-cwls5q">About me</h2> <p class="svelte-cwls5q">I'm a data professional at the Metropolitan Transportation Authority (MTA), where I work on tools
				that make capital planning data accessible to the public — from interactive dashboards
				tracking billions of dollars in transit investment to public-facing websites supporting
				the agency's long-range planning efforts.</p> <p class="svelte-cwls5q">My background combines a Master of Science in Library and Information Science
				from the Pratt Institute School of Information with years of hands-on experience
				in data journalism, visualization, and engineering. Before the MTA, I wrote data-driven
				stories for the Boston University News Service and contributed tutorials and analyses
				to the Open Data Science Conference.</p> <p class="svelte-cwls5q">I'm drawn to the intersection of data, design, and technology — the places where
				careful analysis and thoughtful presentation combine to make complex information
				legible and actionable. Whether that's a neural network predicting street safety
				or an interactive map of subway capital projects, I believe the best data work
				is the kind that connects to people's real lives.</p> <p class="svelte-cwls5q">When I'm not in the data, I write. You can find some of that work in the <a href="/writing" class="svelte-cwls5q">Writing</a> section.</p></div></div></div>`);
}
export {
  _page as default
};
