//import * as packageJson from '../package.json'

//导出自己的名字
export const info = {
  name: 'galanga',
  author: 'censujiang',
  //version: packageJson.version,
  type: 'main',
}

//引入并导出所有子模块
export { localCookie } from './cookie';
export { url } from './url';
export { checkNull, checkNotNull, strLength, formatBytes, checkPassword, checkEmail } from './string';
export { checkDeviceType, clipboard } from './device';
export { updateObjectFromImport, shakeObject } from './object';
export { filterUniqueByProperty } from './array';
export { notificationPermission, clipboardPermission, locationPermission } from './permission';
export { formatNumber } from './number';