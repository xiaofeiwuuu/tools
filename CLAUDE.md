# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 VuePress 和 vuepress-theme-plume 主题的文档/工具站点项目。

## 常用命令

### 开发与构建
```bash
# 安装依赖（使用 pnpm）
pnpm i

# 启动开发服务器
pnpm docs:dev

# 清理缓存后启动开发服务器
pnpm docs:dev-clean

# 构建生产版本
pnpm docs:build

# 本地预览生产构建
pnpm docs:preview

# 更新 VuePress 和主题
pnpm vp-update
```

## 项目结构

### 核心配置文件
- `docs/.vuepress/config.js` - VuePress 主配置文件（修改会重启服务）
- `docs/.vuepress/plume.config.js` - 主题配置文件（支持热更新）
- `docs/.vuepress/navbar.js` - 导航栏配置
- `docs/.vuepress/notes.js` - 笔记配置

### 内容目录
- `docs/` - 所有文档内容
- `docs/notes/` - 笔记内容
- `docs/preview/` - 预览示例

## 技术栈

- **框架**: VuePress 2.0.0-rc.24
- **主题**: vuepress-theme-plume 1.0.0-rc.160
- **包管理器**: pnpm@9.15.5
- **Node版本要求**: ^20.6.0 || >=22.0.0
- **打包工具**: Vite

## 部署配置

项目使用 GitHub Actions 自动部署到 GitHub Pages：
- 工作流文件: `.github/workflows/deploy.yml`
- 触发条件: 推送到 main 分支
- 部署分支: gh-pages
- 构建输出: `docs/.vuepress/dist`

### 部署注意事项
- 如需部署到自定义路径，修改 `docs/.vuepress/config.js` 中的 `base` 配置
- 默认部署到 `https://<USERNAME>.github.io/`
- 若部署到 `https://<USERNAME>.github.io/<REPO>/`，设置 `base: "/<REPO>/"`

## 开发指南

### 配置修改
- `config.js` 中的修改会导致服务重启
- `plume.config.js` 中的大部分修改支持热更新
- 避免在两个配置文件中重复配置相同项目

### 主题功能
- 支持深色模式切换
- 内置本地搜索功能
- 支持多种 Markdown 扩展语法
- 可配置博客功能、评论系统、水印等

### 缓存优化
项目启用了编译缓存 (`cache: 'filesystem'`) 以加快编译速度