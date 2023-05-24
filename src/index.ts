import packageJson from '../package.json' assert { type: "json" };

//导出自己的名字
export const info = {
  name: 'galanga',
  author: 'censujiang',
  version: packageJson.version,
}

//引入并导出所有子模块
export { localCookie } from './cookie';
export { url } from './url';
export { checkNull, checkNotNull, strLength, formatBytes, checkPassword, checkEmail } from './string';
export { checkDeviceType } from './device';
export { updateObjectFromImport } from './object';
export { filterUniqueByProperty } from './array';
export { notificationPermission, clipboardPermission } from './permission';
export { formatNumber } from './number';