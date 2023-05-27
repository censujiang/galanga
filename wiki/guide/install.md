# 安装

## 主版本(main)

山奈的主版本是一个在标准W3C环境下运行的JavaScript库，您可以在任何支持JavaScript的环境中使用它。

### 在NPM项目下使用

在NPM项目下，您可以通过以下命令安装山奈：

::: code-group

```bash [yarn]
yarn add galanga
```

```bash [npm]
npm install galanga
```

```bash [pnpm]
pnpm install galanga
```

```bash [cnpm]
cnpm install galanga
```

:::

安装完成后，您可以在项目中引入山奈并使用对应的功能：

::: code-group

```js [按需引入]
import { info } from 'galanga'

console.log(info)
```

```js [全局引入]
import galanga from 'galanga'

console.log(galanga.info)
```

:::

### 在HTML单页面下使用

在HTML单页面下，您可以在官方仓库内下载山奈的打包产物，然后引入至您的HTML文件中，例如您将山奈的打包产物放在 `/js/galanga/` 目录下，您可以通过以下方式引入山奈：

```html
<script src="/js/galanga/index.js"></script>
```

当然，您也可以引入山奈的CDN链接：

```html
<script src="https://cdn.jsdelivr.net/npm/galanga"></script>
```

引入完成后，您可以在项目中使用全部功能（目前暂不支持将部分函数单独引入至项目内）：

```js
console.log(galanga.info)
```

我们更推荐使用NPM项目的方式引入山奈，因为这样不仅可以更好地管理依赖，还可以使用您的打包工具的摇树功能动态修剪您的代码。

在查看后文的使用示例时，请使用 `galanga` 作为全局变量后再加具体的功能函数名。

## UNi-APP版本(uniapp)

山奈的UNi-APP版本是一个在UNI-APP环境下运行的JavaScript库，您可以在UNI-APP项目中使用它。

### 在NPM项目下使用

在NPM项目下，您可以通过以下命令安装山奈：

::: code-group

```bash [yarn]
yarn add @uni-helper/galanga
```

```bash [npm]
npm install @uni-helper/galanga
```

```bash [pnpm]
pnpm install @uni-helper/galanga
```

```bash [cnpm]
cnpm install @uni-helper/galanga
```

:::

安装完成后，您可以在项目中引入山奈并使用对应的功能：

::: code-group

```js [按需引入]
import { info } from '@uni-helper/galanga'

console.log(info)
```

```js [全局引入]
import galanga from '@uni-helper/galanga'

console.log(galanga.info)
```

:::

### 在`uni_modules`下使用

在uni_modules下，您可以在官方仓库内下载山奈的打包产物（是 `dist/index.js`这个文件），然后引入至您的uni_modules文件夹中，例如您将山奈的打包产物放在 `/uni_modules/galanga/` 目录下，您可以通过以下方式引入山奈：

::: code-group

```js [按需引入]
import { info } from '@/uni_modules/galanga/index.js'

console.log(info)
```

```js [全局引入]

import galanga from '@/uni_modules/galanga/index.js'

console.log(galanga.info)
```

:::