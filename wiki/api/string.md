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