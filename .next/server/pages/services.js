"use strict";
(() => {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Counters)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/counters.json
const counters_namespaceObject = JSON.parse('{"e":[{"value":"23","label":"Team members","after":""},{"value":"99","label":"Completed projects","after":"+"},{"value":"12","label":"Lines of code","after":"M"}]}');
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/components/sections/Counters.jsx



const CountersSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: counters_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "onovo-counter",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "num onovo-text-white js-counter",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_countup_default()), {
                                            end: item.value,
                                            duration: 7,
                                            enableScrollSpy: true,
                                            scrollSpyOnce: true
                                        })
                                    }),
                                    item.after != "" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "num-after onovo-text-white",
                                        children: item.after
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "label",
                                        children: item.label
                                    })
                                ]
                            })
                        }, `counters-item-${key}`))
                })
            })
        })
    });
};
/* harmony default export */ const Counters = (CountersSection);


/***/ }),

/***/ 7963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services-2.json
const services_2_namespaceObject = JSON.parse('{"Oc":"Welcome to Onovo","TN":"Digital Creative Agency <br />with Breaking Ideas","fL":"From the moment our company was founded, we have helped our clients find <strong>exceptional solutions for their businesses</strong>, creating memorable brands and digital products. Our expertise grows with each year.","uF":{"B":"/images/signature.png","w":"signature"},"ev":[{"icon":"/images/serv-icon4.png","title":"Brand Creation","list":["Brand Strategy","Visual Identity","Naming","Toolkits","Guidelines"],"link":"/services/service-1"},{"icon":"/images/serv-icon5.png","title":"Web Campaigns","list":["Creative Strategy","Creative Direction","Concepts","Copywriting","Social Media"],"link":"/services/service-2"},{"icon":"/images/serv-icon6.png","title":"UX / UI Design","list":["Native and Web Apps","Campaign / Brand Sites","Machine Learning / AI","Brand Design","Product Animation Design"],"link":"/services/service-3"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Services2.jsx



const Services2Section = ({ introHidden , noPaddingBottom  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: noPaddingBottom ? "onovo-section gap-top-140" : "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    introHidden == undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "onovo-heading gap-bottom-40 align-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "onovo-subtitle-1",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: services_2_namespaceObject.Oc
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "onovo-title-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: services_2_namespaceObject.TN
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row gap-bottom-60",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-3 align-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "onovo-text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: services_2_namespaceObject.fL
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: services_2_namespaceObject.uF.B,
                                                    alt: services_2_namespaceObject.uF.w
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: services_2_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "onovo-service-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "image",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.link,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.icon,
                                                    alt: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "onovo-service-item-inner onovo-hover-3 onovo-hover-black",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: item.link,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            "data-splitting": true,
                                                            "data-onovo-scroll": true,
                                                            children: item.title
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "list",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        children: item.list.map((elem, key2)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    className: "onovo-lnk",
                                                                    href: item.link,
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        "data-splitting": true,
                                                                        "data-onovo-scroll": true,
                                                                        children: elem
                                                                    })
                                                                })
                                                            }, `services2-item-${key}-list-element-${key2}`))
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, `services2-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Services2 = (Services2Section);


/***/ }),

/***/ 2076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8654);
/* harmony import */ var _components_sections_Services2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7963);
/* harmony import */ var _components_sections_Counters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2287);
/* harmony import */ var _components_sections_Video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9729);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7741);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_services__WEBPACK_IMPORTED_MODULE_5__]);
_library_services__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Services = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: "Our Services",
                pageDesc: "Our values and vaulted us to the top of our industry."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                introHidden: true,
                noPaddingBottom: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Counters__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Video__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "onovo-section gap-top-140 gap-bottom-140",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "onovo-heading gap-bottom-40",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "onovo-subtitle-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "What we do"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "onovo-title-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "We’re a full-service agency"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "onovo-services-list",
                            children: props.services.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "onovo-service-item-list",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-service-item-list-inner",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "image onovo-hover-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: `/services/${item.id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item.icon,
                                                        alt: item.title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        " 0",
                                                        key + 1,
                                                        ". "
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "title",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: `/services/${item.id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: item.title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "onovo-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: item.short
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }, `services-item-${key}`))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                paddingTop: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
async function getStaticProps() {
    const allServices = (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getSortedServicesData */ .M9)();
    return {
        props: {
            services: allServices
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,142,806,47,163,741,759,654,729], () => (__webpack_exec__(2076)));
module.exports = __webpack_exports__;

})();