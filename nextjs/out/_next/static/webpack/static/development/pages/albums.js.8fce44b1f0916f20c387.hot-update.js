webpackHotUpdate("static/development/pages/albums.js",{

/***/ "./pages/albums.js":
/*!*************************!*\
  !*** ./pages/albums.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _src_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Container */ "./src/Container.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");




var Albums = _src_Container__WEBPACK_IMPORTED_MODULE_2__["default"];
Albums.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var logo, albums, menu, favicon;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch('*[_type == "generalAssets" && slug.current == "rafart-logo"][0]{title, mainImage}');

        case 2:
          logo = _context.sent;
          _context.next = 5;
          return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch('*[_type == "albums"]{title, name, slug, releaseType, year, description, cover, spotify, bandcamp, soundcloud}');

        case 5:
          albums = _context.sent;
          _context.next = 8;
          return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch('*[_type == "menu"]{title, order, linkString, icon, headerMenu, mainMenu, socialMedia, iconClass}');

        case 8:
          menu = _context.sent;
          _context.next = 11;
          return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch('*[_type == "generalAssets" && slug.current == "favicon"][0]{mainImage}');

        case 11:
          favicon = _context.sent;
          return _context.abrupt("return", {
            logo: logo,
            albums: albums,
            menu: menu,
            favicon: favicon,
            page: 'albums'
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.8fce44b1f0916f20c387.hot-update.js.map