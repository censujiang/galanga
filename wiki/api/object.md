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

::: details 注意

如果原有的object是响应式的，那么在将object作为参数传入函数后，要么会污染原有的object，要么会导致函数失去响应式。具体情况取决于您的使用场景和框架。

如果在这种场景下，您仍然想要使用这个函数，并不希望污染原有的object，那么您可以使用下面的方法：

::: code-group

```js [按需引入]
let newObject = object
newObject = updateObjectFromImport(importObject, newObject)
```

```js [全局引入]
let newObject = object
newObject = galanga.updateObjectFromImport(importObject, newObject)
```

:::
