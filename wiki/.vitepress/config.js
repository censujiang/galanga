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
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-KDRRLCH82B' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-KDRRLCH82B');
    `]
  ],
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
        { text: '设备Device', link: '/api/device' },
        { text: '对象Object', link: '/api/object' },
      ]
    },
    editLink: {
      pattern: 'https://github.com/censujiang/galanga/edit/master/wiki/:path',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/censujiang/galanga' },
      {
        icon: {
          svg: '<svg t="1675442450278" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1945" width="24" height="24"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="1946"></path></svg>'
        },
        link: 'https://gitee.com/censujiang/galanga'
      },
    ],
    footer: {
      message: 'Released under Apache License 2.0 and package version ' + build_version,
      copyright: 'Copyright © 2014-' + now_year + ' CensuJiang All Rights Reserved.'
    }
  }
}