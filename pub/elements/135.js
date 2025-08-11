"use strict";
(self["webpackChunkshell_ng"] = self["webpackChunkshell_ng"] || []).push([[135],{

/***/ 96259:
/*!**********************************************!*\
  !*** ./src/app/sso/disable-sso.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisableSSOComponent": () => (/* binding */ DisableSSOComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _sso_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sso.service */ 73199);
/* harmony import */ var _inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inflight/ps-core-ng */ 28640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);




class DisableSSOComponent {
    constructor(ssoService, settings, router) {
        this.ssoService = ssoService;
        this.settings = settings;
        this.router = router;
        if (!this.ssoService.isSSOEnabled()) {
            this.router.navigateByUrl('/');
            return;
        }
        this.ssoService.disableSSO();
        setTimeout(() => {
            window.location.href = this.settings.getExt('homeUrl');
        });
    }
}
DisableSSOComponent.ɵfac = function DisableSSOComponent_Factory(t) { return new (t || DisableSSOComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sso_service__WEBPACK_IMPORTED_MODULE_0__.SSOService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
DisableSSOComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DisableSSOComponent, selectors: [["app-disable-sso"]], decls: 1, vars: 0, template: function DisableSSOComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } }, encapsulation: 2 });


/***/ }),

/***/ 56767:
/*!********************************************!*\
  !*** ./src/app/sso/login-guard.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var C_CODE_shelf_ng_ng_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inflight/ps-core-ng */ 28640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _sso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sso.service */ 73199);






class LoginGuard {
  constructor(userService, router, ssoService) {
    this.userService = userService;
    this.router = router;
    this.ssoService = ssoService;
    this.subscription = this.userService.loginStatus.subscribe(isLoggedIn => {
      this.loginStatus = isLoggedIn;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  canActivate(route, state) {
    if (this.loginStatus) {
      return true;
    }

    if (!this.ssoService.isSSOEnabled()) {
      return true;
    }

    if (this.ssoService.getSSOLoginState()) {
      return true;
    }

    return this.router.parseUrl('/sso/sso-login');
  }

  canActivateChild(route, state) {
    var _this = this;

    return (0,C_CODE_shelf_ng_ng_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.canActivate(route, state);
    })();
  }

}

LoginGuard.ɵfac = function LoginGuard_Factory(t) {
  return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_sso_service__WEBPACK_IMPORTED_MODULE_1__.SSOService));
};

LoginGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoginGuard,
  factory: LoginGuard.ɵfac
});

/***/ }),

/***/ 43076:
/*!********************************************!*\
  !*** ./src/app/sso/sso-error.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSOErrorComponent": () => (/* binding */ SSOErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inflight/ps-core-ng */ 28640);
/* harmony import */ var _inflight_ui_ng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inflight/ui-ng */ 47916);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 42466);





class SSOErrorComponent {
    constructor(errorHandler, userService) {
        this.errorHandler = errorHandler;
        this.userService = userService;
    }
    ngOnInit() {
        const searchParams = new URLSearchParams(location.search);
        const errorDetails = `
    now:  ${searchParams.get('now')}
    requestUrl:  ${searchParams.get('requestURL')}
    errorType: ${searchParams.get('errorType')}
    errorText:  ${searchParams.get('errorText')}`;
        this.error = {
            details: errorDetails
        };
        try { // if error handler re-throws, stay on SSO error page
            sessionStorage.clear();
            this.errorHandler.handleError(`SSOException: ${errorDetails}`);
        }
        catch { }
    }
    logout() {
        this.userService.logout();
    }
}
SSOErrorComponent.ɵfac = function SSOErrorComponent_Factory(t) { return new (t || SSOErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
SSOErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SSOErrorComponent, selectors: [["app-sso-error"]], decls: 6, vars: 4, consts: [[3, "error"], [1, "row", "mt-4"], [1, "col-12"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-block", 3, "click"]], template: function SSOErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ui-error", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SSOErrorComponent_Template_button_click_3_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "sso.error.logout"));
    } }, dependencies: [_inflight_ui_ng__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 65850:
/*!***************************************!*\
  !*** ./src/app/sso/sso-lib.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSOLibModule": () => (/* binding */ SSOLibModule)
/* harmony export */ });
/* harmony import */ var _sso_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sso.service */ 73199);
/* harmony import */ var _inflight_core_ng__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @inflight/core-ng */ 26844);
/* harmony import */ var _sso_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sso-login.guard */ 38729);
/* harmony import */ var _disable_sso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disable-sso.component */ 96259);
/* harmony import */ var _sso_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sso-error.component */ 43076);
/* harmony import */ var _inflight_ui_ng__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @inflight/ui-ng */ 47916);
/* harmony import */ var _sso_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sso-login.component */ 2408);
/* harmony import */ var _sso_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sso-logout.component */ 40424);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 42466);
/* harmony import */ var _login_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-guard.service */ 56767);
/* harmony import */ var _inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @inflight/ps-core-ng */ 28640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);














class SSOLibModule {
    static forRoot() {
        return {
            ngModule: SSOLibModule,
            providers: [_sso_service__WEBPACK_IMPORTED_MODULE_0__.SSOService, _sso_login_guard__WEBPACK_IMPORTED_MODULE_1__.SSOLoginGuard, _login_guard_service__WEBPACK_IMPORTED_MODULE_6__.LoginGuard]
        };
    }
}
SSOLibModule.ɵfac = function SSOLibModule_Factory(t) { return new (t || SSOLibModule)(); };
SSOLibModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SSOLibModule });
SSOLibModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _inflight_core_ng__WEBPACK_IMPORTED_MODULE_10__.CoreNg, _inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_11__.PSCoreNg, _inflight_ui_ng__WEBPACK_IMPORTED_MODULE_12__.UINgModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SSOLibModule, { declarations: [_disable_sso_component__WEBPACK_IMPORTED_MODULE_2__.DisableSSOComponent, _sso_error_component__WEBPACK_IMPORTED_MODULE_3__.SSOErrorComponent, _sso_login_component__WEBPACK_IMPORTED_MODULE_4__.SSOLoginComponent, _sso_logout_component__WEBPACK_IMPORTED_MODULE_5__.SSOLogoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _inflight_core_ng__WEBPACK_IMPORTED_MODULE_10__.CoreNg, _inflight_ps_core_ng__WEBPACK_IMPORTED_MODULE_11__.PSCoreNg, _inflight_ui_ng__WEBPACK_IMPORTED_MODULE_12__.UINgModule], exports: [_disable_sso_component__WEBPACK_IMPORTED_MODULE_2__.DisableSSOComponent, _sso_error_component__WEBPACK_IMPORTED_MODULE_3__.SSOErrorComponent, _sso_login_component__WEBPACK_IMPORTED_MODULE_4__.SSOLoginComponent, _sso_logout_component__WEBPACK_IMPORTED_MODULE_5__.SSOLogoutComponent] }); })();


/***/ }),

/***/ 2408:
/*!********************************************!*\
  !*** ./src/app/sso/sso-login.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSOLoginComponent": () => (/* binding */ SSOLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class SSOLoginComponent {
}
SSOLoginComponent.ɵfac = function SSOLoginComponent_Factory(t) { return new (t || SSOLoginComponent)(); };
SSOLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SSOLoginComponent, selectors: [["app-sso-login"]], decls: 2, vars: 0, template: function SSOLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sso-login-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 38729:
/*!****************************************!*\
  !*** ./src/app/sso/sso-login.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSOLoginGuard": () => (/* binding */ SSOLoginGuard)
/* harmony export */ });
/* harmony import */ var C_CODE_shelf_ng_ng_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _sso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sso.service */ 73199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);





class SSOLoginGuard {
  constructor(ssoService, router) {
    this.ssoService = ssoService;
    this.router = router;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,C_CODE_shelf_ng_ng_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.ssoService.isSSOEnabled()) {
        return true;
      }

      if (_this.ssoService.isSSOLoginInProgress()) {
        _this.ssoService.clearLoginProgress();

        _this.ssoService.setSSOLoginState(true);

        return _this.router.parseUrl(_this.ssoService.getReturnUrl());
      } else if (_this.ssoService.hasSSOError()) {
        return;
      } else {
        if (location.pathname !== '/app/ui/login' && location.pathname !== '/app/ui/sso/sso-login' && location.pathname !== '/app/ui/sso/sso-logout' && location.pathname !== '/app/ui/error/sso') {
          _this.ssoService.setReturnUrl(location.pathname.replace('/app/ui', '') + location.search);
        }

        _this.ssoService.doSSOLogin();

        return false;
      }
    })();
  }

}

SSOLoginGuard.ɵfac = function SSOLoginGuard_Factory(t) {
  return new (t || SSOLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_sso_service__WEBPACK_IMPORTED_MODULE_1__.SSOService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

SSOLoginGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SSOLoginGuard,
  factory: SSOLoginGuard.ɵfac
});

/***/ }),

/***/ 40424:
/*!*********************************************!*\
  !*** ./src/app/sso/sso-logout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSOLogoutComponent": () => (/* binding */ SSOLogoutComponent)
/* harmony export */ });
/* harmony import */ var C_CODE_shelf_ng_ng_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 49671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 42466);




class SSOLogoutComponent {
  constructor(router) {
    this.router = router;
  }

  ngOnInit() {
    return (0,C_CODE_shelf_ng_ng_app_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  ngOnDestroy() {}

  continue() {
    this.router.navigateByUrl('/home');
  }

}

SSOLogoutComponent.ɵfac = function SSOLogoutComponent_Factory(t) {
  return new (t || SSOLogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};

SSOLogoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SSOLogoutComponent,
  selectors: [["app-sso-logout"]],
  decls: 12,
  vars: 6,
  consts: [[1, "container", "p-4", "p-md-5"], [1, "h3"], [1, "row", "my-3"], [1, "col-12"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-block", 3, "click"], [1, "align-middle"]],
  template: function SSOLogoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SSOLogoutComponent_Template_button_click_8_listener() {
        return ctx.continue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "sso.logout.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, "sso.logout.continue"));
    }
  },
  dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 7686:
/*!*******************************************!*\
  !*** ./src/app/sso/sso-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSORoutingModule": () => (/* binding */ SSORoutingModule)
/* harmony export */ });
/* harmony import */ var _disable_sso_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disable-sso.component */ 96259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _sso_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sso-login.component */ 2408);
/* harmony import */ var _sso_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sso-login.guard */ 38729);
/* harmony import */ var _sso_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sso-logout.component */ 40424);
/* harmony import */ var app_layouts_page_page_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layouts/page/page-layout.component */ 14514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);








const routes = [
    {
        path: 'sso-login',
        component: _sso_login_component__WEBPACK_IMPORTED_MODULE_1__.SSOLoginComponent,
        canActivate: [_sso_login_guard__WEBPACK_IMPORTED_MODULE_2__.SSOLoginGuard],
    },
    {
        path: 'disable',
        component: _disable_sso_component__WEBPACK_IMPORTED_MODULE_0__.DisableSSOComponent
    },
    {
        path: 'sso-logout',
        component: app_layouts_page_page_layout_component__WEBPACK_IMPORTED_MODULE_4__.CustomPageLayoutComponent,
        children: [{
                path: '',
                component: _sso_logout_component__WEBPACK_IMPORTED_MODULE_3__.SSOLogoutComponent
            }
        ]
    }
];
class SSORoutingModule {
}
SSORoutingModule.ɵfac = function SSORoutingModule_Factory(t) { return new (t || SSORoutingModule)(); };
SSORoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SSORoutingModule });
SSORoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SSORoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 49135:
/*!***********************************!*\
  !*** ./src/app/sso/sso.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSOModule": () => (/* binding */ SSOModule)
/* harmony export */ });
/* harmony import */ var _sso_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sso-lib.module */ 65850);
/* harmony import */ var _sso_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sso-routing.module */ 7686);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);




class SSOModule {
}
SSOModule.ɵfac = function SSOModule_Factory(t) { return new (t || SSOModule)(); };
SSOModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SSOModule });
SSOModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _sso_lib_module__WEBPACK_IMPORTED_MODULE_0__.SSOLibModule, _sso_routing_module__WEBPACK_IMPORTED_MODULE_1__.SSORoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SSOModule, { imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _sso_lib_module__WEBPACK_IMPORTED_MODULE_0__.SSOLibModule, _sso_routing_module__WEBPACK_IMPORTED_MODULE_1__.SSORoutingModule] }); })();


/***/ })

}]);