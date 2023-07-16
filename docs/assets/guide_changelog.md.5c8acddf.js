import{_ as e,o as a,c as l,U as o}from"./chunks/framework.fd4dbc48.js";const m=JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/changelog.md","lastUpdated":1689240258000}'),i={name:"guide/changelog.md"},c=o('<h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h1><h2 id="_0-2-2-2023-7-16" tabindex="-1">0.2.2 (2023-7-16) <a class="header-anchor" href="#_0-2-2-2023-7-16" aria-label="Permalink to &quot;0.2.2 (2023-7-16)&quot;">​</a></h2><ul><li>新增<code>formatPercent</code>函数，用于计算百分比，并保留小数输出，例如：<code>0.1</code> =&gt; <code>10.0%</code>。</li><li>新增<code>share</code>函数，用于调用系统分享功能。</li></ul><h2 id="_0-2-1-2023-7-13" tabindex="-1">0.2.1 (2023-7-13) <a class="header-anchor" href="#_0-2-1-2023-7-13" aria-label="Permalink to &quot;0.2.1 (2023-7-13)&quot;">​</a></h2><ul><li>新增<code>encode62</code>函数，用于将数字转换为62进制的字符串。</li><li>新增<code>decode62</code>函数，用于将62进制的字符串转换为数字。</li><li>新增<code>getFileNameFromURL</code>函数，用于从URL中获取文件名。</li><li>新增<code>getFileExtFromString</code>函数，用于从字符串中获取文件后缀名。</li><li>新增<code>spliceSiteTitle</code>函数，用于拼接网站标题。</li><li>新增<code>sleep</code>函数，用于延迟执行。</li></ul><h2 id="_0-2-0-2023-6-5" tabindex="-1">0.2.0 (2023-6-5) <a class="header-anchor" href="#_0-2-0-2023-6-5" aria-label="Permalink to &quot;0.2.0 (2023-6-5)&quot;">​</a></h2><ul><li><code>url.getPath</code>函数现在可以获取URL的完整路径了。</li></ul><h2 id="_0-1-9-2023-6-3" tabindex="-1">0.1.9 (2023-6-3) <a class="header-anchor" href="#_0-1-9-2023-6-3" aria-label="Permalink to &quot;0.1.9 (2023-6-3)&quot;">​</a></h2><ul><li>新增<code>getPreURL</code>函数，用于获取上一页的URL。</li></ul><h2 id="_0-1-8-2023-6-1" tabindex="-1">0.1.8 (2023-6-1) <a class="header-anchor" href="#_0-1-8-2023-6-1" aria-label="Permalink to &quot;0.1.8 (2023-6-1)&quot;">​</a></h2><ul><li>新增<code>afterTime</code>函数，用于获取当前时间之后的时间。</li><li>给<code>url</code>函数集合新增了<code>setHash</code>函数，用于设置URL的hash值。</li><li>给<code>url</code>函数集合新增了<code>setPath</code>函数，用于设置URL的路径。</li><li>给<code>url</code>函数集合新增了<code>setQuery</code>函数，用于设置URL的参数。</li><li>修复<code>localCookie</code>函数的bug，现在可以正常使用了。</li></ul><h2 id="_0-1-7-2023-5-27" tabindex="-1">0.1.7 (2023-5-27) <a class="header-anchor" href="#_0-1-7-2023-5-27" aria-label="Permalink to &quot;0.1.7 (2023-5-27)&quot;">​</a></h2><ul><li>修复了<code>checkDeviceType</code>函数的bug，现在可以正常使用了。</li><li>变更了<code>clipboard.write()</code>函数的参数，现在可以写入任意类型的数据了。</li></ul><h2 id="_0-1-6-2023-5-27" tabindex="-1">0.1.6 (2023-5-27) <a class="header-anchor" href="#_0-1-6-2023-5-27" aria-label="Permalink to &quot;0.1.6 (2023-5-27)&quot;">​</a></h2><ul><li>修复了<code>checkDeviceType</code>函数的bug，现在可以正常使用了。</li><li>新增了<code>shakeObject</code>函数，输入一个数组和要摇树的对象，返回的是这个数组中出现的元素组成的对象。</li></ul><h2 id="_0-1-5-2023-5-25" tabindex="-1">0.1.5 (2023-5-25) <a class="header-anchor" href="#_0-1-5-2023-5-25" aria-label="Permalink to &quot;0.1.5 (2023-5-25)&quot;">​</a></h2><ul><li>拓展了<code>formatNumber</code>函数，现在可以自定义保留小数位数了。</li><li>拓展了<code>clipboard</code>函数，现在可以读取和写入任意类型的数据了。</li><li>新增了<code>locationPermission</code>函数，用于处理浏览器定位权限。</li></ul><h2 id="_0-1-4-2023-5-18" tabindex="-1">0.1.4 (2023-5-18) <a class="header-anchor" href="#_0-1-4-2023-5-18" aria-label="Permalink to &quot;0.1.4 (2023-5-18)&quot;">​</a></h2><ul><li>新增<code>clipboard</code>函数，用于读取和设置剪贴板。</li></ul><h2 id="_0-1-3-2023-5-16" tabindex="-1">0.1.3 (2023-5-16) <a class="header-anchor" href="#_0-1-3-2023-5-16" aria-label="Permalink to &quot;0.1.3 (2023-5-16)&quot;">​</a></h2><ul><li>新增<code>formatNumber</code>函数，用于格式化数字，保留两位小数。</li></ul><h2 id="_0-1-2-2023-5-12" tabindex="-1">0.1.2 (2023-5-12) <a class="header-anchor" href="#_0-1-2-2023-5-12" aria-label="Permalink to &quot;0.1.2 (2023-5-12)&quot;">​</a></h2><ul><li>修复<code>checkNull</code>函数的bug，现在匹配到false的情况会返回false了。</li></ul><h2 id="_0-1-1-2023-5-12" tabindex="-1">0.1.1 (2023-5-12) <a class="header-anchor" href="#_0-1-1-2023-5-12" aria-label="Permalink to &quot;0.1.1 (2023-5-12)&quot;">​</a></h2><ul><li>修复<code>updateObjectFromImport</code>函数的bug，现在可以正常使用了。</li></ul><h2 id="_0-1-0-2023-5-11" tabindex="-1">0.1.0 (2023-5-11) <a class="header-anchor" href="#_0-1-0-2023-5-11" aria-label="Permalink to &quot;0.1.0 (2023-5-11)&quot;">​</a></h2><ul><li><p>项目推进至公测阶段，欢迎大家使用并提出宝贵的意见，不稳定的API会在文档内标注<code>beta</code>，同时也感谢我的同事们生产环境出问题的风险使用了山奈，用的很好，下次不准再用了.jpg（bushi）。</p></li><li><p>新增<code>notificationPermission</code>函数，用于处理浏览器通知权限。</p></li><li><p>新增<code>clipboardPermission</code>函数，用于处理浏览器剪贴板权限。</p></li></ul><h2 id="_0-0-27-2023-5-9" tabindex="-1">0.0.27 (2023-5-9) <a class="header-anchor" href="#_0-0-27-2023-5-9" aria-label="Permalink to &quot;0.0.27 (2023-5-9)&quot;">​</a></h2><ul><li>新增了<code>filterUniqueByProperty</code>函数，用于根据数组中对象的某个属性去重，将length大的数组保留，length小的数组去掉。</li></ul><h2 id="_0-0-26-2023-5-9" tabindex="-1">0.0.26 (2023-5-9) <a class="header-anchor" href="#_0-0-26-2023-5-9" aria-label="Permalink to &quot;0.0.26 (2023-5-9)&quot;">​</a></h2><ul><li>新增了<code>updateObjectFromImport</code>函数，用于将新的object中的值动态更新到原有的object中，并不影响原有object中的结构。</li></ul><h2 id="_0-0-25-2023-4-22" tabindex="-1">0.0.25 (2023-4-22) <a class="header-anchor" href="#_0-0-25-2023-4-22" aria-label="Permalink to &quot;0.0.25 (2023-4-22)&quot;">​</a></h2><ul><li><code>checkNull</code>和<code>checkNotNull</code>函数现在可以检查数字类型的参数是否为NaN了。</li></ul><h2 id="_0-0-24-2023-4-18" tabindex="-1">0.0.24 (2023-4-18) <a class="header-anchor" href="#_0-0-24-2023-4-18" aria-label="Permalink to &quot;0.0.24 (2023-4-18)&quot;">​</a></h2><ul><li>新增了 <code>checkNotNull</code> 函数，用于检查字符串是否不为空，此函数会反义 <code>checkNull</code> 函数，方便使用。</li></ul><h2 id="_0-0-23-2023-4-15" tabindex="-1">0.0.23 (2023-4-15) <a class="header-anchor" href="#_0-0-23-2023-4-15" aria-label="Permalink to &quot;0.0.23 (2023-4-15)&quot;">​</a></h2><ul><li>对函数<code>checkDeviceType</code>进行了优化，现在可以更好的检测设备类型</li></ul><h2 id="_0-0-22-2023-4-7" tabindex="-1">0.0.22 (2023-4-7) <a class="header-anchor" href="#_0-0-22-2023-4-7" aria-label="Permalink to &quot;0.0.22 (2023-4-7)&quot;">​</a></h2><ul><li>新增了 <code>checkDeviceType</code> 函数，用于检查设备类型，此函数不稳定，可能会在后续版本中修改</li></ul><h2 id="_0-0-21-2023-3-22" tabindex="-1">0.0.21 (2023-3-22) <a class="header-anchor" href="#_0-0-21-2023-3-22" aria-label="Permalink to &quot;0.0.21 (2023-3-22)&quot;">​</a></h2><ul><li>新增了 <code>checkEmail</code> 函数，用于检查邮箱格式</li></ul><h2 id="_0-0-20-2023-3-19" tabindex="-1">0.0.20 (2023-3-19) <a class="header-anchor" href="#_0-0-20-2023-3-19" aria-label="Permalink to &quot;0.0.20 (2023-3-19)&quot;">​</a></h2><ul><li>新增了 <code>checkPassword</code> 函数，用于检查密码强度</li></ul><h2 id="_0-0-19-2023-3-19" tabindex="-1">0.0.19 (2023-3-19) <a class="header-anchor" href="#_0-0-19-2023-3-19" aria-label="Permalink to &quot;0.0.19 (2023-3-19)&quot;">​</a></h2><ul><li>修复了 <code>formatBytes</code> 函数的两个bug</li></ul><h2 id="_0-0-1-2023-2-1" tabindex="-1">0.0.1 (2023-2-1) <a class="header-anchor" href="#_0-0-1-2023-2-1" aria-label="Permalink to &quot;0.0.1 (2023-2-1)&quot;">​</a></h2><ul><li>项目发布测试版本</li></ul>',47),d=[c];function r(t,h,u,n,s,_){return a(),l("div",null,d)}const q=e(i,[["render",r]]);export{m as __pageData,q as default};
