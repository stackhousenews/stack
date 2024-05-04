import axios from "axios";
import { useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  props: {
    latest_posts: { type: Array, required: true }
  },
  components: {},
  data() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_router_link = resolveComponent("router-link");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_chip = resolveComponent("v-chip");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
  _push(ssrRenderComponent(_component_v_row, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.latest_posts, (post) => {
          _push2(ssrRenderComponent(_component_v_col, {
            key: post.id,
            cols: "12",
            md: "4",
            xl: "4",
            class: "mb-0 mx-auto pb-0 px-1"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_router_link, {
                  to: { name: "postview", params: { id: post.id } }
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card, {
                        class: "mb-1",
                        color: "#DAD4C6",
                        hover: "",
                        height: "100%"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_v_card_text, {
                              class: "pb-0",
                              style: { "font-size": "70%" }
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(post.published)} <!--[-->`);
                                  ssrRenderList(post.tags, (tag) => {
                                    _push6(ssrRenderComponent(_component_v_chip, {
                                      variant: "outlined",
                                      density: "comfortable",
                                      size: "x-small",
                                      class: "ml-2 mt-0 mb-1"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(tag.tag)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(tag.tag), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  });
                                  _push6(`<!--]-->`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(post.published) + " ", 1),
                                    (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (tag) => {
                                      return openBlock(), createBlock(_component_v_chip, {
                                        variant: "outlined",
                                        density: "comfortable",
                                        size: "x-small",
                                        class: "ml-2 mt-0 mb-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(tag.tag), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 256))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_v_card_title, {
                              class: "justify-end mb-1",
                              style: { "line-height": "160%" }
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<span class="d-flex text-wrap mb-1 mr-2" style="${ssrRenderStyle({ "font-family": "'Playfair Display', serif", "font-size": "140%" })}"${_scopeId5}>${ssrInterpolate(post.headline)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: "d-flex text-wrap mb-1 mr-2",
                                      style: { "font-family": "'Playfair Display', serif", "font-size": "140%" }
                                    }, toDisplayString(post.headline), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_v_card_subtitle, { style: { "line-height": "135%" } }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<span class="d-flex text-wrap" style="${ssrRenderStyle({ "font-family": "'Lato', sans-serif", "font-size": "105%" })}"${_scopeId5}>${ssrInterpolate(post.abstract)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: "d-flex text-wrap",
                                      style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                                    }, toDisplayString(post.abstract), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_v_card_text, {
                                class: "pb-0",
                                style: { "font-size": "70%" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(post.published) + " ", 1),
                                  (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (tag) => {
                                    return openBlock(), createBlock(_component_v_chip, {
                                      variant: "outlined",
                                      density: "comfortable",
                                      size: "x-small",
                                      class: "ml-2 mt-0 mb-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tag.tag), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 256))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_title, {
                                class: "justify-end mb-1",
                                style: { "line-height": "160%" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "d-flex text-wrap mb-1 mr-2",
                                    style: { "font-family": "'Playfair Display', serif", "font-size": "140%" }
                                  }, toDisplayString(post.headline), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_subtitle, { style: { "line-height": "135%" } }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "d-flex text-wrap",
                                    style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                                  }, toDisplayString(post.abstract), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card, {
                          class: "mb-1",
                          color: "#DAD4C6",
                          hover: "",
                          height: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_text, {
                              class: "pb-0",
                              style: { "font-size": "70%" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(post.published) + " ", 1),
                                (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (tag) => {
                                  return openBlock(), createBlock(_component_v_chip, {
                                    variant: "outlined",
                                    density: "comfortable",
                                    size: "x-small",
                                    class: "ml-2 mt-0 mb-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tag.tag), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_title, {
                              class: "justify-end mb-1",
                              style: { "line-height": "160%" }
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "d-flex text-wrap mb-1 mr-2",
                                  style: { "font-family": "'Playfair Display', serif", "font-size": "140%" }
                                }, toDisplayString(post.headline), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_subtitle, { style: { "line-height": "135%" } }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "d-flex text-wrap",
                                  style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                                }, toDisplayString(post.abstract), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_router_link, {
                    to: { name: "postview", params: { id: post.id } }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        class: "mb-1",
                        color: "#DAD4C6",
                        hover: "",
                        height: "100%"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, {
                            class: "pb-0",
                            style: { "font-size": "70%" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(post.published) + " ", 1),
                              (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (tag) => {
                                return openBlock(), createBlock(_component_v_chip, {
                                  variant: "outlined",
                                  density: "comfortable",
                                  size: "x-small",
                                  class: "ml-2 mt-0 mb-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tag.tag), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_card_title, {
                            class: "justify-end mb-1",
                            style: { "line-height": "160%" }
                          }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "d-flex text-wrap mb-1 mr-2",
                                style: { "font-family": "'Playfair Display', serif", "font-size": "140%" }
                              }, toDisplayString(post.headline), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_card_subtitle, { style: { "line-height": "135%" } }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "d-flex text-wrap",
                                style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                              }, toDisplayString(post.abstract), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.latest_posts, (post) => {
            return openBlock(), createBlock(_component_v_col, {
              key: post.id,
              cols: "12",
              md: "4",
              xl: "4",
              class: "mb-0 mx-auto pb-0 px-1"
            }, {
              default: withCtx(() => [
                createVNode(_component_router_link, {
                  to: { name: "postview", params: { id: post.id } }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, {
                      class: "mb-1",
                      color: "#DAD4C6",
                      hover: "",
                      height: "100%"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, {
                          class: "pb-0",
                          style: { "font-size": "70%" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(post.published) + " ", 1),
                            (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (tag) => {
                              return openBlock(), createBlock(_component_v_chip, {
                                variant: "outlined",
                                density: "comfortable",
                                size: "x-small",
                                class: "ml-2 mt-0 mb-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag.tag), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_card_title, {
                          class: "justify-end mb-1",
                          style: { "line-height": "160%" }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: "d-flex text-wrap mb-1 mr-2",
                              style: { "font-family": "'Playfair Display', serif", "font-size": "140%" }
                            }, toDisplayString(post.headline), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_card_subtitle, { style: { "line-height": "135%" } }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: "d-flex text-wrap",
                              style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                            }, toDisplayString(post.abstract), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/LatestComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LatestComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "HomeView",
  components: { LatestComponent },
  data() {
    return {
      top_posts: []
    };
  },
  mounted() {
    this.getFeed();
  },
  methods: {
    getFeed() {
      axios.get("/api/posts/news/").then((response) => {
        console.log(response.data);
        this.top_posts = response.data;
      }).catch((error) => {
        console.log("error", error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LatestComponent = resolveComponent("LatestComponent");
  _push(ssrRenderComponent(_component_LatestComponent, mergeProps({ latest_posts: $data.top_posts }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/+Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HomeView
}, Symbol.toStringTag, { value: "Module" }));
export {
  HomeView as H,
  _export_sfc as _,
  import_1 as i
};
