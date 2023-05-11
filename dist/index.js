/*!
 * galanga 0.1.0 (https://github.com/censujiang/galanga)
 * API https://github.com/censujiang/galanga/blob/master/doc/api.md
 * Copyright 2014-2023 censujiang. All Rights Reserved
 * Licensed under Apache License 2.0 (https://github.com/censujiang/galanga/blob/master/LICENSE)
 */

'use strict';

//操作cookie的方法
var localCookie = {
    getItem: function (sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = '';
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                    break;
                case String:
                    sExpires = '; expires=' + vEnd;
                    break;
                case Date:
                    sExpires = '; expires=' + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
    },
    hasItem: function (sKey) {
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^]+)(?=;|$)|^\s*|\s*(?:[^;]*)?(?:|$)/g, '').split(/\s*(?:[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    },
    clear: function () {
        var keys = this.keys();
        for (var i = 0; i < keys.length; i++) {
            this.removeItem(keys[i]);
        }
    }
};

var url = {
    getQuery: function (name) {
        var result = window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getHash: function (name) {
        var result = window.location.hash.match(new RegExp('[#&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getPath: function () {
        return window.location.pathname;
    },
};

// 检查输入的值是否为空
function checkNull(val) {
    if (val == null || val == undefined || val == '' || typeof val === 'number' && isNaN(val)) {
        return true;
    }
    else if (Array.isArray(val) && val.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
// 检查输入的值是否非空
function checkNotNull(val) {
    return !checkNull(val);
}
//获取字符串的字节数
function strLength(str) {
    var count = 0; //初始化字节数递加变量并获取字符串参数的字符个数
    if (str) { //如果存在字符串，则执行
        var len = str.length;
        for (var i = 0; i < len; i++) { //遍历字符串，枚举每个字符
            if (str.charCodeAt(i) > 255) { //字符编码大于255，说明是双字节字符(即是中文)
                count += 2; //则累加2个
            }
            else {
                count++; //否则递加一次
            }
        }
        return count; //返回字节数
    }
    else {
        return 0; //如果参数为空，则返回0个
    }
}
//自动转换字节的单位，会有两个参数输入到此函数，分别是数量，和一个json对象，对象中有三个属性，分别是保留的小数位数（默认为1），输入的字节是哪种单位（默认为B，没有名为auto的值），输出的字节是哪种单位（默认为auto）
//首先根据输入的数量和输入的字节单位，自动转换成字节数（以B为单位）
//然后根据设置的输出的字节单位，自动转换成对应的字节单位。如果输出的字节单位为auto，则根据输入的字节单位自动转换成合适的字节单位
//最后返回转换后的字符串
function formatBytes(bytes, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.decimals, decimals = _c === void 0 ? 1 : _c, _d = _b.from, from = _d === void 0 ? 'B' : _d, _e = _b.to, to = _e === void 0 ? 'auto' : _e;
    //如果输入的bytes为负数的处理
    if (bytes < 0) {
        return '-' + formatBytes(-bytes, {
            decimals: decimals,
            from: from,
            to: to
        });
    }
    else if (bytes === 0) {
        return '0 B';
    }
    else {
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = from === 'auto' ? Math.floor(Math.log(bytes) / Math.log(k)) : sizes.indexOf(from);
        bytes = bytes / Math.pow(k, i);
        if (to === 'auto') {
            var j = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, j)).toFixed(dm)) + ' ' + sizes[j];
        }
        else {
            return parseFloat((bytes).toFixed(dm)) + ' ' + to;
        }
    }
}
//检查密码强度的函数，会有两个参数输入到此函数，分别是密码，和一个json对象，对象中有几个属性，分别是密码的最小长度（默认为8），密码的最大长度（默认为16），密码中必须包含的字符类型（默认为数字、大小写字母、特殊字符），密码中必须包含的字符类型的最小数量（默认为1），密码中必须包含的字符类型的最大数量（默认为3），密码中必须包含的字符类型的最小数量（默认为2），密码中必须包含的字符类型的最大数量（默认为4）
//首先根据设置的密码的最小长度和密码的最大长度，判断密码的长度是否符合要求
//然后根据设置的密码中必须包含的字符类型，判断密码中是否包含了所有的字符类型
//最后根据设置的密码中必须包含的字符类型的最小数量和密码中必须包含的字符类型的最大数量，判断密码中是否包含了所有的字符类型的最小数量和最大数量
function checkPassword(password, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.minLength, minLength = _c === void 0 ? 8 : _c, _d = _b.maxLength, maxLength = _d === void 0 ? 16 : _d, 
    //字符类型：数字、小写字母、大写字母、特殊字符
    _e = _b.types, 
    //字符类型：数字、小写字母、大写字母、特殊字符
    types = _e === void 0 ? ['number', 'lowercase', 'uppercase', 'special'] : _e, _f = _b.minTypes, minTypes = _f === void 0 ? 2 : _f, _g = _b.maxTypes, maxTypes = _g === void 0 ? 4 : _g;
    //判断密码的长度是否符合要求
    if (password.length < minLength || password.length > maxLength) {
        return false;
    }
    //判断密码中是否包含了所有的字符类型
    var typesCount = 0;
    if (types.indexOf('number') > -1 && /\d/.test(password)) {
        typesCount++;
    }
    if (types.indexOf('lowercase') > -1 && /[a-z]/.test(password)) {
        typesCount++;
    }
    if (types.indexOf('uppercase') > -1 && /[A-Z]/.test(password)) {
        typesCount++;
    }
    if (types.indexOf('special') > -1 && /[~!@#$%^&*()_+`\-={}:";'<>?,.\/]/.test(password)) {
        typesCount++;
    }
    if (typesCount < minTypes || typesCount > maxTypes) {
        return false;
    }
    return true;
}
//检查是否为Email的函数，会有一个参数输入到此函数，分别是Email
function checkEmail(email) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(email);
}

//根据UA检查设备类型
//启动此函数后，默认的参数输入类型是['os','browser','device']，也可以自定义
//其中os是操作系统，browser是浏览器，device是设备类型
//返回值是一个对象，根据输入的类型，返回对应的值，比如说输入['os','browser']，返回值就是{os:'ios',browser:'safari'}
//os的值有：ios,android,harmonyos,wp,mac,windows,linux,other
//browser的值有：safari,chrome,firefox,ie,opera,uc,qq,360,other
//device的值有：mobile,tablet,pc,watch,other
function checkDeviceType(types, return_string) {
    if (types === void 0) { types = ['os', 'browser', 'device']; }
    if (return_string === void 0) { return_string = false; }
    var ua = navigator.userAgent;
    //检查操作系统类型
    var os = (function () {
        var s = ua.match(/(HarmonyOS)\/([\d.]+)/);
        if (s) {
            return { os: 'harmonyos', version: s[2] };
        }
        ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        if (s) {
            return { os: 'android', version: s[2] };
        }
        s = ua.match(/(iPad).*OS\s([\d_]+)/);
        if (s) {
            return { os: 'ios', version: s[2].replace(/_/g, '.') };
        }
        s = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        if (s) {
            return { os: 'ios', version: s[3].replace(/_/g, '.') };
        }
        s = ua.match(/(iPhone\sOS)\s([\d_]+)/);
        if (s) {
            return { os: 'ios', version: s[2].replace(/_/g, '.') };
        }
        s = ua.match(/(Windows\sPhone)\sOS\s([\d.]+)/);
        if (s) {
            return { os: 'wp', version: s[2] };
        }
        s = ua.match(/(Macintosh);.*Mac\sOS\sX\s([\d_]+)/);
        if (s) {
            return { os: 'mac', version: s[2].replace(/_/g, '.') };
        }
        s = ua.match(/(Windows\sNT)\s([\d.]+)/);
        if (s) {
            return { os: 'windows', version: s[2] };
        }
        s = ua.match(/(Linux)\s?([\d.]+)?/);
        if (s) {
            return { os: 'linux', version: s[2] };
        }
        return { os: 'other', version: '0' };
    })();
    //检查浏览器类型
    var browser = (function () {
        var s = ua.match(/(MicroMessenger)\/([\d.]+)/);
        if (s) {
            return { browser: 'wechat', version: s[2] };
        }
        s = ua.match(/(QQ)\/([\d.]+)/);
        if (s) {
            return { browser: 'qq', version: s[2] };
        }
        s = ua.match(/(UCBrowser)\/([\d.]+)/);
        if (s) {
            return { browser: 'uc', version: s[2] };
        }
        s = ua.match(/(360SE)/);
        if (s) {
            return { browser: '360', version: '0' };
        }
        s = ua.match(/(360EE)/);
        if (s) {
            return { browser: '360', version: '0' };
        }
        s = ua.match(/(Maxthon)/);
        if (s) {
            return { browser: 'maxthon', version: '0' };
        }
        s = ua.match(/(TaoBrowser)/);
        if (s) {
            return { browser: 'taobao', version: '0' };
        }
        s = ua.match(/(TheWorld)/);
        if (s) {
            return { browser: 'theworld', version: '0' };
        }
        s = ua.match(/(SE)\s([\d.]+)/);
        if (s) {
            return { browser: 'sogou', version: s[2] };
        }
        s = ua.match(/(LBBROWSER)/);
        if (s) {
            return { browser: 'liebao', version: '0' };
        }
        s = ua.match(/(Chrome)\/([\d.]+)/);
        if (s) {
            return { browser: 'chrome', version: s[2] };
        }
        s = ua.match(/(Firefox)\/([\d.]+)/);
        if (s) {
            return { browser: 'firefox', version: s[2] };
        }
        s = ua.match(/(Opera).+Version\/([\d.]+)/);
        if (s) {
            return { browser: 'opera', version: s[2] };
        }
        s = ua.match(/(Safari)\/([\d.]+)/);
        if (s) {
            return { browser: 'safari', version: s[2] };
        }
        s = ua.match(/(Trident)\/([\d.]+)/);
        if (s) {
            return { browser: 'ie', version: s[2] };
        }
        return { browser: 'other', version: '0' };
    })();
    //检查设备类型
    var device = (function () {
        var s = ua.match(/(iPad).*OS\s([\d_]+)/);
        if (s) {
            return { device: 'tablet' };
        }
        s = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        if (s) {
            return { device: 'mobile' };
        }
        s = ua.match(/(iPhone\sOS)\s([\d_]+)/);
        if (s) {
            return { device: 'mobile' };
        }
        s = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        if (s) {
            return { device: 'mobile' };
        }
        s = ua.match(/(Windows\sPhone)\sOS\s([\d.]+)/);
        if (s) {
            return { device: 'mobile' };
        }
        s = ua.match(/(Windows\sNT)\s([\d.]+)/);
        if (s) {
            return { device: 'pc' };
        }
        s = ua.match(/(Macintosh);.*Mac\sOS\sX\s([\d_]+)/);
        if (s) {
            return { device: 'pc' };
        }
        s = ua.match(/(Linux)\s?([\d.]+)?/);
        if (s) {
            return { device: 'pc' };
        }
        return { device: 'other' };
    })();
    //根据输入的参数types（默认为['os', 'browser', 'device']，也可能会被用户按需调整），按需返回对应的值（比如说{os: 'ios', browser: 'wechat', device: 'mobile'}，或者用户只需要os和device，那么就返回{os: 'ios', device: 'mobile'}，有一种特殊情况，如果用户只需要os或者其他的一个值，恰好return_string = true，那么就直接返回对应的值，比如说只需要os，那么就返回'ios'）
    var result = {};
    result = types.reduce(function (result, type) {
        if (type === 'os') {
            result.os = os.os;
        }
        else if (type === 'browser') {
            result.browser = browser.browser;
        }
        else if (type === 'device') {
            result.device = device.device;
        }
        return result;
    }, {});
    if (return_string) {
        if (types.length === 1) {
            return result[types[0]];
        }
    }
    return result;
}

//将importObject中的值更新到object中，如果importObject中的值为空，则不更新
function updateObjectFromImport(importObject, object) {
    for (var key in object) {
        if (importObject.hasOwnProperty(key)) {
            if (typeof object[key] === 'object' && typeof importObject[key] === 'object') {
                updateObjectFromImport(importObject[key], object[key]);
            }
            else {
                //再根据是否为空来判断是否要更新
                if (checkNotNull(importObject[key])) {
                    object[key] = importObject[key];
                }
            }
        }
    }
}

//去除数组中重复的对象，将length大的数组保留，length小的数组去掉
function filterUniqueByProperty(array, prop) {
    return array.filter(function (item, index, self) {
        // 使用 findIndex 方法找到当前元素后面是否还有相同属性值的元素
        var foundIndex = self.slice(index + 1).findIndex(function (other) { return other[prop] === item[prop]; });
        // 如果后面没有相同属性值的元素，则保留当前元素
        // 否则去掉当前元素
        return foundIndex === -1;
    });
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

//通知权限相关
var notificationPermission = {
    //判断是否有通知权限
    check: function () {
        //判断浏览器是否支持Notification
        if (!('Notification' in window)) {
            return false;
        }
        else {
            if (Notification.permission === 'granted') {
                return true;
            }
            else if (Notification.permission === 'denied') {
                return false;
            }
            else {
                return null;
            }
        }
    },
    //请求通知权限
    request: function () { return __awaiter(void 0, void 0, void 0, function () {
        var check, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    check = notificationPermission.check();
                    if (!(check == null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Notification.requestPermission()];
                case 1:
                    info = _a.sent();
                    if (info === 'granted') {
                        return [2 /*return*/, true];
                    }
                    else {
                        return [2 /*return*/, false];
                    }
                case 2: return [2 /*return*/, check];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
//剪切板权限相关
var clipboardPermission = {
    //判断是否有剪切板权限
    check: function () { return __awaiter(void 0, void 0, void 0, function () {
        var info;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!!('Clipboard' in window)) return [3 /*break*/, 1];
                    return [2 /*return*/, false];
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.permissions.query({ name: 'clipboard-read' })];
                case 2:
                    info = _b.sent();
                    if (info.state === 'granted') {
                        return [2 /*return*/, true];
                    }
                    else if (info.state === 'prompt') {
                        return [2 /*return*/, null];
                    }
                    else {
                        return [2 /*return*/, false];
                    }
                case 3:
                    _b.sent();
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    //请求剪切板权限
    request: function () { return __awaiter(void 0, void 0, void 0, function () {
        var check;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, clipboardPermission.check()];
                case 1:
                    check = _b.sent();
                    if (!(check == null)) return [3 /*break*/, 7];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, navigator.clipboard.readText()];
                case 3:
                    _b.sent();
                    return [2 /*return*/, true];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, clipboardPermission.check()];
                case 5:
                    check = _b.sent();
                    if (check == true) {
                        return [2 /*return*/, true];
                    }
                    else {
                        return [2 /*return*/, false];
                    }
                case 6: return [3 /*break*/, 8];
                case 7: return [2 /*return*/, check];
                case 8: return [2 /*return*/];
            }
        });
    }); }
};

//导出自己的名字
var info = {
    name: 'galanga',
    author: 'censujiang',
};

exports.checkDeviceType = checkDeviceType;
exports.checkEmail = checkEmail;
exports.checkNotNull = checkNotNull;
exports.checkNull = checkNull;
exports.checkPassword = checkPassword;
exports.clipboardPermission = clipboardPermission;
exports.filterUniqueByProperty = filterUniqueByProperty;
exports.formatBytes = formatBytes;
exports.info = info;
exports.localCookie = localCookie;
exports.notificationPermission = notificationPermission;
exports.strLength = strLength;
exports.updateObjectFromImport = updateObjectFromImport;
exports.url = url;
