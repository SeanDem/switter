export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0522ca78.js","app":"_app/immutable/entry/app.1a05f3c4.js","imports":["_app/immutable/entry/start.0522ca78.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/singletons.70da2cfa.js","_app/immutable/entry/app.1a05f3c4.js","_app/immutable/chunks/scheduler.b0fd5642.js","_app/immutable/chunks/index.dd9404fa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
