/*!
 * galanga 0.0.25 (https://github.com/censujiang/galanga)
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

//导出自己的名字
var name = 'galanga';

exports.checkDeviceType = checkDeviceType;
exports.checkEmail = checkEmail;
exports.checkNotNull = checkNotNull;
exports.checkNull = checkNull;
exports.checkPassword = checkPassword;
exports.formatBytes = formatBytes;
exports.localCookie = localCookie;
exports.name = name;
exports.strLength = strLength;
exports.url = url;
