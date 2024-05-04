import { onRenderHtml } from "../skiviers_frontend/node_modules/vike-vue/dist/renderer/onRenderHtml";
import { i as import_1 } from "./chunks/chunk-OlMhHuCa.js";
import "axios";
import "vue";
import "vue/server-renderer";
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
