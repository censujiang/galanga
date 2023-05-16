"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUniqueByProperty = void 0;
// 去除数组中重复的对象，将 length 大的数组保留，length 小的数组去掉
function filterUniqueByProperty(array, prop) {
    return array.filter(function (item, index, self) {
        var foundIndex = self.slice(index + 1).findIndex(function (other) { return other[prop] === item[prop]; });
        return foundIndex === -1;
    });
}
exports.filterUniqueByProperty = filterUniqueByProperty;
