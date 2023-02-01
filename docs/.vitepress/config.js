const now_year = new Date().getFullYear()

export default {
  lang: 'zh-CN',
  title: '山奈Galanga',
  description: '山奈Galanga是一个开源的JS函数库',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Galanga',
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/' },
      {
        text: '站点切换',
        items: [
          { text: '官方文档', link: 'https://galanga.censujiang.com' },
          { text: '中国镜像', link: 'https://galanga.censujiang.cn' },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/censujiang/galanga/edit/master/docs/:path',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/censujiang/galanga' },
    ],
    footer: {
      message: 'Released under Apache License 2.0',
      copyright: 'Copyright © 2014-' + now_year + ' CensuJiang All Rights Reserved.'
    }
  }
}