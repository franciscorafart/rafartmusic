webpackHotUpdate("static/development/pages/albums.js",{

/***/ "./src/Albums.js":
/*!***********************!*\
  !*** ./src/Albums.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var Albums =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Albums, _Component);

  function Albums(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Albums);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Albums).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Albums, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        className: "jsx-3740854080",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3740854080" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.albums.map(function (a) {
        return __jsx("div", {
          key: a.slug,
          className: "jsx-3740854080" + " " + "album",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3740854080" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3740854080" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "".concat(a.title, " - ").concat(a.releaseType)), __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-3740854080",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-3740854080",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-3740854080" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3740854080",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-3740854080",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-3740854080" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3740854080",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3740854080" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-3740854080" + " " + "description text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, a.description)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3740854080",
        __self: this
      }, "img.jsx-3740854080{width:20%;padding:0;}.albumContainer.jsx-3740854080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 20px 0 20px;border:1px solid white;}.album.jsx-3740854080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.twoThirds.jsx-3740854080{width:70%;}oneThird.jsx-3740854080{width:30%;}.text.jsx-3740854080{font-family:'Encode Sans Expanded',sans-serif;color:white;}.callToAction.jsx-3740854080{width:20%;height:30px;background-color:#519ead;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCLEFBR21DLEFBSUcsQUFPQSxBQUlILEFBR0EsQUFHcUMsQUFJckMsVUF4QkEsQUFlZCxBQUdBLEFBT2dCLFVBeEJoQixFQXlCNkIsd0JBTGIsQ0FNaEIsV0FMQSxnQkFsQjBCLEFBT0gscUVBQ3ZCLFNBUGUsV0FDYyx5QkFDRix1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2ZyYW5jaXNjb3JhZmFydC9Ecm9wYm94L3dlYl9yYWZhcnQvcmFmYXJ0LXJlYWN0L25leHRqcy9zcmMvQWxidW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFsYnVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbGJ1bXMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbGJ1bVwiIGtleT17YS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lVGhpcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPntgJHthLnRpdGxlfSAtICR7YS5yZWxlYXNlVHlwZX1gfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMudXJsRm9yKGEuY292ZXIuYXNzZXQuX3JlZil9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5iYW5kY2FtcD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXthLmJhbmRjYW1wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYWxsVG9BY3Rpb24gdGV4dFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkJ1eSBvbiBCYW5kY2FtcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj5QaWNvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5zcG90aWZ5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2Euc3BvdGlmeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMaXN0ZW4gb24gU3BvdGlmeVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvVGhpcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gdGV4dFwiPnthLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWxidW1Db250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWxidW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnR3b1RoaXJkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uZVRoaXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0VuY29kZSBTYW5zIEV4cGFuZGVkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FsbFRvQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5ZWFkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQWxidW1zO1xuIl19 */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.b03b4f572c222075f471.hot-update.js.map