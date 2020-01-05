(this["webpackJsonpxbook-client-web"] = this["webpackJsonpxbook-client-web"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _stores_user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores/user.store */ "./src/stores/user.store.js");
/* harmony import */ var _stores_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores/auth.store */ "./src/stores/auth.store.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/App.js";










Object(mobx__WEBPACK_IMPORTED_MODULE_8__["configure"])({
  enforceActions: 'always'
});
const stores = {
  userStore: _stores_user_store__WEBPACK_IMPORTED_MODULE_3__["default"],
  authStore: _stores_auth_store__WEBPACK_IMPORTED_MODULE_4__["default"]
};

function App() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadToken(stores);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_5__["Provider"], Object.assign({}, stores, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

const loadToken = stores => {
  try {
    stores.authStore.loadToken();
  } catch {
    stores.authStore.logout();
  }
};

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _screens_Explore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/Explore */ "./src/screens/Explore.js");
/* harmony import */ var _screens_AddBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/AddBook */ "./src/screens/AddBook.js");
/* harmony import */ var _screens_Giveaway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/Giveaway */ "./src/screens/Giveaway.js");
/* harmony import */ var _screens_Reading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/Reading */ "./src/screens/Reading.js");
/* harmony import */ var _screens_Requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/Requests */ "./src/screens/Requests.js");
/* harmony import */ var _screens_SignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/SignIn */ "./src/screens/SignIn.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/MainLayout */ "./src/components/MainLayout.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PrivateRoute */ "./src/components/PrivateRoute.js");
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/Routes.js";












const Routes = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
    path: "/explore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Explore__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
    path: "/add_book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Explore__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
    path: "/reading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Explore__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
    path: "/giveaway",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Explore__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
    path: "/requests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Explore__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/sign_in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_SignIn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
    exact: true,
    path: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: {
      pathname: "/explore"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('authStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(Routes)));

/***/ }),

/***/ "./src/components/BottomNavbar.js":
/*!****************************************!*\
  !*** ./src/components/BottomNavbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_user_xBook_xbook_client_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/esm/BottomNavigation/index.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/esm/BottomNavigationAction/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "/home/user/xBook/xbook-client-web/src/components/BottomNavbar.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({// root: {
  //   width: 500,
  // },
});

const BottomNavbar = () => {
  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('explore'),
        _React$useState2 = Object(_home_user_xBook_xbook_client_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: value,
    onChange: (event, newValue) => {
      setValue(newValue);
    },
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/explore",
    value: "explore",
    label: "Explore",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Search"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/add_book",
    label: "Add Book",
    value: "add_book",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Add"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/reading",
    label: "Reading",
    value: "reading",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Book"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/giveaway",
    label: "Giveaway",
    value: "giveaway",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["LibraryBooks"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/requests",
    label: "Requests",
    value: "requests",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["SwapCalls"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BottomNavbar);

/***/ }),

/***/ "./src/components/MainLayout.js":
/*!**************************************!*\
  !*** ./src/components/MainLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _BottomNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BottomNavbar */ "./src/components/BottomNavbar.js");
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/components/MainLayout.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    // padding: theme.spacing(3, 0),
    marginTop: 'auto'
  }
}));

const MainLayout = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    component: "main",
    className: classes.main,
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    component: "nav",
    maxWidth: "sm",
    disableGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BottomNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./src/components/PrivateRoute.js":
/*!****************************************!*\
  !*** ./src/components/PrivateRoute.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_user_xBook_xbook_client_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _jsxFileName = "/home/user/xBook/xbook-client-web/src/components/PrivateRoute.js";






const PrivateRoute = (_ref) => {
  let children = _ref.children,
      rest = Object(_home_user_xBook_xbook_client_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children"]);

  if (rest.authStore.isLoading) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], Object.assign({}, rest, {
    render: ({
      location
    }) => rest.authStore.isLoggedIn ? children : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: {
        pathname: "/sign_in"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('authStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(PrivateRoute)));

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: serverUrl, authCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverUrl", function() { return serverUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authCookie", function() { return authCookie; });
const IS_DEV = true;
const serverUrl = IS_DEV ? 'http://localhost' : 'https://glacial-fortress-14735.herokuapp.com';
const authCookie = 'authToken';

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/screens/AddBook.js":
/*!********************************!*\
  !*** ./src/screens/AddBook.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/screens/AddBook.js";


const AddBook = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "AddBook");
};

/* harmony default export */ __webpack_exports__["default"] = (AddBook);

/***/ }),

/***/ "./src/screens/Explore.js":
/*!********************************!*\
  !*** ./src/screens/Explore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/screens/Explore.js";


const Explore = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "explore");
};

/* harmony default export */ __webpack_exports__["default"] = (Explore);

/***/ }),

/***/ "./src/screens/Giveaway.js":
/*!*********************************!*\
  !*** ./src/screens/Giveaway.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/screens/Giveaway.js";


const Giveaway = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Giveaway);

/***/ }),

/***/ "./src/screens/Reading.js":
/*!********************************!*\
  !*** ./src/screens/Reading.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/screens/Reading.js";


const Reading = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Reading);

/***/ }),

/***/ "./src/screens/Requests.js":
/*!*********************************!*\
  !*** ./src/screens/Requests.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/screens/Requests.js";


const Requests = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Requests);

/***/ }),

/***/ "./src/screens/SignIn.js":
/*!*******************************!*\
  !*** ./src/screens/SignIn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/home/user/xBook/xbook-client-web/src/screens/SignIn.js";







const qs = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

const FB_URL = `${_config__WEBPACK_IMPORTED_MODULE_3__["serverUrl"]}/api/auth/facebook/`;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn = props => {
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  let location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const authToken = qs.parse(location.search, {
      ignoreQueryPrefix: true
    }).auth_token;

    if (authToken) {
      if (authToken === 'null') {
        onFailed();
      } else {
        onSuccess(authToken);
      }
    }
  });

  const onFailed = async () => {
    console.log('auth failed');
  };

  const onSuccess = async token => {
    console.log('auth succeeded');
    await props.authStore.setToken(token);
    history.replace('/');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    component: "main",
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.avatar,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Book_icon_%28closed%29_-_Blue_and_gold.svg/137px-Book_icon_%28closed%29_-_Blue_and_gold.svg.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "h1",
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "xBook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Continue with Facebook"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])('authStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(SignIn)));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/bookDetails.service.js":
/*!*********************************************!*\
  !*** ./src/services/bookDetails.service.js ***!
  \*********************************************/
/*! exports provided: getBook, searchBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBook", function() { return getBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBook", function() { return searchBook; });
/* harmony import */ var _googleBooks_serivce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleBooks.serivce */ "./src/services/googleBooks.serivce.js");

const getBook = id => {
  return _googleBooks_serivce__WEBPACK_IMPORTED_MODULE_0__["getBookById"](id);
};
const searchBook = bookName => {
  return _googleBooks_serivce__WEBPACK_IMPORTED_MODULE_0__["searchBook"](bookName);
};

/***/ }),

/***/ "./src/services/googleBooks.serivce.js":
/*!*********************************************!*\
  !*** ./src/services/googleBooks.serivce.js ***!
  \*********************************************/
/*! exports provided: searchBook, getBookById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBook", function() { return searchBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookById", function() { return getBookById; });
/*
    take only the needed info from api
*/
const cleanseBook = book => {
  const newBook = {};
  newBook.id = book.id;
  newBook.title = book.volumeInfo.title;
  newBook.thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  newBook.author = book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
  newBook.more = book.volumeInfo.infoLink;
  return newBook;
};

const searchBook = async bookName => {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
    const resJson = await res.json();
    if (!resJson.totalItems) return [];
    const books = resJson.items;
    const fewBooks = books.slice(0, 4);
    const formattedBooks = fewBooks.map(cleanseBook);
    return formattedBooks;
  } catch (error) {
    console.log('httpError: ', error);
  }
};
const getBookById = async id => {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const book = await res.json();
    const formattedBook = cleanseBook(book);
    return formattedBook;
  } catch (error) {
    console.log('httpError: ', error);
  }
};

/***/ }),

/***/ "./src/services/helpers.js":
/*!*********************************!*\
  !*** ./src/services/helpers.js ***!
  \*********************************/
/*! exports provided: getHeaders, handleErrors, json */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleErrors", function() { return handleErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
const getHeaders = token => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token && `Bearer ${token}`
  };
};
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
};
const json = response => response.json();

/***/ }),

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/*! exports provided: updateBook, addBook, deleteBook, getMyUser, getUsers, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBook", function() { return updateBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBook", function() { return addBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBook", function() { return deleteBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyUser", function() { return getMyUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _bookDetails_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookDetails.service */ "./src/services/bookDetails.service.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/services/helpers.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _stores_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/auth.store */ "./src/stores/auth.store.js");





const headers = () => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])(_stores_auth_store__WEBPACK_IMPORTED_MODULE_3__["default"].token);

const userApi = '/api/user';
const userUrl = _config__WEBPACK_IMPORTED_MODULE_2__["serverUrl"] + userApi;
const booksUrl = userUrl + '/books';

const populateUserBooks = async user => {
  user.books = await Promise.all(user.books.map(async book => {
    book.data = await Object(_bookDetails_service__WEBPACK_IMPORTED_MODULE_0__["getBook"])(book.id);
    return book;
  }));
  return user;
};

const populateUsersBooks = async users => {
  const newUsers = await users.map(populateUserBooks);
  return newUsers;
};

const updateBook = async (id, available) => {
  return fetch(booksUrl, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify({
      id,
      available
    })
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleErrors"]).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["json"]);
};
const addBook = async (id, available) => {
  return fetch(booksUrl, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      id,
      available
    })
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleErrors"]).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["json"]);
};
const deleteBook = async bookId => {
  return fetch(booksUrl + '/' + bookId, {
    method: 'DELETE',
    headers: headers(),
    body: JSON.stringify({})
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleErrors"]).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["json"]);
};
const getMyUser = () => {
  return fetch(userUrl + '/me', {
    headers: headers()
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleErrors"]).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["json"]).then(populateUserBooks);
};
const getUsers = (page = 0) => {
  return fetch(`${userUrl}?page=${page}`, {
    headers: headers()
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleErrors"]).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["json"]).then(populateUsersBooks);
};
const getUser = id => {
  return fetch(`${userUrl}/${id}`, {
    headers: headers()
  }).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleErrors"]).then(_helpers__WEBPACK_IMPORTED_MODULE_1__["json"]).then(populateUserBooks);
};

/***/ }),

/***/ "./src/stores/auth.store.js":
/*!**********************************!*\
  !*** ./src/stores/auth.store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _callstack_async_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @callstack/async-storage */ "./node_modules/@callstack/async-storage/lib/index.js");
/* harmony import */ var _callstack_async_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_callstack_async_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _user_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.store */ "./src/stores/user.store.js");





class AuthStore {
  constructor() {
    this.token = null;
    this.isLoading = true;
  }

  setToken(token) {
    console.log('setToken');
    this.isLoading = true;
    _callstack_async_storage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem(_config__WEBPACK_IMPORTED_MODULE_2__["authCookie"], token).then(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.token = token;
    })).then(() => _user_store__WEBPACK_IMPORTED_MODULE_3__["default"].pullCurrentUser()).finally(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.isLoading = false;
    }));
  }

  logout() {
    this.isLoading = true;
    _callstack_async_storage__WEBPACK_IMPORTED_MODULE_1___default.a.removeItem(_config__WEBPACK_IMPORTED_MODULE_2__["authCookie"]).then(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.token = undefined;
    })).then(() => _user_store__WEBPACK_IMPORTED_MODULE_3__["default"].forgetCurrentUser()).finally(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.isLoading = false;
    }));
  }

  loadToken() {
    this.isLoading = true;
    _callstack_async_storage__WEBPACK_IMPORTED_MODULE_1___default.a.getItem(_config__WEBPACK_IMPORTED_MODULE_2__["authCookie"]).then(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(token => {
      this.token = token;
    })).then(() => this.token ? _user_store__WEBPACK_IMPORTED_MODULE_3__["default"].pullCurrentUser() : null).finally(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.isLoading = false;
    }));
  }

  get isLoggedIn() {
    return this.token ? true : false;
  }

}

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["decorate"])(AuthStore, {
  token: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  isLoading: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  setToken: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  logout: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  loadToken: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  isLoggedIn: mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
});
/* harmony default export */ __webpack_exports__["default"] = (new AuthStore());

/***/ }),

/***/ "./src/stores/user.store.js":
/*!**********************************!*\
  !*** ./src/stores/user.store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/services/user.service.js");



const getBooks = (user, available) => user.books.filter(book => book.available == available).map(book => book.id);

class UserStore {
  constructor() {
    this.users = [];
    this.usersPage = 0;
  }

  get myAvailableBooks() {
    return getBooks(this.currentUser, true);
  }

  get myNonAvailableBooks() {
    return getBooks(this.currentUser, false);
  }

  pullCurrentUser() {
    this.isLoadingCurrentUser = true;
    return Object(_services_user_service__WEBPACK_IMPORTED_MODULE_1__["getMyUser"])().then(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(user => {
      this.currentUser = user;
    })).finally(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.isLoadingCurrentUser = false;
    }));
  }

  pullSelectedUser(id) {
    this.isLoadingSelectedUser = true;
    return Object(_services_user_service__WEBPACK_IMPORTED_MODULE_1__["getUser"])(id).then(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(user => {
      this.selectedUser = user;
    })).finally(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.isLoadingSelectedUser = false;
    }));
  }

  pullUsers() {
    this.isLoadingUsers = true;
    return Object(_services_user_service__WEBPACK_IMPORTED_MODULE_1__["getUsers"])(this.usersPage).then(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(users => {
      this.users.push(users);
    })).finally(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
      this.isLoadingUsers = false;
      this.usersPage++;
    }));
  }

  addBook(id, available) {
    this.currentUser.books.push({
      id: id,
      available
    });
    return Object(_services_user_service__WEBPACK_IMPORTED_MODULE_1__["addBook"])(id, available).catch(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(err => {
      this.pullCurrentUser();
      throw err;
    }));
  }

  updateBook(id, available) {
    const book = this.currentUser.books.find(book => book.id === id);
    book.available = available;
    return Object(_services_user_service__WEBPACK_IMPORTED_MODULE_1__["updateBook"])(id, available).catch(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(err => {
      this.pullCurrentUser();
      throw err;
    }));
  }

  deleteBook(id) {
    const index = this.currentUser.books.findIndex(book => book.id === id);
    if (index > -1) this.currentUser.books.splice(index, 1);
    return Object(_services_user_service__WEBPACK_IMPORTED_MODULE_1__["deleteBook"])(id).catch(Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(err => {
      this.pullCurrentUser();
      throw err;
    }));
  }

  forgetCurrentUser() {
    this.currentUser = undefined;
  }

}

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["decorate"])(UserStore, {
  users: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  isLoadingCurrentUser: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  isLoadingSelectedUser: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  isLoadingUsers: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  currentUser: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  selectedUser: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  myAvailableBooks: mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
  myNonAvailableBooks: mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
  pullCurrentUser: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  pullSelectedUser: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  pullUsers: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  addBook: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  updateBook: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  deleteBook: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  forgetCurrentUser: mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
});
/* harmony default export */ __webpack_exports__["default"] = (new UserStore());

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/user/xBook/xbook-client-web/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/user/xBook/xbook-client-web/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/user/xBook/xbook-client-web/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map