# 更新日志

## 0.2.7 (2024-11-3)

- 给`url`函数集合新增了`removeQuery`函数，用于删除 URL 的参数。
- 给`url`函数集合新增了`removeHash`函数，用于删除 URL 的 hash。

## 0.2.6 (2023-11-2)

- 新增`cameraPermission`函数，用于处理浏览器摄像头权限。
- 新增`microphonePermission`函数，用于处理浏览器麦克风权限。

## 0.2.5 (2023-10-25)

- 为了方便操作，从 `v0.2.5` 开始，localCookie 的部分操作逻辑将交给 `js-cookie` 来处理，因此，localCookie 的部分函数的参数将会发生变化。

## 0.2.4 (2023-8-9)

- 新增`arrayFilterUniqueItem`函数，用于去除数组中完全相同的元素，然后返回新的数组。

## 0.2.3 (2023-8-2)

- `share`函数新增`files`参数，用于分享文件，例如：`share({files: [file]})`。

## 0.2.2 (2023-7-16)

- 新增`formatPercent`函数，用于计算百分比，并保留小数输出，例如：`0.1` => `10.0%`。
- 新增`share`函数，用于调用系统分享功能。

## 0.2.1 (2023-7-13)

- 新增`encode62`函数，用于将数字转换为 62 进制的字符串。
- 新增`decode62`函数，用于将 62 进制的字符串转换为数字。
- 新增`getFileNameFromURL`函数，用于从 URL 中获取文件名。
- 新增`getFileExtFromString`函数，用于从字符串中获取文件后缀名。
- 新增`spliceSiteTitle`函数，用于拼接网站标题。
- 新增`sleep`函数，用于延迟执行。

## 0.2.0 (2023-6-5)

- `url.getPath`函数现在可以获取 URL 的完整路径了。

## 0.1.9 (2023-6-3)

- 新增`getPreURL`函数，用于获取上一页的 URL。

## 0.1.8 (2023-6-1)

- 新增`afterTime`函数，用于获取当前时间之后的时间。
- 给`url`函数集合新增了`setHash`函数，用于设置 URL 的 hash 值。
- 给`url`函数集合新增了`setPath`函数，用于设置 URL 的路径。
- 给`url`函数集合新增了`setQuery`函数，用于设置 URL 的参数。
- 修复`localCookie`函数的 bug，现在可以正常使用了。

## 0.1.7 (2023-5-27)

- 修复了`checkDeviceType`函数的 bug，现在可以正常使用了。
- 变更了`clipboard.write()`函数的参数，现在可以写入任意类型的数据了。

## 0.1.6 (2023-5-27)

- 修复了`checkDeviceType`函数的 bug，现在可以正常使用了。
- 新增了`shakeObject`函数，输入一个数组和要摇树的对象，返回的是这个数组中出现的元素组成的对象。

## 0.1.5 (2023-5-25)

- 拓展了`formatNumber`函数，现在可以自定义保留小数位数了。
- 拓展了`clipboard`函数，现在可以读取和写入任意类型的数据了。
- 新增了`locationPermission`函数，用于处理浏览器定位权限。

## 0.1.4 (2023-5-18)

- 新增`clipboard`函数，用于读取和设置剪贴板。

## 0.1.3 (2023-5-16)

- 新增`formatNumber`函数，用于格式化数字，保留两位小数。

## 0.1.2 (2023-5-12)

- 修复`checkNull`函数的 bug，现在匹配到 false 的情况会返回 false 了。

## 0.1.1 (2023-5-12)

- 修复`updateObjectFromImport`函数的 bug，现在可以正常使用了。

## 0.1.0 (2023-5-11)

- 项目推进至公测阶段，欢迎大家使用并提出宝贵的意见，不稳定的 API 会在文档内标注`beta`，同时也感谢我的同事们生产环境出问题的风险使用了山奈，用的很好，下次不准再用了.jpg（bushi）。

- 新增`notificationPermission`函数，用于处理浏览器通知权限。

- 新增`clipboardPermission`函数，用于处理浏览器剪贴板权限。

## 0.0.27 (2023-5-9)

- 新增了`filterUniqueByProperty`函数，用于根据数组中对象的某个属性去重，将 length 大的数组保留，length 小的数组去掉。

## 0.0.26 (2023-5-9)

- 新增了`updateObjectFromImport`函数，用于将新的 object 中的值动态更新到原有的 object 中，并不影响原有 object 中的结构。

## 0.0.25 (2023-4-22)

- `checkNull`和`checkNotNull`函数现在可以检查数字类型的参数是否为 NaN 了。

## 0.0.24 (2023-4-18)

- 新增了 `checkNotNull` 函数，用于检查字符串是否不为空，此函数会反义 `checkNull` 函数，方便使用。

## 0.0.23 (2023-4-15)

- 对函数`checkDeviceType`进行了优化，现在可以更好的检测设备类型

## 0.0.22 (2023-4-7)

- 新增了 `checkDeviceType` 函数，用于检查设备类型，此函数不稳定，可能会在后续版本中修改

## 0.0.21 (2023-3-22)

- 新增了 `checkEmail` 函数，用于检查邮箱格式

## 0.0.20 (2023-3-19)

- 新增了 `checkPassword` 函数，用于检查密码强度

## 0.0.19 (2023-3-19)

- 修复了 `formatBytes` 函数的两个 bug

## 0.0.1 (2023-2-1)

- 项目发布测试版本
