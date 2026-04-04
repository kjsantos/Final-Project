import * as server from '../entries/pages/writing/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/writing/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.DglY8RsJ.js","_app/immutable/chunks/5AZUW0v2.js","_app/immutable/chunks/7JBUp2hO.js","_app/immutable/chunks/C-iQ8rYR.js","_app/immutable/chunks/Cqarj2kH.js","_app/immutable/chunks/BUmLmlU1.js","_app/immutable/chunks/Gdhvnlbc.js","_app/immutable/chunks/jIF-KPZ7.js","_app/immutable/chunks/BKGm_yY-.js","_app/immutable/chunks/DcLjeWzz.js"];
export const stylesheets = ["_app/immutable/assets/9.Do6Gq7vh.css","_app/immutable/assets/app.ClDUIefp.css"];
export const fonts = [];
