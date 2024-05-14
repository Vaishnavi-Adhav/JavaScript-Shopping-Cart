/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCat": () => (/* binding */ addCat),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "getItemCount": () => (/* binding */ getItemCount),
/* harmony export */   "getItems": () => (/* binding */ getItems),
/* harmony export */   "getTotal": () => (/* binding */ getTotal),
/* harmony export */   "updateQuantity": () => (/* binding */ updateQuantity)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var cart = [];
function addCat(cat) {
  var existingItem = cart.find(function (item) {
    return item.cat === cat;
  });
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      cat: cat,
      quantity: 1
    });
  }
}
function updateQuantity(cat, quantity) {
  var existingItem = cart.find(function (item) {
    return item.cat === cat;
  });
  if (existingItem) {
    existingItem.quantity = Number(quantity);
  }
}
function clear() {
  cart = [];
}
function getItems() {
  return cart;
}
function getItemCount() {
  var count = 0;
  var _iterator = _createForOfIteratorHelper(cart),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      count += item.quantity;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return count;
}
function getTotal() {
  var total = 0;
  var _iterator2 = _createForOfIteratorHelper(cart),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      total += item.cat.price * item.quantity;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return total;
}

/***/ }),

/***/ "./src/cartUI.js":
/*!***********************!*\
  !*** ./src/cartUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCartUI": () => (/* binding */ updateCartUI)
/* harmony export */ });
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ "./src/cart.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


function updateCartUI() {
  var cartContainer = document.querySelector('.cart');
  var cartList = cartContainer.querySelector('.cart-list');
  var cartTotal = cartContainer.querySelector('.cart-total');
  var emptyCartMessage = document.querySelector('.empty-cart-message');
  var checkoutButton = cartContainer.querySelector('.checkout-button');
  cartList.innerHTML = '';
  if ((0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.getTotal)() === 0) {
    emptyCartMessage.classList.add('show');
    checkoutButton.classList.add('show');
    cartTotal.classList.add('show');
  } else {
    cartTotal.classList.remove('show');
    checkoutButton.classList.remove('show');
    emptyCartMessage.classList.remove('show');
    (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.getItems)().map(function (item) {
      if (item.quantity === 0) {
        return null;
      }
      var itemElement = document.createElement('li');
      var html = "\n                <img src=\"".concat(item.cat.image, "\" alt=\"").concat(item.cat.name, "\">\n                <p>").concat(item.cat.name, "</p>\n                <button class=\"cart-quantity-decrement\">-</button>\n                <input type=\"number\" min=\"0\" value=\"").concat(item.quantity, "\" class=\"cart-item-quantity\">\n                <button class=\"cart-quantity-increment\">+</button>\n                <p>$").concat((item.cat.price * item.quantity).toFixed(2), "</p>\n              ");
      itemElement.innerHTML = html;
      var quantityInput = itemElement.querySelector('input[type="number"]');
      var incrementButton = itemElement.querySelector('.cart-quantity-increment');
      var decrementButton = itemElement.querySelector('.cart-quantity-decrement');
      cartList.addEventListener('click', function (event) {
        if (event.target === incrementButton) {
          var newQuantity = Number(quantityInput.value) + 1;
          (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.updateQuantity)(item.cat, newQuantity);
          updateCartUI();
          (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
        } else if (event.target === decrementButton) {
          var _newQuantity = Number(quantityInput.value) - 1;
          (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.updateQuantity)(item.cat, _newQuantity);
          updateCartUI();
          (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
        } else if (event.target === quantityInput) {
          (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.updateQuantity)(item.cat, quantityInput.value);
          updateCartUI();
          (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
        }
      });
      cartList.appendChild(itemElement);
    });
    cartContainer.addEventListener('click', function (event) {
      if (event.target.classList.contains('checkout-button')) {
        (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.clear)();
        updateCartUI();
        (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
        cartTotal.classList.add('show');
      }
    });
    cartTotal.textContent = "Total: $".concat((0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.getTotal)().toFixed(2));
  }
}

/***/ }),

/***/ "./src/cats.js":
/*!*********************!*\
  !*** ./src/cats.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCats": () => (/* binding */ renderCats)
/* harmony export */ });
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ "./src/cart.js");
/* harmony import */ var _cartUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartUI */ "./src/cartUI.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");



var state = [{
  id: 0,
  name: 'Fluffball Burman',
  alt: 'Image of a cat from breed Fluffball',
  price: 0.99,
  image: 'http://placekitten.com/100/100?image=1',
  quantity: 0
}, {
  id: 1,
  name: 'General Mayhem',
  alt: 'Image of a cat from breed General Mayhem',
  price: 3.14,
  image: 'http://placekitten.com/100/100?image=2',
  quantity: 0
}, {
  id: 2,
  name: 'Fuzzy McFuzface',
  alt: 'Image of a cat from breed Fuzzy McFuzface',
  price: 2.73,
  image: 'http://placekitten.com/100/100?image=3',
  quantity: 0
}];
function renderCats() {
  var html = state.map(function (cat, index) {
    return "<div class=\"product\" data-index=\"".concat(index, "\">\n            <img src=").concat(cat.image, " alt=").concat(cat.alt, ">\n            <h2>").concat(cat.name, "</h2>\n            <p>$").concat(cat.price.toFixed(2), "</p>\n            <button class=\"add-to-cart-button\">Add to Cart</button>\n        </div>");
  }).join('');
  var catsList = document.querySelector('.product-list');
  catsList.innerHTML = html;
  catsList.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart-button')) {
      var index = e.target.closest('.product').dataset.index;
      (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.addCat)(state[index]);
      (0,_cartUI__WEBPACK_IMPORTED_MODULE_1__.updateCartUI)();
      (0,_header__WEBPACK_IMPORTED_MODULE_2__.renderHeader)();
    }
  });
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ "./src/cart.js");
/* harmony import */ var _cartUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartUI.js */ "./src/cartUI.js");


var cartVisible = false;
var headerEl = document.querySelector('.header');
var cartContainer = document.querySelector('.cart');
function renderHeader() {
  var itemCount = (0,_cart_js__WEBPACK_IMPORTED_MODULE_0__.getItemCount)();
  var viewCartButtonText = "View Cart".concat(itemCount > 0 ? " (".concat(itemCount, ")") : '');
  var viewCartButtonClass = cartVisible ? 'show' : '';
  var hideCartButtonClass = cartVisible ? '' : 'show';
  headerEl.innerHTML = "\n        <h1>Cat Shop</h1>\n        <button class=\"view-cart-button ".concat(viewCartButtonClass, "\">").concat(viewCartButtonText, "</button>\n        <button class=\"hide-cart-button ").concat(hideCartButtonClass, "\">Hide Cart</button>\n    ");
}
headerEl.addEventListener('click', function (event) {
  if (event.target.classList.contains('view-cart-button')) {
    cartContainer.classList.toggle('show');
    event.target.classList.toggle('show');
    headerEl.querySelector('.hide-cart-button').classList.toggle('show');
    cartVisible = true;
    (0,_cartUI_js__WEBPACK_IMPORTED_MODULE_1__.updateCartUI)();
  } else if (event.target.classList.contains('hide-cart-button')) {
    cartContainer.classList.toggle('show');
    headerEl.querySelector('.view-cart-button').classList.toggle('show');
    event.target.classList.toggle('show');
    cartVisible = false;
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _cats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cats.js */ "./src/cats.js");
/* harmony import */ var _cartUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartUI.js */ "./src/cartUI.js");



(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();
(0,_cats_js__WEBPACK_IMPORTED_MODULE_1__.renderCats)();
(0,_cartUI_js__WEBPACK_IMPORTED_MODULE_2__.updateCartUI)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map