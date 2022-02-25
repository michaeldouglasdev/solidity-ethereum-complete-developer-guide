"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/request-row.js":
/*!***********************************!*\
  !*** ./components/request-row.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mdsilveira_Documents_Projects_MD_Ethereum_and_Solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mdsilveira_Documents_Projects_MD_Ethereum_and_Solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mdsilveira_Documents_Projects_MD_Ethereum_and_Solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar RequestRow = function(props) {\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell;\n    var id = props.id, request = props.request, approversCount = props.approversCount;\n    var handleApprove = _asyncToGenerator(_Users_mdsilveira_Documents_Projects_MD_Ethereum_and_Solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var campaignContract, accounts;\n        return _Users_mdsilveira_Documents_Projects_MD_Ethereum_and_Solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    campaignContract = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.address);\n                    _ctx.next = 3;\n                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n                case 3:\n                    accounts = _ctx.sent;\n                    _ctx.next = 6;\n                    return campaignContract.methods.approveRequests(props.id).send({\n                        from: accounts[0]\n                    });\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Row, {\n        __source: {\n            fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: id\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: request.description\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(request.value, 'ether')\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: request.recipient\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Cell, {\n                __source: {\n                    fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    request.approvalCount,\n                    \"/\",\n                    approversCount\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onClick: handleApprove,\n                    __source: {\n                        fileName: \"/Users/mdsilveira/Documents/Projects-MD/Ethereum and Solidity/kickstart/components/request-row.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Approve\"\n                })\n            })\n        ]\n    }));\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcXVlc3Qtcm93LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDd0I7QUFDZDtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO0lBRTdCLEdBQUssQ0FBR0MsR0FBRyxHQUFXTCx3REFBWCxFQUFFTSxJQUFJLEdBQUtOLHlEQUFMO0lBQ2pCLEdBQUssQ0FBR08sRUFBRSxHQUE4QkgsS0FBSyxDQUFyQ0csRUFBRSxFQUFFQyxPQUFPLEdBQXFCSixLQUFLLENBQWpDSSxPQUFPLEVBQUVDLGNBQWMsR0FBS0wsS0FBSyxDQUF4QkssY0FBYztJQUVuQyxHQUFLLENBQUNDLGFBQWEsdU1BQUcsUUFBUSxXQUFJLENBQUM7WUFDM0JDLGdCQUFnQixFQUNoQkMsUUFBUTs7OztvQkFEUkQsZ0JBQWdCLEdBQUdULDhEQUFnQixDQUFDRSxLQUFLLENBQUNTLE9BQU87OzJCQUNoQ1osc0VBQW9COztvQkFBckNXLFFBQVE7OzJCQUVSRCxnQkFBZ0IsQ0FBQ0ssT0FBTyxDQUFDQyxlQUFlLENBQUNiLEtBQUssQ0FBQ0csRUFBRSxFQUFFVyxJQUFJLENBQUMsQ0FBQzt3QkFDN0RDLElBQUksRUFBRVAsUUFBUSxDQUFDLENBQUM7b0JBQ2xCLENBQUM7Ozs7OztJQUNILENBQUM7SUFFRCxNQUFNLHVFQUNIUCxHQUFHOzs7Ozs7OztpRkFDREMsSUFBSTs7Ozs7OzswQkFBRUMsRUFBRTs7aUZBQ1JELElBQUk7Ozs7Ozs7MEJBQUVFLE9BQU8sQ0FBQ1ksV0FBVzs7aUZBQ3pCZCxJQUFJOzs7Ozs7OzBCQUFFTCxvRUFBa0IsQ0FBQ08sT0FBTyxDQUFDZSxLQUFLLEVBQUUsQ0FBTzs7aUZBQy9DakIsSUFBSTs7Ozs7OzswQkFBRUUsT0FBTyxDQUFDZ0IsU0FBUzs7a0ZBQ3ZCbEIsSUFBSTs7Ozs7Ozs7b0JBQUVFLE9BQU8sQ0FBQ2lCLGFBQWE7b0JBQUMsQ0FBQztvQkFBQ2hCLGNBQWM7OztpRkFDNUNILElBQUk7Ozs7Ozs7K0ZBQ0ZQLHFEQUFNO29CQUFDMkIsS0FBSyxFQUFDLENBQU87b0JBQUNDLEtBQUs7b0JBQUNDLE9BQU8sRUFBRWxCLGFBQWE7Ozs7Ozs7OEJBQUUsQ0FBTzs7Ozs7QUFJbkUsQ0FBQztLQTFCS1AsVUFBVTtBQTRCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JlcXVlc3Qtcm93LmpzP2ZiYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBDYW1wYWlnbkNvbnRyYWN0IGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcblxuY29uc3QgUmVxdWVzdFJvdyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgY29uc3QgeyBpZCwgcmVxdWVzdCwgYXBwcm92ZXJzQ291bnQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FtcGFpZ25Db250cmFjdCA9IENhbXBhaWduQ29udHJhY3QocHJvcHMuYWRkcmVzcyk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgYXdhaXQgY2FtcGFpZ25Db250cmFjdC5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0cyhwcm9wcy5pZCkuc2VuZCh7XG4gICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxuICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCAnZXRoZXInKX08L0NlbGw+XG4gICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxuICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cbiAgICAgIDxDZWxsPlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXtoYW5kbGVBcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+XG4gICAgICA8L0NlbGw+XG4gICAgPC9Sb3c+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJUYWJsZSIsIndlYjMiLCJDYW1wYWlnbkNvbnRyYWN0IiwiUmVxdWVzdFJvdyIsInByb3BzIiwiUm93IiwiQ2VsbCIsImlkIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwiaGFuZGxlQXBwcm92ZSIsImNhbXBhaWduQ29udHJhY3QiLCJhY2NvdW50cyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdHMiLCJzZW5kIiwiZnJvbSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwiY29sb3IiLCJiYXNpYyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/request-row.js\n");

/***/ })

});