//import * as packageJson from '../package.json'
//导出自己的名字
export const info = {
    name: 'galanga',
    author: 'censujiang',
    //version: packageJson.version,
    type: 'main',
};
//引入并导出所有子模块
export { localCookie } from './cookie';
export { url, getPreURL } from './url';
export { checkNull, checkNotNull, strLength, formatBytes, checkPassword, checkEmail, encode62, decode62, getFileNameFromURL, getFileExtFromString, spliceSiteTitle } from './string';
export { checkDeviceType, clipboard, share } from './device';
export { updateObjectFromImport, shakeObject } from './object';
export { filterUniqueByProperty, arrayFilterUniqueItem } from './array';
export { notificationPermission, clipboardPermission, locationPermission } from './permission';
export { formatNumber, formatPercent } from './number';
export { afterTime } from './date';
export { sleep } from './other';
