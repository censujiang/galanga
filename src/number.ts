export function formatNumber(value: number) {
  return (Math.floor(value * 100) / 100).toString();
}