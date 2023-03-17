import{_ as a,o as s,c as o,N as e}from"./chunks/framework.b62a7fb5.js";const y=JSON.parse('{"title":"Cookie","description":"","frontmatter":{},"headers":[],"relativePath":"api/cookie.md","lastUpdated":1675424060000}'),l={name:"api/cookie.md"},n=e(`<h1 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>山奈提供了一些常用的 Cookie 操作函数，包括获取、设置、删除 Cookie 等。</p><h2 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;导入&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">localCookie</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">galanga</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="获取-cookie" tabindex="-1">获取 Cookie <a class="header-anchor" href="#获取-cookie" aria-label="Permalink to &quot;获取 Cookie&quot;">​</a></h3><p>获取 Cookie 的值，如果 Cookie 不存在，则返回 <code>null</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">localCookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="设置-cookie" tabindex="-1">设置 Cookie <a class="header-anchor" href="#设置-cookie" aria-label="Permalink to &quot;设置 Cookie&quot;">​</a></h3><p>设置 Cookie 的值，如果 Cookie 不存在，则创建 Cookie。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">localCookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="删除-cookie" tabindex="-1">删除 Cookie <a class="header-anchor" href="#删除-cookie" aria-label="Permalink to &quot;删除 Cookie&quot;">​</a></h3><p>删除 Cookie。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">localCookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="清空-cookie" tabindex="-1">清空 Cookie <a class="header-anchor" href="#清空-cookie" aria-label="Permalink to &quot;清空 Cookie&quot;">​</a></h3><p>清空所有 Cookie。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">localCookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,18),p=[n];function t(c,i,r,C,d,D){return s(),o("div",null,p)}const k=a(l,[["render",t]]);export{y as __pageData,k as default};
