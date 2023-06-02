//操作cookie的方法
export const localCookie = {
  getItem: (sKey: string): string | null => {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
  },
  setItem: (sKey: string, sValue: string, sPath: string = '/', sDomain: string = window.location.hostname, vEnd?: number | string | Date, bSecure?: boolean): boolean => {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    let sExpires = '';
    if (vEnd) {
      if (typeof vEnd === 'number') {
        const dExpires = new Date();
        dExpires.setTime(dExpires.getTime() + (vEnd * 24 * 60 * 60 * 1000));
        sExpires = '; expires=' + dExpires.toUTCString();
      } else if (typeof vEnd === 'string') {
        sExpires = '; expires=' + vEnd;
      } else if (vEnd instanceof Date) {
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
  removeItem: (sKey: string, sPath: string = '/', sDomain: string = window.location.hostname): boolean => {
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
  hasItem: function (sKey: string): boolean {
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function (): string[] {
    const aKeys = document.cookie.replace(/((?:^|\s*;)[^]+)(?=;|$)|^\s*|\s*(?:[^;]*)?(?:|$)/g, '').split(/\s*(?:[^;]*)?;\s*/);
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  },
  clear: function () {
    const keys = this.keys();
    for (let i = 0; i < keys.length; i++) {
      this.removeItem(keys[i]);
    }
  }
};