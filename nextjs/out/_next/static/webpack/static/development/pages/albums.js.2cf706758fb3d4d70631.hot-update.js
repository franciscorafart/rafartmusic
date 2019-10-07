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
        className: "jsx-3488173800" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3488173800" + " " + "text albumTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Albums"), __jsx("div", {
        className: "jsx-3488173800" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.albums.map(function (a) {
        return __jsx("div", {
          key: a.slug,
          className: "jsx-3488173800" + " " + "album",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3488173800" + " " + "text albumTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "".concat(a.title, " - ").concat(a.year || '', " ").concat(a.releaseType)), __jsx("div", {
          className: "jsx-3488173800" + " " + "albumInfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3488173800" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-3488173800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-3488173800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-3488173800" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3488173800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-3488173800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-3488173800" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3488173800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }), a.soundcloud ? __jsx("form", {
          action: a.soundcloud,
          className: "jsx-3488173800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Soundcloud",
          className: "jsx-3488173800" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3488173800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3488173800" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-3488173800" + " " + "description text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, a.description))));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3488173800",
        __self: this
      }, ".container.jsx-3488173800{width:100%;margin:60px 0 40px 0;}img.jsx-3488173800{width:80%;padding:0;}.albumContainer.jsx-3488173800{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1% 0 1%;}.album.jsx-3488173800{margin:10px 0 10px 0;border:1px solid gray;}.albumInfo.jsx-3488173800{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 0 10px 0;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.twoThirds.jsx-3488173800{-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:60%;margin-top:10px;float:left;}.oneThird.jsx-3488173800{width:30%;margin-top:10px;float:left;}.text.jsx-3488173800{font-family:'Encode Sans Expanded',sans-serif;line-height:1.5;color:white;}.albumTitle.jsx-3488173800{text-align:center;}.callToAction.jsx-3488173800{width:80%;height:30px;background-color:#519ead;margin:10px 0 10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzRCLEFBR29DLEFBSUQsQUFJRyxBQU1RLEFBSVYsQUFNSyxBQU1OLEFBS3FDLEFBSzdCLEFBR1IsVUF0Q0EsQUEwQk0sQUFhSixDQTNDUyxBQWtCUixPQXNCakIsRUFuQ0EsQ0FTMEIsQ0E4QkcsSUFiZixNQTlCZCxLQStCQSxNQWpCQSxHQW9Cb0IsQ0FVSyxlQVRULE1BVWhCLENBdEJjLEtBaEJZLEFBNkIxQixLQVpvQixNQU5NLFVBT1osV0FDZCxDQVBpQyw2Q0FYWCxrQkFFdEIsNERBVUEiLCJmaWxlIjoiL1VzZXJzL2ZyYW5jaXNjb3JhZmFydC9Ecm9wYm94L3dlYl9yYWZhcnQvcmFmYXJ0LXJlYWN0L25leHRqcy9zcmMvQWxidW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFsYnVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IGFsYnVtVGl0bGVcIj5BbGJ1bXM8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbGJ1bXMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbGJ1bVwiIGtleT17YS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0IGFsYnVtVGl0bGVcIj57YCR7YS50aXRsZX0gLSAke2EueWVhciB8fCAnJ30gJHthLnJlbGVhc2VUeXBlfWB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW1JbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVUaGlyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy51cmxGb3IoYS5jb3Zlci5hc3NldC5fcmVmKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuYmFuZGNhbXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2EuYmFuZGNhbXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYWxsVG9BY3Rpb24gdGV4dFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkJ1eSBvbiBCYW5kY2FtcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT46IDxkaXY+UGljbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuc3BvdGlmeT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YS5zcG90aWZ5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMaXN0ZW4gb24gU3BvdGlmeVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT46IDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5zb3VuZGNsb3VkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXthLnNvdW5kY2xvdWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYWxsVG9BY3Rpb24gdGV4dFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxpc3RlbiBvbiBTb3VuZGNsb3VkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29UaGlyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gdGV4dFwiPnthLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDYwcHggMCA0MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMSUgMCAxJTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bUluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50d29UaGlyZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAub25lVGhpcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdFbmNvZGUgU2FucyBFeHBhbmRlZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bVRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FsbFRvQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5ZWFkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQWxidW1zO1xuIl19 */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.2cf706758fb3d4d70631.hot-update.js.map