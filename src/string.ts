// 检查输入的值是否为空
export function checkNull(val: any) {
  if (val == null || val == undefined || val == '') {
    return true;
  } else if (Array.isArray(val) && val.length === 0) {
    return true;
  } else {
    return false;
  }
}

//获取字符串的字节数
export function strLength(str: string) {
  let count = 0;  //初始化字节数递加变量并获取字符串参数的字符个数
  if (str) {  //如果存在字符串，则执行
    const len = str.length;
    for (let i = 0; i < len; i++) {  //遍历字符串，枚举每个字符
      if (str.charCodeAt(i) > 255) {  //字符编码大于255，说明是双字节字符(即是中文)
        count += 2;  //则累加2个
      } else {
        count++;  //否则递加一次
      }
    }
    return count;  //返回字节数
  } else {
    return 0;  //如果参数为空，则返回0个
  }
}

//自动转换字节的单位，会有两个参数输入到此函数，分别是数量，和一个json对象，对象中有三个属性，分别是保留的小数位数（默认为1），输入的字节是哪种单位（默认为B），输出的字节是哪种单位（默认为auto）
//需要根据输入的字节单位和数量，计算出输出的字节数：如果设置了输出的字节单位是auto，则需要根据字节数自动计算出输出的字节单位并输出字节数。如果在设置了输出的字节单位为具体的某个单位，则根据输入的字节单位和数量，计算出输出的字节数。
export function formatBytes(bytes: number, {
  decimals = 1,
  from = 'B',
  to = 'auto'
} = {}) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = from === 'B' ? Math.floor(Math.log(bytes) / Math.log(k)) : sizes.indexOf(from);
  if (to === 'auto') {
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  } else {
    return parseFloat((bytes / Math.pow(k, sizes.indexOf(to))).toFixed(dm)) + ' ' + to;
  }
}