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

- [async]`write(value)`：设置剪切板的内容，返回一个`Promise`，如果设置成功，则返回`true`，否则返回`false`。这个函数的参数如下

  - `value`：要设置的内容。

::: code-group

```js [按需引入]
clipboard.write('Hello World!')
clipboard.read().then(text => console.log(text))
```

```js [全局引入]
galanga.clipboard.write('Hello World!')
galanga.clipboard.read().then(text => console.log(text))
```

:::

::: details 迁移指南

### `v0.1.7`之前

从`v0.1.7`开始，`clipboard.write()`函数的参数不再包含`onlyString`，而是智能判断您传入的类型，例如`String`类型的参数会被判断为进行writeTxt操作，其他类型的参数会被判断为进行write操作，请您检查您的业务中是否使用了`onlyString`参数，如果使用了，请您修改为新的使用方式，例如

```js
// 旧的使用方式
clipboard.write('Hello World!',true)

// 新的使用方式
clipboard.write('Hello World!')
```

:::

## `share`

### 介绍

`share`函数用于调用系统的分享功能，可以将当前页面分享到注册到系统分享功能的应用中，例如微信、QQ等。

此功能需要浏览器支持，如果浏览器不支持，则会自动降级为复制当前页面的分享信息到剪切板或者弹出一个填选框弹窗。

### 导入

```js
import { share } from 'galanga'
```

### 使用

输入的参数为一个object，如下：

- `title`：分享的标题
- `content`：分享的内容
- `url`：分享的链接
- `type`：分享的类型，此值在普通版本Galanga上无含义，仅为兼容。在uniapp版本上的值对应为`weixin`、`qq`、`sinaweibo`、`system`，分别表示分享到微信、QQ、微博、系统分享。默认为`system`。

::: code-group

```js [按需引入]
share({
  title: 'Hello World!',
  content: 'Hello Galanga!',
  url: 'https://galanga.censujiang.com'\
  type: 'none'
})
```

```js [全局引入]
galanga.share({
  title: 'Hello World!',
  content: 'Hello Galanga!',
  url: 'https://galanga.censujiang.com'
  type: 'none'
})
```

:::