# Device

山奈提供了一些有关设备操作的API，可用来获取设备的信息，或者进行一些操作。

## `checkDeviceType()`

### 介绍

检查当前设备的类型。

### 导入

```js
import { checkDeviceType } from 'galanga'
```

### 使用

安卓手机返回android，苹果手机返回ios，平板返回pad，手表返回watch，桌面返回desktop

::: code-group

```js [按需引入]
checkDeviceType()
```

```js [全局引入]
galanga.checkDeviceType()
```

:::