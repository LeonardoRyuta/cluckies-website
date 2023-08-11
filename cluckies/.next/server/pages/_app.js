/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/placeholder.tsx":
/*!************************************!*\
  !*** ./components/placeholder.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Placeholder)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Placeholder() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            fontSize: \"4rem\",\n            height: \"100vh\"\n        },\n        children: \"Cluckies will be here soon!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\GitHub\\\\cluckies-website\\\\cluckies\\\\components\\\\placeholder.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BsYWNlaG9sZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsY0FBYztJQUNwQyxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTztZQUFDQyxTQUFRO1lBQVFDLGdCQUFlO1lBQVVDLFlBQVc7WUFBVUMsVUFBUztZQUFRQyxRQUFPO1FBQU87a0JBQUc7Ozs7OztBQUlqSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2x1Y2tpZXMvLi9jb21wb25lbnRzL3BsYWNlaG9sZGVyLnRzeD9hZjcwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBmb250U2l6ZTpcIjRyZW1cIiwgaGVpZ2h0OlwiMTAwdmhcIn19PlxyXG4gICAgICBDbHVja2llcyB3aWxsIGJlIGhlcmUgc29vbiFcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUGxhY2Vob2xkZXIiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/placeholder.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/injected */ \"wagmi/connectors/injected\");\n/* harmony import */ var _components_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/placeholder */ \"./components/placeholder.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__, wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__, wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst base = {\n    id: 8453,\n    name: \"Base\",\n    network: \"base\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ethereum\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        public: {\n            http: [\n                \"https://base.meowrpc.com\"\n            ]\n        },\n        default: {\n            http: [\n                \"https://base.meowrpc.com\"\n            ]\n        }\n    },\n    blockExplorers: {\n        etherscan: {\n            name: \"BaseScan\",\n            url: \"https://basescan.org/\"\n        },\n        default: {\n            name: \"BaseScan\",\n            url: \"https://basescan.org/\"\n        }\n    }\n};\nconst baseGoerli = {\n    id: 84531,\n    name: \"Base Goerli\",\n    network: \"base goerli\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ethereum\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        public: {\n            http: [\n                \"https://base-goerli.public.blastapi.io\"\n            ]\n        },\n        default: {\n            http: [\n                \"https://base-goerli.public.blastapi.io\"\n            ]\n        }\n    },\n    blockExplorers: {\n        etherscan: {\n            name: \"BaseScan\",\n            url: \"https://goerli.basescan.org/\"\n        },\n        default: {\n            name: \"BaseScan\",\n            url: \"https://goerli.basescan.org/\"\n        }\n    }\n};\nfunction App({ Component , pageProps  }) {\n    const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([\n        base,\n        baseGoerli\n    ], [\n        (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_3__.publicProvider)()\n    ]);\n    const client = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n        autoConnect: true,\n        connectors: [\n            new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__.InjectedConnector({\n                chains\n            })\n        ],\n        provider\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_placeholder__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\GitHub\\\\cluckies-website\\\\cluckies\\\\pages\\\\_app.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\GitHub\\\\cluckies-website\\\\cluckies\\\\pages\\\\_app.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRW9DO0FBQ1g7QUFDTTtBQUNWO0FBRW5ELE1BQU1NLE9BQU87SUFDWEMsSUFBSTtJQUNKQyxNQUFNO0lBQ05DLFNBQVM7SUFDVEMsZ0JBQWdCO1FBQ2RDLFVBQVU7UUFDVkgsTUFBTTtRQUNOSSxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxRQUFRO1lBQUVDLE1BQU07Z0JBQUM7YUFBMkI7UUFBQztRQUM3Q0MsU0FBUztZQUFFRCxNQUFNO2dCQUFDO2FBQTJCO1FBQUM7SUFDaEQ7SUFDQUUsZ0JBQWdCO1FBQ2RDLFdBQVc7WUFBRVYsTUFBTTtZQUFZVyxLQUFLO1FBQXdCO1FBQzVESCxTQUFTO1lBQUVSLE1BQU07WUFBWVcsS0FBSztRQUF3QjtJQUM1RDtBQUNGO0FBRUEsTUFBTUMsYUFBYTtJQUNqQmIsSUFBSTtJQUNKQyxNQUFNO0lBQ05DLFNBQVM7SUFDVEMsZ0JBQWdCO1FBQ2RDLFVBQVU7UUFDVkgsTUFBTTtRQUNOSSxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxRQUFRO1lBQUVDLE1BQU07Z0JBQUM7YUFBeUM7UUFBQztRQUMzREMsU0FBUztZQUFFRCxNQUFNO2dCQUFDO2FBQXlDO1FBQUM7SUFDOUQ7SUFDQUUsZ0JBQWdCO1FBQ2RDLFdBQVc7WUFBRVYsTUFBTTtZQUFZVyxLQUFLO1FBQStCO1FBQ25FSCxTQUFTO1lBQUVSLE1BQU07WUFBWVcsS0FBSztRQUErQjtJQUNuRTtBQUNGO0FBRWUsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR3pCLHNEQUFlQSxDQUMxQztRQUFDTTtRQUFNYztLQUFXLEVBQ2xCO1FBQUNqQixzRUFBY0E7S0FBRztJQUdwQixNQUFNdUIsU0FBU3pCLG1EQUFZQSxDQUFDO1FBQzFCMEIsYUFBYSxJQUFJO1FBQ2pCQyxZQUFZO1lBQUMsSUFBSXhCLHdFQUFpQkEsQ0FBQztnQkFBRW9CO1lBQU87U0FBRztRQUMvQ0M7SUFDRjtJQUVBLHFCQUNFLDhEQUFDdkIsOENBQVdBO1FBQUN3QixRQUFRQTtrQkFFbkIsNEVBQUNyQiwrREFBV0E7Ozs7Ozs7Ozs7QUFHbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsdWNraWVzLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSdcclxuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJ1xyXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvaW5qZWN0ZWQnXHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuLi9jb21wb25lbnRzL3BsYWNlaG9sZGVyJ1xyXG5cclxuY29uc3QgYmFzZSA9IHtcclxuICBpZDogODQ1MyxcclxuICBuYW1lOiAnQmFzZScsXHJcbiAgbmV0d29yazogJ2Jhc2UnLFxyXG4gIG5hdGl2ZUN1cnJlbmN5OiB7XHJcbiAgICBkZWNpbWFsczogMTgsXHJcbiAgICBuYW1lOiAnRXRoZXJldW0nLFxyXG4gICAgc3ltYm9sOiAnRVRIJyxcclxuICB9LFxyXG4gIHJwY1VybHM6IHtcclxuICAgIHB1YmxpYzogeyBodHRwOiBbJ2h0dHBzOi8vYmFzZS5tZW93cnBjLmNvbSddIH0sXHJcbiAgICBkZWZhdWx0OiB7IGh0dHA6IFsnaHR0cHM6Ly9iYXNlLm1lb3dycGMuY29tJ10gfSxcclxuICB9LFxyXG4gIGJsb2NrRXhwbG9yZXJzOiB7XHJcbiAgICBldGhlcnNjYW46IHsgbmFtZTogJ0Jhc2VTY2FuJywgdXJsOiAnaHR0cHM6Ly9iYXNlc2Nhbi5vcmcvJyB9LFxyXG4gICAgZGVmYXVsdDogeyBuYW1lOiAnQmFzZVNjYW4nLCB1cmw6ICdodHRwczovL2Jhc2VzY2FuLm9yZy8nIH0sXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBiYXNlR29lcmxpID0ge1xyXG4gIGlkOiA4NDUzMSxcclxuICBuYW1lOiAnQmFzZSBHb2VybGknLFxyXG4gIG5ldHdvcms6ICdiYXNlIGdvZXJsaScsXHJcbiAgbmF0aXZlQ3VycmVuY3k6IHtcclxuICAgIGRlY2ltYWxzOiAxOCxcclxuICAgIG5hbWU6ICdFdGhlcmV1bScsXHJcbiAgICBzeW1ib2w6ICdFVEgnLFxyXG4gIH0sXHJcbiAgcnBjVXJsczoge1xyXG4gICAgcHVibGljOiB7IGh0dHA6IFsnaHR0cHM6Ly9iYXNlLWdvZXJsaS5wdWJsaWMuYmxhc3RhcGkuaW8nXSB9LFxyXG4gICAgZGVmYXVsdDogeyBodHRwOiBbJ2h0dHBzOi8vYmFzZS1nb2VybGkucHVibGljLmJsYXN0YXBpLmlvJ10gfSxcclxuICB9LFxyXG4gIGJsb2NrRXhwbG9yZXJzOiB7XHJcbiAgICBldGhlcnNjYW46IHsgbmFtZTogJ0Jhc2VTY2FuJywgdXJsOiAnaHR0cHM6Ly9nb2VybGkuYmFzZXNjYW4ub3JnLycgfSxcclxuICAgIGRlZmF1bHQ6IHsgbmFtZTogJ0Jhc2VTY2FuJywgdXJsOiAnaHR0cHM6Ly9nb2VybGkuYmFzZXNjYW4ub3JnLycgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgICBbYmFzZSwgYmFzZUdvZXJsaV0sXHJcbiAgICBbcHVibGljUHJvdmlkZXIoKV0sXHJcbiAgKVxyXG5cclxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgICBjb25uZWN0b3JzOiBbbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgY2hhaW5zIH0pXSxcclxuICAgIHByb3ZpZGVyLFxyXG4gIH0pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgIHsvKiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+ICovfVxyXG4gICAgICA8UGxhY2Vob2xkZXIgLz5cclxuICAgIDwvV2FnbWlDb25maWc+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJwdWJsaWNQcm92aWRlciIsIkluamVjdGVkQ29ubmVjdG9yIiwiUGxhY2Vob2xkZXIiLCJiYXNlIiwiaWQiLCJuYW1lIiwibmV0d29yayIsIm5hdGl2ZUN1cnJlbmN5IiwiZGVjaW1hbHMiLCJzeW1ib2wiLCJycGNVcmxzIiwicHVibGljIiwiaHR0cCIsImRlZmF1bHQiLCJibG9ja0V4cGxvcmVycyIsImV0aGVyc2NhbiIsInVybCIsImJhc2VHb2VybGkiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjaGFpbnMiLCJwcm92aWRlciIsImNsaWVudCIsImF1dG9Db25uZWN0IiwiY29ubmVjdG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/connectors/injected":
/*!********************************************!*\
  !*** external "wagmi/connectors/injected" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/connectors/injected");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();