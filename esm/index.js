"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = exports.clipboardPermission = exports.notificationPermission = exports.filterUniqueByProperty = exports.updateObjectFromImport = exports.clipboard = exports.checkDeviceType = exports.checkEmail = exports.checkPassword = exports.formatBytes = exports.strLength = exports.checkNotNull = exports.checkNull = exports.url = exports.localCookie = exports.info = void 0;
//导出自己的名字
exports.info = {
    name: 'galanga',
    author: 'censujiang',
};
//引入并导出所有子模块
var cookie_1 = require("./cookie");
Object.defineProperty(exports, "localCookie", { enumerable: true, get: function () { return cookie_1.localCookie; } });
var url_1 = require("./url");
Object.defineProperty(exports, "url", { enumerable: true, get: function () { return url_1.url; } });
var string_1 = require("./string");
Object.defineProperty(exports, "checkNull", { enumerable: true, get: function () { return string_1.checkNull; } });
Object.defineProperty(exports, "checkNotNull", { enumerable: true, get: function () { return string_1.checkNotNull; } });
Object.defineProperty(exports, "strLength", { enumerable: true, get: function () { return string_1.strLength; } });
Object.defineProperty(exports, "formatBytes", { enumerable: true, get: function () { return string_1.formatBytes; } });
Object.defineProperty(exports, "checkPassword", { enumerable: true, get: function () { return string_1.checkPassword; } });
Object.defineProperty(exports, "checkEmail", { enumerable: true, get: function () { return string_1.checkEmail; } });
var device_1 = require("./device");
Object.defineProperty(exports, "checkDeviceType", { enumerable: true, get: function () { return device_1.checkDeviceType; } });
Object.defineProperty(exports, "clipboard", { enumerable: true, get: function () { return device_1.clipboard; } });
var object_1 = require("./object");
Object.defineProperty(exports, "updateObjectFromImport", { enumerable: true, get: function () { return object_1.updateObjectFromImport; } });
var array_1 = require("./array");
Object.defineProperty(exports, "filterUniqueByProperty", { enumerable: true, get: function () { return array_1.filterUniqueByProperty; } });
var permission_1 = require("./permission");
Object.defineProperty(exports, "notificationPermission", { enumerable: true, get: function () { return permission_1.notificationPermission; } });
Object.defineProperty(exports, "clipboardPermission", { enumerable: true, get: function () { return permission_1.clipboardPermission; } });
var number_1 = require("./number");
Object.defineProperty(exports, "formatNumber", { enumerable: true, get: function () { return number_1.formatNumber; } });
