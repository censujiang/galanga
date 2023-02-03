# 贡献指南

我们使用 `yarn` 作为包管理工具，请先安装 `yarn`

```bash
npm install yarn -g
```

安装依赖

```bash
yarn
```

一键打包生成生产代码

```bash
yarn run build
```

运行单元测试:

```bash
yarn test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
yarn run release
```