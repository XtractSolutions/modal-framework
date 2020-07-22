(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["modal-framework"] = factory(require("react"));
	else
		root["modal-framework"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(4);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#modal-framework-default #default-modal .close-button {\n  cursor: pointer;\n}\n#modal-framework-default #default-modal .header {\n  background-color: #ffd700;\n  height: 5vh;\n  display: flex;\n  align-items: center;\n  font-size: 1.2em;\n  border-radius: 5px 5px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n}\n#modal-framework-default #default-modal .header .corner-icons {\n  align-self: flex-start;\n  padding: 5px;\n}\n#modal-framework-default #default-modal .modal-content {\n  display: flex;\n  padding: 20px;\n  border-radius: 0px;\n  min-height: 150px;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n  font-size: 1.25em;\n  overflow: visible;\n  box-shadow: none !important;\n  white-space: pre-wrap;\n}\n#modal-framework-default #default-modal .list-group {\n  margin-bottom: 0px;\n}\n#modal-framework-default #default-modal .list-group-item {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n#modal-framework-default #default-modal .corner-icons {\n  display: flex;\n  align-items: center;\n}\n#modal-framework-default #default-modal .btn-group {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n#modal-framework-default .modal-screen-cover {\n  visibility: visible;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: all 0.25s;\n}\n#modal-framework-default .modal-container {\n  overflow: visible;\n  width: 60%;\n  margin: 100px auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  transition: 0.5s ease-in-out;\n  border-radius: 5px;\n  padding: 0px;\n  background: #fff;\n  border: 2px solid #000;\n  left: 0%;\n  right: 0%;\n  position: absolute;\n  top: 0px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(7);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "modalActions", function() { return /* reexport */ modalActions; });
__webpack_require__.d(__webpack_exports__, "modalReducer", function() { return /* reexport */ reducers_modalReducer; });
__webpack_require__.d(__webpack_exports__, "ModalFramework", function() { return /* reexport */ components_ModalFramework; });
__webpack_require__.d(__webpack_exports__, "modalStore", function() { return /* reexport */ modalStore; });

// EXTERNAL MODULE: ./src/styles/indexStyles.styl
var indexStyles = __webpack_require__(2);

// CONCATENATED MODULE: ./src/actions/modalActions.js
function openModal(address, modalConfig) {
  return {
    type: 'open_modal',
    address: address,
    // string or callback
    modalConfig: modalConfig
  };
}
function closeModal(address) {
  return {
    type: 'close_modal',
    address: address
  };
}
function closeAllModals() {
  return {
    type: 'close_all_modals'
  };
}
/* harmony default export */ var modalActions = ({
  openModal: openModal,
  closeModal: closeModal,
  closeAllModals: closeAllModals
});
// CONCATENATED MODULE: ./src/utility/utility.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeId() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
function makeUniqueId() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _loop = function _loop() {
    // look for a uniuqe id
    var address = makeId(length);

    if (state.find(function (modal) {
      return modal.address === address;
    }) === undefined) {
      // we found an unused address
      return {
        v: address
      };
    }
  };

  for (var i = 0; i < 10; i++) {
    var _ret = _loop();

    if (_typeof(_ret) === "object") return _ret.v;
  }

  throw new Error('Unable to generate unique address. To many modals open.');
} // https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
// CONCATENATED MODULE: ./src/reducers/modalReducer.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var address = null;

  switch (action.type) {
    case 'open_modal':
      if (action.address && (typeof action.address === 'string' || action.address instanceof String)) {
        address = action.address;
      } else {
        address = makeUniqueId(10, state);

        if (isFunction(action.address)) {
          action.address(address);
        }
      } // this modals position should be the maximum modals position + 1


      var maxStackPosition = Math.max.apply(Math, state.map(function (modal) {
        return modal.stackPosition;
      }));
      var thisStackPosition = maxStackPosition === -1 * Infinity ? 1 : maxStackPosition + 1; // if we are updating a named modal we need to find it

      var modal = state.find(function (modal) {
        return modal.address === address;
      }); // see if we have a named modal that already exists in which case
      // we just need to update its config but nothing else.

      var newModal = modal === undefined ? {
        address: address,
        config: _objectSpread({}, action.modalConfig),
        stackPosition: thisStackPosition
      } : _objectSpread(_objectSpread({}, modal), {}, {
        config: _objectSpread(_objectSpread({}, modal.config), action.modalConfig)
      }); // new state need to removed the existing modal (if present) before
      // adding the udpated version

      var newState = modal === undefined ? state : state.filter(function (modal) {
        return modal.address !== newModal.address;
      });
      return [].concat(_toConsumableArray(newState), [newModal]);

    case 'close_modal':
      address = action.address;

      if (address == null) {
        throw new Error('close modal action dispatched without required address property.');
      }

      return state.filter(function (modal) {
        return modal.address !== address;
      });

    case 'close_all_modals':
      return [];

    default:
      return state;
  }
}

/* harmony default export */ var reducers_modalReducer = (modalReducer);
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/components/DefaultModal.jsx
var _jsxFileName = "/Users/andrewherren/xtract_sandbox/modal-framework/src/components/DefaultModal.jsx";

function DefaultModal_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DefaultModal_typeof = function _typeof(obj) { return typeof obj; }; } else { DefaultModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DefaultModal_typeof(obj); }

function DefaultModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DefaultModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DefaultModal_ownKeys(Object(source), true).forEach(function (key) { DefaultModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DefaultModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (DefaultModal_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function DefaultModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DefaultModal_DefaultModal = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DefaultModal, _React$PureComponent);

  var _super = _createSuper(DefaultModal);

  function DefaultModal() {
    var _this;

    _classCallCheck(this, DefaultModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    DefaultModal_defineProperty(_assertThisInitialized(_this), "closeHandler", function () {
      return _this.props.closeSelf();
    });

    return _this;
  }

  _createClass(DefaultModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          _this$props$getModalR = _this$props.getModalRef,
          getModalRef = _this$props$getModalR === void 0 ? function () {
        return null;
      } : _this$props$getModalR,
          rest = _objectWithoutProperties(_this$props, ["config", "style", "getModalRef"]);

      var _config$title = config.title,
          title = _config$title === void 0 ? '' : _config$title,
          _config$content = config.content,
          content = _config$content === void 0 ? '' : _config$content,
          _config$closable = config.closable,
          closable = _config$closable === void 0 ? true : _config$closable;
      var _content$type = content.type,
          type = _content$type === void 0 ? {} : _content$type;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        id: "default-modal",
        ref: getModalRef,
        style: style,
        className: "modal-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "list-component list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "list-group-item active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "corner-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("h4", {
        className: "list-group-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "corner-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }, !closable ? null : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "close-button",
        onClick: this.closeHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 19
        }
      }, "\u2716")))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, // rather than simply placing content here, doing it this
      // way allows the modal to accept jsx content and pass down
      // the additional props available here (primarily closeSelf())
      content && typeof type === 'function' // this indicates jsx)
      ?
      /*#__PURE__*/
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(content, DefaultModal_objectSpread({}, rest)) : content)));
    }
  }]);

  return DefaultModal;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.PureComponent);

/* harmony default export */ var components_DefaultModal = (DefaultModal_DefaultModal);
// CONCATENATED MODULE: ./src/components/ModalFramework.jsx
var ModalFramework_jsxFileName = "/Users/andrewherren/xtract_sandbox/modal-framework/src/components/ModalFramework.jsx";

function ModalFramework_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ModalFramework_typeof = function _typeof(obj) { return typeof obj; }; } else { ModalFramework_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ModalFramework_typeof(obj); }

function ModalFramework_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ModalFramework_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ModalFramework_ownKeys(Object(source), true).forEach(function (key) { ModalFramework_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ModalFramework_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModalFramework_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ModalFramework_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ModalFramework_createClass(Constructor, protoProps, staticProps) { if (protoProps) ModalFramework_defineProperties(Constructor.prototype, protoProps); if (staticProps) ModalFramework_defineProperties(Constructor, staticProps); return Constructor; }

function ModalFramework_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ModalFramework_setPrototypeOf(subClass, superClass); }

function ModalFramework_setPrototypeOf(o, p) { ModalFramework_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ModalFramework_setPrototypeOf(o, p); }

function ModalFramework_createSuper(Derived) { var hasNativeReflectConstruct = ModalFramework_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ModalFramework_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ModalFramework_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ModalFramework_possibleConstructorReturn(this, result); }; }

function ModalFramework_possibleConstructorReturn(self, call) { if (call && (ModalFramework_typeof(call) === "object" || typeof call === "function")) { return call; } return ModalFramework_assertThisInitialized(self); }

function ModalFramework_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ModalFramework_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ModalFramework_getPrototypeOf(o) { ModalFramework_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ModalFramework_getPrototypeOf(o); }

function ModalFramework_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ModalFramework_ModalFramework = /*#__PURE__*/function (_React$Component) {
  ModalFramework_inherits(ModalFramework, _React$Component);

  var _super = ModalFramework_createSuper(ModalFramework);

  function ModalFramework() {
    var _this;

    ModalFramework_classCallCheck(this, ModalFramework);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    ModalFramework_defineProperty(ModalFramework_assertThisInitialized(_this), "modalRenderer", function (modal, idx) {
      // build tiling values
      var tile = {};
      var _this$props$tileConfi = _this.props.tileConfig,
          tileConfig = _this$props$tileConfi === void 0 ? {} : _this$props$tileConfi;

      if (tileConfig.horizontal) {
        var pixWidth = tileConfig.horizontal.replace('px', '');
        tile.left = modal.stackPosition * pixWidth + 'px';
      }

      if (tileConfig.vertical) {
        var _pixWidth = tileConfig.vertical.replace('px', '');

        tile.top = modal.stackPosition * _pixWidth + 'px';
      } // render modals


      if (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.count(_this.props.children) === 1) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(_this.props.children, {
          key: modal.address,
          style: ModalFramework_objectSpread({
            zIndex: _this.props.startingZIndex + idx
          }, tile),
          modalAddress: modal.address,
          config: modal.config,
          closeSelf: function closeSelf() {
            return _this.props.dispatch(closeModal(modal.address));
          }
        });
      } else {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components_DefaultModal, {
          key: modal.address,
          style: ModalFramework_objectSpread({
            zIndex: _this.props.startingZIndex + idx
          }, tile),
          config: modal.config,
          modalAddress: modal.adddress,
          closeSelf: function closeSelf() {
            return _this.props.dispatch(closeModal(modal.address));
          },
          __self: ModalFramework_assertThisInitialized(_this),
          __source: {
            fileName: ModalFramework_jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }
        });
      }
    });

    ModalFramework_defineProperty(ModalFramework_assertThisInitialized(_this), "handleMouseDownCapture", function (e) {
      // don't cause what's underneath to lose focus
      e.preventDefault();
      e.stopPropagation();
    });

    return _this;
  }

  ModalFramework_createClass(ModalFramework, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.coverEnabled && this.props.modals && this.props.modals.length >= 1) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
          id: "modal-framework-default",
          __self: this,
          __source: {
            fileName: ModalFramework_jsxFileName,
            lineNumber: 52,
            columnNumber: 9
          }
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
          className: "modal-screen-cover",
          style: {
            // length - 1 because length is 1 based not 0 based
            zIndex: this.props.startingZIndex + this.props.modals.length - 1,
            backgroundColor: "rgba(0,0,0,".concat(this.props.coverOpacity, ")")
          },
          onMouseDownCapture: this.handleMouseDownCapture,
          __self: this,
          __source: {
            fileName: ModalFramework_jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }
        }), this.props.modals.map(function (modal, idx) {
          return _this2.modalRenderer(modal, idx);
        }));
      } else {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
          id: "modal-framework-default",
          __self: this,
          __source: {
            fileName: ModalFramework_jsxFileName,
            lineNumber: 69,
            columnNumber: 9
          }
        }, this.props.modals.map(function (modal, idx) {
          return _this2.modalRenderer(modal, idx);
        }));
      }
    }
  }]);

  return ModalFramework;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var components_ModalFramework = (ModalFramework_ModalFramework);
ModalFramework_ModalFramework.propTypes = {
  children: prop_types_default.a.object,
  modals: prop_types_default.a.array.isRequired,
  dispatch: prop_types_default.a.func.isRequired,
  startingZIndex: prop_types_default.a.number,
  coverOpacity: prop_types_default.a.number,
  coverEnabled: prop_types_default.a.bool,
  tileConfig: prop_types_default.a.object
};
ModalFramework_ModalFramework.defaultProps = {
  startingZIndex: 1000000,
  coverOpacity: 0.5,
  coverEnabled: true
};
// CONCATENATED MODULE: ./src/utility/modalStore.js
// kind of wasteful here but this is in fact the store and this is how we do
// other packages so something to be said for consistency
/* harmony default export */ var modalStore = ([]);
// CONCATENATED MODULE: ./src/index.js










/***/ })
/******/ ]);
});
//# sourceMappingURL=modal-framework.js.map