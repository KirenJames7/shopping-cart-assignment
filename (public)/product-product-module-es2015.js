(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/product/components/product.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/product/components/product.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar mode=\"indeterminate\" [hidden]=\"this.productService.products\"></mat-progress-bar>\n<mat-card>\n  <mat-card-title align=\"center\">Product List</mat-card-title>\n  <div class=\"container-fluid\">\n    <mat-grid-list cols=\"5\" rowHeight=\"1:1.5\" gutterSize=\"20px\">\n      <mat-grid-tile *ngFor=\"let product of this.productService.products\" class=\"mat-elevation-z8\">\n        <product-card doc_id=\"{{ product.doc_id }}\" id=\"{{ product.product.id }}\" name=\"{{ product.product.name }}\" photo=\"{{ product.product.photo }}\" price=\"{{ product.product.price.toFixed(2) }}\" likes=\"{{ product.product.likes }}\" dislikes=\"{{ product.product.dislikes }}\"></product-card>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./src/app/features/product/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/features/product/components/index.ts ***!
  \******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component */ "./src/app/features/product/components/product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return _product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]; });





/***/ }),

/***/ "./src/app/features/product/components/product.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/features/product/components/product.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-grid-tile {\n  border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9jb21wb25lbnRzL3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/features/product/components/product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/product/components/product.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");



let ProductComponent = class ProductComponent {
    constructor(productService) {
        this.productService = productService;
        this.prod = [];
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(data => {
            this.productService.products = data.map(res => { return { doc_id: res.payload.doc.id, product: res.payload.doc.data() }; });
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/product/components/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/features/product/components/product.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/features/product/index.ts":
/*!*******************************************!*\
  !*** ./src/app/features/product/index.ts ***!
  \*******************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/app/features/product/components/index.ts");


const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"],
];


/***/ }),

/***/ "./src/app/features/product/product-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/product/product-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/features/product/components/index.ts");




const productRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
        path: 'list'
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(productRoutes)]
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/features/product/product.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/product/product.module.ts ***!
  \****************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/app/features/product/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/features/product/product-routing.module.ts");
/* harmony import */ var _shared_shared_common_shared_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared-common/shared-common.module */ "./src/app/shared/shared-common/shared-common.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [..._index__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS"]],
        exports: [..._index__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoutingModule"],
            _shared_shared_common_shared_common_module__WEBPACK_IMPORTED_MODULE_6__["SharedCommonModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
        ],
        providers: []
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map