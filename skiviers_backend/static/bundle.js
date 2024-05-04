import { onRenderHtml } from "vike-vue/renderer/onRenderHtml";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./chunks/chunk-yVxbj29m.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1>Welcome</h1> This page is: <ul><li>Rendered to HTML.</li></ul><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/+Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "vike-vue/renderer/onRenderHtml",
    isValueFile: false,
    exportValue: onRenderHtml,
    exportName: "onRenderHtml"
  },
  {
    configName: "Page",
    importPath: "/pages/+Page.vue",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    valueSerialized: '[["fromHtmlRenderer"]]',
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-vue/config", "fileExportPathToShowToUser": ["default", "passToClient"] }]
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
