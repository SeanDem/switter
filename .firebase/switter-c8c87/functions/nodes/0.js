

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.19e79f5f.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.dd9404fa.js"];
export const stylesheets = [];
export const fonts = [];
