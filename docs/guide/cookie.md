# Cookie

## 介绍

Galanga 提供了一些常用的 Cookie 操作函数，包括获取、设置、删除 Cookie 等。

## 导入

```js
import { localCookie } from 'galanga'
```

## 使用

### 获取 Cookie

获取 Cookie 的值，如果 Cookie 不存在，则返回 `null`。

```js
localCookie.getItem('name')
```

### 设置 Cookie

设置 Cookie 的值，如果 Cookie 不存在，则创建 Cookie。

```js
localCookie.setItem('name', 'value')
```

### 删除 Cookie

删除 Cookie。

```js
localCookie.removeItem('name')
```

### 清空 Cookie

清空所有 Cookie。

```js
localCookie.clear()
```