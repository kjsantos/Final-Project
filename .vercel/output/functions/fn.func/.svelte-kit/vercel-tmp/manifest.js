export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/1681857610664.jpeg","images/BUNS-Logo-Crop.png","images/IMG_0624.jpg","images/Screenshot 2023-03-20 at 5.50.04 PM.png","images/bu-logo.png","images/buns-viz.png","images/campaign-viz.png","images/card-sort.png","images/ccrb-viz.png","images/ccrb.png","images/crumb.jpeg","images/crumb.webp","images/d3-logo.png","images/figma-logo.png","images/html-logo.png","images/javascript-logo.png","images/jupyter-logo.png","images/nba-plot.png","images/odsc_favicon.png","images/photoshop-logo.png","images/placeholder-20yn.svg","images/placeholder-capital-dashboard.svg","images/placeholder-ml.svg","images/plotly-logo.png","images/python-logo.png","images/r-logo.png","images/svelte-logo.png","images/tableau-logo.png","images/twitter-hate-analysis.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Bb3V4WFb.js",app:"_app/immutable/entry/app.CYBs6jQH.js",imports:["_app/immutable/entry/start.Bb3V4WFb.js","_app/immutable/chunks/CZ-6guL7.js","_app/immutable/chunks/7JBUp2hO.js","_app/immutable/chunks/DnGLihJO.js","_app/immutable/entry/app.CYBs6jQH.js","_app/immutable/chunks/7JBUp2hO.js","_app/immutable/chunks/Cqarj2kH.js","_app/immutable/chunks/BUmLmlU1.js","_app/immutable/chunks/5AZUW0v2.js","_app/immutable/chunks/DnGLihJO.js","_app/immutable/chunks/CihZGFGu.js","_app/immutable/chunks/DcLjeWzz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/work/[slug]",
				pattern: /^\/work\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/writing/[slug]",
				pattern: /^\/writing\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
