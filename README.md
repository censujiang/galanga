# [山奈Galanga](https://github.com/censujiang/galanga)

⚠ 本项目仍处于开发阶段，API可能会发生变化，请勿用于生产环境。

开源好用的 `JS|TS` 常用函数库

[官方文档](https://galanga.censujiang.com) | [中国镜像](https://galanga.censujiang.cn)

## :star: 简介

山奈/Galanga（以下简称山奈）是川菜中常用的调味品，也可以用作腌制成为单独的菜品，而这一辅料被人们俗称为姜。

在Web的世界里，它是一个开源的实用的JS函数库，它的目标是提供一些常用的函数，让你的代码更简洁更易读。我们希望利用姜来让您的代码更加美味，让您更加专注于业务逻辑的实现。

- 使用ES6+和TypeScript编写源码，编译生成生产代码
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 无依赖，体积小巧

## :pill: 兼容性

单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :open_file_folder: 目录介绍

```
.
├── config 打包配置文件
├── demo 使用demo
├── dist 编译产出代码
├── docs 项目文档站点
├── scripts 打包脚本
├── src 源代码目录
├── test 单元测试
├── wiki 项目文档源代码
```

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save galanga
```

如果你是node环境

```js
var base = require('galanga');
```

如果你是webpack等环境

```js
import base from 'galanga';
```

如果你是requirejs环境

```js
requirejs(['node_modules/galanga/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/galanga/dist/index.aio.js"></script>
```

更多安装及使用方法请查看[INSTALL.md](./wiki/guide/install.md)

## :kissing_heart: 贡献者指南

[CONTRIBUTING.md](./wiki/guide/contribute.md)

[![贡献者名单](https://contrib.rocks/image?repo=censujiang/galanga)](https://github.com/censujiang/galanga/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./wiki/guide/changelog.md)

## :airplane: 计划列表
[TODO.md](./wiki/guide/todo.md)