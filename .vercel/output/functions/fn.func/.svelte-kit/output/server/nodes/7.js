import * as server from '../entries/pages/work/_slug_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.q6oY21t2.js","_app/immutable/chunks/5AZUW0v2.js","_app/immutable/chunks/7JBUp2hO.js","_app/immutable/chunks/C-iQ8rYR.js","_app/immutable/chunks/Cqarj2kH.js","_app/immutable/chunks/BUmLmlU1.js","_app/immutable/chunks/CihZGFGu.js","_app/immutable/chunks/B3cphFVy.js","_app/immutable/chunks/JaIdH9vn.js","_app/immutable/chunks/DcLjeWzz.js","_app/immutable/chunks/Gdhvnlbc.js","_app/immutable/chunks/CB-X3jcv.js","_app/immutable/chunks/jIF-KPZ7.js","_app/immutable/chunks/BKGm_yY-.js"];
export const stylesheets = ["_app/immutable/assets/GotoTop.BV06incR.css","_app/immutable/assets/7.DanVnFWN.css"];
export const fonts = [];
