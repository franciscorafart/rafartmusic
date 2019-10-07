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
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-3663835052" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-3663835052" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3663835052" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3663835052" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, a.title), __jsx("span", {
          className: "jsx-3663835052",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, " - ", a.releaseType), __jsx("p", {
          className: "jsx-3663835052" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, a.description)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3663835052",
        __self: this
      }, ".albumContainer.jsx-3663835052{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;paddind:20px 20px 0 20px;border:1px white;}.twoThirds.jsx-3663835052{width:70%;}oneThird.jsx-3663835052{width:30%;}.text.jsx-3663835052{font-family:'Encode Sans Expanded',sans-serif;color:white;text-align:center;}.callToAction.jsx-3663835052{width:60%;margin:20px 0 20px 20%;height:60px;background-color:#519ead;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzRCLEFBR3NDLEFBTUgsQUFHQSxBQUdxQyxBQUtyQyxVQVZkLEFBR0EsQUFRMkIsdUJBQ1gsWUFDYSxDQVBiLFlBQ00sWUFPdEIsSUFwQmUsRUFjZixTQWI2Qix5QkFDUixpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2ZyYW5jaXNjb3JhZmFydC9Ecm9wYm94L3dlYl9yYWZhcnQvcmFmYXJ0LXJlYWN0L25leHRqcy9zcmMvQWxidW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFsYnVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGJ1bXMnLCB0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFsYnVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVUaGlyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5jb3Zlcj8gPGltZyBzcmM9e3RoaXMucHJvcHMudXJsRm9yKGEuY292ZXIuYXNzZXQuX3JlZil9Lz46IDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmJhbmRjYW1wP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2EuYmFuZGNhbXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbGxUb0FjdGlvbiB0ZXh0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQnV5IG9uIEJhbmRjYW1wXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OiA8ZGl2PlBpY288L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnNwb3RpZnk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YS5zcG90aWZ5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYWxsVG9BY3Rpb24gdGV4dFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxpc3RlbiBvbiBTcG90aWZ5XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OiA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29UaGlyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPnthLnRpdGxlfTwvaDI+PHNwYW4+IC0ge2EucmVsZWFzZVR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2EuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmFsYnVtQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmQ6IDIwcHggMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudHdvVGhpcmRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25lVGhpcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRW5jb2RlIFNhbnMgRXhwYW5kZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYWxsVG9BY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUxOWVhZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFsYnVtcztcbiJdfQ== */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.f50b4e042c294e41d7bd.hot-update.js.map