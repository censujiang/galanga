import{_ as a,c as s,o as l,d as e}from"./app.2d941dac.js";const D=JSON.parse('{"title":"URL","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"导入","slug":"导入","link":"#导入","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"获取URL的参数","slug":"获取url的参数","link":"#获取url的参数","children":[]},{"level":3,"title":"获取URL的hash","slug":"获取url的hash","link":"#获取url的hash","children":[]},{"level":3,"title":"获取URL的路径","slug":"获取url的路径","link":"#获取url的路径","children":[]}]}],"relativePath":"api/url.md","lastUpdated":null}'),n={name:"api/url.md"},t=e(`<h1 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-hidden="true">#</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h2><p>url 是一个用于处理 URL 的函数，它提供了一些方便的方法来处理 URL。</p><h2 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">galanga</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><h3 id="获取url的参数" tabindex="-1">获取URL的参数 <a class="header-anchor" href="#获取url的参数" aria-hidden="true">#</a></h3><p>获取 URL 参数的值，如果参数不存在，则返回 <code>null</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="获取url的hash" tabindex="-1">获取URL的hash <a class="header-anchor" href="#获取url的hash" aria-hidden="true">#</a></h3><p>获取 URL 的 hash 值，如果 hash 不存在，则返回 <code>null</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getHash</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="获取url的路径" tabindex="-1">获取URL的路径 <a class="header-anchor" href="#获取url的路径" aria-hidden="true">#</a></h3><p>获取 URL 的路径，如果路径不存在，则返回 <code>null</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPath</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,15),r=[t];function o(p,c,i,h,d,u){return l(),s("div",null,r)}const C=a(n,[["render",o]]);export{D as __pageData,C as default};