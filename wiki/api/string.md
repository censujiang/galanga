# String

山奈提供了一些字符串处理的函数，用于处理字符串。

## `checkNull`

### 介绍

判断字符串是否为空，如果字符串为空，则返回 `true`，否则返回 `false`。

### 导入

```js
import { checkNull } from 'galanga'
```

### 使用

::: code-group

```js [NPM]
checkNull(name)
```

```js [HTML]
galanga.checkNull(name)
```

:::

## `strLength`

### 介绍

获取字符串的长度，如果字符串为空，则返回 `0`。

### 导入

```js
import { strLength } from 'galanga'
```

### 使用

::: code-group

```js [NPM]
strLength(name)
```

```js [HTML]
galanga.strLength(name)
```

:::

## `formatBytes`

### 介绍

将字节格式化为 `B`、`KB`、`MB`、`GB`、`TB`、`PB`、`EB`、`ZB`、`YB`。

### 导入

```js
import { formatBytes } from 'galanga'
```

### 使用

输入参数：

- `bytes`：字节数

- 一个json对象（可选），有以下内容：

  - `decimals`：保留的小数位数，默认为1

  - `from`：输入的字节单位，默认为B

  - `to`：输出的字节单位

::: code-group

```js [NPM]
const json = {
  decimals: 1,
  from: 'B',
  to: 'KB'
}
formatBytes(1024,json)
```

```js [HTML]
var json = {
  decimals: 1,
  from: 'B',
  to: 'KB'
}
galanga.formatBytes(1024,json)
```

:::