"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = void 0;
function formatNumber(value) {
    return (Math.floor(value * 100) / 100).toString();
}
exports.formatNumber = formatNumber;
