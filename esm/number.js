export function formatNumber(value, decimal = 2) {
    const decimalValue = Math.pow(10, decimal);
    return (Math.floor(value * decimalValue) / decimalValue).toString();
}
//计算百分比
//输入三个参数，分别是分子，分母，保留的小数位数（默认为1）
//返回百分比字符串，例如：'50.0%'
//保留小数位数由formatNumber函数计算得到
export function formatPercent(numerator = 0, denominator = 100, decimal = 1) {
    return formatNumber(numerator / denominator * 100, decimal) + '%';
}
