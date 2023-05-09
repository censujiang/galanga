//导出自己的名字
export const name = 'galanga';

//引入并导出所有子模块
export { localCookie } from './cookie';
export { url } from './url';
export { checkNull, checkNotNull, strLength, formatBytes, checkPassword, checkEmail } from './string';
export { checkDeviceType } from './device';
export { updateObjectFromImport } from './object';