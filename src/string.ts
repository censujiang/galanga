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

//自动转换字节的单位
export function formatBytes(bytes: number) {
  if (bytes === 0) return '0 B';

  const k: number = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(1));
  const unit = sizes[i];

  return `${size} ${unit}`;
}
