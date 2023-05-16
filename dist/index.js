/*!
 * galanga 0.1.3 (https://github.com/censujiang/galanga)
 * API https://censujiang.galanga.com/api/
 * Copyright 2014-2023 censujiang. All Rights Reserved
 * Licensed under Apache License 2.0 (https://github.com/censujiang/galanga/blob/master/LICENSE)
 */

'use strict';

//操作cookie的方法
const localCookie = {
    getItem: function (sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
            return;
        }
        let sExpires = '';
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
        document.cookie =
            encodeURIComponent(sKey) +
                '=' +
                encodeURIComponent(sValue) +
                sExpires +
                (sDomain ? '; domain=' + sDomain : '') +
                (sPath ? '; path=' + sPath : '') +
                (bSecure ? '; secure' : '');
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
        const aKeys = document.cookie.replace(/((?:^|\s*;)[^]+)(?=;|$)|^\s*|\s*(?:[^;]*)?(?:|$)/g, '').split(/\s*(?:[^;]*)?;\s*/);
        for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    },
    clear: function () {
        const keys = this.keys();
        for (let i = 0; i < keys.length; i++) {
            this.removeItem(keys[i]);
        }
    }
};

const url = {
    getQuery(name) {
        const result = window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getHash(name) {
        const result = window.location.hash.match(new RegExp('[#&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getPath() {
        return window.location.pathname;
    },
};

// 检查输入的值是否为空
function checkNull(val) {
    if (val === null || val === undefined || val === '' || typeof val === 'number' && isNaN(val)) {
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
    let count = 0; //初始化字节数递加变量并获取字符串参数的字符个数
    if (str) { //如果存在字符串，则执行
        const len = str.length;
        for (let i = 0; i < len; i++) { //遍历字符串，枚举每个字符
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
function formatBytes(bytes, { decimals = 1, from = 'B', to = 'auto' } = {}) {
    //如果输入的bytes为负数的处理
    if (bytes < 0) {
        return '-' + formatBytes(-bytes, {
            decimals,
            from,
            to
        });
    }
    else if (bytes === 0) {
        return '0 B';
    }
    else {
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = from === 'auto' ? Math.floor(Math.log(bytes) / Math.log(k)) : sizes.indexOf(from);
        bytes = bytes / Math.pow(k, i);
        if (to === 'auto') {
            const j = Math.floor(Math.log(bytes) / Math.log(k));
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
function checkPassword(password, { minLength = 8, maxLength = 16, 
//字符类型：数字、小写字母、大写字母、特殊字符
types = ['number', 'lowercase', 'uppercase', 'special'], minTypes = 2, maxTypes = 4 } = {}) {
    //判断密码的长度是否符合要求
    if (password.length < minLength || password.length > maxLength) {
        return false;
    }
    //判断密码中是否包含了所有的字符类型
    let typesCount = 0;
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
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(email);
}

function checkDeviceType(types = ['os', 'browser', 'device'], return_string = false) {
    const ua = navigator.userAgent;
    function getOS() {
        const osRegex = /(HarmonyOS)\/([\d.]+)|(Android);?[\s\/]+([\d.]+)?|(iPad).*OS\s([\d_]+)|(iPod)(.*OS\s([\d_]+))?|(iPhone\sOS)\s([\d_]+)|(Windows\sPhone)\sOS\s([\d.]+)|(Macintosh);.*Mac\sOS\sX\s([\d_]+)|(Windows\sNT)\s([\d.]+)|(Linux)\s?([\d.]+)?/;
        const matches = ua.match(osRegex);
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
        const browserRegex = /(MicroMessenger)\/([\d.]+)|(QQ)\/([\d.]+)|(UCBrowser)\/([\d.]+)|(360SE)|(360EE)|(Maxthon)|(TaoBrowser)|(TheWorld)|(SE)\s([\d.]+)|(LBBROWSER)|(Chrome)\/([\d.]+)|(Firefox)\/([\d.]+)|(Opera).+Version\/([\d.]+)|(Safari)\/([\d.]+)|(Trident)\/([\d.]+)/;
        const matches = ua.match(browserRegex);
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
        const deviceRegex = /(iPad).*OS\s([\d_]+)|(iPod)(.*OS\s([\d_]+))?|(iPhone\sOS)\s([\d_]+)|(Android);?[\s\/]+([\d.]+)?|(Windows\sPhone)\sOS\s([\d.]+)|(Windows\sNT)\s([\d.]+)|(Macintosh);.*Mac\sOS\sX\s([\d_]+)|(Linux)\s?([\d.]+)?/;
        const matches = ua.match(deviceRegex);
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
    const result = {
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

//将importObject中的值更新到object中，如果importObject中的值为空，则不更新
function updateObjectFromImport(importObject, object) {
    for (let key in object) {
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
    return object;
}

// 去除数组中重复的对象，将 length 大的数组保留，length 小的数组去掉
function filterUniqueByProperty(array, prop) {
    return array.filter((item, index, self) => {
        const foundIndex = self.slice(index + 1).findIndex((other) => other[prop] === item[prop]);
        return foundIndex === -1;
    });
}

//通知权限相关
const notificationPermission = {
    //判断是否有通知权限
    check: () => {
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
    request: async () => {
        let check = notificationPermission.check();
        if (check == null) {
            const info = await Notification.requestPermission();
            if (info === 'granted') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return check;
        }
    }
};
// 剪切板权限相关
const clipboardPermission = {
    // 判断是否有剪切板权限
    check: async () => {
        // 判断浏览器是否支持Clipboard
        if (!('Clipboard' in window)) {
            return false;
        }
        else {
            // 尝试读取剪切板内容
            try {
                const info = await navigator.permissions.query({ name: 'clipboard-read' });
                if (info.state === 'granted') {
                    return true;
                }
                else if (info.state === 'prompt') {
                    return null;
                }
                else {
                    return false;
                }
            }
            catch {
                return false;
            }
        }
    },
    // 请求剪切板权限
    request: async () => {
        let check = await clipboardPermission.check();
        if (check === null) {
            try {
                await navigator.clipboard.readText();
                return true;
            }
            catch {
                check = await clipboardPermission.check();
                return check === true;
            }
        }
        else {
            return check === true;
        }
    }
};

function formatNumber(value) {
    return (Math.floor(value * 100) / 100).toString();
}

//导出自己的名字
const info = {
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
exports.formatNumber = formatNumber;
exports.info = info;
exports.localCookie = localCookie;
exports.notificationPermission = notificationPermission;
exports.strLength = strLength;
exports.updateObjectFromImport = updateObjectFromImport;
exports.url = url;
