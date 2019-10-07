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
        className: "jsx-1917777312" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1917777312" + " " + "text albumTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Albums"), __jsx("div", {
        className: "jsx-1917777312" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.albums.map(function (a) {
        return __jsx("div", {
          key: a.slug,
          className: "jsx-1917777312" + " " + "album",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1917777312" + " " + "text albumTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "".concat(a.title, " - ").concat(a.year || '', " ").concat(a.releaseType)), __jsx("div", {
          className: "jsx-1917777312" + " " + "albumInfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1917777312" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-1917777312",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-1917777312",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-1917777312" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1917777312",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-1917777312",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-1917777312" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1917777312",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }), a.soundcloud ? __jsx("form", {
          action: a.soundcloud,
          className: "jsx-1917777312",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Soundcloud",
          className: "jsx-1917777312" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1917777312",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-1917777312" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1917777312" + " " + "description text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, a.description))));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1917777312",
        __self: this
      }, ".container.jsx-1917777312{width:100%;margin:60px 0 40px 0;}img.jsx-1917777312{width:80%;padding:0;}.albumContainer.jsx-1917777312{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.album.jsx-1917777312{margin:10px 0 10px 0;padding:0 1% 0 1%;border:1px solid gray;}.albumInfo.jsx-1917777312{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.twoThirds.jsx-1917777312{-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:60%;margin-top:10px;float:left;}.oneThird.jsx-1917777312{width:30%;margin-top:10px;float:left;}.text.jsx-1917777312{font-family:'Encode Sans Expanded',sans-serif;color:white;}.albumTitle.jsx-1917777312{text-align:center;}.callToAction.jsx-1917777312{width:80%;height:30px;background-color:#519ead;margin:10px 0 10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzRCLEFBR29DLEFBSUQsQUFJRyxBQUlRLEFBS1YsQUFLSyxBQU1OLEFBS3FDLEFBSTdCLEFBR1IsVUFuQ0EsQUF3Qk0sQUFZSixDQXhDUyxBQWlCUixPQW9CakIsRUFoQ0EsQ0FPc0IsQ0E2Qk8sSUFaZixNQTVCZCxLQTZCQSxFQWpCMEIsT0FvQlYsQ0FTUyxXQVJ6QixHQXBCQSxPQTZCQSxDQXJCYyxLQWRZLEtBZU4sTUFMYSxVQU1uQixXQUNkLDhDQWhCQSx3REFVQSIsImZpbGUiOiIvVXNlcnMvZnJhbmNpc2NvcmFmYXJ0L0Ryb3Bib3gvd2ViX3JhZmFydC9yYWZhcnQtcmVhY3QvbmV4dGpzL3NyYy9BbGJ1bXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQWxidW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgYWxidW1UaXRsZVwiPkFsYnVtczwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFsYnVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtXCIga2V5PXthLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQgYWxidW1UaXRsZVwiPntgJHthLnRpdGxlfSAtICR7YS55ZWFyIHx8ICcnfSAke2EucmVsZWFzZVR5cGV9YH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bUluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZVRoaXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnVybEZvcihhLmNvdmVyLmFzc2V0Ll9yZWYpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5iYW5kY2FtcD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YS5iYW5kY2FtcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbGxUb0FjdGlvbiB0ZXh0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQnV5IG9uIEJhbmRjYW1wXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj5QaWNvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5zcG90aWZ5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXthLnNwb3RpZnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYWxsVG9BY3Rpb24gdGV4dFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxpc3RlbiBvbiBTcG90aWZ5XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnNvdW5kY2xvdWQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2Euc291bmRjbG91ZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbGxUb0FjdGlvbiB0ZXh0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTGlzdGVuIG9uIFNvdW5kY2xvdWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OiA8ZGl2PjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1RoaXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiB0ZXh0XCI+e2EuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjBweCAwIDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFsYnVtQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDElIDAgMSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bUluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnR3b1RoaXJkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5vbmVUaGlyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0VuY29kZSBTYW5zIEV4cGFuZGVkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWxidW1UaXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhbGxUb0FjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxOWVhZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFsYnVtcztcbiJdfQ== */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.65e44b78700c3e56c9f3.hot-update.js.map