/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.js` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  // {
  //   text: '笔记',
  //   items: [
  //     { text: '示例', link: '/notes/demo/README.md' },
  //     { text: '工具集合', link: '/notes/tools/README.md' }
  //   ]
  // },
  {
    text: '工具箱',
    items: [
      { text: '全部工具', link: '/notes/tools/README.md' },
      { text: '图片工具', link: '/notes/tools/image-tools.md' },
      { text: '视频工具', link: '/notes/tools/video-tools.md' },
      { text: 'AI工具', link: '/notes/tools/ai-tools.md' },
      { text: '办公工具', link: '/notes/tools/office-tools.md' },
      { text: '资源下载', link: '/notes/tools/resource-download.md' }
    ]
  },
  {
    text: '开发资源',
    items: [
      { text: '开发工具资源', link: '/tools/' },
      { text: 'UI 组件库', link: '/tools/ui-components/' },
      { text: 'CSS 动画库', link: '/tools/css-animations/' },
      { text: 'NPM 包推荐', link: '/tools/npm-packages/' },
      { text: 'VSCode 插件推荐', link: '/tools/vscode-extensions/' }
    ]
  },
])
