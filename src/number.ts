export function formatNumber(value: number, decimal: number = 2): string {
  const decimalValue = Math.pow(10, decimal);
  return (Math.floor(value * decimalValue) / decimalValue).toString();
}

//计算百分比
//输入三个参数，分别是分子，分母，保留的小数位数（默认为1）
//返回百分比字符串，例如：'50.0%'
//保留小数位数由formatNumber函数计算得到
export function formatPercent(numerator: number = 0, denominator: number = 100, decimal: number = 1): string {
  return formatNumber(numerator / denominator * 100, decimal) + '%';
}