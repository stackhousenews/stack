import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, createApp } from "vue";
import { defineStore, createPinia } from "pinia";
import axios from "axios";
import { useHead, createHead } from "@unhead/vue";
import VueSocials from "vue-socials";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createRouter, createWebHistory } from "vue-router";
import { _ as _export_sfc, H as HomeView } from "./chunks/chunk-OlMhHuCa.js";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main$8 = {
  name: "PostView",
  components: {},
  watch: {
    post: function(value) {
      useHead({
        title: "Stackhouse News | " + this.post.headline,
        meta: [
          {
            name: "description",
            content: this.post.abstract
          },
          { name: "og:type", content: "website" },
          // Twitter Card
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:site", content: "@StackhouseNews" },
          { name: "twitter:creator", content: "@StackhouseNews" },
          { name: "twitter:title", content: this.post.headline },
          { name: "twitter:description", content: this.post.abstract },
          // image must be an absolute path
          { name: "twitter:image", content: this.post.image },
          // Facebook OpenGraph
          { property: "og:title", content: this.post.headline },
          { property: "og:site_name", content: "Stackhouse News" },
          { property: "og:image", content: this.post.image },
          { property: "og:description", content: this.post.abstract }
        ]
      }), this.shareOptions = {
        url: "https://stackhouse.news/" + this.$route.path,
        text: this.post.headline,
        via: "StackhouseNews"
      };
    }
  },
  data() {
    return {
      shareOptions: {},
      post: null,
      latest_posts: [],
      currentRoute: null
    };
  },
  created() {
    this.currentRoute = this.$route.name;
  },
  mounted() {
    this.getPost();
    this.getLatest();
  },
  methods: {
    getPost() {
      axios.get(`/api/posts/view/${this.$route.params.id}/`).then((response) => {
        console.log("data", response.data);
        this.post = response.data.post;
      }).catch((error) => {
        console.log("error", error);
      });
    },
    getLatest() {
      axios.get("/api/posts/news/").then((response) => {
        console.log(response.data);
        this.latest_posts = response.data.slice(0, 10);
      }).catch((error) => {
        console.log("error", error);
      });
    },
    clickHandler($event) {
      if (!($event.ctrlKey || $event.metaKey) && this.currentRoute === this.to.name) {
        const query = { ...this.$route.query, _: (/* @__PURE__ */ new Date()).getTime() };
        const newRoute = { ...this.$route, query };
        this.$router.replace(newRoute);
      }
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_router_link = resolveComponent("router-link");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_chip = resolveComponent("v-chip");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_s_twitter = resolveComponent("s-twitter");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_v_img = resolveComponent("v-img");
  if ($data.post) {
    _push(ssrRenderComponent(_component_v_row, mergeProps({ dense: "" }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_v_col, {
            cols: "12",
            md: "7"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_router_link, { to: "/" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_btn, {
                        variant: "outlined",
                        size: "small",
                        class: "mb-1 ml-2"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`Home`);
                          } else {
                            return [
                              createTextVNode("Home")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_btn, {
                          variant: "outlined",
                          size: "small",
                          class: "mb-1 ml-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Home")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_card, {
                  color: "transparent",
                  flat: ""
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<!--[-->`);
                            ssrRenderList($data.post.tags, (tag) => {
                              _push5(ssrRenderComponent(_component_v_chip, {
                                color: "blue-grey",
                                density: "comfortable",
                                size: "small",
                                class: "ml-2 mt-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(tag.tag)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(tag.tag), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            });
                            _push5(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList($data.post.tags, (tag) => {
                                return openBlock(), createBlock(_component_v_chip, {
                                  color: "blue-grey",
                                  density: "comfortable",
                                  size: "small",
                                  class: "ml-2 mt-0"
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
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_title, {
                        class: "justify-end mb-2",
                        style: { "line-height": "240%" }
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<span class="d-flex text-wrap" style="${ssrRenderStyle({ "font-family": "'Playfair Display', serif", "font-size": "200%" })}"${_scopeId4}>${ssrInterpolate($data.post.headline)}</span>`);
                          } else {
                            return [
                              createVNode("span", {
                                class: "d-flex text-wrap",
                                style: { "font-family": "'Playfair Display', serif", "font-size": "200%" }
                              }, toDisplayString($data.post.headline), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1 text-caption ml-2" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<span style="${ssrRenderStyle({ "color": "#546E7A" })}"${_scopeId4}>${ssrInterpolate($data.post.published)}</span>`);
                          } else {
                            return [
                              createVNode("span", { style: { "color": "#546E7A" } }, toDisplayString($data.post.published), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_text, { class: "px-0 mb-0 pb-0 ml-2 mt-0 mb-1" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<span class="text-caption"${_scopeId4}>Share: </span>`);
                            _push5(ssrRenderComponent(_component_s_twitter, { "share-options": $data.shareOptions }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_v_btn, {
                                    size: "x-small",
                                    color: "blue-grey-darken-4",
                                    class: "pa-0 mb-1"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_font_awesome_icon, {
                                          icon: "fa-brands fa-x-twitter",
                                          class: "ma-0"
                                        }, null, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_font_awesome_icon, {
                                            icon: "fa-brands fa-x-twitter",
                                            class: "ma-0"
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_v_btn, {
                                      size: "x-small",
                                      color: "blue-grey-darken-4",
                                      class: "pa-0 mb-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_font_awesome_icon, {
                                          icon: "fa-brands fa-x-twitter",
                                          class: "ma-0"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode("span", { class: "text-caption" }, "Share: "),
                              createVNode(_component_s_twitter, { "share-options": $data.shareOptions }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    size: "x-small",
                                    color: "blue-grey-darken-4",
                                    class: "pa-0 mb-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_font_awesome_icon, {
                                        icon: "fa-brands fa-x-twitter",
                                        class: "ma-0"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["share-options"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_img, {
                        class: "mx-2",
                        "aspect-ratio": "16/9",
                        cover: "",
                        src: $data.post.image
                      }, null, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_text, {
                        class: "pl-2",
                        style: { "line-height": "140%" }
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<span class="d-flex text-wrap text-justify" style="${ssrRenderStyle({ "font-family": "'Lato', sans-serif", "font-size": "105%" })}"${_scopeId4}><div${_scopeId4}>${$data.post.body}</div></span>`);
                          } else {
                            return [
                              createVNode("span", {
                                class: "d-flex text-wrap text-justify",
                                style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                              }, [
                                createVNode("div", {
                                  innerHTML: $data.post.body
                                }, null, 8, ["innerHTML"])
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.post.tags, (tag) => {
                              return openBlock(), createBlock(_component_v_chip, {
                                color: "blue-grey",
                                density: "comfortable",
                                size: "small",
                                class: "ml-2 mt-0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(tag.tag), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_title, {
                          class: "justify-end mb-2",
                          style: { "line-height": "240%" }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: "d-flex text-wrap",
                              style: { "font-family": "'Playfair Display', serif", "font-size": "200%" }
                            }, toDisplayString($data.post.headline), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1 text-caption ml-2" }, {
                          default: withCtx(() => [
                            createVNode("span", { style: { "color": "#546E7A" } }, toDisplayString($data.post.published), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 ml-2 mt-0 mb-1" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-caption" }, "Share: "),
                            createVNode(_component_s_twitter, { "share-options": $data.shareOptions }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  size: "x-small",
                                  color: "blue-grey-darken-4",
                                  class: "pa-0 mb-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_font_awesome_icon, {
                                      icon: "fa-brands fa-x-twitter",
                                      class: "ma-0"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["share-options"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_img, {
                          class: "mx-2",
                          "aspect-ratio": "16/9",
                          cover: "",
                          src: $data.post.image
                        }, null, 8, ["src"]),
                        createVNode(_component_v_card_text, {
                          class: "pl-2",
                          style: { "line-height": "140%" }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: "d-flex text-wrap text-justify",
                              style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                            }, [
                              createVNode("div", {
                                innerHTML: $data.post.body
                              }, null, 8, ["innerHTML"])
                            ])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_router_link, { to: "/" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        variant: "outlined",
                        size: "small",
                        class: "mb-1 ml-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Home")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card, {
                    color: "transparent",
                    flat: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.post.tags, (tag) => {
                            return openBlock(), createBlock(_component_v_chip, {
                              color: "blue-grey",
                              density: "comfortable",
                              size: "small",
                              class: "ml-2 mt-0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tag.tag), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 256))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_title, {
                        class: "justify-end mb-2",
                        style: { "line-height": "240%" }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "d-flex text-wrap",
                            style: { "font-family": "'Playfair Display', serif", "font-size": "200%" }
                          }, toDisplayString($data.post.headline), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1 text-caption ml-2" }, {
                        default: withCtx(() => [
                          createVNode("span", { style: { "color": "#546E7A" } }, toDisplayString($data.post.published), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 ml-2 mt-0 mb-1" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-caption" }, "Share: "),
                          createVNode(_component_s_twitter, { "share-options": $data.shareOptions }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                size: "x-small",
                                color: "blue-grey-darken-4",
                                class: "pa-0 mb-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_font_awesome_icon, {
                                    icon: "fa-brands fa-x-twitter",
                                    class: "ma-0"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["share-options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_img, {
                        class: "mx-2",
                        "aspect-ratio": "16/9",
                        cover: "",
                        src: $data.post.image
                      }, null, 8, ["src"]),
                      createVNode(_component_v_card_text, {
                        class: "pl-2",
                        style: { "line-height": "140%" }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "d-flex text-wrap text-justify",
                            style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                          }, [
                            createVNode("div", {
                              innerHTML: $data.post.body
                            }, null, 8, ["innerHTML"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_v_col, {
            cols: "12",
            md: "5"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span style="${ssrRenderStyle({ "font-family": "'Montserrat', sans-serif", "font-weight": "500" })}"${_scopeId2}>LATEST</span><!--[-->`);
                ssrRenderList($data.latest_posts, (post) => {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_router_link, mergeProps(_ctx.$attrs, {
                    to: { name: "postview", params: { id: post.id }, force: true },
                    onClick: $options.clickHandler
                  }), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          class: "mt-2 pb-2",
                          color: "#DAD4C6",
                          hover: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="ml-2 mt-2" style="${ssrRenderStyle({ "font-size": "60%" })}"${_scopeId4}>${ssrInterpolate(post.published)}</div>`);
                              _push5(ssrRenderComponent(_component_v_card_title, {
                                class: "justify-end",
                                style: { "line-height": "90%" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="d-flex text-wrap mb-1 mr-2" style="${ssrRenderStyle({ "font-family": "'Playfair Display', serif", "font-size": "90%" })}"${_scopeId5}>${ssrInterpolate(post.headline)}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", {
                                        class: "d-flex text-wrap mb-1 mr-2",
                                        style: { "font-family": "'Playfair Display', serif", "font-size": "90%" }
                                      }, toDisplayString(post.headline), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", {
                                  class: "ml-2 mt-2",
                                  style: { "font-size": "60%" }
                                }, toDisplayString(post.published), 1),
                                createVNode(_component_v_card_title, {
                                  class: "justify-end",
                                  style: { "line-height": "90%" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: "d-flex text-wrap mb-1 mr-2",
                                      style: { "font-family": "'Playfair Display', serif", "font-size": "90%" }
                                    }, toDisplayString(post.headline), 1)
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
                            class: "mt-2 pb-2",
                            color: "#DAD4C6",
                            hover: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "ml-2 mt-2",
                                style: { "font-size": "60%" }
                              }, toDisplayString(post.published), 1),
                              createVNode(_component_v_card_title, {
                                class: "justify-end",
                                style: { "line-height": "90%" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "d-flex text-wrap mb-1 mr-2",
                                    style: { "font-family": "'Playfair Display', serif", "font-size": "90%" }
                                  }, toDisplayString(post.headline), 1)
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
                  _push3(`</div>`);
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  createVNode("span", { style: { "font-family": "'Montserrat', sans-serif", "font-weight": "500" } }, "LATEST"),
                  (openBlock(true), createBlock(Fragment, null, renderList($data.latest_posts, (post) => {
                    return openBlock(), createBlock("div", null, [
                      createVNode(_component_router_link, mergeProps(_ctx.$attrs, {
                        to: { name: "postview", params: { id: post.id }, force: true },
                        onClick: $options.clickHandler
                      }), {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "mt-2 pb-2",
                            color: "#DAD4C6",
                            hover: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "ml-2 mt-2",
                                style: { "font-size": "60%" }
                              }, toDisplayString(post.published), 1),
                              createVNode(_component_v_card_title, {
                                class: "justify-end",
                                style: { "line-height": "90%" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "d-flex text-wrap mb-1 mr-2",
                                    style: { "font-family": "'Playfair Display', serif", "font-size": "90%" }
                                  }, toDisplayString(post.headline), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1040, ["to", "onClick"])
                    ]);
                  }), 256))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_v_col, {
              cols: "12",
              md: "7"
            }, {
              default: withCtx(() => [
                createVNode(_component_router_link, { to: "/" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      variant: "outlined",
                      size: "small",
                      class: "mb-1 ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Home")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card, {
                  color: "transparent",
                  flat: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.post.tags, (tag) => {
                          return openBlock(), createBlock(_component_v_chip, {
                            color: "blue-grey",
                            density: "comfortable",
                            size: "small",
                            class: "ml-2 mt-0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(tag.tag), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_title, {
                      class: "justify-end mb-2",
                      style: { "line-height": "240%" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "d-flex text-wrap",
                          style: { "font-family": "'Playfair Display', serif", "font-size": "200%" }
                        }, toDisplayString($data.post.headline), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 mt-1 text-caption ml-2" }, {
                      default: withCtx(() => [
                        createVNode("span", { style: { "color": "#546E7A" } }, toDisplayString($data.post.published), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, { class: "px-0 mb-0 pb-0 ml-2 mt-0 mb-1" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-caption" }, "Share: "),
                        createVNode(_component_s_twitter, { "share-options": $data.shareOptions }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              size: "x-small",
                              color: "blue-grey-darken-4",
                              class: "pa-0 mb-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_font_awesome_icon, {
                                  icon: "fa-brands fa-x-twitter",
                                  class: "ma-0"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["share-options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_img, {
                      class: "mx-2",
                      "aspect-ratio": "16/9",
                      cover: "",
                      src: $data.post.image
                    }, null, 8, ["src"]),
                    createVNode(_component_v_card_text, {
                      class: "pl-2",
                      style: { "line-height": "140%" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "d-flex text-wrap text-justify",
                          style: { "font-family": "'Lato', sans-serif", "font-size": "105%" }
                        }, [
                          createVNode("div", {
                            innerHTML: $data.post.body
                          }, null, 8, ["innerHTML"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_col, {
              cols: "12",
              md: "5"
            }, {
              default: withCtx(() => [
                createVNode("span", { style: { "font-family": "'Montserrat', sans-serif", "font-weight": "500" } }, "LATEST"),
                (openBlock(true), createBlock(Fragment, null, renderList($data.latest_posts, (post) => {
                  return openBlock(), createBlock("div", null, [
                    createVNode(_component_router_link, mergeProps(_ctx.$attrs, {
                      to: { name: "postview", params: { id: post.id }, force: true },
                      onClick: $options.clickHandler
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "mt-2 pb-2",
                          color: "#DAD4C6",
                          hover: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "ml-2 mt-2",
                              style: { "font-size": "60%" }
                            }, toDisplayString(post.published), 1),
                            createVNode(_component_v_card_title, {
                              class: "justify-end",
                              style: { "line-height": "90%" }
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "d-flex text-wrap mb-1 mr-2",
                                  style: { "font-family": "'Playfair Display', serif", "font-size": "90%" }
                                }, toDisplayString(post.headline), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1040, ["to", "onClick"])
                  ]);
                }), 256))
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/PostView.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const PostView = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "FeedView",
  components: {},
  data() {
    return {
      posts: [],
      body: ""
    };
  },
  mounted() {
    this.getFeed();
  },
  methods: {
    getFeed() {
      axios.get("/api/posts/").then((response) => {
        console.log("data", response.data);
        this.posts = response.data;
      }).catch((error) => {
        console.log("error", error);
      });
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto grid grid-cols-4 gap-4" }, _attrs))}><div class="main-center col-span-3 space-y-4"><div class="bg-white border border-gray-200 rounded-lg"></div><!--[-->`);
  ssrRenderList($data.posts, (post) => {
    _push(`<div class="p-4 bg-white border border-gray-200 rounded-lg"></div>`);
  });
  _push(`<!--]--></div><div class="main-right col-span-1 space-y-4"></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/FeedView.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FeedView = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "SearchView",
  components: {},
  data() {
    return {
      query: "",
      users: [],
      posts: []
    };
  },
  methods: {
    submitForm() {
      console.log("submitForm", this.query);
      axios.post("/api/search/", {
        query: this.query
      }).then((response) => {
        console.log("response:", response.data);
        this.users = response.data.users;
        this.posts = response.data.posts;
      }).catch((error) => {
        console.log("error:", error);
      });
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_FeedItem = resolveComponent("FeedItem");
  const _component_PeopleYouMayKnow = resolveComponent("PeopleYouMayKnow");
  const _component_Trends = resolveComponent("Trends");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto grid grid-cols-4 gap-4" }, _attrs))}><div class="main-left col-span-3 space-y-4"><div class="bg-white border border-gray-200 rounded-lg"><form class="p-4 flex space-x-4"><input${ssrRenderAttr("value", $data.query)} type="search" class="p-4 w-full bg-gray-100 rounded-lg" placeholder="What are you looking for?"><button class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></button></form></div>`);
  if ($data.users.length) {
    _push(`<div class="p-4 bg-white border border-gray-200 rounded-lg grid grid-cols-4 gap-4"><!--[-->`);
    ssrRenderList($data.users, (user) => {
      _push(`<div class="p-4 text-center bg-gray-100 rounded-lg"><img${ssrRenderAttr("src", user.get_avatar)} class="mb-6 rounded-full"><p><strong>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: { name: "profile", params: { id: user.id } }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(user.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(user.name), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</strong></p><div class="mt-6 flex space-x-8 justify-around"><p class="text-xs text-gray-500">${ssrInterpolate(user.friends_count)} friends</p><p class="text-xs text-gray-500">${ssrInterpolate(user.posts_count)} posts</p></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($data.posts, (post) => {
    _push(`<div class="p-4 bg-white border border-gray-200 rounded-lg">`);
    _push(ssrRenderComponent(_component_FeedItem, { post }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="main-right col-span-1 space-y-4">`);
  _push(ssrRenderComponent(_component_PeopleYouMayKnow, null, null, _parent));
  _push(ssrRenderComponent(_component_Trends, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/SearchView.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SearchView = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      isAuthenticated: false,
      id: null,
      name: null,
      email: null,
      access: null,
      refresh: null,
      avatar: null
    }
  }),
  actions: {
    initStore() {
      console.log("initStore", localStorage.getItem("user.access"));
      if (localStorage.getItem("user.access")) {
        console.log("User has access!");
        this.user.access = localStorage.getItem("user.access");
        this.user.refresh = localStorage.getItem("user.refresh");
        this.user.id = localStorage.getItem("user.id");
        this.user.name = localStorage.getItem("user.name");
        this.user.email = localStorage.getItem("user.email");
        this.user.avatar = localStorage.getItem("user.avatar");
        this.user.isAuthenticated = true;
        this.refreshToken();
        console.log("Initialized user:", this.user);
      }
    },
    setToken(data) {
      console.log("setToken", data);
      this.user.access = data.access;
      this.user.refresh = data.refresh;
      this.user.isAuthenticated = true;
      localStorage.setItem("user.access", data.access);
      localStorage.setItem("user.refresh", data.refresh);
      console.log("user.access: ", localStorage.getItem("user.access"));
    },
    removeToken() {
      console.log("removeToken");
      this.user.refresh = null;
      this.user.access = null;
      this.user.isAuthenticated = false;
      this.user.id = null;
      this.user.name = null;
      this.user.email = null;
      this.user.avatar = null;
      localStorage.setItem("user.access", "");
      localStorage.setItem("user.refresh", "");
      localStorage.setItem("user.id", "");
      localStorage.setItem("user.name", "");
      localStorage.setItem("user.email", "");
      localStorage.setItem("user.avatar", "");
    },
    setUserInfo(user) {
      console.log("setUserInfo", user);
      this.user.id = user.id;
      this.user.name = user.name;
      this.user.email = user.email;
      this.user.avatar = user.avatar;
      localStorage.setItem("user.id", this.user.id);
      localStorage.setItem("user.name", this.user.name);
      localStorage.setItem("user.email", this.user.email);
      localStorage.setItem("user.avatar", this.user.avatar);
      console.log("User", this.user);
    },
    refreshToken() {
      axios.get("/api/is_authenticated/").then((response) => {
        this.user.access = response.data.message;
        localStorage.setItem("user.access", response.data.message);
        axios.defaults.headers.common.Authorization = `Bearer ${response.data.message}`;
      }).catch((error) => {
        console.log(error);
        this.removeToken();
      });
    }
  }
});
const useToastStore = defineStore({
  id: "toast",
  state: () => ({
    ms: 0,
    message: "",
    classes: "",
    isVisible: false
  }),
  actions: {
    showToast(ms, message, classes) {
      this.ms = parseInt(ms);
      this.message = message;
      this.classes = classes;
      this.isVisible = true;
      setTimeout(() => {
        this.classes += " -translate-y-28";
      }, 10);
      setTimeout(() => {
        this.classes = this.classes.replace("-translate-y-28", "");
      }, this.ms - 500);
      setTimeout(() => {
        this.isVisible = false;
      }, this.ms);
    }
  }
});
const _sfc_main$5 = {
  name: "FeedView",
  setup() {
    const userStore = useUserStore();
    const toastStore = useToastStore();
    return {
      userStore,
      toastStore
    };
  },
  components: {},
  data() {
    return {
      posts: [],
      user: {
        id: ""
      },
      can_send_friendship_request: null
    };
  },
  mounted() {
    this.getFeed();
  },
  watch: {
    "$route.params.id": {
      handler() {
        this.getFeed();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    sendDirectMessage() {
      console.log("sendDirectMessage");
      axios.get(`/api/chat/${this.$route.params.id}/get-or-create/`).then((response) => {
        console.log(response.data);
        this.$router.push("/chat");
      }).catch((error) => {
        console.log("error", error);
      });
    },
    sendFriendshipRequest() {
      axios.post(`/api/friends/${this.$route.params.id}/request/`).then((response) => {
        console.log("data", response.data);
        this.can_send_friendship_request = false;
        if (response.data.message === "request already sent") {
          this.toastStore.showToast(
            5e3,
            "The request has already been sent!",
            "bg-red-300"
          );
        } else {
          this.toastStore.showToast(5e3, "The request was sent!", "bg-emerald-300");
        }
      }).catch((error) => {
        console.log("error", error);
      });
    },
    getFeed() {
      axios.get(`/api/posts/profile/${this.$route.params.id}/`).then((response) => {
        console.log("data", response.data);
        this.posts = response.data.posts;
        this.user = response.data.user;
        this.can_send_friendship_request = response.data.can_send_friendship_request;
      }).catch((error) => {
        console.log("error", error);
      });
    },
    logout() {
      console.log("Log out");
      this.userStore.removeToken();
      this.$router.push("/login");
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_FeedForm = resolveComponent("FeedForm");
  const _component_FeedItem = resolveComponent("FeedItem");
  const _component_PeopleYouMayKnow = resolveComponent("PeopleYouMayKnow");
  const _component_Trends = resolveComponent("Trends");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto grid grid-cols-4 gap-4" }, _attrs))}><div class="main-left col-span-1"><div class="p-4 bg-white border border-gray-200 text-center rounded-lg"><img${ssrRenderAttr("src", $data.user.get_avatar)} class="mb-6 rounded-full"><p><strong>${ssrInterpolate($data.user.name)}</strong></p>`);
  if ($data.user.id) {
    _push(`<div class="mt-6 flex space-x-8 justify-around">`);
    _push(ssrRenderComponent(_component_RouterLink, {
      to: { name: "friends", params: { id: $data.user.id } },
      class: "text-xs text-gray-500"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($data.user.friends_count)} friends`);
        } else {
          return [
            createTextVNode(toDisplayString($data.user.friends_count) + " friends", 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<p class="text-xs text-gray-500">${ssrInterpolate($data.user.posts_count)} posts</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="mt-6">`);
  if ($setup.userStore.user.id !== $data.user.id && $data.can_send_friendship_request) {
    _push(`<button class="inline-block py-4 px-3 bg-purple-600 text-xs text-white rounded-lg"> Send friendship request </button>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.userStore.user.id !== $data.user.id) {
    _push(`<button class="inline-block mt-4 py-4 px-3 bg-purple-600 text-xs text-white rounded-lg"> Send direct message </button>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.userStore.user.id === $data.user.id) {
    _push(ssrRenderComponent(_component_RouterLink, {
      class: "inline-block mr-2 py-4 px-3 bg-purple-600 text-xs text-white rounded-lg",
      to: "/profile/edit"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Edit profile `);
        } else {
          return [
            createTextVNode(" Edit profile ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.userStore.user.id === $data.user.id) {
    _push(`<button class="inline-block py-4 px-3 bg-red-600 text-xs text-white rounded-lg"> Log out </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="main-center col-span-2 space-y-4">`);
  if ($setup.userStore.user.id === $data.user.id) {
    _push(`<div class="bg-white border border-gray-200 rounded-lg">`);
    _push(ssrRenderComponent(_component_FeedForm, {
      user: $data.user,
      posts: $data.posts
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($data.posts, (post) => {
    _push(`<div class="p-4 bg-white border border-gray-200 rounded-lg">`);
    _push(ssrRenderComponent(_component_FeedItem, {
      post,
      onDeletePost: $options.deletePost
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="main-right col-span-1 space-y-4">`);
  _push(ssrRenderComponent(_component_PeopleYouMayKnow, null, null, _parent));
  _push(ssrRenderComponent(_component_Trends, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ProfileView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProfileView = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  setup() {
    const toastStore = useToastStore();
    const userStore = useUserStore();
    return {
      toastStore,
      userStore
    };
  },
  data() {
    return {
      form: {
        email: this.userStore.user.email,
        name: this.userStore.user.name
      },
      errors: []
    };
  },
  methods: {
    submitForm() {
      this.errors = [];
      if (this.form.email === "") {
        this.errors.push("Your e-mail is missing");
      }
      if (this.form.name === "") {
        this.errors.push("Your name is missing");
      }
      if (this.errors.length === 0) {
        const formData = new FormData();
        formData.append("avatar", this.$refs.file.files[0]);
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        axios.post("/api/editprofile/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((response) => {
          if (response.data.message === "information updated") {
            this.toastStore.showToast(
              5e3,
              "The information was saved",
              "bg-emerald-500"
            );
            this.userStore.setUserInfo({
              id: this.userStore.user.id,
              name: this.form.name,
              email: this.form.email,
              avatar: response.data.user.get_avatar
            });
            this.$router.back();
          } else {
            this.toastStore.showToast(
              5e3,
              `${response.data.message}. Please try again`,
              "bg-red-300"
            );
          }
        }).catch((error) => {
          console.log("error", error);
        });
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto grid grid-cols-2 gap-4" }, _attrs))}><div class="main-left"><div class="p-12 bg-white border border-gray-200 rounded-lg"><h1 class="mb-6 text-2xl">Edit profile</h1><p class="mb-6 text-gray-500"> Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. </p>`);
  _push(ssrRenderComponent(_component_RouterLink, {
    to: "/profile/edit/password",
    class: "underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Edit password`);
      } else {
        return [
          createTextVNode("Edit password")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="main-right"><div class="p-12 bg-white border border-gray-200 rounded-lg"><form class="space-y-6"><div><label>Name</label><br><input type="text"${ssrRenderAttr("value", $data.form.name)} placeholder="Your full name" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"></div><div><label>E-mail</label><br><input type="email"${ssrRenderAttr("value", $data.form.email)} placeholder="Your e-mail address" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"></div><div><label>Avatar</label><br><input type="file"></div>`);
  if ($data.errors.length > 0) {
    _push(`<div class="bg-red-300 text-white rounded-lg p-6"><!--[-->`);
    ssrRenderList($data.errors, (error) => {
      _push(`<p>${ssrInterpolate(error)}</p>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div><button class="py-4 px-6 bg-purple-600 text-white rounded-lg"> Save changes </button></div></form></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/EditProfileView.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const EditProfileView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  setup() {
    const toastStore = useToastStore();
    const userStore = useUserStore();
    return {
      toastStore,
      userStore
    };
  },
  data() {
    return {
      form: {
        old_password: "",
        new_password1: "",
        new_password2: ""
      },
      errors: []
    };
  },
  methods: {
    submitForm() {
      this.errors = [];
      if (this.form.password1 !== this.form.password2) {
        this.errors.push("The password does not match");
      }
      if (this.errors.length === 0) {
        const formData = new FormData();
        formData.append("old_password", this.form.old_password);
        formData.append("new_password1", this.form.new_password1);
        formData.append("new_password2", this.form.new_password2);
        axios.post("/api/editpassword/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((response) => {
          if (response.data.message === "success") {
            this.toastStore.showToast(
              5e3,
              "The information was saved",
              "bg-emerald-500"
            );
            this.$router.push(`/profile/${this.userStore.user.id}`);
          } else {
            const data = JSON.parse(response.data.message);
            for (const key in data) {
              this.errors.push(data[key][0].message);
            }
          }
        }).catch((error) => {
          console.log("error", error);
        });
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto grid grid-cols-2 gap-4" }, _attrs))}><div class="main-left"><div class="p-12 bg-white border border-gray-200 rounded-lg"><h1 class="mb-6 text-2xl">Edit password</h1><p class="mb-6 text-gray-500">Here you can change your password!</p></div></div><div class="main-right"><div class="p-12 bg-white border border-gray-200 rounded-lg"><form class="space-y-6"><div><label>Old password</label><br><input type="password"${ssrRenderAttr("value", $data.form.old_password)} placeholder="Your old password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"></div><div><label>New password</label><br><input type="password"${ssrRenderAttr("value", $data.form.new_password1)} placeholder="Your new password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"></div><div><label>Repeat password</label><br><input type="password"${ssrRenderAttr("value", $data.form.new_password2)} placeholder="Repeat password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"></div>`);
  if ($data.errors.length > 0) {
    _push(`<div class="bg-red-300 text-white rounded-lg p-6"><!--[-->`);
    ssrRenderList($data.errors, (error) => {
      _push(`<p>${ssrInterpolate(error)}</p>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div><button class="py-4 px-6 bg-purple-600 text-white rounded-lg"> Save changes </button></div></form></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/EditPasswordView.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const EditPasswordView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "NotificationsView",
  data() {
    return {
      notifications: []
    };
  },
  mounted() {
    this.getNotifications();
  },
  methods: {
    getNotifications() {
      axios.get("/api/notifications/").then((response) => {
        console.log(response.data);
        this.notifications = response.data;
      }).catch((error) => {
        console.log("Error: ", error);
      });
    },
    async readNotification(notification) {
      console.log("readNotification", notification.id);
      await axios.post(`/api/notifications/read/${notification.id}/`).then((response) => {
        console.log(response.data);
        if (notification.type_of_notification === "post_like" || notification.type_of_notification === "post_comment") {
          this.$router.push({
            name: "postview",
            params: { id: notification.post_id }
          });
        } else {
          this.$router.push({
            name: "friends",
            params: { id: notification.created_for_id }
          });
        }
      }).catch((error) => {
        console.log("Error: ", error);
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto grid grid-cols-4 gap-4" }, _attrs))}>`);
  if ($data.notifications.length) {
    _push(`<div class="main-center col-span-3 space-y-4"><!--[-->`);
    ssrRenderList($data.notifications, (notification) => {
      _push(`<div class="p-4 bg-white border border-gray-200 rounded-lg">${ssrInterpolate(notification.body)} <button class="underline">Read more</button></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div class="p-4 bg-white border border-gray-200 rounded-lg"> You don&#39;t have any unread notifications! </div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/NotificationsView.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NotificationsView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/feed",
      name: "feed",
      component: FeedView
    },
    {
      path: "/search",
      name: "search",
      component: SearchView
    },
    {
      path: "/feed",
      name: "feed",
      component: FeedView
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: ProfileView
    },
    {
      path: "/profile/edit",
      name: "editprofile",
      component: EditProfileView
    },
    {
      path: "/profile/edit/password",
      name: "editpassword",
      component: EditPasswordView
    },
    {
      path: "/post/:id",
      name: "postview",
      component: PostView
    },
    {
      path: "/notifications",
      name: "notifications",
      component: NotificationsView
    }
  ]
});
const _sfc_main$1 = {
  props: {
    isAuth: { type: Boolean, required: true }
  },
  components: {},
  data() {
    const loginLink = "/accounts/login/";
    const signupLink = "/accounts/signup/";
    const logoutLink = "/accounts/logout/";
    return {
      loginLink,
      signupLink,
      logoutLink
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  if ($props.isAuth) {
    _push(ssrRenderComponent(_component_v_btn, mergeProps({
      size: "x-small",
      class: "text-capitalize mr-2",
      "prepend-icon": "mdi-logout",
      href: $data.logoutLink,
      variant: "outlined"
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Signout`);
        } else {
          return [
            createTextVNode("Signout")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!--[--><div class="text-caption"><a class="text-decoration-underline"${ssrRenderAttr("href", $data.signupLink)}>Signup</a> or <a class="text-decoration-underline"${ssrRenderAttr("href", $data.loginLink)}>Login</a> with: </div>`);
    _push(ssrRenderComponent(_component_v_btn, {
      size: "x-small",
      class: "text-capitalize mr-2 ml-2",
      href: "https://stackhouse.news/accounts/twitter/login/",
      variant: "outlined"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_font_awesome_icon, {
            icon: "fa-brands fa-x-twitter",
            class: "mr-2"
          }, null, _parent2, _scopeId));
          _push2(` X/Twitter`);
        } else {
          return [
            createVNode(_component_font_awesome_icon, {
              icon: "fa-brands fa-x-twitter",
              class: "mr-2"
            }),
            createTextVNode(" X/Twitter")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_v_btn, {
      size: "x-small",
      class: "text-capitalize mr-2",
      "prepend-icon": "mdi-google",
      href: "https://stackhouse.news/accounts/google/login/",
      variant: "outlined"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Google`);
        } else {
          return [
            createTextVNode("Google")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<!--]-->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/App/SystemBarComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SystemBarComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    useHead({
      title: "Stackhouse News | Scaling Truth, Scoping Tomorrow",
      meta: [
        {
          name: "description",
          content: "Stackhouse News | Scaling Truth, Scoping Tomorrow"
        }
      ]
    });
    return {};
  },
  data() {
    return {};
  },
  components: {
    SystemBarComponent
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_toolbar = resolveComponent("v-toolbar");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_RouterView = resolveComponent("RouterView");
  const _component_v_card_text = resolveComponent("v-card-text");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_card, {
    rounded: "0",
    tile: "",
    flat: "",
    color: "#DAD4C6",
    image: "https://images.unsplash.com/photo-1714508862788-44e45c4315d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_toolbar, {
          color: "blue-grey",
          dark: "",
          extended: "",
          "extension-height": "64",
          flat: "",
          rounded: "0",
          tile: "",
          image: "https://images.unsplash.com/photo-1714419991258-7172e140af4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_avatar, {
                class: "ms-2",
                color: "surface-variant",
                size: "32",
                variant: "flat"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "https://stackhouse.s3.us-east-2.amazonaws.com/static/stackhouse_blue.png",
                      alt: "Stackhouse News"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_img, {
                        src: "https://stackhouse.s3.us-east-2.amazonaws.com/static/stackhouse_blue.png",
                        alt: "Stackhouse News"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<a href="#" class="text-3xl ml-2 mr-4" style="${ssrRenderStyle({ "font-family": "'Oswald', serif", "color": "#ffffff" })}"${_scopeId2}>STACKHOUSE</a>`);
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_spacer),
                createVNode(_component_v_avatar, {
                  class: "ms-2",
                  color: "surface-variant",
                  size: "32",
                  variant: "flat"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_img, {
                      src: "https://stackhouse.s3.us-east-2.amazonaws.com/static/stackhouse_blue.png",
                      alt: "Stackhouse News"
                    })
                  ]),
                  _: 1
                }),
                createVNode("a", {
                  href: "#",
                  class: "text-3xl ml-2 mr-4",
                  style: { "font-family": "'Oswald', serif", "color": "#ffffff" }
                }, "STACKHOUSE"),
                createVNode(_component_v_spacer)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card, {
          class: "mx-auto mb-2",
          "max-width": "1300",
          style: { "margin-top": "-64px" },
          tile: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_sheet, {
                color: "#DAD4C6",
                class: "px-4 py-2 pb-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_RouterView, {
                      key: _ctx.$route.fullPath
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      (openBlock(), createBlock(_component_RouterView, {
                        key: _ctx.$route.fullPath
                      }))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_sheet, {
                  color: "#DAD4C6",
                  class: "px-4 py-2 pb-6"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(_component_RouterView, {
                      key: _ctx.$route.fullPath
                    }))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_toolbar, {
            color: "blue-grey",
            dark: "",
            extended: "",
            "extension-height": "64",
            flat: "",
            rounded: "0",
            tile: "",
            image: "https://images.unsplash.com/photo-1714419991258-7172e140af4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_spacer),
              createVNode(_component_v_avatar, {
                class: "ms-2",
                color: "surface-variant",
                size: "32",
                variant: "flat"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    src: "https://stackhouse.s3.us-east-2.amazonaws.com/static/stackhouse_blue.png",
                    alt: "Stackhouse News"
                  })
                ]),
                _: 1
              }),
              createVNode("a", {
                href: "#",
                class: "text-3xl ml-2 mr-4",
                style: { "font-family": "'Oswald', serif", "color": "#ffffff" }
              }, "STACKHOUSE"),
              createVNode(_component_v_spacer)
            ]),
            _: 1
          }),
          createVNode(_component_v_card, {
            class: "mx-auto mb-2",
            "max-width": "1300",
            style: { "margin-top": "-64px" },
            tile: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_sheet, {
                color: "#DAD4C6",
                class: "px-4 py-2 pb-6"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(_component_RouterView, {
                    key: _ctx.$route.fullPath
                  }))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_card, {
    tile: "",
    rounded: "0",
    color: "blue-grey"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_text, { class: "text-center caption" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Stackhouse News 2024 | All Rights Reserved | <a href="https://stackhouse.s3.us-east-2.amazonaws.com/static/terms_of_service.html"${_scopeId2}>Terms of Service</a> | <a href="https://stackhouse.s3.us-east-2.amazonaws.com/static/privacy_policy.html"${_scopeId2}>Privacy Policy</a> | <a href="mailto:contact@stackhouse.news"${_scopeId2}>Contact Us</a>`);
            } else {
              return [
                createTextVNode("Stackhouse News 2024 | All Rights Reserved | "),
                createVNode("a", { href: "https://stackhouse.s3.us-east-2.amazonaws.com/static/terms_of_service.html" }, "Terms of Service"),
                createTextVNode(" | "),
                createVNode("a", { href: "https://stackhouse.s3.us-east-2.amazonaws.com/static/privacy_policy.html" }, "Privacy Policy"),
                createTextVNode(" | "),
                createVNode("a", { href: "mailto:contact@stackhouse.news" }, "Contact Us")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_text, { class: "text-center caption" }, {
            default: withCtx(() => [
              createTextVNode("Stackhouse News 2024 | All Rights Reserved | "),
              createVNode("a", { href: "https://stackhouse.s3.us-east-2.amazonaws.com/static/terms_of_service.html" }, "Terms of Service"),
              createTextVNode(" | "),
              createVNode("a", { href: "https://stackhouse.s3.us-east-2.amazonaws.com/static/privacy_policy.html" }, "Privacy Policy"),
              createTextVNode(" | "),
              createVNode("a", { href: "mailto:contact@stackhouse.news" }, "Contact Us")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const head = createHead();
axios.defaults.baseURL = "http://127.0.0.1:8000";
library.add(faXTwitter);
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives
});
app.use(createPinia());
app.use(router, axios);
app.use(vuetify);
app.use(head);
app.use(VueSocials);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
