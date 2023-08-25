import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { L as Layout } from "../../chunks/layout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
