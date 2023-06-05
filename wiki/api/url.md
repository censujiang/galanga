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

可以传入以下参数

- `isFullPath` 是否返回完整路径，默认为 `false`。

::: code-group

```js [按需引入]
url.getPath(false)
```

```js [全局引入]
galanga.url.getPath(false)
```

:::

#### 设置URL的参数

设置 URL 的参数，如果参数不存在，则添加参数。操作成功返回 `true`，否则返回 `false`。

::: code-group

```js [按需引入]
url.setQuery('name', 'galanga')
```

```js [全局引入]
galanga.url.setQuery('name', 'galanga')
```

:::

#### 设置URL的hash

设置 URL 的 hash，如果 hash 不存在，则添加 hash。操作成功返回 `true`，否则返回 `false`。

::: code-group

```js [按需引入]
url.setHash('galanga')
```

```js [全局引入]
galanga.url.setHash('galanga')
```

:::

#### 设置URL的路径

设置 URL 的路径，如果路径不存在，则添加路径。操作成功返回 `true`，否则返回 `false`。

::: code-group

```js [按需引入]
url.setPath('galanga')
```

```js [全局引入]
galanga.url.setPath('galanga')
```

:::


## `getPreURL`

获取上一个 URL。

### 导入

```js
import { getPreURL } from 'galanga'
```

### 使用

::: code-group

```js [按需引入]
getPreURL()
```

```js [全局引入]
galanga.getPreURL()
```

:::

