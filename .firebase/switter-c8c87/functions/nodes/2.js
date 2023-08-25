

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.954038a7.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.57709942.js","_app/immutable/chunks/layout.7f225832.js"];
export const stylesheets = ["_app/immutable/assets/layout.52e29fe9.css"];
export const fonts = [];
