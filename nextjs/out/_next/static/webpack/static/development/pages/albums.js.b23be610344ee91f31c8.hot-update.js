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
        className: "jsx-1364157475" + " " + "website_div",
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
        id: "1364157475",
        __self: this
      }, ".website_div.jsx-1364157475{background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RWdDLEFBR29ELHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvZnJhbmNpc2NvcmFmYXJ0L0Ryb3Bib3gvd2ViX3JhZmFydC9yYWZhcnQtcmVhY3QvbmV4dGpzL3NyYy9Db250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IENvdmVyIGZyb20gJy4vQ292ZXInO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vTWFpbk1lbnUnO1xuaW1wb3J0IEludHJvIGZyb20gJy4vSW50cm8nO1xuaW1wb3J0IFZpZGVvcyBmcm9tICcuL1ZpZGVvcyc7XG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4vSW5kZXhQYWdlJztcblxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL1NpZ25VcCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IEFsYnVtcyBmcm9tICcuL0FsYnVtcyc7XG5cbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy51cmxGb3IgPSB0aGlzLnVybEZvci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMudGl0bGVDYXNlID0gdGhpcy50aXRsZUNhc2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHVybEZvciA9IChzb3VyY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxuICAgIH1cblxuICAgIHRpdGxlQ2FzZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucHJvcHMucGFnZTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSA8ZGl2PjwvZGl2PlxuXG4gICAgICAgIGlmIChwYWdlID09PSAnaG9tZScpe1xuICAgICAgICAgICAgY29udGVudCA9IDxkaXY+XG4gICAgICAgICAgICAgICAgPENvdmVyIHVybEZvcj17dGhpcy51cmxGb3J9IGNvdmVySW1hZ2U9e3RoaXMucHJvcHMuY292ZXJJbWFnZX0vPlxuICAgICAgICAgICAgICAgIDxJbnRybyB1cmxGb3I9e3RoaXMudXJsRm9yfSBsb2dvPXt0aGlzLnByb3BzLmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8TWFpbk1lbnVcbiAgICAgICAgICAgICAgICAgICAgdXJsRm9yPXt0aGlzLnVybEZvcn1cbiAgICAgICAgICAgICAgICAgICAgbWVudT17dGhpcy5wcm9wcy5tZW51fVxuICAgICAgICAgICAgICAgICAgICBtZW51QmFja2dyb3VuZD17dGhpcy5wcm9wcy5tZW51QmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaWRlb3MgdmlkZW9zPXt0aGlzLnByb3BzLnZpZGVvc30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgICAgIGNvbnRlbnQgPSA8Q29udGFjdC8+XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ2FsYnVtcycpe1xuICAgICAgICAgICAgY29udGVudCA9IDxBbGJ1bXMgdXJsRm9yPXt0aGlzLnVybEZvcn0gYWxidW1zPXt0aGlzLnByb3BzLmFsYnVtc30vPlxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdhYm91dCcpe1xuICAgICAgICAgICAgY29udGVudCA9IDxkaXY+QmlvPC9kaXY+XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ3ByZXNzJyl7XG4gICAgICAgICAgICBjb250ZW50ID0gPGRpdj5QcmVzczwvZGl2PlxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdzaWduLXVwJyl7XG4gICAgICAgICAgICBjb250ZW50ID0gPFNpZ25VcC8+XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbmRleFBhZ2UgdXJsRm9yPXt0aGlzLnVybEZvcn1mYXZpY29uPXt0aGlzLnByb3BzLmZhdmljb259Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYnNpdGVfZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEZvcj17dGhpcy51cmxGb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51PXt0aGlzLnByb3BzLm1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvPXt0aGlzLnByb3BzLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC53ZWJzaXRlX2RpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Container.js */")));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=albums.js.b23be610344ee91f31c8.hot-update.js.map