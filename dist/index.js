/*!
 * galanga 0.0.18 (https://github.com/censujiang/galanga)
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
    if (val == null || val == undefined || val == '') {
        return true;
    }
    else if (Array.isArray(val) && val.length === 0) {
        return true;
    }
    else {
        return false;
    }
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
//自动转换字节的单位，会有两个参数输入到此函数，分别是数量，和一个json对象，对象中有三个属性，分别是保留的小数位数（默认为1），输入的字节是哪种单位（默认为B），输出的字节是哪种单位（默认为auto）
//需要根据输入的字节单位和数量，计算出输出的字节数：如果设置了输出的字节单位是auto，则需要根据字节数自动计算出输出的字节单位并输出字节数。如果在设置了输出的字节单位为具体的某个单位，则根据输入的字节单位和数量，计算出输出的字节数。
function formatBytes(bytes, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.decimals, decimals = _c === void 0 ? 1 : _c, _d = _b.from, from = _d === void 0 ? 'B' : _d, _e = _b.to, to = _e === void 0 ? 'auto' : _e;
    if (bytes === 0)
        return '0 Bytes';
    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = from === 'B' ? Math.floor(Math.log(bytes) / Math.log(k)) : sizes.indexOf(from);
    if (to === 'auto') {
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    else {
        return parseFloat((bytes / Math.pow(k, sizes.indexOf(to))).toFixed(dm)) + ' ' + to;
    }
}

//导出自己的名字
var name = 'galanga';

exports.checkNull = checkNull;
exports.formatBytes = formatBytes;
exports.localCookie = localCookie;
exports.name = name;
exports.strLength = strLength;
exports.url = url;
