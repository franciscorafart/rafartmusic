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
        className: "jsx-1615149901",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1615149901" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.albums.map(function (a) {
        return __jsx("div", {
          key: a.slug,
          className: "jsx-1615149901" + " " + "album",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1615149901" + " " + "text albumTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, "".concat(a.title, " - ").concat(a.releaseType)), __jsx("div", {
          className: "jsx-1615149901" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-1615149901",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-1615149901",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-1615149901" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1615149901",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-1615149901",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-1615149901" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1615149901",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-1615149901" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1615149901" + " " + "description text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, a.description)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1615149901",
        __self: this
      }, "img.jsx-1615149901{width:70%;padding:0;}.albumContainer.jsx-1615149901{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:20px 20px 0 20px;border:1px solid white;}.album.jsx-1615149901{width:100%;padding:10px 2% 10px 2%;}.twoThirds.jsx-1615149901{width:70%;float:left;}.oneThird.jsx-1615149901{width:30%;float:left;}p.jsx-1615149901{width:90%;margin-bottom:10px;}.text.jsx-1615149901{font-family:'Encode Sans Expanded',sans-serif;color:white;}.albumTitle.jsx-1615149901{text-align:center;}.callToAction.jsx-1615149901{width:70%;height:30px;background-color:#519ead;margin:10px 0 10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCLEFBR21DLEFBSUcsQUFPRixBQUlELEFBSUEsQUFJQSxBQUlxQyxBQUk3QixBQUdSLFVBakNBLEFBZUMsQUFJQSxBQUlRLEFBV1AsQ0F2QlksT0FvQjVCLEVBOUJBLENBZUEsQUFJQSxDQWU2QixPQVg3QixNQVpBLFdBZWdCLENBU1MsV0FSekIsVUFTQSxNQWpDMEIsOEVBQ1gsV0FDYyx5QkFDRix1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2ZyYW5jaXNjb3JhZmFydC9Ecm9wYm94L3dlYl9yYWZhcnQvcmFmYXJ0LXJlYWN0L25leHRqcy9zcmMvQWxidW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFsYnVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbGJ1bXMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbGJ1bVwiIGtleT17YS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0IGFsYnVtVGl0bGVcIj57YCR7YS50aXRsZX0gLSAke2EucmVsZWFzZVR5cGV9YH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVUaGlyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnVybEZvcihhLmNvdmVyLmFzc2V0Ll9yZWYpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuYmFuZGNhbXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YS5iYW5kY2FtcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJCdXkgb24gQmFuZGNhbXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT46IDxkaXY+UGljbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuc3BvdGlmeT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXthLnNwb3RpZnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbGxUb0FjdGlvbiB0ZXh0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTGlzdGVuIG9uIFNwb3RpZnlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT46IDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1RoaXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIHRleHRcIj57YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFsYnVtQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFsYnVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyJSAxMHB4IDIlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50d29UaGlyZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5vbmVUaGlyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRW5jb2RlIFNhbnMgRXhwYW5kZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bVRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FsbFRvQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5ZWFkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQWxidW1zO1xuIl19 */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.a7dbf38c103ee17499e6.hot-update.js.map