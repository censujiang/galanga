# URL

山奈提供了一些方便的方法来处理 URL。

## `url`
### 介绍

url 是一个用于处理 URL 的函数，它提供了一些方便的方法来处理 URL。

### 导入

```js
import { url } from 'galanga'
```

### 使用

#### 获取URL的参数

获取 URL 参数的值，如果参数不存在，则返回 `null`。

::: code-group

```js [按需引入]
url.getQuery('name')
```

```js [全局引入]
galanga.url.getQuery('name')
```

:::

#### 获取URL的hash

获取 URL 的 hash 值，如果 hash 不存在，则返回 `null`。

::: code-group

```js [按需引入]
url.getHash()
```

```js [全局引入]
galanga.url.getHash()
```

:::

#### 获取URL的路径

获取 URL 的路径，如果路径不存在，则返回 `null`。

::: code-group

```js [按需引入]
url.getPath()
```

```js [全局引入]
galanga.url.getPath()
```

:::