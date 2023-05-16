"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmail = exports.checkPassword = exports.formatBytes = exports.strLength = exports.checkNotNull = exports.checkNull = void 0;
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
exports.checkNull = checkNull;
// 检查输入的值是否非空
function checkNotNull(val) {
    return !checkNull(val);
}
exports.checkNotNull = checkNotNull;
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
exports.strLength = strLength;
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
exports.formatBytes = formatBytes;
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
exports.checkPassword = checkPassword;
//检查是否为Email的函数，会有一个参数输入到此函数，分别是Email
function checkEmail(email) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(email);
}
exports.checkEmail = checkEmail;