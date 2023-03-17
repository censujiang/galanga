<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import censujiang_avatar from '/assets/img/censujiang.jpg'

const members = [
  {
    avatar: censujiang_avatar,
    name: '江程训',
    title: 'CTO',
    org: '山茨昕雨',
    orgLink: 'https://sancerain.com',
    desc:'Web前端/WordPress/开源爱好者',
    links: [
      { icon: 'github', link: 'https://github.com/censujiang' },
      { icon: 'twitter', link: 'https://twitter.com/censujiang' }
    ]
  },
]
</script>
# 入门

::: warning
本项目仍处于开发阶段，API可能会发生变化，请勿用于生产环境。
:::

## 项目简介

山奈/Galanga（以下简称山奈）是川菜中常用的调味品，也可以用作腌制成为单独的菜品，而这一辅料被人们俗称为姜。

在Web的世界里，它是一个开源的实用的JS函数库，它的目标是提供一些常用的函数，让你的代码更简洁更易读。我们希望利用姜来让您的代码更加美味，让您更加专注于业务逻辑的实现。

## 使用理由

相比其他的函数库，山奈希望提供在业务中常用的一些函数，而山奈也是基于TypeScript开发的，因此在使用时，您可以获得更好的类型提示。

## 开发人员

### 负责人
<VPTeamMembers size="small" :members="members" />

### 贡献者

在Github上查阅[贡献者列表](https://github.com/censujiang/galanga/graphs/contributors)，如果您也想对山奈做出贡献，请参考[贡献指南](./contribute.md)。

## 入群交流

为了方便各位开发者的交流，我们在各大平台都开设了有关山奈的交流群，欢迎大家加入。

- QQ：[346363551](https://qm.qq.com/cgi-bin/qm/qr?k=9xPnPcOCY91sV_KUY8bUqk7vZdcvraLs&jump_from=webapi&authKey=JvXfnEFumhWETjAPGWV1+qyIu3YeWuukTHTZGYDhGYpVzPwRrXZ2ZmuAn1ZNgS+k)

- 钉钉：[山奈Galanga开源JS函数库交流群](https://qr.dingtalk.com/action/joingroup?code=v1,k1,TC3pATGPSjAtf2QBQWmK5uR/gC++wInUgISCc4lQaLw=&_dt_no_comment=1&origin=11)

- Telegram：[@censujiang_group](https://t.me/censujiang_group)

- 微信：![微信群](/assets/img/group_wechat.jpg)