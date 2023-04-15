# Device

山奈提供了一些有关设备操作的API，可用来获取设备的信息，或者进行一些操作。

## `checkDeviceType()`

### 介绍

检查当前设备的各种类型，包括浏览器类型、设备类型、系统类型

### 导入

```js
import { checkDeviceType } from 'galanga'
```

### 使用

输入的参数如下：

- `type`：要检查的类型，此参数为一个数组，默认为`['browser', 'device', 'os']`，可选值为`browser`、`device`、`os`，分别表示浏览器类型、设备类型、系统类型

- `return_string`：是否返回字符串，默认为`false`，如果为`true`并且数组的只有一个值，则返回字符串，否则返回一个对象

默认情况下，返回的是一个对象，包含了浏览器类型、设备类型、系统类型，如下：

```js
{
  browser: 'Chrome',
  device: 'PC',
  os: 'Windows'
}
```

::: code-group

```js [按需引入]
checkDeviceType()
```

```js [全局引入]
galanga.checkDeviceType()
```