// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.7.4.", include: ["/*"], exclude: ["/_next/static/*"] };

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/dctanner/projects/cloudflare-ai/chatcloudflare/.wrangler/tmp/pages-936hpH/bundledWorker-0.246532303095514.mjs";
export * from "/Users/dctanner/projects/cloudflare-ai/chatcloudflare/.wrangler/tmp/pages-936hpH/bundledWorker-0.246532303095514.mjs";
import { isRoutingRuleMatch } from "/Users/dctanner/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-util.ts";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=ozsfqnv9jkj.js.map
