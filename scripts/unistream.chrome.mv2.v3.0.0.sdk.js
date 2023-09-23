/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 566:
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isISO8601;

var _assertString = _interopRequireDefault(__webpack_require__(774));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/; // same as above, except with a strict 'T' separator between date and time

var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

var isValidDate = function isValidDate(str) {
  // str must have passed the ISO8601 check
  // this check is meant to catch invalid dates
  // like 2009-02-31
  // first check for ordinal dates
  var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

  if (ordinalMatch) {
    var oYear = Number(ordinalMatch[1]);
    var oDay = Number(ordinalMatch[2]); // if is leap year

    if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
    return oDay <= 365;
  }

  var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
  var year = match[1];
  var month = match[2];
  var day = match[3];
  var monthString = month ? "0".concat(month).slice(-2) : month;
  var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

  var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));

  if (month && day) {
    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
  }

  return true;
};

function isISO8601(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
  if (check && options.strict) return isValidDate(str);
  return check;
}

module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ }),

/***/ 774:
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = assertString;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType = _typeof(input);

    if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
    throw new TypeError("Expected a string but received a ".concat(invalidType));
  }
}

module.exports = exports.default;
module.exports["default"] = exports.default;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ UnistreamSDKTypes)
});

;// CONCATENATED MODULE: ../src/logger.ts
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.error = function (msg, info) {
        if (info === void 0) { info = null; }
        if (info === null) {
            console.error(msg);
        }
        else {
            console.error(msg, info);
        }
    };
    Logger.debug = function (msg, info) {
        // if (process.env.ENV !== 'development') {
        if (info === void 0) { info = null; }
        //   return;
        // }
        if (info === null) {
            console.debug(msg);
        }
        else {
            console.debug(msg, info);
        }
    };
    Logger.info = function (msg, info) {
        if (info === void 0) { info = null; }
        if (info === null) {
            console.info(msg);
        }
        else {
            console.info(msg, info);
        }
    };
    return Logger;
}());


;// CONCATENATED MODULE: ../src/Factory.ts
var Factory = /** @class */ (function () {
    function Factory(instance) {
        this.sdkInstance = instance;
    }
    return Factory;
}());


;// CONCATENATED MODULE: ../src/api/api.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api(instance, baseUrl) {
        var _this = _super.call(this, instance) || this;
        if (baseUrl) {
            _this.API_BASE_URL = baseUrl;
        }
        else {
            _this.API_BASE_URL = _this.sdkInstance.options.apiBaseUrl;
        }
        return _this;
    }
    Api.prototype.get = function (endpoint, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.call(endpoint, __assign({ method: 'GET' }, options))];
            });
        });
    };
    Api.prototype.post = function (endpoint, requestData, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                options = this.applyRequestData(requestData, options);
                if (options === null) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, this.call(endpoint, __assign({ method: 'POST' }, options))];
            });
        });
    };
    Api.prototype.patch = function (endpoint, requestData, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                options = this.applyRequestData(requestData, options);
                if (options === null) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, this.call(endpoint, __assign({ method: 'PATCH' }, options))];
            });
        });
    };
    Api.prototype.call = function (endpoint, options) {
        return __awaiter(this, void 0, void 0, function () {
            var user, url, responseRaw, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        user = this.sdkInstance.user;
                        if (!options.headers) {
                            options.headers = {};
                        }
                        if (user) {
                            options.headers['unistream-uuid'] = user.uuid;
                        }
                        options.headers['property-id'] = this.sdkInstance.options.propertyId;
                        options.cache = 'no-store';
                        url = this.API_BASE_URL + endpoint;
                        return [4 /*yield*/, fetch(url, options)];
                    case 1:
                        responseRaw = _a.sent();
                        if (responseRaw.status == 204) {
                            return [2 /*return*/, {}];
                        }
                        return [4 /*yield*/, responseRaw.json()];
                    case 2:
                        data = _a.sent();
                        if (!(responseRaw.status == 403)) return [3 /*break*/, 5];
                        if (!(data.errorReasonKey && data.errorReasonKey === 'invalid_uuid')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.sdkInstance.initializeUser(true)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.call(endpoint, options)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/, data];
                    case 6:
                        e_1 = _a.sent();
                        Logger.error("Connection error at api call endpoint '".concat(endpoint, "'"), e_1);
                        return [2 /*return*/, null];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.applyRequestData = function (data, options) {
        try {
            return __assign({ headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }, options);
        }
        catch (e) {
            return null;
        }
    };
    return Api;
}(Factory));


;// CONCATENATED MODULE: ../src/user.ts
var user_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var user_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var User = /** @class */ (function (_super) {
    user_extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getFromStorageOrCreate = function () {
        return user_awaiter(this, void 0, void 0, function () {
            var uuid, user;
            return user_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sdkInstance.storage.get('uuid')];
                    case 1:
                        uuid = _a.sent();
                        Logger.debug('trying to load user from storage ...');
                        if (!uuid) return [3 /*break*/, 2];
                        Logger.debug('... success. creating user from local storage');
                        user = this.createFromUuid(uuid);
                        return [3 /*break*/, 5];
                    case 2:
                        Logger.debug('... failed. creating user from api');
                        return [4 /*yield*/, this.createUser()];
                    case 3:
                        user = _a.sent();
                        if (user === null) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.sdkInstance.storage.set("uuid", user.uuid)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, user];
                }
            });
        });
    };
    User.prototype.createUser = function () {
        return user_awaiter(this, void 0, void 0, function () {
            var userData, user;
            return user_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sdkInstance.api.post('/user', { version: this.sdkInstance.options.version })];
                    case 1:
                        userData = _a.sent();
                        if (!userData === null || !userData.uuid) {
                            return [2 /*return*/, null];
                        }
                        user = new User(this.sdkInstance);
                        user.uuid = userData.uuid;
                        return [2 /*return*/, user];
                }
            });
        });
    };
    User.prototype.getUserData = function () {
        return user_awaiter(this, void 0, void 0, function () {
            return user_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sdkInstance.storage.get('user_data')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    User.prototype.createFromUuid = function (uuid) {
        var user = new User(this.sdkInstance);
        user.uuid = uuid;
        return user;
    };
    User.prototype.updateUserData = function (userData) {
        return user_awaiter(this, void 0, void 0, function () {
            return user_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete userData['id'];
                        delete userData['createdAt'];
                        return [4 /*yield*/, this.sdkInstance.storage.set('user_data', userData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return User;
}(Factory));

;

;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/validation/ValidationError.js
/**
 * Validation error description.
 */
var ValidationError = /** @class */ (function () {
    function ValidationError() {
    }
    /**
     *
     * @param shouldDecorate decorate the message with ANSI formatter escape codes for better readability
     * @param hasParent true when the error is a child of an another one
     * @param parentPath path as string to the parent of this property
     */
    ValidationError.prototype.toString = function (shouldDecorate, hasParent, parentPath) {
        var _this = this;
        if (shouldDecorate === void 0) { shouldDecorate = false; }
        if (hasParent === void 0) { hasParent = false; }
        if (parentPath === void 0) { parentPath = ""; }
        var boldStart = shouldDecorate ? "\u001B[1m" : "";
        var boldEnd = shouldDecorate ? "\u001B[22m" : "";
        var propConstraintFailed = function (propertyName) {
            return " - property ".concat(boldStart).concat(parentPath).concat(propertyName).concat(boldEnd, " has failed the following constraints: ").concat(boldStart).concat(Object.keys(_this.constraints).join(", ")).concat(boldEnd, " \n");
        };
        if (!hasParent) {
            return ("An instance of ".concat(boldStart).concat(this.target ? this.target.constructor.name : 'an object').concat(boldEnd, " has failed the validation:\n") +
                (this.constraints ? propConstraintFailed(this.property) : "") +
                (this.children
                    ? this.children.map(function (childError) { return childError.toString(shouldDecorate, true, _this.property); }).join("")
                    : ""));
        }
        else {
            // we format numbers as array indexes for better readability.
            var formattedProperty_1 = Number.isInteger(+this.property)
                ? "[".concat(this.property, "]")
                : "".concat(parentPath ? "." : "").concat(this.property);
            if (this.constraints) {
                return propConstraintFailed(formattedProperty_1);
            }
            else {
                return this.children
                    ? this.children
                        .map(function (childError) { return childError.toString(shouldDecorate, true, "".concat(parentPath).concat(formattedProperty_1)); })
                        .join("")
                    : "";
            }
        }
    };
    return ValidationError;
}());

//# sourceMappingURL=ValidationError.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/validation/ValidationTypes.js
/**
 * Validation types.
 */
var ValidationTypes = /** @class */ (function () {
    function ValidationTypes() {
    }
    /**
     * Checks if validation type is valid.
     */
    ValidationTypes.isValid = function (type) {
        var _this = this;
        return (type !== 'isValid' &&
            type !== 'getMessage' &&
            Object.keys(this)
                .map(function (key) { return _this[key]; })
                .indexOf(type) !== -1);
    };
    /* system */
    ValidationTypes.CUSTOM_VALIDATION = 'customValidation'; // done
    ValidationTypes.NESTED_VALIDATION = 'nestedValidation'; // done
    ValidationTypes.PROMISE_VALIDATION = 'promiseValidation'; // done
    ValidationTypes.CONDITIONAL_VALIDATION = 'conditionalValidation'; // done
    ValidationTypes.WHITELIST = 'whitelistValidation'; // done
    ValidationTypes.IS_DEFINED = 'isDefined'; // done
    return ValidationTypes;
}());

//# sourceMappingURL=ValidationTypes.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/validation/ValidationUtils.js
/**
 * Convert the constraint to a string to be shown in an error
 */
function constraintToString(constraint) {
    if (Array.isArray(constraint)) {
        return constraint.join(', ');
    }
    return "".concat(constraint);
}
var ValidationUtils = /** @class */ (function () {
    function ValidationUtils() {
    }
    ValidationUtils.replaceMessageSpecialTokens = function (message, validationArguments) {
        var messageString;
        if (message instanceof Function) {
            messageString = message(validationArguments);
        }
        else if (typeof message === 'string') {
            messageString = message;
        }
        if (messageString && Array.isArray(validationArguments.constraints)) {
            validationArguments.constraints.forEach(function (constraint, index) {
                messageString = messageString.replace(new RegExp("\\$constraint".concat(index + 1), 'g'), constraintToString(constraint));
            });
        }
        if (messageString &&
            validationArguments.value !== undefined &&
            validationArguments.value !== null &&
            typeof validationArguments.value === 'string')
            messageString = messageString.replace(/\$value/g, validationArguments.value);
        if (messageString)
            messageString = messageString.replace(/\$property/g, validationArguments.property);
        if (messageString)
            messageString = messageString.replace(/\$target/g, validationArguments.targetName);
        return messageString;
    };
    return ValidationUtils;
}());

//# sourceMappingURL=ValidationUtils.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/utils/is-promise.util.js
// https://github.com/TylorS/typed-is-promise/blob/abf1514e1b6961adfc75765476b0debb96b2c3ae/src/index.ts
function isPromise(p) {
    return p !== null && typeof p === 'object' && typeof p.then === 'function';
}
//# sourceMappingURL=is-promise.util.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/utils/convert-to-array.util.js
/**
 * Convert Map, Set to Array
 */
function convertToArray(val) {
    if (val instanceof Map) {
        return Array.from(val.values());
    }
    return Array.isArray(val) ? val : Array.from(val);
}
//# sourceMappingURL=convert-to-array.util.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/metadata/ValidationMetadata.js
/**
 * This metadata contains validation rules.
 */
var ValidationMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ValidationMetadata(args) {
        /**
         * Validation groups used for this validation.
         */
        this.groups = [];
        /**
         * Specifies if validated value is an array and each of its item must be validated.
         */
        this.each = false;
        /*
         * A transient set of data passed through to the validation result for response mapping
         */
        this.context = undefined;
        this.type = args.type;
        this.target = args.target;
        this.propertyName = args.propertyName;
        this.constraints = args.constraints;
        this.constraintCls = args.constraintCls;
        this.validationTypeOptions = args.validationTypeOptions;
        if (args.validationOptions) {
            this.message = args.validationOptions.message;
            this.groups = args.validationOptions.groups;
            this.always = args.validationOptions.always;
            this.each = args.validationOptions.each;
            this.context = args.validationOptions.context;
        }
    }
    return ValidationMetadata;
}());

//# sourceMappingURL=ValidationMetadata.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/validation-schema/ValidationSchemaToMetadataTransformer.js

/**
 * Used to transform validation schemas to validation metadatas.
 */
var ValidationSchemaToMetadataTransformer = /** @class */ (function () {
    function ValidationSchemaToMetadataTransformer() {
    }
    ValidationSchemaToMetadataTransformer.prototype.transform = function (schema) {
        var metadatas = [];
        Object.keys(schema.properties).forEach(function (property) {
            schema.properties[property].forEach(function (validation) {
                var validationOptions = {
                    message: validation.message,
                    groups: validation.groups,
                    always: validation.always,
                    each: validation.each,
                };
                var args = {
                    type: validation.type,
                    target: schema.name,
                    propertyName: property,
                    constraints: validation.constraints,
                    validationTypeOptions: validation.options,
                    validationOptions: validationOptions,
                };
                metadatas.push(new ValidationMetadata(args));
            });
        });
        return metadatas;
    };
    return ValidationSchemaToMetadataTransformer;
}());

//# sourceMappingURL=ValidationSchemaToMetadataTransformer.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/utils/get-global.util.js
/**
 * This function returns the global object across Node and browsers.
 *
 * Note: `globalThis` is the standardized approach however it has been added to
 * Node.js in version 12. We need to include this snippet until Node 12 EOL.
 */
function getGlobal() {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'window'.
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'window'.
        return window;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'self'.
    if (typeof self !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'self'.
        return self;
    }
}
//# sourceMappingURL=get-global.util.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/metadata/MetadataStorage.js


/**
 * Storage all metadatas.
 */
var MetadataStorage = /** @class */ (function () {
    function MetadataStorage() {
        // -------------------------------------------------------------------------
        // Private properties
        // -------------------------------------------------------------------------
        this.validationMetadatas = [];
        this.constraintMetadatas = [];
    }
    Object.defineProperty(MetadataStorage.prototype, "hasValidationMetaData", {
        get: function () {
            return !!this.validationMetadatas.length;
        },
        enumerable: false,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Adds a new validation metadata.
     */
    MetadataStorage.prototype.addValidationSchema = function (schema) {
        var _this = this;
        var validationMetadatas = new ValidationSchemaToMetadataTransformer().transform(schema);
        validationMetadatas.forEach(function (validationMetadata) { return _this.addValidationMetadata(validationMetadata); });
    };
    /**
     * Adds a new validation metadata.
     */
    MetadataStorage.prototype.addValidationMetadata = function (metadata) {
        this.validationMetadatas.push(metadata);
    };
    /**
     * Adds a new constraint metadata.
     */
    MetadataStorage.prototype.addConstraintMetadata = function (metadata) {
        this.constraintMetadatas.push(metadata);
    };
    /**
     * Groups metadata by their property names.
     */
    MetadataStorage.prototype.groupByPropertyName = function (metadata) {
        var grouped = {};
        metadata.forEach(function (metadata) {
            if (!grouped[metadata.propertyName])
                grouped[metadata.propertyName] = [];
            grouped[metadata.propertyName].push(metadata);
        });
        return grouped;
    };
    /**
     * Gets all validation metadatas for the given object with the given groups.
     */
    MetadataStorage.prototype.getTargetValidationMetadatas = function (targetConstructor, targetSchema, always, strictGroups, groups) {
        var includeMetadataBecauseOfAlwaysOption = function (metadata) {
            // `metadata.always` overrides global default.
            if (typeof metadata.always !== 'undefined')
                return metadata.always;
            // `metadata.groups` overrides global default.
            if (metadata.groups && metadata.groups.length)
                return false;
            // Use global default.
            return always;
        };
        var excludeMetadataBecauseOfStrictGroupsOption = function (metadata) {
            if (strictGroups) {
                // Validation is not using groups.
                if (!groups || !groups.length) {
                    // `metadata.groups` has at least one group.
                    if (metadata.groups && metadata.groups.length)
                        return true;
                }
            }
            return false;
        };
        // get directly related to a target metadatas
        var originalMetadatas = this.validationMetadatas.filter(function (metadata) {
            if (metadata.target !== targetConstructor && metadata.target !== targetSchema)
                return false;
            if (includeMetadataBecauseOfAlwaysOption(metadata))
                return true;
            if (excludeMetadataBecauseOfStrictGroupsOption(metadata))
                return false;
            if (groups && groups.length > 0)
                return metadata.groups && !!metadata.groups.find(function (group) { return groups.indexOf(group) !== -1; });
            return true;
        });
        // get metadatas for inherited classes
        var inheritedMetadatas = this.validationMetadatas.filter(function (metadata) {
            // if target is a string it's means we validate against a schema, and there is no inheritance support for schemas
            if (typeof metadata.target === 'string')
                return false;
            if (metadata.target === targetConstructor)
                return false;
            if (metadata.target instanceof Function && !(targetConstructor.prototype instanceof metadata.target))
                return false;
            if (includeMetadataBecauseOfAlwaysOption(metadata))
                return true;
            if (excludeMetadataBecauseOfStrictGroupsOption(metadata))
                return false;
            if (groups && groups.length > 0)
                return metadata.groups && !!metadata.groups.find(function (group) { return groups.indexOf(group) !== -1; });
            return true;
        });
        // filter out duplicate metadatas, prefer original metadatas instead of inherited metadatas
        var uniqueInheritedMetadatas = inheritedMetadatas.filter(function (inheritedMetadata) {
            return !originalMetadatas.find(function (originalMetadata) {
                return (originalMetadata.propertyName === inheritedMetadata.propertyName &&
                    originalMetadata.type === inheritedMetadata.type);
            });
        });
        return originalMetadatas.concat(uniqueInheritedMetadatas);
    };
    /**
     * Gets all validator constraints for the given object.
     */
    MetadataStorage.prototype.getTargetValidatorConstraints = function (target) {
        return this.constraintMetadatas.filter(function (metadata) { return metadata.target === target; });
    };
    return MetadataStorage;
}());

/**
 * Gets metadata storage.
 * Metadata storage follows the best practices and stores metadata in a global variable.
 */
function MetadataStorage_getMetadataStorage() {
    var global = getGlobal();
    if (!global.classValidatorMetadataStorage) {
        global.classValidatorMetadataStorage = new MetadataStorage();
    }
    return global.classValidatorMetadataStorage;
}
//# sourceMappingURL=MetadataStorage.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/validation/ValidationExecutor.js





/**
 * Executes validation over given object.
 */
var ValidationExecutor = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ValidationExecutor(validator, validatorOptions) {
        this.validator = validator;
        this.validatorOptions = validatorOptions;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.awaitingPromises = [];
        this.ignoreAsyncValidations = false;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this.metadataStorage = MetadataStorage_getMetadataStorage();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    ValidationExecutor.prototype.execute = function (object, targetSchema, validationErrors) {
        var _this = this;
        var _a;
        /**
         * If there is no metadata registered it means possibly the dependencies are not flatterned and
         * more than one instance is used.
         *
         * TODO: This needs proper handling, forcing to use the same container or some other proper solution.
         */
        if (!this.metadataStorage.hasValidationMetaData && ((_a = this.validatorOptions) === null || _a === void 0 ? void 0 : _a.enableDebugMessages) === true) {
            console.warn("No metadata found. There is more than once class-validator version installed probably. You need to flatten your dependencies.");
        }
        var groups = this.validatorOptions ? this.validatorOptions.groups : undefined;
        var strictGroups = (this.validatorOptions && this.validatorOptions.strictGroups) || false;
        var always = (this.validatorOptions && this.validatorOptions.always) || false;
        var targetMetadatas = this.metadataStorage.getTargetValidationMetadatas(object.constructor, targetSchema, always, strictGroups, groups);
        var groupedMetadatas = this.metadataStorage.groupByPropertyName(targetMetadatas);
        if (this.validatorOptions && this.validatorOptions.forbidUnknownValues && !targetMetadatas.length) {
            var validationError = new ValidationError();
            if (!this.validatorOptions ||
                !this.validatorOptions.validationError ||
                this.validatorOptions.validationError.target === undefined ||
                this.validatorOptions.validationError.target === true)
                validationError.target = object;
            validationError.value = undefined;
            validationError.property = undefined;
            validationError.children = [];
            validationError.constraints = { unknownValue: 'an unknown value was passed to the validate function' };
            validationErrors.push(validationError);
            return;
        }
        if (this.validatorOptions && this.validatorOptions.whitelist)
            this.whitelist(object, groupedMetadatas, validationErrors);
        // General validation
        Object.keys(groupedMetadatas).forEach(function (propertyName) {
            var value = object[propertyName];
            var definedMetadatas = groupedMetadatas[propertyName].filter(function (metadata) { return metadata.type === ValidationTypes.IS_DEFINED; });
            var metadatas = groupedMetadatas[propertyName].filter(function (metadata) { return metadata.type !== ValidationTypes.IS_DEFINED && metadata.type !== ValidationTypes.WHITELIST; });
            if (value instanceof Promise &&
                metadatas.find(function (metadata) { return metadata.type === ValidationTypes.PROMISE_VALIDATION; })) {
                _this.awaitingPromises.push(value.then(function (resolvedValue) {
                    _this.performValidations(object, resolvedValue, propertyName, definedMetadatas, metadatas, validationErrors);
                }));
            }
            else {
                _this.performValidations(object, value, propertyName, definedMetadatas, metadatas, validationErrors);
            }
        });
    };
    ValidationExecutor.prototype.whitelist = function (object, groupedMetadatas, validationErrors) {
        var _this = this;
        var notAllowedProperties = [];
        Object.keys(object).forEach(function (propertyName) {
            // does this property have no metadata?
            if (!groupedMetadatas[propertyName] || groupedMetadatas[propertyName].length === 0)
                notAllowedProperties.push(propertyName);
        });
        if (notAllowedProperties.length > 0) {
            if (this.validatorOptions && this.validatorOptions.forbidNonWhitelisted) {
                // throw errors
                notAllowedProperties.forEach(function (property) {
                    var _a;
                    var validationError = _this.generateValidationError(object, object[property], property);
                    validationError.constraints = (_a = {}, _a[ValidationTypes.WHITELIST] = "property ".concat(property, " should not exist"), _a);
                    validationError.children = undefined;
                    validationErrors.push(validationError);
                });
            }
            else {
                // strip non allowed properties
                notAllowedProperties.forEach(function (property) { return delete object[property]; });
            }
        }
    };
    ValidationExecutor.prototype.stripEmptyErrors = function (errors) {
        var _this = this;
        return errors.filter(function (error) {
            if (error.children) {
                error.children = _this.stripEmptyErrors(error.children);
            }
            if (Object.keys(error.constraints).length === 0) {
                if (error.children.length === 0) {
                    return false;
                }
                else {
                    delete error.constraints;
                }
            }
            return true;
        });
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    ValidationExecutor.prototype.performValidations = function (object, value, propertyName, definedMetadatas, metadatas, validationErrors) {
        var customValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes.CUSTOM_VALIDATION; });
        var nestedValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes.NESTED_VALIDATION; });
        var conditionalValidationMetadatas = metadatas.filter(function (metadata) { return metadata.type === ValidationTypes.CONDITIONAL_VALIDATION; });
        var validationError = this.generateValidationError(object, value, propertyName);
        validationErrors.push(validationError);
        var canValidate = this.conditionalValidations(object, value, conditionalValidationMetadatas);
        if (!canValidate) {
            return;
        }
        // handle IS_DEFINED validation type the special way - it should work no matter skipUndefinedProperties/skipMissingProperties is set or not
        this.customValidations(object, value, definedMetadatas, validationError);
        this.mapContexts(object, value, definedMetadatas, validationError);
        if (value === undefined && this.validatorOptions && this.validatorOptions.skipUndefinedProperties === true) {
            return;
        }
        if (value === null && this.validatorOptions && this.validatorOptions.skipNullProperties === true) {
            return;
        }
        if ((value === null || value === undefined) &&
            this.validatorOptions &&
            this.validatorOptions.skipMissingProperties === true) {
            return;
        }
        this.customValidations(object, value, customValidationMetadatas, validationError);
        this.nestedValidations(value, nestedValidationMetadatas, validationError.children);
        this.mapContexts(object, value, metadatas, validationError);
        this.mapContexts(object, value, customValidationMetadatas, validationError);
    };
    ValidationExecutor.prototype.generateValidationError = function (object, value, propertyName) {
        var validationError = new ValidationError();
        if (!this.validatorOptions ||
            !this.validatorOptions.validationError ||
            this.validatorOptions.validationError.target === undefined ||
            this.validatorOptions.validationError.target === true)
            validationError.target = object;
        if (!this.validatorOptions ||
            !this.validatorOptions.validationError ||
            this.validatorOptions.validationError.value === undefined ||
            this.validatorOptions.validationError.value === true)
            validationError.value = value;
        validationError.property = propertyName;
        validationError.children = [];
        validationError.constraints = {};
        return validationError;
    };
    ValidationExecutor.prototype.conditionalValidations = function (object, value, metadatas) {
        return metadatas
            .map(function (metadata) { return metadata.constraints[0](object, value); })
            .reduce(function (resultA, resultB) { return resultA && resultB; }, true);
    };
    ValidationExecutor.prototype.customValidations = function (object, value, metadatas, error) {
        var _this = this;
        metadatas.forEach(function (metadata) {
            _this.metadataStorage.getTargetValidatorConstraints(metadata.constraintCls).forEach(function (customConstraintMetadata) {
                if (customConstraintMetadata.async && _this.ignoreAsyncValidations)
                    return;
                if (_this.validatorOptions &&
                    _this.validatorOptions.stopAtFirstError &&
                    Object.keys(error.constraints || {}).length > 0)
                    return;
                var validationArguments = {
                    targetName: object.constructor ? object.constructor.name : undefined,
                    property: metadata.propertyName,
                    object: object,
                    value: value,
                    constraints: metadata.constraints,
                };
                if (!metadata.each || !(Array.isArray(value) || value instanceof Set || value instanceof Map)) {
                    var validatedValue = customConstraintMetadata.instance.validate(value, validationArguments);
                    if (isPromise(validatedValue)) {
                        var promise = validatedValue.then(function (isValid) {
                            if (!isValid) {
                                var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                                error.constraints[type] = message;
                                if (metadata.context) {
                                    if (!error.contexts) {
                                        error.contexts = {};
                                    }
                                    error.contexts[type] = Object.assign(error.contexts[type] || {}, metadata.context);
                                }
                            }
                        });
                        _this.awaitingPromises.push(promise);
                    }
                    else {
                        if (!validatedValue) {
                            var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                            error.constraints[type] = message;
                        }
                    }
                    return;
                }
                // convert set and map into array
                var arrayValue = convertToArray(value);
                // Validation needs to be applied to each array item
                var validatedSubValues = arrayValue.map(function (subValue) {
                    return customConstraintMetadata.instance.validate(subValue, validationArguments);
                });
                var validationIsAsync = validatedSubValues.some(function (validatedSubValue) {
                    return isPromise(validatedSubValue);
                });
                if (validationIsAsync) {
                    // Wrap plain values (if any) in promises, so that all are async
                    var asyncValidatedSubValues = validatedSubValues.map(function (validatedSubValue) {
                        return isPromise(validatedSubValue) ? validatedSubValue : Promise.resolve(validatedSubValue);
                    });
                    var asyncValidationIsFinishedPromise = Promise.all(asyncValidatedSubValues).then(function (flatValidatedValues) {
                        var validationResult = flatValidatedValues.every(function (isValid) { return isValid; });
                        if (!validationResult) {
                            var _a = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _a[0], message = _a[1];
                            error.constraints[type] = message;
                            if (metadata.context) {
                                if (!error.contexts) {
                                    error.contexts = {};
                                }
                                error.contexts[type] = Object.assign(error.contexts[type] || {}, metadata.context);
                            }
                        }
                    });
                    _this.awaitingPromises.push(asyncValidationIsFinishedPromise);
                    return;
                }
                var validationResult = validatedSubValues.every(function (isValid) { return isValid; });
                if (!validationResult) {
                    var _b = _this.createValidationError(object, value, metadata, customConstraintMetadata), type = _b[0], message = _b[1];
                    error.constraints[type] = message;
                }
            });
        });
    };
    ValidationExecutor.prototype.nestedValidations = function (value, metadatas, errors) {
        var _this = this;
        if (value === void 0) {
            return;
        }
        metadatas.forEach(function (metadata) {
            var _a;
            if (metadata.type !== ValidationTypes.NESTED_VALIDATION && metadata.type !== ValidationTypes.PROMISE_VALIDATION) {
                return;
            }
            if (Array.isArray(value) || value instanceof Set || value instanceof Map) {
                // Treats Set as an array - as index of Set value is value itself and it is common case to have Object as value
                var arrayLikeValue = value instanceof Set ? Array.from(value) : value;
                arrayLikeValue.forEach(function (subValue, index) {
                    _this.performValidations(value, subValue, index.toString(), [], metadatas, errors);
                });
            }
            else if (value instanceof Object) {
                var targetSchema = typeof metadata.target === 'string' ? metadata.target : metadata.target.name;
                _this.execute(value, targetSchema, errors);
            }
            else {
                var error = new ValidationError();
                error.value = value;
                error.property = metadata.propertyName;
                error.target = metadata.target;
                var _b = _this.createValidationError(metadata.target, value, metadata), type = _b[0], message = _b[1];
                error.constraints = (_a = {},
                    _a[type] = message,
                    _a);
                errors.push(error);
            }
        });
    };
    ValidationExecutor.prototype.mapContexts = function (object, value, metadatas, error) {
        var _this = this;
        return metadatas.forEach(function (metadata) {
            if (metadata.context) {
                var customConstraint = void 0;
                if (metadata.type === ValidationTypes.CUSTOM_VALIDATION) {
                    var customConstraints = _this.metadataStorage.getTargetValidatorConstraints(metadata.constraintCls);
                    customConstraint = customConstraints[0];
                }
                var type = _this.getConstraintType(metadata, customConstraint);
                if (error.constraints[type]) {
                    if (!error.contexts) {
                        error.contexts = {};
                    }
                    error.contexts[type] = Object.assign(error.contexts[type] || {}, metadata.context);
                }
            }
        });
    };
    ValidationExecutor.prototype.createValidationError = function (object, value, metadata, customValidatorMetadata) {
        var targetName = object.constructor ? object.constructor.name : undefined;
        var type = this.getConstraintType(metadata, customValidatorMetadata);
        var validationArguments = {
            targetName: targetName,
            property: metadata.propertyName,
            object: object,
            value: value,
            constraints: metadata.constraints,
        };
        var message = metadata.message || '';
        if (!metadata.message &&
            (!this.validatorOptions || (this.validatorOptions && !this.validatorOptions.dismissDefaultMessages))) {
            if (customValidatorMetadata && customValidatorMetadata.instance.defaultMessage instanceof Function) {
                message = customValidatorMetadata.instance.defaultMessage(validationArguments);
            }
        }
        var messageString = ValidationUtils.replaceMessageSpecialTokens(message, validationArguments);
        return [type, messageString];
    };
    ValidationExecutor.prototype.getConstraintType = function (metadata, customValidatorMetadata) {
        var type = customValidatorMetadata && customValidatorMetadata.name ? customValidatorMetadata.name : metadata.type;
        return type;
    };
    return ValidationExecutor;
}());

//# sourceMappingURL=ValidationExecutor.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/validation/Validator.js
var Validator_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Validator_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * Validator performs validation of the given object based on its metadata.
 */
var Validator_Validator = /** @class */ (function () {
    function Validator() {
    }
    /**
     * Performs validation of the given object based on decorators or validation schema.
     */
    Validator.prototype.validate = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        return this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions);
    };
    /**
     * Performs validation of the given object based on decorators or validation schema and reject on error.
     */
    Validator.prototype.validateOrReject = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        return Validator_awaiter(this, void 0, void 0, function () {
            var errors;
            return Validator_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.coreValidate(objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length)
                            return [2 /*return*/, Promise.reject(errors)];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Performs validation of the given object based on decorators or validation schema.
     */
    Validator.prototype.validateSync = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        var object = typeof objectOrSchemaName === 'string' ? objectOrValidationOptions : objectOrSchemaName;
        var options = typeof objectOrSchemaName === 'string' ? maybeValidatorOptions : objectOrValidationOptions;
        var schema = typeof objectOrSchemaName === 'string' ? objectOrSchemaName : undefined;
        var executor = new ValidationExecutor(this, options);
        executor.ignoreAsyncValidations = true;
        var validationErrors = [];
        executor.execute(object, schema, validationErrors);
        return executor.stripEmptyErrors(validationErrors);
    };
    // -------------------------------------------------------------------------
    // Private Properties
    // -------------------------------------------------------------------------
    /**
     * Performs validation of the given object based on decorators or validation schema.
     * Common method for `validateOrReject` and `validate` methods.
     */
    Validator.prototype.coreValidate = function (objectOrSchemaName, objectOrValidationOptions, maybeValidatorOptions) {
        var object = typeof objectOrSchemaName === 'string' ? objectOrValidationOptions : objectOrSchemaName;
        var options = typeof objectOrSchemaName === 'string' ? maybeValidatorOptions : objectOrValidationOptions;
        var schema = typeof objectOrSchemaName === 'string' ? objectOrSchemaName : undefined;
        var executor = new ValidationExecutor(this, options);
        var validationErrors = [];
        executor.execute(object, schema, validationErrors);
        return Promise.all(executor.awaitingPromises).then(function () {
            return executor.stripEmptyErrors(validationErrors);
        });
    };
    return Validator;
}());

//# sourceMappingURL=Validator.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/container.js
/**
 * Container to be used by this library for inversion control. If container was not implicitly set then by default
 * container simply creates a new instance of the given class.
 */
var defaultContainer = new (/** @class */ (function () {
    function class_1() {
        this.instances = [];
    }
    class_1.prototype.get = function (someClass) {
        var instance = this.instances.find(function (instance) { return instance.type === someClass; });
        if (!instance) {
            instance = { type: someClass, object: new someClass() };
            this.instances.push(instance);
        }
        return instance.object;
    };
    return class_1;
}()))();
var userContainer;
var userContainerOptions;
/**
 * Sets container to be used by this library.
 */
function useContainer(iocContainer, options) {
    userContainer = iocContainer;
    userContainerOptions = options;
}
/**
 * Gets the IOC container used by this library.
 */
function container_getFromContainer(someClass) {
    if (userContainer) {
        try {
            var instance = userContainer.get(someClass);
            if (instance)
                return instance;
            if (!userContainerOptions || !userContainerOptions.fallback)
                return instance;
        }
        catch (error) {
            if (!userContainerOptions || !userContainerOptions.fallbackOnErrors)
                throw error;
        }
    }
    return defaultContainer.get(someClass);
}
//# sourceMappingURL=container.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/index.js



// -------------------------------------------------------------------------
// Export everything api users needs
// -------------------------------------------------------------------------












/**
 * Validates given object by object's decorators or given validation schema.
 */
function validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return container_getFromContainer(Validator_Validator).validate(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return container_getFromContainer(Validator_Validator).validate(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Validates given object by object's decorators or given validation schema and reject on error.
 */
function validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return getFromContainer(Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return getFromContainer(Validator).validateOrReject(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Validates given object by object's decorators or given validation schema.
 * Note that this method completely ignores async validations.
 * If you want to properly perform validation you need to call validate method instead.
 */
function validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions) {
    if (typeof schemaNameOrObject === 'string') {
        return getFromContainer(Validator).validateSync(schemaNameOrObject, objectOrValidationOptions, maybeValidatorOptions);
    }
    else {
        return getFromContainer(Validator).validateSync(schemaNameOrObject, objectOrValidationOptions);
    }
}
/**
 * Registers a new validation schema.
 */
function registerSchema(schema) {
    getMetadataStorage().addValidationSchema(schema);
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/metadata/ConstraintMetadata.js

/**
 * This metadata interface contains information for custom validators.
 */
var ConstraintMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ConstraintMetadata(target, name, async) {
        if (async === void 0) { async = false; }
        this.target = target;
        this.name = name;
        this.async = async;
    }
    Object.defineProperty(ConstraintMetadata.prototype, "instance", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        /**
         * Instance of the target custom validation class which performs validation.
         */
        get: function () {
            return container_getFromContainer(this.target);
        },
        enumerable: false,
        configurable: true
    });
    return ConstraintMetadata;
}());

//# sourceMappingURL=ConstraintMetadata.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/register-decorator.js





/**
 * Registers a custom validation decorator.
 */
function registerDecorator(options) {
    var constraintCls;
    if (options.validator instanceof Function) {
        constraintCls = options.validator;
        var constraintClasses = container_getFromContainer(MetadataStorage).getTargetValidatorConstraints(options.validator);
        if (constraintClasses.length > 1) {
            throw "More than one implementation of ValidatorConstraintInterface found for validator on: ".concat(options.target.name, ":").concat(options.propertyName);
        }
    }
    else {
        var validator_1 = options.validator;
        constraintCls = /** @class */ (function () {
            function CustomConstraint() {
            }
            CustomConstraint.prototype.validate = function (value, validationArguments) {
                return validator_1.validate(value, validationArguments);
            };
            CustomConstraint.prototype.defaultMessage = function (validationArguments) {
                if (validator_1.defaultMessage) {
                    return validator_1.defaultMessage(validationArguments);
                }
                return '';
            };
            return CustomConstraint;
        }());
        MetadataStorage_getMetadataStorage().addConstraintMetadata(new ConstraintMetadata(constraintCls, options.name, options.async));
    }
    var validationMetadataArgs = {
        type: options.name && ValidationTypes.isValid(options.name) ? options.name : ValidationTypes.CUSTOM_VALIDATION,
        target: options.target,
        propertyName: options.propertyName,
        validationOptions: options.options,
        constraintCls: constraintCls,
        constraints: options.constraints,
    };
    MetadataStorage_getMetadataStorage().addValidationMetadata(new ValidationMetadata(validationMetadataArgs));
}
//# sourceMappingURL=register-decorator.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/decorator/common/ValidateBy.js

function ValidateBy_buildMessage(impl, validationOptions) {
    return function (validationArguments) {
        var eachPrefix = validationOptions && validationOptions.each ? 'each value in ' : '';
        return impl(eachPrefix, validationArguments);
    };
}
function ValidateBy_ValidateBy(options, validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            name: options.name,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: options.constraints,
            validator: options.validator,
        });
    };
}
//# sourceMappingURL=ValidateBy.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/decorator/common/IsNotEmpty.js

var IS_NOT_EMPTY = 'isNotEmpty';
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function isNotEmpty(value) {
    return value !== '' && value !== null && value !== undefined;
}
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function IsNotEmpty(validationOptions) {
    return ValidateBy_ValidateBy({
        name: IS_NOT_EMPTY,
        validator: {
            validate: function (value, args) { return isNotEmpty(value); },
            defaultMessage: ValidateBy_buildMessage(function (eachPrefix) { return eachPrefix + '$property should not be empty'; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNotEmpty.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/decorator/common/IsOptional.js



/**
 * Checks if value is missing and if so, ignores all validators.
 */
function IsOptional(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes.CONDITIONAL_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                function (object, value) {
                    return object[propertyName] !== null && object[propertyName] !== undefined;
                },
            ],
            validationOptions: validationOptions,
        };
        MetadataStorage_getMetadataStorage().addValidationMetadata(new ValidationMetadata(args));
    };
}
//# sourceMappingURL=IsOptional.js.map
;// CONCATENATED MODULE: ../src/storage/drivers/chrome-storage.driver.ts
var chrome_storage_driver_assign = (undefined && undefined.__assign) || function () {
    chrome_storage_driver_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return chrome_storage_driver_assign.apply(this, arguments);
};
var chrome_storage_driver_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var chrome_storage_driver_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ChromeStorageDriverType;
(function (ChromeStorageDriverType) {
    ChromeStorageDriverType["LOCAL"] = "local";
    ChromeStorageDriverType["MANAGED"] = "managed";
    ChromeStorageDriverType["SESSION"] = "session";
    ChromeStorageDriverType["SYNC"] = "sync";
})(ChromeStorageDriverType || (ChromeStorageDriverType = {}));
var ChromeStorageDriverOptionsDefaultValues = {
    type: ChromeStorageDriverType.SYNC
};
var ChromeStorageDriver = /** @class */ (function () {
    function ChromeStorageDriver(options) {
        if (!chrome.storage) {
            throw 'THIS BUILD USES `chrome.storage`. Extension Permission Required.';
        }
        this.options = chrome_storage_driver_assign(chrome_storage_driver_assign({}, ChromeStorageDriverOptionsDefaultValues), options);
        this.storage = chrome.storage[this.options.type];
    }
    ChromeStorageDriver.prototype.set = function (key, dataObject) {
        return chrome_storage_driver_awaiter(this, void 0, void 0, function () {
            var _this = this;
            return chrome_storage_driver_generator(this, function (_a) {
                // MV2 does not accepct direct async / await statements
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var dto = {};
                        dto[key] = dataObject;
                        _this.storage.set(dto, function () {
                            resolve(null);
                        });
                    })];
            });
        });
    };
    ChromeStorageDriver.prototype.get = function (key) {
        return chrome_storage_driver_awaiter(this, void 0, void 0, function () {
            var _this = this;
            return chrome_storage_driver_generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.storage.get([key], function (dataObject) {
                            if (Object.keys(dataObject).length === 0) {
                                resolve(null);
                                return;
                            }
                            resolve(dataObject[key]);
                        });
                    })];
            });
        });
    };
    ChromeStorageDriver.prototype.remove = function (key) {
        return chrome_storage_driver_awaiter(this, void 0, void 0, function () {
            var _this = this;
            return chrome_storage_driver_generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.storage.remove([key], function () {
                            resolve(null);
                        });
                    })];
            });
        });
    };
    return ChromeStorageDriver;
}());


;// CONCATENATED MODULE: ../src/api/api.cd.ts
var api_cd_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ApiCD = /** @class */ (function (_super) {
    api_cd_extends(ApiCD, _super);
    function ApiCD(instance) {
        return _super.call(this, instance, instance.options.apiBaseUrlContentDelivery) || this;
    }
    return ApiCD;
}(Api));


;// CONCATENATED MODULE: ../src/lib/executeScript.ts
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var ExecuteScriptOptions = /** @class */ (function () {
    function ExecuteScriptOptions() {
        this.allFrames = false;
    }
    return ExecuteScriptOptions;
}());

function executeScript(instance, tabId, options) {
    var e_1, _a;
    if (instance.type === UnistreamSDKTypes.CHROME_MV3) {
        var newOptions = {
            target: { tabId: tabId },
            func: options.code,
            args: options.args
        };
        if (options.allFrames) {
            newOptions.target['allFrames'] = options.allFrames;
        }
        if (options.frameId) {
            newOptions.target['frameIds'] = [options.frameId];
        }
        chrome.scripting.executeScript(newOptions);
    }
    else if (instance.type === UnistreamSDKTypes.CHROME_MV2) {
        // const creativeEncoded = 'unistream_creative_hnx980NBsb4872934GaP921387 = ' + JSON.stringify(creative) + '; ';
        // const code = creativeEncoded + (creative.build.toString().replace('function (', 'function unistream_kljsdf8093h4fiuuhaHx82734Ja(') + "\n "+`unistream_kljsdf8093h4fiuuhaHx82734Ja(unistream_creative_hnx980NBsb4872934GaP921387, '${interaction.id}');`);
        // console.log(options.code.toString());
        var compiled = options.code.toString().replaceAll(/^function \(([^\)*])\)/gi, "($1) => $2");
        var code = "(".concat(compiled, ")");
        if (options.args) {
            code += "(";
            try {
                for (var _b = __values(options.args), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arg = _c.value;
                    code += "\"".concat(arg, "\",");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            code = code.substring(0, code.length - 1);
            code += ");";
            delete options.args;
        }
        else {
            code += '();';
        }
        // console.log(code);
        options.code = code;
        chrome.tabs.executeScript(tabId, options);
    }
}

;// CONCATENATED MODULE: ../src/storage/storage.keys.ts
// Under development, currently only new ones are here
var StorageSpaceKey = 'unistream_';
var StorageKeys = {
    installDate: StorageSpaceKey + 'install_date',
    cd: {
        options: StorageSpaceKey + 'cd_options',
        lastPingDate: StorageSpaceKey + 'cd_last_ping_date',
        interactions: StorageSpaceKey + 'cd_interactions'
    }
};

;// CONCATENATED MODULE: ../src/services/base/service.base.ts
var service_base_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var service_base_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ServiceOptions = /** @class */ (function () {
    function ServiceOptions() {
    }
    return ServiceOptions;
}());

var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.update = function () {
    };
    Service.prototype.unregister = function () {
        return;
    };
    Service.prototype.options = function () {
        return {};
    };
    Service.prototype.initialize = function (options) {
        return service_base_awaiter(this, void 0, void 0, function () {
            return service_base_generator(this, function (_a) {
                this.$options = options;
                return [2 /*return*/];
            });
        });
    };
    Service.prototype.isAllowed = function () {
        return service_base_awaiter(this, void 0, void 0, function () {
            return service_base_generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    Service.prototype.register = function () {
        return service_base_awaiter(this, void 0, void 0, function () {
            return service_base_generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Service.prototype.connectInstance = function (instance) {
        this.instance = instance;
    };
    return Service;
}());


;// CONCATENATED MODULE: ../src/services/base/website.service.ts
var website_service_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var website_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var website_service_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var website_service_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};



var WebsiteServiceOptions = /** @class */ (function (_super) {
    website_service_extends(WebsiteServiceOptions, _super);
    function WebsiteServiceOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebsiteServiceOptions;
}(ServiceOptions));

var WebsiteService = /** @class */ (function (_super) {
    website_service_extends(WebsiteService, _super);
    function WebsiteService() {
        var _this = _super.call(this) || this;
        if (!chrome.tabs && !({"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.TYPE === UnistreamSDKTypes.CHROME_MV2 || {"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.TYPE === UnistreamSDKTypes.CHROME_MV3)) {
            throw '[WEBSITE SERVICE] FOR THIS FEATURE IS A CHROME BUILD REQUIRED AND THE PERMISSION `tabs`';
        }
        _this.sitePatternStack = {};
        _this.siteBuffer = {};
        chrome.tabs.onUpdated.addListener((function (tabId, changeInfo, tab) { return website_service_awaiter(_this, void 0, void 0, function () {
            var url, _a, _b, _i, groupIdentifier, stack, _c, _d, patternStack, matches, _e, e_1_1;
            var e_1, _f;
            return website_service_generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!(changeInfo.status === 'complete')) return [3 /*break*/, 11];
                        url = tab.url;
                        if (!(typeof url === 'string' && url.length > 0)) return [3 /*break*/, 11];
                        _a = [];
                        for (_b in this.sitePatternStack)
                            _a.push(_b);
                        _i = 0;
                        _g.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 11];
                        groupIdentifier = _a[_i];
                        stack = this.sitePatternStack[groupIdentifier];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 8, 9, 10]);
                        _c = (e_1 = void 0, website_service_values(stack.sitePatterns)), _d = _c.next();
                        _g.label = 3;
                    case 3:
                        if (!!_d.done) return [3 /*break*/, 7];
                        patternStack = _d.value;
                        matches = url.match(patternStack[0]);
                        if (!(matches !== null)) return [3 /*break*/, 6];
                        _e = this.$options.considerTrackingDataPrivacy === false;
                        if (_e) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.isAllowed()];
                    case 4:
                        _e = (_g.sent());
                        _g.label = 5;
                    case 5:
                        if (_e) {
                            stack.callback(url, matches, patternStack, { tabId: tabId, changeInfo: changeInfo, tab: tab });
                        }
                        _g.label = 6;
                    case 6:
                        _d = _c.next();
                        return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        _i++;
                        return [3 /*break*/, 1];
                    case 11: return [2 /*return*/];
                }
            });
        }); }).bind(_this));
        return _this;
    }
    WebsiteService.prototype.options = function () {
        return {
            considerTrackingDataPrivacy: true
        };
    };
    WebsiteService.prototype.isAllowed = function () {
        return website_service_awaiter(this, void 0, void 0, function () {
            var tba;
            return website_service_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.instance.storage.get("wba")];
                    case 1:
                        tba = _a.sent();
                        if (tba === 'dnt') {
                            Logger.debug('Tracking for future functionality not allowed!');
                            return [2 /*return*/, false];
                        }
                        Logger.debug('Tracking for future functionality is allowed! Are you not interested in supporting us? No problem, just opt out in our settings :)');
                        return [2 /*return*/, true];
                }
            });
        });
    };
    WebsiteService.prototype.unregisterSites = function (groupIdentifier) {
        if (this.sitePatternStack[groupIdentifier]) {
            delete this.sitePatternStack[groupIdentifier];
        }
    };
    WebsiteService.prototype.unregister = function () {
        return website_service_awaiter(this, void 0, void 0, function () {
            return website_service_generator(this, function (_a) {
                this.sitePatternStack = {};
                return [2 /*return*/];
            });
        });
    };
    WebsiteService.prototype.registerSites = function (groupIdentifier, sitePatterns, callback) {
        return website_service_awaiter(this, void 0, void 0, function () {
            return website_service_generator(this, function (_a) {
                this.sitePatternStack[groupIdentifier] = {
                    sitePatterns: sitePatterns,
                    callback: callback
                };
                return [2 /*return*/];
            });
        });
    };
    return WebsiteService;
}(Service));


;// CONCATENATED MODULE: ../src/lib/utils.ts
function getKeyPath(object, keyPath, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    try {
        return keyPath.split('.').reduce(function (previous, current) { return previous[current]; }, object);
    }
    catch (e) {
        // console.error(e);
        return defaultValue;
    }
}

;// CONCATENATED MODULE: ../src/services/content-delivery/api.calls.ts
var api_calls_assign = (undefined && undefined.__assign) || function () {
    api_calls_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return api_calls_assign.apply(this, arguments);
};
var api_calls_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var api_calls_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var api_calls_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

function getExternalFilterSet(instance, options) {
    return api_calls_awaiter(this, void 0, void 0, function () {
        var userData, filterSet, _a, _b, keyPath, signatureValue;
        var e_1, _c;
        return api_calls_generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, instance.user.getUserData()];
                case 1:
                    userData = _d.sent();
                    filterSet = { "unistream-filter-signature": "" };
                    if (options.FILTER_SIGNATURE) {
                        try {
                            for (_a = api_calls_values(options.FILTER_SIGNATURE), _b = _a.next(); !_b.done; _b = _a.next()) {
                                keyPath = _b.value;
                                signatureValue = getKeyPath(userData, keyPath, null);
                                if (signatureValue !== null) {
                                    filterSet['unistream-filter-signature'] += "$" + keyPath + ":" + signatureValue;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        filterSet["unistream-filter-set"] = JSON.stringify(userData);
                    }
                    return [2 /*return*/, filterSet];
            }
        });
    });
}
function getInteractions(api, uuid, scopeId, filterSet) {
    return api_calls_awaiter(this, void 0, void 0, function () {
        return api_calls_generator(this, function (_a) {
            return [2 /*return*/, api.get("/interaction/list/filtered?filterSet=".concat(encodeURIComponent(filterSet['unistream-filter-set']), "&scopeId=").concat(encodeURIComponent(scopeId)), { headers: api_calls_assign(api_calls_assign({}, filterSet), { 'unistream-scope': scopeId }) })];
        });
    });
}
function getOptions(api, scopeId) {
    return api_calls_awaiter(this, void 0, void 0, function () {
        return api_calls_generator(this, function (_a) {
            return [2 /*return*/, api.get("/option/list?scopeId=".concat(scopeId), { headers: { 'unistream-scope': scopeId } })];
        });
    });
}

;// CONCATENATED MODULE: ../src/services/content-delivery/creative.ts
var Creative = /** @class */ (function () {
    function Creative(data, uuid) {
        this.styling = data.styling;
        this.url = this._addUUID(data.url, uuid);
        this.id = data.id;
        this.type = data.type;
        this.interactionPosition = data.interactionPosition;
        this.animation = data.animation;
        this.interactionLabelClose = data.interactionLabelClose;
        this.interactionLabelShowNeverAgain = data.interactionLabelShowNeverAgain;
        this.interactionCloseTimeFrame = data.interactionCloseTimeFrame;
    }
    Creative.prototype._addUUID = function (url, uuid) {
        if (url.indexOf('?') === -1) {
            url += '?';
        }
        else {
            url += '&';
        }
        url += 'user_id=' + uuid;
        return url;
    };
    // This function will be executed in the DOM space of the related website
    Creative.prototype.build = function (creative, interactionId) {
        var existingiFrame = document.getElementById('198230182308109283091823098102938908128390');
        if (existingiFrame) {
            console.log('Interaction already running.');
            return;
        }
        var generateStyleString = function (cssStack) {
            var string = '';
            for (var key in cssStack) {
                var value = cssStack[key];
                string += ";".concat(key, ": ").concat(value);
                if (value.toString().indexOf('important') === -1) {
                    string += '!important';
                }
            }
            return string.substring(1);
        };
        var interactionWidgetStyling = function () {
            switch (creative.interactionPosition) {
                case 'top-full': return 'height:20px;width:100%;width:100%;top:0;left:0;text-align:center';
                case 'bottom-full': return 'height:20px;width:100%;width:100%;bottom:0;left:0;text-align:center';
                case 'top-left':
                    return 'height:20px;width:auto;top:0;left:0;';
                    ;
                case 'top-right': return 'height:20px;width:auto;top:0;right:0;text-align:center';
                case 'bottom-left': return 'height:20px;width:auto;bottom:0;left:0;';
                case 'bottom-right': return 'height:20px;width:auto;bottom:0;right:0;text-align:right';
            }
        };
        var CreativeIFrameStyle = 'width:100%;height:100%;border:none;display:block';
        var CreativeInteractionWidgetStyle = 'display:block;all:initial;position:absolute;background-color:rgba(0,0,0,0.7);overflow:hidden;color:#fff;padding:5px;';
        var CreativeCloseInteractionStyle = 'color:#fff;margin-right: 10px;margin-left: 10px;text-decoration:underline';
        var CreativeShowNeverAgainInteractionStyle = CreativeCloseInteractionStyle;
        var frameStyle = {
            all: 'initial',
            display: 'none',
            position: 'fixed',
            width: creative.styling.width,
            height: creative.styling.height,
            opacity: creative.styling.transparency,
            border: creative.styling.border,
            'box-shadow': creative.styling.boxShadow,
            'border-radius': 0,
            margin: 0,
            padding: 0,
            background: 'none',
            'z-index': '99999999999999999'
        };
        if (creative.styling.top)
            frameStyle.top = creative.styling.top;
        else
            frameStyle.bottom = creative.styling.bottom;
        if (creative.styling.left)
            frameStyle.left = creative.styling.left;
        else
            frameStyle.right = creative.styling.right;
        var frame = document.createElement('div');
        frame.setAttribute('style', generateStyleString(frameStyle));
        // alert(generateStyleString(frameStyle));
        var iframe = document.createElement('iframe');
        iframe.src = creative.url;
        // iframe.src = 'http://127.0.0.1:8081/test.html?'+new Date();
        iframe.style = CreativeIFrameStyle;
        iframe.setAttribute('id', '198230182308109283091823098102938908128390');
        iframe.addEventListener('load', function () {
            frame.style.display = 'block';
            chrome.runtime.sendMessage({ type: 'content-delivery', action: 'frame-loaded', interactionId: interactionId });
        });
        // document.body.appendChild(iframe);
        frame.appendChild(iframe);
        // frame.appendChild(interactionWidget);
        document.body.appendChild(frame);
        // document.body.appendChild(interactionWidget);
    };
    return Creative;
}());


// EXTERNAL MODULE: ../node_modules/validator/lib/isISO8601.js
var isISO8601 = __webpack_require__(566);
var isISO8601_default = /*#__PURE__*/__webpack_require__.n(isISO8601);
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/decorator/string/IsISO8601.js


var IS_ISO8601 = 'isIso8601';
/**
 * Checks if the string is a valid ISO 8601 date.
 * If given value is not a string, then it returns false.
 * Use the option strict = true for additional checks for a valid date, e.g. invalidates dates like 2019-02-29.
 */
function IsISO8601_isISO8601(value, options) {
    return typeof value === 'string' && isISO8601_default()(value, options);
}
/**
 * Checks if the string is a valid ISO 8601 date.
 * If given value is not a string, then it returns false.
 * Use the option strict = true for additional checks for a valid date, e.g. invalidates dates like 2019-02-29.
 */
function IsISO8601(options, validationOptions) {
    return ValidateBy({
        name: IS_ISO8601,
        constraints: [options],
        validator: {
            validate: function (value, args) { return IsISO8601_isISO8601(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + '$property must be a valid ISO 8601 date string'; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsISO8601.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/decorator/string/IsDateString.js


var IS_DATE_STRING = 'isDateString';
/**
 * Alias for IsISO8601 validator
 */
function isDateString(value, options) {
    return IsISO8601_isISO8601(value, options);
}
/**
 * Alias for IsISO8601 validator
 */
function IsDateString(options, validationOptions) {
    return ValidateBy_ValidateBy({
        name: IS_DATE_STRING,
        constraints: [options],
        validator: {
            validate: function (value, args) { return isDateString(value); },
            defaultMessage: ValidateBy_buildMessage(function (eachPrefix) { return eachPrefix + '$property must be a valid ISO 8601 date string'; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsDateString.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/decorator/common/ValidateIf.js



/**
 * Ignores the other validators on a property when the provided condition function returns false.
 */
function ValidateIf(condition, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes.CONDITIONAL_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [condition],
            validationOptions: validationOptions,
        };
        MetadataStorage_getMetadataStorage().addValidationMetadata(new ValidationMetadata(args));
    };
}
//# sourceMappingURL=ValidateIf.js.map
;// CONCATENATED MODULE: ../node_modules/class-validator/esm5/decorator/typechecker/IsEnum.js

var IS_ENUM = 'isEnum';
/**
 * Checks if a given value is an enum
 */
function isEnum(value, entity) {
    var enumValues = Object.keys(entity).map(function (k) { return entity[k]; });
    return enumValues.indexOf(value) >= 0;
}
/**
 * Checks if a given value is an enum
 */
function IsEnum(entity, validationOptions) {
    return ValidateBy_ValidateBy({
        name: IS_ENUM,
        constraints: [entity],
        validator: {
            validate: function (value, args) { return isEnum(value, args.constraints[0]); },
            defaultMessage: ValidateBy_buildMessage(function (eachPrefix) { return eachPrefix + '$property must be a valid enum value'; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsEnum.js.map
;// CONCATENATED MODULE: ../src/services/content-delivery/interaction.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreativeAnimation;
(function (CreativeAnimation) {
    CreativeAnimation["SLIDE"] = "slide";
})(CreativeAnimation || (CreativeAnimation = {}));
var CreativeInteractionPosition;
(function (CreativeInteractionPosition) {
    CreativeInteractionPosition["TOP_FULL"] = "top-full";
    CreativeInteractionPosition["BOTTOM_FULL"] = "bottom-full";
    CreativeInteractionPosition["TOP_LEFT"] = "top-left";
    CreativeInteractionPosition["TOP_RIGHT"] = "top-right";
    CreativeInteractionPosition["BOTTOM_LEFT"] = "bottom-left";
    CreativeInteractionPosition["BOTTOM_RIGHT"] = "bottom-right";
})(CreativeInteractionPosition || (CreativeInteractionPosition = {}));
var Interaction = /** @class */ (function () {
    function Interaction() {
    }
    __decorate([
        IsNotEmpty()
    ], Interaction.prototype, "id", void 0);
    __decorate([
        IsNotEmpty()
    ], Interaction.prototype, "trigger", void 0);
    __decorate([
        IsNotEmpty()
    ], Interaction.prototype, "creative", void 0);
    __decorate([
        IsDateString(),
        ValidateIf(function (object, value) { return value !== null; })
    ], Interaction.prototype, "startsAt", void 0);
    __decorate([
        IsDateString(),
        ValidateIf(function (object, value) { return value !== null; })
    ], Interaction.prototype, "expiresAt", void 0);
    __decorate([
        ValidateIf(function (object, value) { return value !== null; })
    ], Interaction.prototype, "afterInstallDelayInMinutes", void 0);
    return Interaction;
}());

var TriggerData = /** @class */ (function () {
    function TriggerData() {
    }
    __decorate([
        IsNotEmpty()
    ], TriggerData.prototype, "id", void 0);
    __decorate([
        IsNotEmpty()
    ], TriggerData.prototype, "type", void 0);
    __decorate([
        IsNotEmpty()
    ], TriggerData.prototype, "urlGroup", void 0);
    __decorate([
        IsNotEmpty()
    ], TriggerData.prototype, "gay", void 0);
    return TriggerData;
}());

var UrlGroupData = /** @class */ (function () {
    function UrlGroupData() {
    }
    __decorate([
        IsNotEmpty()
    ], UrlGroupData.prototype, "id", void 0);
    __decorate([
        IsNotEmpty()
    ], UrlGroupData.prototype, "rules", void 0);
    return UrlGroupData;
}());

var CreativeData = /** @class */ (function () {
    function CreativeData() {
    }
    __decorate([
        IsNotEmpty()
    ], CreativeData.prototype, "id", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeData.prototype, "type", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeData.prototype, "url", void 0);
    __decorate([
        IsNotEmpty(),
        IsEnum(CreativeAnimation)
    ], CreativeData.prototype, "animation", void 0);
    __decorate([
        IsNotEmpty(),
        IsEnum(CreativeInteractionPosition)
    ], CreativeData.prototype, "interactionPosition", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeData.prototype, "styling", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeData.prototype, "interactionLabelClose", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeData.prototype, "interactionLabelShowNeverAgain", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeData.prototype, "interactionCloseTimeFrame", void 0);
    return CreativeData;
}());

var CreativeStyling = /** @class */ (function () {
    function CreativeStyling() {
    }
    __decorate([
        IsNotEmpty()
    ], CreativeStyling.prototype, "width", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeStyling.prototype, "height", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeStyling.prototype, "transparency", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeStyling.prototype, "boxShadow", void 0);
    __decorate([
        IsNotEmpty()
    ], CreativeStyling.prototype, "border", void 0);
    __decorate([
        IsOptional()
    ], CreativeStyling.prototype, "top", void 0);
    __decorate([
        IsOptional()
    ], CreativeStyling.prototype, "bottom", void 0);
    __decorate([
        IsOptional()
    ], CreativeStyling.prototype, "left", void 0);
    __decorate([
        IsOptional()
    ], CreativeStyling.prototype, "right", void 0);
    return CreativeStyling;
}());


;// CONCATENATED MODULE: ../src/services/content-delivery/options.ts
var options_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Options = /** @class */ (function () {
    function Options() {
    }
    options_decorate([
        IsNotEmpty()
    ], Options.prototype, "INT_SHOW_NEVER_AGAIN_VALID_IN_D", void 0);
    return Options;
}());


;// CONCATENATED MODULE: ../src/services/content-delivery/content-delivery.service.ts
var content_delivery_service_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var content_delivery_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var content_delivery_service_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var content_delivery_service_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};











var ChromeAlaramsTimerDriverTimerIdentifier = 'unistream_cd_ping';
var ContentDeliveryServiceRequestType = 'content-delivery';
var ContentDeliveryServiceRequestCloseResult = 'close';
var ContentDeliveryServiceRequestShowNeverAgainResult = 'show-never-again';
var ContentDeliveryServiceRequestFramesResult = 'frames';
var ContentDeliveryServiceRequestFrameLoadedResult = 'frame-loaded';
var ContentDeliveryService = /** @class */ (function (_super) {
    content_delivery_service_extends(ContentDeliveryService, _super);
    function ContentDeliveryService() {
        return _super.call(this) || this;
    }
    ContentDeliveryService.prototype.options = function () {
        return {
            considerTrackingDataPrivacy: false
        };
    };
    ContentDeliveryService.prototype.initialize = function (options) {
        return content_delivery_service_awaiter(this, void 0, void 0, function () {
            return content_delivery_service_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!chrome.tabs) {
                            throw '[CONTENT DELIVERY SERVICE] this feature does only work with chrome (mv2 & mv3 ) and the following permissions: `tabs`';
                        }
                        if (!chrome.scripting && this.instance.type === UnistreamSDKTypes.CHROME_MV3) {
                            throw '[CONTENT DELIVERY SERVICE] this feature does only work with chrome mv3 and the following permissions: `scripting`';
                        }
                        if (!chrome.tabs.executeScript && this.instance.type === UnistreamSDKTypes.CHROME_MV2) {
                            throw '[CONTENT DELIVERY SERVICE] this feature does only work with chrome mv3 and the following permissions: `scripting`';
                        }
                        if (!chrome.extension) {
                            throw '[CONTENT DELIVERY SERVICE] this feature does only work with chrome (mv2 & mv3 )';
                        }
                        return [4 /*yield*/, _super.prototype.initialize.call(this, options)];
                    case 1:
                        _a.sent();
                        this.lastPing = new Date('2020-01-01');
                        // Only if you want to store interactions locally
                        //
                        // this.lastPing = await this.instance.storage.get(StorageKeys.cd.lastPingDate);
                        // const now = new Date();
                        // if (this.lastPing === null) {
                        //   await this.instance.storage.set(StorageKeys.cd.lastPingDate, now.toString());
                        //   this.lastPing = now;
                        // } else {
                        //   this.lastPing = new Date(await this.instance.storage.get(StorageKeys.cd.lastPingDate));
                        //   if (!this.lastPing) {
                        //     this.lastPing = now;
                        //   }
                        // }
                        this.api = new ApiCD(this.instance);
                        chrome.runtime.onMessage.addListener(this.triggerCallback.bind(this));
                        return [2 /*return*/];
                }
            });
        });
    };
    ContentDeliveryService.prototype.register = function () {
        return content_delivery_service_awaiter(this, void 0, void 0, function () {
            return content_delivery_service_generator(this, function (_a) {
                // super.registerSites(SEARCH_SITES, this.trigger.bind(this));
                Logger.debug("[CONTENT DERLIVERY SERVICE] started ( 120 min ).");
                this.ping();
                return [2 /*return*/];
            });
        });
    };
    ContentDeliveryService.prototype.unregister = function () {
        return content_delivery_service_awaiter(this, void 0, void 0, function () {
            return content_delivery_service_generator(this, function (_a) {
                _super.prototype.unregister.call(this);
                this.instance.timerDriver.unregister(ChromeAlaramsTimerDriverTimerIdentifier);
                Logger.debug("[CONTENT DERLIVERY SERVICE] unregistered. currently idle.");
                return [2 /*return*/];
            });
        });
    };
    ContentDeliveryService.prototype.update = function () {
        Logger.debug('[CONTENT DELIVERY SERVICE] updating service forced by unistream system.');
        this.instance.timerDriver.unregister(ChromeAlaramsTimerDriverTimerIdentifier);
        this.ping();
    };
    ContentDeliveryService.prototype.ping = function () {
        return content_delivery_service_awaiter(this, void 0, void 0, function () {
            var compareDate, now, options, filterSet, interactions, errors, errorStrings, errors_1, errors_1_1, error, uuid, interactions_1, interactions_1_1, interaction, e_1_1, e_2;
            var e_3, _a, e_1, _b;
            return content_delivery_service_generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 17, , 18]);
                        compareDate = new Date(this.lastPing);
                        compareDate.setMinutes(compareDate.getMinutes() + 120);
                        now = new Date();
                        options = void 0;
                        filterSet = void 0;
                        interactions = void 0;
                        if (!(now > compareDate)) return [3 /*break*/, 7];
                        Logger.debug("[CONTENT DERLIVERY SERVICE] pinging server");
                        return [4 /*yield*/, getOptions(this.api, this.instance.options.scope)];
                    case 1:
                        options = _c.sent();
                        this.lastPing = new Date;
                        return [4 /*yield*/, validate(options)];
                    case 2:
                        errors = _c.sent();
                        errorStrings = [];
                        if (errors.length > 0) {
                            try {
                                for (errors_1 = content_delivery_service_values(errors), errors_1_1 = errors_1.next(); !errors_1_1.done; errors_1_1 = errors_1.next()) {
                                    error = errors_1_1.value;
                                    errorStrings.push(error.toString());
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (errors_1_1 && !errors_1_1.done && (_a = errors_1.return)) _a.call(errors_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            Logger.error('could not validate content delivery api return for Schema `option/`. critical error!');
                            throw errorStrings;
                        }
                        this.clientOptions = Object.assign(new Options, options);
                        return [4 /*yield*/, this.instance.storage.set(StorageKeys.cd.options, options)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.instance.storage.set(StorageKeys.cd.lastPingDate, this.lastPing.toString())];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, getExternalFilterSet(this.instance, options)];
                    case 5:
                        filterSet = _c.sent();
                        uuid = this.instance.user.uuid;
                        return [4 /*yield*/, getInteractions(this.api, uuid, this.instance.options.scope, filterSet)];
                    case 6:
                        interactions = _c.sent();
                        this.interactions = interactions;
                        return [3 /*break*/, 9];
                    case 7:
                        Logger.debug("[CONTENT DERLIVERY SERVICE] loading from cache internal (120min)");
                        return [4 /*yield*/, this.instance.storage.get(StorageKeys.cd.options)];
                    case 8:
                        options = _c.sent();
                        interactions = this.interactions;
                        _c.label = 9;
                    case 9:
                        _c.trys.push([9, 14, 15, 16]);
                        interactions_1 = content_delivery_service_values(interactions), interactions_1_1 = interactions_1.next();
                        _c.label = 10;
                    case 10:
                        if (!!interactions_1_1.done) return [3 /*break*/, 13];
                        interaction = interactions_1_1.value;
                        return [4 /*yield*/, this.processInteraction(interaction)];
                    case 11:
                        _c.sent();
                        _c.label = 12;
                    case 12:
                        interactions_1_1 = interactions_1.next();
                        return [3 /*break*/, 10];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (interactions_1_1 && !interactions_1_1.done && (_b = interactions_1.return)) _b.call(interactions_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 16:
                        Logger.debug("[CONTENT DERLIVERY SERVICE] new interactions loaded");
                        return [3 /*break*/, 18];
                    case 17:
                        e_2 = _c.sent();
                        // throw e;
                        console.error(e_2);
                        Logger.debug("[CONTENT DERLIVERY SERVICE] ping failed. Rescheduled after 120 minutes.");
                        return [3 /*break*/, 18];
                    case 18:
                        this.instance.timerDriver.register(ChromeAlaramsTimerDriverTimerIdentifier, 5, this.ping.bind(this), false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ContentDeliveryService.prototype.processInteraction = function (interactionData) {
        return content_delivery_service_awaiter(this, void 0, void 0, function () {
            var interaction, date, now, errors, errorStrings, errors_2, errors_2_1, error, nowLocalTime, installDate, patternStack, _a, _b, pattern, convertedPattern;
            var e_4, _c, e_5, _d;
            return content_delivery_service_generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        interaction = Object.assign(new Interaction, interactionData);
                        date = new Date;
                        now = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()));
                        return [4 /*yield*/, validate(interaction)];
                    case 1:
                        errors = _e.sent();
                        errorStrings = [];
                        if (errors.length > 0) {
                            try {
                                for (errors_2 = content_delivery_service_values(errors), errors_2_1 = errors_2.next(); !errors_2_1.done; errors_2_1 = errors_2.next()) {
                                    error = errors_2_1.value;
                                    errorStrings.push(error.toString());
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (errors_2_1 && !errors_2_1.done && (_c = errors_2.return)) _c.call(errors_2);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                            Logger.error('could not validate content delivery api return for Schema `interaction/`. critical error!');
                            throw errorStrings;
                        }
                        this.unregisterSites(interaction.id);
                        interaction.startsAt = new Date(interaction.startsAt);
                        interaction.expiresAt = new Date(interaction.expiresAt);
                        // console.log(now);
                        // console.log(interaction.expiresAt);
                        // console.log(interaction.startsAt);
                        // Expires at
                        if (interaction.expiresAt !== null && now > interaction.expiresAt) {
                            // Dont register this interaction !
                            this.removeInteraction(interaction.id);
                            return [2 /*return*/];
                        }
                        // Starts at
                        if (interaction.startsAt !== null && interaction.startsAt > now) {
                            // Dont register this interaction ! No need for removal!
                            return [2 /*return*/];
                        }
                        if (!(interaction.afterInstallDelayInMinutes !== null)) return [3 /*break*/, 3];
                        nowLocalTime = new Date;
                        return [4 /*yield*/, this.instance.getInstallDate()];
                    case 2:
                        installDate = _e.sent();
                        installDate.setMinutes(installDate.getMinutes() + interaction.afterInstallDelayInMinutes);
                        if (nowLocalTime < installDate) {
                            // Dont register this interaction !
                            return [2 /*return*/];
                        }
                        _e.label = 3;
                    case 3:
                        patternStack = [];
                        try {
                            for (_a = content_delivery_service_values(interaction.trigger.urlGroup.rules), _b = _a.next(); !_b.done; _b = _a.next()) {
                                pattern = _b.value;
                                convertedPattern = pattern.replace(/\/(.*)\/(.*)/ig, "$1");
                                patternStack.push([new RegExp(convertedPattern, "gi"), interaction]);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        this.registerSites(interaction.id, patternStack, this.trigger.bind(this));
                        return [2 /*return*/];
                }
            });
        });
    };
    // async triggerUrlChange(tabId, changeInfo, tab) {
    //   console.log('-------------------------');
    //   console.log(tabId);
    //   console.log(changeInfo);
    //   console.log(tab);
    // }
    ContentDeliveryService.prototype.removeInteraction = function (interactionId) {
        var e_6, _a;
        var newInteractions = [];
        try {
            for (var _b = content_delivery_service_values(this.interactions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var interaction = _c.value;
                if (interaction.id !== interactionId) {
                    newInteractions.push(interaction);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.interactions = newInteractions;
    };
    ContentDeliveryService.prototype.triggerCallback = function (request, sender, sendResponse) {
        return content_delivery_service_awaiter(this, void 0, void 0, function () {
            var closes;
            return content_delivery_service_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(request.type && request.type === ContentDeliveryServiceRequestType)) return [3 /*break*/, 3];
                        if (!request.response) return [3 /*break*/, 2];
                        executeScript(this.instance, sender.tab.id, {
                            code: function () {
                                var frame = document.getElementById('198230182308109283091823098102938908128390');
                                if (frame && frame.parentElement) {
                                    frame.parentElement.remove();
                                }
                                else if (frame) {
                                    frame.remove();
                                }
                            }
                        });
                        return [4 /*yield*/, this.instance.storage.get('unistream_cd_closes')];
                    case 1:
                        closes = _a.sent();
                        if (!closes) {
                            closes = {};
                        }
                        if (request.response === ContentDeliveryServiceRequestCloseResult) {
                            closes[request.interactionId] = { timestamp: +new Date };
                        }
                        else if (request.response === ContentDeliveryServiceRequestShowNeverAgainResult) {
                            this.instance.storage.set('unistream_cd_show_never_again', +new Date);
                        }
                        this.instance.storage.set('unistream_cd_closes', closes);
                        return [3 /*break*/, 3];
                    case 2:
                        if (request.info && request.info == true) {
                            sendResponse({ interactions: this.interactions });
                        }
                        else if (request.action && request.action === ContentDeliveryServiceRequestFrameLoadedResult) {
                            executeScript(this.instance, sender.tab.id, {
                                code: function (type, action, interactionId) { chrome.runtime.sendMessage({ type: type, action: action, interactionId: interactionId }); },
                                args: [ContentDeliveryServiceRequestType, ContentDeliveryServiceRequestFramesResult, request.interactionId],
                                allFrames: true
                            });
                        }
                        else if (request.action && request.action === ContentDeliveryServiceRequestFramesResult) {
                            executeScript(this.instance, sender.tab.id, {
                                frameId: sender.frameId,
                                code: function (interactionId) {
                                    var closeIdBtn = document.getElementById('close_yuwpebjmir');
                                    var neverShowIdBtn = document.getElementById('never_show_again_yuwpebjmir');
                                    if (closeIdBtn) {
                                        closeIdBtn.addEventListener('click', function () { chrome.runtime.sendMessage({ type: "content-delivery", response: "close", interactionId: interactionId }); });
                                    }
                                    if (neverShowIdBtn) {
                                        document.getElementById('never_show_again_yuwpebjmir').addEventListener('click', function () { chrome.runtime.sendMessage({ type: "content-delivery", response: "show-never-again", interactionId: "${request.interactionId}" }); });
                                    }
                                    var closes = document.getElementsByClassName('close_yuwpebjmir');
                                    if (closes) {
                                        // @ts-ignore
                                        closes = Array.from(closes);
                                        // @ts-ignore
                                        closes.forEach(function (element) {
                                            element.addEventListener('click', function (e) {
                                                e.preventDefault();
                                                // @ts-ignore
                                                var url = element.getAttribute('href');
                                                if (url && url !== '#') {
                                                    window.open(url, '_blank');
                                                }
                                                chrome.runtime.sendMessage({ type: "content-delivery", response: "close", interactionId: interactionId });
                                            });
                                        });
                                        var nsas = document.getElementsByClassName('never_show_again_yuwpebjmir');
                                        if (nsas) {
                                            // @ts-ignore
                                            nsas = Array.from(nsas);
                                            // @ts-ignore
                                            nsas.forEach(function (element) {
                                                element.addEventListener('click', function (e) {
                                                    e.preventDefault();
                                                    // @ts-ignore
                                                    var url = element.getAttribute('href');
                                                    if (url && url !== '#') {
                                                        window.open(url, '_blank');
                                                    }
                                                    chrome.runtime.sendMessage({ type: "content-delivery", response: "show-never-again", interactionId: interactionId });
                                                });
                                            });
                                        }
                                    }
                                },
                                args: [request.interactionId]
                            });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContentDeliveryService.prototype.trigger = function (url, matches, patternStack, tabOptions) {
        return content_delivery_service_awaiter(this, void 0, void 0, function () {
            var closes, showNeverAgain, interaction, now, interactionValidCloseTime, now, interactionValidCloseTime, creative, tabId, creativeEncoded, code;
            return content_delivery_service_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.instance.storage.get('unistream_cd_closes')];
                    case 1:
                        closes = _a.sent();
                        if (!closes) {
                            closes = {};
                        }
                        return [4 /*yield*/, this.instance.storage.get('unistream_cd_show_never_again')];
                    case 2:
                        showNeverAgain = _a.sent();
                        interaction = patternStack[1];
                        // interaction.creative.interactionCloseTimeFrame = 60;
                        if (showNeverAgain) {
                            now = (+new Date());
                            interactionValidCloseTime = showNeverAgain + (this.clientOptions.INT_SHOW_NEVER_AGAIN_VALID_IN_D * 1000 * 86400);
                            if (now < interactionValidCloseTime) {
                                Logger.debug('[CONTENT DELIVERY SERVICE] no interaction for this user. Opt out for all interactions.');
                                return [2 /*return*/];
                            }
                        }
                        if (closes[interaction.id]) {
                            now = (+new Date());
                            interactionValidCloseTime = (closes[interaction.id].timestamp) + (interaction.creative.interactionCloseTimeFrame * 1000);
                            if (now < interactionValidCloseTime) {
                                Logger.debug('[CONTENT DELIVERY SERVICE] no interaction for this user and the particular interaction.');
                                return [2 /*return*/];
                            }
                        }
                        creative = new Creative(interaction.creative, this.instance.user.uuid);
                        tabId = tabOptions.tabId;
                        if (this.instance.type === UnistreamSDKTypes.CHROME_MV3) {
                            chrome.scripting.executeScript({
                                target: { tabId: tabId },
                                func: creative.build,
                                args: [creative, interaction.id]
                            });
                        }
                        else if (this.instance.type === UnistreamSDKTypes.CHROME_MV2) {
                            creativeEncoded = 'unistream_creative_hnx980NBsb4872934GaP921387 = ' + JSON.stringify(creative) + '; ';
                            code = creativeEncoded + (creative.build.toString().replace('function (', 'function unistream_kljsdf8093h4fiuuhaHx82734Ja(') + "\n " + "unistream_kljsdf8093h4fiuuhaHx82734Ja(unistream_creative_hnx980NBsb4872934GaP921387, '".concat(interaction.id, "');"));
                            chrome.tabs.executeScript(tabId, {
                                code: code,
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ContentDeliveryService;
}(WebsiteService));


;// CONCATENATED MODULE: ../src/services/base/cronjob.service.ts
var cronjob_service_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cronjob_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var cronjob_service_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CronJobService = /** @class */ (function (_super) {
    cronjob_service_extends(CronJobService, _super);
    function CronJobService() {
        var _this = _super.call(this) || this;
        _this.identifier = "unistream-cronjob-service";
        Logger.debug("Created a CronJob Service Identifier: " + _this.identifier);
        return _this;
    }
    CronJobService.prototype.options = function () {
        return {};
    };
    CronJobService.prototype.register = function () {
        return cronjob_service_awaiter(this, void 0, void 0, function () { return cronjob_service_generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    CronJobService.prototype.unregister = function () {
        return cronjob_service_awaiter(this, void 0, void 0, function () { return cronjob_service_generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    CronJobService.prototype.registerPeriodicallCallback = function (periodInMinutes, callback) {
        return cronjob_service_awaiter(this, void 0, void 0, function () {
            return cronjob_service_generator(this, function (_a) {
                this.instance.timerDriver.register(this.identifier, periodInMinutes, callback, true);
                return [2 /*return*/];
            });
        });
    };
    return CronJobService;
}(Service));


;// CONCATENATED MODULE: ../src/services/ping.service.ts
var ping_service_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ping_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ping_service_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PingService = /** @class */ (function (_super) {
    ping_service_extends(PingService, _super);
    function PingService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PingService.prototype.options = function () {
        return {};
    };
    PingService.prototype.register = function () {
        return ping_service_awaiter(this, void 0, void 0, function () {
            return ping_service_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.registerPeriodicallCallback.call(this, this.instance.options.pingIntervalInMinutes, this.trigger.bind(this))];
                    case 1:
                        _a.sent();
                        // await super.registerPeriodicallCallback(2, this.trigger.bind(this));
                        Logger.debug("[PING SERVICE] measurement started. ping every ".concat(this.instance.options.pingIntervalInMinutes, " minutes."));
                        return [2 /*return*/];
                }
            });
        });
    };
    PingService.prototype.trigger = function () {
        return ping_service_awaiter(this, void 0, void 0, function () {
            return ping_service_generator(this, function (_a) {
                this.instance.updateUser();
                return [2 /*return*/];
            });
        });
    };
    return PingService;
}(CronJobService));


;// CONCATENATED MODULE: ../src/services.ts
var services_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


function createServices(services) {
    var e_1, _a;
    var output = [];
    try {
        for (var services_1 = services_values(services), services_1_1 = services_1.next(); !services_1_1.done; services_1_1 = services_1.next()) {
            var serviceName = services_1_1.value;
            switch (serviceName) {
                case 'PingService':
                    output.push(new PingService);
                    break;
                // case 'SearchService': output.push(new SearchService); break;
                case 'ContentDeliveryService':
                    output.push(new ContentDeliveryService);
                    break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (services_1_1 && !services_1_1.done && (_a = services_1.return)) _a.call(services_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return output;
}
// Here you can add which service the build should have activated ( default )
var SERVICES = ({"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.SERVICES ? createServices({"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.SERVICES) : [
    new PingService,
    // new SearchService,
    new ContentDeliveryService
]);

;// CONCATENATED MODULE: ../src/timer/chrome-alarms.timer.driver.ts
var chrome_alarms_timer_driver_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var chrome_alarms_timer_driver_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ChromeAlaramsTimerDriver = /** @class */ (function () {
    function ChromeAlaramsTimerDriver() {
        if (!chrome.alarms) {
            throw 'THIS BUILD USES `chrome.alarms`. Extension Permission Required.';
        }
        this.callbacks = {};
    }
    ChromeAlaramsTimerDriver.prototype.initialize = function () {
        return chrome_alarms_timer_driver_awaiter(this, void 0, void 0, function () {
            return chrome_alarms_timer_driver_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Logger.debug('[CHROME ALARMS DRIVER] All alarms cleared');
                        return [4 /*yield*/, chrome.alarms.onAlarm.addListener(this.callback.bind(this))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChromeAlaramsTimerDriver.prototype.callback = function (alarm) {
        if (this.callbacks[alarm.name]) {
            this.callbacks[alarm.name].func();
        }
    };
    ChromeAlaramsTimerDriver.prototype.register = function (identifier, periodInMinutes, callback, repeating) {
        if (repeating === void 0) { repeating = false; }
        this.callbacks[identifier] = { func: callback, repeating: repeating };
        this.create(identifier, periodInMinutes, repeating);
    };
    ChromeAlaramsTimerDriver.prototype.unregister = function (identifier) {
        return chrome_alarms_timer_driver_awaiter(this, void 0, void 0, function () {
            return chrome_alarms_timer_driver_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chrome.alarms.clear(identifier)];
                    case 1:
                        _a.sent();
                        delete this.callbacks[identifier];
                        return [2 /*return*/];
                }
            });
        });
    };
    ChromeAlaramsTimerDriver.prototype.create = function (identifier, periodInMinutes, repeating) {
        if (repeating) {
            chrome.alarms.create(identifier, {
                periodInMinutes: periodInMinutes,
                when: Date.now() + 500,
            });
        }
        else {
            chrome.alarms.create(identifier, {
                delayInMinutes: periodInMinutes
            });
        }
    };
    return ChromeAlaramsTimerDriver;
}());


;// CONCATENATED MODULE: ../src/timer/js-timeout.timer.driver.ts
var js_timeout_timer_driver_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var js_timeout_timer_driver_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var JsTimeoutDriver = /** @class */ (function () {
    function JsTimeoutDriver() {
        this.intervalObjects = {};
    }
    JsTimeoutDriver.prototype.initialize = function () {
        return js_timeout_timer_driver_awaiter(this, void 0, void 0, function () {
            return js_timeout_timer_driver_generator(this, function (_a) {
                Logger.debug('[JS TIMEOUT DRIVER] initialized.');
                return [2 /*return*/];
            });
        });
    };
    JsTimeoutDriver.prototype.register = function (identifier, periodInMinutes, callback, repeating) {
        if (repeating === void 0) { repeating = false; }
        if (repeating) {
            if (this.intervalObjects[identifier]) {
                Logger.error('[JS TIMEOUT DRIVER] repeating timer with identfier `' + identifier + '` could not be created. Already existing on with this identifier.');
                return;
            }
            this.intervalObjects[identifier] = { instance: setInterval(callback, periodInMinutes * 60 * 1000), type: 'interval' };
            callback();
        }
        else {
            this.intervalObjects[identifier] = { instance: setTimeout(callback, periodInMinutes * 60 * 1000), type: 'timeout' };
        }
    };
    JsTimeoutDriver.prototype.unregister = function (identifier) {
        return js_timeout_timer_driver_awaiter(this, void 0, void 0, function () {
            return js_timeout_timer_driver_generator(this, function (_a) {
                if (!this.intervalObjects[identifier]) {
                    Logger.error('[JS TIMEOUT DRIVER] there is no timer with identifier `' + identifier + '`. You can only unregister repeating timer.');
                    return [2 /*return*/];
                }
                if (!this.intervalObjects[identifier].type) {
                    Logger.error('[JS TIMEOUT DRIVER] there is no timer with identifier `' + identifier + '`. You can only unregister repeating timer. ( Unexpected error )');
                    return [2 /*return*/];
                }
                if (this.intervalObjects[identifier].type === 'interval') {
                    clearInterval(this.intervalObjects[identifier].instance);
                }
                else if (this.intervalObjects[identifier].type === 'timeout') {
                    clearTimeout(this.intervalObjects[identifier].instance);
                }
                delete this.intervalObjects[identifier];
                return [2 /*return*/];
            });
        });
    };
    return JsTimeoutDriver;
}());


;// CONCATENATED MODULE: ../src/unistream-sdk-instance.ts
var unistream_sdk_instance_assign = (undefined && undefined.__assign) || function () {
    unistream_sdk_instance_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return unistream_sdk_instance_assign.apply(this, arguments);
};
var unistream_sdk_instance_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var unistream_sdk_instance_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var unistream_sdk_instance_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var unistream_sdk_instance_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};










var UnistreamSDKInstanceOptions = /** @class */ (function () {
    function UnistreamSDKInstanceOptions() {
        this.pingIntervalInMinutes = 15;
    }
    unistream_sdk_instance_decorate([
        IsNotEmpty()
    ], UnistreamSDKInstanceOptions.prototype, "version", void 0);
    unistream_sdk_instance_decorate([
        IsNotEmpty()
    ], UnistreamSDKInstanceOptions.prototype, "propertyId", void 0);
    unistream_sdk_instance_decorate([
        IsNotEmpty()
    ], UnistreamSDKInstanceOptions.prototype, "scope", void 0);
    unistream_sdk_instance_decorate([
        IsOptional()
    ], UnistreamSDKInstanceOptions.prototype, "apiBaseUrl", void 0);
    unistream_sdk_instance_decorate([
        IsOptional()
    ], UnistreamSDKInstanceOptions.prototype, "apiBaseUrlContentDelivery", void 0);
    unistream_sdk_instance_decorate([
        IsOptional()
    ], UnistreamSDKInstanceOptions.prototype, "pingIntervalInMinutes", void 0);
    return UnistreamSDKInstanceOptions;
}());

var UnistreamSDKInstance = /** @class */ (function () {
    function UnistreamSDKInstance() {
        this.type = {"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.TYPE;
    }
    UnistreamSDKInstance.prototype.initialize = function (options) {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var e_1;
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options = new UnistreamSDKInstanceOptions;
                        this.options = Object.assign(this.options, options);
                        this.services = [];
                        Logger.debug('Initailizing unistream sdk with desired options', options);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, this.initializeOptions()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.initializeTimer()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.initializeApi()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.initializeStorage()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.initializeUser()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.initializeBasics()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        Logger.error(e_1);
                        if (e_1 === false) {
                            this.waitForRetry();
                            return [2 /*return*/];
                        }
                        throw e_1;
                    case 9: return [4 /*yield*/, this.registerServices()];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeOptions = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var errors, errorStrings, errors_1, errors_1_1, error;
            var e_2, _a;
            return unistream_sdk_instance_generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, validate(this.options)];
                    case 1:
                        errors = _b.sent();
                        errorStrings = [];
                        if (errors.length > 0) {
                            try {
                                for (errors_1 = unistream_sdk_instance_values(errors), errors_1_1 = errors_1.next(); !errors_1_1.done; errors_1_1 = errors_1.next()) {
                                    error = errors_1_1.value;
                                    errorStrings.push(error.toString());
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (errors_1_1 && !errors_1_1.done && (_a = errors_1.return)) _a.call(errors_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            Logger.error('could not validate options for unistream sdk. critical erros!');
                            throw errorStrings;
                        }
                        if (!this.options.apiBaseUrl && {"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.API_URL) {
                            this.options.apiBaseUrl = {"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.API_URL;
                        }
                        if (!this.options.apiBaseUrlContentDelivery && {"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.API_URL_CD) {
                            this.options.apiBaseUrlContentDelivery = {"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.API_URL_CD;
                        }
                        Logger.debug('Parsed options:', this.options);
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeBasics = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var installDate;
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(StorageKeys.installDate)];
                    case 1:
                        installDate = _a.sent();
                        if (installDate === null) {
                            this.storage.set(StorageKeys.installDate, (new Date).toString());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeTimer = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ({"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.TYPE === UnistreamSDKTypes.CHROME_MV3) {
                            this.timerDriver = new ChromeAlaramsTimerDriver;
                        }
                        else if ({"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.TYPE === UnistreamSDKTypes.CHROME_MV2) {
                            this.timerDriver = new JsTimeoutDriver;
                        }
                        else {
                            throw 'BAD BUILD MODE. BUILD BROKEN. CURRENTLY ONLY CHROME SUPPORT.';
                        }
                        return [4 /*yield*/, this.timerDriver.initialize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeApi = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                this.api = new Api(this);
                return [2 /*return*/];
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeStorage = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                if ({"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.TYPE === UnistreamSDKTypes.CHROME_MV2 || {"env":{"API_URL":"https://data.unistream.io","API_URL_CD":"https://cdn.unistream.io","ENV":"production","TYPE":"chrome.mv2"}}.env.TYPE === UnistreamSDKTypes.CHROME_MV3) {
                    this.storage = new ChromeStorageDriver({});
                }
                else {
                    throw 'BAD BUILD MODE. BUILD BROKEN. CURRENTLY ONLY CHROME SUPPORT.';
                }
                return [2 /*return*/];
            });
        });
    };
    UnistreamSDKInstance.prototype.initializeUser = function (forceNew) {
        if (forceNew === void 0) { forceNew = false; }
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return unistream_sdk_instance_generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(forceNew === false)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, (new User(this)).getFromStorageOrCreate()];
                    case 1:
                        _a.user = _c.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, (new User(this)).createUser()];
                    case 3:
                        _b.user = _c.sent();
                        if (this.user === null) {
                            throw false;
                        }
                        return [4 /*yield*/, this.storage.set("uuid", this.user.uuid)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        if (this.user === null) {
                            throw false;
                        }
                        Logger.debug("Initialized user with uuid:", this.user.uuid);
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.waitForRetry = function () {
        var _this = this;
        Logger.info('Retrying in 5 minutes to intialize');
        setTimeout(function () { return unistream_sdk_instance_awaiter(_this, void 0, void 0, function () {
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Logger.info('Trying to reinitialize unistream ...');
                        return [4 /*yield*/, this.initialize(this.options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, 60 * 5 * 1000);
    };
    // Placed into the main instance, because Unistream has two main functions: user updates and events, and all services can use it
    UnistreamSDKInstance.prototype.updateUser = function (data, updateServices) {
        if (data === void 0) { data = null; }
        if (updateServices === void 0) { updateServices = false; }
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var options, tba, userData;
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Logger.debug('[Unistream SDK] User Profile Update Initialized');
                        options = {
                            client: { version: this.options.version }
                        };
                        return [4 /*yield*/, this.storage.get("wba")];
                    case 1:
                        tba = _a.sent();
                        if (tba === 'dnt') {
                            options['trackingDisabled'] = true;
                        }
                        if (data !== null) {
                            options = unistream_sdk_instance_assign(unistream_sdk_instance_assign({}, options), data);
                        }
                        return [4 /*yield*/, this.api.patch('/user', options)];
                    case 2:
                        userData = _a.sent();
                        return [4 /*yield*/, this.user.updateUserData(userData)];
                    case 3:
                        _a.sent();
                        if (updateServices) {
                            this.updateServices();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.getInstallDate = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var _a;
            return unistream_sdk_instance_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Date.bind;
                        return [4 /*yield*/, this.storage.get(StorageKeys.installDate)];
                    case 1: return [2 /*return*/, new (_a.apply(Date, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.registerServices = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var SERVICES_1, SERVICES_1_1, service, e_3_1;
            var e_3, _a;
            return unistream_sdk_instance_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, 7, 8]);
                        SERVICES_1 = unistream_sdk_instance_values(SERVICES), SERVICES_1_1 = SERVICES_1.next();
                        _b.label = 1;
                    case 1:
                        if (!!SERVICES_1_1.done) return [3 /*break*/, 5];
                        service = SERVICES_1_1.value;
                        service.connectInstance(this);
                        return [4 /*yield*/, service.initialize(service.options())];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, service.register()];
                    case 3:
                        _b.sent();
                        this.services.push(service);
                        _b.label = 4;
                    case 4:
                        SERVICES_1_1 = SERVICES_1.next();
                        return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (SERVICES_1_1 && !SERVICES_1_1.done && (_a = SERVICES_1.return)) _a.call(SERVICES_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.enableService = function (serviceName) {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var service;
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = this.findService(serviceName);
                        return [4 /*yield*/, service.register()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.disableService = function (serviceName) {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var service;
            return unistream_sdk_instance_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = this.findService(serviceName);
                        return [4 /*yield*/, service.unregister()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnistreamSDKInstance.prototype.findService = function (serviceName) {
        var e_4, _a;
        try {
            for (var _b = unistream_sdk_instance_values(this.services), _c = _b.next(); !_c.done; _c = _b.next()) {
                var service = _c.value;
                if (service.constructor.name === serviceName) {
                    return service;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return null;
    };
    UnistreamSDKInstance.prototype.updateServices = function () {
        return unistream_sdk_instance_awaiter(this, void 0, void 0, function () {
            var _a, _b, service;
            var e_5, _c;
            return unistream_sdk_instance_generator(this, function (_d) {
                try {
                    for (_a = unistream_sdk_instance_values(this.services), _b = _a.next(); !_b.done; _b = _a.next()) {
                        service = _b.value;
                        service.update();
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    return UnistreamSDKInstance;
}());


;// CONCATENATED MODULE: ../src/main.ts
var main_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var main_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var main_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


var UnistreamSDKTypes;
(function (UnistreamSDKTypes) {
    UnistreamSDKTypes["PLAIN"] = "plain";
    UnistreamSDKTypes["CHROME_MV2"] = "chrome.mv2";
    UnistreamSDKTypes["CHROME_MV3"] = "chrome.mv3";
})(UnistreamSDKTypes || (UnistreamSDKTypes = {}));
__webpack_require__.g.UnistreamSDK = function (options) { return main_awaiter(void 0, void 0, void 0, function () {
    var sdk, e_1, e_2, e_2_1, msg;
    var e_3, _a;
    return main_generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                sdk = new UnistreamSDKInstance;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                console.log('Unistream is initializing.');
                return [4 /*yield*/, sdk.initialize(options)];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                if (Array.isArray(e_1)) {
                    try {
                        for (e_2 = main_values(e_1), e_2_1 = e_2.next(); !e_2_1.done; e_2_1 = e_2.next()) {
                            msg = e_2_1.value;
                            Logger.error(msg);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (e_2_1 && !e_2_1.done && (_a = e_2.return)) _a.call(e_2);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                else {
                    Logger.error('could not initialize Unistream SDK. Errors: ');
                    Logger.error("Error", e_1);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, sdk];
        }
    });
}); };

})();

/******/ })()
;