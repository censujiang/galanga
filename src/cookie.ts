import Cookies from 'js-cookie';

//操作cookie的方法
export const localCookie = {
  getItem: Cookies.get,
  setItem: Cookies.set,
  removeItem: Cookies.remove,
  keys() {
    const aKeys = document.cookie.replace(/((?:^|\s*;)[^]+)(?=;|$)|^\s*|\s*(?:[^;]*)?(?:|$)/g, '').split(/\s*(?:[^;]*)?;\s*/);
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  },
  clear() {
    const keys = this.keys();
    for (let i = 0; i < keys.length; i++) {
      this.removeItem(keys[i]);
    }
  }
};