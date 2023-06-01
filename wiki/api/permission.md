# Permission

山奈提供了一些API用于您去获取或判断是否获取了一些浏览器权限。

## `notificationPermission`<Badge type="warning" text="beta" />

### 介绍

这是一个函数集合，用于获取或判断是否获取了浏览器的通知权限。

### 导入

```js
import { notificationPermission } from 'galanga'
```

### 使用

此集合有两个子函数，分别如下：

- `check()`: 用于判断是否获取了通知权限，返回一个布尔值或Null，`true`表示获取了权限，`false`表示没有获取权限或浏览器不支持通知权限，`null`表示用户还未做出选择。

- [async]`request()`: 用于请求通知权限，此函数为一个异步函数，返回一个布尔值，`true`表示获取了权限，`false`表示用户已经拒绝了权限或浏览器不支持通知权限。

::: code-group

```js [按需引入]
notificationPermission.check()
await notificationPermission.request()
```

```js [全局引入]
galanga.notificationPermission.check()
await galanga.notificationPermission.request()
```

:::

## `clipboardPermission`<Badge type="warning" text="beta" />

### 介绍

这是一个函数集合，用于获取或判断是否获取了浏览器的剪贴板权限。

### 导入

```js
import { clipboardPermission } from 'galanga'
```

### 使用

此集合有两个子函数，分别如下：

- [async]`check()`: 用于判断是否获取了剪贴板权限，此函数是一个异步函数，返回一个布尔值或Null，`true`表示获取了权限，`false`表示没有获取权限或浏览器不支持剪贴板权限，`null`表示用户还未做出选择。

- [async]`request()`: 用于请求剪贴板权限，此函数为一个异步函数，返回一个布尔值，`true`表示获取了权限，`false`表示用户已经拒绝了权限或浏览器不支持剪贴板权限。

::: code-group

```js [按需引入]
await clipboardPermission.check()
await clipboardPermission.request()
```

```js [全局引入]
await galanga.clipboardPermission.check()
await galanga.clipboardPermission.request()
```

:::

## `locationPermission`<Badge type="warning" text="beta" />

### 介绍

这是一个函数集合，用于获取或判断是否获取了浏览器的地理位置权限。

### 导入

```js
import { locationPermission } from 'galanga'
```

### 使用

此集合有两个子函数，分别如下：

- [async]`check()`: 用于判断是否获取了地理位置权限，此函数是一个异步函数，返回一个布尔值或Null，`true`表示获取了权限，`false`表示没有获取权限或浏览器不支持地理位置权限，`null`表示用户还未做出选择。

- [async]`request()`: 用于请求地理位置权限，此函数为一个异步函数，返回一个布尔值，`true`表示获取了权限，`false`表示用户已经拒绝了权限或浏览器不支持地理位置权限。

::: code-group

```js [按需引入]
await locationPermission.check()
await locationPermission.request()
```

```js [全局引入]
await galanga.locationPermission.check()
await galanga.locationPermission.request()
```

:::