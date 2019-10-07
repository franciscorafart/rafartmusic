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
        className: "jsx-1221607180" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1221607180" + " " + "text albumTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Albums"), __jsx("div", {
        className: "jsx-1221607180" + " " + "albumContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.albums.map(function (a) {
        return __jsx("div", {
          key: a.slug,
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1221607180" + " " + "text albumTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "".concat(a.title, " - ").concat(a.year || '', " ").concat(a.releaseType)), __jsx("div", {
          className: "jsx-1221607180" + " " + "album",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1221607180" + " " + "oneThird",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, __jsx("img", {
          src: _this.props.urlFor(a.cover.asset._ref),
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }), a.bandcamp ? __jsx("form", {
          action: a.bandcamp,
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Buy on Bandcamp",
          className: "jsx-1221607180" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Pico"), a.spotify ? __jsx("form", {
          action: a.spotify,
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Spotify",
          className: "jsx-1221607180" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }), a.soundcloud ? __jsx("form", {
          action: a.soundcloud,
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx("input", {
          type: "submit",
          value: "Listen on Soundcloud",
          className: "jsx-1221607180" + " " + "callToAction text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        })) : __jsx("div", {
          className: "jsx-1221607180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-1221607180" + " " + "twoThirds",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1221607180" + " " + "description text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, a.description))));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1221607180",
        __self: this
      }, ".container.jsx-1221607180{width:100%;margin:60px 0 40px 0;}img.jsx-1221607180{width:70%;padding:0;}.albumContainer.jsx-1221607180{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.album.jsx-1221607180{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:10px 0 10px 0;border:1px solid gray;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.twoThirds.jsx-1221607180{-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:60%;margin-top:10px;float:left;}.oneThird.jsx-1221607180{width:30%;margin-top:10px;float:left;}.text.jsx-1221607180{font-family:'Encode Sans Expanded',sans-serif;color:white;}.albumTitle.jsx-1221607180{text-align:center;}.callToAction.jsx-1221607180{width:70%;height:30px;background-color:#519ead;margin:10px 0 10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzRCLEFBR29DLEFBSUQsQUFJRyxBQUlGLEFBT0ssQUFNTixBQUtxQyxBQUk3QixBQUdSLFVBaENBLEFBcUJNLEFBWUosQ0FyQ1MsQUFZUixPQXNCakIsRUE3QkEsRUFpQzZCLElBWmYsTUF6QmQsS0EwQkEsU0FHZ0IsQ0FTUyxXQVJ6QixVQVNBLENBckJjLEtBWFksS0FZTixNQVBLLFVBUVgsV0FQWSxBQVExQixzQkFQaUMsd0JBTmpDLG1HQU9BIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0FsYnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBBbGJ1bXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCBhbGJ1bVRpdGxlXCI+QWxidW1zPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWxidW1zLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXthLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQgYWxidW1UaXRsZVwiPntgJHthLnRpdGxlfSAtICR7YS55ZWFyIHx8ICcnfSAke2EucmVsZWFzZVR5cGV9YH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lVGhpcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMudXJsRm9yKGEuY292ZXIuYXNzZXQuX3JlZil9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmJhbmRjYW1wP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXthLmJhbmRjYW1wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJCdXkgb24gQmFuZGNhbXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OiA8ZGl2PlBpY288L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnNwb3RpZnk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2Euc3BvdGlmeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbGxUb0FjdGlvbiB0ZXh0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTGlzdGVuIG9uIFNwb3RpZnlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+OiA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuc291bmRjbG91ZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YS5zb3VuZGNsb3VkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uIHRleHRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMaXN0ZW4gb24gU291bmRjbG91ZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT46IDxkaXY+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvVGhpcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIHRleHRcIj57YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDAgNDBweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWxidW1Db250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFsYnVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudHdvVGhpcmRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm9uZVRoaXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRW5jb2RlIFNhbnMgRXhwYW5kZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hbGJ1bVRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FsbFRvQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5ZWFkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQWxidW1zO1xuIl19 */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Albums.js */"));
    }
  }]);

  return Albums;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.ae7ec2d37e81a8d939c7.hot-update.js.map