# Number

山奈提供了一些数学函数，这些函数可以用于数值计算。

## `formatNumber`

### 介绍

格式化数字，保留两位小数。

### 导入

```js
import { formatNumber } from 'galanga'
```

### 使用

输入的参数如下：

- `number`[number]: 数字
- `decimal`[number]: 保留的小数位数，默认为2

::: code-group

```js [按需引入]
number = formatNumber(number)
```

```js [全局引入]
number = galanga.formatNumber(number)
```

:::

## `formatPercent`

### 介绍

计算百分比，并保留小数输出，例如：`0.1` => `10.0%`。

### 导入

```js
import { formatPercent } from 'galanga'
```

### 使用

输入的参数如下：

- `numerator`[number]: 分子
- `denominator`[number]: 分母，默认为100
- `decimal`[number]: 保留的小数位数，默认为1

::: code-group

```js [按需引入]
const percent = formatPercent(10, 100, 1)
```

```js [全局引入]
const percent = galanga.formatPercent(10, 100, 1)
```

:::