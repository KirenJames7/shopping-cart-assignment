function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cart/components/cart-card/cart-card.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/cart/components/cart-card/cart-card.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesCartComponentsCartCardCartCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"cart-actions\">\n    <button mat-raised-button mat-icon-button  color=\"warn\" class=\"cart-remove\" (click)=\"removeItem(doc_id, id)\" ><mat-icon>close</mat-icon></button>\n  </div>\n  <div class=\"product-photo\">\n    <img src=\"{{ photo }}\" width=\"150\" />\n  </div>\n  <div class=\"product-name\" align=\"center\">\n    <h3 class=\"mat-title\">{{ name }}</h3>\n  </div>\n  <div class=\"product-details\">\n    <div class=\"product-info\" align=\"center\">\n      <span hidden >{{ doc_id }}</span>\n      <span class=\"mat-caption\">Product Code: {{ id }}</span>\n    </div>\n    <div class=\"product-rating\" align=\"center\">\n      <span class=\"mat-caption\">Likes: {{ likes }} | Dislikes: {{ dislikes }}</span>\n    </div>\n  </div>\n  <div class=\"product-rate\" align=\"center\">\n    <span [hidden]=\"!this.navService.isUserActive\">Rate: </span>\n    <button mat-icon-button mat-raised-button color=\"primary\" [hidden]=\"!this.navService.isUserActive\" (click)=\"like(doc_id, likes)\">\n      <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n    </button>\n    <span class=\"mat-headline\" [hidden]=\"!this.navService.isUserActive\"> | </span>\n    <button mat-icon-button mat-raised-button [hidden]=\"!this.navService.isUserActive\" (click)=\"dislike(doc_id, dislikes)\">\n      <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"product-price\" align=\"center\">\n    <h3>{{ price }}</h3>\n  </div>\n  <mat-grid-tile-footer>\n    <div class=\"product-actions\">\n      <button mat-icon-button mat-raised-button color=\"primary\" (click)=\"addQuantity()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n      <mat-form-field class=\"cart-quantity\">\n        <input matInput [value]=\"quantity\" type=\"text\" readonly  class=\"cart-quantity-input\"/>\n      </mat-form-field>\n      <button mat-icon-button mat-raised-button (click)=\"reduceQuantity()\">\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n      </button>\n      <label class=\"cart-item-total-label\">Item Total</label>\n        <span class=\"mat-display-1 cart-item-total\">{{ line_total }}</span>\n    </div>\n  </mat-grid-tile-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cart/components/cart.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/cart/components/cart.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesCartComponentsCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-title align=\"center\">Cart Info</mat-card-title>\n  <mat-card-content>\n    <mat-card-subtitle [hidden]=\"this.cartService.isCartEmpty()\" align=\"center\" class=\"mat-display-2\">Cart is empty.</mat-card-subtitle>\n    <div class=\"container-fluid\">\n      <div class=\"row cart-quantity-totals\" [hidden]=\"!this.cartService.isCartEmpty()\">\n        <div class=\"col-md-11\">\n          <div class=\"cart-quantity-total-label\"><h3 class=\"mat-caption\">Total Quantity:</h3></div>\n          <div class=\"cart-quantity-total\"><h3 class=\"mat-caption\">{{ this.navService.cart_total_quantity.toFixed(2) }}</h3></div>\n        </div>\n        <div class=\"checkout col-md-1\" [hidden]=\"!this.navService.isUserActive\">\n          <button mat-raised-button color=\"accent\" [hidden]=\"!this.cartService.isCartEmpty()\">Checkout</button>\n        </div>\n      </div>\n      <div class=\"row cart-totals\" [hidden]=\"!this.cartService.isCartEmpty()\">\n        <div class=\"col-md-11\">\n          <div class=\"cart-total-label\"><h3 class=\"mat-subheader\">Total:</h3></div>\n          <div class=\"cart-total\"><h3 class=\"mat-subheader\">{{ this.navService.cart_total_price.toFixed(2) }}</h3></div>\n        </div>\n      </div>\n      <mat-grid-list cols=\"5\" rowHeight=\"1:1.5\" gutterSize=\"20px\">\n        <mat-grid-tile *ngFor=\"let item of this.navService.items\" [hidden]=\"!this.cartService.isCartEmpty()\" class=\"mat-elevation-z8\">\n          <cart-card doc_id=\"{{ item.doc_id }}\" id=\"{{ item.product.id }}\" name=\"{{ item.product.name }}\" price=\"{{ item.product.price.toFixed(2) }}\" [quantity]=\"item.quantity\" [line_total]=\"(item.product.price * item.quantity).toFixed(2)\" photo=\"{{ item.product.photo }}\" likes=\"{{ item.product.likes }}\" dislikes=\"{{ item.product.dislikes }}\"></cart-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./src/app/features/cart/cart-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/features/cart/cart-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: CartRoutingModule */

  /***/
  function srcAppFeaturesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function () {
      return CartRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/app/features/cart/components/index.ts");

    var cartRoutes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'items'
    }, {
      component: _components__WEBPACK_IMPORTED_MODULE_3__["CartComponent"],
      path: 'items'
    }];

    var CartRoutingModule = function CartRoutingModule() {
      _classCallCheck(this, CartRoutingModule);
    };

    CartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(cartRoutes)]
    })], CartRoutingModule);
    /***/
  },

  /***/
  "./src/app/features/cart/cart.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/features/cart/cart.module.ts ***!
    \**********************************************/

  /*! exports provided: CartModule */

  /***/
  function srcAppFeaturesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModule", function () {
      return CartModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index */
    "./src/app/features/cart/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-routing.module */
    "./src/app/features/cart/cart-routing.module.ts");
    /* harmony import */


    var _shared_shared_common_shared_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/shared-common/shared-common.module */
    "./src/app/shared/shared-common/shared-common.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CartModule = function CartModule() {
      _classCallCheck(this, CartModule);
    };

    CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: _toConsumableArray(_index__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS"]),
      exports: _toConsumableArray(_index__WEBPACK_IMPORTED_MODULE_2__["COMPONENTS"]),
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartRoutingModule"], _shared_shared_common_shared_common_module__WEBPACK_IMPORTED_MODULE_6__["SharedCommonModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
      providers: []
    })], CartModule);
    /***/
  },

  /***/
  "./src/app/features/cart/components/cart-card/cart-card.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/features/cart/components/cart-card/cart-card.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesCartComponentsCartCardCartCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-photo {\n  text-align: center;\n  height: 190px;\n  margin-top: auto;\n  margin-bottom: auto;\n  padding: 0px 20px;\n}\n\n.product-details {\n  vertical-align: top;\n}\n\n.product-rate {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.product-actions {\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 100%;\n  background: black;\n}\n\n.cart-actions {\n  width: 100%;\n  height: 0px;\n}\n\n.cart-remove {\n  margin-top: -15px;\n  margin-right: -35px;\n  float: right;\n}\n\n.product-rate span {\n  color: #673ab7;\n}\n\n.product-price {\n  width: 100%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.cart-quantity {\n  width: 30px;\n}\n\n.cart-quantity-input {\n  color: white;\n  text-align: center;\n}\n\n.cart-item-total-label {\n  position: absolute;\n  top: 3px;\n  right: 20px;\n  font-size: 10px;\n}\n\n.cart-item-total {\n  float: right;\n  margin-top: 8px;\n  margin-bottom: 0px;\n}\n\n.fa-thumbs-down {\n  color: #673ab7;\n}\n\n.product-name {\n  margin: 20px 0px 0px 0px;\n}\n\n.mat-grid-tile-footer {\n  background: black;\n}\n\n.mat-dialog-container.product-actions {\n  /*why not working??*/\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2FydC9jb21wb25lbnRzL2NhcnQtY2FyZC9jYXJ0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhcnQvY29tcG9uZW50cy9jYXJ0LWNhcmQvY2FydC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1waG90byB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ucHJvZHVjdC1yYXRlIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnByb2R1Y3QtYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmNhcnQtYWN0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDBweDtcbn1cblxuLmNhcnQtcmVtb3ZlIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTM1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnByb2R1Y3QtcmF0ZSBzcGFuIHtcbiAgY29sb3I6ICM2NzNhYjc7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jYXJ0LXF1YW50aXR5IHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5jYXJ0LXF1YW50aXR5LWlucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJ0LWl0ZW0tdG90YWwtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2FydC1pdGVtLXRvdGFsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZhLXRodW1icy1kb3duIHtcbiAgY29sb3I6ICM2NzNhYjc7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG59XG5cbi5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIucHJvZHVjdC1hY3Rpb25zIHtcbiAgLyp3aHkgbm90IHdvcmtpbmc/PyovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/cart/components/cart-card/cart-card.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/features/cart/components/cart-card/cart-card.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CartCardComponent */

  /***/
  function srcAppFeaturesCartComponentsCartCardCartCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartCardComponent", function () {
      return CartCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var CartCardComponent =
    /*#__PURE__*/
    function () {
      function CartCardComponent(navService, cartService, productService, userService, db) {
        _classCallCheck(this, CartCardComponent);

        this.navService = navService;
        this.cartService = cartService;
        this.productService = productService;
        this.userService = userService;
        this.db = db;
      }
      /**
       * Recalculate Item Line Total
       */


      _createClass(CartCardComponent, [{
        key: "recalculateLineTotal",
        value: function recalculateLineTotal() {
          this.line_total = (this.quantity * Number(this.price)).toFixed(2).toString();
        }
        /**
         * Recalculate Cart Quantity
         * @param increase: boolean
         */

      }, {
        key: "recalculateQuantity",
        value: function recalculateQuantity(increase) {
          if (increase) {
            //add item quantity
            this.quantity += 1; //add cart quantity

            this.navService.cart_total_quantity += 1;
          } else {
            //reduce item quantity
            this.quantity !== 0 ? this.quantity -= 1 : this.quantity = 0; //reduce cart quantity

            this.navService.cart_total_quantity -= 1;
          }
        }
        /**
         * Recalculate Cart Total
         * @param increase: boolean
         */

      }, {
        key: "recalculateTotal",
        value: function recalculateTotal(increase) {
          this.recalculateLineTotal();

          if (increase) {
            //add cart total
            this.navService.cart_total_price += Number(this.price);
          } else {
            //reduce cart total
            this.navService.cart_total_price -= Number(this.price);
          }
        }
        /**
         * Add cart quantity
         */

      }, {
        key: "addQuantity",
        value: function addQuantity() {
          //add cart quantity
          this.recalculateQuantity(true); //add cart total

          this.recalculateTotal(true);
        }
        /**
         * Reduce cart quantity
         */

      }, {
        key: "reduceQuantity",
        value: function reduceQuantity() {
          //reduce cart quantity
          this.recalculateQuantity(false); //reduce cart total

          this.recalculateTotal(false);
        }
        /**
         * Update Product Like Count
         * @param doc_id: string
         * @param likes: number
         */

      }, {
        key: "like",
        value: function like(doc_id, likes) {
          //set the new like count
          this.likes = Number(likes) + 1; //update like count

          this.productService.updateProduct(doc_id, {
            likes: this.likes
          });
        }
        /**
         * Update Product Dislike Count
         * @param doc_id: string
         * @param dislikes: number
         */

      }, {
        key: "dislike",
        value: function dislike(doc_id, dislikes) {
          //set the new dislike count
          this.dislikes = Number(dislikes) + 1; //update dislike count

          this.productService.updateProduct(doc_id, {
            dislikes: this.dislikes
          });
        }
      }, {
        key: "successAlert",
        value: function successAlert() {
          alert("Successfully removed ".concat(this.name, " from your cart"));
        }
        /**
         *  Remove Item from Cart
         * @param doc_id: string
         * @param id: string
         */

      }, {
        key: "removeItem",
        value: function removeItem(doc_id, id) {
          //update cart
          this.cartService.deleteCartItem(doc_id, id); //success alert

          this.successAlert();
        }
      }]);

      return CartCardComponent;
    }();

    CartCardComponent.ctorParameters = function () {
      return [{
        type: _core_services__WEBPACK_IMPORTED_MODULE_2__["NavService"]
      }, {
        type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "doc_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "price", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "quantity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "line_total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "photo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "likes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartCardComponent.prototype, "dislikes", void 0);
    CartCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'cart-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cart/components/cart-card/cart-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart-card.component.css */
      "./src/app/features/cart/components/cart-card/cart-card.component.css")).default]
    })], CartCardComponent);
    /***/
  },

  /***/
  "./src/app/features/cart/components/cart.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/features/cart/components/cart.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesCartComponentsCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-grid-tile {\n  border-radius: 5px;\n}\n\n.cart-quantity-totals, .cart-totals {\n}\n\n.cart-quantity-total-label, .cart-total-label {\n  float: left;\n  width: 200px;\n}\n\n.cart-quantity-total, .cart-total {\n  float: left;\n  width: 150px;\n}\n\n.checkout {\n  margin: auto;\n  right: 0;\n  top: 0\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2FydC9jb21wb25lbnRzL2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jYXJ0L2NvbXBvbmVudHMvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNhcnQtcXVhbnRpdHktdG90YWxzLCAuY2FydC10b3RhbHMge1xufVxuXG4uY2FydC1xdWFudGl0eS10b3RhbC1sYWJlbCwgLmNhcnQtdG90YWwtbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uY2FydC1xdWFudGl0eS10b3RhbCwgLmNhcnQtdG90YWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uY2hlY2tvdXQge1xuICBtYXJnaW46IGF1dG87XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDBcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/cart/components/cart.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/cart/components/cart.component.ts ***!
    \************************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppFeaturesCartComponentsCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services */
    "./src/app/core/services/index.ts");

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(activatedRoute, productService, cartService, navService) {
        _classCallCheck(this, CartComponent);

        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.cartService = cartService;
        this.navService = navService;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_4__["NavService"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cart/components/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/features/cart/components/cart.component.css")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/features/cart/components/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/features/cart/components/index.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent, CartCardComponent */

  /***/
  function srcAppFeaturesCartComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cart.component */
    "./src/app/features/cart/components/cart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return _cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"];
    });
    /* harmony import */


    var _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cart-card/cart-card.component */
    "./src/app/features/cart/components/cart-card/cart-card.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CartCardComponent", function () {
      return _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_2__["CartCardComponent"];
    });
    /***/

  },

  /***/
  "./src/app/features/cart/index.ts":
  /*!****************************************!*\
    !*** ./src/app/features/cart/index.ts ***!
    \****************************************/

  /*! exports provided: COMPONENTS */

  /***/
  function srcAppFeaturesCartIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPONENTS", function () {
      return COMPONENTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components */
    "./src/app/features/cart/components/index.ts"); // import { CartService } from "./services";


    var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_1__["CartComponent"], _components__WEBPACK_IMPORTED_MODULE_1__["CartCardComponent"]]; // export const SERVICES = [
    //   CartService
    // ];

    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map