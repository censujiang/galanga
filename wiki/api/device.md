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

- `type`：要检查的类型，此参数为一个数组，默认为`['browser', 'device', 'os', 'platform']`，可选值为`browser`、`device`、`os`、`platform`，分别表示浏览器类型、设备类型、系统类型、平台类型。如果只想检查其中的某一个类型，则可以传入一个字符串，如`'browser'`，如果想检查多个类型，则可以传入一个数组，如`['browser', 'device']`。

默认情况下，返回的是一个对象，包含了浏览器类型、设备类型、系统类型，如下：

```js
{
  browser: 'chrome',
  device: 'pc',
  os: 'windows',
  platform: 'web'
}
```

如果只传入一个字符串，那么返回的是一个字符串，比如你只想检查浏览器类型，如`'browser'`，那么返回的就是浏览器类型，如下：

```js
'chrome'
```

::: code-group

```js [按需引入]
checkDeviceType()
```

```js [全局引入]
galanga.checkDeviceType()
```

:::

::: details 迁移指南

### `v0.1.6`之前

从`v0.1.6`开始，`checkDeviceType`函数的参数不再包含`return_string`，而是直接传入一个字符串或者数组，如果传入的是一个字符串，则返回一个字符串，如果传入的是一个数组，则返回一个对象，请您检查您的业务中是否使用了`return_string`参数，如果使用了，请您修改为新的使用方式，例如

```js
// 旧的使用方式
checkDeviceType(['browser'], true)

// 新的使用方式
checkDeviceType('browser')
```

:::

## `clipboard`

### 介绍

一个用于读取和设置剪切板的函数组合，包含了`read`和`write`两个函数

### 导入

```js
import { clipboard } from 'galanga'
```

### 使用

一共有两个函数，分别是`read`和`write`，分别用于读取和设置剪切板

- [async]`read(onlyString)`：读取剪切板的内容，返回一个`Promise`，如果读取成功，则返回剪切板的内容，否则返回`null`。这个函数的参数如下
  
  - `onlyString`：是否只读取剪切板中的文本内容，默认为`true`，如果为`false`，则会读取剪切板中的所有内容，包括图片等

- [async]`write(text,onlyString)`：设置剪切板的内容，返回一个`Promise`，如果设置成功，则返回`true`，否则返回`false`。这个函数的参数如下

  - `text`：要设置的内容。

  - `onlyString`：是否只设置文本内容，默认为`true`，如果为`false`，则可以设置任意内容

::: code-group

```js [按需引入]
clipboard.write('Hello World!',true)
clipboard.read().then(text => console.log(text))
```

```js [全局引入]
galanga.clipboard.write('Hello World!',true)
galanga.clipboard.read().then(text => console.log(text))
```

:::