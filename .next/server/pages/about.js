"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 4619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Awards)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/awards.json
const awards_namespaceObject = JSON.parse('{"O":"Awards","e":[{"image":"/images/award1.png","alt":"award","label":"7 SOTD <br/> 17 HONORABLE MENTION <br/> 3 MOBILE EXCELLENCE","value":"31"},{"image":"/images/award2.png","alt":"award","label":"11 SOTD <br/> 5 SPECIAL KUDOS","value":"16"},{"image":"/images/award3.png","alt":"award","label":"AWARD 2019 <br/> 1 GLOBAL COMPETITION","value":"20"}]}');
;// CONCATENATED MODULE: ./src/components/sections/Awards.jsx


const AwardsSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "onovo-heading",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                            className: "onovo-subtitle-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: awards_namespaceObject.O
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: awards_namespaceObject.e.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.image,
                                            alt: item.alt
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "onovo-title-1",
                                        children: item.value
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: item.label
                                        }
                                    })
                                ]
                            }, `awards-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Awards = (AwardsSection);


/***/ }),

/***/ 8874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services4)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/services-4.json
const services_4_namespaceObject = JSON.parse('{"Oc":"What we do","TN":"We’re a full-service agency","jX":5}');
;// CONCATENATED MODULE: ./src/components/sections/Services4.jsx




const Services4Section = ({ services  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-heading gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-subtitle-1",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: services_4_namespaceObject.Oc
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "onovo-title-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: services_4_namespaceObject.TN
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "onovo-services-list",
                        children: services.slice(0, services_4_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-service-item-list",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "onovo-service-item-list-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "image onovo-hover-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: `/services/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.icon,
                                                    alt: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "num",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    " 0",
                                                    key + 1,
                                                    ". "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            className: "title",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: `/services/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "onovo-text",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: item.short
                                                })
                                            })
                                        })
                                    ]
                                })
                            }, `services4-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Services4 = (Services4Section);


/***/ }),

/***/ 5434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Team2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/team2.json
const team2_namespaceObject = JSON.parse('{"TN":"Our Team is The Difference. <br/>Our Chemistry is The Spark.","Oc":"Meet Our Company Family","jX":5,"LI":{"p":"/team"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Team2.jsx



const Team2Section = ({ team  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row gap-row align-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-11 col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "onovo-heading align-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "onovo-subtitle-1",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: team2_namespaceObject.Oc
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "onovo-title-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: team2_namespaceObject.TN
                                            }
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-1 col-lg-1"
                        }),
                        team.slice(0, team2_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "onovo-team-two",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "onovo-team-two-item",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "image onovo-hover-3 onovo-hover-black-30",
                                                "data-onovo-overlay": true,
                                                "data-onovo-scroll": true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: `/team/${item.id}`,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: item.image,
                                                            alt: item.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "onovo-social-2",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            children: item.social.map((social, social_key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        className: "onovo-social-link onovo-hover-2",
                                                                        href: social.link,
                                                                        title: social.title,
                                                                        target: "_blank",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            "aria-hidden": "true",
                                                                            className: social.icon
                                                                        })
                                                                    })
                                                                }, `team2-item-${key}-social-${social_key}`))
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "desc",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: `/team/${item.id}`,
                                                            className: "onovo-lnk",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                "data-splitting": true,
                                                                "data-onovo-scroll": true,
                                                                children: item.name
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "onovo-subtitle-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            "data-splitting": true,
                                                            "data-onovo-scroll": true,
                                                            children: item.role
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, `team2-item-${key}`)),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-3 align-center align-self-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: "onovo-btn-circle onovo-hover-2",
                                href: team2_namespaceObject.LI.p,
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "arrow",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Team2 = (Team2Section);


/***/ }),

/***/ 5439:
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _library_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3513);
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8654);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utilits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6641);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(163);
/* harmony import */ var _components_sections_Team2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5434);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4759);
/* harmony import */ var _components_sections_Awards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4619);
/* harmony import */ var _components_sections_Services4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_team__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__]);
([_library_team__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Testimonial2Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "about.jsx -> " + "@components/sliders/Testimonial2"
        ]
    },
    ssr: false
});
const About = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_utilits__WEBPACK_IMPORTED_MODULE_12__/* .circleText */ .V0)();
    }, []);
    const clickedVideoButton = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.add("active");
        let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
        let videoUrl = videoIframe.dataset.src;
        videoIframe.setAttribute("src", videoUrl);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                pageTitle: "About Us",
                pageDesc: "Creative studio at the intersection of art, designand technology."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "onovo-section gap-top-140 gap-bottom-140",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-heading gap-bottom-60",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "onovo-subtitle-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: " Welcome to Onovo "
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "onovo-title-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        " We are a digital agency, ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        "passionate about building ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        "and designing brands "
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "onovo-text",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "From the moment our company was founded, we have helped our clients find ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "exceptional solutions for their businesses"
                                                        }),
                                                        ", creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience. "
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/onovo-about-logo.png",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-row gap-bottom-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-counter",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num onovo-text-white js-counter",
                                                "data-end-value": "23",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    end: "23",
                                                    duration: 7,
                                                    enableScrollSpy: true,
                                                    scrollSpyOnce: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num-after onovo-text-white",
                                                children: " + "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label",
                                                children: " Team members "
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-counter",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num onovo-text-white js-counter",
                                                "data-end-value": "99",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    end: "99",
                                                    duration: 7,
                                                    enableScrollSpy: true,
                                                    scrollSpyOnce: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num-after onovo-text-white",
                                                children: " + "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label",
                                                children: " Completed projects "
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-counter",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num onovo-text-white js-counter",
                                                "data-end-value": "12",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    end: "12",
                                                    duration: 7,
                                                    enableScrollSpy: true,
                                                    scrollSpyOnce: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num-after onovo-text-white",
                                                children: " M "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label",
                                                children: " Lines of code "
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "onovo-video",
                            "data-onovo-overlay": true,
                            "data-onovo-scroll": true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    onClick: (e)=>clickedVideoButton(e),
                                    style: {
                                        "backgroundImage": "url(/images/hero-digital-1.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    className: "js-video-iframe",
                                    "data-src": "https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "play onovo-circle-text",
                                    onClick: (e)=>clickedVideoButton(e),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "arrow"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label onovo-text-black onovo-circle-text-label",
                                            children: " Play Video - Play Video - Play Video - "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-uppercase",
                                        children: "Our Mission"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-8 col-lg-9",
                                    children: "From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses , creating memorable brands and digital products. Our expertise grows with each year, and our accumulated experience."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-60",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-uppercase",
                                        children: "Our Goal"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-8 col-lg-9",
                                    children: "Our goal is to deliver amazing experiences that make people talk, and build strategic value for brands, tech, entertainment, arts & culture."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/images/posts1.jpg",
                                        className: "mfp-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/posts1-1024x683.jpg",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/images/posts2.jpg",
                                        className: "mfp-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/posts2-1024x683.jpg",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services4__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                services: props.services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Awards__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Team2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                team: props.team
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Testimonial2Slider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
async function getStaticProps() {
    const allTeam = (0,_library_team__WEBPACK_IMPORTED_MODULE_4__/* .getSortedTeamData */ .n8)();
    const allServices = (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getSortedServicesData */ .M9)();
    return {
        props: {
            team: allTeam,
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
var __webpack_exports__ = __webpack_require__.X(0, [893,142,806,47,163,759,654,513], () => (__webpack_exec__(5439)));
module.exports = __webpack_exports__;

})();