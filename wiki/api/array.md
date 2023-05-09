# Array

山奈提供了一些数组的操作方法，可以帮助您更好的操作数组。

## `filterUniqueByProperty`

### 介绍

根据数组中对象的某个属性去重，将length大的数组保留，length小的数组去掉。

### 导入

```js
import { filterUniqueByProperty } from 'galanga'
```

### 使用

输入的参数如下：

- `array`[array]: 数组
- `property`[string]: 对象的属性

::: code-group

```js [按需引入]
array = filterUniqueByProperty(array, 'id')
```

```js [全局引入]
array = galanga.filterUniqueByProperty(array, 'id')
```

:::