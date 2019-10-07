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
        className: "jsx-3663835052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3663835052" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.albums.map(function (a) {
        __jsx("div", {
          key: a.slug,
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3663835052" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, a.cover ? __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }) : __jsx("div", {
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }), __jsx("form", {
          action: a.bandcamp,
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-3663835052" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-3663835052" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3663835052" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3663835052" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, a.title), __jsx("span", {
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, " - ", a.releaseType), __jsx("p", {
          className: "jsx-3663835052" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, a.description)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3663835052",
        __self: this
      }, ".albumContainer.jsx-3663835052{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;paddind:20px 20px 0 20px;border:1px white;}.twoThirds.jsx-3663835052{width:70%;}oneThird.jsx-3663835052{width:30%;}.text.jsx-3663835052{font-family:'Encode Sans Expanded',sans-serif;color:white;text-align:center;}.callToAction.jsx-3663835052{width:60%;margin:20px 0 20px 20%;height:60px;background-color:#519ead;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQzRCLEFBR3NDLEFBTUgsQUFHQSxBQUdxQyxBQUtyQyxVQVZkLEFBR0EsQUFRMkIsdUJBQ1gsWUFDYSxDQVBiLFlBQ00sWUFPdEIsSUFwQmUsRUFjZixTQWI2Qix5QkFDUixpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2ZyYW5jaXNjb3JhZmFydC9Ecm9wYm94L3dlYl9yYWZhcnQvcmFmYXJ0LXJlYWN0L25leHRqcy9zcmMvQWxidW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFsYnVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGJ1bXMnLCB0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFsYnVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVUaGlyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5jb3Zlcj8gPGltZyBzcmM9e3RoaXMucHJvcHMudXJsRm9yKGEuY292ZXIuYXNzZXQuX3JlZil9Lz46IDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YS5iYW5kY2FtcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJCdXkgb24gQmFuZGNhbXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5zcG90aWZ5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2Euc3BvdGlmeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMaXN0ZW4gb24gU3BvdGlmeVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjogPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvVGhpcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj57YS50aXRsZX08L2gyPjxzcGFuPiAtIHthLnJlbGVhc2VUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPnthLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5kOiAyMHB4IDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnR3b1RoaXJkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uZVRoaXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0VuY29kZSBTYW5zIEV4cGFuZGVkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FsbFRvQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTllYWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBbGJ1bXM7XG4iXX0= */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.c4cf48250b89b7f78d7c.hot-update.js.map