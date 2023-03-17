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

//自动转换字节的单位，会有三个参数输入到此函数，分别是字节数，保留小数位数（默认为1），输入的单位（默认为B）
export function formatBytes(bytes: number, decimals = 1, unit = 'B') {
  if (bytes === 0) return '0 B';  //如果字节数为0，则返回0 B
  const k = 1024;  //定义1024
  const dm = decimals < 0 ? 0 : decimals;  //定义小数位数
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];  //定义单位数组
  const i = Math.floor(Math.log(bytes) / Math.log(k));  //获取当前字节数对应的单位数组下标
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];  //返回转换后的字节数
}