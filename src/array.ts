// 根据属性名去除数组中重复的对象，将 length 大的数组保留，length 小的数组去掉
export function filterUniqueByProperty<T extends Record<string, any>>(array: Array<T>, prop: keyof T) {
  return array.filter((item, index, self) => {
    const foundIndex = self.slice(index + 1).findIndex((other: T) => other[prop] === item[prop]);
    return foundIndex === -1;
  });
}

// 去除数组中完全相同的对象
export function arrayFilterUniqueItem<T extends Record<string, any>>(array: Array<T>) {
  const uniqueObjects = [];
  const seenObjects = new Set();
  for (const obj of array) {
    const objString = JSON.stringify(obj);
    if (!seenObjects.has(objString)) {
      uniqueObjects.push(obj);
      seenObjects.add(objString);
    }
  }
  return uniqueObjects;
}
