# Date

山奈提供了一些时间处理的工具函数

## `afterTime`<Badge type="warning" text="beta" />

### 介绍

输出当前时间之后的时间

### 导入

```js
import { afterTime } from 'galanga'
```

### 使用

输入参数如下：

- (必填)`time`：时间，可以是一个时间戳，也可以是一个时间字符串，也可以是一个 Date 对象
- `backType`：返回格式，可以是一个字符串，也可以是一个函数，如果是字符串，则返回一个时间字符串，如果是函数，则返回一个 Date 对象

::: code-group

```js [按需引入]
afterTime(time, backType)
```

```js [全局引入]
galanga.afterTime(time, backType)
```

:::