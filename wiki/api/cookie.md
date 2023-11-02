# Cookie

山奈提供了一些常用的 Cookie 操作函数，包括获取、设置、删除 Cookie 等。

## `localCookie`

### 简介

`localCookie` 是一个对象，包含了一些常用的 Cookie 操作函数，包括获取、设置、删除 Cookie 等。

::: details 变更说明

为了方便操作，从 `v0.2.5` 开始，localCookie的部分操作逻辑将交给 `js-cookie` 来处理，因此，localCookie的部分函数的参数将会发生变化。

:::

### 导入

```js
import { localCookie } from 'galanga'
```

### 使用

#### 获取 Cookie

获取 Cookie 的值，如果 Cookie 不存在，则返回 `null`。

::: code-group

```js [按需引入]
localCookie.getItem('name')
```

```js [全局引入]
galanga.localCookie.getItem('name')
```

:::

#### 设置 Cookie

设置 Cookie 的值，如果 Cookie 不存在，则创建 Cookie。

输入参数如下：

- (必填)`sKey`：Cookie 名称
- (必填)`sValue`：Cookie 值
- (选填)`object`: 一些可选的参数

::: code-group

```js [按需引入]
localCookie.setItem('name', 'value')
```

```js [全局引入]
galanga.localCookie.setItem('name', 'value')
```

:::

#### 删除 Cookie

删除 Cookie。

输入参数如下：

- (必填)`sKey`：Cookie 名称
- (选填)`object`: 一些可选的参数

::: code-group

```js [按需引入]
localCookie.removeItem('name')
```

```js [全局引入]
galanga.localCookie.removeItem('name')
```

:::

#### 清空 Cookie

清空所有 Cookie。

::: code-group

```js [按需引入]
localCookie.clear()
```

```js [全局引入]
galanga.localCookie.clear()
```

:::