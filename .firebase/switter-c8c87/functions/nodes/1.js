

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ff8da8f6.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.dd9404fa.js","_app/immutable/chunks/singletons.70da2cfa.js"];
export const stylesheets = [];
export const fonts = [];
