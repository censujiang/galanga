# 安装

## 在NPM项目下使用

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

### 全部引入

```js
import galanga from 'galanga'

console.log(galanga.name)
```

### 按需引入

```js
import { name } from 'galanga'

console.log(name)
```
我们在后文的使用示例中，基本上都是使用这种方式引入山奈的。

## 在HTML单页面下使用

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
console.log(galanga.name)
```

我们更推荐使用NPM项目的方式引入山奈，因为这样不仅可以更好地管理依赖，还可以使用您的打包工具的摇树功能动态修剪您的代码。

在查看后文的使用示例时，请使用 `galanga` 作为全局变量后再加具体的功能函数名。