(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-feature-module"],{

/***/ "./src/app/features/feature-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/feature-routing.module.ts ***!
  \****************************************************/
/*! exports provided: FeatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureRoutingModule", function() { return FeatureRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const featureRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        loadChildren: () => __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/app/features/product/product.module.ts")).then(m => m.ProductModule),
        path: 'products'
    },
    {
        loadChildren: () => __webpack_require__.e(/*! import() | cart-cart-module */ "cart-cart-module").then(__webpack_require__.bind(null, /*! ./cart/cart.module */ "./src/app/features/cart/cart.module.ts")).then(m => m.CartModule),
        path: 'cart'
    },
];
let FeatureRoutingModule = class FeatureRoutingModule {
};
FeatureRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(featureRoutes)]
    })
], FeatureRoutingModule);



/***/ }),

/***/ "./src/app/features/feature.module.ts":
/*!********************************************!*\
  !*** ./src/app/features/feature.module.ts ***!
  \********************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-routing.module */ "./src/app/features/feature-routing.module.ts");



let FeatureModule = class FeatureModule {
};
FeatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        exports: [],
        imports: [_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeatureRoutingModule"]],
        providers: []
    })
], FeatureModule);



/***/ })

}]);
//# sourceMappingURL=features-feature-module-es2015.js.map