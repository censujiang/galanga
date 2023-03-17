# String

## 介绍

山奈提供了一些字符串处理的函数，用于处理字符串。

## 导入

```js
import { checkNull , strLength , formatBytes } from 'galanga'
```

## 使用

### 判断字符串是否为空

判断字符串是否为空，如果字符串为空，则返回 `true`，否则返回 `false`。

```js
checkNull(name)
```

### 获取字符串长度

获取字符串的长度，如果字符串为空，则返回 `0`。

```js
strLength(name)
```

### 格式化字节

将字节（单位为B）格式化为 `KB`、`MB`、`GB` 等。

输入参数：

- `bytes`：字节数

- `decimals`：保留小数位数，默认为 `1`

- `unit`：单位，可选值为 `B`、`KB`、`MB`、`GB`、`TB`、`PB`、`EB`、`ZB`、`YB`，默认为 `B`

```js
formatBytes(1024,1,'B')
```