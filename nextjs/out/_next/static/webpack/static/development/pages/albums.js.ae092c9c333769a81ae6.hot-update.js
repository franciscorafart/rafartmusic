webpackHotUpdate("static/development/pages/albums.js",{

/***/ "./src/Container.js":
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Cover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Cover */ "./src/Cover.js");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MainMenu */ "./src/MainMenu.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Intro */ "./src/Intro.js");
/* harmony import */ var _Videos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Videos */ "./src/Videos.js");
/* harmony import */ var _IndexPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./IndexPage */ "./src/IndexPage.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SignUp */ "./src/SignUp.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Contact */ "./src/Contact.js");
/* harmony import */ var _Albums__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Albums */ "./src/Albums.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/index.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_19__);







var _jsxFileName = "/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_19___default()(_client__WEBPACK_IMPORTED_MODULE_18__["default"]);

var Container =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Container, _Component);

  function Container(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Container);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Container).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "urlFor", function (source) {
      return builder.image(source);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "titleCase", function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    });

    _this.urlFor = _this.urlFor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.titleCase = _this.titleCase.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Container, [{
    key: "render",
    value: function render() {
      var page = this.props.page;

      var content = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });

      if (page === 'home') {
        content = __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx(_Cover__WEBPACK_IMPORTED_MODULE_10__["default"], {
          urlFor: this.urlFor,
          coverImage: this.props.coverImage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), __jsx(_Intro__WEBPACK_IMPORTED_MODULE_12__["default"], {
          urlFor: this.urlFor,
          logo: this.props.logo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), __jsx(_MainMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
          urlFor: this.urlFor,
          menu: this.props.menu,
          menuBackground: this.props.menuBackground,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }), __jsx(_Videos__WEBPACK_IMPORTED_MODULE_13__["default"], {
          videos: this.props.videos,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }));
      } else if (page === 'contact') {
        content = __jsx(_Contact__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      } else if (page === 'albums') {
        content = __jsx(_Albums__WEBPACK_IMPORTED_MODULE_17__["default"], {
          urlFor: this.urlFor,
          albums: this.props.albums,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      } else if (page === 'about') {
        content = __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Bio");
      } else if (page === 'press') {
        content = __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "Press");
      } else if (page === 'sign-up') {
        content = __jsx(_SignUp__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        });
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_IndexPage__WEBPACK_IMPORTED_MODULE_14__["default"], {
        urlFor: this.urlFor,
        favicon: this.props.favicon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3166740385" + " " + "website_div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        urlFor: this.urlFor,
        menu: this.props.menu,
        logo: this.props.logo,
        selectedPage: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), content, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3166740385",
        __self: this
      }, ".website_div.jsx-3166740385{background-color:black;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RWdDLEFBR29ELHVCQUNaLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2ZyYW5jaXNjb3JhZmFydC9Ecm9wYm94L3dlYl9yYWZhcnQvcmFmYXJ0LXJlYWN0L25leHRqcy9zcmMvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBDb3ZlciBmcm9tICcuL0NvdmVyJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL01haW5NZW51JztcbmltcG9ydCBJbnRybyBmcm9tICcuL0ludHJvJztcbmltcG9ydCBWaWRlb3MgZnJvbSAnLi9WaWRlb3MnO1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuL0luZGV4UGFnZSc7XG5cbmltcG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBBbGJ1bXMgZnJvbSAnLi9BbGJ1bXMnO1xuXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudClcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMudXJsRm9yID0gdGhpcy51cmxGb3IuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnRpdGxlQ2FzZSA9IHRoaXMudGl0bGVDYXNlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICB1cmxGb3IgPSAoc291cmNlKSA9PiB7XG4gICAgICAgIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcbiAgICB9XG5cbiAgICB0aXRsZUNhc2UgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2U7XG4gICAgICAgIGxldCBjb250ZW50ID0gPGRpdj48L2Rpdj5cblxuICAgICAgICBpZiAocGFnZSA9PT0gJ2hvbWUnKXtcbiAgICAgICAgICAgIGNvbnRlbnQgPSA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDb3ZlciB1cmxGb3I9e3RoaXMudXJsRm9yfSBjb3ZlckltYWdlPXt0aGlzLnByb3BzLmNvdmVySW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICA8SW50cm8gdXJsRm9yPXt0aGlzLnVybEZvcn0gbG9nbz17dGhpcy5wcm9wcy5sb2dvfS8+XG4gICAgICAgICAgICAgICAgPE1haW5NZW51XG4gICAgICAgICAgICAgICAgICAgIHVybEZvcj17dGhpcy51cmxGb3J9XG4gICAgICAgICAgICAgICAgICAgIG1lbnU9e3RoaXMucHJvcHMubWVudX1cbiAgICAgICAgICAgICAgICAgICAgbWVudUJhY2tncm91bmQ9e3RoaXMucHJvcHMubWVudUJhY2tncm91bmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlkZW9zIHZpZGVvcz17dGhpcy5wcm9wcy52aWRlb3N9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdjb250YWN0Jyl7XG4gICAgICAgICAgICBjb250ZW50ID0gPENvbnRhY3QvPlxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdhbGJ1bXMnKXtcbiAgICAgICAgICAgIGNvbnRlbnQgPSA8QWxidW1zIHVybEZvcj17dGhpcy51cmxGb3J9IGFsYnVtcz17dGhpcy5wcm9wcy5hbGJ1bXN9Lz5cbiAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSAnYWJvdXQnKXtcbiAgICAgICAgICAgIGNvbnRlbnQgPSA8ZGl2PkJpbzwvZGl2PlxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdwcmVzcycpe1xuICAgICAgICAgICAgY29udGVudCA9IDxkaXY+UHJlc3M8L2Rpdj5cbiAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSAnc2lnbi11cCcpe1xuICAgICAgICAgICAgY29udGVudCA9IDxTaWduVXAvPlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SW5kZXhQYWdlIHVybEZvcj17dGhpcy51cmxGb3J9ZmF2aWNvbj17dGhpcy5wcm9wcy5mYXZpY29ufS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWJzaXRlX2RpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxGb3I9e3RoaXMudXJsRm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudT17dGhpcy5wcm9wcy5tZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nbz17dGhpcy5wcm9wcy5sb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAud2Vic2l0ZV9kaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Container.js */")));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=albums.js.ae092c9c333769a81ae6.hot-update.js.map