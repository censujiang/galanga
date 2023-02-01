# 入门

## 什么是山奈/Galanga？

山奈/Galanga（以下简称山奈）是川菜中常用的调味品，也可以用作腌制成为单独的菜品，而这一辅料被人们俗称为姜。

在Web的世界里，它是一个开源的实用的JS函数库，它的目标是提供一些常用的函数，让你的代码更简洁更易读。我们希望利用姜来让您的代码更加美味，让您更加专注于业务逻辑的实现。

## 为什么要使用山奈/Galanga？

相比其他的函数库，山奈希望提供在业务中常用的一些函数，而山奈也是基于TypeScript开发的，因此在使用时，您可以获得更好的类型提示。

## 如何使用山奈/Galanga？

### 在NPM项目下使用

在NPM项目下，您可以通过以下命令安装山奈：

```bash
npm install galanga
```

安装完成后，您可以在项目中引入山奈并使用对应的功能（目前暂不支持将全部函数一键引入至项目内）：

```js
import { name } from 'galanga'

console.log(name)
```

### 在HTML单页面下使用

在HTML单页面下，您可以在官方仓库内下载山奈的打包产物，然后引入至您的HTML文件中，例如您将山奈的打包产物放在 `/js/galanga/` 目录下，您可以通过以下方式引入山奈：

```html
<script src="/js/galanga/index.js"></script>
```

当然，您也可以引入山奈的CDN链接：

```html
<script src="https://cdn.jsdelivr.net/npm/galanga"></script>
```

安装完成后，您可以在项目中使用全部功能（目前暂不支持将部分函数单独引入至项目内）：

```js
console(galanga.name)
```