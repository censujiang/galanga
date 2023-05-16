"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDeviceType = void 0;
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