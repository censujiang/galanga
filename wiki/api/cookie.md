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
- `sPath`：Cookie 路径，默认为 `/`
- `sDomain`：Cookie 域，默认为当前域
- `vEnd`：Cookie 有效期，默认为当前会话结束
- `bSecure`：是否只在 HTTPS 连接中有效，默认为 `false`

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
- `sPath`：Cookie 路径，默认为 `/`
- `sDomain`：Cookie 域，默认为当前域

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