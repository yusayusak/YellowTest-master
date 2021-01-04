(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meting-meting-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/meting/meting.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meting/meting.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMetingMetingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"header-section\">\n    <h1>Meting</h1>\n</section>\n\n\n<ion-card class=\" meeting-card\">\n    <ion-card-header>\n        <ion-card-title class=\"card-title\">Promillage</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content class=\"content-text\">\n       69\n    </ion-card-content>\n</ion-card>\n\n<section class=\"btn-sectie\" (click)=\"database.insertMeasurement(0.69, 'an empty string');\">\n    <ion-button class=\"btn-meeting\" expand=\"block\">METING OPSLAAN</ion-button>\n</section>";
      /***/
    },

    /***/
    "./src/app/meting/meting-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/meting/meting-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MetingPageRoutingModule */

    /***/
    function srcAppMetingMetingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetingPageRoutingModule", function () {
        return MetingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _meting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./meting.page */
      "./src/app/meting/meting.page.ts");

      var routes = [{
        path: '',
        component: _meting_page__WEBPACK_IMPORTED_MODULE_3__["MetingPage"]
      }];

      var MetingPageRoutingModule = function MetingPageRoutingModule() {
        _classCallCheck(this, MetingPageRoutingModule);
      };

      MetingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MetingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/meting/meting.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/meting/meting.module.ts ***!
      \*****************************************/

    /*! exports provided: MetingPageModule */

    /***/
    function srcAppMetingMetingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetingPageModule", function () {
        return MetingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _meting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meting-routing.module */
      "./src/app/meting/meting-routing.module.ts");
      /* harmony import */


      var _meting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./meting.page */
      "./src/app/meting/meting.page.ts");

      var MetingPageModule = function MetingPageModule() {
        _classCallCheck(this, MetingPageModule);
      };

      MetingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _meting_routing_module__WEBPACK_IMPORTED_MODULE_5__["MetingPageRoutingModule"]],
        declarations: [_meting_page__WEBPACK_IMPORTED_MODULE_6__["MetingPage"]]
      })], MetingPageModule);
      /***/
    },

    /***/
    "./src/app/meting/meting.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/meting/meting.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppMetingMetingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content-text, .card-title {\n  text-align: center;\n}\n\n.content-text {\n  font-size: 140px;\n  color: black;\n}\n\n.btn-meeting {\n  color: black;\n  font-weight: 700;\n}\n\n.meeting-card {\n  background-color: #999999;\n}\n\n.btn-sectie {\n  padding-bottom: 90px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.header-section {\n  text-align: center;\n  background-color: #ffdc49;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0aW5nL21ldGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNLLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUZMIiwiZmlsZSI6InNyYy9hcHAvbWV0aW5nL21ldGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW50LXRleHQsIC5jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uY29udGVudC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTQwcHg7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbi5idG4tbWVldGluZyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbn1cblxuLm1lZXRpbmctY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xufVxuXG4uYnRuLXNlY3RpZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDkwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5oZWFkZXItc2VjdGlvbntcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYzQ5O1xuICAgICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/meting/meting.page.ts":
    /*!***************************************!*\
      !*** ./src/app/meting/meting.page.ts ***!
      \***************************************/

    /*! exports provided: MetingPage */

    /***/
    function srcAppMetingMetingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetingPage", function () {
        return MetingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MetingPage = /*#__PURE__*/function () {
        function MetingPage() {
          _classCallCheck(this, MetingPage);
        }

        _createClass(MetingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MetingPage;
      }();

      MetingPage.ctorParameters = function () {
        return [];
      };

      MetingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./meting.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/meting/meting.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./meting.page.scss */
        "./src/app/meting/meting.page.scss"))["default"]]
      })], MetingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=meting-meting-module-es5.js.map