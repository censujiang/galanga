export function formatNumber(value: number): string {
  return (Math.floor(value * 100) / 100).toString();
}