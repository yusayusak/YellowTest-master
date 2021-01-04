(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["measurement-measurement-module"], {
    /***/
    "./src/app/measurement/measurement-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/measurement/measurement-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MeasurementPageRoutingModule */

    /***/
    function srcAppMeasurementMeasurementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeasurementPageRoutingModule", function () {
        return MeasurementPageRoutingModule;
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


      var _measurement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./measurement.page */
      "./src/app/measurement/measurement.page.ts");

      var routes = [{
        path: '',
        component: _measurement_page__WEBPACK_IMPORTED_MODULE_3__["MeasurementPage"]
      }, {
        path: 'index',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ../index/index.module */
          "./src/app/index/index.module.ts")).then(function (m) {
            return m.IndexPageModule;
          });
        }
      }];

      var MeasurementPageRoutingModule = function MeasurementPageRoutingModule() {
        _classCallCheck(this, MeasurementPageRoutingModule);
      };

      MeasurementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MeasurementPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/measurement/measurement.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/measurement/measurement.module.ts ***!
      \***************************************************/

    /*! exports provided: MeasurementPageModule */

    /***/
    function srcAppMeasurementMeasurementModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeasurementPageModule", function () {
        return MeasurementPageModule;
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


      var _measurement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./measurement-routing.module */
      "./src/app/measurement/measurement-routing.module.ts");
      /* harmony import */


      var _measurement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./measurement.page */
      "./src/app/measurement/measurement.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var MeasurementPageModule = function MeasurementPageModule() {
        _classCallCheck(this, MeasurementPageModule);
      };

      MeasurementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _measurement_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeasurementPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
        declarations: [_measurement_page__WEBPACK_IMPORTED_MODULE_6__["MeasurementPage"]]
      })], MeasurementPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=measurement-measurement-module-es5.js.map