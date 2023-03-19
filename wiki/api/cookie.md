# Cookie

山奈提供了一些常用的 Cookie 操作函数，包括获取、设置、删除 Cookie 等。

## `localCookie`

### 简介

`localCookie` 是一个对象，包含了一些常用的 Cookie 操作函数，包括获取、设置、删除 Cookie 等。

### 导入

```js
import { localCookie } from 'galanga'
```

### 使用

#### 获取 Cookie

获取 Cookie 的值，如果 Cookie 不存在，则返回 `null`。

::: code-group

```js [NPM]
localCookie.getItem('name')
```

```js [HTML]
galanga.localCookie.getItem('name')
```

:::

#### 设置 Cookie

设置 Cookie 的值，如果 Cookie 不存在，则创建 Cookie。

::: code-group

```js [NPM]
localCookie.setItem('name', 'value')
```

```js [HTML]
galanga.localCookie.setItem('name', 'value')
```

:::

#### 删除 Cookie

删除 Cookie。

::: code-group

```js [NPM]
localCookie.removeItem('name')
```

```js [HTML]
galanga.localCookie.removeItem('name')
```

:::

#### 清空 Cookie

清空所有 Cookie。

::: code-group

```js [NPM]
localCookie.clear()
```

```js [HTML]
galanga.localCookie.clear()
```

:::