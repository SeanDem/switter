

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f0214783.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.dd9404fa.js"];
export const stylesheets = [];
export const fonts = [];
