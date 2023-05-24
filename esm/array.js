// 去除数组中重复的对象，将 length 大的数组保留，length 小的数组去掉
export function filterUniqueByProperty(array, prop) {
    return array.filter((item, index, self) => {
        const foundIndex = self.slice(index + 1).findIndex((other) => other[prop] === item[prop]);
        return foundIndex === -1;
    });
}
