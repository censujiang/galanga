/*!
 * galanga 0.2.3 (https://github.com/censujiang/galanga)
 * API https://galanga.censujiang.com/api/
 * Copyright 2014-2023 censujiang. All Rights Reserved
 * Licensed under Apache License 2.0 (https://github.com/censujiang/galanga/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.galanga = {}));
})(this, (function (exports) { 'use strict';

  //操作cookie的方法
  const localCookie = {
      getItem: (sKey) => {
          return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
      },
      setItem: (sKey, sValue, sPath = '/', sDomain = window.location.hostname, vEnd, bSecure) => {
          if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
              return false;
          }
          let sExpires = '';
          if (vEnd) {
              if (typeof vEnd === 'number') {
                  const dExpires = new Date();
                  dExpires.setTime(dExpires.getTime() + (vEnd * 24 * 60 * 60 * 1000));
                  sExpires = '; expires=' + dExpires.toUTCString();
              }
              else if (typeof vEnd === 'string') {
                  sExpires = '; expires=' + vEnd;
              }
              else if (vEnd instanceof Date) {
                  sExpires = '; expires=' + vEnd.toUTCString();
              }
          }
          document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) +
              sExpires +
              (sDomain ? '; domain=' + sDomain : '') +
              (sPath ? '; path=' + sPath : '') +
              (bSecure ? '; secure' : '');
          return true;
      },
      removeItem: (sKey, sPath = '/', sDomain = window.location.hostname) => {
          if (!sKey || !localCookie.hasItem(sKey)) {
              return false;
          }
          document.cookie = encodeURIComponent(sKey) +
              '=; expires=Thu, 01 Jan 1970 00:00:00 UTC' +
              (sDomain ? '; domain=' + sDomain : '') +
              (sPath ? '; path=' + sPath : '') +
              '; secure';
          return true;
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

  const chars62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
  //一个62进制的加密函数，将十进制数字转换为62进制字符串
  function encode62(num) {
      let radix = chars62.length;
      let arr = []; // specify the type of arr as string[]
      do {
          let mod = num % radix;
          num = (num - mod) / radix;
          arr.unshift(chars62[mod]);
      } while (num);
      return arr.join('');
  }
  //一个62进制的解密函数，将62进制字符串转换为十进制数字
  function decode62(str) {
      if (typeof str == 'number') {
          str = str.toString();
      }
      let radix = chars62.length;
      let len = str.length;
      let i = 0;
      let origin = 0;
      while (i < len) {
          origin += Math.pow(radix, i++) * chars62.indexOf(str.charAt(len - i) || '0');
      }
      return Number(origin);
  }
  //从一个URL字符串中获取文件名
  function getFileNameFromURL(url) {
      let arr = url.split('/');
      return arr[arr.length - 1];
  }
  //从一个字符串中获取文件后缀格式
  function getFileExtFromString(str) {
      let arr = str.split('.');
      return arr[arr.length - 1];
  }
  //拼接一个站点的标题，会有一个json对象作为参数输入到此函数，对象中有四个属性，分别是标题（默认为none），站点名称（默认为Galanga），分隔符（默认为-），是否反转（默认为false）
  function spliceSiteTitle({ title = 'none', siteName = 'Galanga', separator = '-', reverse = false } = {}) {
      separator = ' ' + separator + ' ';
      if (reverse) {
          return siteName + separator + title;
      }
      else {
          return title + separator + siteName;
      }
  }

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
      getPath(isFullPath = false) {
          let path;
          if (isFullPath) {
              //获取完整路径，包括参数、hash、路径
              path = window.location.href;
              const origin = window.location.origin;
              path = path.replace(origin, '');
          }
          else {
              //获取路径，不包括参数、hash
              path = window.location.pathname;
          }
          return path;
      },
      setPath(path) {
          try {
              //动态设置路由，不能使用location.href，否则会刷新页面
              window.history.pushState({}, '', path);
              return true;
          }
          catch (e) {
              console.log(e);
              return false;
          }
      },
      setHash(hash) {
          try {
              window.location.hash = hash;
              return true;
          }
          catch (e) {
              console.log(e);
              return false;
          }
      },
      setQuery(name, value) {
          try {
              //首先获取当前url参数
              const params = new URLSearchParams(window.location.search);
              //设置新的参数
              params.set(name, value);
              //重新设置url参数
              window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
              return true;
          }
          catch (e) {
              console.log(e);
              return false;
          }
      },
  };
  //获取上一页的url
  function getPreURL() {
      const back = window.history.state.back;
      if (checkNotNull(back)) {
          return back;
      }
      else {
          return document.referrer;
      }
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
                  const permissionName = "clipboard-write";
                  const info = await navigator.permissions.query({ name: permissionName });
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
  //位置权限相关
  const locationPermission = {
      //判断是否有位置权限
      check: async () => {
          //判断浏览器是否支持Geolocation
          if (!('geolocation' in navigator)) {
              return false;
          }
          else {
              //尝试获取位置信息
              try {
                  const permissionName = "geolocation";
                  const info = await navigator.permissions.query({ name: permissionName });
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
      //请求位置权限
      request: async () => {
          let check = await locationPermission.check();
          if (check === null) {
              try {
                  await navigator.geolocation.getCurrentPosition(() => { });
                  return true;
              }
              catch {
                  check = await locationPermission.check();
                  return check === true;
              }
          }
          else {
              return check === true;
          }
      }
  };

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
  //根据输入的数组，将原有的object中的数组摇树，生成新的object
  //例如有一个object为{a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10},数组为['a','b','c','d']，则返回的object为{a:1,b:2,c:3,d:4}
  function shakeObject(object, array) {
      let result = {};
      array.forEach(key => {
          if (object.hasOwnProperty(key)) {
              result[key] = object[key];
          }
      });
      return result;
  }

  const clipboard = {
      read: async (onlyString = true) => {
          if (await clipboardPermission.request() == true) {
              if (onlyString) {
                  const text = await navigator.clipboard.readText();
                  return text;
              }
              else {
                  const result = await navigator.clipboard.read();
                  return result;
              }
          }
          else {
              return null;
          }
      },
      write: async (value) => {
          if (await clipboardPermission.request() == true) {
              try {
                  if (typeof value === 'string') {
                      await navigator.clipboard.writeText(value);
                  }
                  else {
                      await navigator.clipboard.write(value);
                  }
                  return true;
              }
              catch (error) {
                  console.error(error);
                  return false;
              }
          }
          else {
              return false;
          }
      }
  };
  function checkDeviceType(types = ['os', 'browser', 'device', 'platform']) {
      const ua = navigator.userAgent;
      function getOS() {
          if (/Windows/i.test(ua)) {
              return 'windows';
          }
          else if (/Macintosh/i.test(ua)) {
              return 'mac';
          }
          else if (/Linux/i.test(ua)) {
              return 'linux';
          }
          else if (/HarmonyOS/i.test(ua)) {
              return 'harmonyos';
          }
          else if (/Android/i.test(ua)) {
              return 'android';
          }
          else if (/iPhone/i.test(ua) || /iPod/i.test(ua) || /iPad/i.test(ua)) {
              return 'ios';
          }
          return 'other';
      }
      function getBrowser() {
          if (/MicroMessenger/i.test(ua)) {
              return 'wechat';
          }
          else if (/QQ/i.test(ua)) {
              return 'qq';
          }
          else if (/Alipay/i.test(ua)) {
              return 'alipay';
          }
          else if (/Weibo/i.test(ua)) {
              return 'weibo';
          }
          else if (/DingTalk/i.test(ua)) {
              return 'dingtalk';
          }
          else if (/Taobao/i.test(ua)) {
              return 'taobao';
          }
          else if (/Tmall/i.test(ua)) {
              return 'tmall';
          }
          else if (/Edge/i.test(ua)) {
              return 'edge';
          }
          else if (/Opera/i.test(ua)) {
              return 'opera';
          }
          else if (/360SE/i.test(ua)) {
              return '360';
          }
          else if (/UCBrowser/i.test(ua)) {
              return 'uc';
          }
          else if (/Baidu/i.test(ua)) {
              return 'baidu';
          }
          else if (/Chrome/i.test(ua)) {
              return 'chrome';
          }
          else if (/Safari/i.test(ua)) {
              return 'safari';
          }
          else if (/Firefox/i.test(ua)) {
              return 'firefox';
          }
          else if (/MSIE/i.test(ua)) {
              return 'ie';
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
      const platform = 'web';
      let isString = false;
      let originTypes;
      if (typeof types === 'string') {
          isString = true;
          types = [types];
          originTypes = types[0];
      }
      //定义一个result对象，用于存储检测结果
      //通过检查types数组，来确定需要获取的信息，不需要的信息不获取也不存储空置（直接跳过）
      const result = {
          os: types.includes('os') ? getOS() : '',
          browser: types.includes('browser') ? getBrowser() : '',
          device: types.includes('device') ? getDevice() : '',
          platform: types.includes('platform') ? platform : '',
      };
      if (isString === true) {
          return result[originTypes];
      }
      else {
          return shakeObject(result, types);
      }
  }
  function share({ content = 'none', title = 'galanga', url = '', type = 'none', //仅为兼容其他平台，无实际作用
  files = [], } = {}) {
      const text = title + ' ' + content + '\n' + url;
      if (!navigator.share) {
          clipboardShare();
      }
      else {
          navigatorShare();
      }
      function navigatorShare() {
          if (!navigator.canShare) {
              files = [];
          }
          else {
              if (!navigator.canShare({ files })) {
                  files = [];
              }
          }
          navigator.share({
              title: title,
              text: content,
              url: url,
              files: files,
          }).catch((error) => {
              console.warn('Not support navigator share', error);
              clipboardShare();
          });
      }
      async function clipboardShare() {
          clipboardPermission.request();
          const r = await clipboard.write(text);
          if (r == true) {
              alert("已将分享内容复制到剪切板。");
          }
          else {
              promptShare();
          }
      }
      function promptShare() {
          prompt("请您复制以下内容并手动分享。", text);
      }
  }

  // 去除数组中重复的对象，将 length 大的数组保留，length 小的数组去掉
  function filterUniqueByProperty(array, prop) {
      return array.filter((item, index, self) => {
          const foundIndex = self.slice(index + 1).findIndex((other) => other[prop] === item[prop]);
          return foundIndex === -1;
      });
  }

  function formatNumber(value, decimal = 2) {
      const decimalValue = Math.pow(10, decimal);
      return (Math.floor(value * decimalValue) / decimalValue).toString();
  }
  //计算百分比
  //输入三个参数，分别是分子，分母，保留的小数位数（默认为1）
  //返回百分比字符串，例如：'50.0%'
  //保留小数位数由formatNumber函数计算得到
  function formatPercent(numerator = 0, denominator = 100, decimal = 1) {
      return formatNumber(numerator / denominator * 100, decimal) + '%';
  }

  //返回离现在多少时间后的时间
  //输入参数为毫秒数或者Date类型的东西，返回值为Date类型
  function afterTime(time, backType = 'Date') {
      let result;
      if (typeof time === 'number') {
          result = new Date(Date.now() + time);
      }
      else if (typeof time === 'string') {
          result = new Date(Date.now() + Number(time));
      }
      else if (time instanceof Date) {
          result = new Date(Date.now() + time.getTime());
      }
      else {
          throw new Error('输入参数类型错误');
      }
      if (backType.toLowerCase() === 'date') {
          return result;
      }
      else if (backType.toLowerCase() === 'number') {
          return result.getTime();
      }
      else if (backType.toLowerCase() === 'string') {
          return result.toISOString();
      }
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  //import * as packageJson from '../package.json'
  //导出自己的名字
  const info = {
      name: 'galanga',
      author: 'censujiang',
      //version: packageJson.version,
      type: 'main',
  };

  exports.afterTime = afterTime;
  exports.checkDeviceType = checkDeviceType;
  exports.checkEmail = checkEmail;
  exports.checkNotNull = checkNotNull;
  exports.checkNull = checkNull;
  exports.checkPassword = checkPassword;
  exports.clipboard = clipboard;
  exports.clipboardPermission = clipboardPermission;
  exports.decode62 = decode62;
  exports.encode62 = encode62;
  exports.filterUniqueByProperty = filterUniqueByProperty;
  exports.formatBytes = formatBytes;
  exports.formatNumber = formatNumber;
  exports.formatPercent = formatPercent;
  exports.getFileExtFromString = getFileExtFromString;
  exports.getFileNameFromURL = getFileNameFromURL;
  exports.getPreURL = getPreURL;
  exports.info = info;
  exports.localCookie = localCookie;
  exports.locationPermission = locationPermission;
  exports.notificationPermission = notificationPermission;
  exports.shakeObject = shakeObject;
  exports.share = share;
  exports.sleep = sleep;
  exports.spliceSiteTitle = spliceSiteTitle;
  exports.strLength = strLength;
  exports.updateObjectFromImport = updateObjectFromImport;
  exports.url = url;

}));
