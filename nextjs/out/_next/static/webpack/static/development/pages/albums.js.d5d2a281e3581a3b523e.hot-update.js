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
        className: "jsx-3654451578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3654451578" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.albums.map(function (a) {
        return __jsx("div", {
          key: a.slug,
          className: "jsx-3654451578" + " " + "album",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3654451578" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, "".concat(a.title, " - ").concat(a.releaseType)), __jsx("div", {
          className: "jsx-3654451578" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-3654451578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-3654451578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-3654451578" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3654451578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-3654451578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-3654451578" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3654451578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3654451578" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-3654451578" + " " + "description text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, a.description)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3654451578",
        __self: this
      }, "img.jsx-3654451578{width:70%;padding:0;}.albumContainer.jsx-3654451578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 20px 0 20px;border:1px solid white;}.album.jsx-3654451578{width:100%;padding:10px 2% 10px 2%;}.twoThirds.jsx-3654451578{width:70%;float:left;}.oneThird.jsx-3654451578{width:30%;float:left;}p.jsx-3654451578{width:90%;}.text.jsx-3654451578{font-family:'Encode Sans Expanded',sans-serif;color:white;}.callToAction.jsx-3654451578{width:70%;height:30px;background-color:#519ead;margin:10px 0 10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCLEFBR21DLEFBSUcsQUFPRixBQUlELEFBSUEsQUFJQSxBQUdxQyxBQUlyQyxVQTdCQSxBQWVDLEFBSUEsQUFJZixBQU9nQixDQW5CWSxTQVY1QixDQWVBLEFBSUEsQ0FXNkIsYUFuQjdCLFdBY2dCLENBTVMsV0FMekIsVUFNQSxNQTdCMEIsOEVBQ1gsV0FDYyx5QkFDRix1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2ZyYW5jaXNjb3JhZmFydC9Ecm9wYm94L3dlYl9yYWZhcnQvcmFmYXJ0LXJlYWN0L25leHRqcy9zcmMvQWxidW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFsYnVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbGJ1bXMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbGJ1bVwiIGtleT17YS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2Ake2EudGl0bGV9IC0gJHthLnJlbGVhc2VUeXBlfWB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lVGhpcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy51cmxGb3IoYS5jb3Zlci5hc3NldC5fcmVmKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmJhbmRjYW1wP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2EuYmFuZGNhbXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbGxUb0FjdGlvbiB0ZXh0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQnV5IG9uIEJhbmRjYW1wXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OiA8ZGl2PlBpY288L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnNwb3RpZnk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YS5zcG90aWZ5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYWxsVG9BY3Rpb24gdGV4dFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxpc3RlbiBvbiBTcG90aWZ5XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OiA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29UaGlyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiB0ZXh0XCI+e2EuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMiUgMTBweCAyJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudHdvVGhpcmRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAub25lVGhpcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRW5jb2RlIFNhbnMgRXhwYW5kZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYWxsVG9BY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTllYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBbGJ1bXM7XG4iXX0= */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.d5d2a281e3581a3b523e.hot-update.js.map