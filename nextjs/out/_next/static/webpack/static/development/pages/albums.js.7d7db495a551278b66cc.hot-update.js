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

      console.log('albums', this.props);
      return __jsx("div", {
        className: "jsx-516055169",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-516055169" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-516055169" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "fdsafdadf"), this.props.albums.map(function (a) {
        return __jsx("div", {
          key: a.slug,
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-516055169" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, a.cover ? __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }) : __jsx("div", {
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-516055169" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-516055169" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-516055169" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-516055169" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, a.title), __jsx("span", {
          className: "jsx-516055169",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, " - ", a.releaseType), __jsx("p", {
          className: "jsx-516055169" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, a.description)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "516055169",
        __self: this
      }, "img.jsx-516055169{height:200px;width:200px;}.albumContainer.jsx-516055169{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:800px;paddind:20px 20px 0 20px;border:1px white;}.twoThirds.jsx-516055169{width:70%;}oneThird.jsx-516055169{width:30%;}.text.jsx-516055169{font-family:'Encode Sans Expanded',sans-serif;color:white;text-align:center;}.callToAction.jsx-516055169{width:60%;margin:20px 0 20px 20%;height:60px;background-color:#519ead;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzRCLEFBR3NDLEFBSUEsQUFRSCxBQUdBLEFBR3FDLEFBS3JDLFVBVmQsQUFHQSxBQVEyQixHQXZCWCxZQUNoQixRQXVCZ0IsWUFDYSxDQVBiLFlBQ00sWUFPdEIsSUF0QjBCLEVBZ0IxQiw0RUFmZSxXQUNFLGFBQ1kseUJBQ1IsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBBbGJ1bXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZygnYWxidW1zJywgdGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+ZmRzYWZkYWRmPC9zcGFuPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFsYnVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17YS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lVGhpcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuY292ZXI/IDxpbWcgc3JjPXt0aGlzLnByb3BzLnVybEZvcihhLmNvdmVyLmFzc2V0Ll9yZWYpfS8+OiA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5iYW5kY2FtcD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXthLmJhbmRjYW1wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYWxsVG9BY3Rpb24gdGV4dFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkJ1eSBvbiBCYW5kY2FtcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj5QaWNvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5zcG90aWZ5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2Euc3BvdGlmeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMaXN0ZW4gb24gU3BvdGlmeVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvVGhpcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj57YS50aXRsZX08L2gyPjxzcGFuPiAtIHthLnJlbGVhc2VUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPnthLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmQ6IDIwcHggMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudHdvVGhpcmRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25lVGhpcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRW5jb2RlIFNhbnMgRXhwYW5kZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYWxsVG9BY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxOWVhZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFsYnVtcztcbiJdfQ== */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.7d7db495a551278b66cc.hot-update.js.map