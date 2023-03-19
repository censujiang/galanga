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

将字节格式化为 `B`、`KB`、`MB`、`GB`、`TB`、`PB`、`EB`、`ZB`、`YB`。

输入参数：

- `bytes`：字节数

- 一个json对象（可选），有以下内容：

  - `decimals`：保留的小数位数，默认为1

  - `from`：输入的字节单位，默认为B

  - `to`：输出的字节单位

```js
const json = {
  decimals: 1,
  from: 'B',
  to: 'KB'
}
formatBytes(1024,json)
```