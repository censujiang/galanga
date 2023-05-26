import{_ as s,o as a,c as e,U as l}from"./chunks/framework.fd4dbc48.js";const C=JSON.parse('{"title":"Device","description":"","frontmatter":{},"headers":[],"relativePath":"api/device.md","lastUpdated":1685026711000}'),o={name:"api/device.md"},n=l(`<h1 id="device" tabindex="-1">Device <a class="header-anchor" href="#device" aria-label="Permalink to &quot;Device&quot;">​</a></h1><p>山奈提供了一些有关设备操作的API，可用来获取设备的信息，或者进行一些操作。</p><h2 id="checkdevicetype" tabindex="-1"><code>checkDeviceType()</code> <a class="header-anchor" href="#checkdevicetype" aria-label="Permalink to &quot;\`checkDeviceType()\`&quot;">​</a></h2><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>检查当前设备的各种类型，包括浏览器类型、设备类型、系统类型</p><h3 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;导入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">checkDeviceType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">galanga</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>输入的参数如下：</p><ul><li><p><code>type</code>：要检查的类型，此参数为一个数组，默认为<code>[&#39;browser&#39;, &#39;device&#39;, &#39;os&#39;, &#39;platform&#39;]</code>，可选值为<code>browser</code>、<code>device</code>、<code>os</code>、<code>platform</code>，分别表示浏览器类型、设备类型、系统类型、平台类型</p></li><li><p><code>return_string</code>：是否返回字符串，默认为<code>false</code>，如果为<code>true</code>并且数组的只有一个值，则返回字符串，否则返回一个对象</p></li></ul><p>默认情况下，返回的是一个对象，包含了浏览器类型、设备类型、系统类型，如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">browser</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chrome</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">device</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">windows</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">platform</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-rqpaM" id="tab-5DOFLw3" checked="checked"><label for="tab-5DOFLw3">按需引入</label><input type="radio" name="group-rqpaM" id="tab-0_AZiRz"><label for="tab-0_AZiRz">全局引入</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">checkDeviceType</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">galanga</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">checkDeviceType</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="clipboard" tabindex="-1"><code>clipboard</code> <a class="header-anchor" href="#clipboard" aria-label="Permalink to &quot;\`clipboard\`&quot;">​</a></h2><h3 id="介绍-1" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-1" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>一个用于读取和设置剪切板的函数组合，包含了<code>read</code>和<code>write</code>两个函数</p><h3 id="导入-1" tabindex="-1">导入 <a class="header-anchor" href="#导入-1" aria-label="Permalink to &quot;导入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">clipboard</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">galanga</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>一共有两个函数，分别是<code>read</code>和<code>write</code>，分别用于读取和设置剪切板</p><ul><li><p>[async]<code>read(onlyString)</code>：读取剪切板的内容，返回一个<code>Promise</code>，如果读取成功，则返回剪切板的内容，否则返回<code>null</code>。这个函数的参数如下</p><ul><li><code>onlyString</code>：是否只读取剪切板中的文本内容，默认为<code>true</code>，如果为<code>false</code>，则会读取剪切板中的所有内容，包括图片等</li></ul></li><li><p>[async]<code>write(text,onlyString)</code>：设置剪切板的内容，返回一个<code>Promise</code>，如果设置成功，则返回<code>true</code>，否则返回<code>false</code>。这个函数的参数如下</p><ul><li><p><code>text</code>：要设置的内容。</p></li><li><p><code>onlyString</code>：是否只设置文本内容，默认为<code>true</code>，如果为<code>false</code>，则可以设置任意内容</p></li></ul></li></ul><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-X5gfJ" id="tab-fHtkfjr" checked="checked"><label for="tab-fHtkfjr">按需引入</label><input type="radio" name="group-X5gfJ" id="tab-QX4lOYq"><label for="tab-QX4lOYq">全局引入</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">clipboard</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">clipboard</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(text))</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">galanga</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clipboard</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">galanga</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clipboard</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(text))</span></span>
<span class="line"></span></code></pre></div></div></div>`,22),p=[n];function c(t,r,i,d,y,D){return a(),e("div",null,p)}const A=s(o,[["render",c]]);export{C as __pageData,A as default};