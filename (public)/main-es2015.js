(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-base></app-base>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<menu-bar></menu-bar>\n<mat-card>\n    <mat-card-header>\n        <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <form [formGroup]=\"loginForm\">\n            <table cellspacing=\"0\">\n                <tr>\n                    <td>\n                        <mat-form-field>\n                            <input matInput placeholder=\"Username\" formControlName=\"username\" required/>\n                        </mat-form-field>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <mat-form-field>\n                            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" required/>\n                        </mat-form-field>\n                    </td>\n                </tr>\n            </table>\n        </form>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button> <button mat-raised-button [routerLink]=\"[ '/register' ]\" color=\"primary\">Register</button>\n    </mat-card-actions>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"loginFacebook()\" ><i class=\"fa fa-facebook-f\" aria-hidden=\"true\"></i> Login with Facebook</button>\n    </mat-card-actions>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"loginGoogle()\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i> Login with Google</button>\n    </mat-card-actions>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"loginGithub()\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Login with Github</button>\n    </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/menu-bar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/menu-bar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>{{ title }}</span>\n    <span class=\"fill-remaining-space\"></span>\n    <span>\n      <product-search></product-search>\n    </span>\n    <span>\n      | <a mat-button [routerLink]=\"['/products']\" (click)=\"resetProductList()\">Products</a>\n    </span>\n    <span>\n      |\n      <a mat-button [routerLink]=\"['/cart']\">\n        <mat-icon>shopping_cart</mat-icon> - {{ this.navService.cart_total_price.toFixed(2) }} ( {{ this.navService.cart_total_quantity.toFixed(2) }} )\n      </a>\n    </span>\n    <span [hidden]=\"this.navService.isUserActive\">\n      | <a mat-button [routerLink]=\"['/register']\">Register</a>\n    </span>\n    <span [hidden]=\"this.navService.isUserActive\">\n      | <a mat-button [routerLink]=\"['/login']\">Login</a>\n    </span>\n    <span [hidden]=\"!this.navService.isUserActive\">\n      | <a mat-button href=\"javascript:;\">Welcome {{ displayName }} <img [hidden]=\"!photoUrl\" src=\"{{ photoUrl }}\" width=\"30\" class=\"profile-picture\" /></a>\n    </span>\n    <span [hidden]=\"!this.navService.isUserActive\">\n      |\n      <a mat-button (click)=\"doLogout()\">\n        <mat-icon>power_settings_new</mat-icon>\n      </a>\n    </span>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\n  <product-card doc_id=\"{{ data.doc_id }}\" id=\"{{ data.id }}\" name=\"{{ data.name }}\" photo=\"{{ data.photo }}\" price=\"{{ data.price.toFixed(2) }}\" likes=\"{{ data.likes }}\" dislikes=\"{{ data.dislikes }}\"></product-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/product-search/product-search.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/product-search/product-search.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button mat-raised-button disabled><mat-icon>search</mat-icon></button>\n<mat-form-field class=\"product-search\">\n  <input type=\"text\" placeholder=\"Search\" aria-label=\"Number\" matInput [formControl]=\"this.productService.searchControl\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectProduct($event)\">\n    <mat-option *ngFor=\"let product of filteredProducts | async\" [value]=\"product\">\n      {{ product }}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n<button mat-button class=\"search-clear\" (click)=\"clearSearch()\"><mat-icon>close</mat-icon></button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/register/register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/register/register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<menu-bar></menu-bar>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"registerForm\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required/>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" required/>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Confirm Password\" formControlName=\"confirm-password\" type=\"password\" required/>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"tryRegister()\" color=\"primary\">Register</button>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/base/base.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/base/base.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/main/main.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/main/main.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n  <div class=\"page-wrapper\">\n    <menu-bar></menu-bar>\n    <div class=\"page-wrapper-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared-common/components/product-card/product-card.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared-common/components/product-card/product-card.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"product-photo\">\n    <img src=\"{{ photo }}\" width=\"150\" />\n  </div>\n  <div class=\"product-name\" align=\"center\">\n    <h3 class=\"mat-title\">{{ name }}</h3>\n  </div>\n  <div class=\"product-details\">\n    <div class=\"product-info\" align=\"center\">\n      <span hidden >{{ doc_id }}</span>\n      <span class=\"mat-caption\">Product Code: {{ id }}</span>\n    </div>\n    <div class=\"product-rating\" align=\"center\">\n      <span class=\"mat-caption\">Likes: {{ likes }} | Dislikes: {{ dislikes }}</span>\n    </div>\n  </div>\n  <div class=\"product-rate\" align=\"center\">\n    <span [hidden]=\"!this.navService.isUserActive\">Rate: </span>\n    <button mat-icon-button mat-raised-button color=\"primary\" [hidden]=\"!this.navService.isUserActive\" (click)=\"like(doc_id, likes)\">\n      <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n    </button>\n    <span class=\"mat-headline\" [hidden]=\"!this.navService.isUserActive\"> | </span>\n    <button mat-icon-button mat-raised-button [hidden]=\"!this.navService.isUserActive\" (click)=\"dislike(doc_id, dislikes)\">\n      <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"product-price\" align=\"center\">\n    <h3>{{ price }}</h3>\n  </div>\n  <mat-grid-tile-footer>\n    <div class=\"product-actions\">\n      <button mat-icon-button mat-raised-button color=\"primary\" (click)=\"addQuantity()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n      <mat-form-field class=\"product-quantity\">\n        <input matInput [value]=\"quantity\" type=\"text\" readonly  class=\"product-quantity-input\"/>\n      </mat-form-field>\n      <button mat-icon-button mat-raised-button (click)=\"reduceQuantity()\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n      </button>\n      <button mat-raised-button class=\"product-add\" (click)=\"addToCart(doc_id, quantity)\"><mat-icon>add_shopping_cart</mat-icon> | Add to Cart</button>\n    </div>\n  </mat-grid-tile-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/components */ "./src/app/main/components/index.ts");
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components */ "./src/app/core/components/index.ts");





const routes = [
    {
        component: _main_components__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | features-feature-module */ "features-feature-module").then(__webpack_require__.bind(null, /*! ./features/feature.module */ "./src/app/features/feature.module.ts")).then(m => m.FeatureModule),
        path: ''
    },
    {
        component: _core_components__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        path: 'login'
    },
    {
        component: _core_components__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        path: 'register'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_3__["MainModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, MenuBarComponent, ProductSearchComponent, ProductSearchResultComponent, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });

/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "./src/app/core/components/menu-bar/menu-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__["MenuBarComponent"]; });

/* harmony import */ var _menu_bar_product_search_product_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-bar/product-search/product-search.component */ "./src/app/core/components/menu-bar/product-search/product-search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductSearchComponent", function() { return _menu_bar_product_search_product_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductSearchComponent"]; });

/* harmony import */ var _menu_bar_product_search_product_search_result_product_search_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-bar/product-search/product-search-result/product-search-result.component */ "./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductSearchResultComponent", function() { return _menu_bar_product_search_product_search_result_product_search_result_component__WEBPACK_IMPORTED_MODULE_4__["ProductSearchResultComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/core/components/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]; });









/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");








let LoginComponent = class LoginComponent {
    constructor(authService, router, fb, userService, cartService, db) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.userService = userService;
        this.cartService = cartService;
        this.db = db;
    }
    ngOnInit() {
        //initialize login form
        this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    /**
     * Email Password Login
     */
    login() {
        const formValues = this.loginForm.value;
        //check inputs
        if (Object.values(formValues).every(element => element)) {
            this.authService.doLogin(formValues).then(res => {
                //navigate to products
                this.navigateToProducts();
            }, err => {
                //alert error message
                alert(err.message);
            });
        }
        else {
            //alert empty fields
            alert("Username / Password Empty");
        }
    }
    /**
     * Facebook Login
     */
    loginFacebook() {
        this.authService.doFacebookLogin().then(res => {
            //check if new user
            if (res.additionalUserInfo.isNewUser) {
                //create new cart
                this.cartService.createNewCart();
            }
            //navigate to products
            this.navigateToProducts();
        }, err => {
            //alert error message
            alert(err.message);
        });
    }
    /**
     * Google Login
     */
    loginGoogle() {
        this.authService.doGoogleLogin().then(res => {
            //check if new user
            if (res.additionalUserInfo.isNewUser) {
                //create new cart
                this.cartService.createNewCart();
            }
            //navigate to products
            this.navigateToProducts();
        }, err => {
            //alert error message
            alert(err.message);
        });
    }
    /**
     * Github Login
     */
    loginGithub() {
        this.authService.doGitHubLogin().then(res => {
            //check if new user
            if (res.additionalUserInfo.isNewUser) {
                //create new cart
                this.cartService.createNewCart();
            }
            //navigate to products
            this.navigateToProducts();
        }, err => {
            //alert error message
            alert(err.message);
        });
    }
    /**
     * Navigate to products
     */
    navigateToProducts() {
        this.router.navigate(['/products']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/core/components/menu-bar/menu-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/menu-bar/menu-bar.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fill-remaining-space {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.profile-picture {\n  border: 2px solid;\n  border-radius: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/core/components/menu-bar/menu-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/menu-bar/menu-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");








let MenuBarComponent = class MenuBarComponent {
    constructor(angularFireAuth, userService, authService, navService, cartService, productService) {
        this.angularFireAuth = angularFireAuth;
        this.userService = userService;
        this.authService = authService;
        this.navService = navService;
        this.cartService = cartService;
        this.productService = productService;
        this._title = 'Shopping Cart';
        this._photoUrl = null;
        this.angularFireAuth.authState.subscribe((user) => {
            if (user) {
                switch (user.providerData[0].providerId) {
                    case 'password': {
                        this.userService.userDetails = {
                            uid: user.uid,
                            username: user.displayName
                        };
                        this.displayName = user.email;
                        this.photoUrl = null;
                        break;
                    }
                    case 'facebook.com': {
                        this.userService.userDetails = {
                            uid: user.uid,
                            username: user.displayName
                        };
                        this.displayName = user.displayName;
                        this.photoUrl = user.photoURL;
                        break;
                    }
                    case 'google.com': {
                        this.userService.userDetails = {
                            uid: user.uid,
                            username: user.displayName
                        };
                        this.displayName = user.displayName;
                        this.photoUrl = user.photoURL;
                        break;
                    }
                    case 'github.com': {
                        this.userService.userDetails = {
                            uid: user.uid,
                            username: user.displayName
                        };
                        this.displayName = user.displayName;
                        this.photoUrl = user.photoURL;
                        break;
                    }
                }
                this.navService.isUserActive = true;
            }
        });
        if (JSON.parse(localStorage.getItem('cart')) === null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        this.cartService.loadCart();
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get photoUrl() {
        return this._photoUrl;
    }
    set photoUrl(value) {
        this._photoUrl = value;
    }
    /**
     * Reset product search list
     */
    resetProductList() {
        this.productService.getProductsValue().subscribe(data => {
            this.productService.products = data;
            this.productService.searchControl.setValue("");
        });
    }
    /**
     * Logout user
     */
    doLogout() {
        this.displayName = "";
        //change user active state
        this.navService.isUserActive = false;
        //log out user
        this.authService.logout();
        //reload cart
        this.cartService.loadCart();
    }
    ngOnInit() { }
};
MenuBarComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["NavService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
MenuBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'menu-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/menu-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-bar.component.css */ "./src/app/core/components/menu-bar/menu-bar.component.css")).default]
    })
], MenuBarComponent);



/***/ }),

/***/ "./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.css ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-content {\n  padding: 0;\n}\n\n.product-actions {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.mat-dialog-container {\n  padding: 24px 24px 0px 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21lbnUtYmFyL3Byb2R1Y3Qtc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLXJlc3VsdC9wcm9kdWN0LXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbWVudS1iYXIvcHJvZHVjdC1zZWFyY2gvcHJvZHVjdC1zZWFyY2gtcmVzdWx0L3Byb2R1Y3Qtc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9kdWN0LWFjdGlvbnMge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggMjRweCAwcHggMjRweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ProductSearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchResultComponent", function() { return ProductSearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ProductSearchResultComponent = class ProductSearchResultComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.quantity = 0;
    }
};
ProductSearchResultComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ProductSearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-search-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-search-result.component.css */ "./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ProductSearchResultComponent);



/***/ }),

/***/ "./src/app/core/components/menu-bar/product-search/product-search.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/core/components/menu-bar/product-search/product-search.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-search {\n  font-weight: 300;\n  font-size: 16px;\n}\n\nbutton.search-clear {\n  padding: 0px;\n  min-width: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21lbnUtYmFyL3Byb2R1Y3Qtc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL21lbnUtYmFyL3Byb2R1Y3Qtc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1zZWFyY2gge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmJ1dHRvbi5zZWFyY2gtY2xlYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/core/components/menu-bar/product-search/product-search.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/core/components/menu-bar/product-search/product-search.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchComponent", function() { return ProductSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _product_search_result_product_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-search-result/product-search-result.component */ "./src/app/core/components/menu-bar/product-search/product-search-result/product-search-result.component.ts");







let ProductSearchComponent = class ProductSearchComponent {
    constructor(productService, router, dialog) {
        this.productService = productService;
        this.router = router;
        this.dialog = dialog;
        this._products = [];
    }
    get products() {
        return this._products;
    }
    set products(value) {
        this._products = value;
    }
    get filteredProducts() {
        return this._filteredProducts;
    }
    set filteredProducts(value) {
        this._filteredProducts = value;
    }
    /**
     * Open Search Result Modal
     * @param data
     */
    openDialog(data) {
        this.dialog.open(_product_search_result_product_search_result_component__WEBPACK_IMPORTED_MODULE_6__["ProductSearchResultComponent"], {
            width: '300px',
            data: data
        });
    }
    ngOnInit() {
        //get products
        this.productService.getProductsValue().subscribe(products => {
            products.filter(product => {
                //set product names to list
                this.products.push(product['name']);
            });
            //initialize search
            this.filteredProducts = this.productService.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filter(value)));
        });
    }
    /**
     * Filter products according to text entered
     * @param value: string
     * @private
     */
    _filter(value) {
        //convert text to lower case
        const filterValue = value.toLowerCase();
        //get matching products
        return this.products.filter(option => option.toLowerCase().includes(filterValue));
    }
    /**
     * On select event of search result
     * @param select:MatAutocompleteSelectedEvent
     */
    selectProduct(select) {
        //get products by name
        this.productService.getProductByName(select.option.value).subscribe(data => {
            let product = data.payload.doc.data();
            product[`doc_id`] = data.payload.doc.id;
            //open selected product in modal
            this.openDialog(product);
            this.clearSearch();
        });
    }
    /**
     * Clear search box
     */
    clearSearch() {
        //empty search bar
        this.productService.searchControl.setValue("");
    }
};
ProductSearchComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
ProductSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/menu-bar/product-search/product-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-search.component.css */ "./src/app/core/components/menu-bar/product-search/product-search.component.css")).default]
    })
], ProductSearchComponent);



/***/ }),

/***/ "./src/app/core/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");







let RegisterComponent = class RegisterComponent {
    constructor(fb, registerService, userService, cartService, db) {
        this.fb = fb;
        this.registerService = registerService;
        this.userService = userService;
        this.cartService = cartService;
        this.db = db;
    }
    ngOnInit() {
        //initialize register form
        this.registerForm = this.fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            "confirm-password": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])]
        });
    }
    /**
     * Email Password Register
     */
    tryRegister() {
        const formValues = this.registerForm.value;
        //check empty inputs
        if (!Object.values(formValues).every(element => element)) {
            alert("empty inputs");
            return false;
        }
        //check passwords
        if (formValues.password && formValues.password !== formValues["confirm-password"]) {
            alert("passwords do not match");
            return false;
        }
        //register email password
        this.registerService.doRegister(formValues).then(res => {
            //check if new user
            if (res.additionalUserInfo.isNewUser) {
                //create new cart
                this.cartService.createNewCart();
            }
            //success message
            this.errorMessage = "";
            this.successMessage = "Your account has been created";
        }, err => {
            //error message
            this.errorMessage = err.message;
            this.successMessage = "";
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/register/register.component.html")).default
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared-common/shared-common.module */ "./src/app/shared/shared-common/shared-common.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/core/components/index.ts");








let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [..._index__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS"]],
        exports: [..._index__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS"]],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"].forRoot()
        ],
        providers: [
            ..._index__WEBPACK_IMPORTED_MODULE_2__["SERVICES"]
        ],
        entryComponents: [
            _components__WEBPACK_IMPORTED_MODULE_7__["ProductSearchResultComponent"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: COMPONENTS, SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES", function() { return SERVICES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/app/core/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");



const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    _components__WEBPACK_IMPORTED_MODULE_1__["MenuBarComponent"],
    _components__WEBPACK_IMPORTED_MODULE_1__["ProductSearchComponent"],
    _components__WEBPACK_IMPORTED_MODULE_1__["ProductSearchResultComponent"],
    _components__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
];
const SERVICES = [
    _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
    _services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
    _services__WEBPACK_IMPORTED_MODULE_2__["NavService"],
    _services__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]
];


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let AuthService = class AuthService {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    /**
     * Email Password Login
     * @param formValues
     */
    doLogin(formValues) {
        return this.afAuth.auth.signInWithEmailAndPassword(formValues.username, formValues.password);
    }
    /**
     * Facebook Login
     */
    doFacebookLogin() {
        let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
    }
    /**
     * Google Login
     */
    doGoogleLogin() {
        let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        return this.afAuth.auth.signInWithPopup(provider);
    }
    /**
     * Github Login
     */
    doGitHubLogin() {
        let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GithubAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
    }
    /**
     * Logout User
     */
    logout() {
        this.afAuth.auth.signOut().then((res) => {
            //navigate to home
            this.router.navigate(['/']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: AuthService, NavService, RegisterService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.service */ "./src/app/core/services/nav.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return _nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]; });

/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.service */ "./src/app/core/services/register.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]; });








/***/ }),

/***/ "./src/app/core/services/nav.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/nav.service.ts ***!
  \**********************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavService = class NavService {
    constructor() {
        this._isUserActive = false;
        this._cart_total_price = 0;
        this._cart_total_quantity = 0;
        this._items = [];
    }
    get isUserActive() {
        return this._isUserActive;
    }
    set isUserActive(value) {
        this._isUserActive = value;
    }
    get cart_total_quantity() {
        return this._cart_total_quantity;
    }
    set cart_total_quantity(value) {
        this._cart_total_quantity = value;
    }
    get cart_total_price() {
        return this._cart_total_price;
    }
    set cart_total_price(value) {
        this._cart_total_price = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
};
NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavService);



/***/ }),

/***/ "./src/app/core/services/register.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);



let RegisterService = class RegisterService {
    constructor() { }
    /**
     * Email Password Register
     * @param formValues: any
     */
    doRegister(formValues) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(formValues.email, formValues.password);
    }
};
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RegisterService);



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let UserService = class UserService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this._user = afAuth.authState;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get userDetails() {
        return this._userDetails;
    }
    set userDetails(value) {
        this._userDetails = value;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/main/components/base/base.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/components/base/base.component.ts ***!
  \********************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaseComponent = class BaseComponent {
};
BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/base/base.component.html")).default
    })
], BaseComponent);



/***/ }),

/***/ "./src/app/main/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/main/components/index.ts ***!
  \******************************************/
/*! exports provided: BaseComponent, MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/base.component */ "./src/app/main/components/base/base.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]; });

/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/components/main/main.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]; });






/***/ }),

/***/ "./src/app/main/components/main/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/components/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/main/main.component.html")).default
    })
], MainComponent);



/***/ }),

/***/ "./src/app/main/index.ts":
/*!*******************************!*\
  !*** ./src/app/main/index.ts ***!
  \*******************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/app/main/components/index.ts");


const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"],
    _components__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
];


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/main/index.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/main/components/index.ts");







let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [..._index__WEBPACK_IMPORTED_MODULE_3__["COMPONENTS"]],
        exports: [_components__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        providers: []
    })
], MainModule);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: COMPONENTS, SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES", function() { return SERVICES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-common/components */ "./src/app/shared/shared-common/components/index.ts");



const COMPONENTS = [
    _shared_common_components__WEBPACK_IMPORTED_MODULE_2__["ProductCardComponent"]
];
const SERVICES = [
    _services__WEBPACK_IMPORTED_MODULE_1__["CartService"],
    _services__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
];


/***/ }),

/***/ "./src/app/shared/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");






let CartService = class CartService {
    constructor(navService, db, userService, auth) {
        this.navService = navService;
        this.db = db;
        this.userService = userService;
        this.auth = auth;
        this._total_quantity = 0;
        this._total_price = 0;
        if (this.navService.isUserActive) {
            this.loadCart();
        }
    }
    get userCart() {
        return this._userCart;
    }
    set userCart(value) {
        this._userCart = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    get total_quantity() {
        return this._total_quantity;
    }
    set total_quantity(value) {
        this._total_quantity = value;
    }
    get total_price() {
        return this._total_price;
    }
    set total_price(value) {
        this._total_price = value;
    }
    /**
     * Get user cart
     */
    getUserCart() {
        if (this.navService.isUserActive) {
            return this.db.doc(`carts/${this.userService.userDetails.uid}`).valueChanges();
        }
    }
    /**
     * Create New Cart
     */
    createNewCart() {
        this.db.collection('carts').doc(`${this.userService.userDetails.uid}`).set({ cart: [] });
    }
    /**
     * Get cart product index by doc
     * @param doc_id: string
     */
    getCartProductIndexByDoc(doc_id) {
        return this.userCart.cart.findIndex(list => list.doc_id === doc_id);
    }
    /**
     * Get cart product index by id
     * @param cart: array
     * @param id: string
     */
    getCartProductIndexByID(cart, id) {
        return cart.findIndex(list => list.product.id === id);
    }
    /**
     * Generate product as reference
     */
    generateProductReference() {
        this.userCart.cart.forEach(list => {
            //generate product reference
            list.product = this.db.doc(`products/${list.doc_id}`).ref;
            //delete doc id
            delete list.doc_id;
        });
    }
    /**
     * Prepare user cart
     * @param doc_id: string
     * @param quantity: number
     * @param product: object
     */
    prepUserCart(doc_id, quantity, product) {
        //check if product exists in cart
        if (this.userCart.cart[this.getCartProductIndexByDoc(doc_id)] !== undefined) {
            //update existing cart item quantity
            this.userCart.cart[this.getCartProductIndexByDoc(doc_id)].quantity += quantity;
        }
        else {
            //add new item to cart
            this.userCart.cart.push({ doc_id: doc_id, product: product, quantity: quantity });
        }
        //generate product reference
        this.generateProductReference();
    }
    /**
     * Prepare guest cart
     * @param product: object
     * @param quantity: number
     */
    prepGuestCart(product, quantity) {
        //load cart from local storage
        let cart = JSON.parse(localStorage.getItem('cart'));
        //check if product exists in cart
        if (cart[this.getCartProductIndexByID(cart, product['id'])] !== undefined) {
            //update existing cart item quantity
            cart[this.getCartProductIndexByID(cart, product['id'])].quantity += quantity;
        }
        else {
            //add new item to cart
            cart.push({ product: product, quantity: quantity });
        }
        //stringify cart
        return JSON.stringify(cart);
    }
    /**
     * Update user cart
     */
    updateUserCart() {
        this.db.doc(`carts/${this.userService.userDetails.uid}`).set({ cart: this.userCart.cart });
    }
    /**
     * Update Cart Item
     * @param doc_id: string
     * @param quantity: number
     * @param product: object
     */
    updateCartItem(doc_id, quantity, product) {
        //check if user active
        if (this.navService.isUserActive) {
            //prepare user cart
            this.prepUserCart(doc_id, quantity, product);
            //update user cart
            this.updateUserCart();
        }
        else {
            //update guest cart
            localStorage.setItem('cart', this.prepGuestCart(product, quantity));
            //load cart
            this.loadCart();
        }
    }
    /**
     * Remove cart item
     * @param doc_id: string
     * @param id: string
     */
    deleteCartItem(doc_id, id) {
        //check if user active
        if (this.navService.isUserActive) {
            //remove cart item
            this.userCart.cart.splice(this.userCart.cart.findIndex(list => list.doc_id === doc_id), 1);
            //render cart
            this.renderCart(this.userCart.cart);
            //generate product reference
            this.generateProductReference();
            //update user cart
            this.updateUserCart();
        }
        else {
            //get guest cart
            let cart = JSON.parse(localStorage.getItem('cart'));
            //remove item
            cart.splice(cart.findIndex(list => list.id === id), 1);
            //render cart
            this.renderCart(cart);
            //update guest cart
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    /**
     * Check if cart is empty
     */
    isCartEmpty() {
        //check if user active
        if (this.navService.isUserActive) {
            //check user items
            return !!this.navService.items.length;
        }
        else {
            //check guest cart
            if (JSON.parse(localStorage.getItem('cart')).length !== undefined) {
                return !!JSON.parse(localStorage.getItem('cart')).length;
            }
        }
    }
    /**
     * Render Cart
     * @param cart: array
     * @param cart_total_quantity: number
     * @param cart_total_price: number
     */
    renderCart(cart, cart_total_quantity = 0, cart_total_price = 0) {
        //Reset cart items
        this.navService.items = [];
        //loop through cart
        for (let i = 0; i < cart.length; i++) {
            //add items to cart
            this.navService.items.push({ product: cart[i].product, quantity: cart[i].quantity, doc_id: cart[i].doc_id });
            //update quantity total & price total
            cart_total_quantity += cart[i].quantity;
            cart_total_price += cart[i].product.price * cart[i].quantity;
            this.navService.cart_total_quantity = cart_total_quantity;
            this.navService.cart_total_price = cart_total_price;
        }
    }
    /**
     * Load Cart
     */
    loadCart() {
        //check if user active
        if (this.navService.isUserActive) {
            //get user cart
            this.getUserCart().subscribe(data => {
                this.userCart = data;
                //map through cart
                this.userCart.cart.map((list, index) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    //get product from product reference
                    yield list.product.get().then((snap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        list.product = yield snap.data();
                        list.doc_id = snap.id;
                        //check last cart item
                        if (this.userCart.cart.length === index + 1) {
                            //wait for reference
                            setTimeout(() => {
                                //render user cart
                                this.renderCart(this.userCart.cart);
                            }, 100);
                        }
                    }));
                }));
            });
        }
        else {
            //render user cart
            this.renderCart(JSON.parse(localStorage.getItem('cart')));
        }
    }
};
CartService.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["NavService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CartService);



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: ProductService, CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/shared/services/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]; });

/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]; });






/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ProductService = class ProductService {
    constructor(db) {
        this.db = db;
        this._searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    get products() {
        return this._products;
    }
    set products(value) {
        this._products = value;
    }
    get searchControl() {
        return this._searchControl;
    }
    set searchControl(value) {
        this._searchControl = value;
    }
    /**
     * Get Products
     */
    getProducts() {
        return this.db.collection('products').snapshotChanges();
    }
    /**
     * Get Product Values
     */
    getProductsValue() {
        return this.db.collection('products').valueChanges();
    }
    /**
     * Get Product By Name
     * @param name: string
     */
    getProductByName(name) {
        return this.db.collection('products', ref => ref.where('name', '==', name)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(data => data));
    }
    /**
     * Get Product By ID
     * @param id: string
     */
    getProductById(id) {
        return this.db.collection('products', ref => ref.where('id', '==', id)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(data => data));
    }
    /**
     * Update Product
     * @param doc_id: string
     * @param data: object
     */
    updateProduct(doc_id, data) {
        this.db.doc(`products/${doc_id}`).set(data, { merge: true });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



/***/ }),

/***/ "./src/app/shared/shared-common/components/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/shared-common/components/index.ts ***!
  \**********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/shared/shared-common/components/product-card/product-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__["ProductCardComponent"]; });





/***/ }),

/***/ "./src/app/shared/shared-common/components/product-card/product-card.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/shared-common/components/product-card/product-card.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-photo {\n  text-align: center;\n  height: 190px;\n  margin-top: auto;\n  margin-bottom: auto;\n  padding: 0px 20px;\n}\n\n.product-details {\n  vertical-align: top;\n}\n\n.product-rate {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.product-actions {\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 100%;\n  background: black;\n}\n\n.product-add {\n  float: right;\n  margin-top: 5px;\n}\n\n.product-rate span {\n  color: #673ab7;\n}\n\n.product-price {\n  width: 100%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.product-quantity {\n  width: 30px;\n}\n\n.product-quantity-input {\n  color: white;\n  text-align: center;\n}\n\n.fa-thumbs-down {\n  color: #673ab7;\n}\n\n.product-name {\n  margin: 20px 0px 0px 0px;\n}\n\n.mat-grid-tile-footer {\n  background: black;\n}\n\n.mat-dialog-container.product-actions {\n  /*why not working??*/\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC1jb21tb24vY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGFyZWQtY29tbW9uL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtcGhvdG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTkwcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnByb2R1Y3QtcmF0ZSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5wcm9kdWN0LWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5wcm9kdWN0LWFkZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucHJvZHVjdC1yYXRlIHNwYW4ge1xuICBjb2xvcjogIzY3M2FiNztcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnByb2R1Y3QtcXVhbnRpdHkge1xuICB3aWR0aDogMzBweDtcbn1cblxuLnByb2R1Y3QtcXVhbnRpdHktaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhLXRodW1icy1kb3duIHtcbiAgY29sb3I6ICM2NzNhYjc7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG59XG5cbi5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIucHJvZHVjdC1hY3Rpb25zIHtcbiAgLyp3aHkgbm90IHdvcmtpbmc/PyovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/shared-common/components/product-card/product-card.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/shared-common/components/product-card/product-card.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/shared/services/index.ts");




let ProductCardComponent = class ProductCardComponent {
    constructor(navService, productService, cartService) {
        this.navService = navService;
        this.productService = productService;
        this.cartService = cartService;
        this.quantity = 0;
    }
    /**
     * Add product quantity
     */
    addQuantity() {
        this.quantity += 1;
    }
    /**
     * Reduce product quantity
     */
    reduceQuantity() {
        this.quantity !== 0 ? this.quantity -= 1 : this.quantity = 0;
    }
    /**
     * Update Product Like Count
     * @param doc_id: string
     * @param likes: number
     */
    like(doc_id, likes) {
        //set the new like count
        this.likes = Number(likes) + 1;
        //update like count
        this.productService.updateProduct(doc_id, { likes: this.likes });
    }
    /**
     * Update Product Dislike Count
     * @param doc_id: string
     * @param dislikes: number
     */
    dislike(doc_id, dislikes) {
        //set the new dislike count
        this.dislikes = Number(dislikes) + 1;
        //update dislike count
        this.productService.updateProduct(doc_id, { dislikes: this.dislikes });
    }
    /**
     * Get a product
     * @param doc_id: string
     */
    getProduct(doc_id) {
        return this.productService.products[this.productService.products.findIndex(product => product['doc_id'] === doc_id)]['product'];
    }
    /**
     * Stop negative quantity
     * @param quantity: number
     */
    validQuantityCheck(quantity) {
        return quantity && true;
    }
    /**
     * Reset product quantity to 0
     */
    resetProductQuantity() {
        this.quantity = 0;
    }
    invalidQuantityAlert() {
        alert("Please update quantity to proceed.");
    }
    successAlert() {
        alert(`Successfully added ${this.quantity} NOS of ${this.name} to your cart`);
        //reset product quantity on seccess
        this.resetProductQuantity();
    }
    /**
     * Add Product to Cart
     * @param doc_id: string
     * @param quantity: number
     */
    addToCart(doc_id, quantity) {
        //validate quantity not 0
        if (this.validQuantityCheck(quantity)) {
            //update cart
            this.cartService.updateCartItem(doc_id, quantity, this.getProduct(doc_id));
            this.successAlert();
        }
        else {
            this.invalidQuantityAlert();
        }
    }
};
ProductCardComponent.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["NavService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "doc_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "price", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "photo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "likes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "dislikes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "quantity", void 0);
ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared-common/components/product-card/product-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-card.component.css */ "./src/app/shared/shared-common/components/product-card/product-card.component.css")).default]
    })
], ProductCardComponent);



/***/ }),

/***/ "./src/app/shared/shared-common/shared-common.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/shared-common/shared-common.module.ts ***!
  \**************************************************************/
/*! exports provided: SharedCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCommonModule", function() { return SharedCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../index */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
var SharedCommonModule_1;




















let SharedCommonModule = SharedCommonModule_1 = class SharedCommonModule {
    static forRoot() {
        return {
            ngModule: SharedCommonModule_1,
            providers: [..._index__WEBPACK_IMPORTED_MODULE_12__["SERVICES"]]
        };
    }
};
SharedCommonModule = SharedCommonModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            ..._index__WEBPACK_IMPORTED_MODULE_12__["COMPONENTS"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _index__WEBPACK_IMPORTED_MODULE_12__["COMPONENTS"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["firebaseConfig"]),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
        ],
        providers: [
            ..._index__WEBPACK_IMPORTED_MODULE_12__["SERVICES"]
        ]
    })
], SharedCommonModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
const firebaseConfig = {
    apiKey: "AIzaSyDr-_U10bJZacY6j1wiuzOjRkpB438uemU",
    authDomain: "shopping-cart-assignment.firebaseapp.com",
    databaseURL: "https://shopping-cart-assignment.firebaseio.com",
    projectId: "shopping-cart-assignment",
    storageBucket: "shopping-cart-assignment.appspot.com",
    messagingSenderId: "613857725618",
    appId: "1:613857725618:web:bc4dee85e3e052dbb94dab",
    measurementId: "G-8JP0N3KQJK"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kirenj/shopping-cart-assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map