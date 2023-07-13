# String

山奈提供了一些字符串处理的函数，用于处理字符串。

## `checkNull`

### 介绍

判断字符串是否为空，如果字符串为空，则返回 `true`，否则返回 `false`。

### 导入

```js
import { checkNull } from 'galanga'
```

### 使用

::: code-group

```js [按需引入]
checkNull(name)
```

```js [全局引入]
galanga.checkNull(name)
```

:::

## `checkNotNull`

### 介绍

判断字符串是否不为空（非空），如果字符串不为空，则返回 `true`，否则返回 `false`。此函数会反义 `checkNull` 函数。这也是为了业务逻辑的统一，方便使用。

### 导入

```js
import { checkNotNull } from 'galanga'
```

### 使用

::: code-group

```js [按需引入]
checkNotNull(name)
```

```js [全局引入]
galanga.checkNotNull(name)
```

:::

## `strLength`

### 介绍

获取字符串的长度，如果字符串为空，则返回 `0`。

### 导入

```js
import { strLength } from 'galanga'
```

### 使用

::: code-group

```js [按需引入]
strLength(name)
```

```js [全局引入]
galanga.strLength(name)
```

:::

## `formatBytes`

### 介绍

将字节格式化为 `B`、`KB`、`MB`、`GB`、`TB`、`PB`、`EB`、`ZB`、`YB`。

### 导入

```js
import { formatBytes } from 'galanga'
```

### 使用

输入参数：

- `bytes`：字节数

- 一个json对象（可选），有以下内容：

  - `decimals`：保留的小数位数，默认为1

  - `from`：输入的字节单位，默认为B

  - `to`：输出的字节单位

::: code-group

```js [按需引入]
const json = {
  decimals: 1,
  from: 'B',
  to: 'KB'
}
formatBytes(1024,json)
```

```js [全局引入]
var json = {
  decimals: 1,
  from: 'B',
  to: 'KB'
}
galanga.formatBytes(1024,json)
```

:::

## `checkPassword`

### 介绍

检查密码强度的函数，如果符合要求，则返回 `true`，否则返回 `false`。

### 导入

```js
import { checkPassword } from 'galanga'
```

### 使用

输入参数：

- `password`：密码

- 一个json对象（可选），有以下内容：

  - `minLength`：密码最小长度，默认为8

  - `maxLength`：密码最大长度，默认为16

  - `types`：字符类型，分别为数字、小写字母、大写字母、特殊字符，默认为`['number', 'lowercase', 'uppercase', 'special'],`

  - `minTypes`：最少包含的字符类型，默认为2

  - `maxTypes`：最多包含的字符类型，默认为4

::: code-group

```js [按需引入]
const json = {
  minLength: 8,
  maxLength: 16,
  types: ['number', 'lowercase', 'uppercase', 'special'],
  minTypes: 2,
  maxTypes: 4
}
checkPassword('12345678',json)
```

```js [全局引入]
var json = {
  minLength: 8,
  maxLength: 16,
  types: ['number', 'lowercase', 'uppercase', 'special'],
  minTypes: 2,
  maxTypes: 4
}
galanga.checkPassword('12345678',json)
```

:::

## `checkEmail`

### 介绍

检查邮箱格式的函数，如果符合要求，则返回 `true`，否则返回 `false`。

### 导入

```js
import { checkEmail } from 'galanga'
```

### 使用

::: code-group

```js [按需引入]
checkEmail('info@sancerain.com')
```

```js [全局引入]
galanga.checkEmail('info@sancerain.com')
```

:::

## `encode62`和`decode62`

### 介绍

将数字转换为62进制的字符串，或者将62进制的字符串转换为数字。

### 导入

```js
import { encode62, decode62 } from 'galanga'
```

### 使用

- `encode62`：将数字转换为62进制的字符串，输入参数为数字，输出参数为字符串。
- `decode62`：将62进制的字符串转换为数字，输入参数为字符串，输出参数为数字。

::: code-group

```js [按需引入]
const str = encode62(123456789)
const num = decode62(str)
```

```js [全局引入]
var str = galanga.encode62(123456789)
var num = galanga.decode62(str)
```

:::

## `getFileNameFromURL`

### 介绍

从URL中获取文件名，如果URL不合法，则返回 `null`。

### 导入

```js
import { getFileNameFromURL } from 'galanga'
```

### 使用

::: code-group

```js [按需引入]
const name = getFileNameFromURL('https://www.example.com/index.html')
```

```js [全局引入]
var name = galanga.getFileNameFromURL('https://www.example.com/index.html')
```

:::

## `getFileExtFromString`

### 介绍

从字符串中获取文件后缀名，如果字符串不合法，则返回 `null`。

### 导入

```js
import { getFileExtFromString } from 'galanga'
```

### 使用

::: code-group

```js [按需引入]
const ext = getFileExtFromString('index.html')
```

```js [全局引入]
var ext = galanga.getFileExtFromString('index.html')
```

:::

## `spliceSiteTitle`

### 介绍

截取网站标题的函数，如果字符串不合法，则返回 `null`。

### 导入

```js
import { spliceSiteTitle } from 'galanga'
```

### 使用

将会传入一个Json对象，有以下内容，不传入则使用默认值：

- `title`：页面标题
- `siteName`：网站名称
- `separator`：分隔符，默认为`-`
- `reverse`：是否反转，默认为`false`

::: code-group

```js [按需引入]
const title = spliceSiteTitle({
  title: '山奈',
  siteName: '山奈',
  separator: '-',
  reverse: false
})
```

```js [全局引入]
var title = galanga.spliceSiteTitle({
  title: '山奈',
  siteName: '山奈',
  separator: '-',
  reverse: false
})
```

:::