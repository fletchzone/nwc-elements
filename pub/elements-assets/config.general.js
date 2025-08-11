window.ifConfig = window.ifConfig || {};

var defaultHost = "https://awshcm92858.inflight.local:8525";
var cvhost = "https://awshcm92858cv.inflight.local:8525";
var psEnvAlias = "awshcm92858";
var psInstName = "ps";
var ifmode = "inflightnode";

var _prismicEndpoint = 'https://ifportal.cdn.prismic.io/api/v2';
var _prismicToken = 'MC5YMFVRSHhBQUFDUUFGUzBY.77-977-977-977-977-9Je-_vQc177-977-977-9Wu-_vS7vv70677-977-977-977-9Au-_ve-_vTo0F2AFAO-_vV4';
var _resourcePrefix = '/app/ui';

var _isSSO = false; // used for build config replacement
var isSSO = _isSSO;

if (sessionStorage.getItem('__DISABLE_SSO_KEY__') === 'true') {
  isSSO = false;
}

window.ifConfig.IFMode = ifmode;

window.ifConfig.IFURLPrefix = defaultHost;
window.ifConfig.IFCVURLPrefix = cvhost;
window.ifConfig.IFURLPostfix = "/psc/" + psInstName;
window.ifConfig.EnvironmentAlias = psEnvAlias;
window.ifConfig.InFlightID = "InFlightViewer1";
window.ifConfig.resourcePrefix = _resourcePrefix;
window.ifConfig.isSSO = isSSO;

window.ifConfig.Properties = {
  'prismic-endpoint': _prismicEndpoint,
  'prismic-token': _prismicToken
}

window.ifConfig.classic = {
  IFURLPrefix: defaultHost,
  IFURLPostfix: "/psc/" + psInstName,
  InFlightID: "InFlightViewer1",
  resourcePrefix: _resourcePrefix,
  isIFNode: true,
  IFMode: ifmode,
  isSSO: isSSO,
};

// /psp is required for logout
window.ifConfig.logout = {
  IFURLPrefix: defaultHost,
  IFURLPostfix: "/psp/" + psInstName,
  EnvironmentAlias: psEnvAlias,
  InFlightID: "InFlightViewer1",
  resourcePrefix: _resourcePrefix,
  IFMode: ifmode,
  isSSO: isSSO,
};

(window.ifConfig.fluid = {
  IFURLPrefix: defaultHost,
  IFURLPostfix: "/psp/" + psInstName,
  EnvironmentAlias: psEnvAlias,
  InFlightID: "InFlightViewer1",
  resourcePrefix: _resourcePrefix,
  Portal: "101430233",
  IFMode: ifmode,
  isSSO: isSSO,
})
window.ifConfig.ext = window.ifConfig.ext || {};

window.ifConfig.ext.ssoAuthUrl =  "/inflight/login?authReturnUrl=" + _resourcePrefix + "/sso/sso-login";
window.ifConfig.ext.loginStatusCheckUrl = 'EMPLOYEE/HRMS/c/ROLE_EMPLOYEE.HR_PERSONAL_PHONE.GBL?IF-SSO=originalRequest';
window.ifConfig.ext.homeUrl = _resourcePrefix + '/home'
window.ifConfig.ext.nonSSOLogoutUrl = 'EMPLOYEE/HRMS/h/?cmd=logout';
window.ifConfig.ext.ssoLogoutUrl = defaultHost + "/Shibboleth.sso/Logout";
window.ifConfig.ext.ssoDisableRoute = 'sso/disable';

window.ifConfig.ext.sessionTimer = {
  warnAfter: 15 * 60 * 1000, // 15 minutes -> milliseconds
  timeoutAfter: 20 * 60 * 1000 //20 minutes -> milliseconds
};

window.ifConfig.ext.nativePaths = {
  directDepositWidgetData: '/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PTGPLT_APP_TILE_FL.GBL?PTPPB_GROUPLET_ID=HC_PY_IC_DIR_DEP_TL_FL',
  voluntaryDeductionsWidgetData: '/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PTGPLT_APP_TILE_FL.GBL?PTPPB_GROUPLET_ID=HC_PY_IC_VOL_DEDS_TL_GBL'
};

window.ifConfig.useClientMockService = true;

if (window.ifConfig.useClientMockService) {
  window.ifConfig.clientMockService = {
    defaultJobId: "49275",
    responsesUrl: _resourcePrefix + "/assets/client-mock-service-responses/timesheet-demo.json",
    init: true,
    whitelistRegExp: /ROLE_EMPLOYEE\.GP_ABS_|ROLE_EMPLOYEE\.TL_MSS_EE_SRCH_PRD|PUBLIC\.TU_TL_LEAVE_BALANCE|CAPTURE_TIME_AND_LABOR\.TL_MSS_EE_SRCH_PRD.GBL|PUBLIC\.TU_TL_TRC_TIMESHEET_DESCR|PUBLIC\.TU_TL_MANAGER_LEAVE_BALANCE|PUBLIC\.TU_TL_SSL_BALANCE_MANAGER|ROLE_MANAGER\.TL_MSS_EE_SRCH_PRD.GBL|TU_TL_TRC_TIMESHEET_DESCR/
  };
}

// settings to map absence names to routes and routes to id's as it seems to be the only way
window.ifConfig.ext.absenceBalance = {
  ABSENCE_NAME_TO_ROUTE_PARAM: {
    "Vacation Earned": "vacation",
    "Floating Holiday #1": "floating-1",
    "Floating Holiday #2": "floating-2",
    Bereavement: "bereavement",
    Citizenship: "citizenship",
    "Jury Duty": "jury-duty",
    "Perfect Attendance": "perfect-attendance",
    "Personal unpaid time": "personal-unpaid-time"
  },
  ROUTE_PARAM_TO_ID: {
    vacation: "101296",
    "floating-1": "101206",
    "floating-2": "101554",
    bereavement: "101157",
    citizenship: "101156",
    "jury-duty": "101155",
    "perfect-attendance": "101158",
    "personal-unpaid-time": "101538"
  }
};

window.i18nPrefix = _resourcePrefix + "/assets/i18n/";
window.i18nPostfix = ".json";

// used with prismic preview
window.prismic = {
  endpoint: _prismicEndpoint
};
