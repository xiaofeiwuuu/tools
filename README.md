# Web Tools - 工具站集合

一个基于 VuePress 和 Plume 主题构建的现代化工具集文档站点，提供丰富的开发工具推荐和技术资源整理。

![Logo](https://github.com/xiaofeiwuuu/xiaofeiwuuu/blob/main/logo.png?raw=true)

## 🌟 项目特性

- 📚 **全面的工具集合** - 涵盖 NPM 包、VSCode 扩展、CSS 动画、UI 组件等多个技术领域
- 🎨 **现代化界面** - 基于 VuePress 2.0 + Plume 主题，支持深色模式切换
- 🔍 **强大的搜索** - 内置本地搜索功能，快速定位所需内容
- 📱 **响应式设计** - 完美适配桌面端和移动端设备
- ⚡ **极速构建** - 使用 Vite 作为打包工具，支持编译缓存
- 🚀 **自动化部署** - 集成 GitHub Actions，一键部署到 GitHub Pages

## 📂 项目结构

```
web-tools/
├── docs/                      # 文档内容
│   ├── .vuepress/            # VuePress 配置
│   │   ├── config.js         # 主配置文件
│   │   ├── plume.config.js   # 主题配置
│   │   ├── navbar.js         # 导航栏配置
│   │   └── notes.js          # 笔记配置
│   ├── notes/                # 笔记内容
│   │   └── tools/           # 工具推荐笔记
│   │       ├── ai-tools.md         # AI 工具
│   │       ├── image-tools.md      # 图片处理工具
│   │       ├── office-tools.md     # 办公工具
│   │       ├── resource-download.md # 资源下载
│   │       └── video-tools.md      # 视频工具
│   ├── tools/                # 开发工具文档
│   │   ├── npm-packages.md      # NPM 包推荐
│   │   ├── vscode-extensions.md # VSCode 扩展
│   │   ├── css-animations.md    # CSS 动画库
│   │   └── ui-components.md     # UI 组件库
│   └── preview/              # 预览示例
├── .github/                  # GitHub 配置
│   └── workflows/           # GitHub Actions
└── package.json             # 项目配置

```

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| **VuePress** | 2.0.0-rc.24 | 静态站点生成器 |
| **vuepress-theme-plume** | 1.0.0-rc.160 | 功能丰富的主题 |
| **Vue.js** | 3.5.18 | 渐进式 JavaScript 框架 |
| **Vite** | - | 下一代前端构建工具 |
| **pnpm** | 9.15.5 | 快速、节省磁盘空间的包管理器 |
| **Node.js** | ^20.6.0 \|\| >=22.0.0 | JavaScript 运行环境 |

## 🚀 快速开始

### 环境要求

- Node.js 20.6.0 或更高版本
- pnpm 9.15.5 或更高版本

### 安装依赖

```bash
# 使用 pnpm 安装依赖
pnpm install
```

### 开发命令

```bash
# 启动开发服务器（默认端口 8080）
pnpm docs:dev

# 清理缓存后启动开发服务器
pnpm docs:dev-clean

# 构建生产版本
pnpm docs:build

# 本地预览生产版本
pnpm docs:preview

# 更新 VuePress 和主题到最新版本
pnpm vp-update
```

## 📝 内容分类

### 🔧 开发工具
- **NPM 包推荐** - 精选实用的 NPM 包，包括包管理工具、实用工具库、开发工具等
- **VSCode 扩展** - 提升开发效率的 VSCode 插件推荐
- **CSS 动画库** - 各种流行的 CSS 动画效果库
- **UI 组件库** - Vue、React 等框架的 UI 组件库推荐

### 🎯 在线工具
- **AI 工具** - ChatGPT、Claude、Midjourney 等 AI 工具集合
- **图片处理** - 在线图片编辑、压缩、格式转换工具
- **视频工具** - 视频编辑、转换、下载工具
- **办公工具** - 文档处理、思维导图、协作工具
- **资源下载** - 各类资源下载站点推荐

## 🌐 部署

### GitHub Pages 部署

项目已配置 GitHub Actions 自动部署，推送到 `main` 分支后会自动构建并部署到 GitHub Pages。

#### 部署步骤：

1. **设置仓库权限**
   - 进入 `Settings > Actions > General`
   - 在 `Workflow permissions` 下选择 `Read and write permissions`
   - 点击保存

2. **配置 Pages**
   - 进入 `Settings > Pages`
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `gh-pages`
   - 点击保存

3. **配置基础路径**（如需要）
   - 如果部署到 `https://<USERNAME>.github.io/`，保持默认配置
   - 如果部署到 `https://<USERNAME>.github.io/<REPO>/`，修改 `docs/.vuepress/config.js` 中的 `base` 为 `"/<REPO>/"`

### 自定义域名

如需配置自定义域名，请参考 [GitHub Pages 自定义域名文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来完善这个工具集合！

### 贡献步骤

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 内容贡献

如果你有好的工具推荐，可以：
- 在对应的 Markdown 文件中添加内容
- 保持格式统一
- 提供简要的工具描述和使用场景

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🔗 相关链接

- [VuePress 官方文档](https://vuepress.vuejs.org/)
- [VuePress Theme Plume](https://theme-plume.vuejs.press/)
- [项目作者 GitHub](https://github.com/xiaofeiwuuu)

## 👥 作者

- **小废物** - *Initial work* - [xiaofeiwuuu](https://github.com/xiaofeiwuuu)
- 📧 联系邮箱：3176430647@qq.com

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/xiaofeiwuuu">小废物</a>
</p>

<p align="center">
  Powered by <a href="https://vuepress.vuejs.org/">VuePress</a> & <a href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>
</p>