exports.id = "component---src-templates-tags-js";
exports.ids = ["component---src-templates-tags-js"];
exports.modules = {

/***/ "./src/components/footer.module.scss":
/*!*******************************************!*\
  !*** ./src/components/footer.module.scss ***!
  \*******************************************/
/***/ (() => {

// Exports


/***/ }),

/***/ "./src/components/header.module.scss":
/*!*******************************************!*\
  !*** ./src/components/header.module.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeLink": () => (/* binding */ activeLink)
/* harmony export */ });
// Exports
var activeLink = "header-module--active-link--99V7O";


/***/ }),

/***/ "./src/templates/tags.module.scss":
/*!****************************************!*\
  !*** ./src/templates/tags.module.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "page": () => (/* binding */ page)
/* harmony export */ });
// Exports
var container = "tags-module--container--y0P9s";
var page = "tags-module--page--zWtSW";
var button = "tags-module--button--izIBe";


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u0421\u0434\u0435\u043B\u0430\u043B \u0441 \uD83D\uDC9C", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://timoshchuk.ru",
  rel: "noreferrer",
  target: "_blank"
}, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0422\u0438\u043C\u043E\u0449\u0443\u043A")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.module.scss */ "./src/components/header.module.scss");




const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    activeClassName: _components_header_module_scss__WEBPACK_IMPORTED_MODULE_2__.activeLink,
    to: "/"
  }, "\u041E\u0431\u043E \u043C\u043D\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    activeClassName: _components_header_module_scss__WEBPACK_IMPORTED_MODULE_2__.activeLink,
    to: "/blog"
  }, "\u0421\u0442\u0430\u0442\u044C\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    activeClassName: _components_header_module_scss__WEBPACK_IMPORTED_MODULE_2__.activeLink,
    to: "/tags"
  }, "\u0420\u0443\u0431\u0440\u0438\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    activeClassName: _components_header_module_scss__WEBPACK_IMPORTED_MODULE_2__.activeLink,
    to: "/contacts"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/templates/tags.js":
/*!*******************************!*\
  !*** ./src/templates/tags.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _tags_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags.module.scss */ "./src/templates/tags.module.scss");







const Tags = ({
  pageContext,
  data
}) => {
  const {
    tag
  } = pageContext;
  const {
    edges,
    totalCount,
    nodes
  } = data.allMdx; // const tagHeader = `${totalCount} ${totalCount === 1 ? 'запись' : 'записи'} tagged with "${tag}"`;

  const tagHeader = `Записи в рубрике «${tag}»`;
  console.log(nodes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: `${_tags_module_scss__WEBPACK_IMPORTED_MODULE_4__.container} ${_tags_module_scss__WEBPACK_IMPORTED_MODULE_4__.page}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, tagHeader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, edges.map(({
    node
  }) => {
    const {
      slug
    } = node;
    const {
      title,
      url
    } = node.frontmatter;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/${url}`
    }, title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/tags",
    className: _tags_module_scss__WEBPACK_IMPORTED_MODULE_4__.button
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0440\u0443\u0431\u0440\u0438\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

Tags.propTypes = {
  pageContext: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    tag: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)
  }),
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    allMdx: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
      totalCount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired),
      edges: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
        node: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
          frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
            title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)
          }),
          fields: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
            slug: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)
          })
        })
      }).isRequired)
    })
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);
const pageQuery = "3903687202";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-tags-js.js.map