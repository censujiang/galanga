//返回离现在多少时间后的时间
//输入参数为毫秒数或者Date类型的东西，返回值为Date类型
export function afterTime(time: number | String | Date, backType = 'Date'): Date | number | string {
  let result: Date | number | string;
  if (typeof time === 'number') {
    result = new Date(Date.now() + time);
  } else if (typeof time === 'string') {
    result = new Date(Date.now() + Number(time));
  } else if (time instanceof Date) {
    result = new Date(Date.now() + time.getTime());
  } else {
    throw new Error('输入参数类型错误');
  }
  if (backType.toLowerCase() === 'date') {
    return result as Date;
  } else if (backType.toLowerCase() === 'number') {
    return result.getTime();
  } else if (backType.toLowerCase() === 'string') {
    return result.toISOString();
  }
}