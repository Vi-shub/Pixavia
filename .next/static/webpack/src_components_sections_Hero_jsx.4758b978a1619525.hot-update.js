"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_sections_Hero_jsx",{

/***/ "./src/components/sections/Hero.jsx":
/*!******************************************!*\
  !*** ./src/components/sections/Hero.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data/sections/hero.json */ \"./src/data/sections/hero.json\");\n/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! splitting/dist/splitting.css */ \"./node_modules/splitting/dist/splitting.css\");\n/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! splitting/dist/splitting-cells.css */ \"./node_modules/splitting/dist/splitting-cells.css\");\n/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! splitting */ \"./node_modules/splitting/dist/splitting.js\");\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scroll-out */ \"./node_modules/scroll-out/lib/index.js\");\n/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ThreeJsLanding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThreeJsLanding */ \"./src/components/sections/ThreeJsLanding.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        splitting__WEBPACK_IMPORTED_MODULE_5___default()({\n            by: \"lines\"\n        });\n        scroll_out__WEBPACK_IMPORTED_MODULE_6___default()({\n            targets: \"[data-onovo-scroll]\",\n            once: true\n        });\n        const allWrap = document.querySelectorAll(\".word\");\n        allWrap.forEach((item)=>{\n            if (!item.parentNode.classList.contains(\"span\")) {\n                let wrapper = document.createElement(\"span\");\n                wrapper.classList.add(\"span\");\n                item.parentNode.insertBefore(wrapper, item);\n                wrapper.appendChild(item);\n            }\n        });\n        const allOverlays = document.querySelectorAll(\"[data-onovo-overlay]\");\n        allOverlays.forEach((item)=>{\n            let overlay = document.createElement(\"div\");\n            overlay.classList.add(\"onovo-overlay\");\n            item.appendChild(overlay);\n        });\n    }, []);\n    const [mute, setMute] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const clickedMuteHeroVideo = (e)=>{\n        e.preventDefault();\n        setMute(!mute);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"onovo-section onovo-hero\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThreeJsLanding__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\smsha\\\\Desktop\\\\onovo\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\smsha\\\\Desktop\\\\onovo\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\smsha\\\\Desktop\\\\onovo\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n            lineNumber: 44,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(HeroSection, \"HOHutxoqwlpIi3XM9Q9s+aaBPHg=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9IZXJvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVBO0FBRVA7QUFDTTtBQUNWO0FBQ0M7QUFDWTtBQUU5QyxNQUFNTSxjQUFjLElBQU07O0lBQ3pCTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZFLGdEQUFTQSxDQUFDO1lBQUVJLElBQUk7UUFBUTtRQUN4QkgsaURBQVNBLENBQUM7WUFBQ0ksU0FBUztZQUF1QkMsTUFBTSxJQUFJO1FBQUE7UUFFckQsTUFBTUMsVUFBVUMsU0FBU0MsZ0JBQWdCLENBQUM7UUFDMUNGLFFBQVFHLE9BQU8sQ0FBQyxDQUFDQyxPQUFTO1lBQ3hCLElBQUssQ0FBQ0EsS0FBS0MsVUFBVSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxTQUFVO2dCQUNwRCxJQUFJQyxVQUFVUCxTQUFTUSxhQUFhLENBQUM7Z0JBQ3JDRCxRQUFRRixTQUFTLENBQUNJLEdBQUcsQ0FBQztnQkFDdEJOLEtBQUtDLFVBQVUsQ0FBQ00sWUFBWSxDQUFDSCxTQUFTSjtnQkFDdENJLFFBQVFJLFdBQVcsQ0FBQ1I7WUFDbkIsQ0FBQztRQUNIO1FBRUEsTUFBTVMsY0FBY1osU0FBU0MsZ0JBQWdCLENBQUM7UUFDOUNXLFlBQVlWLE9BQU8sQ0FBQyxDQUFDQyxPQUFTO1lBQzVCLElBQUlVLFVBQVViLFNBQVNRLGFBQWEsQ0FBQztZQUNyQ0ssUUFBUVIsU0FBUyxDQUFDSSxHQUFHLENBQUM7WUFDdEJOLEtBQUtRLFdBQVcsQ0FBQ0U7UUFDbkI7SUFDRCxHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBRzFCLCtDQUFRQSxDQUFDLEtBQUs7SUFFdEMsTUFBTTJCLHVCQUF1QixDQUFDQyxJQUFNO1FBQ25DQSxFQUFFQyxjQUFjO1FBQ2JILFFBQVEsQ0FBQ0Q7SUFDYjtJQUVHLHFCQUNJO2tCQUVMLDRFQUFDSztZQUFRQyxXQUFVO3NCQUNsQiw0RUFBQ0M7Z0JBQUlELFdBQVU7MEJBRWQsNEVBQUMxQix1REFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7R0EzQ01DO0tBQUFBO0FBNkNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm8uanN4PzU3YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRGF0YSBmcm9tIFwiQGRhdGEvc2VjdGlvbnMvaGVyby5qc29uXCI7XG5cbmltcG9ydCAnc3BsaXR0aW5nL2Rpc3Qvc3BsaXR0aW5nLmNzcydcbmltcG9ydCAnc3BsaXR0aW5nL2Rpc3Qvc3BsaXR0aW5nLWNlbGxzLmNzcydcbmltcG9ydCBTcGxpdHRpbmcgZnJvbSAnc3BsaXR0aW5nJ1xuaW1wb3J0IFNjcm9sbE91dCBmcm9tICdzY3JvbGwtb3V0J1xuaW1wb3J0IFRocmVlSnNMYW5kaW5nIGZyb20gXCIuL1RocmVlSnNMYW5kaW5nXCI7XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFNwbGl0dGluZyh7IGJ5OiAnbGluZXMnIH0pO1xuXHRcdFNjcm9sbE91dCh7dGFyZ2V0czogJ1tkYXRhLW9ub3ZvLXNjcm9sbF0nLCBvbmNlOiB0cnVlfSk7XG5cdFxuXHRcdGNvbnN0IGFsbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvcmRcIik7XG5cdFx0YWxsV3JhcC5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0ICBpZiAoICFpdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGFuJykgKSB7XG5cdFx0XHRsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3BhbicpO1xuXHRcdFx0aXRlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBpdGVtKTtcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdFxuXHRcdGNvbnN0IGFsbE92ZXJsYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW9ub3ZvLW92ZXJsYXldXCIpO1xuXHRcdGFsbE92ZXJsYXlzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHQgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHQgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb25vdm8tb3ZlcmxheScpO1xuXHRcdCAgaXRlbS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHR9KTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IFttdXRlLCBzZXRNdXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBjbGlja2VkTXV0ZUhlcm9WaWRlbyA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0c2V0TXV0ZSghbXV0ZSk7XG5cdH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIE9ub3ZvIEhlcm8gKi99XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJvbm92by1zZWN0aW9uIG9ub3ZvLWhlcm9cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuXG5cdFx0XHRcdFx0PFRocmVlSnNMYW5kaW5nLz5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0PC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGF0YSIsIlNwbGl0dGluZyIsIlNjcm9sbE91dCIsIlRocmVlSnNMYW5kaW5nIiwiSGVyb1NlY3Rpb24iLCJieSIsInRhcmdldHMiLCJvbmNlIiwiYWxsV3JhcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImFsbE92ZXJsYXlzIiwib3ZlcmxheSIsIm11dGUiLCJzZXRNdXRlIiwiY2xpY2tlZE11dGVIZXJvVmlkZW8iLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sections/Hero.jsx\n"));

/***/ })

});