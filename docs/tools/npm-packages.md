---
title: NPM 包推荐与包管理工具
createTime: 2025/01/15
permalink: /tools/npm-packages/
breadcrumb: false
---
<script setup>
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
</script>

# NPM 包推荐与包管理工具

## 包管理工具说明

### 工具关系图解

```
Node.js (运行环境)
    ├── npm (默认包管理器)
    │   ├── npx (npm 5.2+ 内置的包执行工具)
    │   ├── cnpm (淘宝 npm 镜像)
    │   └── yarn (Facebook 推出的替代方案)
    └── pnpm (高性能包管理器)

nvm/fnm (Node 版本管理器)
```

### 各工具详解

::: tabs
@tab:active npm
**npm (Node Package Manager)**
- Node.js 官方默认的包管理器
- 安装 Node.js 时自动安装
- 管理项目依赖、发布包到 npm registry

**安装方式**：
- 随 Node.js 自动安装

**常用命令**：
```bash
npm install 包名        # 安装依赖
npm install -D 包名    # 安装开发依赖
npm install -g 包名    # 全局安装
npm uninstall 包名     # 卸载依赖
npm update            # 更新依赖
npm run 脚本名        # 运行脚本
```

@tab pnpm
**pnpm (Performant npm)**
- 高性能的包管理器，节省磁盘空间
- 使用硬链接和符号链接，避免重复安装
- 速度更快，严格的依赖管理
- 支持 workspace 工作区

**安装方式**：
```bash
npm install -g pnpm
# 或使用 corepack
corepack enable
corepack use pnpm@latest
```

**常用命令**：
```bash
pnpm add 包名          # 安装依赖
pnpm add -D 包名      # 安装开发依赖
pnpm add -g 包名      # 全局安装
pnpm remove 包名       # 卸载依赖
pnpm update           # 更新依赖
pnpm run 脚本名       # 运行脚本
```

@tab yarn
**Yarn**
- Facebook 开发的包管理器
- 并行安装，速度快
- 离线模式，锁文件机制
- 支持 workspace 工作区

**安装方式**：
```bash
npm install -g yarn
# 或使用 corepack
corepack enable
corepack use yarn@stable
```

**常用命令**：
```bash
yarn add 包名          # 安装依赖
yarn add -D 包名      # 安装开发依赖
yarn global add 包名   # 全局安装
yarn remove 包名       # 卸载依赖
yarn upgrade          # 更新依赖
yarn 脚本名           # 运行脚本
```

@tab cnpm
**cnpm (淘宝 NPM 镜像)**
- 淘宝提供的 npm 镜像源
- 解决国内访问 npm 官方源速度慢的问题
- 完全兼容 npm 命令
- 每 10 分钟同步一次官方源

**安装方式**：
```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

**常用命令**：
```bash
cnpm install 包名      # 安装依赖
cnpm install -D 包名  # 安装开发依赖
cnpm install -g 包名  # 全局安装
cnpm sync 包名        # 同步模块
```

**替代方案**：
也可以直接配置 npm 使用淘宝镜像：
```bash
npm config set registry https://registry.npmmirror.com
```

@tab npx
**npx**
- npm 5.2+ 自带的包执行工具
- 无需全局安装即可执行包
- 自动使用最新版本
- 临时安装，使用后自动清理

**常用场景**：
```bash
# 创建项目
npx create-react-app my-app
npx create-vue@latest
npx nuxi@latest init my-app

# 执行工具
npx eslint .
npx prettier --write .
npx npm-check-updates
```

@tab nvm
**nvm (Node Version Manager)**
- Node.js 版本管理工具
- 可以安装和切换多个 Node 版本
- macOS/Linux 使用 nvm
- Windows 使用 nvm-windows

**安装方式**：
```bash
# macOS/Linux
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Windows
# 下载 nvm-windows 安装包
```

**常用命令**：
```bash
nvm install 18.17.0   # 安装指定版本
nvm use 18.17.0       # 切换版本
nvm list              # 查看已安装版本
nvm alias default 18  # 设置默认版本
```

@tab fnm
**fnm (Fast Node Manager)**
- 更快的 Node 版本管理器
- Rust 编写，跨平台
- 比 nvm 更快
- 支持 .node-version 文件

**安装方式**：
```bash
# macOS/Linux
curl -fsSL https://fnm.vercel.app/install | bash

# Windows
winget install Schniz.fnm
```

**常用命令**：
```bash
fnm install 18.17.0   # 安装指定版本
fnm use 18.17.0       # 切换版本
fnm list              # 查看已安装版本
fnm default 18.17.0   # 设置默认版本
```
:::

### 性能对比

#### 速度对比
```
pnpm > yarn > npm
```

#### 磁盘空间
```
pnpm (最省) > yarn > npm
```

### 使用建议

- **推荐首选**：pnpm（速度快、节省空间、严格依赖管理）

#### 安装命令对比

| 操作 | npm | pnpm | yarn | cnpm |
|------|-----|------|------|------|
| 安装依赖 | `npm install 包名` | `pnpm add 包名` | `yarn add 包名` | `cnpm install 包名` |
| 开发依赖 | `npm install -D 包名` | `pnpm add -D 包名` | `yarn add -D 包名` | `cnpm install -D 包名` |
| 全局安装 | `npm install -g 包名` | `pnpm add -g 包名` | `yarn global add 包名` | `cnpm install -g 包名` |
| 卸载依赖 | `npm uninstall 包名` | `pnpm remove 包名` | `yarn remove 包名` | `cnpm uninstall 包名` |
| 更新依赖 | `npm update` | `pnpm update` | `yarn upgrade` | `cnpm update` |
| 运行脚本 | `npm run 脚本` | `pnpm run 脚本` | `yarn 脚本` | `cnpm run 脚本` |

#### 常见问题解决

**镜像源配置**
```bash
# 查看当前镜像源
npm config get registry

# 设置淘宝镜像
npm config set registry https://registry.npmmirror.com

# 恢复官方镜像
npm config set registry https://registry.npmjs.org
```

**缓存清理**
```bash
# npm 清理缓存
npm cache clean --force

# pnpm 清理缓存
pnpm store prune

# yarn 清理缓存
yarn cache clean
```

**版本锁定**
- npm: `package-lock.json`
- pnpm: `pnpm-lock.yaml`
- yarn: `yarn.lock`

建议将锁文件提交到版本控制系统，确保团队成员使用相同版本的依赖。

---

## 实用工具库

### 日期时间处理

#### Vue 全家桶
- **vue** + **vue-router** - Vue3 核心框架和路由
- **pinia** - 状态管理（Vue 官方推荐）
- **@vueuse/core** - Vue 组合式 API 工具集

#### UI 框架
- **vant** - 移动端组件库，适合移动端项目
- **@vant/auto-import-resolver** - Vant 组件自动导入

#### 网络请求
- **axios** - HTTP 客户端
- **vue-request** - Vue 请求库，支持 SWR 缓存策略

### 样式与构建

#### CSS 方案
- **unocss** - 原子化 CSS 引擎
  - **@unocss/preset-uno** - 默认预设
  - **@unocss/preset-attributify** - 属性化模式
  - **@unocss/preset-icons** - 纯 CSS 图标
- **postcss-mobile-forever** - 移动端适配方案
  - 自动将 px 转换为 vw/rem，实现移动端响应式布局
  - 支持设置设计稿宽度（如 375px、750px）
  - 可配置忽略某些属性或文件
  - 比 postcss-px-to-viewport 功能更强大
- **sass** - CSS 预处理器

#### 构建优化
- **vite** + **@vitejs/plugin-vue** - 构建工具和 Vue 插件
- **@vitejs/plugin-legacy** - 打包兼容低版本浏览器
- **vite-plugin-compression** - gzip 压缩
- **vite-plugin-imagemin** - 图片压缩优化(有点慢,每次打包都会执行,推荐 tinypng 压缩图片)
<!-- - **vite-plugin-pages** - 文件路由自动生成 -->
- **rollup-plugin-visualizer** - 打包体积分析

### 开发工具

#### 代码规范
- **eslint** + **vue-eslint-parser** - 代码检查
- **prettier** - 代码格式化
- **stylelint** + **vite-plugin-stylelint** - 样式检查
- **@stylistic/eslint-plugin** - ESLint 样式规则

#### 自动导入
- **unplugin-auto-import** - API 自动导入(配置后,vue,router,pinia,自己的文件的方法都可以自动导入)
- **unplugin-vue-components** - 组件自动导入

### 工具库

#### 常用工具
- **dayjs** - 日期处理（轻量级）
- **crypto-js** - 加密算法库
- **qrcode** - 二维码生成

#### 图片处理
- **sharp** - 高性能图片处理
- **imagemin** + **imagemin-svgo** - 图片压缩

#### 文件处理
- **archiver** - 文件压缩打包
  - 支持创建 zip、tar 等格式的压缩包
  - 可用于打包项目文件、生成下载包
  - 支持流式处理，适合大文件
  - 常用于自动化构建中生成发布包
- **fs-extra** - 增强版文件系统操作

### 推荐理由

1. **构建速度快** - Vite + pnpm 组合，开发体验极佳
2. **移动端友好** - Vant UI + postcss-mobile-forever 完美适配
3. **开发效率高** - 自动导入 + 文件路由，减少样板代码
4. **性能优化** - 图片压缩、gzip、打包分析一应俱全
5. **代码质量** - ESLint + Prettier + Stylelint 三重保障

### 核心依赖

#### dayjs
轻量级日期库，仅 2KB，Moment.js 替代品

<NpmBadgeGroup repo="iamkun/dayjs">
  <NpmBadge name="dayjs" type="version" />
  <NpmBadge name="dayjs" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i dayjs
```

#### date-fns
模块化日期工具库，tree-shaking 友好

<NpmBadgeGroup repo="date-fns/date-fns">
  <NpmBadge name="date-fns" type="version" />
  <NpmBadge name="date-fns" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i date-fns
```

#### moment
功能强大但体积较大（不推荐新项目）

<NpmBadgeGroup repo="moment/moment">
  <NpmBadge name="moment" type="version" />
  <NpmBadge name="moment" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i moment
```

### 工具函数库

#### radash
现代化工具库，lodash 替代品

<NpmBadgeGroup repo="sodiray/radash">
  <NpmBadge name="radash" type="version" />
  <NpmBadge name="radash" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i radash
```

#### lodash
经典工具函数库

<NpmBadgeGroup repo="lodash/lodash">
  <NpmBadge name="lodash" type="version" />
  <NpmBadge name="lodash" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i lodash
```

#### ramda
函数式编程工具库

<NpmBadgeGroup repo="ramda/ramda">
  <NpmBadge name="ramda" type="version" />
  <NpmBadge name="ramda" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i ramda
```

### 动画库

#### lottie-web
Airbnb 动画库，支持 AE 导出

<NpmBadgeGroup repo="airbnb/lottie-web">
  <NpmBadge name="lottie-web" type="version" />
  <NpmBadge name="lottie-web" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i lottie-web
```

#### framer-motion
React 动画库

<NpmBadgeGroup repo="framer/motion">
  <NpmBadge name="framer-motion" type="version" />
  <NpmBadge name="framer-motion" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i framer-motion
```

#### auto-animate
自动动画库

<NpmBadgeGroup repo="formkit/auto-animate">
  <NpmBadge name="@formkit/auto-animate" type="version" />
  <NpmBadge name="@formkit/auto-animate" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @formkit/auto-animate
```

### 拖拽排序

#### @formkit/drag-and-drop
轻量级拖拽库，4KB

<NpmBadgeGroup repo="formkit/drag-and-drop">
  <NpmBadge name="@formkit/drag-and-drop" type="version" />
  <NpmBadge name="@formkit/drag-and-drop" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @formkit/drag-and-drop
```

#### sortablejs
强大的拖拽排序库

<NpmBadgeGroup repo="SortableJS/Sortable">
  <NpmBadge name="sortablejs" type="version" />
  <NpmBadge name="sortablejs" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i sortablejs
```

#### react-beautiful-dnd
React 拖拽库

<NpmBadgeGroup repo="atlassian/react-beautiful-dnd">
  <NpmBadge name="react-beautiful-dnd" type="version" />
  <NpmBadge name="react-beautiful-dnd" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i react-beautiful-dnd
```

### 用户引导

#### driver.js
轻量级页面引导，5KB

<NpmBadgeGroup repo="kamranahmedse/driver.js">
  <NpmBadge name="driver.js" type="version" />
  <NpmBadge name="driver.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i driver.js
```

#### intro.js
新手引导库

<NpmBadgeGroup repo="usablica/intro.js">
  <NpmBadge name="intro.js" type="version" />
  <NpmBadge name="intro.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i intro.js
```

#### shepherd.js
用户引导库

<NpmBadgeGroup repo="shipshapecode/shepherd">
  <NpmBadge name="shepherd.js" type="version" />
  <NpmBadge name="shepherd.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i shepherd.js
```

### 图表可视化

#### echarts
Apache ECharts 图表库

<NpmBadgeGroup repo="apache/echarts">
  <NpmBadge name="echarts" type="version" />
  <NpmBadge name="echarts" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i echarts
```

#### chart.js
简单易用的图表库

<NpmBadgeGroup repo="chartjs/Chart.js">
  <NpmBadge name="chart.js" type="version" />
  <NpmBadge name="chart.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i chart.js
```

#### d3
数据驱动的可视化库

<NpmBadgeGroup repo="d3/d3">
  <NpmBadge name="d3" type="version" />
  <NpmBadge name="d3" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i d3
```

### 流程图/图编辑

#### logicflow
滴滴流程图框架

<NpmBadgeGroup repo="didi/LogicFlow">
  <NpmBadge name="@logicflow/core" type="version" />
  <NpmBadge name="@logicflow/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @logicflow/core
```

#### x6
AntV 图编辑引擎

<NpmBadgeGroup repo="antvis/X6">
  <NpmBadge name="@antv/x6" type="version" />
  <NpmBadge name="@antv/x6" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @antv/x6
```

#### reactflow
React 流程图库

<NpmBadgeGroup repo="xyflow/xyflow">
  <NpmBadge name="reactflow" type="version" />
  <NpmBadge name="reactflow" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i reactflow
```

### 进度条

#### progressbar.js
响应式进度条

<NpmBadgeGroup repo="kimmobrunfeldt/progressbar.js">
  <NpmBadge name="progressbar.js" type="version" />
  <NpmBadge name="progressbar.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i progressbar.js
```

#### nprogress
页面加载进度条

<NpmBadgeGroup repo="rstacruz/nprogress">
  <NpmBadge name="nprogress" type="version" />
  <NpmBadge name="nprogress" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i nprogress
```

### 文字识别 (OCR)

#### tesseract.js
支持 100+ 语言的 OCR 库

<NpmBadgeGroup repo="naptha/tesseract.js">
  <NpmBadge name="tesseract.js" type="version" />
  <NpmBadge name="tesseract.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i tesseract.js
```

### 安全相关

#### zxcvbn
密码强度估算器

<NpmBadgeGroup repo="zxcvbn-ts/zxcvbn">
  <NpmBadge name="@zxcvbn-ts/core" type="version" />
  <NpmBadge name="@zxcvbn-ts/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @zxcvbn-ts/core
```

#### crypto-js
加密算法库

<NpmBadgeGroup repo="brix/crypto-js">
  <NpmBadge name="crypto-js" type="version" />
  <NpmBadge name="crypto-js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i crypto-js
```

#### uuid
UUID 生成器

<NpmBadgeGroup repo="uuidjs/uuid">
  <NpmBadge name="uuid" type="version" />
  <NpmBadge name="uuid" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i uuid
```

### 前端监控

#### sunshine-track
前端监控 SDK

<NpmBadgeGroup repo="sanxin-lin/sunshine-track">
  <NpmBadge name="sunshine-track" type="version" />
  <NpmBadge name="sunshine-track" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i sunshine-track
```

#### @sentry/browser
Sentry 错误监控

<NpmBadgeGroup repo="getsentry/sentry-javascript">
  <NpmBadge name="@sentry/browser" type="version" />
  <NpmBadge name="@sentry/browser" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @sentry/browser
```

### HTTP 请求

#### axios
流行的 HTTP 客户端

<NpmBadgeGroup repo="axios/axios">
  <NpmBadge name="axios" type="version" />
  <NpmBadge name="axios" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i axios
```

#### ky
现代化 fetch 封装

<NpmBadgeGroup repo="sindresorhus/ky">
  <NpmBadge name="ky" type="version" />
  <NpmBadge name="ky" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i ky
```

#### got
Node.js HTTP 库

<NpmBadgeGroup repo="sindresorhus/got">
  <NpmBadge name="got" type="version" />
  <NpmBadge name="got" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i got
```

### 表单验证

#### yup
Schema 验证库

<NpmBadgeGroup repo="jquense/yup">
  <NpmBadge name="yup" type="version" />
  <NpmBadge name="yup" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i yup
```

#### zod
TypeScript 优先的验证库

<NpmBadgeGroup repo="colinhacks/zod">
  <NpmBadge name="zod" type="version" />
  <NpmBadge name="zod" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i zod
```

#### joi
强大的验证库

<NpmBadgeGroup repo="sideway/joi">
  <NpmBadge name="joi" type="version" />
  <NpmBadge name="joi" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i joi
```

### 状态管理

#### pinia
Vue 官方推荐状态管理

<NpmBadgeGroup repo="vuejs/pinia">
  <NpmBadge name="pinia" type="version" />
  <NpmBadge name="pinia" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i pinia
```

#### zustand
轻量级状态管理

<NpmBadgeGroup repo="pmndrs/zustand">
  <NpmBadge name="zustand" type="version" />
  <NpmBadge name="zustand" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i zustand
```

#### mobx
响应式状态管理

<NpmBadgeGroup repo="mobxjs/mobx">
  <NpmBadge name="mobx" type="version" />
  <NpmBadge name="mobx" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i mobx
```

#### redux-toolkit
Redux 官方工具集

<NpmBadgeGroup repo="reduxjs/redux-toolkit">
  <NpmBadge name="@reduxjs/toolkit" type="version" />
  <NpmBadge name="@reduxjs/toolkit" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @reduxjs/toolkit
```

### 样式处理

#### clsx
轻量级类名工具

<NpmBadgeGroup repo="lukeed/clsx">
  <NpmBadge name="clsx" type="version" />
  <NpmBadge name="clsx" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i clsx
```

#### classnames
条件类名工具

<NpmBadgeGroup repo="JedWatson/classnames">
  <NpmBadge name="classnames" type="version" />
  <NpmBadge name="classnames" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i classnames
```

#### styled-components
CSS-in-JS

<NpmBadgeGroup repo="styled-components/styled-components">
  <NpmBadge name="styled-components" type="version" />
  <NpmBadge name="styled-components" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i styled-components
```

### 文件处理

#### file-saver
文件保存

<NpmBadgeGroup repo="eligrey/FileSaver.js">
  <NpmBadge name="file-saver" type="version" />
  <NpmBadge name="file-saver" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i file-saver
```

#### xlsx
Excel 文件处理

<NpmBadgeGroup repo="SheetJS/sheetjs">
  <NpmBadge name="xlsx" type="version" />
  <NpmBadge name="xlsx" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i xlsx
```

#### pdf-lib
PDF 创建和修改

<NpmBadgeGroup repo="Hopding/pdf-lib">
  <NpmBadge name="pdf-lib" type="version" />
  <NpmBadge name="pdf-lib" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i pdf-lib
```

### 虚拟列表

#### @tanstack/react-virtual
React 虚拟滚动

<NpmBadgeGroup repo="TanStack/virtual">
  <NpmBadge name="@tanstack/react-virtual" type="version" />
  <NpmBadge name="@tanstack/react-virtual" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @tanstack/react-virtual
```

#### react-window
React 虚拟列表

<NpmBadgeGroup repo="bvaughn/react-window">
  <NpmBadge name="react-window" type="version" />
  <NpmBadge name="react-window" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i react-window
```

#### vue-virtual-scroller
Vue 虚拟滚动

<NpmBadgeGroup repo="Akryum/vue-virtual-scroller">
  <NpmBadge name="vue-virtual-scroller" type="version" />
  <NpmBadge name="vue-virtual-scroller" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i vue-virtual-scroller
```

### 代码高亮

#### prismjs
轻量级代码高亮

<NpmBadgeGroup repo="PrismJS/prism">
  <NpmBadge name="prismjs" type="version" />
  <NpmBadge name="prismjs" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i prismjs
```

#### highlight.js
多语言代码高亮

<NpmBadgeGroup repo="highlightjs/highlight.js">
  <NpmBadge name="highlight.js" type="version" />
  <NpmBadge name="highlight.js" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i highlight.js
```

#### shiki
VS Code 同款高亮

<NpmBadgeGroup repo="shikijs/shiki">
  <NpmBadge name="shiki" type="version" />
  <NpmBadge name="shiki" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i shiki
```

### Markdown 处理

#### marked
Markdown 解析器

<NpmBadgeGroup repo="markedjs/marked">
  <NpmBadge name="marked" type="version" />
  <NpmBadge name="marked" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i marked
```

#### markdown-it
可扩展 Markdown 解析器

<NpmBadgeGroup repo="markdown-it/markdown-it">
  <NpmBadge name="markdown-it" type="version" />
  <NpmBadge name="markdown-it" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i markdown-it
```

#### remark
Markdown 处理器

<NpmBadgeGroup repo="remarkjs/remark">
  <NpmBadge name="remark" type="version" />
  <NpmBadge name="remark" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i remark
```

### 富文本编辑器

#### quill
现代富文本编辑器

<NpmBadgeGroup repo="quilljs/quill">
  <NpmBadge name="quill" type="version" />
  <NpmBadge name="quill" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i quill
```

#### tiptap
模块化编辑器框架

<NpmBadgeGroup repo="ueberdosis/tiptap">
  <NpmBadge name="@tiptap/core" type="version" />
  <NpmBadge name="@tiptap/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @tiptap/core
```

#### lexical
Facebook 编辑器框架

<NpmBadgeGroup repo="facebook/lexical">
  <NpmBadge name="lexical" type="version" />
  <NpmBadge name="lexical" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i lexical
```

---

## 开发工具

### 构建工具

#### vite
下一代前端构建工具

<NpmBadgeGroup repo="vitejs/vite">
  <NpmBadge name="vite" type="version" />
  <NpmBadge name="vite" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D vite
```

#### webpack
模块打包器

<NpmBadgeGroup repo="webpack/webpack">
  <NpmBadge name="webpack" type="version" />
  <NpmBadge name="webpack" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D webpack
```

#### rollup
ES 模块打包器

<NpmBadgeGroup repo="rollup/rollup">
  <NpmBadge name="rollup" type="version" />
  <NpmBadge name="rollup" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D rollup
```

#### rollup-plugin-visualizer
打包体积可视化分析

<NpmBadgeGroup repo="btd/rollup-plugin-visualizer">
  <NpmBadge name="rollup-plugin-visualizer" type="version" />
  <NpmBadge name="rollup-plugin-visualizer" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D rollup-plugin-visualizer
```

#### vite-plugin-compression
Vite gzip 压缩插件

<NpmBadgeGroup repo="vbenjs/vite-plugin-compression">
  <NpmBadge name="vite-plugin-compression" type="version" />
  <NpmBadge name="vite-plugin-compression" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D vite-plugin-compression
```

#### vite-plugin-imagemin
图片压缩优化插件

<NpmBadgeGroup repo="vbenjs/vite-plugin-imagemin">
  <NpmBadge name="vite-plugin-imagemin" type="version" />
  <NpmBadge name="vite-plugin-imagemin" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D vite-plugin-imagemin
```

#### @vitejs/plugin-legacy
传统浏览器兼容

<NpmBadgeGroup repo="vitejs/vite">
  <NpmBadge name="@vitejs/plugin-legacy" type="version" />
  <NpmBadge name="@vitejs/plugin-legacy" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D @vitejs/plugin-legacy
```

#### terser
JavaScript 压缩工具

<NpmBadgeGroup repo="terser/terser">
  <NpmBadge name="terser" type="version" />
  <NpmBadge name="terser" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D terser
```

### 代码质量

#### eslint
JavaScript 代码检查

<NpmBadgeGroup repo="eslint/eslint">
  <NpmBadge name="eslint" type="version" />
  <NpmBadge name="eslint" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D eslint
```

#### prettier
代码格式化

<NpmBadgeGroup repo="prettier/prettier">
  <NpmBadge name="prettier" type="version" />
  <NpmBadge name="prettier" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D prettier
```

#### husky
Git hooks 工具

<NpmBadgeGroup repo="typicode/husky">
  <NpmBadge name="husky" type="version" />
  <NpmBadge name="husky" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D husky
```

### 测试工具

#### vitest
Vite 原生测试框架

<NpmBadgeGroup repo="vitest-dev/vitest">
  <NpmBadge name="vitest" type="version" />
  <NpmBadge name="vitest" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D vitest
```

#### jest
JavaScript 测试框架

<NpmBadgeGroup repo="jestjs/jest">
  <NpmBadge name="jest" type="version" />
  <NpmBadge name="jest" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D jest
```

#### playwright
E2E 测试工具

<NpmBadgeGroup repo="microsoft/playwright">
  <NpmBadge name="playwright" type="version" />
  <NpmBadge name="playwright" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D playwright
```

### 代码优化工具
| 包名 | 说明 | 安装 |
|---|---|---|
| **[knip](https://github.com/webpro/knip)** | 删除 JS/TS 项目死代码，月下载量 300w+ | `npm i -D knip` |
| **[depcheck](https://github.com/depcheck/depcheck)** | 分析未使用的依赖项，月下载量 400w+ | `npm i -D depcheck` |
| **[purgecss](https://github.com/FullHuman/purgecss)** | 移除未使用的 CSS 代码，月下载量 300w+ | `npm i -D @fullhuman/postcss-purgecss` |

#### Knip - 死代码检测工具
**功能特点**：
- 删除未使用的文件、依赖项、导入导出
- 检测重复导出和未使用的类型定义
- TypeScript、ESLint、Prettier、Nuxt.js 等知名项目都在使用
- 支持多种配置文件格式

**使用示例**：
```bash
# 安装
npm i -D knip

# 添加到 package.json
"scripts": {
  "knip": "knip"
}

# 运行检查
npm run knip
```

#### depcheck - 依赖分析工具
**功能特点**：
- 查看每个依赖项如何使用
- 检测未使用的依赖项
- 发现缺少的依赖项
- 支持各种模块系统和构建工具

**使用示例**：
```bash
# 全局安装
npm i -g depcheck

# 在项目根目录运行
depcheck

# 忽略某些依赖
depcheck --ignores="eslint,babel-*"
```

#### PurgeCSS - CSS 优化工具
**功能特点**：
- 分析 HTML、JS、模板文件中实际使用的 CSS
- 移除未引用的样式规则
- 大幅减少 CSS 文件体积
- 支持与各种构建工具集成

**使用示例**：
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
```

### Vue 生态增强

#### @vueuse/core
Vue 组合式 API 工具集

<NpmBadgeGroup repo="vueuse/vueuse">
  <NpmBadge name="@vueuse/core" type="version" />
  <NpmBadge name="@vueuse/core" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i @vueuse/core
```

#### vue-request
Vue 请求库，支持 SWR

<NpmBadgeGroup repo="AttoJS/vue-request">
  <NpmBadge name="vue-request" type="version" />
  <NpmBadge name="vue-request" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i vue-request
```

#### unplugin-auto-import
自动导入 API

<NpmBadgeGroup repo="unplugin/unplugin-auto-import">
  <NpmBadge name="unplugin-auto-import" type="version" />
  <NpmBadge name="unplugin-auto-import" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D unplugin-auto-import
```

#### unplugin-vue-components
组件自动导入

<NpmBadgeGroup repo="unplugin/unplugin-vue-components">
  <NpmBadge name="unplugin-vue-components" type="version" />
  <NpmBadge name="unplugin-vue-components" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D unplugin-vue-components
```

#### vite-plugin-pages
文件路由自动生成

<NpmBadgeGroup repo="hannoeru/vite-plugin-pages">
  <NpmBadge name="vite-plugin-pages" type="version" />
  <NpmBadge name="vite-plugin-pages" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D vite-plugin-pages
```

#### @vant/auto-import-resolver
Vant 组件自动导入

<NpmBadgeGroup repo="youzan/vant">
  <NpmBadge name="@vant/auto-import-resolver" type="version" />
  <NpmBadge name="@vant/auto-import-resolver" type="dm" />
  <NpmBadge type="stars" />
</NpmBadgeGroup>

```bash
npm i -D @vant/auto-import-resolver
```

### CSS 框架与工具
| 包名 | 说明 | 安装 |
|---|---|---|
| **[unocss](https://unocss.dev/)** | 即时原子化 CSS 引擎 | `npm i -D unocss` |
| **[@unocss/preset-icons](https://unocss.dev/presets/icons)** | 纯 CSS 图标方案 | `npm i -D @unocss/preset-icons` |
| **[@unocss/preset-uno](https://unocss.dev/presets/uno)** | UnoCSS 默认预设 | `npm i -D @unocss/preset-uno` |
| **[@unocss/preset-attributify](https://unocss.dev/presets/attributify)** | 属性化模式 | `npm i -D @unocss/preset-attributify` |
| **[postcss-mobile-forever](https://github.com/yisibell/postcss-mobile-forever)** | 移动端适配方案 | `npm i -D postcss-mobile-forever` |

### 图片处理
| 包名 | 说明 | 安装 |
|---|---|---|
| **[sharp](https://sharp.pixelplumbing.com/)** | 高性能图片处理 | `npm i sharp` |
| **[imagemin](https://github.com/imagemin/imagemin)** | 图片压缩工具 | `npm i imagemin` |
| **[imagemin-svgo](https://github.com/imagemin/imagemin-svgo)** | SVG 优化 | `npm i imagemin-svgo` |

### 文件压缩
| 包名 | 说明 | 安装 |
|---|---|---|
| **[archiver](https://github.com/archiverjs/node-archiver)** | 文件压缩打包 | `npm i archiver` |
| **[fs-extra](https://github.com/jprichardson/node-fs-extra)** | 增强版文件系统操作 | `npm i fs-extra` |

### 二维码生成
| 包名 | 说明 | 安装 |
|---|---|---|
| **[qrcode](https://github.com/soldair/node-qrcode)** | 二维码生成器 | `npm i qrcode` |

### 语雀工具
| 包名 | 说明 | 安装 |
|---|---|---|
| **[yuque-dl](https://github.com/yuque/yuque-dl)** | 语雀文档批量导出工具 | `npm i -g yuque-dl` |

---

---

## 相关资源

- [npm 官网](https://www.npmjs.com/) - 搜索和浏览包
- [npms.io](https://npms.io/) - 更好的包搜索体验
- [bundlephobia](https://bundlephobia.com/) - 查看包大小
- [npm trends](https://npmtrends.com/) - 包下载趋势对比
- [packagephobia](https://packagephobia.com/) - 包安装大小分析

---

## 个人常用 NPM 包推荐

基于 Vue3 移动端项目的实践经验，以下是我常用的 NPM 包组合：