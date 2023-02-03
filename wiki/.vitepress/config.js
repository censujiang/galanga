import packageJson from '../../package.json'
const now_year = new Date().getFullYear()
const build_version = packageJson.version

export default {
  lang: 'zh-CN',
  title: '山奈Galanga',
  description: '山奈Galanga是一个开源的JS函数库',
  cleanUrls: true,
  lastUpdated: true,
  outDir: '../docs',
  themeConfig: {
    siteTitle: 'Galanga',
    nav: [
      { text: '首页', link: '/' },
      { text: '指引', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: '站点切换',
        items: [
          { text: '官方文档', link: 'https://galanga.censujiang.com' },
          { text: '中国镜像', link: 'https://galanga.censujiang.cn' },
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '入门', link: '/guide/' },
            { text: '安装', link: '/guide/install' },
          ]
        },
        {
          text: '项目信息',
          items: [
            { text: '贡献指南', link: '/guide/contribute' },
            { text: '项目计划', link: '/guide/todo' },
            { text: '更新日志', link: '/guide/changelog' },
          ]
        }
      ],
      '/api/': [
        { text: '前言', link: '/api/' },
        { text: '饼干Cookie', link: '/api/cookie' },
        { text: '网址URL', link: '/api/url' },
        { text: '字符串String', link: '/api/string' },
      ]
    },
    editLink: {
      pattern: 'https://github.com/censujiang/galanga/edit/master/wiki/:path',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/censujiang/galanga' },
    ],
    footer: {
      message: 'Released under Apache License 2.0 and package version ' + build_version,
      copyright: 'Copyright © 2014-' + now_year + ' CensuJiang All Rights Reserved.'
    }
  }
}