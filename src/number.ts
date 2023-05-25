export function formatNumber(value: number, decimal: number = 2): string {
  const decimalValue = Math.pow(10, decimal);
  return (Math.floor(value * decimalValue) / decimalValue).toString();
}