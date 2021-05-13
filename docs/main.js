(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Lss":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(sku, name, imageUrl, department, price) {
        this.sku = sku;
        this.name = name;
        this.imageUrl = imageUrl;
        this.department = department;
        this.price = price;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\周浩\Desktop\web前端\ch2\e4\inventory-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0zOV":
/*!******************************************!*\
  !*** ./src/app/product-row.component.ts ***!
  \******************************************/
/*! exports provided: ProductRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRowComponent", function() { return ProductRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-image.component */ "ThDH");
/* harmony import */ var _product_department_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-department.component */ "8FSN");
/* harmony import */ var _product_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-price.component */ "3nfL");




class ProductRowComponent {
    constructor() {
    }
}
ProductRowComponent.ɵfac = function ProductRowComponent_Factory(t) { return new (t || ProductRowComponent)(); };
ProductRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductRowComponent, selectors: [["product-row"]], hostAttrs: [1, "row"], inputs: { product: "product" }, decls: 11, vars: 5, consts: [[1, "col-3"], [3, "url"], [1, "col-7"], [1, "product-name"], [1, "description"], [3, "department"], [1, "col-2", "d-flex", "align-items-center"], [3, "price"]], template: function ProductRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "product-image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "product-department", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "product-price", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.product.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" SKU #", ctx.product.sku, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("department", ctx.product.department);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("price", ctx.product.price);
    } }, directives: [_product_image_component__WEBPACK_IMPORTED_MODULE_1__["ProductImageComponent"], _product_department_component__WEBPACK_IMPORTED_MODULE_2__["ProductDepartmentComponent"], _product_price_component__WEBPACK_IMPORTED_MODULE_3__["ProductPriceComponent"]], styles: [".product-name[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: bold;\r\n    margin: 0.8rem 0.5rem;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n    font-size: 0.9rem;\r\n    color: gray;\r\n    margin: 0 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtcm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InByb2R1Y3Qtcm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAuOHJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "3nfL":
/*!********************************************!*\
  !*** ./src/app/product-price.component.ts ***!
  \********************************************/
/*! exports provided: ProductPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPriceComponent", function() { return ProductPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductPriceComponent {
    constructor() {
    }
}
ProductPriceComponent.ɵfac = function ProductPriceComponent_Factory(t) { return new (t || ProductPriceComponent)(); };
ProductPriceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductPriceComponent, selectors: [["product-price"]], inputs: { price: "price" }, decls: 1, vars: 1, template: function ProductPriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.price, " ");
    } }, encapsulation: 2 });


/***/ }),

/***/ "8FSN":
/*!*************************************************!*\
  !*** ./src/app/product-department.component.ts ***!
  \*************************************************/
/*! exports provided: ProductDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDepartmentComponent", function() { return ProductDepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ProductDepartmentComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 < ctx_r0.department.length - 1 ? ">" : "");
} }
class ProductDepartmentComponent {
    constructor() {
    }
}
ProductDepartmentComponent.ɵfac = function ProductDepartmentComponent_Factory(t) { return new (t || ProductDepartmentComponent)(); };
ProductDepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDepartmentComponent, selectors: [["product-department"]], inputs: { department: "department" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["href", "#"]], template: function ProductDepartmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDepartmentComponent_span_0_Template, 5, 2, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.department);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {margin: 0 0.5rem}"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ "+Lss");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list.component */ "TEeI");



class AppComponent {
    constructor() {
        this.title = 'inventory-app';
        this.products = [
            new _product__WEBPACK_IMPORTED_MODULE_0__["Product"]('MYSHOES', 'Black Running Shoes', 'assets/imgs/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
            new _product__WEBPACK_IMPORTED_MODULE_0__["Product"]('NEATOJACKET', 'Blue Jacket', 'assets/imgs/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
            new _product__WEBPACK_IMPORTED_MODULE_0__["Product"]('NICEHAT', 'A Nice Black Hat', 'assets/imgs/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
        ];
    }
    onProductSelected(product) {
        console.log('在根组件中，响应产品:' + product.name + '选中事件！！');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["inventory-app"]], decls: 2, vars: 1, consts: [[1, "d-flex", "justify-content-center"], [3, "productsList", "productSelected"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "products-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("productSelected", function AppComponent_Template_products_list_productSelected_1_listener($event) { return ctx.onProductSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("productsList", ctx.products);
    } }, directives: [_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"]], styles: ["products-list[_ngcontent-%COMP%] {\r\n    width: 40rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByb2R1Y3RzLWxpc3Qge1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "TEeI":
/*!********************************************!*\
  !*** ./src/app/products-list.component.ts ***!
  \********************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-row.component */ "0zOV");




function ProductsListComponent_product_row_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "product-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsListComponent_product_row_0_Template_product_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onProductClicked(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.isSelected(product_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class ProductsListComponent {
    constructor() {
        this.productSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onProductClicked(product) {
        this.currentProduct = product;
        console.log('product' + product.name + 'is selected!！');
        this.productSelected.emit(product);
    }
    isSelected(product) {
        if (this.currentProduct === null || product === null) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(); };
ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["products-list"]], inputs: { productsList: "productsList" }, outputs: { productSelected: "productSelected" }, decls: 1, vars: 1, consts: [[3, "product", "selected", "click", 4, "ngFor", "ngForOf"], [3, "product", "click"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsListComponent_product_row_0_Template, 1, 3, "product-row", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _product_row_component__WEBPACK_IMPORTED_MODULE_2__["ProductRowComponent"]], styles: ["product-row[_ngcontent-%COMP%] {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] { \r\n    border: 1px solid lightblue; \r\n    border-radius: 5px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InByb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByb2R1Y3Qtcm93IHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQgeyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ThDH":
/*!********************************************!*\
  !*** ./src/app/product-image.component.ts ***!
  \********************************************/
/*! exports provided: ProductImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImageComponent", function() { return ProductImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductImageComponent {
    constructor() {
    }
}
ProductImageComponent.ɵfac = function ProductImageComponent_Factory(t) { return new (t || ProductImageComponent)(); };
ProductImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductImageComponent, selectors: [["product-image"]], inputs: { url: "url" }, decls: 1, vars: 1, consts: [[1, "image-thumbnail", 3, "src"]], template: function ProductImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["img[_ngcontent-%COMP%] {width: 9rem; height: 9rem}"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _product_department_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-department.component */ "8FSN");
/* harmony import */ var _product_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-image.component */ "ThDH");
/* harmony import */ var _product_price_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-price.component */ "3nfL");
/* harmony import */ var _product_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-row.component */ "0zOV");
/* harmony import */ var _products_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-list.component */ "TEeI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _products_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductsListComponent"],
        _product_department_component__WEBPACK_IMPORTED_MODULE_2__["ProductDepartmentComponent"],
        _product_image_component__WEBPACK_IMPORTED_MODULE_3__["ProductImageComponent"],
        _product_price_component__WEBPACK_IMPORTED_MODULE_4__["ProductPriceComponent"],
        _product_row_component__WEBPACK_IMPORTED_MODULE_5__["ProductRowComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map