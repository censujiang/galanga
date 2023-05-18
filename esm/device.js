"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDeviceType = exports.clipboard = void 0;
var permission_1 = require("./permission");
exports.clipboard = {
    read: function () { return __awaiter(void 0, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, permission_1.clipboardPermission.request()];
                case 1:
                    if (!((_a.sent()) == true)) return [3 /*break*/, 3];
                    return [4 /*yield*/, navigator.clipboard.readText()];
                case 2:
                    text = _a.sent();
                    return [2 /*return*/, text];
                case 3: return [2 /*return*/, null];
            }
        });
    }); },
    write: function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, permission_1.clipboardPermission.request()];
                case 1:
                    if (!((_a.sent()) == true)) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, navigator.clipboard.writeText(value)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, true];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, false];
                case 5: return [3 /*break*/, 7];
                case 6: return [2 /*return*/, false];
                case 7: return [2 /*return*/];
            }
        });
    }); }
};
function checkDeviceType(types, return_string) {
    if (types === void 0) { types = ['os', 'browser', 'device']; }
    if (return_string === void 0) { return_string = false; }
    var ua = navigator.userAgent;
    function getOS() {
        var osRegex = /(HarmonyOS)\/([\d.]+)|(Android);?[\s\/]+([\d.]+)?|(iPad).*OS\s([\d_]+)|(iPod)(.*OS\s([\d_]+))?|(iPhone\sOS)\s([\d_]+)|(Windows\sPhone)\sOS\s([\d.]+)|(Macintosh);.*Mac\sOS\sX\s([\d_]+)|(Windows\sNT)\s([\d.]+)|(Linux)\s?([\d.]+)?/;
        var matches = ua.match(osRegex);
        if (matches) {
            if (matches[1]) {
                return 'harmonyos';
            }
            else if (matches[3]) {
                return 'android';
            }
            else if (matches[5] || matches[7] || matches[9]) {
                return 'ios';
            }
            else if (matches[11]) {
                return 'wp';
            }
            else if (matches[13]) {
                return 'mac';
            }
            else if (matches[15]) {
                return 'windows';
            }
            else if (matches[17]) {
                return 'linux';
            }
        }
        return 'other';
    }
    function getBrowser() {
        var browserRegex = /(MicroMessenger)\/([\d.]+)|(QQ)\/([\d.]+)|(UCBrowser)\/([\d.]+)|(360SE)|(360EE)|(Maxthon)|(TaoBrowser)|(TheWorld)|(SE)\s([\d.]+)|(LBBROWSER)|(Chrome)\/([\d.]+)|(Firefox)\/([\d.]+)|(Opera).+Version\/([\d.]+)|(Safari)\/([\d.]+)|(Trident)\/([\d.]+)/;
        var matches = ua.match(browserRegex);
        if (matches) {
            if (matches[1]) {
                return 'wechat';
            }
            else if (matches[3]) {
                return 'qq';
            }
            else if (matches[5]) {
                return 'uc';
            }
            else if (matches[6] || matches[7]) {
                return '360';
            }
            else if (matches[8]) {
                return 'maxthon';
            }
            else if (matches[9]) {
                return 'taobao';
            }
            else if (matches[10]) {
                return 'theworld';
            }
            else if (matches[12]) {
                return 'sogou';
            }
            else if (matches[13]) {
                return 'liebao';
            }
            else if (matches[14]) {
                return 'chrome';
            }
            else if (matches[15]) {
                return 'firefox';
            }
            else if (matches[16]) {
                return 'opera';
            }
            else if (matches[17]) {
                return 'safari';
            }
            else if (matches[18]) {
                return 'ie';
            }
        }
        return 'other';
    }
    function getDevice() {
        var deviceRegex = /(iPad).*OS\s([\d_]+)|(iPod)(.*OS\s([\d_]+))?|(iPhone\sOS)\s([\d_]+)|(Android);?[\s\/]+([\d.]+)?|(Windows\sPhone)\sOS\s([\d.]+)|(Windows\sNT)\s([\d.]+)|(Macintosh);.*Mac\sOS\sX\s([\d_]+)|(Linux)\s?([\d.]+)?/;
        var matches = ua.match(deviceRegex);
        if (matches) {
            if (matches[1] || matches[3] || matches[5]) {
                return 'tablet';
            }
            else if (matches[7] || matches[9] || matches[11]) {
                return 'mobile';
            }
            else if (matches[13] || matches[15] || matches[17]) {
                return 'pc';
            }
        }
        return 'other';
    }
    var result = {
        os: getOS(),
        browser: getBrowser(),
        device: getDevice()
    };
    if (return_string) {
        if (types.length === 1) {
            return result[types[0]];
        }
    }
    return result;
}
exports.checkDeviceType = checkDeviceType;
