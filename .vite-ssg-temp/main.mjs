import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import NProgress from "nprogress";
import { openBlock, createElementBlock, createElementVNode, useSSRContext, defineComponent, mergeProps, unref, resolveComponent, withCtx, withDirectives, createVNode, vShow, computed, onMounted, createTextVNode, ref, watch, createStaticVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import { ViteSSG } from "vite-ssg";
import Typed from "typed.js";
import { WordCloud } from "@antv/g2plot";
import { useDark, isClient, useEventListener, useWindowSize, unrefElement } from "@vueuse/core";
const install$1 = () => {
  dayjs.extend(LocalizedFormat);
};
var __glob_5_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install: install$1
});
const install = ({ isClient: isClient2, router }) => {
  if (isClient2) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
};
var __glob_5_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install
});
var windi = "";
var index$2 = "";
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  d: "M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$e);
}
var __vite_components_0$3 = { render: render$f };
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  d: "M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$d);
}
var __vite_components_1$2 = { render: render$e };
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  d: "M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799c-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131c4.718-.942 7.855-4.492 7.855-10.348c0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645c-.335 1.64-.5 2.352-1.214 3.331c0 7.642-4.697 11.358-9.463 12.309c-3.268.652-8.02-.419-9.382-1.841c.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037c1.158.475 1.442.465 1.973.538z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$c);
}
var __vite_components_2$1 = { render: render$d };
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  d: "M12.344 17.963l-1.688 1.074l-2.131-3.35c-.44 1.402-1.172 2.665-2.139 3.825c-.402.483-.82.918-1.301 1.375c-.155.147-.775.717-.878.82l-1.414-1.414c.139-.139.787-.735.915-.856c.43-.408.795-.79 1.142-1.206c1.266-1.518 2.03-3.21 2.137-5.231H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.857L2.486 8.143c1.395-.838 2.425-2.604 3.038-5.36l1.952.434c-.14.633-.303 1.227-.489 1.783H11.5v2H9v4h2.5v2H9.185l3.159 4.963zm3.838-.07L17.298 17H19V7h-4v10h.736l.446.893zM13 5h8v14h-3l-2.5 2l-1-2H13V5z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$b);
}
var __vite_components_3$1 = { render: render$c };
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  d: "M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$a);
}
var __vite_components_0$2 = { render: render$b };
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  d: "M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$9);
}
var __vite_components_1$1 = { render: render$a };
const isDark = useDark();
function formatDate(d) {
  const date = dayjs(d);
  if (date.year() === dayjs().year())
    return date.format("MMM D");
  return date.format("MMM D, YYYY");
}
const myIntroduce = [
  {
    words: "Hi, I'm GeekEvan.",
    keyword: ["GeekEvan \u{1F44B}"],
    color: ["#7DB9DE"],
    weight: 10
  },
  {
    words: "I'm a student in Chongqing.",
    keyword: ["Student \u{1F468}\u200D\u{1F393}", "Chongqing"],
    color: ["#E03C8A", "#FFB11B"],
    weight: 6
  },
  {
    words: "I'm learning Vue.js and Vite.",
    keyword: ["Vue.js", "Vite\u26A1"],
    color: ["#3eaf7c", "#ba38fe"],
    weight: 7
  },
  {
    words: "Music and movie are my favorite!",
    keyword: ["Music \u{1F3B5}", "Movies \u{1F3A5}"],
    color: ["#B481BB", "#F19483"],
    weight: 6
  },
  {
    words: "I also like math and physics.",
    keyword: ["Math \u{1F4D0}", "Physics \u269B"],
    color: ["#61dafb", "#dd0031"],
    weight: 5
  }
];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ri_moon_line = __vite_components_0$2;
      const _component_ri_sun_line = __vite_components_1$1;
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "select-none",
        title: "Toggle Color Scheme"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ri_moon_line, {
        style: unref(isDark) ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_ri_sun_line, {
        style: !unref(isDark) ? null : { display: "none" }
      }, null, _parent));
      _push(`</a>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ToggleTheme.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var _imports_0 = "/logo-dark.svg";
var _imports_1 = "/logo.svg";
var NavBar_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_ri_article_line = __vite_components_0$3;
      const _component_ri_github_line = __vite_components_1$2;
      const _component_ri_twitter_line = __vite_components_2$1;
      const _component_ri_zhihu_line = __vite_components_3$1;
      const _component_toggle_theme = _sfc_main$e;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-46e51e6e>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "w-10 h-10 absolute lg:fixed m-6 select-none outline-none",
        to: "/",
        focusable: "false"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img style="${ssrRenderStyle(unref(isDark) ? null : { display: "none" })}"${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-46e51e6e${_scopeId}><img style="${ssrRenderStyle(!unref(isDark) ? null : { display: "none" })}"${ssrRenderAttr("src", _imports_1)} alt="logo" data-v-46e51e6e${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("img", {
                src: _imports_0,
                alt: "logo"
              }, null, 512), [
                [vShow, unref(isDark)]
              ]),
              withDirectives(createVNode("img", {
                src: _imports_1,
                alt: "logo"
              }, null, 512), [
                [vShow, !unref(isDark)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav" data-v-46e51e6e><div class="spacer" data-v-46e51e6e></div><div class="right" data-v-46e51e6e>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/posts" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="&lt;md:hidden" data-v-46e51e6e${_scopeId}>Blog</span>`);
            _push2(ssrRenderComponent(_component_ri_article_line, { class: "md:hidden" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "<md:hidden" }, "Blog"),
              createVNode(_component_ri_article_line, { class: "md:hidden" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/geekevan" target="_blank" title="GitHub" data-v-46e51e6e>`);
      _push(ssrRenderComponent(_component_ri_github_line, null, null, _parent));
      _push(`</a><a href="https://twitter.com/_geekevan" target="_blank" title="Twitter" data-v-46e51e6e>`);
      _push(ssrRenderComponent(_component_ri_twitter_line, null, null, _parent));
      _push(`</a><a href="https://www.zhihu.com/people/jsn-23-81" target="_blank" title="ZhiHu" data-v-46e51e6e>`);
      _push(ssrRenderComponent(_component_ri_zhihu_line, null, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_toggle_theme, null, null, _parent));
      _push(`</div></nav></header>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var __vite_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-46e51e6e"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isCenter = computed(() => route.path === "/");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mt-10 mb-6 prose m-auto opacity-70", unref(isCenter) ? "text-center" : ""]
      }, _attrs))}><span class="text-sm"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="${ssrRenderStyle({ "color": "inherit" })}">CC BY-NC-SA 4.0</a> 2022 \xA9 GeekEvan </span></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Footer.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var L2Dwidget_common = {};
/*! https://github.com/xiazeyu/live2d-widget.js built@2019-4-6 09:38:26 */
(function(exports) {
  !function(t, e) {
    for (var i in e)
      t[i] = e[i];
  }(exports, function(t) {
    var e = {};
    function i(r) {
      if (e[r])
        return e[r].exports;
      var o = e[r] = { i: r, l: false, exports: {} };
      return t[r].call(o.exports, o, o.exports, i), o.l = true, o.exports;
    }
    return i.m = t, i.c = e, i.d = function(t2, e2, r) {
      i.o(t2, e2) || Object.defineProperty(t2, e2, { configurable: false, enumerable: true, get: r });
    }, i.n = function(t2) {
      var e2 = t2 && t2.__esModule ? function() {
        return t2.default;
      } : function() {
        return t2;
      };
      return i.d(e2, "a", e2), e2;
    }, i.o = function(t2, e2) {
      return Object.prototype.hasOwnProperty.call(t2, e2);
    }, i.p = "", i(i.s = 8);
  }([function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.L2Dwidget = void 0;
    var r, o = function() {
      function t2(t3, e2) {
        for (var i2 = 0; i2 < e2.length; i2++) {
          var r2 = e2[i2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
        }
      }
      return function(e2, i2, r2) {
        return i2 && t2(e2.prototype, i2), r2 && t2(e2, r2), e2;
      };
    }(), n = i(5), s = (r = n, r && r.__esModule ? r : { default: r }), a = i(1);
    var _ = void 0, h = new (function() {
      function t2() {
        !function(t3, e2) {
          if (!(t3 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), this.eventHandlers = {}, this.config = a.config;
      }
      return o(t2, [{ key: "on", value: function(t3, e2) {
        if (typeof e2 != "function")
          throw new TypeError("Event handler is not a function.");
        return this.eventHandlers[t3] || (this.eventHandlers[t3] = []), this.eventHandlers[t3].push(e2), this;
      } }, { key: "emit", value: function(t3) {
        for (var e2 = arguments.length, i2 = Array(e2 > 1 ? e2 - 1 : 0), r2 = 1; r2 < e2; r2++)
          i2[r2 - 1] = arguments[r2];
        return this.eventHandlers[t3] && this.eventHandlers[t3].forEach(function(t4) {
          typeof t4 == "function" && t4.apply(void 0, i2);
        }), this.eventHandlers["*"] && this.eventHandlers["*"].forEach(function(e3) {
          typeof e3 == "function" && e3.apply(void 0, [t3].concat(i2));
        }), this;
      } }, { key: "init", value: function() {
        var t3 = this, e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (0, a.configApplyer)(e2), this.emit("config", this.config), !a.config.mobile.show && s.default.mobile() || new Promise(function(t4) {
          t4();
        }).then(i.bind(null, 11)).then(function(e3) {
          (_ = e3).theRealInit(t3);
        }).catch(function(t4) {
          console.error(t4);
        });
      } }, { key: "captureFrame", value: function(t3) {
        return _.captureFrame(t3);
      } }, { key: "downloadFrame", value: function() {
        this.captureFrame(function(t3) {
          var e2 = document.createElement("a");
          document.body.appendChild(e2), e2.setAttribute("type", "hidden"), e2.href = t3, e2.download = "live2d.png", e2.click();
        });
      } }]), t2;
    }())();
    e.L2Dwidget = h;
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.config = e.configApplyer = void 0;
    var r = n(i(9)), o = n(i(10));
    function n(t2) {
      return t2 && t2.__esModule ? t2 : { default: t2 };
    }
    var s = {};
    e.configApplyer = function(t2) {
      (0, o.default)(s, t2, r.default);
    }, e.config = s;
  }, function(t, e, i) {
    (function(t2) {
      Object.defineProperty(e, "__esModule", { value: true });
      var i2 = true;
      function r() {
        i2 || (this._$MT = null, this._$5S = null, this._$NP = 0, r._$42++, this._$5S = new U(this));
      }
      r._$0s = 1, r._$4s = 2, r._$42 = 0, r._$62 = function(t3, e2) {
        try {
          if (e2 instanceof ArrayBuffer && (e2 = new DataView(e2)), !(e2 instanceof DataView))
            throw new ht("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
          var i3, o2 = new vt(e2), n2 = o2._$ST(), s2 = o2._$ST(), _2 = o2._$ST();
          if (n2 != 109 || s2 != 111 || _2 != 99)
            throw new ht("_$gi _$C _$li , _$Q0 _$P0.");
          if (i3 = o2._$ST(), o2._$gr(i3), i3 > G._$T7) {
            t3._$NP |= r._$4s;
            throw new ht("_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + G._$T7 + " < _$f0 : " + i3 + " )@_$SS#loadModel()\n");
          }
          var h2 = o2._$nP();
          if (i3 >= G._$s7) {
            var l2 = o2._$9T(), $2 = o2._$9T();
            if (l2 != -30584 || $2 != -30584)
              throw t3._$NP |= r._$0s, new ht("_$gi _$C _$li , _$0 _$6 _$Ui.");
          }
          t3._$KS(h2);
          var u2 = t3.getModelContext();
          u2.setDrawParam(t3.getDrawParam()), u2.init();
        } catch (t4) {
          a._$Rb(t4);
        }
      }, r.prototype._$KS = function(t3) {
        this._$MT = t3;
      }, r.prototype.getModelImpl = function() {
        return this._$MT == null && (this._$MT = new $(), this._$MT._$zP()), this._$MT;
      }, r.prototype.getCanvasWidth = function() {
        return this._$MT == null ? 0 : this._$MT.getCanvasWidth();
      }, r.prototype.getCanvasHeight = function() {
        return this._$MT == null ? 0 : this._$MT.getCanvasHeight();
      }, r.prototype.getParamFloat = function(t3) {
        return typeof t3 != "number" && (t3 = this._$5S.getParamIndex(l.getID(t3))), this._$5S.getParamFloat(t3);
      }, r.prototype.setParamFloat = function(t3, e2, i3) {
        typeof t3 != "number" && (t3 = this._$5S.getParamIndex(l.getID(t3))), arguments.length < 3 && (i3 = 1), this._$5S.setParamFloat(t3, this._$5S.getParamFloat(t3) * (1 - i3) + e2 * i3);
      }, r.prototype.addToParamFloat = function(t3, e2, i3) {
        typeof t3 != "number" && (t3 = this._$5S.getParamIndex(l.getID(t3))), arguments.length < 3 && (i3 = 1), this._$5S.setParamFloat(t3, this._$5S.getParamFloat(t3) + e2 * i3);
      }, r.prototype.multParamFloat = function(t3, e2, i3) {
        typeof t3 != "number" && (t3 = this._$5S.getParamIndex(l.getID(t3))), arguments.length < 3 && (i3 = 1), this._$5S.setParamFloat(t3, this._$5S.getParamFloat(t3) * (1 + (e2 - 1) * i3));
      }, r.prototype.getParamIndex = function(t3) {
        return this._$5S.getParamIndex(l.getID(t3));
      }, r.prototype.loadParam = function() {
        this._$5S.loadParam();
      }, r.prototype.saveParam = function() {
        this._$5S.saveParam();
      }, r.prototype.init = function() {
        this._$5S.init();
      }, r.prototype.update = function() {
        this._$5S.update();
      }, r.prototype._$Rs = function() {
        return a._$li("_$60 _$PT _$Rs()"), -1;
      }, r.prototype._$Ds = function(t3) {
        a._$li("_$60 _$PT _$SS#_$Ds() \n");
      }, r.prototype._$K2 = function() {
      }, r.prototype.draw = function() {
      }, r.prototype.getModelContext = function() {
        return this._$5S;
      }, r.prototype._$s2 = function() {
        return this._$NP;
      }, r.prototype._$P7 = function(t3, e2, i3, r2) {
        var o2 = -1, n2 = 0;
        if (i3 != 0)
          if (t3.length == 1) {
            u2 = t3[0];
            var s2 = this.getParamFloat(u2) != 0, a2 = (p2 = e2[0], this.getPartsOpacity(p2)), _2 = i3 / r2;
            s2 ? (a2 += _2) > 1 && (a2 = 1) : (a2 -= _2) < 0 && (a2 = 0), this.setPartsOpacity(p2, a2);
          } else {
            for ($2 = 0; $2 < t3.length; $2++) {
              u2 = t3[$2];
              if (c2 = this.getParamFloat(u2) != 0) {
                if (o2 >= 0)
                  break;
                o2 = $2;
                p2 = e2[$2];
                n2 = this.getPartsOpacity(p2), (n2 += i3 / r2) > 1 && (n2 = 1);
              }
            }
            o2 < 0 && (console.log("No _$wi _$q0/ _$U default[%s]", t3[0]), o2 = 0, n2 = 1, this.loadParam(), this.setParamFloat(t3[o2], n2), this.saveParam());
            for ($2 = 0; $2 < t3.length; $2++) {
              p2 = e2[$2];
              if (o2 == $2)
                this.setPartsOpacity(p2, n2);
              else {
                var h2, l2 = this.getPartsOpacity(p2);
                (1 - (h2 = n2 < 0.5 ? -0.5 * n2 / 0.5 + 1 : 0.5 * (1 - n2) / 0.5)) * (1 - n2) > 0.15 && (h2 = 1 - 0.15 / (1 - n2)), l2 > h2 && (l2 = h2), this.setPartsOpacity(p2, l2);
              }
            }
          }
        else
          for (var $2 = 0; $2 < t3.length; $2++) {
            var u2 = t3[$2], p2 = e2[$2], c2 = this.getParamFloat(u2) != 0;
            this.setPartsOpacity(p2, c2 ? 1 : 0);
          }
      }, r.prototype.setPartsOpacity = function(t3, e2) {
        typeof t3 != "number" && (t3 = this._$5S.getPartsDataIndex(h.getID(t3))), this._$5S.setPartsOpacity(t3, e2);
      }, r.prototype.getPartsDataIndex = function(t3) {
        return t3 instanceof h || (t3 = h.getID(t3)), this._$5S.getPartsDataIndex(t3);
      }, r.prototype.getPartsOpacity = function(t3) {
        return typeof t3 != "number" && (t3 = this._$5S.getPartsDataIndex(h.getID(t3))), t3 < 0 ? 0 : this._$5S.getPartsOpacity(t3);
      }, r.prototype.getDrawParam = function() {
      }, r.prototype.getDrawDataIndex = function(t3) {
        return this._$5S.getDrawDataIndex(D.getID(t3));
      }, r.prototype.getDrawData = function(t3) {
        return this._$5S.getDrawData(t3);
      }, r.prototype.getTransformedPoints = function(t3) {
        var e2 = this._$5S._$C2(t3);
        return e2 instanceof $t ? e2.getTransformedPoints() : null;
      }, r.prototype.getIndexArray = function(t3) {
        if (t3 < 0 || t3 >= this._$5S._$aS.length)
          return null;
        var e2 = this._$5S._$aS[t3];
        return e2 != null && e2.getType() == W._$wb && e2 instanceof lt ? e2.getIndexArray() : null;
      };
      function o(t3) {
        if (!i2) {
          this.clipContextList = new Array(), this.glcontext = t3.gl, this.dp_webgl = t3, this.curFrameNo = 0, this.firstError_clipInNotUpdate = true, this.colorBuffer = 0, this.isInitGLFBFunc = false, this.tmpBoundsOnModel = new v(), at.glContext.length > at.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()), this.tmpModelToViewMatrix = new O(), this.tmpMatrix2 = new O(), this.tmpMatrixForMask = new O(), this.tmpMatrixForDraw = new O(), this.CHANNEL_COLORS = new Array();
          var e2 = new w();
          (e2 = new w()).r = 0, e2.g = 0, e2.b = 0, e2.a = 1, this.CHANNEL_COLORS.push(e2), (e2 = new w()).r = 1, e2.g = 0, e2.b = 0, e2.a = 0, this.CHANNEL_COLORS.push(e2), (e2 = new w()).r = 0, e2.g = 1, e2.b = 0, e2.a = 0, this.CHANNEL_COLORS.push(e2), (e2 = new w()).r = 0, e2.g = 0, e2.b = 1, e2.a = 0, this.CHANNEL_COLORS.push(e2);
          for (var r2 = 0; r2 < this.CHANNEL_COLORS.length; r2++)
            this.dp_webgl.setChannelFlagAsColor(r2, this.CHANNEL_COLORS[r2]);
        }
      }
      o.CHANNEL_COUNT = 4, o.RENDER_TEXTURE_USE_MIPMAP = false, o.NOT_USED_FRAME = -100, o.prototype._$L7 = function() {
        if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 = null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) {
          for (var t3 = this.CHANNEL_COLORS.length - 1; t3 >= 0; --t3)
            this.CHANNEL_COLORS.splice(t3, 1);
          this.CHANNEL_COLORS = [];
        }
        this.releaseShader();
      }, o.prototype.releaseShader = function() {
        for (var t3 = at.frameBuffers.length, e2 = 0; e2 < t3; e2++)
          this.gl.deleteFramebuffer(at.frameBuffers[e2].framebuffer);
        at.frameBuffers = [], at.glContext = [];
      }, o.prototype.init = function(t3, e2, i3) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var o2 = e2[r2].getClipIDList();
          if (o2 != null) {
            var s2 = this.findSameClip(o2);
            s2 == null && (s2 = new n(this, t3, o2), this.clipContextList.push(s2));
            var a2 = e2[r2].getDrawDataID(), _2 = t3.getDrawDataIndex(a2);
            s2.addClippedDrawData(a2, _2);
            i3[r2].clipBufPre_clipContext = s2;
          }
        }
      }, o.prototype.getMaskRenderTexture = function() {
        var t3 = null;
        return t3 = this.dp_webgl.createFramebuffer(), at.frameBuffers[this.dp_webgl.glno] = t3, this.dp_webgl.glno;
      }, o.prototype.setupClip = function(t3, e2) {
        for (var i3 = 0, r2 = 0; r2 < this.clipContextList.length; r2++) {
          var o2 = this.clipContextList[r2];
          this.calcClippedDrawTotalBounds(t3, o2), o2.isUsing && i3++;
        }
        if (i3 > 0) {
          var n2 = e2.gl.getParameter(e2.gl.FRAMEBUFFER_BINDING), s2 = new Array(4);
          s2[0] = 0, s2[1] = 0, s2[2] = e2.gl.canvas.width, s2[3] = e2.gl.canvas.height, e2.gl.viewport(0, 0, at.clippingMaskBufferSize, at.clippingMaskBufferSize), this.setupLayoutBounds(i3), e2.gl.bindFramebuffer(e2.gl.FRAMEBUFFER, at.frameBuffers[this.curFrameNo].framebuffer), e2.gl.clearColor(0, 0, 0, 0), e2.gl.clear(e2.gl.COLOR_BUFFER_BIT);
          for (r2 = 0; r2 < this.clipContextList.length; r2++) {
            var a2 = (o2 = this.clipContextList[r2]).allClippedDrawRect, _2 = (o2.layoutChannelNo, o2.layoutBounds);
            this.tmpBoundsOnModel._$jL(a2), this.tmpBoundsOnModel.expand(0.05 * a2.width, 0.05 * a2.height);
            var h2 = _2.width / this.tmpBoundsOnModel.width, l2 = _2.height / this.tmpBoundsOnModel.height;
            this.tmpMatrix2.identity(), this.tmpMatrix2.translate(-1, -1, 0), this.tmpMatrix2.scale(2, 2, 1), this.tmpMatrix2.translate(_2.x, _2.y, 0), this.tmpMatrix2.scale(h2, l2, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m), this.tmpMatrix2.identity(), this.tmpMatrix2.translate(_2.x, _2.y, 0), this.tmpMatrix2.scale(h2, l2, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
            for (var $2 = this.tmpMatrixForMask.getArray(), u2 = 0; u2 < 16; u2++)
              o2.matrixForMask[u2] = $2[u2];
            var p2 = this.tmpMatrixForDraw.getArray();
            for (u2 = 0; u2 < 16; u2++)
              o2.matrixForDraw[u2] = p2[u2];
            for (var c2 = o2.clippingMaskDrawIndexList.length, f2 = 0; f2 < c2; f2++) {
              var d2 = o2.clippingMaskDrawIndexList[f2], g2 = t3.getDrawData(d2), y2 = t3._$C2(d2);
              e2.setClipBufPre_clipContextForMask(o2), g2.draw(e2, t3, y2);
            }
          }
          e2.gl.bindFramebuffer(e2.gl.FRAMEBUFFER, n2), e2.setClipBufPre_clipContextForMask(null), e2.gl.viewport(s2[0], s2[1], s2[2], s2[3]);
        }
      }, o.prototype.getColorBuffer = function() {
        return this.colorBuffer;
      }, o.prototype.findSameClip = function(t3) {
        for (var e2 = 0; e2 < this.clipContextList.length; e2++) {
          var i3 = this.clipContextList[e2], r2 = i3.clipIDList.length;
          if (r2 == t3.length) {
            for (var o2 = 0, n2 = 0; n2 < r2; n2++)
              for (var s2 = i3.clipIDList[n2], a2 = 0; a2 < r2; a2++)
                if (t3[a2] == s2) {
                  o2++;
                  break;
                }
            if (o2 == r2)
              return i3;
          }
        }
        return null;
      }, o.prototype.calcClippedDrawTotalBounds = function(t3, e2) {
        for (var i3 = t3._$Ri.getModelImpl().getCanvasWidth(), r2 = t3._$Ri.getModelImpl().getCanvasHeight(), o2 = i3 > r2 ? i3 : r2, n2 = o2, s2 = o2, a2 = 0, _2 = 0, h2 = e2.clippedDrawContextList.length, l2 = 0; l2 < h2; l2++) {
          var $2 = e2.clippedDrawContextList[l2].drawDataIndex, u2 = t3._$C2($2);
          if (u2._$yo()) {
            for (var p2 = u2.getTransformedPoints(), c2 = p2.length, f2 = [], d2 = [], g2 = 0, y2 = B._$i2; y2 < c2; y2 += B._$No)
              f2[g2] = p2[y2], d2[g2] = p2[y2 + 1], g2++;
            var m2 = Math.min.apply(null, f2), T2 = Math.min.apply(null, d2), v2 = Math.max.apply(null, f2), P2 = Math.max.apply(null, d2);
            m2 < n2 && (n2 = m2), T2 < s2 && (s2 = T2), v2 > a2 && (a2 = v2), P2 > _2 && (_2 = P2);
          }
        }
        if (n2 == o2)
          e2.allClippedDrawRect.x = 0, e2.allClippedDrawRect.y = 0, e2.allClippedDrawRect.width = 0, e2.allClippedDrawRect.height = 0, e2.isUsing = false;
        else {
          var S2 = a2 - n2, L2 = _2 - s2;
          e2.allClippedDrawRect.x = n2, e2.allClippedDrawRect.y = s2, e2.allClippedDrawRect.width = S2, e2.allClippedDrawRect.height = L2, e2.isUsing = true;
        }
      }, o.prototype.setupLayoutBounds = function(t3) {
        var e2 = t3 / o.CHANNEL_COUNT, i3 = t3 % o.CHANNEL_COUNT;
        e2 = ~~e2, i3 = ~~i3;
        for (var r2 = 0, n2 = 0; n2 < o.CHANNEL_COUNT; n2++) {
          var s2 = e2 + (n2 < i3 ? 1 : 0);
          if (s2 == 0)
            ;
          else if (s2 == 1) {
            ($2 = this.clipContextList[r2++]).layoutChannelNo = n2, $2.layoutBounds.x = 0, $2.layoutBounds.y = 0, $2.layoutBounds.width = 1, $2.layoutBounds.height = 1;
          } else if (s2 == 2)
            for (var _2 = 0; _2 < s2; _2++) {
              var h2 = 0;
              l2 = ~~(l2 = _2 % 2);
              ($2 = this.clipContextList[r2++]).layoutChannelNo = n2, $2.layoutBounds.x = 0.5 * l2, $2.layoutBounds.y = 0, $2.layoutBounds.width = 0.5, $2.layoutBounds.height = 1;
            }
          else if (s2 <= 4)
            for (_2 = 0; _2 < s2; _2++) {
              l2 = ~~(l2 = _2 % 2), h2 = ~~(h2 = _2 / 2);
              ($2 = this.clipContextList[r2++]).layoutChannelNo = n2, $2.layoutBounds.x = 0.5 * l2, $2.layoutBounds.y = 0.5 * h2, $2.layoutBounds.width = 0.5, $2.layoutBounds.height = 0.5;
            }
          else if (s2 <= 9)
            for (_2 = 0; _2 < s2; _2++) {
              var l2;
              l2 = ~~(l2 = _2 % 3), h2 = ~~(h2 = _2 / 3);
              var $2;
              ($2 = this.clipContextList[r2++]).layoutChannelNo = n2, $2.layoutBounds.x = l2 / 3, $2.layoutBounds.y = h2 / 3, $2.layoutBounds.width = 1 / 3, $2.layoutBounds.height = 1 / 3;
            }
          else
            a._$li("_$6 _$0P mask count : %d", s2);
        }
      };
      function n(t3, e2, i3) {
        this.clipIDList = new Array(), this.clipIDList = i3, this.clippingMaskDrawIndexList = new Array();
        for (var r2 = 0; r2 < i3.length; r2++)
          this.clippingMaskDrawIndexList.push(e2.getDrawDataIndex(i3[r2]));
        this.clippedDrawContextList = new Array(), this.isUsing = true, this.layoutChannelNo = 0, this.layoutBounds = new v(), this.allClippedDrawRect = new v(), this.matrixForMask = new Float32Array(16), this.matrixForDraw = new Float32Array(16), this.owner = t3;
      }
      n.prototype.addClippedDrawData = function(t3, e2) {
        var i3 = new function(t4, e3) {
          this._$gP = t4, this.drawDataIndex = e3;
        }(t3, e2);
        this.clippedDrawContextList.push(i3);
      };
      function s() {
        i2 || (this._$dP = null, this._$eo = null, this._$V0 = null, this._$dP = 1e3, this._$eo = 1e3, this._$V0 = 1, this._$a0());
      }
      s._$JT = function(t3, e2, i3) {
        var r2 = t3 / e2, o2 = i3 / e2, n2 = 1 - (1 - o2) * (1 - o2), s2 = 1 - (1 - o2) * (1 - o2), a2 = 1 / 3 * (1 - o2) * n2 + (o2 * (2 / 3) + 1 / 3 * (1 - o2)) * (1 - n2), _2 = (o2 + 2 / 3 * (1 - o2)) * s2 + (o2 * (1 / 3) + 2 / 3 * (1 - o2)) * (1 - s2), h2 = 1 - 3 * _2 + 3 * a2 - 0, l2 = 3 * _2 - 6 * a2 + 0, $2 = 3 * a2 - 0;
        if (r2 <= 0)
          return 0;
        if (r2 >= 1)
          return 1;
        var u2 = r2 * r2;
        return h2 * (r2 * u2) + l2 * u2 + $2 * r2 + 0;
      }, s.prototype._$a0 = function() {
      }, s.prototype.setFadeIn = function(t3) {
        this._$dP = t3;
      }, s.prototype.setFadeOut = function(t3) {
        this._$eo = t3;
      }, s.prototype._$pT = function(t3) {
        this._$V0 = t3;
      }, s.prototype.getFadeOut = function() {
        return this._$eo;
      }, s.prototype._$4T = function() {
        return this._$eo;
      }, s.prototype._$mT = function() {
        return this._$V0;
      }, s.prototype.getDurationMSec = function() {
        return -1;
      }, s.prototype.getLoopDurationMSec = function() {
        return -1;
      }, s.prototype.updateParam = function(t3, e2) {
        if (e2._$AT && !e2._$9L) {
          var i3 = x.getUserTimeMSec();
          if (e2._$z2 < 0) {
            e2._$z2 = i3, e2._$bs = i3;
            var r2 = this.getDurationMSec();
            e2._$Do < 0 && (e2._$Do = r2 <= 0 ? -1 : e2._$z2 + r2);
          }
          var o2 = this._$V0;
          0 <= (o2 = o2 * (this._$dP == 0 ? 1 : _t._$r2((i3 - e2._$bs) / this._$dP)) * (this._$eo == 0 || e2._$Do < 0 ? 1 : _t._$r2((e2._$Do - i3) / this._$eo))) && o2 <= 1 || console.log("### assert!! ### "), this.updateParamExe(t3, i3, o2, e2), e2._$Do > 0 && e2._$Do < i3 && (e2._$9L = true);
        }
      }, s.prototype.updateParamExe = function(t3, e2, i3, r2) {
      };
      function a() {
      }
      a._$8s = 0, a._$fT = new Object(), a.start = function(t3) {
        var e2 = a._$fT[t3];
        e2 == null && ((e2 = new function() {
          this._$r = null, this._$0S = null;
        }())._$r = t3, a._$fT[t3] = e2), e2._$0S = x.getSystemTimeMSec();
      }, a.dump = function(t3) {
        var e2 = a._$fT[t3];
        if (e2 != null) {
          var i3 = x.getSystemTimeMSec() - e2._$0S;
          return console.log(t3 + " : " + i3 + "ms"), i3;
        }
        return -1;
      }, a.end = function(t3) {
        var e2 = a._$fT[t3];
        if (e2 != null) {
          return x.getSystemTimeMSec() - e2._$0S;
        }
        return -1;
      }, a._$li = function(t3, e2) {
        console.log("_$li : " + t3 + "\n", e2);
      }, a._$Ji = function(t3, e2) {
        console.log(t3, e2);
      }, a._$dL = function(t3, e2) {
        console.log(t3, e2), console.log("\n");
      }, a._$KL = function(t3, e2) {
        for (var i3 = 0; i3 < e2; i3++)
          i3 % 16 == 0 && i3 > 0 ? console.log("\n") : i3 % 8 == 0 && i3 > 0 && console.log("  "), console.log("%02X ", 255 & t3[i3]);
        console.log("\n");
      }, a._$nr = function(t3, e2, i3) {
        console.log("%s\n", t3);
        for (var r2 = e2.length, o2 = 0; o2 < r2; ++o2)
          console.log("%5d", e2[o2]), console.log("%s\n", i3), console.log(",");
        console.log("\n");
      }, a._$Rb = function(t3) {
        console.log("dump exception : " + t3), console.log("stack :: " + t3.stack);
      };
      function _() {
        i2 || (this.x = null, this.y = null, this.width = null, this.height = null);
      }
      _.prototype._$8P = function() {
        return 0.5 * (this.x + this.x + this.width);
      }, _.prototype._$6P = function() {
        return 0.5 * (this.y + this.y + this.height);
      }, _.prototype._$EL = function() {
        return this.x + this.width;
      }, _.prototype._$5T = function() {
        return this.y + this.height;
      }, _.prototype._$jL = function(t3, e2, i3, r2) {
        this.x = t3, this.y = e2, this.width = i3, this.height = r2;
      }, _.prototype._$jL = function(t3) {
        this.x = t3.x, this.y = t3.y, this.width = t3.width, this.height = t3.height;
      };
      function h(t3) {
        i2 || it.prototype.constructor.call(this, t3);
      }
      h.prototype = new it(), h._$tP = new Object(), h._$27 = function() {
        h._$tP.clear();
      }, h.getID = function(t3) {
        var e2 = h._$tP[t3];
        return e2 == null && (e2 = new h(t3), h._$tP[t3] = e2), e2;
      }, h.prototype._$3s = function() {
        return new h();
      };
      function l(t3) {
        i2 || it.prototype.constructor.call(this, t3);
      }
      l.prototype = new it(), l._$tP = new Object(), l._$27 = function() {
        l._$tP.clear();
      }, l.getID = function(t3) {
        var e2 = l._$tP[t3];
        return e2 == null && (e2 = new l(t3), l._$tP[t3] = e2), e2;
      }, l.prototype._$3s = function() {
        return new l();
      };
      function $() {
        i2 || (this._$vo = null, this._$F2 = null, this._$ao = 400, this._$1S = 400, $._$42++);
      }
      $._$42 = 0, $.prototype._$zP = function() {
        this._$vo == null && (this._$vo = new rt()), this._$F2 == null && (this._$F2 = new Array());
      }, $.prototype.getCanvasWidth = function() {
        return this._$ao;
      }, $.prototype.getCanvasHeight = function() {
        return this._$1S;
      }, $.prototype._$F0 = function(t3) {
        this._$vo = t3._$nP(), this._$F2 = t3._$nP(), this._$ao = t3._$6L(), this._$1S = t3._$6L();
      }, $.prototype._$6S = function(t3) {
        this._$F2.push(t3);
      }, $.prototype._$Xr = function() {
        return this._$F2;
      }, $.prototype._$E2 = function() {
        return this._$vo;
      };
      function u() {
        i2 || (this.p1 = new p(), this.p2 = new p(), this._$Fo = 0, this._$Db = 0, this._$L2 = 0, this._$M2 = 0, this._$ks = 0, this._$9b = 0, this._$iP = 0, this._$iT = 0, this._$lL = new Array(), this._$qP = new Array(), this.setup(0.3, 0.5, 0.1));
      }
      u.prototype.setup = function(t3, e2, i3) {
        this._$ks = this._$Yb(), this.p2._$xT(), arguments.length == 3 && (this._$Fo = t3, this._$L2 = e2, this.p1._$p = i3, this.p2._$p = i3, this.p2.y = t3, this.setup());
      }, u.prototype.getPhysicsPoint1 = function() {
        return this.p1;
      }, u.prototype.getPhysicsPoint2 = function() {
        return this.p2;
      }, u.prototype._$qr = function() {
        return this._$Db;
      }, u.prototype._$pr = function(t3) {
        this._$Db = t3;
      }, u.prototype._$5r = function() {
        return this._$M2;
      }, u.prototype._$Cs = function() {
        return this._$9b;
      }, u.prototype._$Yb = function() {
        return -180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI;
      }, u.prototype.addSrcParam = function(t3, e2, i3, r2) {
        var o2 = new f(t3, e2, i3, r2);
        this._$lL.push(o2);
      }, u.prototype.addTargetParam = function(t3, e2, i3, r2) {
        var o2 = new g(t3, e2, i3, r2);
        this._$qP.push(o2);
      }, u.prototype.update = function(t3, e2) {
        if (this._$iP == 0)
          return this._$iP = this._$iT = e2, void (this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
        var i3 = (e2 - this._$iT) / 1e3;
        if (i3 != 0) {
          for (var r2 = this._$lL.length - 1; r2 >= 0; --r2) {
            this._$lL[r2]._$oP(t3, this);
          }
          this._$oo(t3, i3), this._$M2 = this._$Yb(), this._$9b = (this._$M2 - this._$ks) / i3, this._$ks = this._$M2;
        }
        for (r2 = this._$qP.length - 1; r2 >= 0; --r2) {
          this._$qP[r2]._$YS(t3, this);
        }
        this._$iT = e2;
      }, u.prototype._$oo = function(t3, e2) {
        e2 < 0.033 && (e2 = 0.033);
        var i3 = 1 / e2;
        this.p1.vx = (this.p1.x - this.p1._$s0) * i3, this.p1.vy = (this.p1.y - this.p1._$70) * i3, this.p1.ax = (this.p1.vx - this.p1._$7L) * i3, this.p1.ay = (this.p1.vy - this.p1._$HL) * i3, this.p1.fx = this.p1.ax * this.p1._$p, this.p1.fy = this.p1.ay * this.p1._$p, this.p1._$xT();
        var r2, o2, n2 = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x), s2 = Math.cos(n2), a2 = Math.sin(n2), _2 = 9.8 * this.p2._$p, h2 = this._$Db * St._$bS, l2 = _2 * Math.cos(n2 - h2);
        r2 = l2 * a2, o2 = l2 * s2;
        var $2 = -this.p1.fx * a2 * a2, u2 = -this.p1.fy * a2 * s2, p2 = -this.p2.vx * this._$L2, c2 = -this.p2.vy * this._$L2;
        this.p2.fx = r2 + $2 + p2, this.p2.fy = o2 + u2 + c2, this.p2.ax = this.p2.fx / this.p2._$p, this.p2.ay = this.p2.fy / this.p2._$p, this.p2.vx += this.p2.ax * e2, this.p2.vy += this.p2.ay * e2, this.p2.x += this.p2.vx * e2, this.p2.y += this.p2.vy * e2;
        var f2 = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
        this.p2.x = this.p1.x + this._$Fo * (this.p2.x - this.p1.x) / f2, this.p2.y = this.p1.y + this._$Fo * (this.p2.y - this.p1.y) / f2, this.p2.vx = (this.p2.x - this.p2._$s0) * i3, this.p2.vy = (this.p2.y - this.p2._$70) * i3, this.p2._$xT();
      };
      function p() {
        this._$p = 1, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0, this.ax = 0, this.ay = 0, this.fx = 0, this.fy = 0, this._$s0 = 0, this._$70 = 0, this._$7L = 0, this._$HL = 0;
      }
      p.prototype._$xT = function() {
        this._$s0 = this.x, this._$70 = this.y, this._$7L = this.vx, this._$HL = this.vy;
      };
      function c(t3, e2, i3) {
        this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t3, this.scale = e2, this._$V0 = i3;
      }
      c.prototype._$oP = function(t3, e2) {
      };
      function f(t3, e2, i3, r2) {
        c.prototype.constructor.call(this, e2, i3, r2), this._$tL = null, this._$tL = t3;
      }
      f.prototype = new c(), f.prototype._$oP = function(t3, e2) {
        var i3 = this.scale * t3.getParamFloat(this._$wL), r2 = e2.getPhysicsPoint1();
        switch (this._$tL) {
          default:
          case u.Src.SRC_TO_X:
            r2.x = r2.x + (i3 - r2.x) * this._$V0;
            break;
          case u.Src.SRC_TO_Y:
            r2.y = r2.y + (i3 - r2.y) * this._$V0;
            break;
          case u.Src.SRC_TO_G_ANGLE:
            var o2 = e2._$qr();
            o2 += (i3 - o2) * this._$V0, e2._$pr(o2);
        }
      };
      function d(t3, e2, i3) {
        this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t3, this.scale = e2, this._$V0 = i3;
      }
      d.prototype._$YS = function(t3, e2) {
      };
      function g(t3, e2, i3, r2) {
        d.prototype.constructor.call(this, e2, i3, r2), this._$YP = null, this._$YP = t3;
      }
      g.prototype = new d(), g.prototype._$YS = function(t3, e2) {
        switch (this._$YP) {
          default:
          case u.Target.TARGET_FROM_ANGLE:
            t3.setParamFloat(this._$wL, this.scale * e2._$5r(), this._$V0);
            break;
          case u.Target.TARGET_FROM_ANGLE_V:
            t3.setParamFloat(this._$wL, this.scale * e2._$Cs(), this._$V0);
        }
      }, u.Src = function() {
      }, u.Src.SRC_TO_X = "SRC_TO_X", u.Src.SRC_TO_Y = "SRC_TO_Y", u.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE", u.Target = function() {
      }, u.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE", u.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V";
      function y() {
        i2 || (this._$fL = 0, this._$gL = 0, this._$B0 = 1, this._$z0 = 1, this._$qT = 0, this.reflectX = false, this.reflectY = false);
      }
      y.prototype.init = function(t3) {
        this._$fL = t3._$fL, this._$gL = t3._$gL, this._$B0 = t3._$B0, this._$z0 = t3._$z0, this._$qT = t3._$qT, this.reflectX = t3.reflectX, this.reflectY = t3.reflectY;
      }, y.prototype._$F0 = function(t3) {
        this._$fL = t3._$_T(), this._$gL = t3._$_T(), this._$B0 = t3._$_T(), this._$z0 = t3._$_T(), this._$qT = t3._$_T(), t3.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t3._$po(), this.reflectY = t3._$po());
      }, y.prototype._$e = function() {
      };
      var T = function() {
      };
      T._$ni = function(t3, e2, i3, r2, o2, n2, s2, a2, _2) {
        var h2 = s2 * n2 - a2 * o2;
        if (h2 == 0)
          return null;
        var l2, $2 = ((t3 - i3) * n2 - (e2 - r2) * o2) / h2;
        return l2 = o2 != 0 ? (t3 - i3 - $2 * s2) / o2 : (e2 - r2 - $2 * a2) / n2, isNaN(l2) && (l2 = (t3 - i3 - $2 * s2) / o2, isNaN(l2) && (l2 = (e2 - r2 - $2 * a2) / n2), isNaN(l2) && (console.log("a is NaN @UtVector#_$ni() "), console.log("v1x : " + o2), console.log("v1x != 0 ? " + (o2 != 0)))), _2 == null ? new Array(l2, $2) : (_2[0] = l2, _2[1] = $2, _2);
      };
      function v() {
        i2 || (this.x = null, this.y = null, this.width = null, this.height = null);
      }
      v.prototype._$8P = function() {
        return this.x + 0.5 * this.width;
      }, v.prototype._$6P = function() {
        return this.y + 0.5 * this.height;
      }, v.prototype._$EL = function() {
        return this.x + this.width;
      }, v.prototype._$5T = function() {
        return this.y + this.height;
      }, v.prototype._$jL = function(t3, e2, i3, r2) {
        this.x = t3, this.y = e2, this.width = i3, this.height = r2;
      }, v.prototype._$jL = function(t3) {
        this.x = t3.x, this.y = t3.y, this.width = t3.width, this.height = t3.height;
      }, v.prototype.contains = function(t3, e2) {
        return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height;
      }, v.prototype.expand = function(t3, e2) {
        this.x -= t3, this.y -= e2, this.width += 2 * t3, this.height += 2 * e2;
      };
      function P() {
      }
      P._$Z2 = function(t3, e2, i3, r2) {
        var o2 = e2._$Q2(t3, i3), n2 = t3._$vs(), s2 = t3._$Tr();
        if (e2._$zr(n2, s2, o2), o2 <= 0)
          return r2[n2[0]];
        if (o2 == 1) {
          return (a2 = r2[n2[0]]) + ((_2 = r2[n2[1]]) - a2) * ($2 = s2[0]) | 0;
        }
        if (o2 == 2) {
          var a2 = r2[n2[0]], _2 = r2[n2[1]], h2 = r2[n2[2]], l2 = r2[n2[3]], $2 = s2[0], u2 = s2[1];
          return (P2 = a2 + (_2 - a2) * $2 | 0) + ((h2 + (l2 - h2) * $2 | 0) - P2) * u2 | 0;
        }
        if (o2 == 3) {
          var p2 = r2[n2[0]], c2 = r2[n2[1]], f2 = r2[n2[2]], d2 = r2[n2[3]], g2 = r2[n2[4]], y2 = r2[n2[5]], m2 = r2[n2[6]], T2 = r2[n2[7]], v2 = ($2 = s2[0], u2 = s2[1], s2[2]);
          return (P2 = (a2 = p2 + (c2 - p2) * $2 | 0) + ((_2 = f2 + (d2 - f2) * $2 | 0) - a2) * u2 | 0) + (((h2 = g2 + (y2 - g2) * $2 | 0) + ((l2 = m2 + (T2 - m2) * $2 | 0) - h2) * u2 | 0) - P2) * v2 | 0;
        }
        if (o2 == 4) {
          var P2, S2 = r2[n2[0]], L2 = r2[n2[1]], M2 = r2[n2[2]], w2 = r2[n2[3]], E2 = r2[n2[4]], x2 = r2[n2[5]], A2 = r2[n2[6]], I2 = r2[n2[7]], b2 = r2[n2[8]], O2 = r2[n2[9]], D2 = r2[n2[10]], R2 = r2[n2[11]], F2 = r2[n2[12]], C2 = r2[n2[13]], N2 = r2[n2[14]], B2 = r2[n2[15]], G2 = ($2 = s2[0], u2 = s2[1], v2 = s2[2], s2[3]);
          return (P2 = (a2 = (p2 = S2 + (L2 - S2) * $2 | 0) + ((c2 = M2 + (w2 - M2) * $2 | 0) - p2) * u2 | 0) + ((_2 = (f2 = E2 + (x2 - E2) * $2 | 0) + ((d2 = A2 + (I2 - A2) * $2 | 0) - f2) * u2 | 0) - a2) * v2 | 0) + (((h2 = (g2 = b2 + (O2 - b2) * $2 | 0) + ((y2 = D2 + (R2 - D2) * $2 | 0) - g2) * u2 | 0) + ((l2 = (m2 = F2 + (C2 - F2) * $2 | 0) + ((T2 = N2 + (B2 - N2) * $2 | 0) - m2) * u2 | 0) - h2) * v2 | 0) - P2) * G2 | 0;
        }
        for (var U2 = 1 << o2, Y2 = new Float32Array(U2), k = 0; k < U2; k++) {
          for (var V = k, X2 = 1, z2 = 0; z2 < o2; z2++)
            X2 *= V % 2 == 0 ? 1 - s2[z2] : s2[z2], V /= 2;
          Y2[k] = X2;
        }
        for (var H2 = new Float32Array(U2), W2 = 0; W2 < U2; W2++)
          H2[W2] = r2[n2[W2]];
        var j2 = 0;
        for (W2 = 0; W2 < U2; W2++)
          j2 += Y2[W2] * H2[W2];
        return j2 + 0.5 | 0;
      }, P._$br = function(t3, e2, i3, r2) {
        var o2 = e2._$Q2(t3, i3), n2 = t3._$vs(), s2 = t3._$Tr();
        if (e2._$zr(n2, s2, o2), o2 <= 0)
          return r2[n2[0]];
        if (o2 == 1) {
          return (a2 = r2[n2[0]]) + ((_2 = r2[n2[1]]) - a2) * ($2 = s2[0]);
        }
        if (o2 == 2) {
          var a2 = r2[n2[0]], _2 = r2[n2[1]], h2 = r2[n2[2]], l2 = r2[n2[3]], $2 = s2[0];
          return (1 - (T2 = s2[1])) * (a2 + (_2 - a2) * $2) + T2 * (h2 + (l2 - h2) * $2);
        }
        if (o2 == 3) {
          var u2 = r2[n2[0]], p2 = r2[n2[1]], c2 = r2[n2[2]], f2 = r2[n2[3]], d2 = r2[n2[4]], g2 = r2[n2[5]], y2 = r2[n2[6]], m2 = r2[n2[7]], T2 = ($2 = s2[0], s2[1]);
          return (1 - (N2 = s2[2])) * ((1 - T2) * (u2 + (p2 - u2) * $2) + T2 * (c2 + (f2 - c2) * $2)) + N2 * ((1 - T2) * (d2 + (g2 - d2) * $2) + T2 * (y2 + (m2 - y2) * $2));
        }
        if (o2 == 4) {
          var v2 = r2[n2[0]], P2 = r2[n2[1]], S2 = r2[n2[2]], L2 = r2[n2[3]], M2 = r2[n2[4]], w2 = r2[n2[5]], E2 = r2[n2[6]], x2 = r2[n2[7]], A2 = r2[n2[8]], I2 = r2[n2[9]], b2 = r2[n2[10]], O2 = r2[n2[11]], D2 = r2[n2[12]], R2 = r2[n2[13]], F2 = r2[n2[14]], C2 = r2[n2[15]], N2 = ($2 = s2[0], T2 = s2[1], s2[2]), B2 = s2[3];
          return (1 - B2) * ((1 - N2) * ((1 - T2) * (v2 + (P2 - v2) * $2) + T2 * (S2 + (L2 - S2) * $2)) + N2 * ((1 - T2) * (M2 + (w2 - M2) * $2) + T2 * (E2 + (x2 - E2) * $2))) + B2 * ((1 - N2) * ((1 - T2) * (A2 + (I2 - A2) * $2) + T2 * (b2 + (O2 - b2) * $2)) + N2 * ((1 - T2) * (D2 + (R2 - D2) * $2) + T2 * (F2 + (C2 - F2) * $2)));
        }
        for (var G2 = 1 << o2, U2 = new Float32Array(G2), Y2 = 0; Y2 < G2; Y2++) {
          for (var k = Y2, V = 1, X2 = 0; X2 < o2; X2++)
            V *= k % 2 == 0 ? 1 - s2[X2] : s2[X2], k /= 2;
          U2[Y2] = V;
        }
        for (var z2 = new Float32Array(G2), H2 = 0; H2 < G2; H2++)
          z2[H2] = r2[n2[H2]];
        var W2 = 0;
        for (H2 = 0; H2 < G2; H2++)
          W2 += U2[H2] * z2[H2];
        return W2;
      }, P._$Vr = function(t3, e2, i3, r2, o2, n2, s2, a2) {
        var _2 = e2._$Q2(t3, i3), h2 = t3._$vs(), l2 = t3._$Tr();
        e2._$zr(h2, l2, _2);
        var $2 = 2 * r2, u2 = s2;
        if (_2 <= 0) {
          var p2 = o2[h2[0]];
          if (a2 == 2 && s2 == 0)
            x._$jT(p2, 0, n2, 0, $2);
          else
            for (var c2 = 0; c2 < $2; )
              n2[u2] = p2[c2++], n2[u2 + 1] = p2[c2++], u2 += a2;
        } else if (_2 == 1) {
          p2 = o2[h2[0]];
          var f2 = o2[h2[1]], d2 = 1 - (m2 = l2[0]);
          for (c2 = 0; c2 < $2; )
            n2[u2] = p2[c2] * d2 + f2[c2] * m2, ++c2, n2[u2 + 1] = p2[c2] * d2 + f2[c2] * m2, ++c2, u2 += a2;
        } else if (_2 == 2) {
          p2 = o2[h2[0]], f2 = o2[h2[1]];
          var g2 = o2[h2[2]], y2 = o2[h2[3]], m2 = l2[0], T2 = (k = 1 - (D2 = l2[1])) * (d2 = 1 - m2), v2 = k * m2, P2 = D2 * d2, S2 = D2 * m2;
          for (c2 = 0; c2 < $2; )
            n2[u2] = T2 * p2[c2] + v2 * f2[c2] + P2 * g2[c2] + S2 * y2[c2], ++c2, n2[u2 + 1] = T2 * p2[c2] + v2 * f2[c2] + P2 * g2[c2] + S2 * y2[c2], ++c2, u2 += a2;
        } else if (_2 == 3) {
          var L2 = o2[h2[0]], M2 = o2[h2[1]], w2 = o2[h2[2]], E2 = o2[h2[3]], A2 = o2[h2[4]], I2 = o2[h2[5]], b2 = o2[h2[6]], O2 = o2[h2[7]], D2 = (m2 = l2[0], l2[1]), R2 = (V = 1 - (st2 = l2[2])) * (k = 1 - D2) * (d2 = 1 - m2), F2 = V * k * m2, C2 = V * D2 * d2, N2 = V * D2 * m2, B2 = st2 * k * d2, G2 = st2 * k * m2, U2 = st2 * D2 * d2, Y2 = st2 * D2 * m2;
          for (c2 = 0; c2 < $2; )
            n2[u2] = R2 * L2[c2] + F2 * M2[c2] + C2 * w2[c2] + N2 * E2[c2] + B2 * A2[c2] + G2 * I2[c2] + U2 * b2[c2] + Y2 * O2[c2], ++c2, n2[u2 + 1] = R2 * L2[c2] + F2 * M2[c2] + C2 * w2[c2] + N2 * E2[c2] + B2 * A2[c2] + G2 * I2[c2] + U2 * b2[c2] + Y2 * O2[c2], ++c2, u2 += a2;
        } else if (_2 == 4) {
          var k, V, X2 = o2[h2[0]], z2 = o2[h2[1]], H2 = o2[h2[2]], W2 = o2[h2[3]], j2 = o2[h2[4]], q2 = o2[h2[5]], J2 = o2[h2[6]], Q2 = o2[h2[7]], Z2 = o2[h2[8]], K2 = o2[h2[9]], tt2 = o2[h2[10]], et2 = o2[h2[11]], it2 = o2[h2[12]], rt2 = o2[h2[13]], ot2 = o2[h2[14]], nt2 = o2[h2[15]], st2 = (m2 = l2[0], D2 = l2[1], l2[2]), at2 = l2[3], _t2 = 1 - at2, ht2 = _t2 * (V = 1 - st2) * (k = 1 - D2) * (d2 = 1 - m2), lt2 = _t2 * V * k * m2, $t2 = _t2 * V * D2 * d2, ut2 = _t2 * V * D2 * m2, pt2 = _t2 * st2 * k * d2, ct2 = _t2 * st2 * k * m2, ft2 = _t2 * st2 * D2 * d2, dt2 = _t2 * st2 * D2 * m2, gt2 = at2 * V * k * d2, yt2 = at2 * V * k * m2, mt2 = at2 * V * D2 * d2, Tt2 = at2 * V * D2 * m2, vt2 = at2 * st2 * k * d2, Pt2 = at2 * st2 * k * m2, St2 = at2 * st2 * D2 * d2, Lt2 = at2 * st2 * D2 * m2;
          for (c2 = 0; c2 < $2; )
            n2[u2] = ht2 * X2[c2] + lt2 * z2[c2] + $t2 * H2[c2] + ut2 * W2[c2] + pt2 * j2[c2] + ct2 * q2[c2] + ft2 * J2[c2] + dt2 * Q2[c2] + gt2 * Z2[c2] + yt2 * K2[c2] + mt2 * tt2[c2] + Tt2 * et2[c2] + vt2 * it2[c2] + Pt2 * rt2[c2] + St2 * ot2[c2] + Lt2 * nt2[c2], ++c2, n2[u2 + 1] = ht2 * X2[c2] + lt2 * z2[c2] + $t2 * H2[c2] + ut2 * W2[c2] + pt2 * j2[c2] + ct2 * q2[c2] + ft2 * J2[c2] + dt2 * Q2[c2] + gt2 * Z2[c2] + yt2 * K2[c2] + mt2 * tt2[c2] + Tt2 * et2[c2] + vt2 * it2[c2] + Pt2 * rt2[c2] + St2 * ot2[c2] + Lt2 * nt2[c2], ++c2, u2 += a2;
        } else {
          for (var Mt2 = 1 << _2, wt = new Float32Array(Mt2), Et = 0; Et < Mt2; Et++) {
            for (var xt = Et, At = 1, It = 0; It < _2; It++)
              At *= xt % 2 == 0 ? 1 - l2[It] : l2[It], xt /= 2;
            wt[Et] = At;
          }
          for (var bt = new Float32Array(Mt2), Ot = 0; Ot < Mt2; Ot++)
            bt[Ot] = o2[h2[Ot]];
          for (c2 = 0; c2 < $2; ) {
            var Dt = 0, Rt = 0, Ft = c2 + 1;
            for (Ot = 0; Ot < Mt2; Ot++)
              Dt += wt[Ot] * bt[Ot][c2], Rt += wt[Ot] * bt[Ot][Ft];
            c2 += 2, n2[u2] = Dt, n2[u2 + 1] = Rt, u2 += a2;
          }
        }
      };
      function S() {
        i2 || (this.x = null, this.y = null);
      }
      S.prototype._$HT = function(t3, e2) {
        this.x = t3, this.y = e2;
      }, S.prototype._$HT = function(t3) {
        this.x = t3.x, this.y = t3.y;
      };
      function L() {
        i2 || (this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null, this.clipID = null, this.clipIDList = new Array());
      }
      L._$ur = -2, L._$ES = 500, L._$wb = 2, L._$8S = 3, L._$52 = L._$ES, L._$R2 = L._$ES, L._$or = function() {
        return L._$52;
      }, L._$Pr = function() {
        return L._$R2;
      }, L.prototype.convertClipIDForV2_11 = function(t3) {
        var e2 = [];
        return t3 == null ? null : t3.length == 0 ? null : /,/.test(t3) ? e2 = t3.id.split(",") : (e2.push(t3.id), e2);
      }, L.prototype._$F0 = function(t3) {
        this._$gP = t3._$nP(), this._$dr = t3._$nP(), this._$GS = t3._$nP(), this._$qb = t3._$6L(), this._$Lb = t3._$cS(), this._$mS = t3._$Tb(), t3.getFormatVersion() >= G._$T7 ? (this.clipID = t3._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = [], this._$MS(this._$Lb);
      }, L.prototype.getClipIDList = function() {
        return this.clipIDList;
      }, L.prototype.init = function(t3) {
      }, L.prototype._$Nr = function(t3, e2) {
        if (e2._$IS[0] = false, e2._$Us = P._$Z2(t3, this._$GS, e2._$IS, this._$Lb), at._$Zs)
          ;
        else if (e2._$IS[0])
          return;
        e2._$7s = P._$br(t3, this._$GS, e2._$IS, this._$mS);
      }, L.prototype._$2b = function(t3, e2) {
      }, L.prototype.getDrawDataID = function() {
        return this._$gP;
      }, L.prototype._$j2 = function(t3) {
        this._$gP = t3;
      }, L.prototype.getOpacity = function(t3, e2) {
        return e2._$7s;
      }, L.prototype._$zS = function(t3, e2) {
        return e2._$Us;
      }, L.prototype._$MS = function(t3) {
        for (var e2 = t3.length - 1; e2 >= 0; --e2) {
          var i3 = t3[e2];
          i3 < L._$52 ? L._$52 = i3 : i3 > L._$R2 && (L._$R2 = i3);
        }
      }, L.prototype.getTargetBaseDataID = function() {
        return this._$dr;
      }, L.prototype._$gs = function(t3) {
        this._$dr = t3;
      }, L.prototype._$32 = function() {
        return this._$dr != null && this._$dr != gt._$2o();
      }, L.prototype.preDraw = function(t3, e2, i3) {
      }, L.prototype.draw = function(t3, e2, i3) {
      }, L.prototype.getType = function() {
      }, L.prototype._$B2 = function(t3, e2, i3) {
      };
      function M() {
        i2 || (this._$Eb = M._$ps, this._$lT = 1, this._$C0 = 1, this._$tT = 1, this._$WL = 1, this.culling = false, this.matrix4x4 = new Float32Array(16), this.premultipliedAlpha = false, this.anisotropy = 0, this.clippingProcess = M.CLIPPING_PROCESS_NONE, this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array());
      }
      M._$ps = 32, M.CLIPPING_PROCESS_NONE = 0, M.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1, M.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2, M.CLIPPING_PROCESS_DRAW = 3, M.CLIPPING_PROCESS_CLEAR_ALPHA = 4, M.prototype.setChannelFlagAsColor = function(t3, e2) {
        this.CHANNEL_COLORS[t3] = e2;
      }, M.prototype.getChannelFlagAsColor = function(t3) {
        return this.CHANNEL_COLORS[t3];
      }, M.prototype._$ZT = function() {
      }, M.prototype._$Uo = function(t3, e2, i3, r2, o2, n2, s2) {
      }, M.prototype._$Rs = function() {
        return -1;
      }, M.prototype._$Ds = function(t3) {
      }, M.prototype.setBaseColor = function(t3, e2, i3, r2) {
        t3 < 0 ? t3 = 0 : t3 > 1 && (t3 = 1), e2 < 0 ? e2 = 0 : e2 > 1 && (e2 = 1), i3 < 0 ? i3 = 0 : i3 > 1 && (i3 = 1), r2 < 0 ? r2 = 0 : r2 > 1 && (r2 = 1), this._$lT = t3, this._$C0 = e2, this._$tT = i3, this._$WL = r2;
      }, M.prototype._$WP = function(t3) {
        this.culling = t3;
      }, M.prototype.setMatrix = function(t3) {
        for (var e2 = 0; e2 < 16; e2++)
          this.matrix4x4[e2] = t3[e2];
      }, M.prototype._$IT = function() {
        return this.matrix4x4;
      }, M.prototype.setPremultipliedAlpha = function(t3) {
        this.premultipliedAlpha = t3;
      }, M.prototype.isPremultipliedAlpha = function() {
        return this.premultipliedAlpha;
      }, M.prototype.setAnisotropy = function(t3) {
        this.anisotropy = t3;
      }, M.prototype.getAnisotropy = function() {
        return this.anisotropy;
      }, M.prototype.getClippingProcess = function() {
        return this.clippingProcess;
      }, M.prototype.setClippingProcess = function(t3) {
        this.clippingProcess = t3;
      }, M.prototype.setClipBufPre_clipContextForMask = function(t3) {
        this.clipBufPre_clipContextMask = t3;
      }, M.prototype.getClipBufPre_clipContextMask = function() {
        return this.clipBufPre_clipContextMask;
      }, M.prototype.setClipBufPre_clipContextForDraw = function(t3) {
        this.clipBufPre_clipContextDraw = t3;
      }, M.prototype.getClipBufPre_clipContextDraw = function() {
        return this.clipBufPre_clipContextDraw;
      };
      function w() {
        i2 || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._$ho = 1, this.blendMode = at.L2D_COLOR_BLEND_MODE_MULT);
      }
      function E() {
        i2 || (this._$kP = null, this._$dr = null, this._$Ai = true, this._$mS = null);
      }
      E._$ur = -2, E._$c2 = 1, E._$_b = 2, E.prototype._$F0 = function(t3) {
        this._$kP = t3._$nP(), this._$dr = t3._$nP();
      }, E.prototype.readV2_opacity = function(t3) {
        t3.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t3._$Tb());
      }, E.prototype.init = function(t3) {
      }, E.prototype._$Nr = function(t3, e2) {
      }, E.prototype.interpolateOpacity = function(t3, e2, i3, r2) {
        this._$mS == null ? i3.setInterpolatedOpacity(1) : i3.setInterpolatedOpacity(P._$br(t3, e2, r2, this._$mS));
      }, E.prototype._$2b = function(t3, e2) {
      }, E.prototype._$nb = function(t3, e2, i3, r2, o2, n2, s2) {
      }, E.prototype.getType = function() {
      }, E.prototype._$gs = function(t3) {
        this._$dr = t3;
      }, E.prototype._$a2 = function(t3) {
        this._$kP = t3;
      }, E.prototype.getTargetBaseDataID = function() {
        return this._$dr;
      }, E.prototype.getBaseDataID = function() {
        return this._$kP;
      }, E.prototype._$32 = function() {
        return this._$dr != null && this._$dr != gt._$2o();
      };
      function x() {
      }
      x._$W2 = 0, x._$CS = x._$W2, x._$Mo = function() {
        return true;
      }, x._$XP = function(t3) {
        try {
          for (var e2 = getTimeMSec(); getTimeMSec() - e2 < t3; )
            ;
        } catch (t4) {
          t4._$Rb();
        }
      }, x.getUserTimeMSec = function() {
        return x._$CS == x._$W2 ? x.getSystemTimeMSec() : x._$CS;
      }, x.setUserTimeMSec = function(t3) {
        x._$CS = t3;
      }, x.updateUserTimeMSec = function() {
        return x._$CS = x.getSystemTimeMSec();
      }, x.getTimeMSec = function() {
        return new Date().getTime();
      }, x.getSystemTimeMSec = function() {
        return new Date().getTime();
      }, x._$Q = function(t3) {
      }, x._$jT = function(t3, e2, i3, r2, o2) {
        for (var n2 = 0; n2 < o2; n2++)
          i3[r2 + n2] = t3[e2 + n2];
      };
      function A() {
        i2 || (this._$VP = 0, this._$wL = null, this._$GP = null, this._$8o = A._$ds, this._$2r = -1, this._$O2 = 0, this._$ri = 0);
      }
      A._$ds = -2, A.prototype._$F0 = function(t3) {
        this._$wL = t3._$nP(), this._$VP = t3._$6L(), this._$GP = t3._$nP();
      }, A.prototype.getParamIndex = function(t3) {
        return this._$2r != t3 && (this._$8o = A._$ds), this._$8o;
      }, A.prototype._$Pb = function(t3, e2) {
        this._$8o = t3, this._$2r = e2;
      }, A.prototype.getParamID = function() {
        return this._$wL;
      }, A.prototype._$yP = function(t3) {
        this._$wL = t3;
      }, A.prototype._$N2 = function() {
        return this._$VP;
      }, A.prototype._$d2 = function() {
        return this._$GP;
      }, A.prototype._$t2 = function(t3, e2) {
        this._$VP = t3, this._$GP = e2;
      }, A.prototype._$Lr = function() {
        return this._$O2;
      }, A.prototype._$wr = function(t3) {
        this._$O2 = t3;
      }, A.prototype._$SL = function() {
        return this._$ri;
      }, A.prototype._$AL = function(t3) {
        this._$ri = t3;
      };
      function I() {
      }
      I.startsWith = function(t3, e2, i3) {
        var r2 = e2 + i3.length;
        if (r2 >= t3.length)
          return false;
        for (var o2 = e2; o2 < r2; o2++)
          if (I.getChar(t3, o2) != i3.charAt(o2 - e2))
            return false;
        return true;
      }, I.getChar = function(t3, e2) {
        return String.fromCharCode(t3.getUint8(e2));
      }, I.createString = function(t3, e2, i3) {
        for (var r2 = new ArrayBuffer(2 * i3), o2 = new Uint16Array(r2), n2 = 0; n2 < i3; n2++)
          o2[n2] = t3.getUint8(e2 + n2);
        return String.fromCharCode.apply(null, o2);
      }, I._$LS = function(t3, e2, i3, r2) {
        t3 instanceof ArrayBuffer && (t3 = new DataView(t3));
        var o2 = i3, n2 = false, s2 = false, a2 = 0, _2 = I.getChar(t3, o2);
        _2 == "-" && (n2 = true, o2++);
        for (var h2 = false; o2 < e2; o2++) {
          switch (_2 = I.getChar(t3, o2)) {
            case "0":
              a2 *= 10;
              break;
            case "1":
              a2 = 10 * a2 + 1;
              break;
            case "2":
              a2 = 10 * a2 + 2;
              break;
            case "3":
              a2 = 10 * a2 + 3;
              break;
            case "4":
              a2 = 10 * a2 + 4;
              break;
            case "5":
              a2 = 10 * a2 + 5;
              break;
            case "6":
              a2 = 10 * a2 + 6;
              break;
            case "7":
              a2 = 10 * a2 + 7;
              break;
            case "8":
              a2 = 10 * a2 + 8;
              break;
            case "9":
              a2 = 10 * a2 + 9;
              break;
            case ".":
              s2 = true, o2++, h2 = true;
              break;
            default:
              h2 = true;
          }
          if (h2)
            break;
        }
        if (s2)
          for (var l2 = 0.1, $2 = false; o2 < e2; o2++) {
            switch (_2 = I.getChar(t3, o2)) {
              case "0":
                break;
              case "1":
                a2 += 1 * l2;
                break;
              case "2":
                a2 += 2 * l2;
                break;
              case "3":
                a2 += 3 * l2;
                break;
              case "4":
                a2 += 4 * l2;
                break;
              case "5":
                a2 += 5 * l2;
                break;
              case "6":
                a2 += 6 * l2;
                break;
              case "7":
                a2 += 7 * l2;
                break;
              case "8":
                a2 += 8 * l2;
                break;
              case "9":
                a2 += 9 * l2;
                break;
              default:
                $2 = true;
            }
            if (l2 *= 0.1, $2)
              break;
          }
        return n2 && (a2 = -a2), r2[0] = o2, a2;
      };
      function b() {
        i2 || (this._$Ob = null);
      }
      b.prototype._$zP = function() {
        this._$Ob = new Array();
      }, b.prototype._$F0 = function(t3) {
        this._$Ob = t3._$nP();
      }, b.prototype._$Ur = function(t3) {
        if (t3._$WS())
          return true;
        for (var e2 = t3._$v2(), i3 = this._$Ob.length - 1; i3 >= 0; --i3) {
          var r2 = this._$Ob[i3].getParamIndex(e2);
          if (r2 == A._$ds && (r2 = t3.getParamIndex(this._$Ob[i3].getParamID())), t3._$Xb(r2))
            return true;
        }
        return false;
      }, b.prototype._$Q2 = function(t3, e2) {
        for (var i3, r2, o2 = this._$Ob.length, n2 = t3._$v2(), s2 = 0, a2 = 0; a2 < o2; a2++) {
          var _2 = this._$Ob[a2];
          if ((i3 = _2.getParamIndex(n2)) == A._$ds && (i3 = t3.getParamIndex(_2.getParamID()), _2._$Pb(i3, n2)), i3 < 0)
            throw new Exception("err 23242 : " + _2.getParamID());
          var h2 = i3 < 0 ? 0 : t3.getParamFloat(i3);
          r2 = _2._$N2();
          var l2, $2, u2 = _2._$d2(), p2 = -1, c2 = 0;
          if (r2 < 1)
            ;
          else if (r2 == 1)
            (l2 = u2[0]) - B._$J < h2 && h2 < l2 + B._$J ? (p2 = 0, c2 = 0) : (p2 = 0, e2[0] = true);
          else if (h2 < (l2 = u2[0]) - B._$J)
            p2 = 0, e2[0] = true;
          else if (h2 < l2 + B._$J)
            p2 = 0;
          else {
            for (var f2 = false, d2 = 1; d2 < r2; ++d2) {
              if (h2 < ($2 = u2[d2]) + B._$J) {
                $2 - B._$J < h2 ? p2 = d2 : (p2 = d2 - 1, c2 = (h2 - l2) / ($2 - l2), s2++), f2 = true;
                break;
              }
              l2 = $2;
            }
            f2 || (p2 = r2 - 1, c2 = 0, e2[0] = true);
          }
          _2._$wr(p2), _2._$AL(c2);
        }
        return s2;
      }, b.prototype._$zr = function(t3, e2, i3) {
        var r2 = 1 << i3;
        r2 + 1 > B._$Qb && console.log("err 23245\n");
        for (var o2 = this._$Ob.length, n2 = 1, s2 = 1, a2 = 0, _2 = 0; _2 < r2; ++_2)
          t3[_2] = 0;
        for (var h2 = 0; h2 < o2; ++h2) {
          var l2 = this._$Ob[h2];
          if (l2._$SL() == 0) {
            if (($2 = l2._$Lr() * n2) < 0 && at._$3T)
              throw new Exception("err 23246");
            for (_2 = 0; _2 < r2; ++_2)
              t3[_2] += $2;
          } else {
            var $2 = n2 * l2._$Lr(), u2 = n2 * (l2._$Lr() + 1);
            for (_2 = 0; _2 < r2; ++_2)
              t3[_2] += (_2 / s2 | 0) % 2 == 0 ? $2 : u2;
            e2[a2++] = l2._$SL(), s2 *= 2;
          }
          n2 *= l2._$N2();
        }
        t3[r2] = 65535, e2[a2] = -1;
      }, b.prototype._$h2 = function(t3, e2, i3) {
        for (var r2 = new Float32Array(e2), o2 = 0; o2 < e2; ++o2)
          r2[o2] = i3[o2];
        var n2 = new A();
        n2._$yP(t3), n2._$t2(e2, r2), this._$Ob.push(n2);
      }, b.prototype._$J2 = function(t3) {
        for (var e2 = t3, i3 = this._$Ob.length, r2 = 0; r2 < i3; ++r2) {
          var o2 = this._$Ob[r2], n2 = o2._$N2(), s2 = e2 % o2._$N2(), a2 = o2._$d2()[s2];
          console.log("%s[%d]=%7.2f / ", o2.getParamID(), s2, a2), e2 /= n2;
        }
        console.log("\n");
      }, b.prototype.getParamCount = function() {
        return this._$Ob.length;
      }, b.prototype._$zs = function() {
        return this._$Ob;
      };
      function O() {
        this.m = new Float32Array(16), this.identity();
      }
      O.prototype.identity = function() {
        for (var t3 = 0; t3 < 16; t3++)
          this.m[t3] = t3 % 5 == 0 ? 1 : 0;
      }, O.prototype.getArray = function() {
        return this.m;
      }, O.prototype.getCopyMatrix = function() {
        return new Float32Array(this.m);
      }, O.prototype.setMatrix = function(t3) {
        if (t3 != null && t3.length == 16)
          for (var e2 = 0; e2 < 16; e2++)
            this.m[e2] = t3[e2];
      }, O.prototype.mult = function(t3, e2, i3) {
        return e2 == null ? null : (this == e2 ? this.mult_safe(this.m, t3.m, e2.m, i3) : this.mult_fast(this.m, t3.m, e2.m, i3), e2);
      }, O.prototype.mult_safe = function(t3, e2, i3, r2) {
        if (t3 == i3) {
          var o2 = new Array(16);
          this.mult_fast(t3, e2, o2, r2);
          for (var n2 = 15; n2 >= 0; --n2)
            i3[n2] = o2[n2];
        } else
          this.mult_fast(t3, e2, i3, r2);
      }, O.prototype.mult_fast = function(t3, e2, i3, r2) {
        r2 ? (i3[0] = t3[0] * e2[0] + t3[4] * e2[1] + t3[8] * e2[2], i3[4] = t3[0] * e2[4] + t3[4] * e2[5] + t3[8] * e2[6], i3[8] = t3[0] * e2[8] + t3[4] * e2[9] + t3[8] * e2[10], i3[12] = t3[0] * e2[12] + t3[4] * e2[13] + t3[8] * e2[14] + t3[12], i3[1] = t3[1] * e2[0] + t3[5] * e2[1] + t3[9] * e2[2], i3[5] = t3[1] * e2[4] + t3[5] * e2[5] + t3[9] * e2[6], i3[9] = t3[1] * e2[8] + t3[5] * e2[9] + t3[9] * e2[10], i3[13] = t3[1] * e2[12] + t3[5] * e2[13] + t3[9] * e2[14] + t3[13], i3[2] = t3[2] * e2[0] + t3[6] * e2[1] + t3[10] * e2[2], i3[6] = t3[2] * e2[4] + t3[6] * e2[5] + t3[10] * e2[6], i3[10] = t3[2] * e2[8] + t3[6] * e2[9] + t3[10] * e2[10], i3[14] = t3[2] * e2[12] + t3[6] * e2[13] + t3[10] * e2[14] + t3[14], i3[3] = i3[7] = i3[11] = 0, i3[15] = 1) : (i3[0] = t3[0] * e2[0] + t3[4] * e2[1] + t3[8] * e2[2] + t3[12] * e2[3], i3[4] = t3[0] * e2[4] + t3[4] * e2[5] + t3[8] * e2[6] + t3[12] * e2[7], i3[8] = t3[0] * e2[8] + t3[4] * e2[9] + t3[8] * e2[10] + t3[12] * e2[11], i3[12] = t3[0] * e2[12] + t3[4] * e2[13] + t3[8] * e2[14] + t3[12] * e2[15], i3[1] = t3[1] * e2[0] + t3[5] * e2[1] + t3[9] * e2[2] + t3[13] * e2[3], i3[5] = t3[1] * e2[4] + t3[5] * e2[5] + t3[9] * e2[6] + t3[13] * e2[7], i3[9] = t3[1] * e2[8] + t3[5] * e2[9] + t3[9] * e2[10] + t3[13] * e2[11], i3[13] = t3[1] * e2[12] + t3[5] * e2[13] + t3[9] * e2[14] + t3[13] * e2[15], i3[2] = t3[2] * e2[0] + t3[6] * e2[1] + t3[10] * e2[2] + t3[14] * e2[3], i3[6] = t3[2] * e2[4] + t3[6] * e2[5] + t3[10] * e2[6] + t3[14] * e2[7], i3[10] = t3[2] * e2[8] + t3[6] * e2[9] + t3[10] * e2[10] + t3[14] * e2[11], i3[14] = t3[2] * e2[12] + t3[6] * e2[13] + t3[10] * e2[14] + t3[14] * e2[15], i3[3] = t3[3] * e2[0] + t3[7] * e2[1] + t3[11] * e2[2] + t3[15] * e2[3], i3[7] = t3[3] * e2[4] + t3[7] * e2[5] + t3[11] * e2[6] + t3[15] * e2[7], i3[11] = t3[3] * e2[8] + t3[7] * e2[9] + t3[11] * e2[10] + t3[15] * e2[11], i3[15] = t3[3] * e2[12] + t3[7] * e2[13] + t3[11] * e2[14] + t3[15] * e2[15]);
      }, O.prototype.translate = function(t3, e2, i3) {
        this.m[12] = this.m[0] * t3 + this.m[4] * e2 + this.m[8] * i3 + this.m[12], this.m[13] = this.m[1] * t3 + this.m[5] * e2 + this.m[9] * i3 + this.m[13], this.m[14] = this.m[2] * t3 + this.m[6] * e2 + this.m[10] * i3 + this.m[14], this.m[15] = this.m[3] * t3 + this.m[7] * e2 + this.m[11] * i3 + this.m[15];
      }, O.prototype.scale = function(t3, e2, i3) {
        this.m[0] *= t3, this.m[4] *= e2, this.m[8] *= i3, this.m[1] *= t3, this.m[5] *= e2, this.m[9] *= i3, this.m[2] *= t3, this.m[6] *= e2, this.m[10] *= i3, this.m[3] *= t3, this.m[7] *= e2, this.m[11] *= i3;
      }, O.prototype.rotateX = function(t3) {
        var e2 = St.fcos(t3), i3 = St._$9(t3), r2 = this.m[4];
        this.m[4] = r2 * e2 + this.m[8] * i3, this.m[8] = r2 * -i3 + this.m[8] * e2, r2 = this.m[5], this.m[5] = r2 * e2 + this.m[9] * i3, this.m[9] = r2 * -i3 + this.m[9] * e2, r2 = this.m[6], this.m[6] = r2 * e2 + this.m[10] * i3, this.m[10] = r2 * -i3 + this.m[10] * e2, r2 = this.m[7], this.m[7] = r2 * e2 + this.m[11] * i3, this.m[11] = r2 * -i3 + this.m[11] * e2;
      }, O.prototype.rotateY = function(t3) {
        var e2 = St.fcos(t3), i3 = St._$9(t3), r2 = this.m[0];
        this.m[0] = r2 * e2 + this.m[8] * -i3, this.m[8] = r2 * i3 + this.m[8] * e2, r2 = this.m[1], this.m[1] = r2 * e2 + this.m[9] * -i3, this.m[9] = r2 * i3 + this.m[9] * e2, r2 = m[2], this.m[2] = r2 * e2 + this.m[10] * -i3, this.m[10] = r2 * i3 + this.m[10] * e2, r2 = m[3], this.m[3] = r2 * e2 + this.m[11] * -i3, this.m[11] = r2 * i3 + this.m[11] * e2;
      }, O.prototype.rotateZ = function(t3) {
        var e2 = St.fcos(t3), i3 = St._$9(t3), r2 = this.m[0];
        this.m[0] = r2 * e2 + this.m[4] * i3, this.m[4] = r2 * -i3 + this.m[4] * e2, r2 = this.m[1], this.m[1] = r2 * e2 + this.m[5] * i3, this.m[5] = r2 * -i3 + this.m[5] * e2, r2 = this.m[2], this.m[2] = r2 * e2 + this.m[6] * i3, this.m[6] = r2 * -i3 + this.m[6] * e2, r2 = this.m[3], this.m[3] = r2 * e2 + this.m[7] * i3, this.m[7] = r2 * -i3 + this.m[7] * e2;
      };
      function D(t3) {
        i2 || it.prototype.constructor.call(this, t3);
      }
      D.prototype = new it(), D._$tP = new Object(), D._$27 = function() {
        D._$tP.clear();
      }, D.getID = function(t3) {
        var e2 = D._$tP[t3];
        return e2 == null && (e2 = new D(t3), D._$tP[t3] = e2), e2;
      }, D.prototype._$3s = function() {
        return new D();
      };
      function R() {
        i2 || (this._$7 = 1, this._$f = 0, this._$H = 0, this._$g = 1, this._$k = 0, this._$w = 0, this._$hi = STATE_IDENTITY, this._$Z = _$pS);
      }
      R._$kS = -1, R._$pS = 0, R._$hb = 1, R.STATE_IDENTITY = 0, R._$gb = 1, R._$fo = 2, R._$go = 4, R.prototype.transform = function(t3, e2, i3) {
        var r2, o2, n2, s2, a2, _2, h2 = 0, l2 = 0;
        switch (this._$hi) {
          default:
            return;
          case R._$go | R._$fo | R._$gb:
            for (r2 = this._$7, o2 = this._$H, n2 = this._$k, s2 = this._$f, a2 = this._$g, _2 = this._$w; --i3 >= 0; ) {
              var $2 = t3[h2++], u2 = t3[h2++];
              e2[l2++] = r2 * $2 + o2 * u2 + n2, e2[l2++] = s2 * $2 + a2 * u2 + _2;
            }
            return;
          case R._$go | R._$fo:
            for (r2 = this._$7, o2 = this._$H, s2 = this._$f, a2 = this._$g; --i3 >= 0; ) {
              $2 = t3[h2++], u2 = t3[h2++];
              e2[l2++] = r2 * $2 + o2 * u2, e2[l2++] = s2 * $2 + a2 * u2;
            }
            return;
          case R._$go | R._$gb:
            for (o2 = this._$H, n2 = this._$k, s2 = this._$f, _2 = this._$w; --i3 >= 0; ) {
              $2 = t3[h2++];
              e2[l2++] = o2 * t3[h2++] + n2, e2[l2++] = s2 * $2 + _2;
            }
            return;
          case R._$go:
            for (o2 = this._$H, s2 = this._$f; --i3 >= 0; ) {
              $2 = t3[h2++];
              e2[l2++] = o2 * t3[h2++], e2[l2++] = s2 * $2;
            }
            return;
          case R._$fo | R._$gb:
            for (r2 = this._$7, n2 = this._$k, a2 = this._$g, _2 = this._$w; --i3 >= 0; )
              e2[l2++] = r2 * t3[h2++] + n2, e2[l2++] = a2 * t3[h2++] + _2;
            return;
          case R._$fo:
            for (r2 = this._$7, a2 = this._$g; --i3 >= 0; )
              e2[l2++] = r2 * t3[h2++], e2[l2++] = a2 * t3[h2++];
            return;
          case R._$gb:
            for (n2 = this._$k, _2 = this._$w; --i3 >= 0; )
              e2[l2++] = t3[h2++] + n2, e2[l2++] = t3[h2++] + _2;
            return;
          case R.STATE_IDENTITY:
            return void (t3 == e2 && h2 == l2 || x._$jT(t3, h2, e2, l2, 2 * i3));
        }
      }, R.prototype.update = function() {
        this._$H == 0 && this._$f == 0 ? this._$7 == 1 && this._$g == 1 ? this._$k == 0 && this._$w == 0 ? (this._$hi = R.STATE_IDENTITY, this._$Z = R._$pS) : (this._$hi = R._$gb, this._$Z = R._$hb) : this._$k == 0 && this._$w == 0 ? (this._$hi = R._$fo, this._$Z = R._$kS) : (this._$hi = R._$fo | R._$gb, this._$Z = R._$kS) : this._$7 == 0 && this._$g == 0 ? this._$k == 0 && this._$w == 0 ? (this._$hi = R._$go, this._$Z = R._$kS) : (this._$hi = R._$go | R._$gb, this._$Z = R._$kS) : this._$k == 0 && this._$w == 0 ? (this._$hi = R._$go | R._$fo, this._$Z = R._$kS) : (this._$hi = R._$go | R._$fo | R._$gb, this._$Z = R._$kS);
      }, R.prototype._$RT = function(t3) {
        this._$IT(t3);
        var e2 = t3[0], i3 = t3[2], r2 = t3[1], o2 = t3[3], n2 = Math.sqrt(e2 * e2 + r2 * r2), s2 = e2 * o2 - i3 * r2;
        n2 == 0 ? at._$so && console.log("affine._$RT() / rt==0") : (t3[0] = n2, t3[1] = s2 / n2, t3[2] = (r2 * o2 + e2 * i3) / s2, t3[3] = Math.atan2(r2, e2));
      }, R.prototype._$ho = function(t3, e2, i3, r2) {
        var o2 = new Float32Array(6), n2 = new Float32Array(6);
        t3._$RT(o2), e2._$RT(n2);
        var s2 = new Float32Array(6);
        s2[0] = o2[0] + (n2[0] - o2[0]) * i3, s2[1] = o2[1] + (n2[1] - o2[1]) * i3, s2[2] = o2[2] + (n2[2] - o2[2]) * i3, s2[3] = o2[3] + (n2[3] - o2[3]) * i3, s2[4] = o2[4] + (n2[4] - o2[4]) * i3, s2[5] = o2[5] + (n2[5] - o2[5]) * i3, r2._$CT(s2);
      }, R.prototype._$CT = function(t3) {
        var e2 = Math.cos(t3[3]), i3 = Math.sin(t3[3]);
        this._$7 = t3[0] * e2, this._$f = t3[0] * i3, this._$H = t3[1] * (t3[2] * e2 - i3), this._$g = t3[1] * (t3[2] * i3 + e2), this._$k = t3[4], this._$w = t3[5], this.update();
      }, R.prototype._$IT = function(t3) {
        t3[0] = this._$7, t3[1] = this._$f, t3[2] = this._$H, t3[3] = this._$g, t3[4] = this._$k, t3[5] = this._$w;
      };
      function F() {
        i2 || (s.prototype.constructor.call(this), this.motions = new Array(), this._$7r = null, this._$7r = F._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = true, this.loopFadeIn = true, this._$AS = -1, _$a0());
      }
      F.prototype = new s(), F._$cs = "VISIBLE:", F._$ar = "LAYOUT:", F._$Co = 0, F._$D2 = [], F._$1T = 1, F.loadMotion = function(t3) {
        var e2 = new F(), i3 = [0], r2 = t3.length;
        e2._$yT = 0;
        for (var o2 = 0; o2 < r2; ++o2) {
          var n2 = 255 & t3[o2];
          if (n2 != "\n" && n2 != "\r")
            if (n2 != "#")
              if (n2 != "$") {
                if ("a" <= n2 && n2 <= "z" || "A" <= n2 && n2 <= "Z" || n2 == "_") {
                  for (h2 = o2, l2 = -1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                    if (n2 == "=") {
                      l2 = o2;
                      break;
                    }
                  if (l2 >= 0) {
                    var s2 = new N();
                    I.startsWith(t3, h2, F._$cs) ? (s2._$RP = N._$hs, s2._$4P = new String(t3, h2, l2 - h2)) : I.startsWith(t3, h2, F._$ar) ? (s2._$4P = new String(t3, h2 + 7, l2 - h2 - 7), I.startsWith(t3, h2 + 7, "ANCHOR_X") ? s2._$RP = N._$xs : I.startsWith(t3, h2 + 7, "ANCHOR_Y") ? s2._$RP = N._$us : I.startsWith(t3, h2 + 7, "SCALE_X") ? s2._$RP = N._$qs : I.startsWith(t3, h2 + 7, "SCALE_Y") ? s2._$RP = N._$Ys : I.startsWith(t3, h2 + 7, "X") ? s2._$RP = N._$ws : I.startsWith(t3, h2 + 7, "Y") && (s2._$RP = N._$Ns)) : (s2._$RP = N._$Fr, s2._$4P = new String(t3, h2, l2 - h2)), e2.motions.push(s2);
                    var a2 = 0;
                    for (F._$D2.clear(), o2 = l2 + 1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                      if (n2 != "," && n2 != " " && n2 != "	") {
                        u2 = I._$LS(t3, r2, o2, i3);
                        if (i3[0] > 0) {
                          F._$D2.push(u2), a2++;
                          var _2 = i3[0];
                          if (_2 < o2) {
                            console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                            break;
                          }
                          o2 = _2;
                        }
                      }
                    s2._$I0 = F._$D2._$BL(), a2 > e2._$yT && (e2._$yT = a2);
                  }
                }
              } else {
                for (var h2 = o2, l2 = -1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                  if (n2 == "=") {
                    l2 = o2;
                    break;
                  }
                var $2 = false;
                if (l2 >= 0) {
                  for (l2 == h2 + 4 && t3[h2 + 1] == "f" && t3[h2 + 2] == "p" && t3[h2 + 3] == "s" && ($2 = true), o2 = l2 + 1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                    if (n2 != "," && n2 != " " && n2 != "	") {
                      var u2 = I._$LS(t3, r2, o2, i3);
                      i3[0] > 0 && $2 && 5 < u2 && u2 < 121 && (e2._$D0 = u2), o2 = i3[0];
                    }
                }
                for (; o2 < r2 && (t3[o2] != "\n" && t3[o2] != "\r"); ++o2)
                  ;
              }
            else
              for (; o2 < r2 && (t3[o2] != "\n" && t3[o2] != "\r"); ++o2)
                ;
        }
        return e2._$AS = 1e3 * e2._$yT / e2._$D0 | 0, e2;
      }, F.prototype.getDurationMSec = function() {
        return this._$AS;
      }, F.prototype.dump = function() {
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var e2 = this.motions[t3];
          console.log("_$wL[%s] [%d]. ", e2._$4P, e2._$I0.length);
          for (var i3 = 0; i3 < e2._$I0.length && i3 < 10; i3++)
            console.log("%5.2f ,", e2._$I0[i3]);
          console.log("\n");
        }
      }, F.prototype.updateParamExe = function(t3, e2, i3, r2) {
        for (var o2 = (e2 - r2._$z2) * this._$D0 / 1e3, n2 = 0 | o2, s2 = o2 - n2, a2 = 0; a2 < this.motions.length; a2++) {
          var _2 = this.motions[a2], h2 = _2._$I0.length, l2 = _2._$4P;
          if (_2._$RP == N._$hs) {
            var $2 = _2._$I0[n2 >= h2 ? h2 - 1 : n2];
            t3.setParamFloat(l2, $2);
          } else if (N._$ws <= _2._$RP && _2._$RP <= N._$Ys)
            ;
          else {
            var u2 = t3.getParamFloat(l2), p2 = _2._$I0[n2 >= h2 ? h2 - 1 : n2], c2 = u2 + (p2 + (_2._$I0[n2 + 1 >= h2 ? h2 - 1 : n2 + 1] - p2) * s2 - u2) * i3;
            t3.setParamFloat(l2, c2);
          }
        }
        n2 >= this._$yT && (this._$E ? (r2._$z2 = e2, this.loopFadeIn && (r2._$bs = e2)) : r2._$9L = true);
      }, F.prototype._$r0 = function() {
        return this._$E;
      }, F.prototype._$aL = function(t3) {
        this._$E = t3;
      }, F.prototype.isLoopFadeIn = function() {
        return this.loopFadeIn;
      }, F.prototype.setLoopFadeIn = function(t3) {
        this.loopFadeIn = t3;
      };
      function C() {
        this._$P = new Float32Array(100), this.size = 0;
      }
      C.prototype.clear = function() {
        this.size = 0;
      }, C.prototype.add = function(t3) {
        if (this._$P.length <= this.size) {
          var e2 = new Float32Array(2 * this.size);
          x._$jT(this._$P, 0, e2, 0, this.size), this._$P = e2;
        }
        this._$P[this.size++] = t3;
      }, C.prototype._$BL = function() {
        var t3 = new Float32Array(this.size);
        return x._$jT(this._$P, 0, t3, 0, this.size), t3;
      };
      function N() {
        this._$4P = null, this._$I0 = null, this._$RP = null;
      }
      N._$Fr = 0, N._$hs = 1, N._$ws = 100, N._$Ns = 101, N._$xs = 102, N._$us = 103, N._$qs = 104, N._$Ys = 105;
      function B() {
      }
      B._$Ms = 1, B._$Qs = 2, B._$i2 = 0, B._$No = 2, B._$do = B._$Ms, B._$Ls = true, B._$1r = 5, B._$Qb = 65, B._$J = 1e-4, B._$FT = 1e-3, B._$Ss = 3;
      function G() {
      }
      G._$o7 = 6, G._$S7 = 7, G._$s7 = 8, G._$77 = 9, G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10, G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11, G._$T7 = G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1, G._$Is = -2004318072, G._$h0 = 0, G._$4L = 23, G._$7P = 33, G._$uT = function(t3) {
        console.log("_$bo :: _$6 _$mo _$E0 : %d\n", t3);
      }, G._$9o = function(t3) {
        if (t3 < 40)
          return G._$uT(t3), null;
        if (t3 < 50)
          return G._$uT(t3), null;
        if (t3 < 60)
          return G._$uT(t3), null;
        if (t3 < 100)
          switch (t3) {
            case 65:
              return new Z();
            case 66:
              return new b();
            case 67:
              return new A();
            case 68:
              return new z();
            case 69:
              return new y();
            case 70:
              return new lt();
            default:
              return G._$uT(t3), null;
          }
        else if (t3 < 150)
          switch (t3) {
            case 131:
              return new nt();
            case 133:
              return new tt();
            case 136:
              return new $();
            case 137:
              return new rt();
            case 142:
              return new j();
          }
        return G._$uT(t3), null;
      };
      function U(t3) {
        i2 || (this._$QT = true, this._$co = -1, this._$qo = 0, this._$pb = new Array(U._$is), this._$_2 = new Float32Array(U._$is), this._$vr = new Float32Array(U._$is), this._$Rr = new Float32Array(U._$is), this._$Or = new Float32Array(U._$is), this._$fs = new Float32Array(U._$is), this._$Js = new Array(U._$is), this._$3S = new Array(), this._$aS = new Array(), this._$Bo = null, this._$F2 = new Array(), this._$db = new Array(), this._$8b = new Array(), this._$Hr = new Array(), this._$Ws = null, this._$Vs = null, this._$Er = null, this._$Es = new Int16Array(B._$Qb), this._$ZP = new Float32Array(2 * B._$1r), this._$Ri = t3, this._$b0 = U._$HP++, this.clipManager = null, this.dp_webgl = null);
      }
      U._$HP = 0, U._$_0 = true, U._$V2 = -1, U._$W0 = -1, U._$jr = false, U._$ZS = true, U._$tr = -1e6, U._$lr = 1e6, U._$is = 32, U._$e = false, U.prototype.getDrawDataIndex = function(t3) {
        for (var e2 = this._$aS.length - 1; e2 >= 0; --e2)
          if (this._$aS[e2] != null && this._$aS[e2].getDrawDataID() == t3)
            return e2;
        return -1;
      }, U.prototype.getDrawData = function(t3) {
        if (t3 instanceof D) {
          if (this._$Bo == null) {
            this._$Bo = new Object();
            for (var e2 = this._$aS.length, i3 = 0; i3 < e2; i3++) {
              var r2 = this._$aS[i3], o2 = r2.getDrawDataID();
              o2 != null && (this._$Bo[o2] = r2);
            }
          }
          return this._$Bo[id];
        }
        return t3 < this._$aS.length ? this._$aS[t3] : null;
      }, U.prototype.release = function() {
        this._$3S.clear(), this._$aS.clear(), this._$F2.clear(), this._$Bo != null && this._$Bo.clear(), this._$db.clear(), this._$8b.clear(), this._$Hr.clear();
      }, U.prototype.init = function() {
        this._$co++, this._$F2.length > 0 && this.release();
        for (var t3 = this._$Ri.getModelImpl(), e2 = t3._$Xr(), i3 = e2.length, r2 = new Array(), n2 = new Array(), s2 = 0; s2 < i3; ++s2) {
          var a2 = e2[s2];
          this._$F2.push(a2), this._$Hr.push(a2.init(this));
          for (var _2 = a2.getBaseData(), h2 = _2.length, l2 = 0; l2 < h2; ++l2)
            r2.push(_2[l2]);
          for (l2 = 0; l2 < h2; ++l2) {
            var $2 = _2[l2].init(this);
            $2._$l2(s2), n2.push($2);
          }
          var u2 = a2.getDrawData(), p2 = u2.length;
          for (l2 = 0; l2 < p2; ++l2) {
            var c2 = u2[l2], f2 = c2.init(this);
            f2._$IP = s2, this._$aS.push(c2), this._$8b.push(f2);
          }
        }
        for (var d2 = r2.length, g2 = gt._$2o(); ; ) {
          var y2 = false;
          for (s2 = 0; s2 < d2; ++s2) {
            var m2 = r2[s2];
            if (m2 != null) {
              var T2 = m2.getTargetBaseDataID();
              (T2 == null || T2 == g2 || this.getBaseDataIndex(T2) >= 0) && (this._$3S.push(m2), this._$db.push(n2[s2]), r2[s2] = null, y2 = true);
            }
          }
          if (!y2)
            break;
        }
        var v2 = t3._$E2();
        if (v2 != null) {
          var P2 = v2._$1s();
          if (P2 != null) {
            var S2 = P2.length;
            for (s2 = 0; s2 < S2; ++s2) {
              var L2 = P2[s2];
              L2 != null && this._$02(L2.getParamID(), L2.getDefaultValue(), L2.getMinValue(), L2.getMaxValue());
            }
          }
        }
        this.clipManager = new o(this.dp_webgl), this.clipManager.init(this, this._$aS, this._$8b), this._$QT = true;
      }, U.prototype.update = function() {
        U._$e && a.start("_$zL");
        for (var t3 = this._$_2.length, e2 = 0; e2 < t3; e2++)
          this._$_2[e2] != this._$vr[e2] && (this._$Js[e2] = U._$ZS, this._$vr[e2] = this._$_2[e2]);
        var i3 = this._$3S.length, r2 = this._$aS.length, o2 = W._$or(), n2 = W._$Pr() - o2 + 1;
        (this._$Ws == null || this._$Ws.length < n2) && (this._$Ws = new Int16Array(n2), this._$Vs = new Int16Array(n2));
        for (e2 = 0; e2 < n2; e2++)
          this._$Ws[e2] = U._$V2, this._$Vs[e2] = U._$V2;
        (this._$Er == null || this._$Er.length < r2) && (this._$Er = new Int16Array(r2));
        for (e2 = 0; e2 < r2; e2++)
          this._$Er[e2] = U._$W0;
        U._$e && a.dump("_$zL"), U._$e && a.start("_$UL");
        for (var s2 = null, _2 = 0; _2 < i3; ++_2) {
          var h2 = this._$3S[_2], l2 = this._$db[_2];
          try {
            h2._$Nr(this, l2), h2._$2b(this, l2);
          } catch (t4) {
            s2 == null && (s2 = t4);
          }
        }
        s2 != null && U._$_0 && a._$Rb(s2), U._$e && a.dump("_$UL"), U._$e && a.start("_$DL");
        for (var $2 = null, u2 = 0; u2 < r2; ++u2) {
          var p2 = this._$aS[u2], c2 = this._$8b[u2];
          try {
            if (p2._$Nr(this, c2), c2._$u2())
              continue;
            p2._$2b(this, c2);
            var f2, d2 = Math.floor(p2._$zS(this, c2) - o2);
            try {
              f2 = this._$Vs[d2];
            } catch (t4) {
              console.log("_$li :: %s / %s        @@_$fS\n", t4.toString(), p2.getDrawDataID().toString()), d2 = Math.floor(p2._$zS(this, c2) - o2);
              continue;
            }
            f2 == U._$V2 ? this._$Ws[d2] = u2 : this._$Er[f2] = u2, this._$Vs[d2] = u2;
          } catch (t4) {
            $2 == null && ($2 = t4, at._$sT(at._$H7));
          }
        }
        $2 != null && U._$_0 && a._$Rb($2), U._$e && a.dump("_$DL"), U._$e && a.start("_$eL");
        for (e2 = this._$Js.length - 1; e2 >= 0; e2--)
          this._$Js[e2] = U._$jr;
        return this._$QT = false, U._$e && a.dump("_$eL"), false;
      }, U.prototype.preDraw = function(t3) {
        this.clipManager != null && (t3._$ZT(), this.clipManager.setupClip(this, t3));
      }, U.prototype.draw = function(t3) {
        if (this._$Ws != null) {
          var e2 = this._$Ws.length;
          t3._$ZT();
          for (var i3 = 0; i3 < e2; ++i3) {
            var r2 = this._$Ws[i3];
            if (r2 != U._$V2)
              for (; ; ) {
                var o2 = this._$aS[r2], n2 = this._$8b[r2];
                if (n2._$yo()) {
                  var s2 = n2._$IP, _2 = this._$Hr[s2];
                  n2._$VS = _2.getPartsOpacity(), o2.draw(t3, this, n2);
                }
                var h2 = this._$Er[r2];
                if (h2 <= r2 || h2 == U._$W0)
                  break;
                r2 = h2;
              }
          }
        } else
          a._$li("call _$Ri.update() before _$Ri.draw() ");
      }, U.prototype.getParamIndex = function(t3) {
        for (var e2 = this._$pb.length - 1; e2 >= 0; --e2)
          if (this._$pb[e2] == t3)
            return e2;
        return this._$02(t3, 0, U._$tr, U._$lr);
      }, U.prototype._$BS = function(t3) {
        return this.getBaseDataIndex(t3);
      }, U.prototype.getBaseDataIndex = function(t3) {
        for (var e2 = this._$3S.length - 1; e2 >= 0; --e2)
          if (this._$3S[e2] != null && this._$3S[e2].getBaseDataID() == t3)
            return e2;
        return -1;
      }, U.prototype._$UT = function(t3, e2) {
        var i3 = new Float32Array(e2);
        return x._$jT(t3, 0, i3, 0, t3.length), i3;
      }, U.prototype._$02 = function(t3, e2, i3, r2) {
        if (this._$qo >= this._$pb.length) {
          var o2 = this._$pb.length, n2 = new Array(2 * o2);
          x._$jT(this._$pb, 0, n2, 0, o2), this._$pb = n2, this._$_2 = this._$UT(this._$_2, 2 * o2), this._$vr = this._$UT(this._$vr, 2 * o2), this._$Rr = this._$UT(this._$Rr, 2 * o2), this._$Or = this._$UT(this._$Or, 2 * o2);
          var s2 = new Array();
          x._$jT(this._$Js, 0, s2, 0, o2), this._$Js = s2;
        }
        return this._$pb[this._$qo] = t3, this._$_2[this._$qo] = e2, this._$vr[this._$qo] = e2, this._$Rr[this._$qo] = i3, this._$Or[this._$qo] = r2, this._$Js[this._$qo] = U._$ZS, this._$qo++;
      }, U.prototype._$Zo = function(t3, e2) {
        this._$3S[t3] = e2;
      }, U.prototype.setParamFloat = function(t3, e2) {
        e2 < this._$Rr[t3] && (e2 = this._$Rr[t3]), e2 > this._$Or[t3] && (e2 = this._$Or[t3]), this._$_2[t3] = e2;
      }, U.prototype.loadParam = function() {
        var t3 = this._$_2.length;
        t3 > this._$fs.length && (t3 = this._$fs.length), x._$jT(this._$fs, 0, this._$_2, 0, t3);
      }, U.prototype.saveParam = function() {
        var t3 = this._$_2.length;
        t3 > this._$fs.length && (this._$fs = new Float32Array(t3)), x._$jT(this._$_2, 0, this._$fs, 0, t3);
      }, U.prototype._$v2 = function() {
        return this._$co;
      }, U.prototype._$WS = function() {
        return this._$QT;
      }, U.prototype._$Xb = function(t3) {
        return this._$Js[t3] == U._$ZS;
      }, U.prototype._$vs = function() {
        return this._$Es;
      }, U.prototype._$Tr = function() {
        return this._$ZP;
      }, U.prototype.getBaseData = function(t3) {
        return this._$3S[t3];
      }, U.prototype.getParamFloat = function(t3) {
        return this._$_2[t3];
      }, U.prototype.getParamMax = function(t3) {
        return this._$Or[t3];
      }, U.prototype.getParamMin = function(t3) {
        return this._$Rr[t3];
      }, U.prototype.setPartsOpacity = function(t3, e2) {
        this._$Hr[t3].setPartsOpacity(e2);
      }, U.prototype.getPartsOpacity = function(t3) {
        return this._$Hr[t3].getPartsOpacity();
      }, U.prototype.getPartsDataIndex = function(t3) {
        for (var e2 = this._$F2.length - 1; e2 >= 0; --e2)
          if (this._$F2[e2] != null && this._$F2[e2]._$p2() == t3)
            return e2;
        return -1;
      }, U.prototype._$q2 = function(t3) {
        return this._$db[t3];
      }, U.prototype._$C2 = function(t3) {
        return this._$8b[t3];
      }, U.prototype._$Bb = function(t3) {
        return this._$Hr[t3];
      }, U.prototype._$5s = function(t3, e2) {
        for (var i3 = this._$Ws.length, r2 = t3, o2 = 0; o2 < i3; ++o2) {
          var n2 = this._$Ws[o2];
          if (n2 != U._$V2)
            for (; ; ) {
              var s2 = this._$8b[n2];
              s2._$yo() && (s2._$GT()._$B2(this, s2, r2), r2 += e2);
              var a2 = this._$Er[n2];
              if (a2 <= n2 || a2 == U._$W0)
                break;
              n2 = a2;
            }
        }
      }, U.prototype.setDrawParam = function(t3) {
        this.dp_webgl = t3;
      }, U.prototype.getDrawParam = function() {
        return this.dp_webgl;
      };
      function Y() {
      }
      Y._$0T = function(t3) {
        return Y._$0T(new _$5(t3));
      }, Y._$0T = function(t3) {
        if (!t3.exists())
          throw new _$ls(t3._$3b());
        for (var e2, i3 = t3.length(), r2 = new Int8Array(i3), o2 = new _$Xs(new _$kb(t3), 8192), n2 = 0; (e2 = o2.read(r2, n2, i3 - n2)) > 0; )
          n2 += e2;
        return r2;
      }, Y._$C = function(t3) {
        var e2 = null, i3 = null;
        try {
          e2 = t3 instanceof Array ? t3 : new _$Xs(t3, 8192), i3 = new _$js();
          for (var r2, o2 = new Int8Array(1e3); (r2 = e2.read(o2)) > 0; )
            i3.write(o2, 0, r2);
          return i3._$TS();
        } finally {
          t3 != null && t3.close(), i3 != null && (i3.flush(), i3.close());
        }
      };
      function X() {
        i2 || (M.prototype.constructor.call(this), this._$sb = new Int32Array(X._$As), this._$U2 = new Array(), this.transform = null, this.gl = null, X._$NT == null && (X._$NT = X._$9r(256), X._$vS = X._$9r(256), X._$no = X._$vb(256)));
      }
      X.prototype = new M(), X._$As = 32, X._$Gr = false, X._$NT = null, X._$vS = null, X._$no = null, X._$9r = function(t3) {
        return new Float32Array(t3);
      }, X._$vb = function(t3) {
        return new Int16Array(t3);
      }, X._$cr = function(t3, e2) {
        return t3 == null || t3._$yL() < e2.length ? ((t3 = X._$9r(2 * e2.length)).put(e2), t3._$oT(0)) : (t3.clear(), t3.put(e2), t3._$oT(0)), t3;
      }, X._$mb = function(t3, e2) {
        return t3 == null || t3._$yL() < e2.length ? ((t3 = X._$vb(2 * e2.length)).put(e2), t3._$oT(0)) : (t3.clear(), t3.put(e2), t3._$oT(0)), t3;
      }, X._$Hs = function() {
        return X._$Gr;
      }, X._$as = function(t3) {
        X._$Gr = t3;
      }, X.prototype.setGL = function(t3) {
        this.gl = t3;
      }, X.prototype.setTransform = function(t3) {
        this.transform = t3;
      }, X.prototype._$ZT = function() {
      }, X.prototype._$Uo = function(t3, e2, i3, r2, o2, n2, s2, a2) {
        if (!(n2 < 0.01)) {
          var _2 = this._$U2[t3], h2 = n2 > 0.9 ? at.EXPAND_W : 0;
          this.gl.drawElements(_2, i3, r2, o2, n2, h2, this.transform, a2);
        }
      }, X.prototype._$Rs = function() {
        throw new Error("_$Rs");
      }, X.prototype._$Ds = function(t3) {
        throw new Error("_$Ds");
      }, X.prototype._$K2 = function() {
        for (var t3 = 0; t3 < this._$sb.length; t3++) {
          this._$sb[t3] != 0 && (this.gl._$Sr(1, this._$sb, t3), this._$sb[t3] = 0);
        }
      }, X.prototype.setTexture = function(t3, e2) {
        this._$sb.length < t3 + 1 && this._$nS(t3), this._$sb[t3] = e2;
      }, X.prototype.setTexture = function(t3, e2) {
        this._$sb.length < t3 + 1 && this._$nS(t3), this._$U2[t3] = e2;
      }, X.prototype._$nS = function(t3) {
        var e2 = Math.max(2 * this._$sb.length, t3 + 1 + 10), i3 = new Int32Array(e2);
        x._$jT(this._$sb, 0, i3, 0, this._$sb.length), this._$sb = i3;
        var r2 = new Array();
        x._$jT(this._$U2, 0, r2, 0, this._$U2.length), this._$U2 = r2;
      };
      function z() {
        i2 || (E.prototype.constructor.call(this), this._$GS = null, this._$Y0 = null);
      }
      z.prototype = new E(), z._$Xo = new Float32Array(2), z._$io = new Float32Array(2), z._$0o = new Float32Array(2), z._$Lo = new Float32Array(2), z._$To = new Float32Array(2), z._$Po = new Float32Array(2), z._$gT = new Array(), z.prototype._$zP = function() {
        this._$GS = new b(), this._$GS._$zP(), this._$Y0 = new Array();
      }, z.prototype.getType = function() {
        return E._$c2;
      }, z.prototype._$F0 = function(t3) {
        E.prototype._$F0.call(this, t3), this._$GS = t3._$nP(), this._$Y0 = t3._$nP(), E.prototype.readV2_opacity.call(this, t3);
      }, z.prototype.init = function(t3) {
        var e2 = new H(this);
        return e2._$Yr = new y(), this._$32() && (e2._$Wr = new y()), e2;
      }, z.prototype._$Nr = function(t3, e2) {
        this != e2._$GT() && console.log("### assert!! ### ");
        var i3 = e2;
        if (this._$GS._$Ur(t3)) {
          var r2 = z._$gT;
          r2[0] = false;
          var o2 = this._$GS._$Q2(t3, r2);
          e2._$Ib(r2[0]), this.interpolateOpacity(t3, this._$GS, e2, r2);
          var n2 = t3._$vs(), s2 = t3._$Tr();
          if (this._$GS._$zr(n2, s2, o2), o2 <= 0) {
            var a2 = this._$Y0[n2[0]];
            i3._$Yr.init(a2);
          } else if (o2 == 1) {
            a2 = this._$Y0[n2[0]];
            var _2 = this._$Y0[n2[1]], h2 = s2[0];
            i3._$Yr._$fL = a2._$fL + (_2._$fL - a2._$fL) * h2, i3._$Yr._$gL = a2._$gL + (_2._$gL - a2._$gL) * h2, i3._$Yr._$B0 = a2._$B0 + (_2._$B0 - a2._$B0) * h2, i3._$Yr._$z0 = a2._$z0 + (_2._$z0 - a2._$z0) * h2, i3._$Yr._$qT = a2._$qT + (_2._$qT - a2._$qT) * h2;
          } else if (o2 == 2) {
            a2 = this._$Y0[n2[0]], _2 = this._$Y0[n2[1]];
            var l2 = this._$Y0[n2[2]], $2 = this._$Y0[n2[3]], u2 = (h2 = s2[0], s2[1]), p2 = a2._$fL + (_2._$fL - a2._$fL) * h2, c2 = l2._$fL + ($2._$fL - l2._$fL) * h2;
            i3._$Yr._$fL = p2 + (c2 - p2) * u2, p2 = a2._$gL + (_2._$gL - a2._$gL) * h2, c2 = l2._$gL + ($2._$gL - l2._$gL) * h2, i3._$Yr._$gL = p2 + (c2 - p2) * u2, p2 = a2._$B0 + (_2._$B0 - a2._$B0) * h2, c2 = l2._$B0 + ($2._$B0 - l2._$B0) * h2, i3._$Yr._$B0 = p2 + (c2 - p2) * u2, p2 = a2._$z0 + (_2._$z0 - a2._$z0) * h2, c2 = l2._$z0 + ($2._$z0 - l2._$z0) * h2, i3._$Yr._$z0 = p2 + (c2 - p2) * u2, p2 = a2._$qT + (_2._$qT - a2._$qT) * h2, c2 = l2._$qT + ($2._$qT - l2._$qT) * h2, i3._$Yr._$qT = p2 + (c2 - p2) * u2;
          } else if (o2 == 3) {
            var f2 = this._$Y0[n2[0]], d2 = this._$Y0[n2[1]], g2 = this._$Y0[n2[2]], y2 = this._$Y0[n2[3]], m2 = this._$Y0[n2[4]], T2 = this._$Y0[n2[5]], v2 = this._$Y0[n2[6]], P2 = this._$Y0[n2[7]], S2 = (h2 = s2[0], u2 = s2[1], s2[2]), L2 = (p2 = f2._$fL + (d2._$fL - f2._$fL) * h2, c2 = g2._$fL + (y2._$fL - g2._$fL) * h2, m2._$fL + (T2._$fL - m2._$fL) * h2), M2 = v2._$fL + (P2._$fL - v2._$fL) * h2;
            i3._$Yr._$fL = (1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2), p2 = f2._$gL + (d2._$gL - f2._$gL) * h2, c2 = g2._$gL + (y2._$gL - g2._$gL) * h2, L2 = m2._$gL + (T2._$gL - m2._$gL) * h2, M2 = v2._$gL + (P2._$gL - v2._$gL) * h2, i3._$Yr._$gL = (1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2), p2 = f2._$B0 + (d2._$B0 - f2._$B0) * h2, c2 = g2._$B0 + (y2._$B0 - g2._$B0) * h2, L2 = m2._$B0 + (T2._$B0 - m2._$B0) * h2, M2 = v2._$B0 + (P2._$B0 - v2._$B0) * h2, i3._$Yr._$B0 = (1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2), p2 = f2._$z0 + (d2._$z0 - f2._$z0) * h2, c2 = g2._$z0 + (y2._$z0 - g2._$z0) * h2, L2 = m2._$z0 + (T2._$z0 - m2._$z0) * h2, M2 = v2._$z0 + (P2._$z0 - v2._$z0) * h2, i3._$Yr._$z0 = (1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2), p2 = f2._$qT + (d2._$qT - f2._$qT) * h2, c2 = g2._$qT + (y2._$qT - g2._$qT) * h2, L2 = m2._$qT + (T2._$qT - m2._$qT) * h2, M2 = v2._$qT + (P2._$qT - v2._$qT) * h2, i3._$Yr._$qT = (1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2);
          } else if (o2 == 4) {
            var w2 = this._$Y0[n2[0]], E2 = this._$Y0[n2[1]], x2 = this._$Y0[n2[2]], A2 = this._$Y0[n2[3]], I2 = this._$Y0[n2[4]], b2 = this._$Y0[n2[5]], O2 = this._$Y0[n2[6]], D2 = this._$Y0[n2[7]], R2 = this._$Y0[n2[8]], F2 = this._$Y0[n2[9]], C2 = this._$Y0[n2[10]], N2 = this._$Y0[n2[11]], B2 = this._$Y0[n2[12]], G2 = this._$Y0[n2[13]], U2 = this._$Y0[n2[14]], Y2 = this._$Y0[n2[15]], k = (h2 = s2[0], u2 = s2[1], S2 = s2[2], s2[3]), V = (p2 = w2._$fL + (E2._$fL - w2._$fL) * h2, c2 = x2._$fL + (A2._$fL - x2._$fL) * h2, L2 = I2._$fL + (b2._$fL - I2._$fL) * h2, M2 = O2._$fL + (D2._$fL - O2._$fL) * h2, R2._$fL + (F2._$fL - R2._$fL) * h2), X2 = C2._$fL + (N2._$fL - C2._$fL) * h2, H2 = B2._$fL + (G2._$fL - B2._$fL) * h2, W2 = U2._$fL + (Y2._$fL - U2._$fL) * h2;
            i3._$Yr._$fL = (1 - k) * ((1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2)) + k * ((1 - S2) * (V + (X2 - V) * u2) + S2 * (H2 + (W2 - H2) * u2)), p2 = w2._$gL + (E2._$gL - w2._$gL) * h2, c2 = x2._$gL + (A2._$gL - x2._$gL) * h2, L2 = I2._$gL + (b2._$gL - I2._$gL) * h2, M2 = O2._$gL + (D2._$gL - O2._$gL) * h2, V = R2._$gL + (F2._$gL - R2._$gL) * h2, X2 = C2._$gL + (N2._$gL - C2._$gL) * h2, H2 = B2._$gL + (G2._$gL - B2._$gL) * h2, W2 = U2._$gL + (Y2._$gL - U2._$gL) * h2, i3._$Yr._$gL = (1 - k) * ((1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2)) + k * ((1 - S2) * (V + (X2 - V) * u2) + S2 * (H2 + (W2 - H2) * u2)), p2 = w2._$B0 + (E2._$B0 - w2._$B0) * h2, c2 = x2._$B0 + (A2._$B0 - x2._$B0) * h2, L2 = I2._$B0 + (b2._$B0 - I2._$B0) * h2, M2 = O2._$B0 + (D2._$B0 - O2._$B0) * h2, V = R2._$B0 + (F2._$B0 - R2._$B0) * h2, X2 = C2._$B0 + (N2._$B0 - C2._$B0) * h2, H2 = B2._$B0 + (G2._$B0 - B2._$B0) * h2, W2 = U2._$B0 + (Y2._$B0 - U2._$B0) * h2, i3._$Yr._$B0 = (1 - k) * ((1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2)) + k * ((1 - S2) * (V + (X2 - V) * u2) + S2 * (H2 + (W2 - H2) * u2)), p2 = w2._$z0 + (E2._$z0 - w2._$z0) * h2, c2 = x2._$z0 + (A2._$z0 - x2._$z0) * h2, L2 = I2._$z0 + (b2._$z0 - I2._$z0) * h2, M2 = O2._$z0 + (D2._$z0 - O2._$z0) * h2, V = R2._$z0 + (F2._$z0 - R2._$z0) * h2, X2 = C2._$z0 + (N2._$z0 - C2._$z0) * h2, H2 = B2._$z0 + (G2._$z0 - B2._$z0) * h2, W2 = U2._$z0 + (Y2._$z0 - U2._$z0) * h2, i3._$Yr._$z0 = (1 - k) * ((1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2)) + k * ((1 - S2) * (V + (X2 - V) * u2) + S2 * (H2 + (W2 - H2) * u2)), p2 = w2._$qT + (E2._$qT - w2._$qT) * h2, c2 = x2._$qT + (A2._$qT - x2._$qT) * h2, L2 = I2._$qT + (b2._$qT - I2._$qT) * h2, M2 = O2._$qT + (D2._$qT - O2._$qT) * h2, V = R2._$qT + (F2._$qT - R2._$qT) * h2, X2 = C2._$qT + (N2._$qT - C2._$qT) * h2, H2 = B2._$qT + (G2._$qT - B2._$qT) * h2, W2 = U2._$qT + (Y2._$qT - U2._$qT) * h2, i3._$Yr._$qT = (1 - k) * ((1 - S2) * (p2 + (c2 - p2) * u2) + S2 * (L2 + (M2 - L2) * u2)) + k * ((1 - S2) * (V + (X2 - V) * u2) + S2 * (H2 + (W2 - H2) * u2));
          } else {
            for (var j2 = 0 | Math.pow(2, o2), q2 = new Float32Array(j2), J2 = 0; J2 < j2; J2++) {
              for (var Q2 = J2, Z2 = 1, K2 = 0; K2 < o2; K2++)
                Z2 *= Q2 % 2 == 0 ? 1 - s2[K2] : s2[K2], Q2 /= 2;
              q2[J2] = Z2;
            }
            for (var tt2 = new Array(), et2 = 0; et2 < j2; et2++)
              tt2[et2] = this._$Y0[n2[et2]];
            var it2 = 0, rt2 = 0, ot2 = 0, nt2 = 0, st2 = 0;
            for (et2 = 0; et2 < j2; et2++)
              it2 += q2[et2] * tt2[et2]._$fL, rt2 += q2[et2] * tt2[et2]._$gL, ot2 += q2[et2] * tt2[et2]._$B0, nt2 += q2[et2] * tt2[et2]._$z0, st2 += q2[et2] * tt2[et2]._$qT;
            i3._$Yr._$fL = it2, i3._$Yr._$gL = rt2, i3._$Yr._$B0 = ot2, i3._$Yr._$z0 = nt2, i3._$Yr._$qT = st2;
          }
          a2 = this._$Y0[n2[0]];
          i3._$Yr.reflectX = a2.reflectX, i3._$Yr.reflectY = a2.reflectY;
        }
      }, z.prototype._$2b = function(t3, e2) {
        this != e2._$GT() && console.log("### assert!! ### ");
        var i3 = e2;
        if (i3._$hS(true), this._$32()) {
          var r2 = this.getTargetBaseDataID();
          if (i3._$8r == E._$ur && (i3._$8r = t3.getBaseDataIndex(r2)), i3._$8r < 0)
            at._$so && a._$li("_$L _$0P _$G :: %s", r2), i3._$hS(false);
          else {
            var o2 = t3.getBaseData(i3._$8r);
            if (o2 != null) {
              var n2 = t3._$q2(i3._$8r), s2 = z._$Xo;
              s2[0] = i3._$Yr._$fL, s2[1] = i3._$Yr._$gL;
              var _2 = z._$io;
              _2[0] = 0, _2[1] = -0.1;
              n2._$GT().getType() == E._$c2 ? _2[1] = -10 : _2[1] = -0.1;
              var h2 = z._$0o;
              this._$Jr(t3, o2, n2, s2, _2, h2);
              var l2 = St._$92(_2, h2);
              o2._$nb(t3, n2, s2, s2, 1, 0, 2), i3._$Wr._$fL = s2[0], i3._$Wr._$gL = s2[1], i3._$Wr._$B0 = i3._$Yr._$B0, i3._$Wr._$z0 = i3._$Yr._$z0, i3._$Wr._$qT = i3._$Yr._$qT - l2 * St._$NS;
              var $2 = n2.getTotalScale();
              i3.setTotalScale_notForClient($2 * i3._$Wr._$B0);
              var u2 = n2.getTotalOpacity();
              i3.setTotalOpacity(u2 * i3.getInterpolatedOpacity()), i3._$Wr.reflectX = i3._$Yr.reflectX, i3._$Wr.reflectY = i3._$Yr.reflectY, i3._$hS(n2._$yo());
            } else
              i3._$hS(false);
          }
        } else
          i3.setTotalScale_notForClient(i3._$Yr._$B0), i3.setTotalOpacity(i3.getInterpolatedOpacity());
      }, z.prototype._$nb = function(t3, e2, i3, r2, o2, n2, s2) {
        this != e2._$GT() && console.log("### assert!! ### ");
        for (var a2, _2, h2 = e2, l2 = h2._$Wr != null ? h2._$Wr : h2._$Yr, $2 = Math.sin(St._$bS * l2._$qT), u2 = Math.cos(St._$bS * l2._$qT), p2 = h2.getTotalScale(), c2 = l2.reflectX ? -1 : 1, f2 = l2.reflectY ? -1 : 1, d2 = u2 * p2 * c2, g2 = -$2 * p2 * f2, y2 = $2 * p2 * c2, m2 = u2 * p2 * f2, T2 = l2._$fL, v2 = l2._$gL, P2 = o2 * s2, S2 = n2; S2 < P2; S2 += s2)
          a2 = i3[S2], _2 = i3[S2 + 1], r2[S2] = d2 * a2 + g2 * _2 + T2, r2[S2 + 1] = y2 * a2 + m2 * _2 + v2;
      }, z.prototype._$Jr = function(t3, e2, i3, r2, o2, n2) {
        e2 != i3._$GT() && console.log("### assert!! ### ");
        var s2 = z._$Lo;
        z._$Lo[0] = r2[0], z._$Lo[1] = r2[1], e2._$nb(t3, i3, s2, s2, 1, 0, 2);
        for (var a2 = z._$To, _2 = z._$Po, h2 = 1, l2 = 0; l2 < 10; l2++) {
          if (_2[0] = r2[0] + h2 * o2[0], _2[1] = r2[1] + h2 * o2[1], e2._$nb(t3, i3, _2, a2, 1, 0, 2), a2[0] -= s2[0], a2[1] -= s2[1], a2[0] != 0 || a2[1] != 0)
            return n2[0] = a2[0], void (n2[1] = a2[1]);
          if (_2[0] = r2[0] - h2 * o2[0], _2[1] = r2[1] - h2 * o2[1], e2._$nb(t3, i3, _2, a2, 1, 0, 2), a2[0] -= s2[0], a2[1] -= s2[1], a2[0] != 0 || a2[1] != 0)
            return a2[0] = -a2[0], a2[0] = -a2[0], n2[0] = a2[0], void (n2[1] = a2[1]);
          h2 *= 0.1;
        }
        at._$so && console.log("_$L0 to transform _$SP\n");
      };
      function H(t3) {
        st.prototype.constructor.call(this, t3), this._$8r = E._$ur, this._$Yr = null, this._$Wr = null;
      }
      H.prototype = new st();
      function W() {
        i2 || (L.prototype.constructor.call(this), this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null);
      }
      W.prototype = new L(), W._$ur = -2, W._$ES = 500, W._$wb = 2, W._$8S = 3, W._$os = 4, W._$52 = W._$ES, W._$R2 = W._$ES, W._$Sb = function(t3) {
        for (var e2 = t3.length - 1; e2 >= 0; --e2) {
          var i3 = t3[e2];
          i3 < W._$52 ? W._$52 = i3 : i3 > W._$R2 && (W._$R2 = i3);
        }
      }, W._$or = function() {
        return W._$52;
      }, W._$Pr = function() {
        return W._$R2;
      }, W.prototype._$F0 = function(t3) {
        this._$gP = t3._$nP(), this._$dr = t3._$nP(), this._$GS = t3._$nP(), this._$qb = t3._$6L(), this._$Lb = t3._$cS(), this._$mS = t3._$Tb(), t3.getFormatVersion() >= G._$T7 ? (this.clipID = t3._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = null, W._$Sb(this._$Lb);
      }, W.prototype.getClipIDList = function() {
        return this.clipIDList;
      }, W.prototype._$Nr = function(t3, e2) {
        if (e2._$IS[0] = false, e2._$Us = P._$Z2(t3, this._$GS, e2._$IS, this._$Lb), at._$Zs)
          ;
        else if (e2._$IS[0])
          return;
        e2._$7s = P._$br(t3, this._$GS, e2._$IS, this._$mS);
      }, W.prototype._$2b = function(t3) {
      }, W.prototype.getDrawDataID = function() {
        return this._$gP;
      }, W.prototype._$j2 = function(t3) {
        this._$gP = t3;
      }, W.prototype.getOpacity = function(t3, e2) {
        return e2._$7s;
      }, W.prototype._$zS = function(t3, e2) {
        return e2._$Us;
      }, W.prototype.getTargetBaseDataID = function() {
        return this._$dr;
      }, W.prototype._$gs = function(t3) {
        this._$dr = t3;
      }, W.prototype._$32 = function() {
        return this._$dr != null && this._$dr != gt._$2o();
      }, W.prototype.getType = function() {
      };
      function j() {
        i2 || (this._$NL = null, this._$3S = null, this._$aS = null, j._$42++);
      }
      j._$42 = 0, j.prototype._$1b = function() {
        return this._$3S;
      }, j.prototype.getDrawDataList = function() {
        return this._$aS;
      }, j.prototype._$F0 = function(t3) {
        this._$NL = t3._$nP(), this._$aS = t3._$nP(), this._$3S = t3._$nP();
      }, j.prototype._$kr = function(t3) {
        t3._$Zo(this._$3S), t3._$xo(this._$aS), this._$3S = null, this._$aS = null;
      };
      function q() {
        i2 || (r.prototype.constructor.call(this), this._$zo = new X());
      }
      q.prototype = new r(), q.loadModel = function(t3) {
        var e2 = new q();
        return r._$62(e2, t3), e2;
      }, q.loadModel = function(t3) {
        var e2 = new q();
        return r._$62(e2, t3), e2;
      }, q._$to = function() {
        return new q();
      }, q._$er = function(t3) {
        var e2 = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
        if (e2.exists() == 0)
          throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e2._$PL());
        for (var i3 = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], r2 = q.loadModel(e2._$3b()), o2 = 0; o2 < i3.length; o2++) {
          var n2 = new _$5(i3[o2]);
          if (n2.exists() == 0)
            throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n2._$PL());
          r2.setTexture(o2, _$nL._$_o(t3, n2._$3b()));
        }
        return r2;
      }, q.prototype.setGL = function(t3) {
        this._$zo.setGL(t3);
      }, q.prototype.setTransform = function(t3) {
        this._$zo.setTransform(t3);
      }, q.prototype.draw = function() {
        this._$5S.draw(this._$zo);
      }, q.prototype._$K2 = function() {
        this._$zo._$K2();
      }, q.prototype.setTexture = function(t3, e2) {
        this._$zo == null && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t3, e2);
      }, q.prototype.setTexture = function(t3, e2) {
        this._$zo == null && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t3, e2);
      }, q.prototype._$Rs = function() {
        return this._$zo._$Rs();
      }, q.prototype._$Ds = function(t3) {
        this._$zo._$Ds(t3);
      }, q.prototype.getDrawParam = function() {
        return this._$zo;
      };
      function J() {
        i2 || (s.prototype.constructor.call(this), this.motions = new Array(), this._$o2 = null, this._$7r = J._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = false, this.loopFadeIn = true, this._$rr = -1, this._$eP = 0);
      }
      J.prototype = new s(), J._$cs = "VISIBLE:", J._$ar = "LAYOUT:", J.MTN_PREFIX_FADEIN = "FADEIN:", J.MTN_PREFIX_FADEOUT = "FADEOUT:", J._$Co = 0, J._$1T = 1, J.loadMotion = function(t3) {
        var e2 = Y._$C(t3);
        return J.loadMotion(e2);
      };
      function Q(t3, e2) {
        return String.fromCharCode(t3.getUint8(e2));
      }
      J.loadMotion = function(t3) {
        t3 instanceof ArrayBuffer && (t3 = new DataView(t3));
        var e2 = new J(), i3 = [0], r2 = t3.byteLength;
        e2._$yT = 0;
        for (var o2 = 0; o2 < r2; ++o2) {
          var n2 = Q(t3, o2), s2 = n2.charCodeAt(0);
          if (n2 != "\n" && n2 != "\r")
            if (n2 != "#")
              if (n2 != "$") {
                if (97 <= s2 && s2 <= 122 || 65 <= s2 && s2 <= 90 || n2 == "_") {
                  for ($2 = o2, u2 = -1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                    if (n2 == "=") {
                      u2 = o2;
                      break;
                    }
                  if (u2 >= 0) {
                    var a2 = new N();
                    I.startsWith(t3, $2, J._$cs) ? (a2._$RP = N._$hs, a2._$4P = I.createString(t3, $2, u2 - $2)) : I.startsWith(t3, $2, J._$ar) ? (a2._$4P = I.createString(t3, $2 + 7, u2 - $2 - 7), I.startsWith(t3, $2 + 7, "ANCHOR_X") ? a2._$RP = N._$xs : I.startsWith(t3, $2 + 7, "ANCHOR_Y") ? a2._$RP = N._$us : I.startsWith(t3, $2 + 7, "SCALE_X") ? a2._$RP = N._$qs : I.startsWith(t3, $2 + 7, "SCALE_Y") ? a2._$RP = N._$Ys : I.startsWith(t3, $2 + 7, "X") ? a2._$RP = N._$ws : I.startsWith(t3, $2 + 7, "Y") && (a2._$RP = N._$Ns)) : (a2._$RP = N._$Fr, a2._$4P = I.createString(t3, $2, u2 - $2)), e2.motions.push(a2);
                    var _2 = 0, h2 = [];
                    for (o2 = u2 + 1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                      if (n2 != "," && n2 != " " && n2 != "	") {
                        c2 = I._$LS(t3, r2, o2, i3);
                        if (i3[0] > 0) {
                          h2.push(c2), _2++;
                          var l2 = i3[0];
                          if (l2 < o2) {
                            console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                            break;
                          }
                          o2 = l2 - 1;
                        }
                      }
                    a2._$I0 = new Float32Array(h2), _2 > e2._$yT && (e2._$yT = _2);
                  }
                }
              } else {
                for (var $2 = o2, u2 = -1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                  if (n2 == "=") {
                    u2 = o2;
                    break;
                  }
                var p2 = false;
                if (u2 >= 0) {
                  for (u2 == $2 + 4 && Q(t3, $2 + 1) == "f" && Q(t3, $2 + 2) == "p" && Q(t3, $2 + 3) == "s" && (p2 = true), o2 = u2 + 1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                    if (n2 != "," && n2 != " " && n2 != "	") {
                      var c2 = I._$LS(t3, r2, o2, i3);
                      i3[0] > 0 && p2 && 5 < c2 && c2 < 121 && (e2._$D0 = c2), o2 = i3[0];
                    }
                }
                for (; o2 < r2 && (Q(t3, o2) != "\n" && Q(t3, o2) != "\r"); ++o2)
                  ;
              }
            else
              for (; o2 < r2 && (Q(t3, o2) != "\n" && Q(t3, o2) != "\r"); ++o2)
                ;
        }
        return e2._$rr = 1e3 * e2._$yT / e2._$D0 | 0, e2;
      }, J.prototype.getDurationMSec = function() {
        return this._$E ? -1 : this._$rr;
      }, J.prototype.getLoopDurationMSec = function() {
        return this._$rr;
      }, J.prototype.dump = function() {
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var e2 = this.motions[t3];
          console.log("_$wL[%s] [%d]. ", e2._$4P, e2._$I0.length);
          for (var i3 = 0; i3 < e2._$I0.length && i3 < 10; i3++)
            console.log("%5.2f ,", e2._$I0[i3]);
          console.log("\n");
        }
      }, J.prototype.updateParamExe = function(t3, e2, i3, r2) {
        for (var o2 = (e2 - r2._$z2) * this._$D0 / 1e3, n2 = 0 | o2, s2 = o2 - n2, a2 = 0; a2 < this.motions.length; a2++) {
          var _2 = this.motions[a2], h2 = _2._$I0.length, l2 = _2._$4P;
          if (_2._$RP == N._$hs) {
            var $2 = _2._$I0[n2 >= h2 ? h2 - 1 : n2];
            t3.setParamFloat(l2, $2);
          } else if (N._$ws <= _2._$RP && _2._$RP <= N._$Ys)
            ;
          else {
            var u2 = t3.getParamIndex(l2), p2 = t3.getModelContext(), c2 = 0.4 * (p2.getParamMax(u2) - p2.getParamMin(u2)), f2 = p2.getParamFloat(u2), d2 = _2._$I0[n2 >= h2 ? h2 - 1 : n2], g2 = _2._$I0[n2 + 1 >= h2 ? h2 - 1 : n2 + 1], y2 = f2 + ((d2 < g2 && g2 - d2 > c2 || d2 > g2 && d2 - g2 > c2 ? d2 : d2 + (g2 - d2) * s2) - f2) * i3;
            t3.setParamFloat(l2, y2);
          }
        }
        n2 >= this._$yT && (this._$E ? (r2._$z2 = e2, this.loopFadeIn && (r2._$bs = e2)) : r2._$9L = true), this._$eP = i3;
      }, J.prototype._$r0 = function() {
        return this._$E;
      }, J.prototype._$aL = function(t3) {
        this._$E = t3;
      }, J.prototype._$S0 = function() {
        return this._$D0;
      }, J.prototype._$U0 = function(t3) {
        this._$D0 = t3;
      }, J.prototype.isLoopFadeIn = function() {
        return this.loopFadeIn;
      }, J.prototype.setLoopFadeIn = function(t3) {
        this.loopFadeIn = t3;
      };
      function C() {
        this._$P = new Float32Array(100), this.size = 0;
      }
      C.prototype.clear = function() {
        this.size = 0;
      }, C.prototype.add = function(t3) {
        if (this._$P.length <= this.size) {
          var e2 = new Float32Array(2 * this.size);
          x._$jT(this._$P, 0, e2, 0, this.size), this._$P = e2;
        }
        this._$P[this.size++] = t3;
      }, C.prototype._$BL = function() {
        var t3 = new Float32Array(this.size);
        return x._$jT(this._$P, 0, t3, 0, this.size), t3;
      };
      function N() {
        this._$4P = null, this._$I0 = null, this._$RP = null;
      }
      N._$Fr = 0, N._$hs = 1, N._$ws = 100, N._$Ns = 101, N._$xs = 102, N._$us = 103, N._$qs = 104, N._$Ys = 105;
      function Z() {
        i2 || (E.prototype.constructor.call(this), this._$o = 0, this._$A = 0, this._$GS = null, this._$Eo = null);
      }
      Z.prototype = new E(), Z._$gT = new Array(), Z.prototype._$zP = function() {
        this._$GS = new b(), this._$GS._$zP();
      }, Z.prototype._$F0 = function(t3) {
        E.prototype._$F0.call(this, t3), this._$A = t3._$6L(), this._$o = t3._$6L(), this._$GS = t3._$nP(), this._$Eo = t3._$nP(), E.prototype.readV2_opacity.call(this, t3);
      }, Z.prototype.init = function(t3) {
        var e2 = new K(this), i3 = (this._$o + 1) * (this._$A + 1);
        return e2._$Cr != null && (e2._$Cr = null), e2._$Cr = new Float32Array(2 * i3), e2._$hr != null && (e2._$hr = null), this._$32() ? e2._$hr = new Float32Array(2 * i3) : e2._$hr = null, e2;
      }, Z.prototype._$Nr = function(t3, e2) {
        var i3 = e2;
        if (this._$GS._$Ur(t3)) {
          var r2 = this._$VT(), o2 = Z._$gT;
          o2[0] = false, P._$Vr(t3, this._$GS, o2, r2, this._$Eo, i3._$Cr, 0, 2), e2._$Ib(o2[0]), this.interpolateOpacity(t3, this._$GS, e2, o2);
        }
      }, Z.prototype._$2b = function(t3, e2) {
        var i3 = e2;
        if (i3._$hS(true), this._$32()) {
          var r2 = this.getTargetBaseDataID();
          if (i3._$8r == E._$ur && (i3._$8r = t3.getBaseDataIndex(r2)), i3._$8r < 0)
            at._$so && a._$li("_$L _$0P _$G :: %s", r2), i3._$hS(false);
          else {
            var o2 = t3.getBaseData(i3._$8r), n2 = t3._$q2(i3._$8r);
            if (o2 != null && n2._$yo()) {
              var s2 = n2.getTotalScale();
              i3.setTotalScale_notForClient(s2);
              var _2 = n2.getTotalOpacity();
              i3.setTotalOpacity(_2 * i3.getInterpolatedOpacity()), o2._$nb(t3, n2, i3._$Cr, i3._$hr, this._$VT(), 0, 2), i3._$hS(true);
            } else
              i3._$hS(false);
          }
        } else
          i3.setTotalOpacity(i3.getInterpolatedOpacity());
      }, Z.prototype._$nb = function(t3, e2, i3, r2, o2, n2, s2) {
        var a2 = e2, _2 = a2._$hr != null ? a2._$hr : a2._$Cr;
        Z.transformPoints_sdk2(i3, r2, o2, n2, s2, _2, this._$o, this._$A);
      }, Z.transformPoints_sdk2 = function(e2, i3, r2, o2, n2, s2, a2, _2) {
        for (var h2, l2, $2, u2 = r2 * n2, p2 = 0, c2 = 0, f2 = 0, d2 = 0, g2 = 0, y2 = 0, m2 = false, T2 = o2; T2 < u2; T2 += n2) {
          var v2, P2, S2, L2;
          if (S2 = e2[T2], P2 = (L2 = e2[T2 + 1]) * _2, (v2 = S2 * a2) < 0 || P2 < 0 || a2 <= v2 || _2 <= P2) {
            var M2 = a2 + 1;
            if (!m2) {
              m2 = true, p2 = 0.25 * (s2[2 * (0 + 0 * M2)] + s2[2 * (a2 + 0 * M2)] + s2[2 * (0 + _2 * M2)] + s2[2 * (a2 + _2 * M2)]), c2 = 0.25 * (s2[2 * (0 + 0 * M2) + 1] + s2[2 * (a2 + 0 * M2) + 1] + s2[2 * (0 + _2 * M2) + 1] + s2[2 * (a2 + _2 * M2) + 1]);
              var w2 = s2[2 * (a2 + _2 * M2)] - s2[2 * (0 + 0 * M2)], E2 = s2[2 * (a2 + _2 * M2) + 1] - s2[2 * (0 + 0 * M2) + 1], x2 = s2[2 * (a2 + 0 * M2)] - s2[2 * (0 + _2 * M2)], A2 = s2[2 * (a2 + 0 * M2) + 1] - s2[2 * (0 + _2 * M2) + 1];
              p2 -= 0.5 * ((f2 = 0.5 * (w2 + x2)) + (g2 = 0.5 * (w2 - x2))), c2 -= 0.5 * ((d2 = 0.5 * (E2 + A2)) + (y2 = 0.5 * (E2 - A2)));
            }
            if (-2 < S2 && S2 < 3 && -2 < L2 && L2 < 3)
              if (S2 <= 0)
                if (L2 <= 0) {
                  var I2 = s2[2 * (0 + 0 * M2)], b2 = s2[2 * (0 + 0 * M2) + 1], O2 = p2 - 2 * f2, D2 = c2 - 2 * d2, R2 = p2 - 2 * g2, F2 = c2 - 2 * y2, C2 = p2 - 2 * f2 - 2 * g2, N2 = c2 - 2 * d2 - 2 * y2;
                  (B2 = 0.5 * (S2 - -2)) + (G2 = 0.5 * (L2 - -2)) <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
                } else if (L2 >= 1) {
                  R2 = s2[2 * (0 + _2 * M2)], F2 = s2[2 * (0 + _2 * M2) + 1], C2 = p2 - 2 * f2 + 1 * g2, N2 = c2 - 2 * d2 + 1 * y2, I2 = p2 + 3 * g2, b2 = c2 + 3 * y2, O2 = p2 - 2 * f2 + 3 * g2, D2 = c2 - 2 * d2 + 3 * y2;
                  (B2 = 0.5 * (S2 - -2)) + (G2 = 0.5 * (L2 - 1)) <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
                } else {
                  (k = 0 | P2) == _2 && (k = _2 - 1);
                  var B2 = 0.5 * (S2 - -2), G2 = P2 - k, U2 = k / _2, Y2 = (k + 1) / _2;
                  R2 = s2[2 * (0 + k * M2)], F2 = s2[2 * (0 + k * M2) + 1], I2 = s2[2 * (0 + (k + 1) * M2)], b2 = s2[2 * (0 + (k + 1) * M2) + 1], C2 = p2 - 2 * f2 + U2 * g2, N2 = c2 - 2 * d2 + U2 * y2, O2 = p2 - 2 * f2 + Y2 * g2, D2 = c2 - 2 * d2 + Y2 * y2;
                  B2 + G2 <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
                }
              else if (1 <= S2)
                if (L2 <= 0) {
                  O2 = s2[2 * (a2 + 0 * M2)], D2 = s2[2 * (a2 + 0 * M2) + 1], I2 = p2 + 3 * f2, b2 = c2 + 3 * d2, C2 = p2 + 1 * f2 - 2 * g2, N2 = c2 + 1 * d2 - 2 * y2, R2 = p2 + 3 * f2 - 2 * g2, F2 = c2 + 3 * d2 - 2 * y2;
                  (B2 = 0.5 * (S2 - 1)) + (G2 = 0.5 * (L2 - -2)) <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
                } else if (L2 >= 1) {
                  C2 = s2[2 * (a2 + _2 * M2)], N2 = s2[2 * (a2 + _2 * M2) + 1], R2 = p2 + 3 * f2 + 1 * g2, F2 = c2 + 3 * d2 + 1 * y2, O2 = p2 + 1 * f2 + 3 * g2, D2 = c2 + 1 * d2 + 3 * y2, I2 = p2 + 3 * f2 + 3 * g2, b2 = c2 + 3 * d2 + 3 * y2;
                  (B2 = 0.5 * (S2 - 1)) + (G2 = 0.5 * (L2 - 1)) <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
                } else {
                  var k;
                  (k = 0 | P2) == _2 && (k = _2 - 1);
                  B2 = 0.5 * (S2 - 1), G2 = P2 - k, U2 = k / _2, Y2 = (k + 1) / _2, C2 = s2[2 * (a2 + k * M2)], N2 = s2[2 * (a2 + k * M2) + 1], O2 = s2[2 * (a2 + (k + 1) * M2)], D2 = s2[2 * (a2 + (k + 1) * M2) + 1], R2 = p2 + 3 * f2 + U2 * g2, F2 = c2 + 3 * d2 + U2 * y2, I2 = p2 + 3 * f2 + Y2 * g2, b2 = c2 + 3 * d2 + Y2 * y2;
                  B2 + G2 <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
                }
              else if (L2 <= 0) {
                (z2 = 0 | v2) == a2 && (z2 = a2 - 1);
                B2 = v2 - z2, G2 = 0.5 * (L2 - -2);
                var V = z2 / a2, X2 = (z2 + 1) / a2;
                O2 = s2[2 * (z2 + 0 * M2)], D2 = s2[2 * (z2 + 0 * M2) + 1], I2 = s2[2 * (z2 + 1 + 0 * M2)], b2 = s2[2 * (z2 + 1 + 0 * M2) + 1], C2 = p2 + V * f2 - 2 * g2, N2 = c2 + V * d2 - 2 * y2, R2 = p2 + X2 * f2 - 2 * g2, F2 = c2 + X2 * d2 - 2 * y2;
                B2 + G2 <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
              } else if (L2 >= 1) {
                var z2;
                (z2 = 0 | v2) == a2 && (z2 = a2 - 1);
                B2 = v2 - z2, G2 = 0.5 * (L2 - 1), V = z2 / a2, X2 = (z2 + 1) / a2, C2 = s2[2 * (z2 + _2 * M2)], N2 = s2[2 * (z2 + _2 * M2) + 1], R2 = s2[2 * (z2 + 1 + _2 * M2)], F2 = s2[2 * (z2 + 1 + _2 * M2) + 1], O2 = p2 + V * f2 + 3 * g2, D2 = c2 + V * d2 + 3 * y2, I2 = p2 + X2 * f2 + 3 * g2, b2 = c2 + X2 * d2 + 3 * y2;
                B2 + G2 <= 1 ? (i3[T2] = C2 + (R2 - C2) * B2 + (O2 - C2) * G2, i3[T2 + 1] = N2 + (F2 - N2) * B2 + (D2 - N2) * G2) : (i3[T2] = I2 + (O2 - I2) * (1 - B2) + (R2 - I2) * (1 - G2), i3[T2 + 1] = b2 + (D2 - b2) * (1 - B2) + (F2 - b2) * (1 - G2));
              } else
                t2.err.printf("_$li calc : %.4f , %.4f          @@BDBoxGrid\n", S2, L2);
            else
              i3[T2] = p2 + S2 * f2 + L2 * g2, i3[T2 + 1] = c2 + S2 * d2 + L2 * y2;
          } else
            h2 = 2 * ((0 | v2) + (0 | P2) * (a2 + 1)), (l2 = v2 - (0 | v2)) + ($2 = P2 - (0 | P2)) < 1 ? (i3[T2] = s2[h2] * (1 - l2 - $2) + s2[h2 + 2] * l2 + s2[h2 + 2 * (a2 + 1)] * $2, i3[T2 + 1] = s2[h2 + 1] * (1 - l2 - $2) + s2[h2 + 3] * l2 + s2[h2 + 2 * (a2 + 1) + 1] * $2) : (i3[T2] = s2[h2 + 2 * (a2 + 1) + 2] * (l2 - 1 + $2) + s2[h2 + 2 * (a2 + 1)] * (1 - l2) + s2[h2 + 2] * (1 - $2), i3[T2 + 1] = s2[h2 + 2 * (a2 + 1) + 3] * (l2 - 1 + $2) + s2[h2 + 2 * (a2 + 1) + 1] * (1 - l2) + s2[h2 + 3] * (1 - $2));
        }
      }, Z.prototype.transformPoints_sdk1 = function(t3, e2, i3, r2, o2, n2, s2) {
        for (var a2, _2, h2, l2, $2, u2, p2, c2 = e2, f2 = this._$o, d2 = this._$A, g2 = o2 * s2, y2 = c2._$hr != null ? c2._$hr : c2._$Cr, m2 = n2; m2 < g2; m2 += s2)
          at._$ts ? (a2 = i3[m2], _2 = i3[m2 + 1], a2 < 0 ? a2 = 0 : a2 > 1 && (a2 = 1), _2 < 0 ? _2 = 0 : _2 > 1 && (_2 = 1), l2 = 0 | (_2 *= d2), (h2 = 0 | (a2 *= f2)) > f2 - 1 && (h2 = f2 - 1), l2 > d2 - 1 && (l2 = d2 - 1), u2 = a2 - h2, p2 = _2 - l2, $2 = 2 * (h2 + l2 * (f2 + 1))) : (u2 = (a2 = i3[m2] * f2) - (0 | a2), p2 = (_2 = i3[m2 + 1] * d2) - (0 | _2), $2 = 2 * ((0 | a2) + (0 | _2) * (f2 + 1))), u2 + p2 < 1 ? (r2[m2] = y2[$2] * (1 - u2 - p2) + y2[$2 + 2] * u2 + y2[$2 + 2 * (f2 + 1)] * p2, r2[m2 + 1] = y2[$2 + 1] * (1 - u2 - p2) + y2[$2 + 3] * u2 + y2[$2 + 2 * (f2 + 1) + 1] * p2) : (r2[m2] = y2[$2 + 2 * (f2 + 1) + 2] * (u2 - 1 + p2) + y2[$2 + 2 * (f2 + 1)] * (1 - u2) + y2[$2 + 2] * (1 - p2), r2[m2 + 1] = y2[$2 + 2 * (f2 + 1) + 3] * (u2 - 1 + p2) + y2[$2 + 2 * (f2 + 1) + 1] * (1 - u2) + y2[$2 + 3] * (1 - p2));
      }, Z.prototype._$VT = function() {
        return (this._$o + 1) * (this._$A + 1);
      }, Z.prototype.getType = function() {
        return E._$_b;
      };
      function K(t3) {
        st.prototype.constructor.call(this, t3), this._$8r = E._$ur, this._$Cr = null, this._$hr = null;
      }
      K.prototype = new st();
      function tt() {
        i2 || (this.visible = true, this._$g0 = false, this._$NL = null, this._$3S = null, this._$aS = null, tt._$42++);
      }
      tt._$42 = 0, tt.prototype._$zP = function() {
        this._$3S = new Array(), this._$aS = new Array();
      }, tt.prototype._$F0 = function(t3) {
        this._$g0 = t3._$8L(), this.visible = t3._$8L(), this._$NL = t3._$nP(), this._$3S = t3._$nP(), this._$aS = t3._$nP();
      }, tt.prototype.init = function(t3) {
        var e2 = new et(this);
        return e2.setPartsOpacity(this.isVisible() ? 1 : 0), e2;
      }, tt.prototype._$6o = function(t3) {
        if (this._$3S == null)
          throw new Error("_$3S _$6 _$Wo@_$6o");
        this._$3S.push(t3);
      }, tt.prototype._$3o = function(t3) {
        if (this._$aS == null)
          throw new Error("_$aS _$6 _$Wo@_$3o");
        this._$aS.push(t3);
      }, tt.prototype._$Zo = function(t3) {
        this._$3S = t3;
      }, tt.prototype._$xo = function(t3) {
        this._$aS = t3;
      }, tt.prototype.isVisible = function() {
        return this.visible;
      }, tt.prototype._$uL = function() {
        return this._$g0;
      }, tt.prototype._$KP = function(t3) {
        this.visible = t3;
      }, tt.prototype._$ET = function(t3) {
        this._$g0 = t3;
      }, tt.prototype.getBaseData = function() {
        return this._$3S;
      }, tt.prototype.getDrawData = function() {
        return this._$aS;
      }, tt.prototype._$p2 = function() {
        return this._$NL;
      }, tt.prototype._$ob = function(t3) {
        this._$NL = t3;
      }, tt.prototype.getPartsID = function() {
        return this._$NL;
      }, tt.prototype._$MP = function(t3) {
        this._$NL = t3;
      };
      function et(t3) {
        this._$VS = null, this._$e0 = null, this._$e0 = t3;
      }
      et.prototype = new function() {
      }(), et.prototype.getPartsOpacity = function() {
        return this._$VS;
      }, et.prototype.setPartsOpacity = function(t3) {
        this._$VS = t3;
      };
      function it(t3) {
        i2 || (this.id = t3);
      }
      it._$L7 = function() {
        l._$27(), gt._$27(), D._$27(), h._$27();
      }, it.prototype.toString = function() {
        return this.id;
      };
      function rt() {
        i2 || (this._$4S = null);
      }
      rt.prototype._$1s = function() {
        return this._$4S;
      }, rt.prototype._$zP = function() {
        this._$4S = new Array();
      }, rt.prototype._$F0 = function(t3) {
        this._$4S = t3._$nP();
      }, rt.prototype._$Ks = function(t3) {
        this._$4S.push(t3);
      };
      function ot(t3, e2) {
        this.canvas = t3, this.context = e2, this.viewport = new Array(0, 0, t3.width, t3.height), this._$6r = 1, this._$xP = 0, this._$3r = 1, this._$uP = 0, this._$Qo = -1, this.cacheImages = {};
      }
      ot.tr = new dt(), ot._$50 = new dt(), ot._$Ti = new Array(0, 0), ot._$Pi = new Array(0, 0), ot._$B = new Array(0, 0), ot.prototype._$lP = function(t3, e2, i3, r2) {
        this.viewport = new Array(t3, e2, i3, r2);
      }, ot.prototype._$bL = function() {
        this.context.save();
        var t3 = this.viewport;
        t3 != null && (this.context.beginPath(), this.context._$Li(t3[0], t3[1], t3[2], t3[3]), this.context.clip());
      }, ot.prototype._$ei = function() {
        this.context.restore();
      }, ot.prototype.drawElements = function(t3, e2, i3, r2, o2, n2, s2, _2) {
        try {
          o2 != this._$Qo && (this._$Qo = o2, this.context.globalAlpha = o2);
          for (var h2 = e2.length, l2 = t3.width, $2 = t3.height, u2 = this.context, p2 = this._$xP, c2 = this._$uP, f2 = this._$6r, d2 = this._$3r, g2 = ot.tr, y2 = ot._$Ti, m2 = ot._$Pi, v2 = ot._$B, P2 = 0; P2 < h2; P2 += 3) {
            u2.save();
            var S2 = e2[P2], L2 = e2[P2 + 1], M2 = e2[P2 + 2], w2 = p2 + f2 * i3[2 * S2], E2 = c2 + d2 * i3[2 * S2 + 1], x2 = p2 + f2 * i3[2 * L2], A2 = c2 + d2 * i3[2 * L2 + 1], I2 = p2 + f2 * i3[2 * M2], b2 = c2 + d2 * i3[2 * M2 + 1];
            s2 && (s2._$PS(w2, E2, v2), w2 = v2[0], E2 = v2[1], s2._$PS(x2, A2, v2), x2 = v2[0], A2 = v2[1], s2._$PS(I2, b2, v2), I2 = v2[0], b2 = v2[1]);
            var O2 = l2 * r2[2 * S2], D2 = $2 - $2 * r2[2 * S2 + 1], R2 = l2 * r2[2 * L2], F2 = $2 - $2 * r2[2 * L2 + 1], C2 = l2 * r2[2 * M2], N2 = $2 - $2 * r2[2 * M2 + 1], B2 = Math.atan2(F2 - D2, R2 - O2), G2 = Math.atan2(A2 - E2, x2 - w2), U2 = x2 - w2, Y2 = A2 - E2, k = Math.sqrt(U2 * U2 + Y2 * Y2), V = R2 - O2, X2 = F2 - D2, z2 = k / Math.sqrt(V * V + X2 * X2);
            T._$ni(C2, N2, O2, D2, R2 - O2, F2 - D2, -(F2 - D2), R2 - O2, y2), T._$ni(I2, b2, w2, E2, x2 - w2, A2 - E2, -(A2 - E2), x2 - w2, m2);
            var H2 = (m2[0] - y2[0]) / y2[1], W2 = Math.min(O2, R2, C2), j2 = Math.max(O2, R2, C2), q2 = Math.min(D2, F2, N2), J2 = Math.max(D2, F2, N2), Q2 = Math.floor(W2), Z2 = Math.floor(q2), K2 = Math.ceil(j2), tt2 = Math.ceil(J2);
            g2.identity(), g2.translate(w2, E2), g2.rotate(G2), g2.scale(1, m2[1] / y2[1]), g2.shear(H2, 0), g2.scale(z2, z2), g2.rotate(-B2), g2.translate(-O2, -D2), g2.setContext(u2);
            if (n2 || (n2 = 1.2), at.IGNORE_EXPAND && (n2 = 0), at.USE_CACHED_POLYGON_IMAGE) {
              var et2 = _2._$e0;
              if (et2.gl_cacheImage = et2.gl_cacheImage || {}, !et2.gl_cacheImage[P2]) {
                var it2 = ot.createCanvas(K2 - Q2, tt2 - Z2);
                at.DEBUG_DATA.LDGL_CANVAS_MB = at.DEBUG_DATA.LDGL_CANVAS_MB || 0, at.DEBUG_DATA.LDGL_CANVAS_MB += (K2 - Q2) * (tt2 - Z2) * 4;
                var rt2 = it2.getContext("2d");
                rt2.translate(-Q2, -Z2), ot.clip(rt2, g2, n2, k, O2, D2, R2, F2, C2, N2, w2, E2, x2, A2, I2, b2), rt2.drawImage(t3, 0, 0), et2.gl_cacheImage[P2] = { cacheCanvas: it2, cacheContext: rt2 };
              }
              u2.drawImage(et2.gl_cacheImage[P2].cacheCanvas, Q2, Z2);
            } else
              at.IGNORE_CLIP || ot.clip(u2, g2, n2, k, O2, D2, R2, F2, C2, N2, w2, E2, x2, A2, I2, b2), at.USE_ADJUST_TRANSLATION && (W2 = 0, j2 = l2, q2 = 0, J2 = $2), u2.drawImage(t3, W2, q2, j2 - W2, J2 - q2, W2, q2, j2 - W2, J2 - q2);
            u2.restore();
          }
        } catch (t4) {
          a._$Rb(t4);
        }
      }, ot.clip = function(t3, e2, i3, r2, o2, n2, s2, a2, _2, h2, l2, $2, u2, p2, c2, f2) {
        i3 > 0.02 ? ot.expandClip(t3, e2, i3, r2, l2, $2, u2, p2, c2, f2) : ot.clipWithTransform(t3, null, o2, n2, s2, a2, _2, h2);
      }, ot.expandClip = function(t3, e2, i3, r2, o2, n2, s2, a2, _2, h2) {
        var l2 = s2 - o2, $2 = a2 - n2, u2 = _2 - o2, p2 = h2 - n2, c2 = l2 * p2 - $2 * u2 > 0 ? i3 : -i3, f2 = -$2, d2 = l2, g2 = _2 - s2, y2 = h2 - a2, m2 = -y2, T2 = g2, v2 = Math.sqrt(g2 * g2 + y2 * y2), P2 = -p2, S2 = u2, L2 = Math.sqrt(u2 * u2 + p2 * p2), M2 = o2 - c2 * f2 / r2, w2 = n2 - c2 * d2 / r2, E2 = s2 - c2 * f2 / r2, x2 = a2 - c2 * d2 / r2, A2 = s2 - c2 * m2 / v2, I2 = a2 - c2 * T2 / v2, b2 = _2 - c2 * m2 / v2, O2 = h2 - c2 * T2 / v2, D2 = o2 + c2 * P2 / L2, R2 = n2 + c2 * S2 / L2, F2 = _2 + c2 * P2 / L2, C2 = h2 + c2 * S2 / L2, N2 = ot._$50;
        return e2._$P2(N2) != null && (ot.clipWithTransform(t3, N2, M2, w2, E2, x2, A2, I2, b2, O2, F2, C2, D2, R2), true);
      }, ot.clipWithTransform = function(t3, e2, i3, r2, o2, n2, s2, _2) {
        if (arguments.length < 7)
          a._$li("err : @LDGL.clip()");
        else if (arguments[1] instanceof dt) {
          var h2 = ot._$B, l2 = e2, $2 = arguments;
          if (t3.beginPath(), l2) {
            l2._$PS($2[2], $2[3], h2), t3.moveTo(h2[0], h2[1]);
            for (var u2 = 4; u2 < $2.length; u2 += 2)
              l2._$PS($2[u2], $2[u2 + 1], h2), t3.lineTo(h2[0], h2[1]);
          } else {
            t3.moveTo($2[2], $2[3]);
            for (u2 = 4; u2 < $2.length; u2 += 2)
              t3.lineTo($2[u2], $2[u2 + 1]);
          }
          t3.clip();
        } else
          a._$li("err : a[0] is _$6 LDTransform @LDGL.clip()");
      }, ot.createCanvas = function(t3, e2) {
        var i3 = document.createElement("canvas");
        return i3.setAttribute("width", t3), i3.setAttribute("height", e2), i3 || a._$li("err : " + i3), i3;
      }, ot.dumpValues = function() {
        for (var t3 = "", e2 = 0; e2 < arguments.length; e2++)
          t3 += "[" + e2 + "]= " + arguments[e2].toFixed(3) + " , ";
        console.log(t3);
      };
      function nt() {
        i2 || (this._$TT = null, this._$LT = null, this._$FS = null, this._$wL = null);
      }
      nt.prototype._$F0 = function(t3) {
        this._$TT = t3._$_T(), this._$LT = t3._$_T(), this._$FS = t3._$_T(), this._$wL = t3._$nP();
      }, nt.prototype.getMinValue = function() {
        return this._$TT;
      }, nt.prototype.getMaxValue = function() {
        return this._$LT;
      }, nt.prototype.getDefaultValue = function() {
        return this._$FS;
      }, nt.prototype.getParamID = function() {
        return this._$wL;
      };
      function st(t3) {
        i2 || (this._$e0 = null, this._$IP = null, this._$JS = false, this._$AT = true, this._$e0 = t3, this.totalScale = 1, this._$7s = 1, this.totalOpacity = 1);
      }
      st.prototype._$yo = function() {
        return this._$AT && !this._$JS;
      }, st.prototype._$hS = function(t3) {
        this._$AT = t3;
      }, st.prototype._$GT = function() {
        return this._$e0;
      }, st.prototype._$l2 = function(t3) {
        this._$IP = t3;
      }, st.prototype.getPartsIndex = function() {
        return this._$IP;
      }, st.prototype._$x2 = function() {
        return this._$JS;
      }, st.prototype._$Ib = function(t3) {
        this._$JS = t3;
      }, st.prototype.getTotalScale = function() {
        return this.totalScale;
      }, st.prototype.setTotalScale_notForClient = function(t3) {
        this.totalScale = t3;
      }, st.prototype.getInterpolatedOpacity = function() {
        return this._$7s;
      }, st.prototype.setInterpolatedOpacity = function(t3) {
        this._$7s = t3;
      }, st.prototype.getTotalOpacity = function(t3) {
        return this.totalOpacity;
      }, st.prototype.setTotalOpacity = function(t3) {
        this.totalOpacity = t3;
      };
      function at() {
      }
      at._$2s = "2.1.00_1", at._$Kr = 201001e3, at._$sP = true, at._$so = true, at._$cb = false, at._$3T = true, at._$Ts = true, at._$fb = true, at._$ts = true, at.L2D_DEFORMER_EXTEND = true, at._$Wb = false, at._$yr = false, at._$Zs = false, at.L2D_NO_ERROR = 0, at._$i7 = 1e3, at._$9s = 1001, at._$es = 1100, at._$r7 = 2e3, at._$07 = 2001, at._$b7 = 2002, at._$H7 = 4e3, at.L2D_COLOR_BLEND_MODE_MULT = 0, at.L2D_COLOR_BLEND_MODE_ADD = 1, at.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2, at._$6b = true, at._$cT = 0, at.clippingMaskBufferSize = 256, at.glContext = new Array(), at.frameBuffers = new Array(), at.fTexture = new Array(), at.IGNORE_CLIP = false, at.IGNORE_EXPAND = false, at.EXPAND_W = 2, at.USE_ADJUST_TRANSLATION = true, at.USE_CANVAS_TRANSFORM = true, at.USE_CACHED_POLYGON_IMAGE = false, at.DEBUG_DATA = {}, at.PROFILE_IOS_SPEED = { PROFILE_NAME: "iOS Speed", USE_ADJUST_TRANSLATION: true, USE_CACHED_POLYGON_IMAGE: true, EXPAND_W: 4 }, at.PROFILE_IOS_QUALITY = { PROFILE_NAME: "iOS HiQ", USE_ADJUST_TRANSLATION: true, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 }, at.PROFILE_IOS_DEFAULT = at.PROFILE_IOS_QUALITY, at.PROFILE_ANDROID = { PROFILE_NAME: "Android", USE_ADJUST_TRANSLATION: false, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 }, at.PROFILE_DESKTOP = { PROFILE_NAME: "Desktop", USE_ADJUST_TRANSLATION: false, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 }, at.initProfile = function() {
        Mt.isIOS() ? at.setupProfile(at.PROFILE_IOS_DEFAULT) : Mt.isAndroid() ? at.setupProfile(at.PROFILE_ANDROID) : at.setupProfile(at.PROFILE_DESKTOP);
      }, at.setupProfile = function(t3, e2) {
        if (typeof t3 == "number")
          switch (t3) {
            case 9901:
              t3 = at.PROFILE_IOS_SPEED;
              break;
            case 9902:
              t3 = at.PROFILE_IOS_QUALITY;
              break;
            case 9903:
              t3 = at.PROFILE_IOS_DEFAULT;
              break;
            case 9904:
              t3 = at.PROFILE_ANDROID;
              break;
            case 9905:
              t3 = at.PROFILE_DESKTOP;
              break;
            default:
              alert("profile _$6 _$Ui : " + t3);
          }
        arguments.length < 2 && (e2 = true), e2 && console.log("profile : " + t3.PROFILE_NAME);
        for (var i3 in t3)
          at[i3] = t3[i3], e2 && console.log("  [" + i3 + "] = " + t3[i3]);
      }, at.init = function() {
        if (at._$6b) {
          console.log("Live2D %s", at._$2s), at._$6b = false;
          at.initProfile();
        }
      }, at.getVersionStr = function() {
        return at._$2s;
      }, at.getVersionNo = function() {
        return at._$Kr;
      }, at._$sT = function(t3) {
        at._$cT = t3;
      }, at.getError = function() {
        var t3 = at._$cT;
        return at._$cT = 0, t3;
      }, at.dispose = function() {
        at.glContext = [], at.frameBuffers = [], at.fTexture = [];
      }, at.setGL = function(t3, e2) {
        var i3 = e2 || 0;
        at.glContext[i3] = t3;
      }, at.getGL = function(t3) {
        return at.glContext[t3];
      }, at.setClippingMaskBufferSize = function(t3) {
        at.clippingMaskBufferSize = t3;
      }, at.getClippingMaskBufferSize = function() {
        return at.clippingMaskBufferSize;
      }, at.deleteBuffer = function(t3) {
        at.getGL(t3).deleteFramebuffer(at.frameBuffers[t3].framebuffer), delete at.frameBuffers[t3], delete at.glContext[t3];
      };
      function _t() {
      }
      _t._$r2 = function(t3) {
        return t3 < 0 ? 0 : t3 > 1 ? 1 : 0.5 - 0.5 * Math.cos(t3 * St.PI_F);
      };
      function ht(t3) {
        i2 || (this._$ib = t3);
      }
      ht._$fr = -1, ht.prototype.toString = function() {
        return this._$ib;
      };
      function lt() {
        i2 || (W.prototype.constructor.call(this), this._$LP = -1, this._$d0 = 0, this._$Yo = 0, this._$JP = null, this._$5P = null, this._$BP = null, this._$Eo = null, this._$Qi = null, this._$6s = lt._$ms, this.culling = true, this.gl_cacheImage = null, this.instanceNo = lt._$42++);
      }
      lt.prototype = new W(), lt._$42 = 0, lt._$Os = 30, lt._$ms = 0, lt._$ns = 1, lt._$_s = 2, lt._$gT = new Array(), lt.prototype._$_S = function(t3) {
        this._$LP = t3;
      }, lt.prototype.getTextureNo = function() {
        return this._$LP;
      }, lt.prototype._$ZL = function() {
        return this._$Qi;
      }, lt.prototype._$H2 = function() {
        return this._$JP;
      }, lt.prototype.getNumPoints = function() {
        return this._$d0;
      }, lt.prototype.getType = function() {
        return W._$wb;
      }, lt.prototype._$B2 = function(t3, e2, i3) {
        var r2 = e2, o2 = r2._$hr != null ? r2._$hr : r2._$Cr;
        switch (B._$do) {
          default:
          case B._$Ms:
            throw new Error("_$L _$ro ");
          case B._$Qs:
            for (var n2 = this._$d0 - 1; n2 >= 0; --n2) {
              o2[n2 * B._$No + 4] = i3;
            }
        }
      }, lt.prototype._$zP = function() {
        this._$GS = new b(), this._$GS._$zP();
      }, lt.prototype._$F0 = function(t3) {
        W.prototype._$F0.call(this, t3), this._$LP = t3._$6L(), this._$d0 = t3._$6L(), this._$Yo = t3._$6L();
        var e2 = t3._$nP();
        this._$BP = new Int16Array(3 * this._$Yo);
        for (var i3 = 3 * this._$Yo - 1; i3 >= 0; --i3)
          this._$BP[i3] = e2[i3];
        if (this._$Eo = t3._$nP(), this._$Qi = t3._$nP(), t3.getFormatVersion() >= G._$s7) {
          if (this._$JP = t3._$6L(), this._$JP != 0) {
            if ((1 & this._$JP) != 0) {
              var r2 = t3._$6L();
              this._$5P == null && (this._$5P = new Object()), this._$5P._$Hb = parseInt(r2);
            }
            (this._$JP & lt._$Os) != 0 ? this._$6s = (this._$JP & lt._$Os) >> 1 : this._$6s = lt._$ms, (32 & this._$JP) != 0 && (this.culling = false);
          }
        } else
          this._$JP = 0;
      }, lt.prototype.init = function(t3) {
        var e2 = new $t(this), i3 = this._$d0 * B._$No, r2 = this._$32();
        e2._$Cr != null && (e2._$Cr = null), e2._$Cr = new Float32Array(i3), e2._$hr != null && (e2._$hr = null), e2._$hr = r2 ? new Float32Array(i3) : null;
        switch (B._$do) {
          default:
          case B._$Ms:
            if (B._$Ls)
              for (var o2 = this._$d0 - 1; o2 >= 0; --o2) {
                var n2 = o2 << 1;
                this._$Qi[n2 + 1] = 1 - this._$Qi[n2 + 1];
              }
            break;
          case B._$Qs:
            for (o2 = this._$d0 - 1; o2 >= 0; --o2) {
              n2 = o2 << 1;
              var s2 = o2 * B._$No, a2 = this._$Qi[n2], _2 = this._$Qi[n2 + 1];
              e2._$Cr[s2] = a2, e2._$Cr[s2 + 1] = _2, e2._$Cr[s2 + 4] = 0, r2 && (e2._$hr[s2] = a2, e2._$hr[s2 + 1] = _2, e2._$hr[s2 + 4] = 0);
            }
        }
        return e2;
      }, lt.prototype._$Nr = function(t3, e2) {
        var i3 = e2;
        if (this != i3._$GT() && console.log("### assert!! ### "), this._$GS._$Ur(t3) && (W.prototype._$Nr.call(this, t3, i3), !i3._$IS[0])) {
          var r2 = lt._$gT;
          r2[0] = false, P._$Vr(t3, this._$GS, r2, this._$d0, this._$Eo, i3._$Cr, B._$i2, B._$No);
        }
      }, lt.prototype._$2b = function(t3, e2) {
        try {
          this != e2._$GT() && console.log("### assert!! ### ");
          var i3 = false;
          e2._$IS[0] && (i3 = true);
          var r2 = e2;
          if (!i3 && (W.prototype._$2b.call(this, t3), this._$32())) {
            var o2 = this.getTargetBaseDataID();
            if (r2._$8r == W._$ur && (r2._$8r = t3.getBaseDataIndex(o2)), r2._$8r < 0)
              at._$so && a._$li("_$L _$0P _$G :: %s", o2);
            else {
              var n2 = t3.getBaseData(r2._$8r), s2 = t3._$q2(r2._$8r);
              n2 == null || s2._$x2() ? r2._$AT = false : (n2._$nb(t3, s2, r2._$Cr, r2._$hr, this._$d0, B._$i2, B._$No), r2._$AT = true), r2.baseOpacity = s2.getTotalOpacity();
            }
          }
        } catch (t4) {
          throw t4;
        }
      }, lt.prototype.draw = function(t3, e2, i3) {
        if (this != i3._$GT() && console.log("### assert!! ### "), !i3._$IS[0]) {
          var r2 = i3, o2 = this._$LP;
          o2 < 0 && (o2 = 1);
          var n2 = this.getOpacity(e2, r2) * i3._$VS * i3.baseOpacity, s2 = r2._$hr != null ? r2._$hr : r2._$Cr;
          t3.setClipBufPre_clipContextForDraw(i3.clipBufPre_clipContext), t3._$WP(this.culling), t3._$Uo(o2, 3 * this._$Yo, this._$BP, s2, this._$Qi, n2, this._$6s, r2);
        }
      }, lt.prototype.dump = function() {
        console.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n", this._$LP, this._$d0, this._$Yo), console.log("  _$Oi _$di = { ");
        for (var t3 = 0; t3 < this._$BP.length; t3++)
          console.log("%5d ,", this._$BP[t3]);
        console.log("\n  _$5i _$30");
        for (t3 = 0; t3 < this._$Eo.length; t3++) {
          console.log("\n    _$30[%d] = ", t3);
          for (var e2 = this._$Eo[t3], i3 = 0; i3 < e2.length; i3++)
            console.log("%6.2f, ", e2[i3]);
        }
        console.log("\n");
      }, lt.prototype._$72 = function(t3) {
        return this._$5P == null ? null : this._$5P[t3];
      }, lt.prototype.getIndexArray = function() {
        return this._$BP;
      };
      function $t(t3) {
        Lt.prototype.constructor.call(this, t3), this._$8r = W._$ur, this._$Cr = null, this._$hr = null;
      }
      $t.prototype = new Lt(), $t.prototype.getTransformedPoints = function() {
        return this._$hr != null ? this._$hr : this._$Cr;
      };
      function ut() {
        i2 || (this.x = null, this.y = null);
      }
      ut.prototype._$HT = function(t3) {
        this.x = t3.x, this.y = t3.y;
      }, ut.prototype._$HT = function(t3, e2) {
        this.x = t3, this.y = e2;
      };
      function pt(t3) {
        i2 || (r.prototype.constructor.call(this), this.drawParamWebGL = new yt(t3), this.drawParamWebGL.setGL(at.getGL(t3)));
      }
      pt.prototype = new r(), pt.loadModel = function(t3) {
        var e2 = new pt();
        return r._$62(e2, t3), e2;
      }, pt.loadModel = function(t3, e2) {
        var i3 = new pt(e2 || 0);
        return r._$62(i3, t3), i3;
      }, pt._$to = function() {
        return new pt();
      }, pt._$er = function(t3) {
        var e2 = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
        if (e2.exists() == 0)
          throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e2._$PL());
        for (var i3 = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], r2 = pt.loadModel(e2._$3b()), o2 = 0; o2 < i3.length; o2++) {
          var n2 = new _$5(i3[o2]);
          if (n2.exists() == 0)
            throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n2._$PL());
          r2.setTexture(o2, _$nL._$_o(t3, n2._$3b()));
        }
        return r2;
      }, pt.prototype.setGL = function(t3) {
        at.setGL(t3);
      }, pt.prototype.setTransform = function(t3) {
        this.drawParamWebGL.setTransform(t3);
      }, pt.prototype.update = function() {
        this._$5S.update(), this._$5S.preDraw(this.drawParamWebGL);
      }, pt.prototype.draw = function() {
        this._$5S.draw(this.drawParamWebGL);
      }, pt.prototype._$K2 = function() {
        this.drawParamWebGL._$K2();
      }, pt.prototype.setTexture = function(t3, e2) {
        this.drawParamWebGL == null && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t3, e2);
      }, pt.prototype.setTexture = function(t3, e2) {
        this.drawParamWebGL == null && a._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t3, e2);
      }, pt.prototype._$Rs = function() {
        return this.drawParamWebGL._$Rs();
      }, pt.prototype._$Ds = function(t3) {
        this.drawParamWebGL._$Ds(t3);
      }, pt.prototype.getDrawParam = function() {
        return this.drawParamWebGL;
      }, pt.prototype.setMatrix = function(t3) {
        this.drawParamWebGL.setMatrix(t3);
      }, pt.prototype.setPremultipliedAlpha = function(t3) {
        this.drawParamWebGL.setPremultipliedAlpha(t3);
      }, pt.prototype.isPremultipliedAlpha = function() {
        return this.drawParamWebGL.isPremultipliedAlpha();
      }, pt.prototype.setAnisotropy = function(t3) {
        this.drawParamWebGL.setAnisotropy(t3);
      }, pt.prototype.getAnisotropy = function() {
        return this.drawParamWebGL.getAnisotropy();
      };
      function ct() {
        i2 || (this.motions = null, this._$eb = false, this.motions = new Array());
      }
      ct.prototype._$tb = function() {
        return this.motions;
      }, ct.prototype.startMotion = function(t3, e2) {
        for (var i3 = null, r2 = this.motions.length, o2 = 0; o2 < r2; ++o2)
          (i3 = this.motions[o2]) != null && (i3._$qS(i3._$w0.getFadeOut()), this._$eb && a._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n", r2, i3._$sr));
        if (t3 == null)
          return -1;
        (i3 = new ft())._$w0 = t3, this.motions.push(i3);
        var n2 = i3._$sr;
        return this._$eb && a._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", r2, n2), n2;
      }, ct.prototype.updateParam = function(t3) {
        try {
          for (var e2 = false, i3 = 0; i3 < this.motions.length; i3++) {
            var r2 = this.motions[i3];
            if (r2 != null) {
              var o2 = r2._$w0;
              o2 != null ? (o2.updateParam(t3, r2), e2 = true, r2.isFinished() && (this._$eb && a._$Ji("MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n", this.motions.length - 1, r2._$sr), this.motions.splice(i3, 1), i3--)) : (this.motions = this.motions.splice(i3, 1), i3--);
            } else
              this.motions.splice(i3, 1), i3--;
          }
          return e2;
        } catch (t4) {
          return a._$li(t4), true;
        }
      }, ct.prototype.isFinished = function(t3) {
        if (arguments.length >= 1) {
          for (var e2 = 0; e2 < this.motions.length; e2++) {
            if ((i3 = this.motions[e2]) != null && (i3._$sr == t3 && !i3.isFinished()))
              return false;
          }
          return true;
        }
        for (e2 = 0; e2 < this.motions.length; e2++) {
          var i3;
          if ((i3 = this.motions[e2]) != null) {
            if (i3._$w0 != null) {
              if (!i3.isFinished())
                return false;
            } else
              this.motions.splice(e2, 1), e2--;
          } else
            this.motions.splice(e2, 1), e2--;
        }
        return true;
      }, ct.prototype.stopAllMotions = function() {
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var e2 = this.motions[t3];
          if (e2 != null) {
            e2._$w0;
            this.motions.splice(t3, 1), t3--;
          } else
            this.motions.splice(t3, 1), t3--;
        }
      }, ct.prototype._$Zr = function(t3) {
        this._$eb = t3;
      }, ct.prototype._$e = function() {
        console.log("-- _$R --\n");
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var e2 = this.motions[t3]._$w0;
          console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, e2.toString());
        }
      };
      function ft() {
        this._$w0 = null, this._$AT = true, this._$9L = false, this._$z2 = -1, this._$bs = -1, this._$Do = -1, this._$sr = null, this._$sr = ft._$Gs++;
      }
      ft._$Gs = 0, ft.prototype.isFinished = function() {
        return this._$9L;
      }, ft.prototype._$qS = function(t3) {
        var e2 = x.getUserTimeMSec() + t3;
        (this._$Do < 0 || e2 < this._$Do) && (this._$Do = e2);
      }, ft.prototype._$Bs = function() {
        return this._$sr;
      };
      function dt() {
        this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1);
      }
      dt.prototype.setContext = function(t3) {
        var e2 = this.m;
        t3.transform(e2[0], e2[1], e2[3], e2[4], e2[6], e2[7]);
      }, dt.prototype.toString = function() {
        for (var t3 = "LDTransform { ", e2 = 0; e2 < 9; e2++)
          t3 += this.m[e2].toFixed(2) + " ,";
        return t3 += " }";
      }, dt.prototype.identity = function() {
        var t3 = this.m;
        t3[0] = t3[4] = t3[8] = 1, t3[1] = t3[2] = t3[3] = t3[5] = t3[6] = t3[7] = 0;
      }, dt.prototype._$PS = function(t3, e2, i3) {
        i3 == null && (i3 = new Array(0, 0));
        var r2 = this.m;
        return i3[0] = r2[0] * t3 + r2[3] * e2 + r2[6], i3[1] = r2[1] * t3 + r2[4] * e2 + r2[7], i3;
      }, dt.prototype._$P2 = function(t3) {
        t3 || (t3 = new dt());
        var e2 = this.m, i3 = e2[0], r2 = e2[1], o2 = e2[2], n2 = e2[3], s2 = e2[4], a2 = e2[5], _2 = e2[6], h2 = e2[7], l2 = e2[8], $2 = i3 * s2 * l2 + r2 * a2 * _2 + o2 * n2 * h2 - i3 * a2 * h2 - o2 * s2 * _2 - r2 * n2 * l2;
        if ($2 == 0)
          return null;
        var u2 = 1 / $2;
        return t3.m[0] = u2 * (s2 * l2 - h2 * a2), t3.m[1] = u2 * (h2 * o2 - r2 * l2), t3.m[2] = u2 * (r2 * a2 - s2 * o2), t3.m[3] = u2 * (_2 * a2 - n2 * l2), t3.m[4] = u2 * (i3 * l2 - _2 * o2), t3.m[5] = u2 * (n2 * o2 - i3 * a2), t3.m[6] = u2 * (n2 * h2 - _2 * s2), t3.m[7] = u2 * (_2 * r2 - i3 * h2), t3.m[8] = u2 * (i3 * s2 - n2 * r2), t3;
      }, dt.prototype.transform = function(t3, e2, i3) {
        i3 == null && (i3 = new Array(0, 0));
        var r2 = this.m;
        return i3[0] = r2[0] * t3 + r2[3] * e2 + r2[6], i3[1] = r2[1] * t3 + r2[4] * e2 + r2[7], i3;
      }, dt.prototype.translate = function(t3, e2) {
        var i3 = this.m;
        i3[6] = i3[0] * t3 + i3[3] * e2 + i3[6], i3[7] = i3[1] * t3 + i3[4] * e2 + i3[7], i3[8] = i3[2] * t3 + i3[5] * e2 + i3[8];
      }, dt.prototype.scale = function(t3, e2) {
        var i3 = this.m;
        i3[0] *= t3, i3[1] *= t3, i3[2] *= t3, i3[3] *= e2, i3[4] *= e2, i3[5] *= e2;
      }, dt.prototype.shear = function(t3, e2) {
        var i3 = this.m, r2 = i3[0] + i3[3] * e2, o2 = i3[1] + i3[4] * e2, n2 = i3[2] + i3[5] * e2;
        i3[3] = i3[0] * t3 + i3[3], i3[4] = i3[1] * t3 + i3[4], i3[5] = i3[2] * t3 + i3[5], i3[0] = r2, i3[1] = o2, i3[2] = n2;
      }, dt.prototype.rotate = function(t3) {
        var e2 = this.m, i3 = Math.cos(t3), r2 = Math.sin(t3), o2 = e2[0] * i3 + e2[3] * r2, n2 = e2[1] * i3 + e2[4] * r2, s2 = e2[2] * i3 + e2[5] * r2;
        e2[3] = -e2[0] * r2 + e2[3] * i3, e2[4] = -e2[1] * r2 + e2[4] * i3, e2[5] = -e2[2] * r2 + e2[5] * i3, e2[0] = o2, e2[1] = n2, e2[2] = s2;
      }, dt.prototype.concatenate = function(t3) {
        var e2 = this.m, i3 = t3.m, r2 = e2[0] * i3[0] + e2[3] * i3[1] + e2[6] * i3[2], o2 = e2[1] * i3[0] + e2[4] * i3[1] + e2[7] * i3[2], n2 = e2[2] * i3[0] + e2[5] * i3[1] + e2[8] * i3[2], s2 = e2[0] * i3[3] + e2[3] * i3[4] + e2[6] * i3[5], a2 = e2[1] * i3[3] + e2[4] * i3[4] + e2[7] * i3[5], _2 = e2[2] * i3[3] + e2[5] * i3[4] + e2[8] * i3[5], h2 = e2[0] * i3[6] + e2[3] * i3[7] + e2[6] * i3[8], l2 = e2[1] * i3[6] + e2[4] * i3[7] + e2[7] * i3[8], $2 = e2[2] * i3[6] + e2[5] * i3[7] + e2[8] * i3[8];
        m[0] = r2, m[1] = o2, m[2] = n2, m[3] = s2, m[4] = a2, m[5] = _2, m[6] = h2, m[7] = l2, m[8] = $2;
      };
      function gt(t3) {
        i2 || it.prototype.constructor.call(this, t3);
      }
      gt.prototype = new it(), gt._$eT = null, gt._$tP = new Object(), gt._$2o = function() {
        return gt._$eT == null && (gt._$eT = gt.getID("DST_BASE")), gt._$eT;
      }, gt._$27 = function() {
        gt._$tP.clear(), gt._$eT = null;
      }, gt.getID = function(t3) {
        var e2 = gt._$tP[t3];
        return e2 == null && (e2 = new gt(t3), gt._$tP[t3] = e2), e2;
      }, gt.prototype._$3s = function() {
        return new gt();
      };
      function yt(t3) {
        i2 || (M.prototype.constructor.call(this), this.textures = new Array(), this.transform = null, this.gl = null, this.glno = t3, this.firstDraw = true, this.anisotropyExt = null, this.maxAnisotropy = 0, this._$As = 32, this._$Gr = false, this._$NT = null, this._$vS = null, this._$no = null, this.vertShader = null, this.fragShader = null, this.vertShaderOff = null, this.fragShaderOff = null);
      }
      yt.prototype = new M(), yt._$9r = function(t3) {
        return new Float32Array(t3);
      }, yt._$vb = function(t3) {
        return new Int16Array(t3);
      }, yt._$cr = function(t3, e2) {
        return t3 == null || t3._$yL() < e2.length ? ((t3 = yt._$9r(2 * e2.length)).put(e2), t3._$oT(0)) : (t3.clear(), t3.put(e2), t3._$oT(0)), t3;
      }, yt._$mb = function(t3, e2) {
        return t3 == null || t3._$yL() < e2.length ? ((t3 = yt._$vb(2 * e2.length)).put(e2), t3._$oT(0)) : (t3.clear(), t3.put(e2), t3._$oT(0)), t3;
      }, yt._$Hs = function() {
        return this._$Gr;
      }, yt._$as = function(t3) {
        this._$Gr = t3;
      }, yt.prototype.getGL = function() {
        return this.gl;
      }, yt.prototype.setGL = function(t3) {
        this.gl = t3;
      }, yt.prototype.setTransform = function(t3) {
        this.transform = t3;
      }, yt.prototype._$ZT = function() {
        var t3 = this.gl;
        this.firstDraw && (this.initShader(), this.firstDraw = false, this.anisotropyExt = t3.getExtension("EXT_texture_filter_anisotropic") || t3.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t3.getExtension("MOZ_EXT_texture_filter_anisotropic"), this.anisotropyExt && (this.maxAnisotropy = t3.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))), t3.disable(t3.SCISSOR_TEST), t3.disable(t3.STENCIL_TEST), t3.disable(t3.DEPTH_TEST), t3.frontFace(t3.CW), t3.enable(t3.BLEND), t3.colorMask(1, 1, 1, 1), t3.bindBuffer(t3.ARRAY_BUFFER, null), t3.bindBuffer(t3.ELEMENT_ARRAY_BUFFER, null);
      }, yt.prototype._$Uo = function(t3, e2, i3, r2, o2, n2, s2, a2) {
        if (!(n2 < 0.01 && this.clipBufPre_clipContextMask == null)) {
          var _2 = this.gl;
          if (this.gl == null)
            throw new Error("gl is null");
          var h2 = 1 * this._$C0 * n2, l2 = 1 * this._$tT * n2, $2 = 1 * this._$WL * n2, u2 = this._$lT * n2;
          if (this.clipBufPre_clipContextMask != null) {
            _2.frontFace(_2.CCW), _2.useProgram(this.shaderProgram), this._$vS = mt(_2, this._$vS, r2), this._$no = Tt(_2, this._$no, i3), _2.enableVertexAttribArray(this.a_position_Loc), _2.vertexAttribPointer(this.a_position_Loc, 2, _2.FLOAT, false, 0, 0), this._$NT = mt(_2, this._$NT, o2), _2.activeTexture(_2.TEXTURE1), _2.bindTexture(_2.TEXTURE_2D, this.textures[t3]), _2.uniform1i(this.s_texture0_Loc, 1), _2.enableVertexAttribArray(this.a_texCoord_Loc), _2.vertexAttribPointer(this.a_texCoord_Loc, 2, _2.FLOAT, false, 0, 0), _2.uniformMatrix4fv(this.u_matrix_Loc, false, this.getClipBufPre_clipContextMask().matrixForMask);
            var p2 = this.getClipBufPre_clipContextMask().layoutChannelNo, c2 = this.getChannelFlagAsColor(p2);
            _2.uniform4f(this.u_channelFlag, c2.r, c2.g, c2.b, c2.a);
            var f2 = this.getClipBufPre_clipContextMask().layoutBounds;
            _2.uniform4f(this.u_baseColor_Loc, 2 * f2.x - 1, 2 * f2.y - 1, 2 * f2._$EL() - 1, 2 * f2._$5T() - 1), _2.uniform1i(this.u_maskFlag_Loc, true);
          } else if (this.getClipBufPre_clipContextDraw() != null) {
            _2.useProgram(this.shaderProgramOff), this._$vS = mt(_2, this._$vS, r2), this._$no = Tt(_2, this._$no, i3), _2.enableVertexAttribArray(this.a_position_Loc_Off), _2.vertexAttribPointer(this.a_position_Loc_Off, 2, _2.FLOAT, false, 0, 0), this._$NT = mt(_2, this._$NT, o2), _2.activeTexture(_2.TEXTURE1), _2.bindTexture(_2.TEXTURE_2D, this.textures[t3]), _2.uniform1i(this.s_texture0_Loc_Off, 1), _2.enableVertexAttribArray(this.a_texCoord_Loc_Off), _2.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, _2.FLOAT, false, 0, 0), _2.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, false, this.getClipBufPre_clipContextDraw().matrixForDraw), _2.uniformMatrix4fv(this.u_matrix_Loc_Off, false, this.matrix4x4), _2.activeTexture(_2.TEXTURE2), _2.bindTexture(_2.TEXTURE_2D, at.fTexture[this.glno]), _2.uniform1i(this.s_texture1_Loc_Off, 2);
            p2 = this.getClipBufPre_clipContextDraw().layoutChannelNo, c2 = this.getChannelFlagAsColor(p2);
            _2.uniform4f(this.u_channelFlag_Loc_Off, c2.r, c2.g, c2.b, c2.a), _2.uniform4f(this.u_baseColor_Loc_Off, h2, l2, $2, u2);
          } else
            _2.useProgram(this.shaderProgram), this._$vS = mt(_2, this._$vS, r2), this._$no = Tt(_2, this._$no, i3), _2.enableVertexAttribArray(this.a_position_Loc), _2.vertexAttribPointer(this.a_position_Loc, 2, _2.FLOAT, false, 0, 0), this._$NT = mt(_2, this._$NT, o2), _2.activeTexture(_2.TEXTURE1), _2.bindTexture(_2.TEXTURE_2D, this.textures[t3]), _2.uniform1i(this.s_texture0_Loc, 1), _2.enableVertexAttribArray(this.a_texCoord_Loc), _2.vertexAttribPointer(this.a_texCoord_Loc, 2, _2.FLOAT, false, 0, 0), _2.uniformMatrix4fv(this.u_matrix_Loc, false, this.matrix4x4), _2.uniform4f(this.u_baseColor_Loc, h2, l2, $2, u2), _2.uniform1i(this.u_maskFlag_Loc, false);
          this.culling ? this.gl.enable(_2.CULL_FACE) : this.gl.disable(_2.CULL_FACE), this.gl.enable(_2.BLEND);
          var d2, g2, y2, m2;
          if (this.clipBufPre_clipContextMask != null)
            d2 = _2.ONE, g2 = _2.ONE_MINUS_SRC_ALPHA, y2 = _2.ONE, m2 = _2.ONE_MINUS_SRC_ALPHA;
          else
            switch (s2) {
              case lt._$ms:
                d2 = _2.ONE, g2 = _2.ONE_MINUS_SRC_ALPHA, y2 = _2.ONE, m2 = _2.ONE_MINUS_SRC_ALPHA;
                break;
              case lt._$ns:
                d2 = _2.ONE, g2 = _2.ONE, y2 = _2.ZERO, m2 = _2.ONE;
                break;
              case lt._$_s:
                d2 = _2.DST_COLOR, g2 = _2.ONE_MINUS_SRC_ALPHA, y2 = _2.ZERO, m2 = _2.ONE;
            }
          _2.blendEquationSeparate(_2.FUNC_ADD, _2.FUNC_ADD), _2.blendFuncSeparate(d2, g2, y2, m2), this.anisotropyExt && _2.texParameteri(_2.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
          var T2 = i3.length;
          _2.drawElements(_2.TRIANGLES, T2, _2.UNSIGNED_SHORT, 0), _2.bindTexture(_2.TEXTURE_2D, null);
        }
      };
      function mt(t3, e2, i3) {
        return e2 == null && (e2 = t3.createBuffer()), t3.bindBuffer(t3.ARRAY_BUFFER, e2), t3.bufferData(t3.ARRAY_BUFFER, i3, t3.DYNAMIC_DRAW), e2;
      }
      function Tt(t3, e2, i3) {
        return e2 == null && (e2 = t3.createBuffer()), t3.bindBuffer(t3.ELEMENT_ARRAY_BUFFER, e2), t3.bufferData(t3.ELEMENT_ARRAY_BUFFER, i3, t3.DYNAMIC_DRAW), e2;
      }
      yt.prototype._$Rs = function() {
        throw new Error("_$Rs");
      }, yt.prototype._$Ds = function(t3) {
        throw new Error("_$Ds");
      }, yt.prototype._$K2 = function() {
        for (var t3 = 0; t3 < this.textures.length; t3++) {
          this.textures[t3] != 0 && (this.gl._$K2(1, this.textures, t3), this.textures[t3] = null);
        }
      }, yt.prototype.setTexture = function(t3, e2) {
        this.textures[t3] = e2;
      }, yt.prototype.initShader = function() {
        var t3 = this.gl;
        this.loadShaders2(), this.a_position_Loc = t3.getAttribLocation(this.shaderProgram, "a_position"), this.a_texCoord_Loc = t3.getAttribLocation(this.shaderProgram, "a_texCoord"), this.u_matrix_Loc = t3.getUniformLocation(this.shaderProgram, "u_mvpMatrix"), this.s_texture0_Loc = t3.getUniformLocation(this.shaderProgram, "s_texture0"), this.u_channelFlag = t3.getUniformLocation(this.shaderProgram, "u_channelFlag"), this.u_baseColor_Loc = t3.getUniformLocation(this.shaderProgram, "u_baseColor"), this.u_maskFlag_Loc = t3.getUniformLocation(this.shaderProgram, "u_maskFlag"), this.a_position_Loc_Off = t3.getAttribLocation(this.shaderProgramOff, "a_position"), this.a_texCoord_Loc_Off = t3.getAttribLocation(this.shaderProgramOff, "a_texCoord"), this.u_matrix_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix"), this.u_clipMatrix_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix"), this.s_texture0_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "s_texture0"), this.s_texture1_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "s_texture1"), this.u_channelFlag_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_channelFlag"), this.u_baseColor_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_baseColor");
      }, yt.prototype.disposeShader = function() {
        var t3 = this.gl;
        this.shaderProgram && (t3.deleteProgram(this.shaderProgram), this.shaderProgram = null), this.shaderProgramOff && (t3.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null);
      }, yt.prototype.compileShader = function(t3, e2) {
        var i3 = this.gl, r2 = e2, o2 = i3.createShader(t3);
        if (o2 == null)
          return a._$Ji("_$L0 to create shader"), null;
        i3.shaderSource(o2, r2), i3.compileShader(o2);
        if (!i3.getShaderParameter(o2, i3.COMPILE_STATUS)) {
          var n2 = i3.getShaderInfoLog(o2);
          return a._$Ji("_$L0 to compile shader : " + n2), i3.deleteShader(o2), null;
        }
        return o2;
      }, yt.prototype.loadShaders2 = function() {
        var t3 = this.gl;
        if (this.shaderProgram = t3.createProgram(), !this.shaderProgram)
          return false;
        if (this.shaderProgramOff = t3.createProgram(), !this.shaderProgramOff)
          return false;
        if (this.vertShader = this.compileShader(t3.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}"), !this.vertShader)
          return a._$Ji("Vertex shader compile _$li!"), false;
        if (this.vertShaderOff = this.compileShader(t3.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}"), !this.vertShaderOff)
          return a._$Ji("OffVertex shader compile _$li!"), false;
        if (this.fragShader = this.compileShader(t3.FRAGMENT_SHADER, "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}"), !this.fragShader)
          return a._$Ji("Fragment shader compile _$li!"), false;
        if (this.fragShaderOff = this.compileShader(t3.FRAGMENT_SHADER, "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}"), !this.fragShaderOff)
          return a._$Ji("OffFragment shader compile _$li!"), false;
        t3.attachShader(this.shaderProgram, this.vertShader), t3.attachShader(this.shaderProgram, this.fragShader), t3.attachShader(this.shaderProgramOff, this.vertShaderOff), t3.attachShader(this.shaderProgramOff, this.fragShaderOff), t3.linkProgram(this.shaderProgram), t3.linkProgram(this.shaderProgramOff);
        if (!t3.getProgramParameter(this.shaderProgram, t3.LINK_STATUS)) {
          var e2 = t3.getProgramInfoLog(this.shaderProgram);
          return a._$Ji("_$L0 to link program: " + e2), this.vertShader && (t3.deleteShader(this.vertShader), this.vertShader = 0), this.fragShader && (t3.deleteShader(this.fragShader), this.fragShader = 0), this.shaderProgram && (t3.deleteProgram(this.shaderProgram), this.shaderProgram = 0), this.vertShaderOff && (t3.deleteShader(this.vertShaderOff), this.vertShaderOff = 0), this.fragShaderOff && (t3.deleteShader(this.fragShaderOff), this.fragShaderOff = 0), this.shaderProgramOff && (t3.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0), false;
        }
        return true;
      }, yt.prototype.createFramebuffer = function() {
        var t3 = this.gl, e2 = at.clippingMaskBufferSize, i3 = t3.createFramebuffer();
        t3.bindFramebuffer(t3.FRAMEBUFFER, i3);
        var r2 = t3.createRenderbuffer();
        t3.bindRenderbuffer(t3.RENDERBUFFER, r2), t3.renderbufferStorage(t3.RENDERBUFFER, t3.RGBA4, e2, e2), t3.framebufferRenderbuffer(t3.FRAMEBUFFER, t3.COLOR_ATTACHMENT0, t3.RENDERBUFFER, r2);
        var o2 = t3.createTexture();
        return t3.bindTexture(t3.TEXTURE_2D, o2), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, e2, e2, 0, t3.RGBA, t3.UNSIGNED_BYTE, null), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_MIN_FILTER, t3.LINEAR), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_MAG_FILTER, t3.LINEAR), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_WRAP_S, t3.CLAMP_TO_EDGE), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_WRAP_T, t3.CLAMP_TO_EDGE), t3.framebufferTexture2D(t3.FRAMEBUFFER, t3.COLOR_ATTACHMENT0, t3.TEXTURE_2D, o2, 0), t3.bindTexture(t3.TEXTURE_2D, null), t3.bindRenderbuffer(t3.RENDERBUFFER, null), t3.bindFramebuffer(t3.FRAMEBUFFER, null), at.fTexture[this.glno] = o2, { framebuffer: i3, renderbuffer: r2, texture: at.fTexture[this.glno] };
      };
      function vt(t3) {
        i2 || (this._$P = new Int8Array(8), this._$R0 = new DataView(this._$P.buffer), this._$3i = new Int8Array(1e3), this._$hL = 0, this._$v0 = 0, this._$S2 = 0, this._$Ko = new Array(), this._$T = t3, this._$F = 0);
      }
      vt.prototype._$fP = function() {
        var t3, e2, i3, r2 = this._$ST();
        if ((128 & r2) == 0)
          return 255 & r2;
        if ((128 & (t3 = this._$ST())) == 0)
          return (127 & r2) << 7 | 127 & t3;
        if ((128 & (e2 = this._$ST())) == 0)
          return (127 & r2) << 14 | (127 & t3) << 7 | 255 & e2;
        if ((128 & (i3 = this._$ST())) == 0)
          return (127 & r2) << 21 | (127 & t3) << 14 | (127 & e2) << 7 | 255 & i3;
        throw new ht("_$L _$0P  _");
      }, vt.prototype.getFormatVersion = function() {
        return this._$S2;
      }, vt.prototype._$gr = function(t3) {
        this._$S2 = t3;
      }, vt.prototype._$3L = function() {
        return this._$fP();
      }, vt.prototype._$mP = function() {
        return this._$zT(), this._$F += 8, this._$T.getFloat64(this._$F - 8);
      }, vt.prototype._$_T = function() {
        return this._$zT(), this._$F += 4, this._$T.getFloat32(this._$F - 4);
      }, vt.prototype._$6L = function() {
        return this._$zT(), this._$F += 4, this._$T.getInt32(this._$F - 4);
      }, vt.prototype._$ST = function() {
        return this._$zT(), this._$T.getInt8(this._$F++);
      }, vt.prototype._$9T = function() {
        return this._$zT(), this._$F += 2, this._$T.getInt16(this._$F - 2);
      }, vt.prototype._$2T = function() {
        throw this._$zT(), this._$F += 8, new ht("_$L _$q read long");
      }, vt.prototype._$po = function() {
        return this._$zT(), this._$T.getInt8(this._$F++) != 0;
      };
      var Pt = true;
      vt.prototype._$bT = function() {
        this._$zT();
        var t3 = this._$3L(), e2 = null;
        if (Pt)
          try {
            var i3 = new ArrayBuffer(2 * t3);
            e2 = new Uint16Array(i3);
            for (var r2 = 0; r2 < t3; ++r2)
              e2[r2] = this._$T.getUint8(this._$F++);
            return String.fromCharCode.apply(null, e2);
          } catch (t4) {
            Pt = false;
          }
        try {
          var o2 = new Array();
          if (e2 == null)
            for (r2 = 0; r2 < t3; ++r2)
              o2[r2] = this._$T.getUint8(this._$F++);
          else
            for (r2 = 0; r2 < t3; ++r2)
              o2[r2] = e2[r2];
          return String.fromCharCode.apply(null, o2);
        } catch (t4) {
          console.log("read utf8 / _$rT _$L0 !! : " + t4);
        }
      }, vt.prototype._$cS = function() {
        this._$zT();
        for (var t3 = this._$3L(), e2 = new Int32Array(t3), i3 = 0; i3 < t3; i3++)
          e2[i3] = this._$T.getInt32(this._$F), this._$F += 4;
        return e2;
      }, vt.prototype._$Tb = function() {
        this._$zT();
        for (var t3 = this._$3L(), e2 = new Float32Array(t3), i3 = 0; i3 < t3; i3++)
          e2[i3] = this._$T.getFloat32(this._$F), this._$F += 4;
        return e2;
      }, vt.prototype._$5b = function() {
        this._$zT();
        for (var t3 = this._$3L(), e2 = new Float64Array(t3), i3 = 0; i3 < t3; i3++)
          e2[i3] = this._$T.getFloat64(this._$F), this._$F += 8;
        return e2;
      }, vt.prototype._$nP = function() {
        return this._$Jb(-1);
      }, vt.prototype._$Jb = function(t3) {
        if (this._$zT(), t3 < 0 && (t3 = this._$3L()), t3 == G._$7P) {
          var e2 = this._$6L();
          if (0 <= e2 && e2 < this._$Ko.length)
            return this._$Ko[e2];
          throw new ht("_$sL _$4i @_$m0");
        }
        var i3 = this._$4b(t3);
        return this._$Ko.push(i3), i3;
      }, vt.prototype._$4b = function(t3) {
        if (t3 == 0)
          return null;
        if (t3 == 50) {
          var e2 = this._$bT();
          return n2 = D.getID(e2);
        }
        if (t3 == 51) {
          e2 = this._$bT();
          return n2 = gt.getID(e2);
        }
        if (t3 == 134) {
          e2 = this._$bT();
          return n2 = h.getID(e2);
        }
        if (t3 == 60) {
          e2 = this._$bT();
          return n2 = l.getID(e2);
        }
        if (t3 >= 48) {
          var r2 = G._$9o(t3);
          return r2 != null ? (r2._$F0(this), r2) : null;
        }
        switch (t3) {
          case 1:
            return this._$bT();
          case 10:
            return new function() {
              i2 || (this.color = null);
            }(this._$6L(), true);
          case 11:
            return new v(this._$mP(), this._$mP(), this._$mP(), this._$mP());
          case 12:
            return new v(this._$_T(), this._$_T(), this._$_T(), this._$_T());
          case 13:
            return new S(this._$mP(), this._$mP());
          case 14:
            return new S(this._$_T(), this._$_T());
          case 15:
            for (var o2 = this._$3L(), n2 = new Array(o2), s2 = 0; s2 < o2; s2++)
              n2[s2] = this._$nP();
            return n2;
          case 17:
            return n2 = new R(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP());
          case 21:
            return new _(this._$6L(), this._$6L(), this._$6L(), this._$6L());
          case 22:
            return new ut(this._$6L(), this._$6L());
          case 23:
            throw new Error("_$L _$ro ");
          case 16:
          case 25:
            return this._$cS();
          case 26:
            return this._$5b();
          case 27:
            return this._$Tb();
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 18:
          case 19:
          case 20:
          case 24:
          case 28:
            throw new ht("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + t3);
          default:
            throw new ht("_$6 _$q : _$nP() NO _$i : " + t3);
        }
      }, vt.prototype._$8L = function() {
        return this._$hL == 0 ? this._$v0 = this._$ST() : this._$hL == 8 && (this._$v0 = this._$ST(), this._$hL = 0), (this._$v0 >> 7 - this._$hL++ & 1) == 1;
      }, vt.prototype._$zT = function() {
        this._$hL != 0 && (this._$hL = 0);
      };
      function St() {
      }
      St._$2S = Math.PI / 180, St._$bS = Math.PI / 180, St._$wS = 180 / Math.PI, St._$NS = 180 / Math.PI, St.PI_F = Math.PI, St._$kT = [0, 0.012368, 0.024734, 0.037097, 0.049454, 0.061803, 0.074143, 0.086471, 0.098786, 0.111087, 0.12337, 0.135634, 0.147877, 0.160098, 0.172295, 0.184465, 0.196606, 0.208718, 0.220798, 0.232844, 0.244854, 0.256827, 0.268761, 0.280654, 0.292503, 0.304308, 0.316066, 0.327776, 0.339436, 0.351044, 0.362598, 0.374097, 0.385538, 0.396921, 0.408243, 0.419502, 0.430697, 0.441826, 0.452888, 0.463881, 0.474802, 0.485651, 0.496425, 0.507124, 0.517745, 0.528287, 0.538748, 0.549126, 0.559421, 0.56963, 0.579752, 0.589785, 0.599728, 0.609579, 0.619337, 0.629, 0.638567, 0.648036, 0.657406, 0.666676, 0.675843, 0.684908, 0.693867, 0.70272, 0.711466, 0.720103, 0.72863, 0.737045, 0.745348, 0.753536, 0.76161, 0.769566, 0.777405, 0.785125, 0.792725, 0.800204, 0.807561, 0.814793, 0.821901, 0.828884, 0.835739, 0.842467, 0.849066, 0.855535, 0.861873, 0.868079, 0.874153, 0.880093, 0.885898, 0.891567, 0.897101, 0.902497, 0.907754, 0.912873, 0.917853, 0.922692, 0.92739, 0.931946, 0.936359, 0.940629, 0.944755, 0.948737, 0.952574, 0.956265, 0.959809, 0.963207, 0.966457, 0.96956, 0.972514, 0.97532, 0.977976, 0.980482, 0.982839, 0.985045, 0.987101, 0.989006, 0.990759, 0.992361, 0.993811, 0.995109, 0.996254, 0.997248, 0.998088, 0.998776, 0.999312, 0.999694, 0.999924, 1], St._$92 = function(t3, e2) {
        var i3 = Math.atan2(t3[1], t3[0]), r2 = Math.atan2(e2[1], e2[0]);
        return St._$tS(i3, r2);
      }, St._$tS = function(t3, e2) {
        for (var i3 = t3 - e2; i3 < -Math.PI; )
          i3 += 2 * Math.PI;
        for (; i3 > Math.PI; )
          i3 -= 2 * Math.PI;
        return i3;
      }, St._$9 = function(t3) {
        return Math.sin(t3);
      }, St.fcos = function(t3) {
        return Math.cos(t3);
      };
      function Lt(t3) {
        i2 || (this._$e0 = null, this._$IP = null, this._$Us = null, this._$7s = null, this._$IS = [false], this._$VS = null, this._$AT = true, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._$e0 = t3);
      }
      Lt.prototype._$u2 = function() {
        return this._$IS[0];
      }, Lt.prototype._$yo = function() {
        return this._$AT && !this._$IS[0];
      }, Lt.prototype._$GT = function() {
        return this._$e0;
      };
      function Mt() {
      }
      Mt._$W2 = 0, Mt.SYSTEM_INFO = null, Mt.USER_AGENT = navigator.userAgent, Mt.isIPhone = function() {
        return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone;
      }, Mt.isIOS = function() {
        return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad;
      }, Mt.isAndroid = function() {
        return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isAndroid;
      }, Mt.getOSVersion = function() {
        return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO.version;
      }, Mt.getOS = function() {
        return Mt.SYSTEM_INFO || Mt.setup(), Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad ? "iOS" : Mt.SYSTEM_INFO._isAndroid ? "Android" : "_$Q0 OS";
      }, Mt.setup = function() {
        var t3 = Mt.USER_AGENT;
        function e2(t4, e3) {
          for (var i4 = t4.substring(e3).split(/[ _,;\.]/), r3 = 0, o2 = 0; o2 <= 2 && !isNaN(i4[o2]); o2++) {
            var n2 = parseInt(i4[o2]);
            if (n2 < 0 || n2 > 999) {
              a._$li("err : " + n2 + " @UtHtml5.setup()"), r3 = 0;
              break;
            }
            r3 += n2 * Math.pow(1e3, 2 - o2);
          }
          return r3;
        }
        var i3, r2 = Mt.SYSTEM_INFO = { userAgent: t3 };
        if ((i3 = t3.indexOf("iPhone OS ")) >= 0)
          r2.os = "iPhone", r2._isIPhone = true, r2.version = e2(t3, i3 + "iPhone OS ".length);
        else if ((i3 = t3.indexOf("iPad")) >= 0) {
          if ((i3 = t3.indexOf("CPU OS")) < 0)
            return void a._$li(" err : " + t3 + " @UtHtml5.setup()");
          r2.os = "iPad", r2._isIPad = true, r2.version = e2(t3, i3 + "CPU OS ".length);
        } else
          (i3 = t3.indexOf("Android")) >= 0 ? (r2.os = "Android", r2._isAndroid = true, r2.version = e2(t3, i3 + "Android ".length)) : (r2.os = "-", r2.version = -1);
      }, at.init();
      i2 = false;
      e.UtSystem = x, e.UtDebug = a, e.LDTransform = dt, e.LDGL = ot, e.Live2D = at, e.Live2DModelWebGL = pt, e.Live2DModelJS = q, e.Live2DMotion = J, e.MotionQueueManager = ct, e.PhysicsHair = u, e.AMotion = s, e.PartsDataID = h, e.DrawDataID = D, e.BaseDataID = gt, e.ParamID = l;
    }).call(e, i(13));
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.L2DBaseModel = e.L2DExpressionMotion = e.L2DExpressionParam = e.L2DEyeBlink = e.EYE_STATE = e.L2DMatrix44 = e.L2DModelMatrix = e.L2DMotionManager = e.L2DPhysics = e.L2DPartsParam = e.L2DPose = e.L2DViewMatrix = e.Live2DFramework = e.L2DTargetPoint = void 0;
    var r = i(2);
    function o() {
      this.live2DModel = null, this.modelMatrix = null, this.eyeBlink = null, this.physics = null, this.pose = null, this.debugMode = false, this.initialized = false, this.updating = false, this.alpha = 1, this.accAlpha = 0, this.lipSync = false, this.lipSyncValue = 0, this.accelX = 0, this.accelY = 0, this.accelZ = 0, this.dragX = 0, this.dragY = 0, this.startTimeMSec = null, this.mainMotionManager = new u(), this.expressionManager = new u(), this.motions = {}, this.expressions = {}, this.isTexLoaded = false;
    }
    var n = 0;
    o.prototype.getModelMatrix = function() {
      return this.modelMatrix;
    }, o.prototype.setAlpha = function(t2) {
      t2 > 0.999 && (t2 = 1), t2 < 1e-3 && (t2 = 0), this.alpha = t2;
    }, o.prototype.getAlpha = function() {
      return this.alpha;
    }, o.prototype.isInitialized = function() {
      return this.initialized;
    }, o.prototype.setInitialized = function(t2) {
      this.initialized = t2;
    }, o.prototype.isUpdating = function() {
      return this.updating;
    }, o.prototype.setUpdating = function(t2) {
      this.updating = t2;
    }, o.prototype.getLive2DModel = function() {
      return this.live2DModel;
    }, o.prototype.setLipSync = function(t2) {
      this.lipSync = t2;
    }, o.prototype.setLipSyncValue = function(t2) {
      this.lipSyncValue = t2;
    }, o.prototype.setAccel = function(t2, e2, i2) {
      this.accelX = t2, this.accelY = e2, this.accelZ = i2;
    }, o.prototype.setDrag = function(t2, e2) {
      this.dragX = t2, this.dragY = e2;
    }, o.prototype.getMainMotionManager = function() {
      return this.mainMotionManager;
    }, o.prototype.getExpressionManager = function() {
      return this.expressionManager;
    }, o.prototype.loadModelData = function(t2, e2) {
      var i2 = y.getPlatformManager();
      this.debugMode && i2.log("Load model : " + t2);
      var o2 = this;
      i2.loadLive2DModel(t2, function(t3) {
        o2.live2DModel = t3, o2.live2DModel.saveParam();
        r.Live2D.getError() == 0 ? (o2.modelMatrix = new $(o2.live2DModel.getCanvasWidth(), o2.live2DModel.getCanvasHeight()), o2.modelMatrix.setWidth(2), o2.modelMatrix.setCenterPosition(0, 0), e2(o2.live2DModel)) : console.error("Error : Failed to loadModelData().");
      });
    }, o.prototype.loadTexture = function(t2, e2, i2) {
      n++;
      var r2 = y.getPlatformManager();
      this.debugMode && r2.log("Load Texture : " + e2);
      var o2 = this;
      r2.loadTexture(this.live2DModel, t2, e2, function() {
        --n == 0 && (o2.isTexLoaded = true), typeof i2 == "function" && i2();
      });
    }, o.prototype.loadMotion = function(t2, e2, i2) {
      var o2 = y.getPlatformManager();
      this.debugMode && o2.log("Load Motion : " + e2);
      var n2 = null, s2 = this;
      o2.loadBytes(e2, function(e3) {
        n2 = r.Live2DMotion.loadMotion(e3), t2 != null && (s2.motions[t2] = n2), i2(n2);
      });
    }, o.prototype.loadExpression = function(t2, e2, i2) {
      var r2 = y.getPlatformManager();
      this.debugMode && r2.log("Load Expression : " + e2);
      var o2 = this;
      r2.loadBytes(e2, function(e3) {
        t2 != null && (o2.expressions[t2] = s.loadJson(e3)), typeof i2 == "function" && i2();
      });
    }, o.prototype.loadPose = function(t2, e2) {
      var i2 = y.getPlatformManager();
      this.debugMode && i2.log("Load Pose : " + t2);
      var r2 = this;
      try {
        i2.loadBytes(t2, function(t3) {
          r2.pose = c.load(t3), typeof e2 == "function" && e2();
        });
      } catch (t3) {
        console.warn(t3);
      }
    }, o.prototype.loadPhysics = function(t2) {
      var e2 = y.getPlatformManager();
      this.debugMode && e2.log("Load Physics : " + t2);
      var i2 = this;
      try {
        e2.loadBytes(t2, function(t3) {
          i2.physics = p.load(t3);
        });
      } catch (t3) {
        console.warn(t3);
      }
    }, o.prototype.hitTestSimple = function(t2, e2, i2) {
      if (this.live2DModel === null)
        return false;
      var r2 = this.live2DModel.getDrawDataIndex(t2);
      if (r2 < 0)
        return false;
      for (var o2 = this.live2DModel.getTransformedPoints(r2), n2 = this.live2DModel.getCanvasWidth(), s2 = 0, a2 = this.live2DModel.getCanvasHeight(), _2 = 0, h2 = 0; h2 < o2.length; h2 += 2) {
        var l2 = o2[h2], $2 = o2[h2 + 1];
        l2 < n2 && (n2 = l2), l2 > s2 && (s2 = l2), $2 < a2 && (a2 = $2), $2 > _2 && (_2 = $2);
      }
      var u2 = this.modelMatrix.invertTransformX(e2), p2 = this.modelMatrix.invertTransformY(i2);
      return n2 <= u2 && u2 <= s2 && a2 <= p2 && p2 <= _2;
    };
    function s() {
      r.AMotion.prototype.constructor.call(this), this.paramList = new Array();
    }
    s.prototype = new r.AMotion(), s.EXPRESSION_DEFAULT = "DEFAULT", s.TYPE_SET = 0, s.TYPE_ADD = 1, s.TYPE_MULT = 2, s.loadJson = function(t2) {
      var e2 = new s(), i2 = y.getPlatformManager().jsonParseFromBytes(t2);
      if (e2.setFadeIn(parseInt(i2.fade_in) > 0 ? parseInt(i2.fade_in) : 1e3), e2.setFadeOut(parseInt(i2.fade_out) > 0 ? parseInt(i2.fade_out) : 1e3), i2.params == null)
        return e2;
      var r2 = i2.params, o2 = r2.length;
      e2.paramList = [];
      for (var n2 = 0; n2 < o2; n2++) {
        var _2 = r2[n2], h2 = _2.id.toString(), l2 = parseFloat(_2.val), $2 = s.TYPE_ADD, u2 = _2.calc != null ? _2.calc.toString() : "add";
        if (($2 = u2 === "add" ? s.TYPE_ADD : u2 === "mult" ? s.TYPE_MULT : u2 === "set" ? s.TYPE_SET : s.TYPE_ADD) == s.TYPE_ADD) {
          l2 -= p2 = _2.def == null ? 0 : parseFloat(_2.def);
        } else if ($2 == s.TYPE_MULT) {
          var p2;
          (p2 = _2.def == null ? 1 : parseFloat(_2.def)) == 0 && (p2 = 1), l2 /= p2;
        }
        var c2 = new a();
        c2.id = h2, c2.type = $2, c2.value = l2, e2.paramList.push(c2);
      }
      return e2;
    }, s.prototype.updateParamExe = function(t2, e2, i2, r2) {
      for (var o2 = this.paramList.length - 1; o2 >= 0; --o2) {
        var n2 = this.paramList[o2];
        n2.type == s.TYPE_ADD ? t2.addToParamFloat(n2.id, n2.value, i2) : n2.type == s.TYPE_MULT ? t2.multParamFloat(n2.id, n2.value, i2) : n2.type == s.TYPE_SET && t2.setParamFloat(n2.id, n2.value, i2);
      }
    };
    function a() {
      this.id = "", this.type = -1, this.value = null;
    }
    function _() {
      this.nextBlinkTime = null, this.stateStartTime = null, this.blinkIntervalMsec = null, this.eyeState = h.STATE_FIRST, this.blinkIntervalMsec = 4e3, this.closingMotionMsec = 100, this.closedMotionMsec = 50, this.openingMotionMsec = 150, this.closeIfZero = true, this.eyeID_L = "PARAM_EYE_L_OPEN", this.eyeID_R = "PARAM_EYE_R_OPEN";
    }
    _.prototype.calcNextBlink = function() {
      return r.UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1);
    }, _.prototype.setInterval = function(t2) {
      this.blinkIntervalMsec = t2;
    }, _.prototype.setEyeMotion = function(t2, e2, i2) {
      this.closingMotionMsec = t2, this.closedMotionMsec = e2, this.openingMotionMsec = i2;
    }, _.prototype.updateParam = function(t2) {
      var e2, i2 = r.UtSystem.getUserTimeMSec(), o2 = 0;
      switch (this.eyeState) {
        case h.STATE_CLOSING:
          (o2 = (i2 - this.stateStartTime) / this.closingMotionMsec) >= 1 && (o2 = 1, this.eyeState = h.STATE_CLOSED, this.stateStartTime = i2), e2 = 1 - o2;
          break;
        case h.STATE_CLOSED:
          (o2 = (i2 - this.stateStartTime) / this.closedMotionMsec) >= 1 && (this.eyeState = h.STATE_OPENING, this.stateStartTime = i2), e2 = 0;
          break;
        case h.STATE_OPENING:
          (o2 = (i2 - this.stateStartTime) / this.openingMotionMsec) >= 1 && (o2 = 1, this.eyeState = h.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink()), e2 = o2;
          break;
        case h.STATE_INTERVAL:
          this.nextBlinkTime < i2 && (this.eyeState = h.STATE_CLOSING, this.stateStartTime = i2), e2 = 1;
          break;
        case h.STATE_FIRST:
        default:
          this.eyeState = h.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), e2 = 1;
      }
      this.closeIfZero || (e2 = -e2), t2.setParamFloat(this.eyeID_L, e2), t2.setParamFloat(this.eyeID_R, e2);
    };
    var h = function() {
    };
    h.STATE_FIRST = "STATE_FIRST", h.STATE_INTERVAL = "STATE_INTERVAL", h.STATE_CLOSING = "STATE_CLOSING", h.STATE_CLOSED = "STATE_CLOSED", h.STATE_OPENING = "STATE_OPENING";
    function l() {
      this.tr = new Float32Array(16), this.identity();
    }
    l.mul = function(t2, e2, i2) {
      var r2, o2, n2, s2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (r2 = 0; r2 < 4; r2++)
        for (o2 = 0; o2 < 4; o2++)
          for (n2 = 0; n2 < 4; n2++)
            s2[r2 + 4 * o2] += t2[r2 + 4 * n2] * e2[n2 + 4 * o2];
      for (r2 = 0; r2 < 16; r2++)
        i2[r2] = s2[r2];
    }, l.prototype.identity = function() {
      for (var t2 = 0; t2 < 16; t2++)
        this.tr[t2] = t2 % 5 == 0 ? 1 : 0;
    }, l.prototype.getArray = function() {
      return this.tr;
    }, l.prototype.getCopyMatrix = function() {
      return new Float32Array(this.tr);
    }, l.prototype.setMatrix = function(t2) {
      if (this.tr != null && this.tr.length == this.tr.length)
        for (var e2 = 0; e2 < 16; e2++)
          this.tr[e2] = t2[e2];
    }, l.prototype.getScaleX = function() {
      return this.tr[0];
    }, l.prototype.getScaleY = function() {
      return this.tr[5];
    }, l.prototype.transformX = function(t2) {
      return this.tr[0] * t2 + this.tr[12];
    }, l.prototype.transformY = function(t2) {
      return this.tr[5] * t2 + this.tr[13];
    }, l.prototype.invertTransformX = function(t2) {
      return (t2 - this.tr[12]) / this.tr[0];
    }, l.prototype.invertTransformY = function(t2) {
      return (t2 - this.tr[13]) / this.tr[5];
    }, l.prototype.multTranslate = function(t2, e2) {
      var i2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, 0, 1];
      l.mul(i2, this.tr, this.tr);
    }, l.prototype.translate = function(t2, e2) {
      this.tr[12] = t2, this.tr[13] = e2;
    }, l.prototype.translateX = function(t2) {
      this.tr[12] = t2;
    }, l.prototype.translateY = function(t2) {
      this.tr[13] = t2;
    }, l.prototype.multScale = function(t2, e2) {
      var i2 = [t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      l.mul(i2, this.tr, this.tr);
    }, l.prototype.scale = function(t2, e2) {
      this.tr[0] = t2, this.tr[5] = e2;
    };
    function $(t2, e2) {
      l.prototype.constructor.call(this), this.width = t2, this.height = e2;
    }
    $.prototype = new l(), $.prototype.setPosition = function(t2, e2) {
      this.translate(t2, e2);
    }, $.prototype.setCenterPosition = function(t2, e2) {
      var i2 = this.width * this.getScaleX(), r2 = this.height * this.getScaleY();
      this.translate(t2 - i2 / 2, e2 - r2 / 2);
    }, $.prototype.top = function(t2) {
      this.setY(t2);
    }, $.prototype.bottom = function(t2) {
      var e2 = this.height * this.getScaleY();
      this.translateY(t2 - e2);
    }, $.prototype.left = function(t2) {
      this.setX(t2);
    }, $.prototype.right = function(t2) {
      var e2 = this.width * this.getScaleX();
      this.translateX(t2 - e2);
    }, $.prototype.centerX = function(t2) {
      var e2 = this.width * this.getScaleX();
      this.translateX(t2 - e2 / 2);
    }, $.prototype.centerY = function(t2) {
      var e2 = this.height * this.getScaleY();
      this.translateY(t2 - e2 / 2);
    }, $.prototype.setX = function(t2) {
      this.translateX(t2);
    }, $.prototype.setY = function(t2) {
      this.translateY(t2);
    }, $.prototype.setHeight = function(t2) {
      var e2 = t2 / this.height, i2 = -e2;
      this.scale(e2, i2);
    }, $.prototype.setWidth = function(t2) {
      var e2 = t2 / this.width, i2 = -e2;
      this.scale(e2, i2);
    };
    function u() {
      r.MotionQueueManager.prototype.constructor.call(this), this.currentPriority = null, this.reservePriority = null, this.super = r.MotionQueueManager.prototype;
    }
    u.prototype = new r.MotionQueueManager(), u.prototype.getCurrentPriority = function() {
      return this.currentPriority;
    }, u.prototype.getReservePriority = function() {
      return this.reservePriority;
    }, u.prototype.reserveMotion = function(t2) {
      return !(this.reservePriority >= t2) && (!(this.currentPriority >= t2) && (this.reservePriority = t2, true));
    }, u.prototype.setReservePriority = function(t2) {
      this.reservePriority = t2;
    }, u.prototype.updateParam = function(t2) {
      var e2 = r.MotionQueueManager.prototype.updateParam.call(this, t2);
      return this.isFinished() && (this.currentPriority = 0), e2;
    }, u.prototype.startMotionPrio = function(t2, e2) {
      return e2 == this.reservePriority && (this.reservePriority = 0), this.currentPriority = e2, this.startMotion(t2, false);
    };
    function p() {
      this.physicsList = new Array(), this.startTimeMSec = r.UtSystem.getUserTimeMSec();
    }
    p.load = function(t2) {
      for (var e2 = new p(), i2 = y.getPlatformManager().jsonParseFromBytes(t2).physics_hair, o2 = i2.length, n2 = 0; n2 < o2; n2++) {
        var s2 = i2[n2], a2 = new r.PhysicsHair(), _2 = s2.setup, h2 = parseFloat(_2.length), l2 = parseFloat(_2.regist), $2 = parseFloat(_2.mass);
        a2.setup(h2, l2, $2);
        for (var u2 = s2.src, c2 = u2.length, f2 = 0; f2 < c2; f2++) {
          var d2 = u2[f2], g2 = d2.id, m2 = r.PhysicsHair.Src.SRC_TO_X;
          (L = d2.ptype) === "x" ? m2 = r.PhysicsHair.Src.SRC_TO_X : L === "y" ? m2 = r.PhysicsHair.Src.SRC_TO_Y : L === "angle" ? m2 = r.PhysicsHair.Src.SRC_TO_G_ANGLE : r.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
          var T = parseFloat(d2.scale), v = parseFloat(d2.weight);
          a2.addSrcParam(m2, g2, T, v);
        }
        var P = s2.targets, S = P.length;
        for (f2 = 0; f2 < S; f2++) {
          var L, M = P[f2];
          g2 = M.id, m2 = r.PhysicsHair.Target.TARGET_FROM_ANGLE;
          (L = M.ptype) === "angle" ? m2 = r.PhysicsHair.Target.TARGET_FROM_ANGLE : L === "angle_v" ? m2 = r.PhysicsHair.Target.TARGET_FROM_ANGLE_V : r.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
          T = parseFloat(M.scale), v = parseFloat(M.weight);
          a2.addTargetParam(m2, g2, T, v);
        }
        e2.physicsList.push(a2);
      }
      return e2;
    }, p.prototype.updateParam = function(t2) {
      for (var e2 = r.UtSystem.getUserTimeMSec() - this.startTimeMSec, i2 = 0; i2 < this.physicsList.length; i2++)
        this.physicsList[i2].update(t2, e2);
    };
    function c() {
      this.lastTime = 0, this.lastModel = null, this.partsGroups = new Array();
    }
    c.load = function(t2) {
      for (var e2 = new c(), i2 = y.getPlatformManager().jsonParseFromBytes(t2).parts_visible, r2 = i2.length, o2 = 0; o2 < r2; o2++) {
        for (var n2 = i2[o2].group, s2 = n2.length, a2 = new Array(), _2 = 0; _2 < s2; _2++) {
          var h2 = n2[_2], l2 = new f(h2.id);
          if (a2[_2] = l2, h2.link != null) {
            var $2 = h2.link, u2 = $2.length;
            l2.link = new Array();
            for (var p2 = 0; p2 < u2; p2++) {
              var d2 = new f($2[p2]);
              l2.link.push(d2);
            }
          }
        }
        e2.partsGroups.push(a2);
      }
      return e2;
    }, c.prototype.updateParam = function(t2) {
      if (t2 != null) {
        t2 != this.lastModel && this.initParam(t2), this.lastModel = t2;
        var e2 = r.UtSystem.getUserTimeMSec(), i2 = this.lastTime == 0 ? 0 : (e2 - this.lastTime) / 1e3;
        this.lastTime = e2, i2 < 0 && (i2 = 0);
        for (var o2 = 0; o2 < this.partsGroups.length; o2++)
          this.normalizePartsOpacityGroup(t2, this.partsGroups[o2], i2), this.copyOpacityOtherParts(t2, this.partsGroups[o2]);
      }
    }, c.prototype.initParam = function(t2) {
      if (t2 != null)
        for (var e2 = 0; e2 < this.partsGroups.length; e2++)
          for (var i2 = this.partsGroups[e2], r2 = 0; r2 < i2.length; r2++) {
            i2[r2].initIndex(t2);
            var o2 = i2[r2].partsIndex, n2 = i2[r2].paramIndex;
            if (!(o2 < 0)) {
              var s2 = t2.getParamFloat(n2) != 0;
              if (t2.setPartsOpacity(o2, s2 ? 1 : 0), t2.setParamFloat(n2, s2 ? 1 : 0), i2[r2].link != null)
                for (var a2 = 0; a2 < i2[r2].link.length; a2++)
                  i2[r2].link[a2].initIndex(t2);
            }
          }
    }, c.prototype.normalizePartsOpacityGroup = function(t2, e2, i2) {
      for (var r2 = -1, o2 = 1, n2 = 0; n2 < e2.length; n2++) {
        var s2 = e2[n2].partsIndex, a2 = e2[n2].paramIndex;
        if (!(s2 < 0) && t2.getParamFloat(a2) != 0) {
          if (r2 >= 0)
            break;
          r2 = n2, o2 = t2.getPartsOpacity(s2), (o2 += i2 / 0.5) > 1 && (o2 = 1);
        }
      }
      r2 < 0 && (r2 = 0, o2 = 1);
      for (n2 = 0; n2 < e2.length; n2++) {
        if (!((s2 = e2[n2].partsIndex) < 0))
          if (r2 == n2)
            t2.setPartsOpacity(s2, o2);
          else {
            var _2, h2 = t2.getPartsOpacity(s2);
            (1 - (_2 = o2 < 0.5 ? -0.5 * o2 / 0.5 + 1 : 0.5 * (1 - o2) / 0.5)) * (1 - o2) > 0.15 && (_2 = 1 - 0.15 / (1 - o2)), h2 > _2 && (h2 = _2), t2.setPartsOpacity(s2, h2);
          }
      }
    }, c.prototype.copyOpacityOtherParts = function(t2, e2) {
      for (var i2 = 0; i2 < e2.length; i2++) {
        var r2 = e2[i2];
        if (r2.link != null && !(r2.partsIndex < 0))
          for (var o2 = t2.getPartsOpacity(r2.partsIndex), n2 = 0; n2 < r2.link.length; n2++) {
            var s2 = r2.link[n2];
            s2.partsIndex < 0 || t2.setPartsOpacity(s2.partsIndex, o2);
          }
      }
    };
    function f(t2) {
      this.paramIndex = -1, this.partsIndex = -1, this.link = null, this.id = t2;
    }
    f.prototype.initIndex = function(t2) {
      this.paramIndex = t2.getParamIndex("VISIBLE:" + this.id), this.partsIndex = t2.getPartsDataIndex(r.PartsDataID.getID(this.id)), t2.setParamFloat(this.paramIndex, 1);
    };
    function d() {
      this.EPSILON = 0.01, this.faceTargetX = 0, this.faceTargetY = 0, this.faceX = 0, this.faceY = 0, this.faceVX = 0, this.faceVY = 0, this.lastTimeSec = 0;
    }
    d.FRAME_RATE = 60, d.prototype.setPoint = function(t2, e2) {
      this.faceTargetX = t2, this.faceTargetY = e2;
    }, d.prototype.getX = function() {
      return this.faceX;
    }, d.prototype.getY = function() {
      return this.faceY;
    }, d.prototype.update = function() {
      var t2 = 40 / 7.5 / d.FRAME_RATE;
      if (this.lastTimeSec != 0) {
        var e2 = r.UtSystem.getUserTimeMSec(), i2 = (e2 - this.lastTimeSec) * d.FRAME_RATE / 1e3;
        this.lastTimeSec = e2;
        var o2 = i2 * t2 / (0.15 * d.FRAME_RATE), n2 = this.faceTargetX - this.faceX, s2 = this.faceTargetY - this.faceY;
        if (!(Math.abs(n2) <= this.EPSILON && Math.abs(s2) <= this.EPSILON)) {
          var a2 = Math.sqrt(n2 * n2 + s2 * s2), _2 = t2 * s2 / a2, h2 = t2 * n2 / a2 - this.faceVX, l2 = _2 - this.faceVY, $2 = Math.sqrt(h2 * h2 + l2 * l2);
          ($2 < -o2 || $2 > o2) && (h2 *= o2 / $2, l2 *= o2 / $2, $2 = o2), this.faceVX += h2, this.faceVY += l2;
          var u2 = 0.5 * (Math.sqrt(o2 * o2 + 16 * o2 * a2 - 8 * o2 * a2) - o2), p2 = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
          p2 > u2 && (this.faceVX *= u2 / p2, this.faceVY *= u2 / p2), this.faceX += this.faceVX, this.faceY += this.faceVY;
        }
      } else
        this.lastTimeSec = r.UtSystem.getUserTimeMSec();
    };
    function g() {
      l.prototype.constructor.call(this), this.screenLeft = null, this.screenRight = null, this.screenTop = null, this.screenBottom = null, this.maxLeft = null, this.maxRight = null, this.maxTop = null, this.maxBottom = null;
    }
    g.prototype = new l(), g.prototype.adjustTranslate = function(t2, e2) {
      this.tr[0] * this.maxLeft + (this.tr[12] + t2) > this.screenLeft && (t2 = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]), this.tr[0] * this.maxRight + (this.tr[12] + t2) < this.screenRight && (t2 = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]), this.tr[5] * this.maxTop + (this.tr[13] + e2) < this.screenTop && (e2 = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]), this.tr[5] * this.maxBottom + (this.tr[13] + e2) > this.screenBottom && (e2 = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]);
      var i2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, 0, 1];
      l.mul(i2, this.tr, this.tr);
    }, g.prototype.adjustScale = function(t2, e2, i2) {
      this.tr[0];
      var r2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, 0, 1], o2 = [i2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], n2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t2, -e2, 0, 1];
      l.mul(n2, this.tr, this.tr), l.mul(o2, this.tr, this.tr), l.mul(r2, this.tr, this.tr);
    }, g.prototype.setScreenRect = function(t2, e2, i2, r2) {
      this.screenLeft = t2, this.screenRight = e2, this.screenTop = r2, this.screenBottom = i2;
    }, g.prototype.setMaxScreenRect = function(t2, e2, i2, r2) {
      this.maxLeft = t2, this.maxRight = e2, this.maxTop = r2, this.maxBottom = i2;
    }, g.prototype.getScreenLeft = function() {
      return this.screenLeft;
    }, g.prototype.getScreenRight = function() {
      return this.screenRight;
    }, g.prototype.getScreenBottom = function() {
      return this.screenBottom;
    }, g.prototype.getScreenTop = function() {
      return this.screenTop;
    }, g.prototype.getMaxLeft = function() {
      return this.maxLeft;
    }, g.prototype.getMaxRight = function() {
      return this.maxRight;
    }, g.prototype.getMaxBottom = function() {
      return this.maxBottom;
    }, g.prototype.getMaxTop = function() {
      return this.maxTop;
    };
    function y() {
    }
    y.platformManager = null, y.getPlatformManager = function() {
      return y.platformManager;
    }, y.setPlatformManager = function(t2) {
      y.platformManager = t2;
    }, e.L2DTargetPoint = d, e.Live2DFramework = y, e.L2DViewMatrix = g, e.L2DPose = c, e.L2DPartsParam = f, e.L2DPhysics = p, e.L2DMotionManager = u, e.L2DModelMatrix = $, e.L2DMatrix44 = l, e.EYE_STATE = h, e.L2DEyeBlink = _, e.L2DExpressionParam = a, e.L2DExpressionMotion = s, e.L2DBaseModel = o;
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true });
    e.cDefine = { VIEW_LOGICAL_LEFT: -1, VIEW_LOGICAL_RIGHT: 1, VIEW_LOGICAL_MAX_LEFT: -2, VIEW_LOGICAL_MAX_RIGHT: 2, VIEW_LOGICAL_MAX_BOTTOM: -2, VIEW_LOGICAL_MAX_TOP: 2, PRIORITY_NONE: 0, PRIORITY_IDLE: 1, PRIORITY_NORMAL: 2, PRIORITY_FORCE: 3, MOTION_GROUP_IDLE: "idle", MOTION_GROUP_TAP_BODY: "tap_body", MOTION_GROUP_FLICK_HEAD: "flick_head", MOTION_GROUP_PINCH_IN: "pinch_in", MOTION_GROUP_PINCH_OUT: "pinch_out", MOTION_GROUP_SHAKE: "shake", HIT_AREA_HEAD: "head", HIT_AREA_BODY: "body" };
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true });
    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
      return typeof t2;
    } : function(t2) {
      return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
    }, o = window.device, n = {}, s = [];
    window.device = n;
    var a = window.document.documentElement, _ = window.navigator.userAgent.toLowerCase(), h = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
    n.macos = function() {
      return l("mac");
    }, n.ios = function() {
      return n.iphone() || n.ipod() || n.ipad();
    }, n.iphone = function() {
      return !n.windows() && l("iphone");
    }, n.ipod = function() {
      return l("ipod");
    }, n.ipad = function() {
      return l("ipad");
    }, n.android = function() {
      return !n.windows() && l("android");
    }, n.androidPhone = function() {
      return n.android() && l("mobile");
    }, n.androidTablet = function() {
      return n.android() && !l("mobile");
    }, n.blackberry = function() {
      return l("blackberry") || l("bb10") || l("rim");
    }, n.blackberryPhone = function() {
      return n.blackberry() && !l("tablet");
    }, n.blackberryTablet = function() {
      return n.blackberry() && l("tablet");
    }, n.windows = function() {
      return l("windows");
    }, n.windowsPhone = function() {
      return n.windows() && l("phone");
    }, n.windowsTablet = function() {
      return n.windows() && l("touch") && !n.windowsPhone();
    }, n.fxos = function() {
      return (l("(mobile") || l("(tablet")) && l(" rv:");
    }, n.fxosPhone = function() {
      return n.fxos() && l("mobile");
    }, n.fxosTablet = function() {
      return n.fxos() && l("tablet");
    }, n.meego = function() {
      return l("meego");
    }, n.cordova = function() {
      return window.cordova && location.protocol === "file:";
    }, n.nodeWebkit = function() {
      return r(window.process) === "object";
    }, n.mobile = function() {
      return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego();
    }, n.tablet = function() {
      return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet();
    }, n.desktop = function() {
      return !n.tablet() && !n.mobile();
    }, n.television = function() {
      for (var t2 = 0; t2 < h.length; ) {
        if (l(h[t2]))
          return true;
        t2++;
      }
      return false;
    }, n.portrait = function() {
      return window.innerHeight / window.innerWidth > 1;
    }, n.landscape = function() {
      return window.innerHeight / window.innerWidth < 1;
    }, n.noConflict = function() {
      return window.device = o, this;
    };
    function l(t2) {
      return _.indexOf(t2) !== -1;
    }
    function $(t2) {
      return a.className.match(new RegExp(t2, "i"));
    }
    function u(t2) {
      var e2 = null;
      $(t2) || (e2 = a.className.replace(/^\s+|\s+$/g, ""), a.className = e2 + " " + t2);
    }
    function p(t2) {
      $(t2) && (a.className = a.className.replace(" " + t2, ""));
    }
    n.ios() ? n.ipad() ? u("ios ipad tablet") : n.iphone() ? u("ios iphone mobile") : n.ipod() && u("ios ipod mobile") : n.macos() ? u("macos desktop") : n.android() ? n.androidTablet() ? u("android tablet") : u("android mobile") : n.blackberry() ? n.blackberryTablet() ? u("blackberry tablet") : u("blackberry mobile") : n.windows() ? n.windowsTablet() ? u("windows tablet") : n.windowsPhone() ? u("windows mobile") : u("windows desktop") : n.fxos() ? n.fxosTablet() ? u("fxos tablet") : u("fxos mobile") : n.meego() ? u("meego mobile") : n.nodeWebkit() ? u("node-webkit") : n.television() ? u("television") : n.desktop() && u("desktop"), n.cordova() && u("cordova");
    function c() {
      n.landscape() ? (p("portrait"), u("landscape"), f("landscape")) : (p("landscape"), u("portrait"), f("portrait")), y();
    }
    function f(t2) {
      for (var e2 in s)
        s[e2](t2);
    }
    n.onChangeOrientation = function(t2) {
      typeof t2 == "function" && s.push(t2);
    };
    var d = "resize";
    Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (d = "onorientationchange"), window.addEventListener ? window.addEventListener(d, c, false) : window.attachEvent ? window.attachEvent(d, c) : window[d] = c, c();
    function g(t2) {
      for (var e2 = 0; e2 < t2.length; e2++)
        if (n[t2[e2]]())
          return t2[e2];
      return "unknown";
    }
    n.type = g(["mobile", "tablet", "desktop"]), n.os = g(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "windows", "fxos", "meego", "television"]);
    function y() {
      n.orientation = g(["portrait", "landscape"]);
    }
    y(), e.default = n;
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.currCanvas = e.currWebGL = e.createElement = void 0;
    var r = i(1), o = i(0), n = i(12), s = void 0, a = void 0;
    e.createElement = function() {
      var t2 = document.getElementById(r.config.name.div);
      t2 !== null && document.body.removeChild(t2);
      var i2 = document.createElement("div");
      i2.id = r.config.name.div, i2.className = "live2d-widget-container", i2.style.setProperty("position", "fixed"), i2.style.setProperty(r.config.display.position, r.config.display.hOffset + "px"), i2.style.setProperty("bottom", r.config.display.vOffset + "px"), i2.style.setProperty("width", r.config.display.width + "px"), i2.style.setProperty("height", r.config.display.height + "px"), i2.style.setProperty("z-index", 99999), i2.style.setProperty("opacity", r.config.react.opacity), i2.style.setProperty("pointer-events", "none"), document.body.appendChild(i2), o.L2Dwidget.emit("create-container", i2), r.config.dialog.enable && (0, n.createDialogElement)(i2);
      var _ = document.createElement("canvas");
      _.setAttribute("id", r.config.name.canvas), _.setAttribute("width", r.config.display.width * r.config.display.superSample), _.setAttribute("height", r.config.display.height * r.config.display.superSample), _.style.setProperty("position", "absolute"), _.style.setProperty("left", "0px"), _.style.setProperty("top", "0px"), _.style.setProperty("width", r.config.display.width + "px"), _.style.setProperty("height", r.config.display.height + "px"), r.config.dev.border && _.style.setProperty("border", "dashed 1px #CCC"), i2.appendChild(_), e.currCanvas = a = document.getElementById(r.config.name.canvas), o.L2Dwidget.emit("create-canvas", _), function() {
        for (var t3 = ["webgl2", "webgl", "experimental-webgl2", "experimental-webgl", "webkit-3d", "moz-webgl"], i3 = 0; i3 < t3.length; i3++)
          try {
            var r2 = a.getContext(t3[i3], { alpha: true, antialias: true, premultipliedAlpha: true, failIfMajorPerformanceCaveat: false });
            r2 && (e.currWebGL = s = r2);
          } catch (t4) {
          }
        s || (console.error("Live2D widgets: Failed to create WebGL context."), window.WebGLRenderingContext || console.error("Your browser may not support WebGL, check https://get.webgl.org/ for futher information."));
      }();
    }, e.currWebGL = s, e.currCanvas = a;
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.MatrixStack = r;
    function r() {
    }
    r.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.depth = 0, r.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.tmp = new Array(16), r.reset = function() {
      this.depth = 0;
    }, r.loadIdentity = function() {
      for (var t2 = 0; t2 < 16; t2++)
        this.currentMatrix[t2] = t2 % 5 == 0 ? 1 : 0;
    }, r.push = function() {
      var t2 = 16 * (this.depth + 1);
      this.matrixStack.length < t2 + 16 && (this.matrixStack.length = t2 + 16);
      for (var e2 = 0; e2 < 16; e2++)
        this.matrixStack[t2 + e2] = this.currentMatrix[e2];
      this.depth++;
    }, r.pop = function() {
      this.depth--, this.depth < 0 && (myError("Invalid matrix stack."), this.depth = 0);
      for (var t2 = 16 * this.depth, e2 = 0; e2 < 16; e2++)
        this.currentMatrix[e2] = this.matrixStack[t2 + e2];
    }, r.getMatrix = function() {
      return this.currentMatrix;
    }, r.multMatrix = function(t2) {
      var e2, i2, r2;
      for (e2 = 0; e2 < 16; e2++)
        this.tmp[e2] = 0;
      for (e2 = 0; e2 < 4; e2++)
        for (i2 = 0; i2 < 4; i2++)
          for (r2 = 0; r2 < 4; r2++)
            this.tmp[e2 + 4 * i2] += this.currentMatrix[e2 + 4 * r2] * t2[r2 + 4 * i2];
      for (e2 = 0; e2 < 16; e2++)
        this.currentMatrix[e2] = this.tmp[e2];
    };
  }, function(t, e, i) {
    t.exports = i(0);
  }, function(t, e, i) {
    t.exports = { model: { jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@latest/assets/shizuku.model.json", scale: 1 }, display: { superSample: 2, width: 200, height: 400, position: "right", hOffset: 0, vOffset: -20 }, mobile: { show: true, scale: 0.8, motion: true }, name: { canvas: "live2dcanvas", div: "live2d-widget" }, react: { opacity: 1 }, dev: { border: false }, dialog: { enable: false, hitokoto: false } };
  }, function(t, e, i) {
    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
      return typeof t2;
    } : function(t2) {
      return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
    };
    t.exports = function t2(e2, i2) {
      e2 = e2 || {};
      function o(e3, i3) {
        for (var o2 in i3)
          if (i3.hasOwnProperty(o2)) {
            var n2 = i3[o2];
            if (o2 === "__proto__")
              continue;
            var s2 = e3[o2];
            s2 == null ? e3[o2] = n2 : (s2 === void 0 ? "undefined" : r(s2)) === "object" && s2 !== null && (n2 === void 0 ? "undefined" : r(n2)) === "object" && n2 !== null && t2(s2, n2);
          }
      }
      for (var n = arguments.length, s = 0; s < n; ) {
        var a = arguments[s++];
        a && o(e2, a);
      }
      return e2;
    };
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.captureFrame = e.theRealInit = void 0;
    var r, o = i(1), n = i(6), s = i(2), a = i(3), _ = i(14), h = i(7), l = i(4), $ = i(5), u = (r = $, r && r.__esModule ? r : { default: r }), p = i(0);
    var c = null, f = void 0, d = false, g = null, y = null, m2 = null, T = null, v = false, P = 0.5;
    function S(t2, e2, i2) {
      if (e2.x < i2.left + i2.width && e2.y < i2.top + i2.height && e2.x > i2.left && e2.y > i2.top)
        return e2;
      var r2 = t2.x - e2.x, o2 = t2.y - e2.y;
      function n2(t3, e3) {
        return 180 * Math.acos((i3 = { x: 0, y: 1 }, r3 = function(t4, e4) {
          var i4 = Math.sqrt(t4 * t4 + e4 * e4);
          return { x: t4 / i4, y: e4 / i4 };
        }(t3, e3), i3.x * r3.x + i3.y * r3.y)) / Math.PI;
        var i3, r3;
      }
      var s2 = n2(r2, o2);
      e2.x < t2.x && (s2 = 360 - s2);
      var a2 = 360 - n2(i2.left - t2.x, -1 * (i2.top - t2.y)), _2 = 360 - n2(i2.left - t2.x, -1 * (i2.top + i2.height - t2.y)), h2 = n2(i2.left + i2.width - t2.x, -1 * (i2.top - t2.y)), l2 = n2(i2.left + i2.width - t2.x, -1 * (i2.top + i2.height - t2.y)), $2 = o2 / r2, u2 = {};
      if (s2 < h2) {
        var p2 = i2.top - t2.y, c2 = p2 / $2;
        u2 = { y: t2.y + p2, x: t2.x + c2 };
      } else if (s2 < l2) {
        var f2 = i2.left + i2.width - t2.x, d2 = f2 * $2;
        u2 = { y: t2.y + d2, x: t2.x + f2 };
      } else if (s2 < _2) {
        var g2 = i2.top + i2.height - t2.y, y2 = g2 / $2;
        u2 = { y: t2.y + g2, x: t2.x + y2 };
      } else if (s2 < a2) {
        var m3 = t2.x - i2.left, T2 = m3 * $2;
        u2 = { y: t2.y - T2, x: t2.x - m3 };
      } else {
        var v2 = i2.top - t2.y, P2 = v2 / $2;
        u2 = { y: t2.y + v2, x: t2.x + P2 };
      }
      return u2;
    }
    function L(t2) {
      v = true;
      var e2 = n.currCanvas.getBoundingClientRect();
      I(t2.clientX - e2.left);
      b(t2.clientY - e2.top);
      var o2 = S({ x: e2.left + e2.width / 2, y: e2.top + e2.height * P }, { x: t2.clientX, y: t2.clientY }, e2), s2 = x(o2.x - e2.left), a2 = A(o2.y - e2.top);
      l.cDefine.DEBUG_MOUSE_LOG && console.log("modelTapEvent onMouseDown device( x:" + t2.clientX + " y:" + t2.clientY + " ) view( x:" + s2 + " y:" + a2 + ")"), p.L2Dwidget.emit("tap", t2), c.tapEvent(s2, a2);
    }
    function M() {
      v && (v = false), g.setPoint(0, 0);
    }
    function w(t2) {
      if (t2.type == "mousedown")
        L(t2);
      else if (t2.type == "mousemove")
        !function(t3) {
          v = true;
          var e2 = n.currCanvas.getBoundingClientRect();
          I(t3.clientX - e2.left);
          b(t3.clientY - e2.top);
          var o2 = S({ x: e2.left + e2.width / 2, y: e2.top + e2.height * P }, { x: t3.clientX, y: t3.clientY }, e2), s2 = x(o2.x - e2.left), a2 = A(o2.y - e2.top);
          l.cDefine.DEBUG_MOUSE_LOG && console.log("modelTurnHead onMouseMove device( x:" + t3.clientX + " y:" + t3.clientY + " ) view( x:" + s2 + " y:" + a2 + ")"), g.setPoint(s2, a2);
        }(t2);
      else if (t2.type == "mouseup") {
        if ("button" in t2 && t2.button != 0)
          return;
      } else
        t2.type == "mouseleave" && M();
    }
    function E(t2) {
      var e2 = t2.touches[0];
      t2.type == "touchstart" ? t2.touches.length == 1 && L(e2) : t2.type == "touchmove" ? function(t3) {
        var e3 = n.currCanvas.getBoundingClientRect();
        I(t3.clientX - e3.left);
        b(t3.clientY - e3.top);
        var o2 = S({ x: e3.left + e3.width / 2, y: e3.top + e3.height * P }, { x: t3.clientX, y: t3.clientY }, e3), s2 = x(o2.x - e3.left), a2 = A(o2.y - e3.top);
        l.cDefine.DEBUG_MOUSE_LOG && console.log("followPointer onMouseMove device( x:" + t3.clientX + " y:" + t3.clientY + " ) view( x:" + s2 + " y:" + a2 + ")"), v && g.setPoint(s2, a2);
      }(e2) : t2.type == "touchend" && M();
    }
    function x(t2) {
      var e2 = T.transformX(t2);
      return y.invertTransformX(e2);
    }
    function A(t2) {
      var e2 = T.transformY(t2);
      return y.invertTransformY(e2);
    }
    function I(t2) {
      return T.transformX(t2);
    }
    function b(t2) {
      return T.transformY(t2);
    }
    e.theRealInit = function() {
      (0, n.createElement)(), n.currCanvas.addEventListener && (window.addEventListener("click", w), window.addEventListener("mousedown", w), window.addEventListener("mousemove", w), window.addEventListener("mouseup", w), document.addEventListener("mouseleave", w), window.addEventListener("touchstart", E), window.addEventListener("touchend", E), window.addEventListener("touchmove", E)), c = new _.cManager(p.L2Dwidget), g = new a.L2DTargetPoint();
      var t2 = n.currCanvas.getBoundingClientRect(), e2 = t2.height / t2.width, i2 = l.cDefine.VIEW_LOGICAL_LEFT, r2 = l.cDefine.VIEW_LOGICAL_RIGHT, $2 = -e2, v2 = e2;
      (y = new a.L2DViewMatrix()).setScreenRect(i2, r2, $2, v2), y.setMaxScreenRect(l.cDefine.VIEW_LOGICAL_MAX_LEFT, l.cDefine.VIEW_LOGICAL_MAX_RIGHT, l.cDefine.VIEW_LOGICAL_MAX_BOTTOM, l.cDefine.VIEW_LOGICAL_MAX_TOP), P2 = u.default.mobile() && o.config.mobile.scale || o.config.model.scale, y.adjustScale(0, 0, P2);
      var P2;
      (m2 = new a.L2DMatrix44()).multScale(1, t2.width / t2.height), (T = new a.L2DMatrix44()).multTranslate(-t2.width / 2, -t2.height / 2), T.multScale(2 / t2.width, -2 / t2.height), s.Live2D.setGL(n.currWebGL), n.currWebGL.clearColor(0, 0, 0, 0), S2 = o.config.model.jsonPath, c.reloadFlg = true, c.count++, c.changeModel(n.currWebGL, S2);
      var S2;
      d || (d = true, function t3() {
        !function() {
          h.MatrixStack.reset(), h.MatrixStack.loadIdentity(), g.update(), c.setDrag(g.getX(), g.getY()), n.currWebGL.clear(n.currWebGL.COLOR_BUFFER_BIT), h.MatrixStack.multMatrix(m2.getArray()), h.MatrixStack.multMatrix(y.getArray()), h.MatrixStack.push();
          for (var t4 = 0; t4 < c.numModels(); t4++) {
            var e4 = c.getModel(t4);
            if (e4 == null)
              return;
            e4.initialized && !e4.updating && (e4.update(), e4.draw(n.currWebGL));
          }
          h.MatrixStack.pop();
        }();
        var e3 = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        e3(t3, n.currCanvas), f !== void 0 && (f(n.currCanvas.toDataURL()), f = void 0);
      }());
    }, e.captureFrame = function(t2) {
      f = t2;
    };
  }, function(t, e, i) {
    var r = i(1), o = i(0);
    document.head.innerHTML += "\n<style>\n  .live2d-widget-dialog-container {\n    width: 300px;\n    height: 120px;\n    position: absolute;\n    bottom: 65%;\n    right: 0px;\n    transform-origin: right;\n    padding: 12px;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n  }\n  .live2d-widget-dialog {\n    width: 100%;\n    height: 100%;\n    color: #917159;\n    font-size: 16px;\n    padding: 12px;\n    border: 2px solid rgb(236, 203, 180);\n    background: rgb(252, 248, 244);\n    box-sizing: border-box;\n    border-radius: 10px;\n    transform: rotate(-2deg);\n    opacity: 0;\n    transition: 200ms opacity;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    animation: live2d-widget-dialog-tingle 4s ease-in-out 0s infinite alternate;\n  }\n  @keyframes live2d-widget-dialog-tingle {\n    0% { transform: translate(-1px, 1.5px) rotate(-2deg); }\n    100% { transform: translate(1px, -1.5px) rotate(2deg); }\n  }\n</style>\n";
    var n = void 0, s = void 0, a = void 0;
    function _() {
      s.style.opacity = 1;
    }
    function h() {
      s.style.opacity = 0;
    }
    function l(t2) {
      _(), s.innerText = t2, clearTimeout(a), a = setTimeout(function() {
        h();
      }, 5e3);
    }
    function $() {
      var t2 = new XMLHttpRequest();
      t2.open("get", "https://v1.hitokoto.cn"), t2.setRequestHeader("Cache-Control", "no-cache"), t2.onreadystatechange = function() {
        if (t2.readyState === 4) {
          l(JSON.parse(t2.responseText).hitokoto), setTimeout($, 1e4);
        }
      }, t2.send();
    }
    t.exports = { createDialogElement: function(t2) {
      (n = document.createElement("div")).className = "live2d-widget-dialog-container", n.style.transform = "scale(" + r.config.display.width / 250 + ")", (s = document.createElement("div")).className = "live2d-widget-dialog", n.appendChild(s), t2.appendChild(n), o.L2Dwidget.emit("create-dialog", n), r.config.dialog.hitokoto && $();
    }, displayDialog: _, hiddenDialog: h, alertText: l, showHitokotoLoop: $ };
  }, function(t, e) {
    t.exports = { import: function() {
      throw new Error("System.import cannot be used indirectly");
    } };
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.cManager = void 0;
    var r = i(3), o = i(15), n = i(16), s = i(4);
    function a(t2) {
      this.eventemitter = t2, this.models = [], this.count = -1, this.reloadFlg = false, r.Live2DFramework.setPlatformManager(new o.PlatformManager());
    }
    a.prototype.createModel = function() {
      var t2 = new n.cModel();
      return this.models.push(t2), t2;
    }, a.prototype.changeModel = function(t2, e2) {
      this.reloadFlg && (this.reloadFlg = false, this.releaseModel(0, t2), this.createModel(), this.models[0].load(t2, e2));
    }, a.prototype.getModel = function(t2) {
      return t2 >= this.models.length ? null : this.models[t2];
    }, a.prototype.releaseModel = function(t2, e2) {
      this.models.length <= t2 || (this.models[t2].release(e2), delete this.models[t2], this.models.splice(t2, 1));
    }, a.prototype.numModels = function() {
      return this.models.length;
    }, a.prototype.setDrag = function(t2, e2) {
      for (var i2 = 0; i2 < this.models.length; i2++)
        this.models[i2].setDrag(t2, e2);
    }, a.prototype.tapEvent = function(t2, e2) {
      s.cDefine.DEBUG_LOG && console.log("tapEvent view x:" + t2 + " y:" + e2);
      for (var i2 = 0; i2 < this.models.length; i2++)
        this.models[i2].hitTest(s.cDefine.HIT_AREA_HEAD, t2, e2) ? (this.eventemitter.emit("tapface"), s.cDefine.DEBUG_LOG && console.log("Tap face."), this.models[i2].setRandomExpression()) : this.models[i2].hitTest(s.cDefine.HIT_AREA_BODY, t2, e2) && (this.eventemitter.emit("tapbody"), s.cDefine.DEBUG_LOG && console.log("Tap body. models[" + i2 + "]"), this.models[i2].startRandomMotion(s.cDefine.MOTION_GROUP_TAP_BODY, s.cDefine.PRIORITY_NORMAL));
      return true;
    }, e.cManager = a;
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.PlatformManager = n;
    var r = i(6), o = i(2);
    function n() {
    }
    n.prototype.loadBytes = function(t2, e2) {
      var i2 = new XMLHttpRequest();
      i2.open("GET", t2, true), i2.responseType = "arraybuffer", i2.onload = function() {
        switch (i2.status) {
          case 200:
            e2(i2.response);
            break;
          default:
            console.error("Failed to load (" + i2.status + ") : " + t2);
        }
      }, i2.send(null);
    }, n.prototype.loadString = function(t2) {
      this.loadBytes(t2, function(t3) {
        return t3;
      });
    }, n.prototype.loadLive2DModel = function(t2, e2) {
      var i2 = null;
      this.loadBytes(t2, function(t3) {
        i2 = o.Live2DModelWebGL.loadModel(t3), e2(i2);
      });
    }, n.prototype.loadTexture = function(t2, e2, i2, o2) {
      var n2 = new Image();
      n2.crossOrigin = "Anonymous", n2.src = i2, n2.onload = onload, n2.onerror = onerror, n2.onload = function() {
        var i3 = r.currWebGL, s = i3.createTexture();
        if (!s)
          return console.error("Failed to generate gl texture name."), -1;
        t2.isPremultipliedAlpha() || i3.pixelStorei(i3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), i3.pixelStorei(i3.UNPACK_FLIP_Y_WEBGL, 1), i3.activeTexture(i3.TEXTURE0), i3.bindTexture(i3.TEXTURE_2D, s), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, i3.RGBA, i3.UNSIGNED_BYTE, n2), i3.texParameteri(i3.TEXTURE_2D, i3.TEXTURE_MAG_FILTER, i3.LINEAR), i3.texParameteri(i3.TEXTURE_2D, i3.TEXTURE_MIN_FILTER, i3.LINEAR_MIPMAP_NEAREST), i3.generateMipmap(i3.TEXTURE_2D), t2.setTexture(e2, s), s = null, typeof o2 == "function" && o2();
      }, n2.onerror = function() {
        console.error("Failed to load image : " + i2);
      };
    }, n.prototype.jsonParseFromBytes = function(t2) {
      var e2, i2 = new Uint8Array(t2, 0, 3);
      e2 = i2[0] == 239 && i2[1] == 187 && i2[2] == 191 ? String.fromCharCode.apply(null, new Uint8Array(t2, 3)) : String.fromCharCode.apply(null, new Uint8Array(t2));
      return JSON.parse(e2);
    }, n.prototype.log = function(t2) {
      console.log(t2);
    };
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.cModel = _;
    var r = i(3), o = i(17), n = i(7), s = i(4), a = i(2);
    function _() {
      r.L2DBaseModel.prototype.constructor.call(this), this.modelHomeDir = "", this.modelSetting = null, this.tmpMatrix = [];
    }
    _.prototype = new r.L2DBaseModel(), _.prototype.load = function(t2, e2, i2) {
      this.setUpdating(true), this.setInitialized(false), this.modelHomeDir = e2.substring(0, e2.lastIndexOf("/") + 1), this.modelSetting = new o.ModelSettingJson();
      var n2 = this;
      this.modelSetting.loadModelSetting(e2, function() {
        var t3 = n2.modelHomeDir + n2.modelSetting.getModelFile();
        n2.loadModelData(t3, function(t4) {
          for (var e3 = 0; e3 < n2.modelSetting.getTextureNum(); e3++) {
            if (/^https?:\/\/|^\/\//i.test(n2.modelSetting.getTextureFile(e3)))
              var o2 = n2.modelSetting.getTextureFile(e3);
            else
              o2 = n2.modelHomeDir + n2.modelSetting.getTextureFile(e3);
            n2.loadTexture(e3, o2, function() {
              if (n2.isTexLoaded) {
                if (n2.modelSetting.getExpressionNum() > 0) {
                  n2.expressions = {};
                  for (var t5 = 0; t5 < n2.modelSetting.getExpressionNum(); t5++) {
                    var e4 = n2.modelSetting.getExpressionName(t5), o3 = n2.modelHomeDir + n2.modelSetting.getExpressionFile(t5);
                    n2.loadExpression(e4, o3);
                  }
                } else
                  n2.expressionManager = null, n2.expressions = {};
                if (n2.eyeBlink == null && (n2.eyeBlink = new r.L2DEyeBlink()), n2.modelSetting.getPhysicsFile() != null ? n2.loadPhysics(n2.modelHomeDir + n2.modelSetting.getPhysicsFile()) : n2.physics = null, n2.modelSetting.getPoseFile() != null ? n2.loadPose(n2.modelHomeDir + n2.modelSetting.getPoseFile(), function() {
                  n2.pose.updateParam(n2.live2DModel);
                }) : n2.pose = null, n2.modelSetting.getLayout() != null) {
                  var a2 = n2.modelSetting.getLayout();
                  a2.width != null && n2.modelMatrix.setWidth(a2.width), a2.height != null && n2.modelMatrix.setHeight(a2.height), a2.x != null && n2.modelMatrix.setX(a2.x), a2.y != null && n2.modelMatrix.setY(a2.y), a2.center_x != null && n2.modelMatrix.centerX(a2.center_x), a2.center_y != null && n2.modelMatrix.centerY(a2.center_y), a2.top != null && n2.modelMatrix.top(a2.top), a2.bottom != null && n2.modelMatrix.bottom(a2.bottom), a2.left != null && n2.modelMatrix.left(a2.left), a2.right != null && n2.modelMatrix.right(a2.right);
                }
                for (t5 = 0; t5 < n2.modelSetting.getInitParamNum(); t5++)
                  n2.live2DModel.setParamFloat(n2.modelSetting.getInitParamID(t5), n2.modelSetting.getInitParamValue(t5));
                for (t5 = 0; t5 < n2.modelSetting.getInitPartsVisibleNum(); t5++)
                  n2.live2DModel.setPartsOpacity(n2.modelSetting.getInitPartsVisibleID(t5), n2.modelSetting.getInitPartsVisibleValue(t5));
                n2.live2DModel.saveParam(), n2.preloadMotionGroup(s.cDefine.MOTION_GROUP_IDLE), n2.mainMotionManager.stopAllMotions(), n2.setUpdating(false), n2.setInitialized(true), typeof i2 == "function" && i2();
              }
            });
          }
        });
      });
    }, _.prototype.release = function(t2) {
      var e2 = r.Live2DFramework.getPlatformManager();
      t2.deleteTexture(e2.texture);
    }, _.prototype.preloadMotionGroup = function(t2) {
      for (var e2 = this, i2 = 0; i2 < this.modelSetting.getMotionNum(t2); i2++) {
        var r2 = this.modelSetting.getMotionFile(t2, i2);
        this.loadMotion(r2, this.modelHomeDir + r2, function(r3) {
          r3.setFadeIn(e2.modelSetting.getMotionFadeIn(t2, i2)), r3.setFadeOut(e2.modelSetting.getMotionFadeOut(t2, i2));
        });
      }
    }, _.prototype.update = function() {
      if (this.live2DModel != null) {
        var t2 = 2 * ((a.UtSystem.getUserTimeMSec() - this.startTimeMSec) / 1e3) * Math.PI;
        this.mainMotionManager.isFinished() && this.startRandomMotion(s.cDefine.MOTION_GROUP_IDLE, s.cDefine.PRIORITY_IDLE), this.live2DModel.loadParam();
        this.mainMotionManager.updateParam(this.live2DModel) || this.eyeBlink != null && this.eyeBlink.updateParam(this.live2DModel), this.live2DModel.saveParam(), this.expressionManager == null || this.expressions == null || this.expressionManager.isFinished() || this.expressionManager.updateParam(this.live2DModel), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", 30 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", 10 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", Number(15 * Math.sin(t2 / 6.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", Number(8 * Math.sin(t2 / 3.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(t2 / 5.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(t2 / 15.5345)), 0.5), this.live2DModel.setParamFloat("PARAM_BREATH", Number(0.5 + 0.5 * Math.sin(t2 / 3.2345)), 1), this.physics != null && this.physics.updateParam(this.live2DModel), this.lipSync == null && this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue), this.pose != null && this.pose.updateParam(this.live2DModel), this.live2DModel.update();
      } else
        s.cDefine.DEBUG_LOG && console.error("Failed to update.");
    }, _.prototype.setRandomExpression = function() {
      var t2 = [];
      for (var e2 in this.expressions)
        t2.push(e2);
      var i2 = parseInt(Math.random() * t2.length);
      this.setExpression(t2[i2]);
    }, _.prototype.startRandomMotion = function(t2, e2) {
      var i2 = this.modelSetting.getMotionNum(t2), r2 = parseInt(Math.random() * i2);
      this.startMotion(t2, r2, e2);
    }, _.prototype.startMotion = function(t2, e2, i2) {
      var r2 = this.modelSetting.getMotionFile(t2, e2);
      if (r2 != null && r2 != "") {
        if (i2 == s.cDefine.PRIORITY_FORCE)
          this.mainMotionManager.setReservePriority(i2);
        else if (!this.mainMotionManager.reserveMotion(i2))
          return void (s.cDefine.DEBUG_LOG && console.log("Motion is running."));
        var o2, n2 = this;
        this.motions[t2] == null ? this.loadMotion(t2, this.modelHomeDir + r2, function(r3) {
          o2 = r3, n2.setFadeInFadeOut(t2, e2, i2, o2);
        }) : (o2 = this.motions[t2], n2.setFadeInFadeOut(t2, e2, i2, o2));
      } else
        s.cDefine.DEBUG_LOG && console.error("Failed to motion.");
    }, _.prototype.setFadeInFadeOut = function(t2, e2, i2, r2) {
      var o2 = this.modelSetting.getMotionFile(t2, e2);
      if (r2.setFadeIn(this.modelSetting.getMotionFadeIn(t2, e2)), r2.setFadeOut(this.modelSetting.getMotionFadeOut(t2, e2)), s.cDefine.DEBUG_LOG && console.log("Start motion : " + o2), this.modelSetting.getMotionSound(t2, e2) == null)
        this.mainMotionManager.startMotionPrio(r2, i2);
      else {
        var n2 = this.modelSetting.getMotionSound(t2, e2), a2 = document.createElement("audio");
        a2.src = this.modelHomeDir + n2, s.cDefine.DEBUG_LOG && console.log("Start sound : " + n2), a2.play(), this.mainMotionManager.startMotionPrio(r2, i2);
      }
    }, _.prototype.setExpression = function(t2) {
      var e2 = this.expressions[t2];
      s.cDefine.DEBUG_LOG && console.log("Expression : " + t2), this.expressionManager.startMotion(e2, false);
    }, _.prototype.draw = function(t2) {
      n.MatrixStack.push(), n.MatrixStack.multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = n.MatrixStack.getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), n.MatrixStack.pop();
    }, _.prototype.hitTest = function(t2, e2, i2) {
      for (var r2 = this.modelSetting.getHitAreaNum(), o2 = 0; o2 < r2; o2++)
        if (t2 == this.modelSetting.getHitAreaName(o2)) {
          var n2 = this.modelSetting.getHitAreaID(o2);
          return this.hitTestSimple(n2, e2, i2);
        }
      return false;
    };
  }, function(t, e, i) {
    Object.defineProperty(e, "__esModule", { value: true }), e.ModelSettingJson = o;
    var r = i(3);
    function o() {
      this.NAME = "name", this.ID = "id", this.MODEL = "model", this.TEXTURES = "textures", this.HIT_AREAS = "hit_areas", this.PHYSICS = "physics", this.POSE = "pose", this.EXPRESSIONS = "expressions", this.MOTION_GROUPS = "motions", this.SOUND = "sound", this.FADE_IN = "fade_in", this.FADE_OUT = "fade_out", this.LAYOUT = "layout", this.INIT_PARAM = "init_param", this.INIT_PARTS_VISIBLE = "init_parts_visible", this.VALUE = "val", this.FILE = "file", this.json = {};
    }
    o.prototype.loadModelSetting = function(t2, e2) {
      var i2 = this;
      r.Live2DFramework.getPlatformManager().loadBytes(t2, function(t3) {
        var r2 = String.fromCharCode.apply(null, new Uint8Array(t3));
        i2.json = JSON.parse(r2), e2();
      });
    }, o.prototype.getTextureFile = function(t2) {
      return this.json[this.TEXTURES] == null || this.json[this.TEXTURES][t2] == null ? null : this.json[this.TEXTURES][t2];
    }, o.prototype.getModelFile = function() {
      return this.json[this.MODEL];
    }, o.prototype.getTextureNum = function() {
      return this.json[this.TEXTURES] == null ? 0 : this.json[this.TEXTURES].length;
    }, o.prototype.getHitAreaNum = function() {
      return this.json[this.HIT_AREAS] == null ? 0 : this.json[this.HIT_AREAS].length;
    }, o.prototype.getHitAreaID = function(t2) {
      return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t2] == null ? null : this.json[this.HIT_AREAS][t2][this.ID];
    }, o.prototype.getHitAreaName = function(t2) {
      return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t2] == null ? null : this.json[this.HIT_AREAS][t2][this.NAME];
    }, o.prototype.getPhysicsFile = function() {
      return this.json[this.PHYSICS];
    }, o.prototype.getPoseFile = function() {
      return this.json[this.POSE];
    }, o.prototype.getExpressionNum = function() {
      return this.json[this.EXPRESSIONS] == null ? 0 : this.json[this.EXPRESSIONS].length;
    }, o.prototype.getExpressionFile = function(t2) {
      return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t2][this.FILE];
    }, o.prototype.getExpressionName = function(t2) {
      return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t2][this.NAME];
    }, o.prototype.getLayout = function() {
      return this.json[this.LAYOUT];
    }, o.prototype.getInitParamNum = function() {
      return this.json[this.INIT_PARAM] == null ? 0 : this.json[this.INIT_PARAM].length;
    }, o.prototype.getMotionNum = function(t2) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null ? 0 : this.json[this.MOTION_GROUPS][t2].length;
    }, o.prototype.getMotionFile = function(t2, e2) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][e2] == null ? null : this.json[this.MOTION_GROUPS][t2][e2][this.FILE];
    }, o.prototype.getMotionSound = function(t2, e2) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][e2] == null || this.json[this.MOTION_GROUPS][t2][e2][this.SOUND] == null ? null : this.json[this.MOTION_GROUPS][t2][e2][this.SOUND];
    }, o.prototype.getMotionFadeIn = function(t2, e2) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][e2] == null || this.json[this.MOTION_GROUPS][t2][e2][this.FADE_IN] == null ? 1e3 : this.json[this.MOTION_GROUPS][t2][e2][this.FADE_IN];
    }, o.prototype.getMotionFadeOut = function(t2, e2) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][e2] == null || this.json[this.MOTION_GROUPS][t2][e2][this.FADE_OUT] == null ? 1e3 : this.json[this.MOTION_GROUPS][t2][e2][this.FADE_OUT];
    }, o.prototype.getInitParamID = function(t2) {
      return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t2] == null ? null : this.json[this.INIT_PARAM][t2][this.ID];
    }, o.prototype.getInitParamValue = function(t2) {
      return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t2] == null ? NaN : this.json[this.INIT_PARAM][t2][this.VALUE];
    }, o.prototype.getInitPartsVisibleNum = function() {
      return this.json[this.INIT_PARTS_VISIBLE] == null ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
    }, o.prototype.getInitPartsVisibleID = function(t2) {
      return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t2] == null ? null : this.json[this.INIT_PARTS_VISIBLE][t2][this.ID];
    }, o.prototype.getInitPartsVisibleValue = function(t2) {
      return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t2] == null ? NaN : this.json[this.INIT_PARTS_VISIBLE][t2][this.VALUE];
    };
  }]));
})(L2Dwidget_common);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      L2Dwidget_common.L2Dwidget.init({
        model: {
          jsonPath: "https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-hijiki/assets/hijiki.model.json"
        },
        display: {
          position: "right",
          width: 70,
          height: 100,
          hOffset: -20,
          vOffset: -10
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Widget.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { property: "og:title", content: "GeekEvan" },
        { name: "description", content: "GeekEvan's Room" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __vite_components_0$1;
      const _component_router_view = resolveComponent("router-view");
      const _component_Footer = _sfc_main$c;
      const _component_Widget = _sfc_main$b;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main class="px-7 py-10">`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Widget, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const routes = [{ "name": "index", "path": "/", "component": () => Promise.resolve().then(function() {
  return index$1;
}), "props": true, "meta": { "frontmatter": { "title": "GeekEvan", "display": "", "meta": [{ "property": "og:title", "content": "GeekEvan" }] } } }, { "name": "posts", "path": "/posts", "component": () => Promise.resolve().then(function() {
  return index;
}), "props": true, "meta": { "frontmatter": { "title": "Blog - GeekEvan", "display": "", "meta": [{ "property": "og:title", "content": "Blog - GeekEvan" }] } } }, { "name": "posts-jay", "path": "/posts/jay", "component": () => Promise.resolve().then(function() {
  return jay;
}), "props": true, "meta": { "frontmatter": { "title": "\u5468\u6770\u4F26\uFF0CYYDS!", "date": "2022-01-09T10:00:00.000Z", "tags": ["\u5206\u4EAB"], "tagsColor": ["#268785"], "duration": "5min", "meta": [{ "property": "og:title", "content": "\u5468\u6770\u4F26\uFF0CYYDS!" }] } } }, { "name": "posts-my-2021", "path": "/posts/my-2021", "component": () => Promise.resolve().then(function() {
  return my2021;
}), "props": true, "meta": { "frontmatter": { "title": "2021 \u5E73\u6DE1\u65E0\u5947", "date": "2021-12-31T09:00:00.000Z", "tags": ["\u968F\u7B14", "\u603B\u7ED3"], "tagsColor": ["#1F6FEB", "#3FB950"], "duration": "10min", "meta": [{ "property": "og:title", "content": "2021 \u5E73\u6DE1\u65E0\u5947" }] } } }, { "name": "posts-my-new-site", "path": "/posts/my-new-site", "component": () => Promise.resolve().then(function() {
  return myNewSite;
}), "props": true, "meta": { "frontmatter": { "title": "\u6211\u7684\u65B0\u7F51\u7AD9", "subtitle": "GeekEvan's new house", "date": "2021-12-18T14:00:00.000Z", "tags": ["\u5206\u4EAB"], "tagsColor": ["#268785"], "duration": "5min", "meta": [{ "property": "og:title", "content": "\u6211\u7684\u65B0\u7F51\u7AD9" }] } } }, { "name": "all", "path": "/:all(.*)*", "component": () => Promise.resolve().then(function() {
  return ____all_$1;
}), "props": true, "meta": { "frontmatter": {} } }];
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition)
    return savedPosition;
  else
    return { top: 0 };
};
const createApp = ViteSSG(_sfc_main$a, { routes, scrollBehavior }, (ctx) => {
  Object.values({ "./plugins/dayjs.ts": __glob_5_0, "./plugins/nprogress.ts": __glob_5_1 }).map((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    frontmatter: null
  },
  setup(__props) {
    const { frontmatter } = __props;
    const route = useRoute();
    const tags = computed(() => {
      let { tags: tags2, tagsColor } = frontmatter;
      if (tags2 && Array.isArray(tags2)) {
        tagsColor = Array.isArray(tagsColor) ? tagsColor : [];
        return tags2.map((e, i) => ({
          name: e.trim(),
          color: tagsColor[i] ? `${tagsColor[i].trim()}` : "currentcolor"
        }));
      }
      return [];
    });
    if (isClient) {
      const navigate = () => {
        var _a;
        if (location.hash) {
          (_a = document.querySelector(decodeURIComponent(location.hash))) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        }
      };
      useEventListener(window, "hashchange", navigate, false);
      onMounted(() => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const href = anchor.getAttribute("href");
            history.replaceState({}, "", href);
            navigate();
          });
        });
        navigate();
        setTimeout(navigate, 500);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      if ((_a = __props.frontmatter.display) != null ? _a : __props.frontmatter.title) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose m-auto mb-8" }, _attrs))}><h1 class="mb-0">${ssrInterpolate((_b = __props.frontmatter.display) != null ? _b : __props.frontmatter.title)}</h1>`);
        if (unref(tags) && unref(tags).length > 0) {
          _push(`<p><!--[-->`);
          ssrRenderList(unref(tags), (tag) => {
            _push(`<span class="text-md border border-current rounded px-1 pb-0.2 mb-0 mr-1" style="${ssrRenderStyle({ borderColor: tag.color, color: tag.color })}">${ssrInterpolate(tag.name)}</span>`);
          });
          _push(`<!--]--></p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.date) {
          _push(`<p class="opacity-60 !-mt-2">${ssrInterpolate(unref(formatDate)(__props.frontmatter.date))} `);
          if (__props.frontmatter.duration) {
            _push(`<span>\xB7 ${ssrInterpolate(__props.frontmatter.duration)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.subtitle) {
          _push(`<p class="opacity-70 !-mt-6 italic">${ssrInterpolate(__props.frontmatter.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(route).path !== "/") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose m-auto mt-8 mb-8" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: unref(route).path.split("/").slice(0, -1).join("/") || "/",
          class: "font-mono no-underline opacity-50 hover:opacity-75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`cd ..`);
            } else {
              return [
                createTextVNode("cd ..")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Blog.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12 5V1L7 6l5 5V7a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6H4a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$8);
}
var __vite_components_0 = { render: render$9 };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = useWindowSize();
    const inputRef = ref();
    const wordCloudRef = ref();
    const showReplay = ref(false);
    let wordCloud;
    let wordCloudData = computed({
      get() {
        return wordCloud ? wordCloud.options.data : [];
      },
      set(v) {
        wordCloud == null ? void 0 : wordCloud.changeData(v);
      }
    });
    watch(wordCloudRef, () => {
      const el = unrefElement(wordCloudRef);
      if (!el)
        return;
      wordCloud = new WordCloud(el, {
        data: [],
        autoFit: true,
        height: width.value < 640 ? 500 : 600,
        wordField: "keyword",
        weightField: "weight",
        colorField: "color",
        color: ({ color }) => color || "white",
        wordStyle: {
          fontFamily: "Dosis",
          fontSize: [20, width.value < 640 ? 40 : 50],
          rotation: 0,
          padding: 10
        },
        spiral: "rectangular",
        random: () => 0.5,
        tooltip: false
      });
      wordCloud.render();
    });
    const formatWords = (item) => {
      let words = [];
      for (let i = 0; i < item.keyword.length; i++) {
        words.push({
          words: item.words,
          keyword: item.keyword[i],
          color: item.color[i],
          weight: item.weight
        });
      }
      return words;
    };
    watch(inputRef, () => {
      const el = unrefElement(inputRef);
      if (!el)
        return;
      new Typed(el, {
        strings: myIntroduce.map((e) => e.words).concat("I'm GeekEvan, This is me."),
        typeSpeed: 20,
        onStringTyped: (index2) => {
          if (!wordCloud)
            return;
          if (index2 == myIntroduce.length) {
            let data = [];
            myIntroduce.forEach((e) => {
              data.push(...formatWords(e));
            });
            wordCloudData.value = data;
            showReplay.value = true;
          } else {
            wordCloudData.value = [
              ...formatWords(myIntroduce[index2])
            ];
          }
        }
      });
    }, {
      flush: "post"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_mdi_replay = __vite_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-self text-center" }, _attrs))}><div></div><span class="text-lg"></span>`);
      if (showReplay.value) {
        _push(`<button class="icon-btn">`);
        _push(ssrRenderComponent(_component_mdi_replay, { style: { "display": "inline", "vertical-align": "text-top" } }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Myself.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "GeekEvan", "display": "", "meta": [{ "property": "og:title", "content": "GeekEvan" }] };
    expose({ frontmatter });
    const head = { "title": "GeekEvan", "meta": [{ "property": "og:title", "content": "GeekEvan" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = _sfc_main$9;
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_Myself = _sfc_main$8;
      _push(ssrRenderComponent(_component_Blog, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Myself, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Myself)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto" }, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    createVNode(_component_Myself)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.md");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$7
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    route: null
  },
  setup(__props) {
    const props = __props;
    const frontmatter = computed(() => props.route.meta.frontmatter);
    const titleBadge = computed(() => {
      let { badge, badgeColor } = frontmatter.value;
      if (badge) {
        return {
          name: badge.trim(),
          color: badgeColor ? `${badgeColor.trim()}` : "currentcolor"
        };
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="title text-lg blog-item">${ssrInterpolate(unref(frontmatter).title)} `);
      if (unref(titleBadge)) {
        _push(`<sup class="text-xs border border-current rounded px-1 pb-0.2 ml-1" style="${ssrRenderStyle({ borderColor: unref(titleBadge).color, color: unref(titleBadge).color })}">${ssrInterpolate(unref(titleBadge).name)}</sup>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="time opacity-80 text-sm -mt-1">${ssrInterpolate(unref(formatDate)(unref(frontmatter).date))} `);
      if (unref(frontmatter).duration) {
        _push(`<span class="opacity-80"> \xB7 ${ssrInterpolate(unref(frontmatter).duration)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/BlogItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const getFrontmatter = (route) => {
      return route.meta.frontmatter;
    };
    const router = useRouter();
    const routes2 = router.getRoutes().filter((i) => i.path.startsWith("/posts") && getFrontmatter(i).date).sort((a, b) => +new Date(getFrontmatter(b).date) - +new Date(getFrontmatter(a).date));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_BlogItem = _sfc_main$6;
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(routes2), (route) => {
        _push(ssrRenderComponent(_component_router_link, {
          key: route.path,
          class: "item block font-normal mb-6 mt-2 no-underline",
          to: route.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li class="no-underline"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BlogItem, { route }, null, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              return [
                createVNode("li", { class: "no-underline" }, [
                  createVNode(_component_BlogItem, { route }, null, 8, ["route"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/BlogList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Blog - GeekEvan", "display": "", "meta": [{ "property": "og:title", "content": "Blog - GeekEvan" }] };
    expose({ frontmatter });
    const head = { "title": "Blog - GeekEvan", "meta": [{ "property": "og:title", "content": "Blog - GeekEvan" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = _sfc_main$9;
      const _component_BlogList = _sfc_main$5;
      _push(ssrRenderComponent(_component_Blog, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><div class="prose m-auto mb-8 select-none"${_scopeId}><h1 class="mb-0"${_scopeId}> Blog </h1></div>`);
            _push2(ssrRenderComponent(_component_BlogList, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto" }, [
                createVNode("div", { class: "prose m-auto mb-8 select-none" }, [
                  createVNode("h1", { class: "mb-0" }, " Blog ")
                ]),
                createVNode(_component_BlogList)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/index.md");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
const _sfc_main$3 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u5468\u6770\u4F26\uFF0CYYDS!", "date": "2022-01-09T10:00:00.000Z", "tags": ["\u5206\u4EAB"], "tagsColor": ["#268785"], "duration": "5min", "meta": [{ "property": "og:title", "content": "\u5468\u6770\u4F26\uFF0CYYDS!" }] };
    expose({ frontmatter });
    const head = { "title": "\u5468\u6770\u4F26\uFF0CYYDS!", "meta": [{ "property": "og:title", "content": "\u5468\u6770\u4F26\uFF0CYYDS!" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = _sfc_main$9;
      _push(ssrRenderComponent(_component_Blog, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><blockquote${_scopeId}><p${_scopeId}>\u6700\u8FD1\u51E0\u5E74\u5012\u4E0B\u4E86\u5F88\u591A\u5076\u50CF\uFF0C\u5230\u5934\u6765\u624D\u53D1\u73B0\u54B1\u4EEC\u7684\u6770\u4F26\u624D\u662Fyyds\uFF01 <img src="https://cdn.jsdelivr.net/gh/dyx990908/my-images@main/my-site/jay-chou.webp" alt="Alt text"${_scopeId}></p></blockquote><h4 id="\u5206\u4EAB" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5206\u4EAB"${_scopeId}>#</a> \u5206\u4EAB</h4><p${_scopeId}><a href="https://www.aliyundrive.com/s/3chi1PczTnC" target="_blank" rel="noopener"${_scopeId}>\u5468\u6770\u4F26-14\u5F20\u4E13\u8F91-158\u9996\u65E0\u635F\u73CD\u85CF\u7248</a></p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto" }, [
                createVNode("blockquote", null, [
                  createVNode("p", null, [
                    createTextVNode("\u6700\u8FD1\u51E0\u5E74\u5012\u4E0B\u4E86\u5F88\u591A\u5076\u50CF\uFF0C\u5230\u5934\u6765\u624D\u53D1\u73B0\u54B1\u4EEC\u7684\u6770\u4F26\u624D\u662Fyyds\uFF01 "),
                    createVNode("img", {
                      src: "https://cdn.jsdelivr.net/gh/dyx990908/my-images@main/my-site/jay-chou.webp",
                      alt: "Alt text"
                    })
                  ])
                ]),
                createVNode("h4", {
                  id: "\u5206\u4EAB",
                  tabindex: "-1"
                }, [
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5206\u4EAB"
                  }, "#"),
                  createTextVNode(" \u5206\u4EAB")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://www.aliyundrive.com/s/3chi1PczTnC",
                    target: "_blank",
                    rel: "noopener"
                  }, "\u5468\u6770\u4F26-14\u5F20\u4E13\u8F91-158\u9996\u65E0\u635F\u73CD\u85CF\u7248")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/jay.md");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var jay = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
const _sfc_main$2 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "2021 \u5E73\u6DE1\u65E0\u5947", "date": "2021-12-31T09:00:00.000Z", "tags": ["\u968F\u7B14", "\u603B\u7ED3"], "tagsColor": ["#1F6FEB", "#3FB950"], "duration": "10min", "meta": [{ "property": "og:title", "content": "2021 \u5E73\u6DE1\u65E0\u5947" }] };
    expose({ frontmatter });
    const head = { "title": "2021 \u5E73\u6DE1\u65E0\u5947", "meta": [{ "property": "og:title", "content": "2021 \u5E73\u6DE1\u65E0\u5947" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = _sfc_main$9;
      _push(ssrRenderComponent(_component_Blog, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="_2021" tabindex="-1"${_scopeId}><a class="header-anchor" href="#_2021"${_scopeId}>#</a> 2021</h2><p${_scopeId}>\u5BF9\u6211\u6765\u8BF4\u662F\u5E73\u6DE1\u65E0\u5947\u7684\u4E00\u5E74\uFF0C\u6CA1\u4EC0\u4E48\u7279\u522B\u7684\u6536\u83B7\uFF0C\u4EE5\u81F3\u4E8E\u6211\u56DE\u5FC6\u8FD9\u4E00\u5E74\u65F6\uFF0C\u6EE1\u8111\u5B50\u90FD\u662F\u7A7A\u767D\u{1F62E}\u200D\u{1F4A8}\u3002\u65F6\u95F4\u8FC7\u5F97\u633A\u5FEB\uFF0C\u4E0D\u77E5\u4E0D\u89C9\u5C31\u6DF7\u5230\u4E86\u6BD5\u4E1A\uFF0C\u5B66\u6821\u7684\u65F6\u5149\u771F\u662F\u7F8E\u597D\uFF0C\u771F\u5FC3\u6709\u70B9\u4E0D\u820D\u{1F62D}\u3002</p><h2 id="_2022" tabindex="-1"${_scopeId}><a class="header-anchor" href="#_2022"${_scopeId}>#</a> 2022</h2><p${_scopeId}>\u5BF9\u81EA\u5DF1\u7684\u671F\u671B\uFF1A\u4E0D\u9A84\u4E0D\u8E81\u3001\u4E0D\u5351\u4E0D\u4EA2\u3001\u81EA\u5F8B\u3001\u52C7\u6562\u3002</p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto" }, [
                createVNode("h2", {
                  id: "_2021",
                  tabindex: "-1"
                }, [
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#_2021"
                  }, "#"),
                  createTextVNode(" 2021")
                ]),
                createVNode("p", null, "\u5BF9\u6211\u6765\u8BF4\u662F\u5E73\u6DE1\u65E0\u5947\u7684\u4E00\u5E74\uFF0C\u6CA1\u4EC0\u4E48\u7279\u522B\u7684\u6536\u83B7\uFF0C\u4EE5\u81F3\u4E8E\u6211\u56DE\u5FC6\u8FD9\u4E00\u5E74\u65F6\uFF0C\u6EE1\u8111\u5B50\u90FD\u662F\u7A7A\u767D\u{1F62E}\u200D\u{1F4A8}\u3002\u65F6\u95F4\u8FC7\u5F97\u633A\u5FEB\uFF0C\u4E0D\u77E5\u4E0D\u89C9\u5C31\u6DF7\u5230\u4E86\u6BD5\u4E1A\uFF0C\u5B66\u6821\u7684\u65F6\u5149\u771F\u662F\u7F8E\u597D\uFF0C\u771F\u5FC3\u6709\u70B9\u4E0D\u820D\u{1F62D}\u3002"),
                createVNode("h2", {
                  id: "_2022",
                  tabindex: "-1"
                }, [
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#_2022"
                  }, "#"),
                  createTextVNode(" 2022")
                ]),
                createVNode("p", null, "\u5BF9\u81EA\u5DF1\u7684\u671F\u671B\uFF1A\u4E0D\u9A84\u4E0D\u8E81\u3001\u4E0D\u5351\u4E0D\u4EA2\u3001\u81EA\u5F8B\u3001\u52C7\u6562\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/my-2021.md");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var my2021 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6z",
  fill: "#41b883"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925z",
  fill: "#41b883"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6z",
  fill: "#35495e"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$8,
  _hoisted_3$7,
  _hoisted_4$1
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_5);
}
var __vite_components_1 = { render: render$8 };
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 898 1024"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M321 448l128-64l128 64v128l-128 64l-128-64V448zm552 3L683 576q-20 0-31-13t-11-32V400L449 288L258 400v224l443 259l-192 127q-25 14-60.5 14t-60.5-14L26 771q-28-16-25-39V292q-3-23 25-38L388 14q25-14 60.5-14T509 14l363 240q25 14 24 34h1v124q4 23-24 39z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$6);
}
var __vite_components_2 = { render: render$7 };
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<defs><linearGradient id="IconifyId-17f2bf57960-99d9a2-11" x1="-645.732" y1="839.188" x2="-654.59" y2="839.25" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse"><stop offset=".231" stop-color="#999875"></stop><stop offset=".563" stop-color="#9b9977"></stop><stop offset=".683" stop-color="#a09f7e"></stop><stop offset=".768" stop-color="#a9a889"></stop><stop offset=".837" stop-color="#b7b69a"></stop><stop offset=".896" stop-color="#c9c7b0"></stop><stop offset=".948" stop-color="#deddcb"></stop><stop offset=".994" stop-color="#f8f6eb"></stop><stop offset="1" stop-color="#fbf9ef"></stop></linearGradient><linearGradient id="IconifyId-17f2bf57960-99d9a2-12" x1="-644.287" y1="823.405" x2="-657.028" y2="845.476" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#48a547"></stop><stop offset="1" stop-color="#3f9143"></stop></linearGradient><linearGradient id="IconifyId-17f2bf57960-99d9a2-13" x1="-643.386" y1="839.485" x2="-652.418" y2="833.417" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41a247"></stop><stop offset=".352" stop-color="#4ba74b"></stop><stop offset=".956" stop-color="#67b554"></stop><stop offset="1" stop-color="#69b655"></stop></linearGradient></defs><path d="M16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 0 0-1.333 1.523A14.1 14.1 0 0 0 16.62 30z" fill="url(#IconifyId-17f2bf57960-99d9a2-11)"></path><path d="M17.026 26.329a13.223 13.223 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187z" fill="url(#IconifyId-17f2bf57960-99d9a2-12)"></path><path d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.725 1.725 0 0 0 15.846 2c.381.82.319 12.243.359 13.579c.155 5.197-.289 10.009-.718 10.99z" fill="url(#IconifyId-17f2bf57960-99d9a2-13)"></path>', 4);
const _hoisted_6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_6);
}
var __vite_components_3 = { render: render$6 };
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<g fill="none"><path d="M29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z" fill="url(#IconifyId-17f2bf57961-4def99-15)"></path><path d="M22.264 2.007L12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45z" fill="url(#IconifyId-17f2bf57961-4def99-18)"></path><defs id="IconifyId-17f2bf57961-4def99-14"><linearGradient id="IconifyId-17f2bf57961-4def99-15" x1="6" y1="33" x2="235" y2="344" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.34 1.894) scale(.07142)"><stop stop-color="#41D1FF" id="IconifyId-17f2bf57961-4def99-16"></stop><stop offset="1" stop-color="#BD34FE" id="IconifyId-17f2bf57961-4def99-17"></stop></linearGradient><linearGradient id="IconifyId-17f2bf57961-4def99-18" x1="194.651" y1="8.818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.34 1.894) scale(.07142)"><stop stop-color="#FFEA83" id="IconifyId-17f2bf57961-4def99-19"></stop><stop offset=".083" stop-color="#FFDD35" id="IconifyId-17f2bf57961-4def99-20"></stop><stop offset="1" stop-color="#FFA800" id="IconifyId-17f2bf57961-4def99-21"></stop></linearGradient></defs></g>', 1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var __vite_components_4 = { render: render$5 };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("rect", {
  x: "2",
  y: "2",
  width: "28",
  height: "28",
  rx: "1.312",
  fill: "#3178c6"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575a11.56 11.56 0 0 0 2.146.192a9.968 9.968 0 0 0 2.088-.211a5.11 5.11 0 0 0 1.735-.7a3.542 3.542 0 0 0 1.181-1.266a4.469 4.469 0 0 0 .186-3.394a3.409 3.409 0 0 0-.717-1.117a5.236 5.236 0 0 0-1.123-.877a12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.089 2.089 0 0 1-.516-.518a1.091 1.091 0 0 1-.181-.618a1.039 1.039 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.439 2.439 0 0 1 .726-.283a4.211 4.211 0 0 1 .956-.1a5.942 5.942 0 0 1 .808.058a6.292 6.292 0 0 1 .856.177a5.994 5.994 0 0 1 .836.3a4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4a12.426 12.426 0 0 0-1.9-.129a8.767 8.767 0 0 0-2.064.235a5.239 5.239 0 0 0-1.716.733a3.655 3.655 0 0 0-1.171 1.271a3.731 3.731 0 0 0-.431 1.845a3.588 3.588 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517a2.463 2.463 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.269 1.269 0 0 1-.435.441a2.381 2.381 0 0 1-.726.292a4.377 4.377 0 0 1-1.018.105a5.773 5.773 0 0 1-1.969-.35a5.874 5.874 0 0 1-1.805-1.045zm-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171z",
  fill: "#fff",
  "fill-rule": "evenodd"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$4,
  _hoisted_3$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4);
}
var __vite_components_5 = { render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("g", {
  class: "icon-tabler",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "6",
    cy: "19",
    r: "2"
  }),
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "18",
    cy: "5",
    r: "2"
  }),
  /* @__PURE__ */ createElementVNode("path", { d: "M12 19h4.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H12" })
], -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __vite_components_6 = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm3 10.5H5v-7h2l2 2l2-2h2v7h-2v-4l-2 2l-2-2v4zm11-3h2l-3 3l-3-3h2v-4h2v4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __vite_components_7 = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8.531 18h-.76v-1.411H6.515V18h-.767v-3.373h.767v1.296h1.257v-1.296h.76V18zm3-2.732h-.921V18h-.766v-2.732h-.905v-.641h2.592v.641zM14.818 18l-.05-1.291c-.017-.405-.03-.896-.03-1.387h-.016c-.104.431-.245.911-.375 1.307l-.41 1.316h-.597l-.359-1.307a15.154 15.154 0 0 1-.306-1.316h-.011c-.021.456-.034.976-.059 1.396L12.545 18h-.705l.216-3.373h1.015l.331 1.126c.104.391.21.811.284 1.206h.017c.095-.391.209-.836.32-1.211l.359-1.121h.996L15.563 18h-.745zm3.434 0h-2.108v-3.373h.767v2.732h1.342V18z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __vite_components_8 = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M15 17a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm9 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm-3-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm9-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm0 6a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm4-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 11v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 17v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2a3 3 0 0 0 .78-2v-2a3 3 0 0 0-.78-2A3 3 0 0 0 22 7zm-2 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-5-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1zM9 5H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __vite_components_9 = { render };
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u6211\u7684\u65B0\u7F51\u7AD9", "subtitle": "GeekEvan's new house", "date": "2021-12-18T14:00:00.000Z", "tags": ["\u5206\u4EAB"], "tagsColor": ["#268785"], "duration": "5min", "meta": [{ "property": "og:title", "content": "\u6211\u7684\u65B0\u7F51\u7AD9" }] };
    expose({ frontmatter });
    const head = { "title": "\u6211\u7684\u65B0\u7F51\u7AD9", "meta": [{ "property": "og:title", "content": "\u6211\u7684\u65B0\u7F51\u7AD9" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = _sfc_main$9;
      const _component_vscode_icons_file_type_vue = __vite_components_1;
      const _component_whh_nodejs = __vite_components_2;
      const _component_vscode_icons_file_type_mongo = __vite_components_3;
      const _component_vscode_icons_file_type_vite = __vite_components_4;
      const _component_vscode_icons_file_type_typescript_official = __vite_components_5;
      const _component_tabler_route = __vite_components_6;
      const _component_ri_markdown_line = __vite_components_7;
      const _component_bx_bxs_file_html = __vite_components_8;
      const _component_uil_server = __vite_components_9;
      _push(ssrRenderComponent(_component_Blog, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}>\u5728\u6B64\u4E4B\u524D\u6211\u5176\u5B9E\u6709\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684\u4E2A\u4EBA\u535A\u5BA2\u9879\u76EE\uFF0C\u524D\u7AEF\u90E8\u5206\u7684\u524D\u540E\u53F0\u90FD\u4F7F\u7528\u4E86`);
            _push2(ssrRenderComponent(_component_vscode_icons_file_type_vue, null, null, _parent2, _scopeId));
            _push2(`<a href="https://v3.vuejs.org/" target="_blank" rel="noopener"${_scopeId}>Vue.js-2.0</a>\uFF0C\u540E\u7AEF\u4F7F\u7528\u4E86`);
            _push2(ssrRenderComponent(_component_whh_nodejs, null, null, _parent2, _scopeId));
            _push2(`<a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener"${_scopeId}>Node.js</a>\uFF0C\u6570\u636E\u5E93\u9009\u62E9\u4E86`);
            _push2(ssrRenderComponent(_component_vscode_icons_file_type_mongo, null, null, _parent2, _scopeId));
            _push2(`<a href="https://www.mongodb.com/" target="_blank" rel="noopener"${_scopeId}>MongoDB</a>\u3002\u535A\u5BA2\u7684\u529F\u80FD\u8FD8\u7B97\u9F50\u5168\uFF0C\u4E0D\u8FC7\u5728\u6211\u770B\u6765\u7F3A\u9677\u4E5F\u591A\u3002</p><p${_scopeId}>\u4E00\u6B21\u5076\u7136\u673A\u4F1A\u770B\u89C1\u5927\u4F6C<a href="https://github.com/antfu" target="_blank" rel="noopener"${_scopeId}>Anthony Fu</a> \u7684\u4E2A\u4EBA\u7F51\u7AD9 <code${_scopeId}><a href="https://antfu.me/" target="_blank" rel="noopener"${_scopeId}>antfu.me</a></code>\uFF0C\u89C9\u5F97\u8FD9\u79CD\u7B80\u7EA6\u98CE\u7684\u535A\u5BA2\u66F4\u4EE4\u6211\u559C\u6B22\uFF0C\u4E8E\u662F\u5C31\u6709\u4E86\u8FD9\u4E2A\u65B0\u7684\u7F51\u7AD9\uFF0C\u8BE5\u7F51\u7AD9 \u662F\u57FA\u4E8E `);
            _push2(ssrRenderComponent(_component_vscode_icons_file_type_vite, null, null, _parent2, _scopeId));
            _push2(` <a href="https://vitejs.dev/" target="_blank" rel="noopener"${_scopeId}>Vite.js</a> \u548C `);
            _push2(ssrRenderComponent(_component_vscode_icons_file_type_vue, null, null, _parent2, _scopeId));
            _push2(` <a href="https://v3.vuejs.org/" target="_blank" rel="noopener"${_scopeId}>Vue.js - 3.0</a>\uFF0C\u652F\u6301 `);
            _push2(ssrRenderComponent(_component_vscode_icons_file_type_typescript_official, null, null, _parent2, _scopeId));
            _push2(` <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener"${_scopeId}>TypeScript</a>\uFF1B\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684 `);
            _push2(ssrRenderComponent(_component_tabler_route, null, null, _parent2, _scopeId));
            _push2(` \u8DEF\u7531\uFF1B\u652F\u6301 `);
            _push2(ssrRenderComponent(_component_ri_markdown_line, null, null, _parent2, _scopeId));
            _push2(` Markdown \u7EC4\u4EF6, \u53EF\u4EE5\u5728 Markdown \u4E2D\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF1B\u7EAF\u7CB9\u7684 `);
            _push2(ssrRenderComponent(_component_bx_bxs_file_html, null, null, _parent2, _scopeId));
            _push2(` \u9759\u6001\u9875\u9762\uFF0C\u652F\u6301 `);
            _push2(ssrRenderComponent(_component_uil_server, null, null, _parent2, _scopeId));
            _push2(` \u670D\u52A1\u7AEF\u751F\u6210\u3002\u6574\u4F53\u6837\u5F0F\u53C2\u8003\u4E86\u5927\u4F6C<a href="https://github.com/ArcherGu" target="_blank" rel="noopener"${_scopeId}>Archer Gu</a> \u7684\u4E2A\u4EBA\u7F51\u7AD9<code${_scopeId}><a href="https://archergu.me/" target="_blank" rel="noopener"${_scopeId}>archergu.me</a></code>\u3002</p><p${_scopeId}>\u5728\u81EA\u5B66\u7F16\u7A0B\u7684\u8DEF\u4E0A\u5E86\u5E78\u6709\u8FD9\u4E48\u591A\u7684\u5927\u4F6C\u53EF\u4EE5\u5B66\u4E60\uFF01\u{1F60A}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto" }, [
                createVNode("p", null, [
                  createTextVNode("\u5728\u6B64\u4E4B\u524D\u6211\u5176\u5B9E\u6709\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684\u4E2A\u4EBA\u535A\u5BA2\u9879\u76EE\uFF0C\u524D\u7AEF\u90E8\u5206\u7684\u524D\u540E\u53F0\u90FD\u4F7F\u7528\u4E86"),
                  createVNode(_component_vscode_icons_file_type_vue),
                  createVNode("a", {
                    href: "https://v3.vuejs.org/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Vue.js-2.0"),
                  createTextVNode("\uFF0C\u540E\u7AEF\u4F7F\u7528\u4E86"),
                  createVNode(_component_whh_nodejs),
                  createVNode("a", {
                    href: "https://nodejs.org/zh-cn/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Node.js"),
                  createTextVNode("\uFF0C\u6570\u636E\u5E93\u9009\u62E9\u4E86"),
                  createVNode(_component_vscode_icons_file_type_mongo),
                  createVNode("a", {
                    href: "https://www.mongodb.com/",
                    target: "_blank",
                    rel: "noopener"
                  }, "MongoDB"),
                  createTextVNode("\u3002\u535A\u5BA2\u7684\u529F\u80FD\u8FD8\u7B97\u9F50\u5168\uFF0C\u4E0D\u8FC7\u5728\u6211\u770B\u6765\u7F3A\u9677\u4E5F\u591A\u3002")
                ]),
                createVNode("p", null, [
                  createTextVNode("\u4E00\u6B21\u5076\u7136\u673A\u4F1A\u770B\u89C1\u5927\u4F6C"),
                  createVNode("a", {
                    href: "https://github.com/antfu",
                    target: "_blank",
                    rel: "noopener"
                  }, "Anthony Fu"),
                  createTextVNode(" \u7684\u4E2A\u4EBA\u7F51\u7AD9 "),
                  createVNode("code", null, [
                    createVNode("a", {
                      href: "https://antfu.me/",
                      target: "_blank",
                      rel: "noopener"
                    }, "antfu.me")
                  ]),
                  createTextVNode("\uFF0C\u89C9\u5F97\u8FD9\u79CD\u7B80\u7EA6\u98CE\u7684\u535A\u5BA2\u66F4\u4EE4\u6211\u559C\u6B22\uFF0C\u4E8E\u662F\u5C31\u6709\u4E86\u8FD9\u4E2A\u65B0\u7684\u7F51\u7AD9\uFF0C\u8BE5\u7F51\u7AD9 \u662F\u57FA\u4E8E "),
                  createVNode(_component_vscode_icons_file_type_vite),
                  createTextVNode(),
                  createVNode("a", {
                    href: "https://vitejs.dev/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Vite.js"),
                  createTextVNode(" \u548C "),
                  createVNode(_component_vscode_icons_file_type_vue),
                  createTextVNode(),
                  createVNode("a", {
                    href: "https://v3.vuejs.org/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Vue.js - 3.0"),
                  createTextVNode("\uFF0C\u652F\u6301 "),
                  createVNode(_component_vscode_icons_file_type_typescript_official),
                  createTextVNode(),
                  createVNode("a", {
                    href: "https://www.typescriptlang.org/",
                    target: "_blank",
                    rel: "noopener"
                  }, "TypeScript"),
                  createTextVNode("\uFF1B\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684 "),
                  createVNode(_component_tabler_route),
                  createTextVNode(" \u8DEF\u7531\uFF1B\u652F\u6301 "),
                  createVNode(_component_ri_markdown_line),
                  createTextVNode(" Markdown \u7EC4\u4EF6, \u53EF\u4EE5\u5728 Markdown \u4E2D\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF1B\u7EAF\u7CB9\u7684 "),
                  createVNode(_component_bx_bxs_file_html),
                  createTextVNode(" \u9759\u6001\u9875\u9762\uFF0C\u652F\u6301 "),
                  createVNode(_component_uil_server),
                  createTextVNode(" \u670D\u52A1\u7AEF\u751F\u6210\u3002\u6574\u4F53\u6837\u5F0F\u53C2\u8003\u4E86\u5927\u4F6C"),
                  createVNode("a", {
                    href: "https://github.com/ArcherGu",
                    target: "_blank",
                    rel: "noopener"
                  }, "Archer Gu"),
                  createTextVNode(" \u7684\u4E2A\u4EBA\u7F51\u7AD9"),
                  createVNode("code", null, [
                    createVNode("a", {
                      href: "https://archergu.me/",
                      target: "_blank",
                      rel: "noopener"
                    }, "archergu.me")
                  ]),
                  createTextVNode("\u3002")
                ]),
                createVNode("p", null, "\u5728\u81EA\u5B66\u7F16\u7A0B\u7684\u8DEF\u4E0A\u5E86\u5E78\u6709\u8FD9\u4E48\u591A\u7684\u5927\u4F6C\u53EF\u4EE5\u5B66\u4E60\uFF01\u{1F60A}")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/my-new-site.md");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var myNewSite = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
var ____all__vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "no-page text-center" }, _attrs))}><h1>Error 404</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var ____all_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ____all_
});
export { createApp };
