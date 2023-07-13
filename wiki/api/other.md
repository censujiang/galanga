# Other

一些杂项或者小小的语法糖

## `sleep`

### 介绍

`sleep`函数，用于延迟执行。

### 导入

```js
import { sleep } from 'galanga'
```

### 使用

传入一个数字，单位为毫秒，延迟执行。

::: code-group

```js [按需引入]
sleep(1000)
```

```js [全局引入]
galanga.sleep(1000)
```

:::