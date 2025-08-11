(self["webpackChunkshell_ng"] = self["webpackChunkshell_ng"] || []).push([[429],{

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-search-params-polyfill */ 70950);
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ 89799);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es7_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es7/object */ 29523);
/* harmony import */ var core_js_es7_object__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_object__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es7_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es7/array */ 13991);
/* harmony import */ var core_js_es7_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! custom-event-polyfill */ 54539);
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-polyfill */ 92528);
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var webcrypto_shim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webcrypto-shim */ 97827);
/* harmony import */ var webcrypto_shim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webcrypto_shim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/reflect */ 43499);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zone.js */ 88583);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_8__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
* BROWSER POLYFILLS
*/

 // Run `npm install --save classlist.js`.



 // Run `npm install --save web-animations-js`.

/** Evergreen browsers require these. **/

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
window.global = window;


/***/ }),

/***/ 54539:
/*!********************************************************!*\
  !*** ./node_modules/custom-event-polyfill/polyfill.js ***!
  \********************************************************/
/***/ (() => {

// Polyfill for creating CustomEvents on IE9/10/11
// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
(function () {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', {
      cancelable: true
    });
    ce.preventDefault();

    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function (event, params) {
      var evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      origPrevent = evt.preventDefault;

      evt.preventDefault = function () {
        origPrevent.call(this);

        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function () {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };

      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();

/***/ }),

/***/ 92528:
/*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
/***/ (function() {

(function (global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */
  var checkIfIteratorIsSupported = function () {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };

  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function (items) {
    var iterator = {
      next: function () {
        var value = items.shift();
        return {
          done: value === void 0,
          value: value
        };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  };
  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */


  var serializeParam = function (value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function (value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };

  var polyfillURLSearchParams = function () {
    var URLSearchParams = function (searchString) {
      Object.defineProperty(this, '_entries', {
        writable: true,
        value: {}
      });
      var typeofSearchString = typeof searchString;

      if (typeofSearchString === 'undefined') {// do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;

        searchString.forEach(function (value, name) {
          _this.append(name, value);
        });
      } else if (searchString !== null && typeofSearchString === 'object') {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];

            if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function (name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function (name) {
      delete this._entries[name];
    };

    proto.get = function (name) {
      return name in this._entries ? this._entries[name][0] : null;
    };

    proto.getAll = function (name) {
      return name in this._entries ? this._entries[name].slice(0) : [];
    };

    proto.has = function (name) {
      return name in this._entries;
    };

    proto.set = function (name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function (callback, thisArg) {
      var entries;

      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];

          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function () {
      var searchArray = [];
      this.forEach(function (value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };

    global.URLSearchParams = URLSearchParams;
  };

  var checkIfURLSearchParamsSupported = function () {
    try {
      var URLSearchParams = global.URLSearchParams;
      return new URLSearchParams('?a=1').toString() === 'a=1' && typeof URLSearchParams.prototype.set === 'function' && typeof URLSearchParams.prototype.entries === 'function';
    } catch (e) {
      return false;
    }
  };

  if (!checkIfURLSearchParamsSupported()) {
    polyfillURLSearchParams();
  }

  var proto = global.URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function () {
      var _this = this;

      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);

        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function (a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });

      if (_this._entries) {
        // force reset because IE keeps keys index
        _this._entries = {};
      }

      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function (searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function (value, name) {
            keys.push(name);
          });

          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;

        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
        }
      }
    });
  } // HTMLAnchorElement

})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

(function (global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */
  var checkIfURLIsSupported = function () {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c d';
      return u.href === 'http://a/c%20d' && u.searchParams;
    } catch (e) {
      return false;
    }
  };

  var polyfillURL = function () {
    var _URL = global.URL;

    var URL = function (url, base) {
      if (typeof url !== 'string') url = String(url);
      if (base && typeof base !== 'string') base = String(base); // Only create another document if the base is different from current location.

      var doc = document,
          baseElement;

      if (base && (global.location === void 0 || base !== global.location.href)) {
        base = base.toLowerCase();
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);

        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;

      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      var inputElement = doc.createElement('input');
      inputElement.type = 'url';
      inputElement.value = url;

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href) || !inputElement.checkValidity() && !base) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      }); // create a linked searchParams which reflect its changes on URL

      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;

      var _this = this;

      ['append', 'delete', 'set'].forEach(function (methodName) {
        var method = searchParams[methodName];

        searchParams[methodName] = function () {
          method.apply(searchParams, arguments);

          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });
      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });
      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function () {
          if (this.search !== search) {
            search = this.search;

            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;

              this.searchParams._fromString(this.search);

              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function (attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function () {
          return this._anchorElement[attributeName];
        },
        set: function (value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
      linkURLWithAnchorAttribute(attributeName);
    });
    Object.defineProperty(proto, 'search', {
      get: function () {
        return this._anchorElement['search'];
      },
      set: function (value) {
        this._anchorElement['search'] = value;

        this._updateSearchParams();
      },
      enumerable: true
    });
    Object.defineProperties(proto, {
      'toString': {
        get: function () {
          var _this = this;

          return function () {
            return _this.href;
          };
        }
      },
      'href': {
        get: function () {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function (value) {
          this._anchorElement.href = value;

          this._updateSearchParams();
        },
        enumerable: true
      },
      'pathname': {
        get: function () {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function (value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },
      'origin': {
        get: function () {
          // get expected port from protocol
          var expectedPort = {
            'http:': 80,
            'https:': 443,
            'ftp:': 21
          }[this._anchorElement.protocol]; // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''

          var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';
          return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
        },
        enumerable: true
      },
      'password': {
        // TODO
        get: function () {
          return '';
        },
        set: function (value) {},
        enumerable: true
      },
      'username': {
        // TODO
        get: function () {
          return '';
        },
        set: function (value) {},
        enumerable: true
      }
    });

    URL.createObjectURL = function (blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function (url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;
  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if (global.location !== void 0 && !('origin' in global.location)) {
    var getOrigin = function () {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function () {
        global.location.origin = getOrigin();
      }, 100);
    }
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

/***/ }),

/***/ 70950:
/*!**********************************************************!*\
  !*** ./node_modules/url-search-params-polyfill/index.js ***!
  \**********************************************************/
/***/ (function() {

/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */
(function (self) {
  'use strict';

  var nativeURLSearchParams = self.URLSearchParams && self.URLSearchParams.prototype.get ? self.URLSearchParams : null,
      isSupportObjectConstructor = nativeURLSearchParams && new nativeURLSearchParams({
    a: 1
  }).toString() === 'a=1',
      // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
  decodesPlusesCorrectly = nativeURLSearchParams && new nativeURLSearchParams('s=%2B').get('s') === '+',
      __URLSearchParams__ = "__URLSearchParams__",
      // Fix bug in Edge which cannot encode ' &' correctly
  encodesAmpersandsCorrectly = nativeURLSearchParams ? function () {
    var ampersandTest = new nativeURLSearchParams();
    ampersandTest.append('s', ' &');
    return ampersandTest.toString() === 's=+%26';
  }() : true,
      prototype = URLSearchParamsPolyfill.prototype,
      iterable = !!(self.Symbol && self.Symbol.iterator);

  if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
    return;
  }
  /**
   * Make a URLSearchParams instance
   *
   * @param {object|string|URLSearchParams} search
   * @constructor
   */


  function URLSearchParamsPolyfill(search) {
    search = search || ""; // support construct object with another URLSearchParams instance

    if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
      search = search.toString();
    }

    this[__URLSearchParams__] = parseToDict(search);
  }
  /**
   * Appends a specified key/value pair as a new search parameter.
   *
   * @param {string} name
   * @param {string} value
   */


  prototype.append = function (name, value) {
    appendTo(this[__URLSearchParams__], name, value);
  };
  /**
   * Deletes the given search parameter, and its associated value,
   * from the list of all search parameters.
   *
   * @param {string} name
   */


  prototype['delete'] = function (name) {
    delete this[__URLSearchParams__][name];
  };
  /**
   * Returns the first value associated to the given search parameter.
   *
   * @param {string} name
   * @returns {string|null}
   */


  prototype.get = function (name) {
    var dict = this[__URLSearchParams__];
    return name in dict ? dict[name][0] : null;
  };
  /**
   * Returns all the values association with a given search parameter.
   *
   * @param {string} name
   * @returns {Array}
   */


  prototype.getAll = function (name) {
    var dict = this[__URLSearchParams__];
    return name in dict ? dict[name].slice(0) : [];
  };
  /**
   * Returns a Boolean indicating if such a search parameter exists.
   *
   * @param {string} name
   * @returns {boolean}
   */


  prototype.has = function (name) {
    return name in this[__URLSearchParams__];
  };
  /**
   * Sets the value associated to a given search parameter to
   * the given value. If there were several values, delete the
   * others.
   *
   * @param {string} name
   * @param {string} value
   */


  prototype.set = function set(name, value) {
    this[__URLSearchParams__][name] = ['' + value];
  };
  /**
   * Returns a string containg a query string suitable for use in a URL.
   *
   * @returns {string}
   */


  prototype.toString = function () {
    var dict = this[__URLSearchParams__],
        query = [],
        i,
        key,
        name,
        value;

    for (key in dict) {
      name = encode(key);

      for (i = 0, value = dict[key]; i < value.length; i++) {
        query.push(name + '=' + encode(value[i]));
      }
    }

    return query.join('&');
  }; // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.


  var forSureUsePolyfill = !decodesPlusesCorrectly;
  var useProxy = !forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy;
  /*
   * Apply polifill to global object and append other prototype into it
   */

  Object.defineProperty(self, 'URLSearchParams', {
    value: useProxy ? // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
    new Proxy(nativeURLSearchParams, {
      construct: function (target, args) {
        return new target(new URLSearchParamsPolyfill(args[0]).toString());
      }
    }) : URLSearchParamsPolyfill
  });
  var USPProto = self.URLSearchParams.prototype;
  USPProto.polyfill = true;
  /**
   *
   * @param {function} callback
   * @param {object} thisArg
   */

  USPProto.forEach = USPProto.forEach || function (callback, thisArg) {
    var dict = parseToDict(this.toString());
    Object.getOwnPropertyNames(dict).forEach(function (name) {
      dict[name].forEach(function (value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  };
  /**
   * Sort all name-value pairs
   */


  USPProto.sort = USPProto.sort || function () {
    var dict = parseToDict(this.toString()),
        keys = [],
        k,
        i,
        j;

    for (k in dict) {
      keys.push(k);
    }

    keys.sort();

    for (i = 0; i < keys.length; i++) {
      this['delete'](keys[i]);
    }

    for (i = 0; i < keys.length; i++) {
      var key = keys[i],
          values = dict[key];

      for (j = 0; j < values.length; j++) {
        this.append(key, values[j]);
      }
    }
  };
  /**
   * Returns an iterator allowing to go through all keys of
   * the key/value pairs contained in this object.
   *
   * @returns {function}
   */


  USPProto.keys = USPProto.keys || function () {
    var items = [];
    this.forEach(function (item, name) {
      items.push(name);
    });
    return makeIterator(items);
  };
  /**
   * Returns an iterator allowing to go through all values of
   * the key/value pairs contained in this object.
   *
   * @returns {function}
   */


  USPProto.values = USPProto.values || function () {
    var items = [];
    this.forEach(function (item) {
      items.push(item);
    });
    return makeIterator(items);
  };
  /**
   * Returns an iterator allowing to go through all key/value
   * pairs contained in this object.
   *
   * @returns {function}
   */


  USPProto.entries = USPProto.entries || function () {
    var items = [];
    this.forEach(function (item, name) {
      items.push([name, item]);
    });
    return makeIterator(items);
  };

  if (iterable) {
    USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
  }

  function encode(str) {
    var replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
      return replace[match];
    });
  }

  function decode(str) {
    return str.replace(/[ +]/g, '%20').replace(/(%[a-f0-9]{2})+/ig, function (match) {
      return decodeURIComponent(match);
    });
  }

  function makeIterator(arr) {
    var iterator = {
      next: function () {
        var value = arr.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (iterable) {
      iterator[self.Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function parseToDict(search) {
    var dict = {};

    if (typeof search === "object") {
      // if `search` is an array, treat it as a sequence
      if (isArray(search)) {
        for (var i = 0; i < search.length; i++) {
          var item = search[i];

          if (isArray(item) && item.length === 2) {
            appendTo(dict, item[0], item[1]);
          } else {
            throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
          }
        }
      } else {
        for (var key in search) {
          if (search.hasOwnProperty(key)) {
            appendTo(dict, key, search[key]);
          }
        }
      }
    } else {
      // remove first '?'
      if (search.indexOf("?") === 0) {
        search = search.slice(1);
      }

      var pairs = search.split("&");

      for (var j = 0; j < pairs.length; j++) {
        var value = pairs[j],
            index = value.indexOf('=');

        if (-1 < index) {
          appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
        } else {
          if (value) {
            appendTo(dict, decode(value), '');
          }
        }
      }
    }

    return dict;
  }

  function appendTo(dict, name, value) {
    var val = typeof value === 'string' ? value : value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value);

    if (name in dict) {
      dict[name].push(val);
    } else {
      dict[name] = [val];
    }
  }

  function isArray(val) {
    return !!val && '[object Array]' === Object.prototype.toString.call(val);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);

/***/ }),

/***/ 97827:
/*!*******************************************************!*\
  !*** ./node_modules/webcrypto-shim/webcrypto-shim.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @file Web Cryptography API shim
 * @author Artem S Vybornov <vybornov@gmail.com>
 * @license MIT
 */
(function (global, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return factory(global);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof self !== 'undefined' ? self : this, function (global) {
  'use strict';

  if (typeof Promise !== 'function') throw "Promise support required";

  var _crypto = global.crypto || global.msCrypto;

  if (!_crypto) return;

  var _subtle = _crypto.subtle || _crypto.webkitSubtle;

  if (!_subtle) return;

  var _Crypto = global.Crypto || _crypto.constructor || Object,
      _SubtleCrypto = global.SubtleCrypto || _subtle.constructor || Object,
      _CryptoKey = global.CryptoKey || global.Key || Object;

  var isEdge = global.navigator.userAgent.indexOf('Edge/') > -1;
  var isIE = !!global.msCrypto && !isEdge;
  var isWebkit = !_crypto.subtle && !!_crypto.webkitSubtle;
  if (!isIE && !isWebkit) return;

  function s2a(s) {
    return btoa(s).replace(/\=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
  }

  function a2s(s) {
    s += '===', s = s.slice(0, -s.length % 4);
    return atob(s.replace(/-/g, '+').replace(/_/g, '/'));
  }

  function s2b(s) {
    var b = new Uint8Array(s.length);

    for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);

    return b;
  }

  function b2s(b) {
    if (b instanceof ArrayBuffer) b = new Uint8Array(b);
    return String.fromCharCode.apply(String, b);
  }

  function alg(a) {
    var r = {
      'name': (a.name || a || '').toUpperCase().replace('V', 'v')
    };

    switch (r.name) {
      case 'SHA-1':
      case 'SHA-256':
      case 'SHA-384':
      case 'SHA-512':
        break;

      case 'AES-CBC':
      case 'AES-GCM':
      case 'AES-KW':
        if (a.length) r['length'] = a.length;
        break;

      case 'HMAC':
        if (a.hash) r['hash'] = alg(a.hash);
        if (a.length) r['length'] = a.length;
        break;

      case 'RSAES-PKCS1-v1_5':
        if (a.publicExponent) r['publicExponent'] = new Uint8Array(a.publicExponent);
        if (a.modulusLength) r['modulusLength'] = a.modulusLength;
        break;

      case 'RSASSA-PKCS1-v1_5':
      case 'RSA-OAEP':
        if (a.hash) r['hash'] = alg(a.hash);
        if (a.publicExponent) r['publicExponent'] = new Uint8Array(a.publicExponent);
        if (a.modulusLength) r['modulusLength'] = a.modulusLength;
        break;

      default:
        throw new SyntaxError("Bad algorithm name");
    }

    return r;
  }

  ;

  function jwkAlg(a) {
    return {
      'HMAC': {
        'SHA-1': 'HS1',
        'SHA-256': 'HS256',
        'SHA-384': 'HS384',
        'SHA-512': 'HS512'
      },
      'RSASSA-PKCS1-v1_5': {
        'SHA-1': 'RS1',
        'SHA-256': 'RS256',
        'SHA-384': 'RS384',
        'SHA-512': 'RS512'
      },
      'RSAES-PKCS1-v1_5': {
        '': 'RSA1_5'
      },
      'RSA-OAEP': {
        'SHA-1': 'RSA-OAEP',
        'SHA-256': 'RSA-OAEP-256'
      },
      'AES-KW': {
        '128': 'A128KW',
        '192': 'A192KW',
        '256': 'A256KW'
      },
      'AES-GCM': {
        '128': 'A128GCM',
        '192': 'A192GCM',
        '256': 'A256GCM'
      },
      'AES-CBC': {
        '128': 'A128CBC',
        '192': 'A192CBC',
        '256': 'A256CBC'
      }
    }[a.name][(a.hash || {}).name || a.length || ''];
  }

  function b2jwk(k) {
    if (k instanceof ArrayBuffer || k instanceof Uint8Array) k = JSON.parse(decodeURIComponent(escape(b2s(k))));
    var jwk = {
      'kty': k.kty,
      'alg': k.alg,
      'ext': k.ext || k.extractable
    };

    switch (jwk.kty) {
      case 'oct':
        jwk.k = k.k;

      case 'RSA':
        ['n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi', 'oth'].forEach(function (x) {
          if (x in k) jwk[x] = k[x];
        });
        break;

      default:
        throw new TypeError("Unsupported key type");
    }

    return jwk;
  }

  function jwk2b(k) {
    var jwk = b2jwk(k);
    if (isIE) jwk['extractable'] = jwk.ext, delete jwk.ext;
    return s2b(unescape(encodeURIComponent(JSON.stringify(jwk)))).buffer;
  }

  function pkcs2jwk(k) {
    var info = b2der(k),
        prv = false;
    if (info.length > 2) prv = true, info.shift(); // remove version from PKCS#8 PrivateKeyInfo structure

    var jwk = {
      'ext': true
    };

    switch (info[0][0]) {
      case '1.2.840.113549.1.1.1':
        var rsaComp = ['n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi'],
            rsaKey = b2der(info[1]);
        if (prv) rsaKey.shift(); // remove version from PKCS#1 RSAPrivateKey structure

        for (var i = 0; i < rsaKey.length; i++) {
          if (!rsaKey[i][0]) rsaKey[i] = rsaKey[i].subarray(1);
          jwk[rsaComp[i]] = s2a(b2s(rsaKey[i]));
        }

        jwk['kty'] = 'RSA';
        break;

      default:
        throw new TypeError("Unsupported key type");
    }

    return jwk;
  }

  function jwk2pkcs(k) {
    var key,
        info = [['', null]],
        prv = false;

    switch (k.kty) {
      case 'RSA':
        var rsaComp = ['n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi'],
            rsaKey = [];

        for (var i = 0; i < rsaComp.length; i++) {
          if (!(rsaComp[i] in k)) break;
          var b = rsaKey[i] = s2b(a2s(k[rsaComp[i]]));
          if (b[0] & 0x80) rsaKey[i] = new Uint8Array(b.length + 1), rsaKey[i].set(b, 1);
        }

        if (rsaKey.length > 2) prv = true, rsaKey.unshift(new Uint8Array([0])); // add version to PKCS#1 RSAPrivateKey structure

        info[0][0] = '1.2.840.113549.1.1.1';
        key = rsaKey;
        break;

      default:
        throw new TypeError("Unsupported key type");
    }

    info.push(new Uint8Array(der2b(key)).buffer);
    if (!prv) info[1] = {
      'tag': 0x03,
      'value': info[1]
    };else info.unshift(new Uint8Array([0])); // add version to PKCS#8 PrivateKeyInfo structure

    return new Uint8Array(der2b(info)).buffer;
  }

  var oid2str = {
    'KoZIhvcNAQEB': '1.2.840.113549.1.1.1'
  },
      str2oid = {
    '1.2.840.113549.1.1.1': 'KoZIhvcNAQEB'
  };

  function b2der(buf, ctx) {
    if (buf instanceof ArrayBuffer) buf = new Uint8Array(buf);
    if (!ctx) ctx = {
      pos: 0,
      end: buf.length
    };
    if (ctx.end - ctx.pos < 2 || ctx.end > buf.length) throw new RangeError("Malformed DER");
    var tag = buf[ctx.pos++],
        len = buf[ctx.pos++];

    if (len >= 0x80) {
      len &= 0x7f;
      if (ctx.end - ctx.pos < len) throw new RangeError("Malformed DER");

      for (var xlen = 0; len--;) xlen <<= 8, xlen |= buf[ctx.pos++];

      len = xlen;
    }

    if (ctx.end - ctx.pos < len) throw new RangeError("Malformed DER");
    var rv;

    switch (tag) {
      case 0x02:
        // Universal Primitive INTEGER
        rv = buf.subarray(ctx.pos, ctx.pos += len);
        break;

      case 0x03:
        // Universal Primitive BIT STRING
        if (buf[ctx.pos++]) throw new Error("Unsupported bit string");
        len--;

      case 0x04:
        // Universal Primitive OCTET STRING
        rv = new Uint8Array(buf.subarray(ctx.pos, ctx.pos += len)).buffer;
        break;

      case 0x05:
        // Universal Primitive NULL
        rv = null;
        break;

      case 0x06:
        // Universal Primitive OBJECT IDENTIFIER
        var oid = btoa(b2s(buf.subarray(ctx.pos, ctx.pos += len)));
        if (!(oid in oid2str)) throw new Error("Unsupported OBJECT ID " + oid);
        rv = oid2str[oid];
        break;

      case 0x30:
        // Universal Constructed SEQUENCE
        rv = [];

        for (var end = ctx.pos + len; ctx.pos < end;) rv.push(b2der(buf, ctx));

        break;

      default:
        throw new Error("Unsupported DER tag 0x" + tag.toString(16));
    }

    return rv;
  }

  function der2b(val, buf) {
    if (!buf) buf = [];
    var tag = 0,
        len = 0,
        pos = buf.length + 2;
    buf.push(0, 0); // placeholder

    if (val instanceof Uint8Array) {
      // Universal Primitive INTEGER
      tag = 0x02, len = val.length;

      for (var i = 0; i < len; i++) buf.push(val[i]);
    } else if (val instanceof ArrayBuffer) {
      // Universal Primitive OCTET STRING
      tag = 0x04, len = val.byteLength, val = new Uint8Array(val);

      for (var i = 0; i < len; i++) buf.push(val[i]);
    } else if (val === null) {
      // Universal Primitive NULL
      tag = 0x05, len = 0;
    } else if (typeof val === 'string' && val in str2oid) {
      // Universal Primitive OBJECT IDENTIFIER
      var oid = s2b(atob(str2oid[val]));
      tag = 0x06, len = oid.length;

      for (var i = 0; i < len; i++) buf.push(oid[i]);
    } else if (val instanceof Array) {
      // Universal Constructed SEQUENCE
      for (var i = 0; i < val.length; i++) der2b(val[i], buf);

      tag = 0x30, len = buf.length - pos;
    } else if (typeof val === 'object' && val.tag === 0x03 && val.value instanceof ArrayBuffer) {
      // Tag hint
      val = new Uint8Array(val.value), tag = 0x03, len = val.byteLength;
      buf.push(0);

      for (var i = 0; i < len; i++) buf.push(val[i]);

      len++;
    } else {
      throw new Error("Unsupported DER value " + val);
    }

    if (len >= 0x80) {
      var xlen = len,
          len = 4;
      buf.splice(pos, 0, xlen >> 24 & 0xff, xlen >> 16 & 0xff, xlen >> 8 & 0xff, xlen & 0xff);

      while (len > 1 && !(xlen >> 24)) xlen <<= 8, len--;

      if (len < 4) buf.splice(pos, 4 - len);
      len |= 0x80;
    }

    buf.splice(pos - 2, 2, tag, len);
    return buf;
  }

  function CryptoKey(key, alg, ext, use) {
    Object.defineProperties(this, {
      _key: {
        value: key
      },
      type: {
        value: key.type,
        enumerable: true
      },
      extractable: {
        value: ext === undefined ? key.extractable : ext,
        enumerable: true
      },
      algorithm: {
        value: alg === undefined ? key.algorithm : alg,
        enumerable: true
      },
      usages: {
        value: use === undefined ? key.usages : use,
        enumerable: true
      }
    });
  }

  function isPubKeyUse(u) {
    return u === 'verify' || u === 'encrypt' || u === 'wrapKey';
  }

  function isPrvKeyUse(u) {
    return u === 'sign' || u === 'decrypt' || u === 'unwrapKey';
  }

  ['generateKey', 'importKey', 'unwrapKey'].forEach(function (m) {
    var _fn = _subtle[m];

    _subtle[m] = function (a, b, c) {
      var args = [].slice.call(arguments),
          ka,
          kx,
          ku;

      switch (m) {
        case 'generateKey':
          ka = alg(a), kx = b, ku = c;
          break;

        case 'importKey':
          ka = alg(c), kx = args[3], ku = args[4];

          if (a === 'jwk') {
            b = b2jwk(b);
            if (!b.alg) b.alg = jwkAlg(ka);
            if (!b.key_ops) b.key_ops = b.kty !== 'oct' ? 'd' in b ? ku.filter(isPrvKeyUse) : ku.filter(isPubKeyUse) : ku.slice();
            args[1] = jwk2b(b);
          }

          break;

        case 'unwrapKey':
          ka = args[4], kx = args[5], ku = args[6];
          args[2] = c._key;
          break;
      }

      if (m === 'generateKey' && ka.name === 'HMAC' && ka.hash) {
        ka.length = ka.length || {
          'SHA-1': 512,
          'SHA-256': 512,
          'SHA-384': 1024,
          'SHA-512': 1024
        }[ka.hash.name];
        return _subtle.importKey('raw', _crypto.getRandomValues(new Uint8Array(ka.length + 7 >> 3)), ka, kx, ku);
      }

      if (isWebkit && m === 'generateKey' && ka.name === 'RSASSA-PKCS1-v1_5' && (!ka.modulusLength || ka.modulusLength >= 2048)) {
        a = alg(a), a.name = 'RSAES-PKCS1-v1_5', delete a.hash;
        return _subtle.generateKey(a, true, ['encrypt', 'decrypt']).then(function (k) {
          return Promise.all([_subtle.exportKey('jwk', k.publicKey), _subtle.exportKey('jwk', k.privateKey)]);
        }).then(function (keys) {
          keys[0].alg = keys[1].alg = jwkAlg(ka);
          keys[0].key_ops = ku.filter(isPubKeyUse), keys[1].key_ops = ku.filter(isPrvKeyUse);
          return Promise.all([_subtle.importKey('jwk', keys[0], ka, true, keys[0].key_ops), _subtle.importKey('jwk', keys[1], ka, kx, keys[1].key_ops)]);
        }).then(function (keys) {
          return {
            publicKey: keys[0],
            privateKey: keys[1]
          };
        });
      }

      if ((isWebkit || isIE && (ka.hash || {}).name === 'SHA-1') && m === 'importKey' && a === 'jwk' && ka.name === 'HMAC' && b.kty === 'oct') {
        return _subtle.importKey('raw', s2b(a2s(b.k)), c, args[3], args[4]);
      }

      if (isWebkit && m === 'importKey' && (a === 'spki' || a === 'pkcs8')) {
        return _subtle.importKey('jwk', pkcs2jwk(b), c, args[3], args[4]);
      }

      if (isIE && m === 'unwrapKey') {
        return _subtle.decrypt(args[3], c, b).then(function (k) {
          return _subtle.importKey(a, k, args[4], args[5], args[6]);
        });
      }

      var op;

      try {
        op = _fn.apply(_subtle, args);
      } catch (e) {
        return Promise.reject(e);
      }

      if (isIE) {
        op = new Promise(function (res, rej) {
          op.onabort = op.onerror = function (e) {
            rej(e);
          };

          op.oncomplete = function (r) {
            res(r.target.result);
          };
        });
      }

      op = op.then(function (k) {
        if (ka.name === 'HMAC') {
          if (!ka.length) ka.length = 8 * k.algorithm.length;
        }

        if (ka.name.search('RSA') == 0) {
          if (!ka.modulusLength) ka.modulusLength = (k.publicKey || k).algorithm.modulusLength;
          if (!ka.publicExponent) ka.publicExponent = (k.publicKey || k).algorithm.publicExponent;
        }

        if (k.publicKey && k.privateKey) {
          k = {
            publicKey: new CryptoKey(k.publicKey, ka, kx, ku.filter(isPubKeyUse)),
            privateKey: new CryptoKey(k.privateKey, ka, kx, ku.filter(isPrvKeyUse))
          };
        } else {
          k = new CryptoKey(k, ka, kx, ku);
        }

        return k;
      });
      return op;
    };
  });
  ['exportKey', 'wrapKey'].forEach(function (m) {
    var _fn = _subtle[m];

    _subtle[m] = function (a, b, c) {
      var args = [].slice.call(arguments);

      switch (m) {
        case 'exportKey':
          args[1] = b._key;
          break;

        case 'wrapKey':
          args[1] = b._key, args[2] = c._key;
          break;
      }

      if ((isWebkit || isIE && (b.algorithm.hash || {}).name === 'SHA-1') && m === 'exportKey' && a === 'jwk' && b.algorithm.name === 'HMAC') {
        args[0] = 'raw';
      }

      if (isWebkit && m === 'exportKey' && (a === 'spki' || a === 'pkcs8')) {
        args[0] = 'jwk';
      }

      if (isIE && m === 'wrapKey') {
        return _subtle.exportKey(a, b).then(function (k) {
          if (a === 'jwk') k = s2b(unescape(encodeURIComponent(JSON.stringify(b2jwk(k)))));
          return _subtle.encrypt(args[3], c, k);
        });
      }

      var op;

      try {
        op = _fn.apply(_subtle, args);
      } catch (e) {
        return Promise.reject(e);
      }

      if (isIE) {
        op = new Promise(function (res, rej) {
          op.onabort = op.onerror = function (e) {
            rej(e);
          };

          op.oncomplete = function (r) {
            res(r.target.result);
          };
        });
      }

      if (m === 'exportKey' && a === 'jwk') {
        op = op.then(function (k) {
          if ((isWebkit || isIE && (b.algorithm.hash || {}).name === 'SHA-1') && b.algorithm.name === 'HMAC') {
            return {
              'kty': 'oct',
              'alg': jwkAlg(b.algorithm),
              'key_ops': b.usages.slice(),
              'ext': true,
              'k': s2a(b2s(k))
            };
          }

          k = b2jwk(k);
          if (!k.alg) k['alg'] = jwkAlg(b.algorithm);
          if (!k.key_ops) k['key_ops'] = b.type === 'public' ? b.usages.filter(isPubKeyUse) : b.type === 'private' ? b.usages.filter(isPrvKeyUse) : b.usages.slice();
          return k;
        });
      }

      if (isWebkit && m === 'exportKey' && (a === 'spki' || a === 'pkcs8')) {
        op = op.then(function (k) {
          k = jwk2pkcs(b2jwk(k));
          return k;
        });
      }

      return op;
    };
  });
  ['encrypt', 'decrypt', 'sign', 'verify'].forEach(function (m) {
    var _fn = _subtle[m];

    _subtle[m] = function (a, b, c, d) {
      if (isIE && (!c.byteLength || d && !d.byteLength)) throw new Error("Empty input is not allowed");
      var args = [].slice.call(arguments),
          ka = alg(a);

      if (isIE && (m === 'sign' || m === 'verify') && (a === 'RSASSA-PKCS1-v1_5' || a === 'HMAC')) {
        args[0] = {
          name: a
        };
      }

      if (isIE && b.algorithm.hash) {
        args[0].hash = args[0].hash || b.algorithm.hash;
      }

      if (isIE && m === 'decrypt' && ka.name === 'AES-GCM') {
        var tl = a.tagLength >> 3;
        args[2] = (c.buffer || c).slice(0, c.byteLength - tl), a.tag = (c.buffer || c).slice(c.byteLength - tl);
      }

      if (isIE && ka.name === 'AES-GCM' && args[0].tagLength === undefined) {
        args[0].tagLength = 128;
      }

      args[1] = b._key;
      var op;

      try {
        op = _fn.apply(_subtle, args);
      } catch (e) {
        return Promise.reject(e);
      }

      if (isIE) {
        op = new Promise(function (res, rej) {
          op.onabort = op.onerror = function (e) {
            rej(e);
          };

          op.oncomplete = function (r) {
            var r = r.target.result;

            if (m === 'encrypt' && r instanceof AesGcmEncryptResult) {
              var c = r.ciphertext,
                  t = r.tag;
              r = new Uint8Array(c.byteLength + t.byteLength);
              r.set(new Uint8Array(c), 0);
              r.set(new Uint8Array(t), c.byteLength);
              r = r.buffer;
            }

            res(r);
          };
        });
      }

      return op;
    };
  });

  if (isIE) {
    var _digest = _subtle.digest;

    _subtle['digest'] = function (a, b) {
      if (!b.byteLength) throw new Error("Empty input is not allowed");
      var op;

      try {
        op = _digest.call(_subtle, a, b);
      } catch (e) {
        return Promise.reject(e);
      }

      op = new Promise(function (res, rej) {
        op.onabort = op.onerror = function (e) {
          rej(e);
        };

        op.oncomplete = function (r) {
          res(r.target.result);
        };
      });
      return op;
    };

    global.crypto = Object.create(_crypto, {
      getRandomValues: {
        value: function (a) {
          return _crypto.getRandomValues(a);
        }
      },
      subtle: {
        value: _subtle
      }
    });
    global.CryptoKey = CryptoKey;
  }

  if (isWebkit) {
    _crypto.subtle = _subtle;
    global.Crypto = _Crypto;
    global.SubtleCrypto = _SubtleCrypto;
    global.CryptoKey = CryptoKey;
  }
});

/***/ }),

/***/ 89799:
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ (function() {

(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function (obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function () {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2

    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };

  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/***/ }),

/***/ 88583:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (() => {

"use strict";

/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

(function (global) {
  const performance = global['performance'];

  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }

  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }

  mark('Zone'); // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.

  const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

  function __symbol__(name) {
    return symbolPrefix + name;
  }

  const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }

  class Zone {
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }

    static assertZonePatched() {
      if (global['Promise'] !== patches['ZoneAwarePromise']) {
        throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
      }
    }

    static get root() {
      let zone = Zone.current;

      while (zone.parent) {
        zone = zone.parent;
      }

      return zone;
    }

    static get current() {
      return _currentZoneFrame.zone;
    }

    static get currentTask() {
      return _currentTask;
    } // tslint:disable-next-line:require-internal-with-underscore


    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        // `checkDuplicate` option is defined from global variable
        // so it works for all modules.
        // `ignoreDuplicate` can work for the specified module
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error('Already loaded patch: ' + name);
        }
      } else if (!global['__Zone_disable_' + name]) {
        const perfName = 'Zone:' + name;
        mark(perfName);
        patches[name] = fn(global, Zone, _api);
        performanceMeasure(perfName, perfName);
      }
    }

    get parent() {
      return this._parent;
    }

    get name() {
      return this._name;
    }

    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }

    getZoneWith(key) {
      let current = this;

      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }

        current = current._parent;
      }

      return null;
    }

    fork(zoneSpec) {
      if (!zoneSpec) throw new Error('ZoneSpec required!');
      return this._zoneDelegate.fork(this, zoneSpec);
    }

    wrap(callback, source) {
      if (typeof callback !== 'function') {
        throw new Error('Expecting function got: ' + callback);
      }

      const _callback = this._zoneDelegate.intercept(this, callback, source);

      const zone = this;
      return function () {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }

    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };

      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }

    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };

      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }

    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
      // will run in notScheduled(canceled) state, we should not try to
      // run such kind of task but just return


      if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
        return;
      }

      const reEntryGuard = task.state != running;
      reEntryGuard && task._transitionTo(running, scheduled);
      task.runCount++;
      const previousTask = _currentTask;
      _currentTask = task;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };

      try {
        if (task.type == macroTask && task.data && !task.data.isPeriodic) {
          task.cancelFn = undefined;
        }

        try {
          return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        // if the task's state is notScheduled or unknown, then it has already been cancelled
        // we should not reset the state to scheduled
        if (task.state !== notScheduled && task.state !== unknown) {
          if (task.type == eventTask || task.data && task.data.isPeriodic) {
            reEntryGuard && task._transitionTo(scheduled, running);
          } else {
            task.runCount = 0;

            this._updateTaskCount(task, -1);

            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
          }
        }

        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }

    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        // check if the task was rescheduled, the newZone
        // should not be the children of the original zone
        let newZone = this;

        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }

          newZone = newZone.parent;
        }
      }

      task._transitionTo(scheduling, notScheduled);

      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;

      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        // should set task's state to unknown when scheduleTask throw error
        // because the err may from reschedule, so the fromState maybe notScheduled
        task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


        this._zoneDelegate.handleError(this, err);

        throw err;
      }

      if (task._zoneDelegates === zoneDelegates) {
        // we have to check because internally the delegate can reschedule the task.
        this._updateTaskCount(task, 1);
      }

      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }

      return task;
    }

    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
    }

    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }

    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }

    cancelTask(task) {
      if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

      task._transitionTo(canceling, scheduled, running);

      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        // if error occurs when cancelTask, transit the state to unknown
        task._transitionTo(unknown, canceling);

        this._zoneDelegate.handleError(this, err);

        throw err;
      }

      this._updateTaskCount(task, -1);

      task._transitionTo(notScheduled, canceling);

      task.runCount = 0;
      return task;
    }

    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;

      if (count == -1) {
        task._zoneDelegates = null;
      }

      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }

  } // tslint:disable-next-line:require-internal-with-underscore


  Zone.__symbol__ = __symbol__;
  const DELEGATE_ZS = {
    name: '',
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };

  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;

        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }

        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }

        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }

    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
    }

    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }

    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }

    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }

    scheduleTask(targetZone, task) {
      let returnTask = task;

      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        } // clang-format off


        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error('Task is missing scheduleFn.');
        }
      }

      return returnTask;
    }

    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }

    cancelTask(targetZone, task) {
      let value;

      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error('Task is not cancelable');
        }

        value = task.cancelFn(task);
      }

      return value;
    }

    hasTask(targetZone, isEmpty) {
      // hasTask should not throw error so other ZoneDelegate
      // can still trigger hasTask callback
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    } // tslint:disable-next-line:require-internal-with-underscore


    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;

      if (next < 0) {
        throw new Error('More tasks executed then were scheduled.');
      }

      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts['microTask'] > 0,
          macroTask: counts['macroTask'] > 0,
          eventTask: counts['eventTask'] > 0,
          change: type
        };
        this.hasTask(this.zone, isEmpty);
      }
    }

  }

  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

      this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;

      if (!callback) {
        throw new Error('callback is not defined');
      }

      this.callback = callback;
      const self = this; // TODO: @JiaLiPassion options should have interface

      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }

    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }

      _numberOfNestedTaskFrames++;

      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }

        _numberOfNestedTaskFrames--;
      }
    }

    get zone() {
      return this._zone;
    }

    get state() {
      return this._state;
    }

    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    } // tslint:disable-next-line:require-internal-with-underscore


    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;

        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
      }
    }

    toString() {
      if (this.data && typeof this.data.handleId !== 'undefined') {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    } // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)


    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }

  } //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////


  const symbolSetTimeout = __symbol__('setTimeout');

  const symbolPromise = __symbol__('Promise');

  const symbolThen = __symbol__('then');

  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;

  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }

    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];

      if (!nativeThen) {
        // native Promise is not patchable, we need to use `then` directly
        // issue 1078
        nativeThen = nativeMicroTaskQueuePromise['then'];
      }

      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }

  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }

    task && _microTaskQueue.push(task);
  }

  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;

      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];

        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];

          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }

      _api.microtaskDrainDone();

      _isDrainingMicrotaskQueue = false;
    }
  } //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////


  const NO_ZONE = {
    name: 'NO ZONE'
  };
  const notScheduled = 'notScheduled',
        scheduling = 'scheduling',
        scheduled = 'scheduled',
        running = 'running',
        canceling = 'canceling',
        unknown = 'unknown';
  const microTask = 'microTask',
        macroTask = 'macroTask',
        eventTask = 'eventTask';
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => undefined,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => undefined,
    ObjectCreate: () => undefined,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask: nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;

  function noop() {}

  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name

/** Object.getOwnPropertyDescriptor */


const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */

const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */

const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */

const ObjectCreate = Object.create;
/** Array.prototype.slice */

const ArraySlice = Array.prototype.slice;
/** addEventListener string const */

const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */

const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */

const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */


const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */


const TRUE_STR = 'true';
/** false string const */

const FALSE_STR = 'false';
/** Zone symbol prefix string const. */

const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}

function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}

const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;

const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

const REMOVE_ATTRIBUTE = 'removeAttribute';

function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }

  return args;
}

function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor['name'];

  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];

    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }

      prototype[name] = (delegate => {
        const patched = function () {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };

        attachOriginToPatched(patched, delegate);
        return patched;
      })(delegate);
    }
  }
}

function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }

  if (propertyDesc.writable === false) {
    return false;
  }

  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}

const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.

const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.

const isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};

const wrapFn = function (event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;

  if (!event) {
    return;
  }

  let eventNameSymbol = zoneSymbolEventNames$1[event.type];

  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }

  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;

  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signature
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);

    if (result != undefined && !result) {
      event.preventDefault();
    }
  }

  return result;
};

function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);

  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  } // if the descriptor not exists or is not configurable
  // just return


  if (!desc || !desc.configurable) {
    return;
  }

  const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  } // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified


  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set; // slice(2) cuz 'onclick' -> 'click', etc

  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];

  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }

  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;

    if (!target && obj === _global) {
      target = _global;
    }

    if (!target) {
      return;
    }

    const previousValue = target[eventNameSymbol];

    if (typeof previousValue === 'function') {
      target.removeEventListener(eventName, wrapFn);
    } // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet


    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;

    if (typeof newValue === 'function') {
      target.addEventListener(eventName, wrapFn, false);
    }
  }; // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null


  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;

    if (!target && obj === _global) {
      target = _global;
    }

    if (!target) {
      return null;
    }

    const listener = target[eventNameSymbol];

    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      let value = originalDescGet.call(this);

      if (value) {
        desc.set.call(this, value);

        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }

        return value;
      }
    }

    return null;
  };

  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}

function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    const onProperties = [];

    for (const prop in obj) {
      if (prop.slice(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }

    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}

const originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return; // keep original class in global

  _global[zoneSymbol(className)] = OriginalClass;

  _global[className] = function () {
    const a = bindArguments(arguments, className);

    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;

      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;

      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;

      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;

      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;

      default:
        throw new Error('Arg list too long.');
    }
  }; // attach original delegate to patched function


  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function () {});
  let prop;

  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.

              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }

  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}

function patchMethod(target, name, patchFn) {
  let proto = target;

  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }

  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }

  const delegateName = zoneSymbol(name);
  let delegate = null;

  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);

      proto[name] = function () {
        return patchDelegate(this, arguments);
      };

      attachOriginToPatched(proto[name], delegate);
    }
  }

  return delegate;
} // TODO: @JiaLiPassion, support cancel task later if necessary


function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;

  function scheduleTask(task) {
    const data = task.data;

    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };

    setNative.apply(data.target, data.args);
    return task;
  }

  setNative = patchMethod(obj, funcName, delegate => function (self, args) {
    const meta = metaCreator(self, args);

    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      // cause an error by calling it directly.
      return delegate.apply(self, args);
    }
  });
}

function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}

let isDetectedIEOrEdge = false;
let ieOrEdge = false;

function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;

    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}

  return false;
}

function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }

  isDetectedIEOrEdge = true;

  try {
    const ua = internalWindow.navigator.userAgent;

    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}

  return ieOrEdge;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
  const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  const ObjectDefineProperty = Object.defineProperty;

  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      const className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }

    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }

  const __symbol__ = api.symbol;
  const _uncaughtPromiseErrors = [];
  const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

  const symbolPromise = __symbol__('Promise');

  const symbolThen = __symbol__('then');

  const creationTrace = '__creationTrace__';

  api.onUnhandledError = e => {
    if (api.showUncaughtError()) {
      const rejection = e && e.rejection;

      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };

  api.microtaskDrainDone = () => {
    while (_uncaughtPromiseErrors.length) {
      const uncaughtPromiseError = _uncaughtPromiseErrors.shift();

      try {
        uncaughtPromiseError.zone.runGuarded(() => {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }

          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    }
  };

  const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);

    try {
      const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }

  function isThenable(value) {
    return value && value.then;
  }

  function forwardResolution(value) {
    return value;
  }

  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }

  const symbolState = __symbol__('state');

  const symbolValue = __symbol__('value');

  const symbolFinally = __symbol__('finally');

  const symbolParentPromiseValue = __symbol__('parentPromiseValue');

  const symbolParentPromiseState = __symbol__('parentPromiseState');

  const source = 'Promise.then';
  const UNRESOLVED = null;
  const RESOLVED = true;
  const REJECTED = false;
  const REJECTED_NO_CATCH = 0;

  function makeResolver(promise, state) {
    return v => {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      } // Do not return value or you will break the Promise spec.

    };
  }

  const once = function () {
    let wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }

        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };

  const TYPE_ERROR = 'Promise resolved with itself';

  const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


  function resolvePromise(promise, state, value) {
    const onceWrapper = once();

    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }

    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      let then = null;

      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(() => {
          resolvePromise(promise, false, err);
        })();
        return promise;
      } // if (value instanceof ZoneAwarePromise) {


      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        const queue = promise[symbolValue];
        promise[symbolValue] = value;

        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        } // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace


        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }

        for (let i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }

        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          let uncaughtPromiseError = value;

          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }

          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }

          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;

          _uncaughtPromiseErrors.push(uncaughtPromiseError);

          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    } // Resolving an already resolved promise is a noop.


    return promise;
  }

  const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        const handler = Zone[REJECTION_HANDLED_HANDLER];

        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}

      promise[symbolState] = REJECTED;

      for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }

  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    const promiseState = promise[symbolState];
    const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, () => {
      try {
        const parentPromiseValue = promise[symbolValue];
        const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        } // should not pass value to finally callback


        const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }

  const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

  const noop = function () {};

  const AggregateError = global.AggregateError;

  class ZoneAwarePromise {
    static toString() {
      return ZONE_AWARE_PROMISE_TO_STRING;
    }

    static resolve(value) {
      return resolvePromise(new this(null), RESOLVED, value);
    }

    static reject(error) {
      return resolvePromise(new this(null), REJECTED, error);
    }

    static any(values) {
      if (!values || typeof values[Symbol.iterator] !== 'function') {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }

      const promises = [];
      let count = 0;

      try {
        for (let v of values) {
          count++;
          promises.push(ZoneAwarePromise.resolve(v));
        }
      } catch (err) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }

      if (count === 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }

      let finished = false;
      const errors = [];
      return new ZoneAwarePromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(v => {
            if (finished) {
              return;
            }

            finished = true;
            resolve(v);
          }, err => {
            errors.push(err);
            count--;

            if (count === 0) {
              finished = true;
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
        }
      });
    }

    static race(values) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });

      function onResolve(value) {
        resolve(value);
      }

      function onReject(error) {
        reject(error);
      }

      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }

        value.then(onResolve, onReject);
      }

      return promise;
    }

    static all(values) {
      return ZoneAwarePromise.allWithCallback(values);
    }

    static allSettled(values) {
      const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
      return P.allWithCallback(values, {
        thenCallback: value => ({
          status: 'fulfilled',
          value
        }),
        errorCallback: err => ({
          status: 'rejected',
          reason: err
        })
      });
    }

    static allWithCallback(values, callback) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

      let unresolvedCount = 2;
      let valueIndex = 0;
      const resolvedValues = [];

      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }

        const curValueIndex = valueIndex;

        try {
          value.then(value => {
            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
            unresolvedCount--;

            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
          }, err => {
            if (!callback) {
              reject(err);
            } else {
              resolvedValues[curValueIndex] = callback.errorCallback(err);
              unresolvedCount--;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }
          });
        } catch (thenErr) {
          reject(thenErr);
        }

        unresolvedCount++;
        valueIndex++;
      } // Make the unresolvedCount zero-based again.


      unresolvedCount -= 2;

      if (unresolvedCount === 0) {
        resolve(resolvedValues);
      }

      return promise;
    }

    constructor(executor) {
      const promise = this;

      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }

      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;

      try {
        const onceWrapper = once();
        executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }

    get [Symbol.toStringTag]() {
      return 'Promise';
    }

    get [Symbol.species]() {
      return ZoneAwarePromise;
    }

    then(onFulfilled, onRejected) {
      var _a; // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
      // may be an object without a prototype (created through `Object.create(null)`); thus
      // `this.constructor` will be undefined. One of the use cases is SystemJS creating
      // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
      // object and copies promise properties into that object (within the `getOrCreateLoad`
      // function). The zone.js then checks if the resolved value has the `then` method and invokes
      // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
      // properties of undefined (reading 'Symbol(Symbol.species)')`.


      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

      if (!C || typeof C !== 'function') {
        C = this.constructor || ZoneAwarePromise;
      }

      const chainPromise = new C(noop);
      const zone = Zone.current;

      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
      }

      return chainPromise;
    }

    catch(onRejected) {
      return this.then(null, onRejected);
    }

    finally(onFinally) {
      var _a; // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.


      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

      if (!C || typeof C !== 'function') {
        C = ZoneAwarePromise;
      }

      const chainPromise = new C(noop);
      chainPromise[symbolFinally] = symbolFinally;
      const zone = Zone.current;

      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
      }

      return chainPromise;
    }

  } // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.


  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  const NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;

  const symbolThenPatched = __symbol__('thenPatched');

  function patchThen(Ctor) {
    const proto = Ctor.prototype;
    const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }

    const originalThen = proto.then; // Keep a reference to the original method.

    proto[symbolThen] = originalThen;

    Ctor.prototype.then = function (onResolve, onReject) {
      const wrapped = new ZoneAwarePromise((resolve, reject) => {
        originalThen.call(this, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };

    Ctor[symbolThenPatched] = true;
  }

  api.patchThen = patchThen;

  function zoneify(fn) {
    return function (self, args) {
      let resultPromise = fn.apply(self, args);

      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }

      let ctor = resultPromise.constructor;

      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }

      return resultPromise;
    };
  }

  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', delegate => zoneify(delegate));
  } // This is not part of public API, but it is useful for tests, so we expose it.


  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function


Zone.__load_patch('toString', global => {
  // patch Func.prototype.toString to let them look like native
  const originalFunctionToString = Function.prototype.toString;
  const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  const PROMISE_SYMBOL = zoneSymbol('Promise');
  const ERROR_SYMBOL = zoneSymbol('Error');

  const newFunctionToString = function toString() {
    if (typeof this === 'function') {
      const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }

      if (this === Promise) {
        const nativePromise = global[PROMISE_SYMBOL];

        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }

      if (this === Error) {
        const nativeError = global[ERROR_SYMBOL];

        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }

    return originalFunctionToString.call(this);
  };

  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

  const originalObjectToString = Object.prototype.toString;
  const PROMISE_OBJECT_TO_STRING = '[object Promise]';

  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }

    return originalObjectToString.call(this);
  };
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let passiveSupported = false;

if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    }); // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.

    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
} // an identifier to tell ZoneTask do not create a new invoke closure


const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}

function patchEventTarget(_global, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  const PREPEND_EVENT_LISTENER = 'prependListener';
  const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

  const invokeTask = function (task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }

    const delegate = task.callback;

    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = event => delegate.handleEvent(event);

      task.originalDelegate = delegate;
    } // invoke static task.invoke
    // need to try/catch error here, otherwise, the error in one event listener
    // will break the executions of the other event listeners. Also error will
    // not remove the event listener when `once` options is true.


    let error;

    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }

    const options = task.options;

    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
    }

    return error;
  };

  function globalCallback(context, event, isCapture) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    } // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190


    const target = context || event.target || _global;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];

    if (tasks) {
      const errors = []; // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke

      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        const copyTasks = tasks.slice();

        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }

          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      } // Since there is only one error, we don't need to schedule microTask
      // to throw the error.


      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  } // global shared zoneAwareCallback to handle all event callback with capture = false


  const globalZoneAwareCallback = function (event) {
    return globalCallback(this, event, false);
  }; // global shared zoneAwareCallback to handle all event callback with capture = true


  const globalZoneAwareCaptureCallback = function (event) {
    return globalCallback(this, event, true);
  };

  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }

    let useGlobalCallback = true;

    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }

    const validateHandler = patchOptions && patchOptions.vh;
    let checkDuplicate = true;

    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }

    let returnTarget = false;

    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }

    let proto = obj;

    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }

    if (!proto) {
      return false;
    }

    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }

    const eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data

    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;

    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */


    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }

      if (!passiveSupported || !passive) {
        return options;
      }

      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }

      if (!options) {
        return {
          passive: true
        };
      }

      if (typeof options === 'object' && options.passive !== false) {
        return Object.assign(Object.assign({}, options), {
          passive: true
        });
      }

      return options;
    }

    const customScheduleGlobal = function (task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }

      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };

    const customCancelGlobal = function (task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }

        const existingTasks = symbolEventName && task.target[symbolEventName];

        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];

            if (existingTask === task) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              task.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }

              break;
            }
          }
        }
      } // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return


      if (!task.allRemoved) {
        return;
      }

      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };

    const customScheduleNonGlobal = function (task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };

    const customSchedulePrepend = function (task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };

    const customCancelNonGlobal = function (task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };

    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

    const compareTaskCallbackVsDelegate = function (task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };

    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];

    const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

    const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
      return function () {
        const target = this || _global;
        let eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        let delegate = arguments[1];

        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }

        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        } // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke


        let isHandleEvent = false;

        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }

          isHandleEvent = true;
        }

        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }

        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(arguments[2], passive);

        if (unpatchedEvents) {
          // check unpatched list
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }

        const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        const once = options && typeof options === 'object' ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];

        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }

        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;

        if (existingTasks) {
          // already have task registered
          isExisting = true;

          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }

        let source;
        const constructorName = target.constructor['name'];
        const targetSource = globalSources[constructorName];

        if (targetSource) {
          source = targetSource[eventName];
        }

        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        } // do not create a new object as task.data to pass those things
        // just use the global shared one


        taskData.options = options;

        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }

        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

        if (data) {
          data.taskData = taskData;
        }

        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442

        taskData.target = null; // need to clear up taskData because it is a global object

        if (data) {
          data.taskData = null;
        } // have to save those information to task in case
        // application may call task.zone.cancelTask() directly


        if (once) {
          options.once = true;
        }

        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }

        task.target = target;
        task.capture = capture;
        task.eventName = eventName;

        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }

        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }

        if (returnTarget) {
          return target;
        }
      };
    };

    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }

    proto[REMOVE_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];

      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }

      const options = arguments[2];
      const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      const delegate = arguments[1];

      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }

      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }

      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;

      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }

      const existingTasks = symbolEventName && target[symbolEventName];

      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];

          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

            existingTask.isRemoved = true;

            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed

              if (typeof eventName === 'string') {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }

            existingTask.zone.cancelTask(existingTask);

            if (returnTarget) {
              return target;
            }

            return;
          }
        }
      } // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.


      return nativeRemoveEventListener.apply(this, arguments);
    };

    proto[LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];

      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }

      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }

      return listeners;
    };

    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];

      if (!eventName) {
        const keys = Object.keys(target);

        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed

          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        } // remove removeListener listener finally


        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        const symbolEventNames = zoneSymbolEventNames[eventName];

        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];

          if (tasks) {
            const removeTasks = tasks.slice();

            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }

          if (captureTasks) {
            const removeTasks = captureTasks.slice();

            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }

      if (returnTarget) {
        return this;
      }
    }; // for native toString patch


    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }

    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }

    return true;
  }

  let results = [];

  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }

  return results;
}

function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];

    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];

      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];

        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }

    return foundTasks;
  }

  let symbolEventName = zoneSymbolEventNames[eventName];

  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }

  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];

  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}

function patchEventPrototype(global, api) {
  const Event = global['Event'];

  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', delegate => function (self, args) {
      self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
      // in case in some hybrid application, some part of
      // application will be controlled by zone, some are not

      delegate && delegate.apply(self, args);
    });
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);

  if (target[symbol]) {
    return;
  }

  const nativeDelegate = target[symbol] = target[method];

  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype; // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
        // `customElements.define`. We explicitly wrap the patching code into try-catch since
        // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
        // make those properties non-writable. This means that patching callback will throw an error
        // `cannot assign to read-only property`. See this code as an example:
        // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
        // We don't want to stop the application rendering if we couldn't patch some
        // callback, e.g. `attributeChangedCallback`.

        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (_a) {// Note: we leave the catch block empty since there's no way to handle the error related
          // to non-writable property.
        }
      });
    }

    return nativeDelegate.call(target, name, opts, options);
  };

  api.attachOriginToPatched(target[method], nativeDelegate);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }

  const tip = ignoreProperties.filter(ip => ip.target === target);

  if (!tip || tip.length === 0) {
    return onProperties;
  }

  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}

function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }

  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */


function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter(name => name.startsWith('on') && name.length > 2).map(name => name.substring(2));
}

function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }

  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }

  const ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

  let patchTargets = [];

  if (isBrowser) {
    const internalWindow = window;
    patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow,
      ignoreProperties: ['error']
    }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not

    patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
  }

  patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);

  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('util', (global, Zone, api) => {
  // Collect native event names by looking at properties
  // on the global namespace, e.g. 'onclick'.
  const eventNames = getOnEventNames(global);
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.

  const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

  const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }

  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }

  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;

  api.getGlobalObjects = () => ({
    globalSources,
    zoneSymbolEventNames,
    eventNames,
    isBrowser,
    isMix,
    isNode,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX,
    ADD_EVENT_LISTENER_STR,
    REMOVE_EVENT_LISTENER_STR
  });
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const taskSymbol = zoneSymbol('zoneTask');

function patchTimer(window, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};

  function scheduleTask(task) {
    const data = task.data;

    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };

    data.handleId = setNative.apply(window, data.args);
    return task;
  }

  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }

  setNative = patchMethod(window, setName, delegate => function (self, args) {
    if (typeof args[0] === 'function') {
      const options = {
        isPeriodic: nameSuffix === 'Interval',
        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
        args: args
      };
      const callback = args[0];

      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          // https://github.com/angular/angular/issues/40387
          // Cleanup tasksByHandleId should be handled before scheduleTask
          // Since some zoneSpec may intercept and doesn't trigger
          // scheduleFn(scheduleTask) provided here.
          if (!options.isPeriodic) {
            if (typeof options.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[options.handleId];
            } else if (options.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              options.handleId[taskSymbol] = null;
            }
          }
        }
      };

      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);

      if (!task) {
        return task;
      } // Node.js must additionally support the ref and unref functions.


      const handle = task.data.handleId;

      if (typeof handle === 'number') {
        // for non nodejs env, we save handleId: task
        // mapping in local cache for clearTimeout
        tasksByHandleId[handle] = task;
      } else if (handle) {
        // for nodejs env, we save task
        // reference in timerId Object for clearTimeout
        handle[taskSymbol] = task;
      } // check whether handle is null, because some polyfill or browser
      // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


      if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
        task.ref = handle.ref.bind(handle);
        task.unref = handle.unref.bind(handle);
      }

      if (typeof handle === 'number' || handle) {
        return handle;
      }

      return task;
    } else {
      // cause an error by calling it directly.
      return delegate.apply(window, args);
    }
  });
  clearNative = patchMethod(window, cancelName, delegate => function (self, args) {
    const id = args[0];
    let task;

    if (typeof id === 'number') {
      // non nodejs env.
      task = tasksByHandleId[id];
    } else {
      // nodejs env.
      task = id && id[taskSymbol]; // other environments.

      if (!task) {
        task = id;
      }
    }

    if (task && typeof task.type === 'string') {
      if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
        if (typeof id === 'number') {
          delete tasksByHandleId[id];
        } else if (id) {
          id[taskSymbol] = null;
        } // Do not cancel already canceled functions


        task.zone.cancelTask(task);
      }
    } else {
      // cause an error by calling it directly.
      delegate.apply(window, args);
    }
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function patchCustomElements(_global, api) {
  const {
    isBrowser,
    isMix
  } = api.getGlobalObjects();

  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }

  const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }

  const {
    eventNames,
    zoneSymbolEventNames,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX
  } = api.getGlobalObjects(); //  predefine all __zone_symbol__ + eventName + true/false string

  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR;
    const trueEventName = eventName + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }

  const EVENT_TARGET = _global['EventTarget'];

  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }

  api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}

function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


Zone.__load_patch('legacy', global => {
  const legacyPatch = global[Zone.__symbol__('legacyPatch')];

  if (legacyPatch) {
    legacyPatch();
  }
});

Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
  api.patchMethod(global, 'queueMicrotask', delegate => {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
});

Zone.__load_patch('timers', global => {
  const set = 'set';
  const clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});

Zone.__load_patch('requestAnimationFrame', global => {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});

Zone.__load_patch('blocking', (global, Zone) => {
  const blockingMethods = ['alert', 'prompt', 'confirm'];

  for (let i = 0; i < blockingMethods.length; i++) {
    const name = blockingMethods[i];
    patchMethod(global, name, (delegate, symbol, name) => {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});

Zone.__load_patch('EventTarget', (global, Zone, api) => {
  patchEvent(global, api);
  eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

  const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
  }
});

Zone.__load_patch('MutationObserver', (global, Zone, api) => {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});

Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
  patchClass('IntersectionObserver');
});

Zone.__load_patch('FileReader', (global, Zone, api) => {
  patchClass('FileReader');
});

Zone.__load_patch('on_property', (global, Zone, api) => {
  propertyDescriptorPatch(api, global);
});

Zone.__load_patch('customElements', (global, Zone, api) => {
  patchCustomElements(global, api);
});

Zone.__load_patch('XHR', (global, Zone) => {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  const XHR_TASK = zoneSymbol('xhrTask');
  const XHR_SYNC = zoneSymbol('xhrSync');
  const XHR_LISTENER = zoneSymbol('xhrListener');
  const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  const XHR_URL = zoneSymbol('xhrURL');
  const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

  function patchXHR(window) {
    const XMLHttpRequest = window['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }

    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;

    function findPendingTask(target) {
      return target[XHR_TASK];
    }

    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

    if (!oriAddListener) {
      const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget) {
        const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }

    const READY_STATE_CHANGE = 'readystatechange';
    const SCHEDULED = 'scheduled';

    function scheduleTask(task) {
      const data = task.data;
      const target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

      const listener = target[XHR_LISTENER];

      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }

      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }

      const newListener = target[XHR_LISTENER] = () => {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            const loadTasks = target[Zone.__symbol__('loadfalse')];

            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              const oriInvoke = task.invoke;

              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                const loadTasks = target[Zone.__symbol__('loadfalse')];

                for (let i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }

                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };

              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };

      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      const storedTask = target[XHR_TASK];

      if (!storedTask) {
        target[XHR_TASK] = task;
      }

      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }

    function placeholderCallback() {}

    function clearTask(task) {
      const data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.

      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }

    const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
      self[XHR_SYNC] = args[2] == false;
      self[XHR_URL] = args[1];
      return openNative.apply(self, args);
    });
    const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
      if (Zone.current[fetchTaskScheduling] === true) {
        // a fetch is scheduling, so we are using xhr to polyfill fetch
        // and because we already schedule macroTask for fetch, we should
        // not schedule a macroTask for xhr again
        return sendNative.apply(self, args);
      }

      if (self[XHR_SYNC]) {
        // if the XHR is sync there is no task to schedule, just execute the code.
        return sendNative.apply(self, args);
      } else {
        const options = {
          target: self,
          url: self[XHR_URL],
          isPeriodic: false,
          args: args,
          aborted: false
        };
        const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);

        if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
          // xhr request throw error when send
          // we should invoke task instead of leaving a scheduled
          // pending macroTask
          task.invoke();
        }
      }
    });
    const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
      const task = findPendingTask(self);

      if (task && typeof task.type == 'string') {
        // If the XHR has already completed, do nothing.
        // If the XHR has already been aborted, do nothing.
        // Fix #569, call abort multiple times before done will cause
        // macroTask task count be negative number
        if (task.cancelFn == null || task.data && task.data.aborted) {
          return;
        }

        task.zone.cancelTask(task);
      } else if (Zone.current[fetchTaskAborting] === true) {
        // the abort is called from fetch polyfill, we need to call native abort of XHR.
        return abortNative.apply(self, args);
      } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
      // task
      // to cancel. Do nothing.

    });
  }
});

Zone.__load_patch('geolocation', global => {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});

Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      const eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(eventTask => {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        const PromiseRejectionEvent = global['PromiseRejectionEvent'];

        if (PromiseRejectionEvent) {
          const evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }

  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});

/***/ }),

/***/ 43499:
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.reflect.apply */ 21572);
__webpack_require__(/*! ../modules/es6.reflect.construct */ 82139);
__webpack_require__(/*! ../modules/es6.reflect.define-property */ 10685);
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ 85535);
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ 17347);
__webpack_require__(/*! ../modules/es6.reflect.get */ 83049);
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ 96633);
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ 68989);
__webpack_require__(/*! ../modules/es6.reflect.has */ 78270);
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ 64510);
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ 73984);
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ 75769);
__webpack_require__(/*! ../modules/es6.reflect.set */ 50055);
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ 96014);
module.exports = __webpack_require__(/*! ../modules/_core */ 25645).Reflect;


/***/ }),

/***/ 13991:
/*!*******************************************!*\
  !*** ./node_modules/core-js/es7/array.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.array.includes */ 62773);
__webpack_require__(/*! ../modules/es7.array.flat-map */ 1268);
__webpack_require__(/*! ../modules/es7.array.flatten */ 94692);
module.exports = __webpack_require__(/*! ../modules/_core */ 25645).Array;


/***/ }),

/***/ 29523:
/*!********************************************!*\
  !*** ./node_modules/core-js/es7/object.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.object.get-own-property-descriptors */ 98351);
__webpack_require__(/*! ../modules/es7.object.values */ 96409);
__webpack_require__(/*! ../modules/es7.object.entries */ 46073);
__webpack_require__(/*! ../modules/es7.object.define-getter */ 48646);
__webpack_require__(/*! ../modules/es7.object.define-setter */ 22658);
__webpack_require__(/*! ../modules/es7.object.lookup-getter */ 16917);
__webpack_require__(/*! ../modules/es7.object.lookup-setter */ 30372);
module.exports = __webpack_require__(/*! ../modules/_core */ 25645).Object;


/***/ }),

/***/ 24963:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 17722:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ 86314)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ 87728)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 27007:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ 55286);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 79315:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);
var toLength = __webpack_require__(/*! ./_to-length */ 10875);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 42736:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ 55286);
var isArray = __webpack_require__(/*! ./_is-array */ 4302);
var SPECIES = __webpack_require__(/*! ./_wks */ 86314)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 16886:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ 42736);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 34398:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ 24963);
var isObject = __webpack_require__(/*! ./_is-object */ 55286);
var invoke = __webpack_require__(/*! ./_invoke */ 97242);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ 92032:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 25645:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 92811:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ 99275);
var createDesc = __webpack_require__(/*! ./_property-desc */ 90681);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 741:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 24963);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 91355:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 67057:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 74253)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 62457:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ 55286);
var document = (__webpack_require__(/*! ./_global */ 3816).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 74430:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 42985:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ 3816);
var core = __webpack_require__(/*! ./_core */ 25645);
var hide = __webpack_require__(/*! ./_hide */ 87728);
var redefine = __webpack_require__(/*! ./_redefine */ 77234);
var ctx = __webpack_require__(/*! ./_ctx */ 741);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 74253:
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 13325:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ 4302);
var isObject = __webpack_require__(/*! ./_is-object */ 55286);
var toLength = __webpack_require__(/*! ./_to-length */ 10875);
var ctx = __webpack_require__(/*! ./_ctx */ 741);
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ 86314)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ 40018:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ 3825)('native-function-to-string', Function.toString);


/***/ }),

/***/ 3816:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 79181:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 87728:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ 99275);
var createDesc = __webpack_require__(/*! ./_property-desc */ 90681);
module.exports = __webpack_require__(/*! ./_descriptors */ 67057) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 40639:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ 3816).document);
module.exports = document && document.documentElement;


/***/ }),

/***/ 1734:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ 67057) && !__webpack_require__(/*! ./_fails */ 74253)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 62457)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 97242:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 49797:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 92032);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 4302:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 92032);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 55286:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 49988:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 42503);
var descriptor = __webpack_require__(/*! ./_property-desc */ 90681);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 22943);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 87728)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 86314)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 4461:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 42503:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var dPs = __webpack_require__(/*! ./_object-dps */ 35588);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 74430);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 69335)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 62457)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ 40639).appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 99275:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 1734);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 67057) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 35588:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ 99275);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var getKeys = __webpack_require__(/*! ./_object-keys */ 47184);

module.exports = __webpack_require__(/*! ./_descriptors */ 67057) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 91670:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(/*! ./_library */ 4461) || !__webpack_require__(/*! ./_fails */ 74253)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(/*! ./_global */ 3816)[K];
});


/***/ }),

/***/ 18693:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ 14682);
var createDesc = __webpack_require__(/*! ./_property-desc */ 90681);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);
var has = __webpack_require__(/*! ./_has */ 79181);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 1734);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 67057) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 20616:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 60189);
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ 74430).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 64548:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 468:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 79181);
var toObject = __webpack_require__(/*! ./_to-object */ 20508);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 69335)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 60189:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ 79181);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 79315)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 69335)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 47184:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 60189);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 74430);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 14682:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 51131:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);
var getKeys = __webpack_require__(/*! ./_object-keys */ 47184);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);
var isEnum = (__webpack_require__(/*! ./_object-pie */ 14682).f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ 57643:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ 20616);
var gOPS = __webpack_require__(/*! ./_object-gops */ 64548);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var Reflect = (__webpack_require__(/*! ./_global */ 3816).Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ 90681:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 77234:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ 3816);
var hide = __webpack_require__(/*! ./_hide */ 87728);
var has = __webpack_require__(/*! ./_has */ 79181);
var SRC = __webpack_require__(/*! ./_uid */ 1634)('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ 40018);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ 25645).inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 27375:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 55286);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ 741)(Function.call, (__webpack_require__(/*! ./_object-gopd */ 18693).f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 22943:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ 99275).f);
var has = __webpack_require__(/*! ./_has */ 79181);
var TAG = __webpack_require__(/*! ./_wks */ 86314)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 69335:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ 3825)('keys');
var uid = __webpack_require__(/*! ./_uid */ 1634);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 3825:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ 25645);
var global = __webpack_require__(/*! ./_global */ 3816);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 4461) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 92337:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ 81467);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 81467:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 22110:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 49797);
var defined = __webpack_require__(/*! ./_defined */ 91355);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 10875:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 81467);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 20508:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 91355);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 21689:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 55286);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 1634:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 86314:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ 3825)('wks');
var uid = __webpack_require__(/*! ./_uid */ 1634);
var Symbol = (__webpack_require__(/*! ./_global */ 3816).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 21572:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ 42985);
var aFunction = __webpack_require__(/*! ./_a-function */ 24963);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var rApply = ((__webpack_require__(/*! ./_global */ 3816).Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ 74253)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ 82139:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ 42985);
var create = __webpack_require__(/*! ./_object-create */ 42503);
var aFunction = __webpack_require__(/*! ./_a-function */ 24963);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var isObject = __webpack_require__(/*! ./_is-object */ 55286);
var fails = __webpack_require__(/*! ./_fails */ 74253);
var bind = __webpack_require__(/*! ./_bind */ 34398);
var rConstruct = ((__webpack_require__(/*! ./_global */ 3816).Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 10685:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ 99275);
var $export = __webpack_require__(/*! ./_export */ 42985);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 85535:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ 42985);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ 18693).f);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 17347:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ 42985);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ 49988)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ 96633:
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);
var $export = __webpack_require__(/*! ./_export */ 42985);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 68989:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ 42985);
var getProto = __webpack_require__(/*! ./_object-gpo */ 468);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ 83049:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);
var has = __webpack_require__(/*! ./_has */ 79181);
var $export = __webpack_require__(/*! ./_export */ 42985);
var isObject = __webpack_require__(/*! ./_is-object */ 55286);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ 78270:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ 42985);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 64510:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ 42985);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ 73984:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ 42985);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ 57643) });


/***/ }),

/***/ 75769:
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ 42985);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 96014:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ 42985);
var setProto = __webpack_require__(/*! ./_set-proto */ 27375);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 50055:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ 99275);
var gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);
var has = __webpack_require__(/*! ./_has */ 79181);
var $export = __webpack_require__(/*! ./_export */ 42985);
var createDesc = __webpack_require__(/*! ./_property-desc */ 90681);
var anObject = __webpack_require__(/*! ./_an-object */ 27007);
var isObject = __webpack_require__(/*! ./_is-object */ 55286);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ 1268:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ 42985);
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ 13325);
var toObject = __webpack_require__(/*! ./_to-object */ 20508);
var toLength = __webpack_require__(/*! ./_to-length */ 10875);
var aFunction = __webpack_require__(/*! ./_a-function */ 24963);
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ 16886);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ 17722)('flatMap');


/***/ }),

/***/ 94692:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(/*! ./_export */ 42985);
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ 13325);
var toObject = __webpack_require__(/*! ./_to-object */ 20508);
var toLength = __webpack_require__(/*! ./_to-length */ 10875);
var toInteger = __webpack_require__(/*! ./_to-integer */ 81467);
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ 16886);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ 17722)('flatten');


/***/ }),

/***/ 62773:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ 42985);
var $includes = __webpack_require__(/*! ./_array-includes */ 79315)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ 17722)('includes');


/***/ }),

/***/ 48646:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ 42985);
var toObject = __webpack_require__(/*! ./_to-object */ 20508);
var aFunction = __webpack_require__(/*! ./_a-function */ 24963);
var $defineProperty = __webpack_require__(/*! ./_object-dp */ 99275);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ 22658:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ 42985);
var toObject = __webpack_require__(/*! ./_to-object */ 20508);
var aFunction = __webpack_require__(/*! ./_a-function */ 24963);
var $defineProperty = __webpack_require__(/*! ./_object-dp */ 99275);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ 46073:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ 42985);
var $entries = __webpack_require__(/*! ./_object-to-array */ 51131)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ 98351:
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ 42985);
var ownKeys = __webpack_require__(/*! ./_own-keys */ 57643);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);
var gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);
var createProperty = __webpack_require__(/*! ./_create-property */ 92811);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ 16917:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ 42985);
var toObject = __webpack_require__(/*! ./_to-object */ 20508);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);
var getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ 18693).f);

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ 30372:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ 42985);
var toObject = __webpack_require__(/*! ./_to-object */ 20508);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);
var getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ 18693).f);

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ 96409:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ 42985);
var $values = __webpack_require__(/*! ./_object-to-array */ 51131)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(7435));
/******/ }
]);