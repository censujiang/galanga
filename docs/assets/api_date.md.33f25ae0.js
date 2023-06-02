import{_ as t,o as l,c as n,x as a,C as o,a as e,U as p,D as c}from"./chunks/framework.fd4dbc48.js";const k=JSON.parse('{"title":"Date","description":"","frontmatter":{},"headers":[],"relativePath":"api/date.md","lastUpdated":1685602191000}'),i={name:"api/date.md"},r=a("h1",{id:"date",tabindex:"-1"},[e("Date "),a("a",{class:"header-anchor",href:"#date","aria-label":'Permalink to "Date"'},"​")],-1),d=a("p",null,"山奈提供了一些时间处理的工具函数",-1),h={id:"aftertime",tabindex:"-1"},m=a("code",null,"afterTime",-1),y=a("a",{class:"header-anchor",href:"#aftertime","aria-label":'Permalink to "`afterTime`<Badge type="warning" text="beta" />"'},"​",-1),D=p(`<h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>输出当前时间之后的时间</p><h3 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;导入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">afterTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">galanga</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>输入参数如下：</p><ul><li>(必填)<code>time</code>：时间，可以是一个时间戳，也可以是一个时间字符串，也可以是一个 Date 对象</li><li><code>backType</code>：返回格式，可以是一个字符串，也可以是一个函数，如果是字符串，则返回一个时间字符串，如果是函数，则返回一个 Date 对象</li></ul><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-bPDXm" id="tab-26pk8HI" checked="checked"><label for="tab-26pk8HI">按需引入</label><input type="radio" name="group-bPDXm" id="tab-mqSS9lL"><label for="tab-mqSS9lL">全局引入</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">afterTime</span><span style="color:#A6ACCD;">(time</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> backType)</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">galanga</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">afterTime</span><span style="color:#A6ACCD;">(time</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> backType)</span></span>
<span class="line"></span></code></pre></div></div></div>`,8);function _(b,u,C,g,A,f){const s=c("Badge");return l(),n("div",null,[r,d,a("h2",h,[m,o(s,{type:"warning",text:"beta"}),e(),y]),D])}const v=t(i,[["render",_]]);export{k as __pageData,v as default};
