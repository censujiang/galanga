/*!
 * galanga 0.0.1 (https://github.com/censujiang/galanga)
 * API https://github.com/censujiang/galanga/blob/master/doc/api.md
 * Copyright 2017-2023 censujiang. All Rights Reserved
 * Licensed under MIT (https://github.com/censujiang/galanga/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.galanga = {})));
}(this, (function (exports) { 'use strict';

  //操作cookie的方法
  var localCookie = {
      getItem: function (sKey) {
          return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
      },
      setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
          if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
              return false;
          }
          var sExpires = "";
          if (vEnd) {
              switch (vEnd.constructor) {
                  case Number:
                      sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                      break;
                  case String:
                      sExpires = "; expires=" + vEnd;
                      break;
                  case Date:
                      sExpires = "; expires=" + vEnd.toUTCString();
                      break;
              }
          }
          document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      },
      removeItem: function (sKey, sPath, sDomain) {
          if (!sKey || !this.hasItem(sKey)) {
              return false;
          }
          document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
      },
      hasItem: function (sKey) {
          return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
      },
      keys: /* optional method: you can safely remove it! */ function () {
          var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
          for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
              aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
          }
          return aKeys;
      }
  };

  //获取具体的url查询参数的值
  function getQueryString(name) {
      var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
      if (result == null || result.length < 1) {
          return "";
      }
      return result[1];
  }

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

  //引入子模块
  //导出自己的名字
  var name = 'galanga';

  exports.name = name;
  exports.localCookie = localCookie;
  exports.getQueryString = getQueryString;
  exports.checkNull = checkNull;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
