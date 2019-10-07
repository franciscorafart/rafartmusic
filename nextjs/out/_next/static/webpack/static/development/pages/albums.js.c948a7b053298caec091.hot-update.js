webpackHotUpdate("static/development/pages/albums.js",{

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
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
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ "./client.js");





var _jsxFileName = "/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var Cover =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cover, _Component);

  function Cover(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cover);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cover).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cover, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        className: "jsx-1088150471" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1088150471" + " " + "one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("img", {
        src: this.props.urlFor(this.props.logo.mainImage.asset._ref),
        className: "jsx-1088150471",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1088150471" + " " + "half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1088150471" + " " + "menuItems",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.menu ? this.props.menu.filter(function (item) {
        return item.headerMenu;
      }).sort(function (a, b) {
        return a.order < b.order ? -1 : 1;
      }).map(function (item) {
        return __jsx("li", {
          key: item.slug,
          className: "jsx-1088150471" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, __jsx("a", {
          href: item.linkString,
          className: "jsx-1088150471" + " " + ((item.slug === _this.props.selectedPage ? 'selected' : '') || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, item.title));
      }) : __jsx("li", {
        className: "jsx-1088150471" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Menu Loading..."))), __jsx("div", {
        className: "jsx-1088150471" + " " + "one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-1088150471" + " " + "menuItems",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.props.menu ? this.props.menu.filter(function (item) {
        return item.socialMedia;
      }).map(function (item) {
        return __jsx("li", {
          key: item.slug,
          className: "jsx-1088150471" + " " + "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, __jsx("a", {
          href: item.linkString,
          className: "jsx-1088150471",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("i", {
          className: "jsx-1088150471" + " " + (item.iconClass || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })));
      }) : __jsx("li", {
        className: "jsx-1088150471" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Loading..."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1088150471",
        __self: this
      }, ".header.jsx-1088150471{height:50px;width:100%;}.text.jsx-1088150471{font-family:'Encode Sans Expanded',sans-serif;font-size:0.8em;color:white;list-style-type:none;}.one-quarter.jsx-1088150471{width:25%;height:40px;float:left;}.one-quarter.jsx-1088150471 img.jsx-1088150471{height:30px;margin:10px 0 0 20px;}.half.jsx-1088150471{width:50%;float:left;}a.jsx-1088150471{-webkit-text-decoration:none;text-decoration:none;color:white;}.menuItems.jsx-1088150471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menuItems.jsx-1088150471 a.jsx-1088150471:hover{color:#c4ed21;}.selected.jsx-1088150471{color:#c4ed21;}@media all and (max-width:600px){.menuItems.jsx-1088150471{-webkit-flex-flow:column wrap;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;padding:0;}a.jsx-1088150471{text-align:center;padding:10px;border-top:1px solid rgba(255,255,255,0.3);border-bottom:1px solid rgba(0,0,0,0.1);}.menuItems.jsx-1088150471 li.jsx-1088150471:last-of-type a.jsx-1088150471{border-bottom:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGdDLEFBR3lDLEFBSW1DLEFBTXJDLEFBS0UsQUFJRixBQUlXLEFBSVIsQUFLQyxBQUdBLEFBSW9CLEFBTVosQUFPQyxVQXpDWixBQVNBLEVBbkJBLEFBZVUsRUFpQnpCLEFBR0EsSUFVcUIsQ0FPZixFQWhDTixDQVRlLENBVmYsT0FzQzhCLENBT3FCLEVBbENuRCxBQUlBLGFBWm9CLElBbUJKLFlBbEJBLEFBbUJoQixZQWxCeUIsQUFxQkYsQUFvQnlCLHFCQXhDaEQsYUFpQ2tCLE1BUVosSUFQQSx5QkFiMkIsMkhBQ2pDIiwiZmlsZSI6Ii9Vc2Vycy9mcmFuY2lzY29yYWZhcnQvRHJvcGJveC93ZWJfcmFmYXJ0L3JhZmFydC1yZWFjdC9uZXh0anMvc3JjL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCdcblxuXG5jbGFzcyBDb3ZlciBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZS1xdWFydGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy51cmxGb3IodGhpcy5wcm9wcy5sb2dvLm1haW5JbWFnZS5hc3NldC5fcmVmKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudUl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tZW51P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVudS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPT4gaXRlbS5oZWFkZXJNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zb3J0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSxiKSA9PiBhLm9yZGVyPGIub3JkZXI/LTE6MSkubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rU3RyaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0uc2x1ZyA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZFBhZ2U/ICdzZWxlY3RlZCc6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dFwiPk1lbnUgTG9hZGluZy4uLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUtcXVhcnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVJdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVudT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1lbnUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zb2NpYWxNZWRpYSkubWFwKGl0ZW0gPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua1N0cmluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbkNsYXNzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHRcIj5Mb2FkaW5nLi4uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0VuY29kZSBTYW5zIEV4cGFuZGVkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAub25lLXF1YXJ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAub25lLXF1YXJ0ZXIgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFsZiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudUl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudUl0ZW1zIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzRlZDIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M0ZWQyMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWVudUl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWVudUl0ZW1zIGxpOmxhc3Qtb2YtdHlwZSBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3ZlclxuIl19 */\n/*@ sourceURL=/Users/franciscorafart/Dropbox/web_rafart/rafart-react/nextjs/src/Header.js */"));
    }
  }]);

  return Cover;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=albums.js.c948a7b053298caec091.hot-update.js.map