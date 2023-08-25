

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c7e7ccd4.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.57709942.js"];
export const stylesheets = [];
export const fonts = [];
