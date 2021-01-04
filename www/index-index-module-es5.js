(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"], {
    /***/
    "./src/app/index/index-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/index/index-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: IndexPageRoutingModule */

    /***/
    function srcAppIndexIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function () {
        return IndexPageRoutingModule;
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


      var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index.page */
      "./src/app/index/index.page.ts");

      var routes = [{
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
      }, {
        path: 'measurement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | measurement-measurement-module */
          "measurement-measurement-module").then(__webpack_require__.bind(null,
          /*! ../measurement/measurement.module */
          "./src/app/measurement/measurement.module.ts")).then(function (m) {
            return m.MeasurementPageModule;
          });
        }
      }, {
        path: 'tab2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab2-tab2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
          /*! ../tab2/tab2.module */
          "./src/app/tab2/tab2.module.ts")).then(function (m) {
            return m.Tab2PageModule;
          });
        }
      }, {
        path: 'tab3',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab3-tab3-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
          /*! ../tab3/tab3.module */
          "./src/app/tab3/tab3.module.ts")).then(function (m) {
            return m.Tab3PageModule;
          });
        }
      }];

      var IndexPageRoutingModule = function IndexPageRoutingModule() {
        _classCallCheck(this, IndexPageRoutingModule);
      };

      IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IndexPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/index/index.module.ts":
    /*!***************************************!*\
      !*** ./src/app/index/index.module.ts ***!
      \***************************************/

    /*! exports provided: IndexPageModule */

    /***/
    function srcAppIndexIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPageModule", function () {
        return IndexPageModule;
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


      var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index-routing.module */
      "./src/app/index/index-routing.module.ts");
      /* harmony import */


      var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./index.page */
      "./src/app/index/index.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var IndexPageModule = function IndexPageModule() {
        _classCallCheck(this, IndexPageModule);
      };

      IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
      })], IndexPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=index-index-module-es5.js.map