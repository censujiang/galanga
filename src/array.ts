//去除数组中重复的对象，将length大的数组保留，length小的数组去掉
export function filterUniqueByProperty<T>(array: Array<T>, prop: string) {
  return array.filter((item, index, self) => {
    // 使用 findIndex 方法找到当前元素后面是否还有相同属性值的元素
    const foundIndex = self.slice(index + 1).findIndex(other => other[prop] === item[prop]);
    // 如果后面没有相同属性值的元素，则保留当前元素
    // 否则去掉当前元素
    return foundIndex === -1;
  });
}