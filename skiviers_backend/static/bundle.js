import { renderToString, renderToNodeStream } from "vue/server-renderer";
import { version, escapeInject, dangerouslySkipEscape } from "vike/server";
import { g as getHeadSetting, c as createVueApp } from "../getHeadSetting-D3fbM4_d.js";
checkVikeVersion();
const onRenderHtml = async (pageContext) => {
  var _a, _b, _c, _d, _e, _f;
  const title = getHeadSetting("title", pageContext);
  const favicon = getHeadSetting("favicon", pageContext);
  const lang = getHeadSetting("lang", pageContext) || "en";
  const titleTag = !title ? "" : escapeInject`<title>${title}</title>`;
  const faviconTag = !favicon ? "" : escapeInject`<link rel="icon" href="${favicon}" />`;
  let pageView = "";
  const fromHtmlRenderer = {};
  if (!!pageContext.Page) {
    const ctxWithApp = await createVueApp(pageContext, true, "Page");
    const { app } = ctxWithApp;
    pageView = !pageContext.config.stream ? dangerouslySkipEscape(await renderToStringWithErrorHandling(app)) : renderToNodeStreamWithErrorHandling(app);
    const pluginContexts = [
      (_b = (_a = pageContext.config).onAfterRenderSSRAppPinia) == null ? void 0 : _b.call(_a, ctxWithApp),
      (_d = (_c = pageContext.config).onAfterRenderSSRAppVueQuery) == null ? void 0 : _d.call(_c, ctxWithApp)
    ];
    Object.assign(fromHtmlRenderer, ...pluginContexts);
    const userFromHtmlRenderer = await ((_f = (_e = pageContext.config).onAfterRenderSSRApp) == null ? void 0 : _f.call(_e, ctxWithApp));
    Object.assign(fromHtmlRenderer, userFromHtmlRenderer);
  }
  let headHtml = "";
  if (pageContext.config.Head) {
    const { app } = await createVueApp(pageContext, true, "Head");
    headHtml = dangerouslySkipEscape(await renderToStringWithErrorHandling(app));
  }
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang='${lang}'>
      <head>
        <meta charset="UTF-8" />
        ${titleTag}
        ${headHtml}
        ${faviconTag}
      </head>
      <body>
        <div id="vue-root">${pageView}</div>
      </body>
      <!-- built with https://github.com/vikejs/vike-vue -->
    </html>`;
  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true,
      fromHtmlRenderer
    }
  };
};
async function renderToStringWithErrorHandling(app) {
  let returned = false;
  let err;
  app.config.errorHandler = (err_) => {
    if (returned) {
      console.error(err_);
    } else {
      err = err_;
    }
  };
  const appHtml = await renderToString(app);
  returned = true;
  if (err)
    throw err;
  return appHtml;
}
function renderToNodeStreamWithErrorHandling(app) {
  let returned = false;
  let err;
  app.config.errorHandler = (err_) => {
    if (returned) {
      console.error(err_);
    } else {
      err = err_;
    }
  };
  const appHtml = renderToNodeStream(app);
  returned = true;
  if (err)
    throw err;
  return appHtml;
}
function checkVikeVersion() {
  if (version) {
    const versionParts = version.split(".").map((s) => parseInt(s, 10));
    if (versionParts[0] > 0)
      return;
    if (versionParts[1] > 4)
      return;
    if (versionParts[2] >= 147)
      return;
  }
  throw new Error("Update Vike to 0.4.147 or above");
}




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
