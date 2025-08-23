<template><div><h1 id="npm-包推荐与包管理工具" tabindex="-1"><a class="header-anchor" href="#npm-包推荐与包管理工具"><span>NPM 包推荐与包管理工具</span></a></h1>
<h2 id="包管理工具说明" tabindex="-1"><a class="header-anchor" href="#包管理工具说明"><span>包管理工具说明</span></a></h2>
<h3 id="工具关系图解" tabindex="-1"><a class="header-anchor" href="#工具关系图解"><span>工具关系图解</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>Node.js (运行环境)</span></span>
<span class="line"><span>    ├── npm (默认包管理器)</span></span>
<span class="line"><span>    │   ├── npx (npm 5.2+ 内置的包执行工具)</span></span>
<span class="line"><span>    │   ├── cnpm (淘宝 npm 镜像)</span></span>
<span class="line"><span>    │   └── yarn (Facebook 推出的替代方案)</span></span>
<span class="line"><span>    └── pnpm (高性能包管理器)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nvm/fnm (Node 版本管理器)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="各工具详解" tabindex="-1"><a class="header-anchor" href="#各工具详解"><span>各工具详解</span></a></h3>
<Tabs id="14" :data='[{"id":"npm"},{"id":"pnpm"},{"id":"yarn"},{"id":"cnpm"},{"id":"npx"},{"id":"nvm"},{"id":"fnm"}]' :active="0">
<template #title0="{ value, isActive }">npm</template><template #title1="{ value, isActive }">pnpm</template><template #title2="{ value, isActive }">yarn</template><template #title3="{ value, isActive }">cnpm</template><template #title4="{ value, isActive }">npx</template><template #title5="{ value, isActive }">nvm</template><template #title6="{ value, isActive }">fnm</template><template #tab0="{ value, isActive }"><p><strong>npm (Node Package Manager)</strong></p>
<ul>
<li>Node.js 官方默认的包管理器</li>
<li>安装 Node.js 时自动安装</li>
<li>管理项目依赖、发布包到 npm registry</li>
</ul>
<p><strong>安装方式</strong>：</p>
<ul>
<li>随 Node.js 自动安装</li>
</ul>
<p><strong>常用命令</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        # 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 安装开发依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 全局安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> uninstall</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     # 卸载依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            # 更新依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 脚本名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        # 运行脚本</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><p><strong>pnpm (Performant npm)</strong></p>
<ul>
<li>高性能的包管理器，节省磁盘空间</li>
<li>使用硬链接和符号链接，避免重复安装</li>
<li>速度更快，严格的依赖管理</li>
<li>支持 workspace 工作区</li>
</ul>
<p><strong>安装方式</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pnpm</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或使用 corepack</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">corepack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">corepack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pnpm@latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用命令</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">          # 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      # 安装开发依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      # 全局安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       # 卸载依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">           # 更新依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 脚本名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       # 运行脚本</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab2="{ value, isActive }"><p><strong>Yarn</strong></p>
<ul>
<li>Facebook 开发的包管理器</li>
<li>并行安装，速度快</li>
<li>离线模式，锁文件机制</li>
<li>支持 workspace 工作区</li>
</ul>
<p><strong>安装方式</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yarn</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或使用 corepack</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">corepack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">corepack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yarn@stable</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用命令</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">          # 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      # 安装开发依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> global</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   # 全局安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       # 卸载依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> upgrade</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">          # 更新依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 脚本名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">           # 运行脚本</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab3="{ value, isActive }"><p><strong>cnpm (淘宝 NPM 镜像)</strong></p>
<ul>
<li>淘宝提供的 npm 镜像源</li>
<li>解决国内访问 npm 官方源速度慢的问题</li>
<li>完全兼容 npm 命令</li>
<li>每 10 分钟同步一次官方源</li>
</ul>
<p><strong>安装方式</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cnpm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --registry=https://registry.npmmirror.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>常用命令</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      # 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 安装开发依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 全局安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sync</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 包名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        # 同步模块</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>替代方案</strong>：
也可以直接配置 npm 使用淘宝镜像：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> config</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> registry</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://registry.npmmirror.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab4="{ value, isActive }"><p><strong>npx</strong></p>
<ul>
<li>npm 5.2+ 自带的包执行工具</li>
<li>无需全局安装即可执行包</li>
<li>自动使用最新版本</li>
<li>临时安装，使用后自动清理</li>
</ul>
<p><strong>常用场景</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 创建项目</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create-react-app</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-app</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create-vue@latest</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nuxi@latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 执行工具</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> prettier</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --write</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> npm-check-updates</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab5="{ value, isActive }"><p><strong>nvm (Node Version Manager)</strong></p>
<ul>
<li>Node.js 版本管理工具</li>
<li>可以安装和切换多个 Node 版本</li>
<li>macOS/Linux 使用 nvm</li>
<li>Windows 使用 nvm-windows</li>
</ul>
<p><strong>安装方式</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># macOS/Linux</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Windows</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 下载 nvm-windows 安装包</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用命令</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nvm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 18.17.0</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   # 安装指定版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nvm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 18.17.0</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       # 切换版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nvm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> list</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">              # 查看已安装版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nvm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> alias</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> default</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 18</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 设置默认版本</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab6="{ value, isActive }"><p><strong>fnm (Fast Node Manager)</strong></p>
<ul>
<li>更快的 Node 版本管理器</li>
<li>Rust 编写，跨平台</li>
<li>比 nvm 更快</li>
<li>支持 .node-version 文件</li>
</ul>
<p><strong>安装方式</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># macOS/Linux</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://fnm.vercel.app/install</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Windows</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">winget</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Schniz.fnm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用命令</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">fnm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 18.17.0</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   # 安装指定版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">fnm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 18.17.0</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       # 切换版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">fnm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> list</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">              # 查看已安装版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">fnm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> default</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 18.17.0</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   # 设置默认版本</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></Tabs><h3 id="性能对比" tabindex="-1"><a class="header-anchor" href="#性能对比"><span>性能对比</span></a></h3>
<h4 id="速度对比" tabindex="-1"><a class="header-anchor" href="#速度对比"><span>速度对比</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>pnpm > yarn > npm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="磁盘空间" tabindex="-1"><a class="header-anchor" href="#磁盘空间"><span>磁盘空间</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>pnpm (最省) > yarn > npm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议"><span>使用建议</span></a></h3>
<ul>
<li><strong>推荐首选</strong>：pnpm（速度快、节省空间、严格依赖管理）</li>
</ul>
<h4 id="安装命令对比" tabindex="-1"><a class="header-anchor" href="#安装命令对比"><span>安装命令对比</span></a></h4>
<table>
<thead>
<tr>
<th>操作</th>
<th>npm</th>
<th>pnpm</th>
<th>yarn</th>
<th>cnpm</th>
</tr>
</thead>
<tbody>
<tr>
<td>安装依赖</td>
<td><code v-pre>npm install 包名</code></td>
<td><code v-pre>pnpm add 包名</code></td>
<td><code v-pre>yarn add 包名</code></td>
<td><code v-pre>cnpm install 包名</code></td>
</tr>
<tr>
<td>开发依赖</td>
<td><code v-pre>npm install -D 包名</code></td>
<td><code v-pre>pnpm add -D 包名</code></td>
<td><code v-pre>yarn add -D 包名</code></td>
<td><code v-pre>cnpm install -D 包名</code></td>
</tr>
<tr>
<td>全局安装</td>
<td><code v-pre>npm install -g 包名</code></td>
<td><code v-pre>pnpm add -g 包名</code></td>
<td><code v-pre>yarn global add 包名</code></td>
<td><code v-pre>cnpm install -g 包名</code></td>
</tr>
<tr>
<td>卸载依赖</td>
<td><code v-pre>npm uninstall 包名</code></td>
<td><code v-pre>pnpm remove 包名</code></td>
<td><code v-pre>yarn remove 包名</code></td>
<td><code v-pre>cnpm uninstall 包名</code></td>
</tr>
<tr>
<td>更新依赖</td>
<td><code v-pre>npm update</code></td>
<td><code v-pre>pnpm update</code></td>
<td><code v-pre>yarn upgrade</code></td>
<td><code v-pre>cnpm update</code></td>
</tr>
<tr>
<td>运行脚本</td>
<td><code v-pre>npm run 脚本</code></td>
<td><code v-pre>pnpm run 脚本</code></td>
<td><code v-pre>yarn 脚本</code></td>
<td><code v-pre>cnpm run 脚本</code></td>
</tr>
</tbody>
</table>
<h4 id="常见问题解决" tabindex="-1"><a class="header-anchor" href="#常见问题解决"><span>常见问题解决</span></a></h4>
<p><strong>镜像源配置</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看当前镜像源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> config</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> registry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 设置淘宝镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> config</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> registry</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://registry.npmmirror.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 恢复官方镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> config</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> registry</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://registry.npmjs.org</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缓存清理</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># npm 清理缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># pnpm 清理缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> store</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> prune</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># yarn 清理缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>版本锁定</strong></p>
<ul>
<li>npm: <code v-pre>package-lock.json</code></li>
<li>pnpm: <code v-pre>pnpm-lock.yaml</code></li>
<li>yarn: <code v-pre>yarn.lock</code></li>
</ul>
<p>建议将锁文件提交到版本控制系统，确保团队成员使用相同版本的依赖。</p>
<hr>
<h2 id="实用工具库" tabindex="-1"><a class="header-anchor" href="#实用工具库"><span>实用工具库</span></a></h2>
<h3 id="日期时间处理" tabindex="-1"><a class="header-anchor" href="#日期时间处理"><span>日期时间处理</span></a></h3>
<h4 id="vue-全家桶" tabindex="-1"><a class="header-anchor" href="#vue-全家桶"><span>Vue 全家桶</span></a></h4>
<ul>
<li><strong>vue</strong> + <strong>vue-router</strong> - Vue3 核心框架和路由</li>
<li><strong>pinia</strong> - 状态管理（Vue 官方推荐）</li>
<li><strong>@vueuse/core</strong> - Vue 组合式 API 工具集</li>
</ul>
<h4 id="ui-框架" tabindex="-1"><a class="header-anchor" href="#ui-框架"><span>UI 框架</span></a></h4>
<ul>
<li><strong>vant</strong> - 移动端组件库，适合移动端项目</li>
<li><strong>@vant/auto-import-resolver</strong> - Vant 组件自动导入</li>
</ul>
<h4 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求"><span>网络请求</span></a></h4>
<ul>
<li><strong>axios</strong> - HTTP 客户端</li>
<li><strong>vue-request</strong> - Vue 请求库，支持 SWR 缓存策略</li>
</ul>
<h3 id="样式与构建" tabindex="-1"><a class="header-anchor" href="#样式与构建"><span>样式与构建</span></a></h3>
<h4 id="css-方案" tabindex="-1"><a class="header-anchor" href="#css-方案"><span>CSS 方案</span></a></h4>
<ul>
<li><strong>unocss</strong> - 原子化 CSS 引擎
<ul>
<li><strong>@unocss/preset-uno</strong> - 默认预设</li>
<li><strong>@unocss/preset-attributify</strong> - 属性化模式</li>
<li><strong>@unocss/preset-icons</strong> - 纯 CSS 图标</li>
</ul>
</li>
<li><strong>postcss-mobile-forever</strong> - 移动端适配方案
<ul>
<li>自动将 px 转换为 vw/rem，实现移动端响应式布局</li>
<li>支持设置设计稿宽度（如 375px、750px）</li>
<li>可配置忽略某些属性或文件</li>
<li>比 postcss-px-to-viewport 功能更强大</li>
</ul>
</li>
<li><strong>sass</strong> - CSS 预处理器</li>
</ul>
<h4 id="构建优化" tabindex="-1"><a class="header-anchor" href="#构建优化"><span>构建优化</span></a></h4>
<ul>
<li><strong>vite</strong> + <strong>@vitejs/plugin-vue</strong> - 构建工具和 Vue 插件</li>
<li><strong>@vitejs/plugin-legacy</strong> - 打包兼容低版本浏览器</li>
<li><strong>vite-plugin-compression</strong> - gzip 压缩</li>
<li><strong>vite-plugin-imagemin</strong> - 图片压缩优化(有点慢,每次打包都会执行,推荐 tinypng 压缩图片)</li>
</ul>
<!-- - **vite-plugin-pages** - 文件路由自动生成 -->
<ul>
<li><strong>rollup-plugin-visualizer</strong> - 打包体积分析</li>
</ul>
<h3 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具"><span>开发工具</span></a></h3>
<h4 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范"><span>代码规范</span></a></h4>
<ul>
<li><strong>eslint</strong> + <strong>vue-eslint-parser</strong> - 代码检查</li>
<li><strong>prettier</strong> - 代码格式化</li>
<li><strong>stylelint</strong> + <strong>vite-plugin-stylelint</strong> - 样式检查</li>
<li><strong>@stylistic/eslint-plugin</strong> - ESLint 样式规则</li>
</ul>
<h4 id="自动导入" tabindex="-1"><a class="header-anchor" href="#自动导入"><span>自动导入</span></a></h4>
<ul>
<li><strong>unplugin-auto-import</strong> - API 自动导入(配置后,vue,router,pinia,自己的文件的方法都可以自动导入)</li>
<li><strong>unplugin-vue-components</strong> - 组件自动导入</li>
</ul>
<h3 id="工具库" tabindex="-1"><a class="header-anchor" href="#工具库"><span>工具库</span></a></h3>
<h4 id="常用工具" tabindex="-1"><a class="header-anchor" href="#常用工具"><span>常用工具</span></a></h4>
<ul>
<li><strong>dayjs</strong> - 日期处理（轻量级）</li>
<li><strong>crypto-js</strong> - 加密算法库</li>
<li><strong>qrcode</strong> - 二维码生成</li>
</ul>
<h4 id="图片处理" tabindex="-1"><a class="header-anchor" href="#图片处理"><span>图片处理</span></a></h4>
<ul>
<li><strong>sharp</strong> - 高性能图片处理</li>
<li><strong>imagemin</strong> + <strong>imagemin-svgo</strong> - 图片压缩</li>
</ul>
<h4 id="文件处理" tabindex="-1"><a class="header-anchor" href="#文件处理"><span>文件处理</span></a></h4>
<ul>
<li><strong>archiver</strong> - 文件压缩打包
<ul>
<li>支持创建 zip、tar 等格式的压缩包</li>
<li>可用于打包项目文件、生成下载包</li>
<li>支持流式处理，适合大文件</li>
<li>常用于自动化构建中生成发布包</li>
</ul>
</li>
<li><strong>fs-extra</strong> - 增强版文件系统操作</li>
</ul>
<h3 id="推荐理由" tabindex="-1"><a class="header-anchor" href="#推荐理由"><span>推荐理由</span></a></h3>
<ol>
<li><strong>构建速度快</strong> - Vite + pnpm 组合，开发体验极佳</li>
<li><strong>移动端友好</strong> - Vant UI + postcss-mobile-forever 完美适配</li>
<li><strong>开发效率高</strong> - 自动导入 + 文件路由，减少样板代码</li>
<li><strong>性能优化</strong> - 图片压缩、gzip、打包分析一应俱全</li>
<li><strong>代码质量</strong> - ESLint + Prettier + Stylelint 三重保障</li>
</ol>
<h3 id="核心依赖" tabindex="-1"><a class="header-anchor" href="#核心依赖"><span>核心依赖</span></a></h3>
<h4 id="dayjs" tabindex="-1"><a class="header-anchor" href="#dayjs"><span>dayjs</span></a></h4>
<p>轻量级日期库，仅 2KB，Moment.js 替代品</p>
<NpmBadgeGroup repo="iamkun/dayjs">
  <NpmBadge name="dayjs" type="version" />
  <NpmBadge name="dayjs" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dayjs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="date-fns" tabindex="-1"><a class="header-anchor" href="#date-fns"><span>date-fns</span></a></h4>
<p>模块化日期工具库，tree-shaking 友好</p>
<NpmBadgeGroup repo="date-fns/date-fns">
  <NpmBadge name="date-fns" type="version" />
  <NpmBadge name="date-fns" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> date-fns</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="moment" tabindex="-1"><a class="header-anchor" href="#moment"><span>moment</span></a></h4>
<p>功能强大但体积较大（不推荐新项目）</p>
<NpmBadgeGroup repo="moment/moment">
  <NpmBadge name="moment" type="version" />
  <NpmBadge name="moment" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> moment</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="工具函数库" tabindex="-1"><a class="header-anchor" href="#工具函数库"><span>工具函数库</span></a></h3>
<h4 id="radash" tabindex="-1"><a class="header-anchor" href="#radash"><span>radash</span></a></h4>
<p>现代化工具库，lodash 替代品</p>
<NpmBadgeGroup repo="sodiray/radash">
  <NpmBadge name="radash" type="version" />
  <NpmBadge name="radash" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> radash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="lodash" tabindex="-1"><a class="header-anchor" href="#lodash"><span>lodash</span></a></h4>
<p>经典工具函数库</p>
<NpmBadgeGroup repo="lodash/lodash">
  <NpmBadge name="lodash" type="version" />
  <NpmBadge name="lodash" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lodash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="ramda" tabindex="-1"><a class="header-anchor" href="#ramda"><span>ramda</span></a></h4>
<p>函数式编程工具库</p>
<NpmBadgeGroup repo="ramda/ramda">
  <NpmBadge name="ramda" type="version" />
  <NpmBadge name="ramda" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ramda</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="动画库" tabindex="-1"><a class="header-anchor" href="#动画库"><span>动画库</span></a></h3>
<h4 id="lottie-web" tabindex="-1"><a class="header-anchor" href="#lottie-web"><span>lottie-web</span></a></h4>
<p>Airbnb 动画库，支持 AE 导出</p>
<NpmBadgeGroup repo="airbnb/lottie-web">
  <NpmBadge name="lottie-web" type="version" />
  <NpmBadge name="lottie-web" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lottie-web</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="framer-motion" tabindex="-1"><a class="header-anchor" href="#framer-motion"><span>framer-motion</span></a></h4>
<p>React 动画库</p>
<NpmBadgeGroup repo="framer/motion">
  <NpmBadge name="framer-motion" type="version" />
  <NpmBadge name="framer-motion" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> framer-motion</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="auto-animate" tabindex="-1"><a class="header-anchor" href="#auto-animate"><span>auto-animate</span></a></h4>
<p>自动动画库</p>
<NpmBadgeGroup repo="formkit/auto-animate">
  <NpmBadge name="@formkit/auto-animate" type="version" />
  <NpmBadge name="@formkit/auto-animate" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @formkit/auto-animate</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="拖拽排序" tabindex="-1"><a class="header-anchor" href="#拖拽排序"><span>拖拽排序</span></a></h3>
<h4 id="formkit-drag-and-drop" tabindex="-1"><a class="header-anchor" href="#formkit-drag-and-drop"><span>@formkit/drag-and-drop</span></a></h4>
<p>轻量级拖拽库，4KB</p>
<NpmBadgeGroup repo="formkit/drag-and-drop">
  <NpmBadge name="@formkit/drag-and-drop" type="version" />
  <NpmBadge name="@formkit/drag-and-drop" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @formkit/drag-and-drop</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="sortablejs" tabindex="-1"><a class="header-anchor" href="#sortablejs"><span>sortablejs</span></a></h4>
<p>强大的拖拽排序库</p>
<NpmBadgeGroup repo="SortableJS/Sortable">
  <NpmBadge name="sortablejs" type="version" />
  <NpmBadge name="sortablejs" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sortablejs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="react-beautiful-dnd" tabindex="-1"><a class="header-anchor" href="#react-beautiful-dnd"><span>react-beautiful-dnd</span></a></h4>
<p>React 拖拽库</p>
<NpmBadgeGroup repo="atlassian/react-beautiful-dnd">
  <NpmBadge name="react-beautiful-dnd" type="version" />
  <NpmBadge name="react-beautiful-dnd" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> react-beautiful-dnd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="用户引导" tabindex="-1"><a class="header-anchor" href="#用户引导"><span>用户引导</span></a></h3>
<h4 id="driver-js" tabindex="-1"><a class="header-anchor" href="#driver-js"><span>driver.js</span></a></h4>
<p>轻量级页面引导，5KB</p>
<NpmBadgeGroup repo="kamranahmedse/driver.js">
  <NpmBadge name="driver.js" type="version" />
  <NpmBadge name="driver.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> driver.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="intro-js" tabindex="-1"><a class="header-anchor" href="#intro-js"><span>intro.js</span></a></h4>
<p>新手引导库</p>
<NpmBadgeGroup repo="usablica/intro.js">
  <NpmBadge name="intro.js" type="version" />
  <NpmBadge name="intro.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> intro.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="shepherd-js" tabindex="-1"><a class="header-anchor" href="#shepherd-js"><span>shepherd.js</span></a></h4>
<p>用户引导库</p>
<NpmBadgeGroup repo="shipshapecode/shepherd">
  <NpmBadge name="shepherd.js" type="version" />
  <NpmBadge name="shepherd.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> shepherd.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="图表可视化" tabindex="-1"><a class="header-anchor" href="#图表可视化"><span>图表可视化</span></a></h3>
<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>echarts</span></a></h4>
<p>Apache ECharts 图表库</p>
<NpmBadgeGroup repo="apache/echarts">
  <NpmBadge name="echarts" type="version" />
  <NpmBadge name="echarts" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> echarts</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="chart-js" tabindex="-1"><a class="header-anchor" href="#chart-js"><span>chart.js</span></a></h4>
<p>简单易用的图表库</p>
<NpmBadgeGroup repo="chartjs/Chart.js">
  <NpmBadge name="chart.js" type="version" />
  <NpmBadge name="chart.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> chart.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="d3" tabindex="-1"><a class="header-anchor" href="#d3"><span>d3</span></a></h4>
<p>数据驱动的可视化库</p>
<NpmBadgeGroup repo="d3/d3">
  <NpmBadge name="d3" type="version" />
  <NpmBadge name="d3" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> d3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="流程图-图编辑" tabindex="-1"><a class="header-anchor" href="#流程图-图编辑"><span>流程图/图编辑</span></a></h3>
<h4 id="logicflow" tabindex="-1"><a class="header-anchor" href="#logicflow"><span>logicflow</span></a></h4>
<p>滴滴流程图框架</p>
<NpmBadgeGroup repo="didi/LogicFlow">
  <NpmBadge name="@logicflow/core" type="version" />
  <NpmBadge name="@logicflow/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @logicflow/core</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="x6" tabindex="-1"><a class="header-anchor" href="#x6"><span>x6</span></a></h4>
<p>AntV 图编辑引擎</p>
<NpmBadgeGroup repo="antvis/X6">
  <NpmBadge name="@antv/x6" type="version" />
  <NpmBadge name="@antv/x6" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @antv/x6</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="reactflow" tabindex="-1"><a class="header-anchor" href="#reactflow"><span>reactflow</span></a></h4>
<p>React 流程图库</p>
<NpmBadgeGroup repo="xyflow/xyflow">
  <NpmBadge name="reactflow" type="version" />
  <NpmBadge name="reactflow" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reactflow</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="进度条" tabindex="-1"><a class="header-anchor" href="#进度条"><span>进度条</span></a></h3>
<h4 id="progressbar-js" tabindex="-1"><a class="header-anchor" href="#progressbar-js"><span>progressbar.js</span></a></h4>
<p>响应式进度条</p>
<NpmBadgeGroup repo="kimmobrunfeldt/progressbar.js">
  <NpmBadge name="progressbar.js" type="version" />
  <NpmBadge name="progressbar.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> progressbar.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="nprogress" tabindex="-1"><a class="header-anchor" href="#nprogress"><span>nprogress</span></a></h4>
<p>页面加载进度条</p>
<NpmBadgeGroup repo="rstacruz/nprogress">
  <NpmBadge name="nprogress" type="version" />
  <NpmBadge name="nprogress" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nprogress</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="文字识别-ocr" tabindex="-1"><a class="header-anchor" href="#文字识别-ocr"><span>文字识别 (OCR)</span></a></h3>
<h4 id="tesseract-js" tabindex="-1"><a class="header-anchor" href="#tesseract-js"><span>tesseract.js</span></a></h4>
<p>支持 100+ 语言的 OCR 库</p>
<NpmBadgeGroup repo="naptha/tesseract.js">
  <NpmBadge name="tesseract.js" type="version" />
  <NpmBadge name="tesseract.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tesseract.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="安全相关" tabindex="-1"><a class="header-anchor" href="#安全相关"><span>安全相关</span></a></h3>
<h4 id="zxcvbn" tabindex="-1"><a class="header-anchor" href="#zxcvbn"><span>zxcvbn</span></a></h4>
<p>密码强度估算器</p>
<NpmBadgeGroup repo="zxcvbn-ts/zxcvbn">
  <NpmBadge name="@zxcvbn-ts/core" type="version" />
  <NpmBadge name="@zxcvbn-ts/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @zxcvbn-ts/core</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="crypto-js" tabindex="-1"><a class="header-anchor" href="#crypto-js"><span>crypto-js</span></a></h4>
<p>加密算法库</p>
<NpmBadgeGroup repo="brix/crypto-js">
  <NpmBadge name="crypto-js" type="version" />
  <NpmBadge name="crypto-js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> crypto-js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid"><span>uuid</span></a></h4>
<p>UUID 生成器</p>
<NpmBadgeGroup repo="uuidjs/uuid">
  <NpmBadge name="uuid" type="version" />
  <NpmBadge name="uuid" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> uuid</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="前端监控" tabindex="-1"><a class="header-anchor" href="#前端监控"><span>前端监控</span></a></h3>
<h4 id="sunshine-track" tabindex="-1"><a class="header-anchor" href="#sunshine-track"><span>sunshine-track</span></a></h4>
<p>前端监控 SDK</p>
<NpmBadgeGroup repo="sanxin-lin/sunshine-track">
  <NpmBadge name="sunshine-track" type="version" />
  <NpmBadge name="sunshine-track" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sunshine-track</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="sentry-browser" tabindex="-1"><a class="header-anchor" href="#sentry-browser"><span>@sentry/browser</span></a></h4>
<p>Sentry 错误监控</p>
<NpmBadgeGroup repo="getsentry/sentry-javascript">
  <NpmBadge name="@sentry/browser" type="version" />
  <NpmBadge name="@sentry/browser" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @sentry/browser</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="http-请求" tabindex="-1"><a class="header-anchor" href="#http-请求"><span>HTTP 请求</span></a></h3>
<h4 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>axios</span></a></h4>
<p>流行的 HTTP 客户端</p>
<NpmBadgeGroup repo="axios/axios">
  <NpmBadge name="axios" type="version" />
  <NpmBadge name="axios" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> axios</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="ky" tabindex="-1"><a class="header-anchor" href="#ky"><span>ky</span></a></h4>
<p>现代化 fetch 封装</p>
<NpmBadgeGroup repo="sindresorhus/ky">
  <NpmBadge name="ky" type="version" />
  <NpmBadge name="ky" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ky</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="got" tabindex="-1"><a class="header-anchor" href="#got"><span>got</span></a></h4>
<p>Node.js HTTP 库</p>
<NpmBadgeGroup repo="sindresorhus/got">
  <NpmBadge name="got" type="version" />
  <NpmBadge name="got" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> got</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="表单验证" tabindex="-1"><a class="header-anchor" href="#表单验证"><span>表单验证</span></a></h3>
<h4 id="yup" tabindex="-1"><a class="header-anchor" href="#yup"><span>yup</span></a></h4>
<p>Schema 验证库</p>
<NpmBadgeGroup repo="jquense/yup">
  <NpmBadge name="yup" type="version" />
  <NpmBadge name="yup" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yup</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="zod" tabindex="-1"><a class="header-anchor" href="#zod"><span>zod</span></a></h4>
<p>TypeScript 优先的验证库</p>
<NpmBadgeGroup repo="colinhacks/zod">
  <NpmBadge name="zod" type="version" />
  <NpmBadge name="zod" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zod</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="joi" tabindex="-1"><a class="header-anchor" href="#joi"><span>joi</span></a></h4>
<p>强大的验证库</p>
<NpmBadgeGroup repo="sideway/joi">
  <NpmBadge name="joi" type="version" />
  <NpmBadge name="joi" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> joi</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理"><span>状态管理</span></a></h3>
<h4 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia"><span>pinia</span></a></h4>
<p>Vue 官方推荐状态管理</p>
<NpmBadgeGroup repo="vuejs/pinia">
  <NpmBadge name="pinia" type="version" />
  <NpmBadge name="pinia" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pinia</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="zustand" tabindex="-1"><a class="header-anchor" href="#zustand"><span>zustand</span></a></h4>
<p>轻量级状态管理</p>
<NpmBadgeGroup repo="pmndrs/zustand">
  <NpmBadge name="zustand" type="version" />
  <NpmBadge name="zustand" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zustand</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="mobx" tabindex="-1"><a class="header-anchor" href="#mobx"><span>mobx</span></a></h4>
<p>响应式状态管理</p>
<NpmBadgeGroup repo="mobxjs/mobx">
  <NpmBadge name="mobx" type="version" />
  <NpmBadge name="mobx" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mobx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="redux-toolkit" tabindex="-1"><a class="header-anchor" href="#redux-toolkit"><span>redux-toolkit</span></a></h4>
<p>Redux 官方工具集</p>
<NpmBadgeGroup repo="reduxjs/redux-toolkit">
  <NpmBadge name="@reduxjs/toolkit" type="version" />
  <NpmBadge name="@reduxjs/toolkit" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @reduxjs/toolkit</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="样式处理" tabindex="-1"><a class="header-anchor" href="#样式处理"><span>样式处理</span></a></h3>
<h4 id="clsx" tabindex="-1"><a class="header-anchor" href="#clsx"><span>clsx</span></a></h4>
<p>轻量级类名工具</p>
<NpmBadgeGroup repo="lukeed/clsx">
  <NpmBadge name="clsx" type="version" />
  <NpmBadge name="clsx" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clsx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="classnames" tabindex="-1"><a class="header-anchor" href="#classnames"><span>classnames</span></a></h4>
<p>条件类名工具</p>
<NpmBadgeGroup repo="JedWatson/classnames">
  <NpmBadge name="classnames" type="version" />
  <NpmBadge name="classnames" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> classnames</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="styled-components" tabindex="-1"><a class="header-anchor" href="#styled-components"><span>styled-components</span></a></h4>
<p>CSS-in-JS</p>
<NpmBadgeGroup repo="styled-components/styled-components">
  <NpmBadge name="styled-components" type="version" />
  <NpmBadge name="styled-components" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> styled-components</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="文件处理-1" tabindex="-1"><a class="header-anchor" href="#文件处理-1"><span>文件处理</span></a></h3>
<h4 id="file-saver" tabindex="-1"><a class="header-anchor" href="#file-saver"><span>file-saver</span></a></h4>
<p>文件保存</p>
<NpmBadgeGroup repo="eligrey/FileSaver.js">
  <NpmBadge name="file-saver" type="version" />
  <NpmBadge name="file-saver" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> file-saver</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="xlsx" tabindex="-1"><a class="header-anchor" href="#xlsx"><span>xlsx</span></a></h4>
<p>Excel 文件处理</p>
<NpmBadgeGroup repo="SheetJS/sheetjs">
  <NpmBadge name="xlsx" type="version" />
  <NpmBadge name="xlsx" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> xlsx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="pdf-lib" tabindex="-1"><a class="header-anchor" href="#pdf-lib"><span>pdf-lib</span></a></h4>
<p>PDF 创建和修改</p>
<NpmBadgeGroup repo="Hopding/pdf-lib">
  <NpmBadge name="pdf-lib" type="version" />
  <NpmBadge name="pdf-lib" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pdf-lib</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="虚拟列表" tabindex="-1"><a class="header-anchor" href="#虚拟列表"><span>虚拟列表</span></a></h3>
<h4 id="tanstack-react-virtual" tabindex="-1"><a class="header-anchor" href="#tanstack-react-virtual"><span>@tanstack/react-virtual</span></a></h4>
<p>React 虚拟滚动</p>
<NpmBadgeGroup repo="TanStack/virtual">
  <NpmBadge name="@tanstack/react-virtual" type="version" />
  <NpmBadge name="@tanstack/react-virtual" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @tanstack/react-virtual</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="react-window" tabindex="-1"><a class="header-anchor" href="#react-window"><span>react-window</span></a></h4>
<p>React 虚拟列表</p>
<NpmBadgeGroup repo="bvaughn/react-window">
  <NpmBadge name="react-window" type="version" />
  <NpmBadge name="react-window" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> react-window</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vue-virtual-scroller" tabindex="-1"><a class="header-anchor" href="#vue-virtual-scroller"><span>vue-virtual-scroller</span></a></h4>
<p>Vue 虚拟滚动</p>
<NpmBadgeGroup repo="Akryum/vue-virtual-scroller">
  <NpmBadge name="vue-virtual-scroller" type="version" />
  <NpmBadge name="vue-virtual-scroller" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue-virtual-scroller</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="代码高亮" tabindex="-1"><a class="header-anchor" href="#代码高亮"><span>代码高亮</span></a></h3>
<h4 id="prismjs" tabindex="-1"><a class="header-anchor" href="#prismjs"><span>prismjs</span></a></h4>
<p>轻量级代码高亮</p>
<NpmBadgeGroup repo="PrismJS/prism">
  <NpmBadge name="prismjs" type="version" />
  <NpmBadge name="prismjs" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> prismjs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="highlight-js" tabindex="-1"><a class="header-anchor" href="#highlight-js"><span>highlight.js</span></a></h4>
<p>多语言代码高亮</p>
<NpmBadgeGroup repo="highlightjs/highlight.js">
  <NpmBadge name="highlight.js" type="version" />
  <NpmBadge name="highlight.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> highlight.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="shiki" tabindex="-1"><a class="header-anchor" href="#shiki"><span>shiki</span></a></h4>
<p>VS Code 同款高亮</p>
<NpmBadgeGroup repo="shikijs/shiki">
  <NpmBadge name="shiki" type="version" />
  <NpmBadge name="shiki" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> shiki</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="markdown-处理" tabindex="-1"><a class="header-anchor" href="#markdown-处理"><span>Markdown 处理</span></a></h3>
<h4 id="marked" tabindex="-1"><a class="header-anchor" href="#marked"><span>marked</span></a></h4>
<p>Markdown 解析器</p>
<NpmBadgeGroup repo="markedjs/marked">
  <NpmBadge name="marked" type="version" />
  <NpmBadge name="marked" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> marked</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="markdown-it" tabindex="-1"><a class="header-anchor" href="#markdown-it"><span>markdown-it</span></a></h4>
<p>可扩展 Markdown 解析器</p>
<NpmBadgeGroup repo="markdown-it/markdown-it">
  <NpmBadge name="markdown-it" type="version" />
  <NpmBadge name="markdown-it" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markdown-it</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="remark" tabindex="-1"><a class="header-anchor" href="#remark"><span>remark</span></a></h4>
<p>Markdown 处理器</p>
<NpmBadgeGroup repo="remarkjs/remark">
  <NpmBadge name="remark" type="version" />
  <NpmBadge name="remark" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remark</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="富文本编辑器" tabindex="-1"><a class="header-anchor" href="#富文本编辑器"><span>富文本编辑器</span></a></h3>
<h4 id="quill" tabindex="-1"><a class="header-anchor" href="#quill"><span>quill</span></a></h4>
<p>现代富文本编辑器</p>
<NpmBadgeGroup repo="quilljs/quill">
  <NpmBadge name="quill" type="version" />
  <NpmBadge name="quill" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> quill</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="tiptap" tabindex="-1"><a class="header-anchor" href="#tiptap"><span>tiptap</span></a></h4>
<p>模块化编辑器框架</p>
<NpmBadgeGroup repo="ueberdosis/tiptap">
  <NpmBadge name="@tiptap/core" type="version" />
  <NpmBadge name="@tiptap/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @tiptap/core</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="lexical" tabindex="-1"><a class="header-anchor" href="#lexical"><span>lexical</span></a></h4>
<p>Facebook 编辑器框架</p>
<NpmBadgeGroup repo="facebook/lexical">
  <NpmBadge name="lexical" type="version" />
  <NpmBadge name="lexical" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lexical</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="开发工具-1" tabindex="-1"><a class="header-anchor" href="#开发工具-1"><span>开发工具</span></a></h2>
<h3 id="构建工具" tabindex="-1"><a class="header-anchor" href="#构建工具"><span>构建工具</span></a></h3>
<h4 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>vite</span></a></h4>
<p>下一代前端构建工具</p>
<NpmBadgeGroup repo="vitejs/vite">
  <NpmBadge name="vite" type="version" />
  <NpmBadge name="vite" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>webpack</span></a></h4>
<p>模块打包器</p>
<NpmBadgeGroup repo="webpack/webpack">
  <NpmBadge name="webpack" type="version" />
  <NpmBadge name="webpack" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> webpack</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup"><span>rollup</span></a></h4>
<p>ES 模块打包器</p>
<NpmBadgeGroup repo="rollup/rollup">
  <NpmBadge name="rollup" type="version" />
  <NpmBadge name="rollup" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rollup</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="rollup-plugin-visualizer" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-visualizer"><span>rollup-plugin-visualizer</span></a></h4>
<p>打包体积可视化分析</p>
<NpmBadgeGroup repo="btd/rollup-plugin-visualizer">
  <NpmBadge name="rollup-plugin-visualizer" type="version" />
  <NpmBadge name="rollup-plugin-visualizer" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rollup-plugin-visualizer</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vite-plugin-compression" tabindex="-1"><a class="header-anchor" href="#vite-plugin-compression"><span>vite-plugin-compression</span></a></h4>
<p>Vite gzip 压缩插件</p>
<NpmBadgeGroup repo="vbenjs/vite-plugin-compression">
  <NpmBadge name="vite-plugin-compression" type="version" />
  <NpmBadge name="vite-plugin-compression" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite-plugin-compression</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vite-plugin-imagemin" tabindex="-1"><a class="header-anchor" href="#vite-plugin-imagemin"><span>vite-plugin-imagemin</span></a></h4>
<p>图片压缩优化插件</p>
<NpmBadgeGroup repo="vbenjs/vite-plugin-imagemin">
  <NpmBadge name="vite-plugin-imagemin" type="version" />
  <NpmBadge name="vite-plugin-imagemin" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite-plugin-imagemin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vitejs-plugin-legacy" tabindex="-1"><a class="header-anchor" href="#vitejs-plugin-legacy"><span>@vitejs/plugin-legacy</span></a></h4>
<p>传统浏览器兼容</p>
<NpmBadgeGroup repo="vitejs/vite">
  <NpmBadge name="@vitejs/plugin-legacy" type="version" />
  <NpmBadge name="@vitejs/plugin-legacy" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vitejs/plugin-legacy</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="terser" tabindex="-1"><a class="header-anchor" href="#terser"><span>terser</span></a></h4>
<p>JavaScript 压缩工具</p>
<NpmBadgeGroup repo="terser/terser">
  <NpmBadge name="terser" type="version" />
  <NpmBadge name="terser" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> terser</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="代码质量" tabindex="-1"><a class="header-anchor" href="#代码质量"><span>代码质量</span></a></h3>
<h4 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint"><span>eslint</span></a></h4>
<p>JavaScript 代码检查</p>
<NpmBadgeGroup repo="eslint/eslint">
  <NpmBadge name="eslint" type="version" />
  <NpmBadge name="eslint" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier"><span>prettier</span></a></h4>
<p>代码格式化</p>
<NpmBadgeGroup repo="prettier/prettier">
  <NpmBadge name="prettier" type="version" />
  <NpmBadge name="prettier" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> prettier</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="husky" tabindex="-1"><a class="header-anchor" href="#husky"><span>husky</span></a></h4>
<p>Git hooks 工具</p>
<NpmBadgeGroup repo="typicode/husky">
  <NpmBadge name="husky" type="version" />
  <NpmBadge name="husky" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> husky</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="测试工具" tabindex="-1"><a class="header-anchor" href="#测试工具"><span>测试工具</span></a></h3>
<h4 id="vitest" tabindex="-1"><a class="header-anchor" href="#vitest"><span>vitest</span></a></h4>
<p>Vite 原生测试框架</p>
<NpmBadgeGroup repo="vitest-dev/vitest">
  <NpmBadge name="vitest" type="version" />
  <NpmBadge name="vitest" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vitest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="jest" tabindex="-1"><a class="header-anchor" href="#jest"><span>jest</span></a></h4>
<p>JavaScript 测试框架</p>
<NpmBadgeGroup repo="jestjs/jest">
  <NpmBadge name="jest" type="version" />
  <NpmBadge name="jest" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="playwright" tabindex="-1"><a class="header-anchor" href="#playwright"><span>playwright</span></a></h4>
<p>E2E 测试工具</p>
<NpmBadgeGroup repo="microsoft/playwright">
  <NpmBadge name="playwright" type="version" />
  <NpmBadge name="playwright" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> playwright</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="代码优化工具" tabindex="-1"><a class="header-anchor" href="#代码优化工具"><span>代码优化工具</span></a></h3>
<table>
<thead>
<tr>
<th>包名</th>
<th>说明</th>
<th>安装</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a href="https://github.com/webpro/knip" target="_blank" rel="noopener noreferrer">knip</a></strong></td>
<td>删除 JS/TS 项目死代码，月下载量 300w+</td>
<td><code v-pre>npm i -D knip</code></td>
</tr>
<tr>
<td><strong><a href="https://github.com/depcheck/depcheck" target="_blank" rel="noopener noreferrer">depcheck</a></strong></td>
<td>分析未使用的依赖项，月下载量 400w+</td>
<td><code v-pre>npm i -D depcheck</code></td>
</tr>
<tr>
<td><strong><a href="https://github.com/FullHuman/purgecss" target="_blank" rel="noopener noreferrer">purgecss</a></strong></td>
<td>移除未使用的 CSS 代码，月下载量 300w+</td>
<td><code v-pre>npm i -D @fullhuman/postcss-purgecss</code></td>
</tr>
</tbody>
</table>
<h4 id="knip-死代码检测工具" tabindex="-1"><a class="header-anchor" href="#knip-死代码检测工具"><span>Knip - 死代码检测工具</span></a></h4>
<p><strong>功能特点</strong>：</p>
<ul>
<li>删除未使用的文件、依赖项、导入导出</li>
<li>检测重复导出和未使用的类型定义</li>
<li>TypeScript、ESLint、Prettier、Nuxt.js 等知名项目都在使用</li>
<li>支持多种配置文件格式</li>
</ul>
<p><strong>使用示例</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> knip</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 添加到 package.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">"scripts"</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  "knip"</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">knip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 运行检查</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> knip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="depcheck-依赖分析工具" tabindex="-1"><a class="header-anchor" href="#depcheck-依赖分析工具"><span>depcheck - 依赖分析工具</span></a></h4>
<p><strong>功能特点</strong>：</p>
<ul>
<li>查看每个依赖项如何使用</li>
<li>检测未使用的依赖项</li>
<li>发现缺少的依赖项</li>
<li>支持各种模块系统和构建工具</li>
</ul>
<p><strong>使用示例</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 全局安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> depcheck</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 在项目根目录运行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">depcheck</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 忽略某些依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">depcheck</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --ignores=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">eslint,babel-*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="purgecss-css-优化工具" tabindex="-1"><a class="header-anchor" href="#purgecss-css-优化工具"><span>PurgeCSS - CSS 优化工具</span></a></h4>
<p><strong>功能特点</strong>：</p>
<ul>
<li>分析 HTML、JS、模板文件中实际使用的 CSS</li>
<li>移除未引用的样式规则</li>
<li>大幅减少 CSS 文件体积</li>
<li>支持与各种构建工具集成</li>
</ul>
<p><strong>使用示例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-javascript"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// postcss.config.js</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    require</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@fullhuman/postcss-purgecss</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./src/**/*.html</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./src/**/*.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      defaultExtractor</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> content</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">match</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#BDA437;--shiki-dark:#E6CC77">\w</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-/:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">+</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(?&#x3C;!</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">g</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ||</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> []</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-生态增强" tabindex="-1"><a class="header-anchor" href="#vue-生态增强"><span>Vue 生态增强</span></a></h3>
<h4 id="vueuse-core" tabindex="-1"><a class="header-anchor" href="#vueuse-core"><span>@vueuse/core</span></a></h4>
<p>Vue 组合式 API 工具集</p>
<NpmBadgeGroup repo="vueuse/vueuse">
  <NpmBadge name="@vueuse/core" type="version" />
  <NpmBadge name="@vueuse/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vueuse/core</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vue-request" tabindex="-1"><a class="header-anchor" href="#vue-request"><span>vue-request</span></a></h4>
<p>Vue 请求库，支持 SWR</p>
<NpmBadgeGroup repo="AttoJS/vue-request">
  <NpmBadge name="vue-request" type="version" />
  <NpmBadge name="vue-request" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue-request</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="unplugin-auto-import" tabindex="-1"><a class="header-anchor" href="#unplugin-auto-import"><span>unplugin-auto-import</span></a></h4>
<p>自动导入 API</p>
<NpmBadgeGroup repo="unplugin/unplugin-auto-import">
  <NpmBadge name="unplugin-auto-import" type="version" />
  <NpmBadge name="unplugin-auto-import" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> unplugin-auto-import</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="unplugin-vue-components" tabindex="-1"><a class="header-anchor" href="#unplugin-vue-components"><span>unplugin-vue-components</span></a></h4>
<p>组件自动导入</p>
<NpmBadgeGroup repo="unplugin/unplugin-vue-components">
  <NpmBadge name="unplugin-vue-components" type="version" />
  <NpmBadge name="unplugin-vue-components" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> unplugin-vue-components</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vite-plugin-pages" tabindex="-1"><a class="header-anchor" href="#vite-plugin-pages"><span>vite-plugin-pages</span></a></h4>
<p>文件路由自动生成</p>
<NpmBadgeGroup repo="hannoeru/vite-plugin-pages">
  <NpmBadge name="vite-plugin-pages" type="version" />
  <NpmBadge name="vite-plugin-pages" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite-plugin-pages</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vant-auto-import-resolver" tabindex="-1"><a class="header-anchor" href="#vant-auto-import-resolver"><span>@vant/auto-import-resolver</span></a></h4>
<p>Vant 组件自动导入</p>
<NpmBadgeGroup repo="youzan/vant">
  <NpmBadge name="@vant/auto-import-resolver" type="version" />
  <NpmBadge name="@vant/auto-import-resolver" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vant/auto-import-resolver</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="css-框架与工具" tabindex="-1"><a class="header-anchor" href="#css-框架与工具"><span>CSS 框架与工具</span></a></h3>
<table>
<thead>
<tr>
<th>包名</th>
<th>说明</th>
<th>安装</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a href="https://unocss.dev/" target="_blank" rel="noopener noreferrer">unocss</a></strong></td>
<td>即时原子化 CSS 引擎</td>
<td><code v-pre>npm i -D unocss</code></td>
</tr>
<tr>
<td><strong><a href="https://unocss.dev/presets/icons" target="_blank" rel="noopener noreferrer">@unocss/preset-icons</a></strong></td>
<td>纯 CSS 图标方案</td>
<td><code v-pre>npm i -D @unocss/preset-icons</code></td>
</tr>
<tr>
<td><strong><a href="https://unocss.dev/presets/uno" target="_blank" rel="noopener noreferrer">@unocss/preset-uno</a></strong></td>
<td>UnoCSS 默认预设</td>
<td><code v-pre>npm i -D @unocss/preset-uno</code></td>
</tr>
<tr>
<td><strong><a href="https://unocss.dev/presets/attributify" target="_blank" rel="noopener noreferrer">@unocss/preset-attributify</a></strong></td>
<td>属性化模式</td>
<td><code v-pre>npm i -D @unocss/preset-attributify</code></td>
</tr>
<tr>
<td><strong><a href="https://github.com/yisibell/postcss-mobile-forever" target="_blank" rel="noopener noreferrer">postcss-mobile-forever</a></strong></td>
<td>移动端适配方案</td>
<td><code v-pre>npm i -D postcss-mobile-forever</code></td>
</tr>
</tbody>
</table>
<h3 id="图片处理-1" tabindex="-1"><a class="header-anchor" href="#图片处理-1"><span>图片处理</span></a></h3>
<table>
<thead>
<tr>
<th>包名</th>
<th>说明</th>
<th>安装</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a href="https://sharp.pixelplumbing.com/" target="_blank" rel="noopener noreferrer">sharp</a></strong></td>
<td>高性能图片处理</td>
<td><code v-pre>npm i sharp</code></td>
</tr>
<tr>
<td><strong><a href="https://github.com/imagemin/imagemin" target="_blank" rel="noopener noreferrer">imagemin</a></strong></td>
<td>图片压缩工具</td>
<td><code v-pre>npm i imagemin</code></td>
</tr>
<tr>
<td><strong><a href="https://github.com/imagemin/imagemin-svgo" target="_blank" rel="noopener noreferrer">imagemin-svgo</a></strong></td>
<td>SVG 优化</td>
<td><code v-pre>npm i imagemin-svgo</code></td>
</tr>
</tbody>
</table>
<h3 id="文件压缩" tabindex="-1"><a class="header-anchor" href="#文件压缩"><span>文件压缩</span></a></h3>
<table>
<thead>
<tr>
<th>包名</th>
<th>说明</th>
<th>安装</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a href="https://github.com/archiverjs/node-archiver" target="_blank" rel="noopener noreferrer">archiver</a></strong></td>
<td>文件压缩打包</td>
<td><code v-pre>npm i archiver</code></td>
</tr>
<tr>
<td><strong><a href="https://github.com/jprichardson/node-fs-extra" target="_blank" rel="noopener noreferrer">fs-extra</a></strong></td>
<td>增强版文件系统操作</td>
<td><code v-pre>npm i fs-extra</code></td>
</tr>
</tbody>
</table>
<h3 id="二维码生成" tabindex="-1"><a class="header-anchor" href="#二维码生成"><span>二维码生成</span></a></h3>
<table>
<thead>
<tr>
<th>包名</th>
<th>说明</th>
<th>安装</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a href="https://github.com/soldair/node-qrcode" target="_blank" rel="noopener noreferrer">qrcode</a></strong></td>
<td>二维码生成器</td>
<td><code v-pre>npm i qrcode</code></td>
</tr>
</tbody>
</table>
<h3 id="语雀工具" tabindex="-1"><a class="header-anchor" href="#语雀工具"><span>语雀工具</span></a></h3>
<table>
<thead>
<tr>
<th>包名</th>
<th>说明</th>
<th>安装</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a href="https://github.com/yuque/yuque-dl" target="_blank" rel="noopener noreferrer">yuque-dl</a></strong></td>
<td>语雀文档批量导出工具</td>
<td><code v-pre>npm i -g yuque-dl</code></td>
</tr>
</tbody>
</table>
<hr>
<hr>
<h2 id="相关资源" tabindex="-1"><a class="header-anchor" href="#相关资源"><span>相关资源</span></a></h2>
<ul>
<li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm 官网</a> - 搜索和浏览包</li>
<li><a href="https://npms.io/" target="_blank" rel="noopener noreferrer">npms.io</a> - 更好的包搜索体验</li>
<li><a href="https://bundlephobia.com/" target="_blank" rel="noopener noreferrer">bundlephobia</a> - 查看包大小</li>
<li><a href="https://npmtrends.com/" target="_blank" rel="noopener noreferrer">npm trends</a> - 包下载趋势对比</li>
<li><a href="https://packagephobia.com/" target="_blank" rel="noopener noreferrer">packagephobia</a> - 包安装大小分析</li>
</ul>
<hr>
<h2 id="个人常用-npm-包推荐" tabindex="-1"><a class="header-anchor" href="#个人常用-npm-包推荐"><span>个人常用 NPM 包推荐</span></a></h2>
<p>基于 Vue3 移动端项目的实践经验，以下是我常用的 NPM 包组合：</p>
</div></template>


<script setup>
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
</script>