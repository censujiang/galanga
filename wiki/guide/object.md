# Object

山奈提供了一些有关对象的方法，这些方法可以帮助您更好地使用对象。

## `updateObjectFromImport`

### 介绍

将新的object中的值动态更新到原有的object中，并不影响原有object中的结构。

### 导入

```js
import { updateObjectFromImport } from 'galanga'
```

### 使用

输入的参数如下：

- `importObject`[object]: 新的object，用于更新原有的object
- `object`[object]: 原有的object

::: code-group

```js [按需引入]
object = updateObjectFromImport(importObject, object)
```

```js [全局引入]
object = galanga.updateObjectFromImport(importObject, object)
```

:::
