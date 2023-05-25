export function formatNumber(value, decimal = 2) {
    const decimalValue = Math.pow(10, decimal);
    return (Math.floor(value * decimalValue) / decimalValue).toString();
}
