/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.js` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.js` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import notes from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://github.com/xiaofeiwuuu/xiaofeiwuuu/blob/main/logo.png?raw=true',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/xiaofeiwuuu' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">无忧</a> & <a target="_blank" href="https://theme-plume.vuejs.press">无忧不忧</a>',
    copyright: '',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'web-tools',
    description: '工具站集合',
    circle: true,
    location: '',
    organization: '',
  },

  navbar,
  notes,
  
  /**
   * 自定义侧边栏配置
   * @see https://theme-plume.vuejs.press/config/navigation/#sidebar
   */
  sidebar: {
    '/tools/npm-packages/': [
      {
        text: 'NPM 包推荐',
        collapsed: false,  // 可折叠，默认展开
        items: [
          {
            text: '包管理工具',
            collapsed: true,  // 可折叠，默认折叠
            items: [
              { text: '工具关系图解', link: '#工具关系图解' },
              { text: '各工具详解', link: '#各工具详解' },
              { text: '性能对比', link: '#性能对比' },
              { text: '使用建议', link: '#使用建议' },
            ]
          },
          {
            text: '实用工具库',
            collapsed: true,  // 可折叠，默认折叠
            items: [
              { text: '日期时间处理', link: '#日期时间处理' },
              { text: '工具函数库', link: '#工具函数库' },
              { text: '动画库', link: '#动画库' },
              { text: '拖拽排序', link: '#拖拽排序' },
              { text: '用户引导', link: '#用户引导' },
              { text: '图表可视化', link: '#图表可视化' },
              { text: '流程图/图编辑', link: '#流程图-图编辑' },
              { text: '进度条', link: '#进度条' },
              { text: '文字识别 (OCR)', link: '#文字识别-ocr' },
              { text: '安全相关', link: '#安全相关' },
              { text: '前端监控', link: '#前端监控' },
              { text: 'HTTP 请求', link: '#http-请求' },
              { text: '表单验证', link: '#表单验证' },
              { text: '状态管理', link: '#状态管理' },
              { text: '样式处理', link: '#样式处理' },
              { text: '文件处理', link: '#文件处理' },
              { text: '虚拟列表', link: '#虚拟列表' },
              { text: '代码高亮', link: '#代码高亮' },
              { text: 'Markdown 处理', link: '#markdown-处理' },
              { text: '富文本编辑器', link: '#富文本编辑器' },
            ]
          },
          {
            text: '开发工具',
            collapsed: true,  // 可折叠，默认折叠
            items: [
              { text: '构建工具', link: '#构建工具' },
              { text: '代码质量', link: '#代码质量' },
              { text: '测试工具', link: '#测试工具' },
              { text: '代码优化工具', link: '#代码优化工具' },
            ]
          },
          {
            text: 'Vue 生态',
            collapsed: true,  // 可折叠，默认折叠
            items: [
              { text: 'Vue 生态增强', link: '#vue-生态增强' },
              { text: 'CSS 框架与工具', link: '#css-框架与工具' },
            ]
          },
          {
            text: '其他工具',
            collapsed: true,  // 可折叠，默认折叠
            items: [
              { text: '图片处理', link: '#图片处理' },
              { text: '文件压缩', link: '#文件压缩' },
              { text: '二维码生成', link: '#二维码生成' },
              { text: '语雀工具', link: '#语雀工具' },
            ]
          },
          {
            text: '相关资源',
            collapsed: true,  // 可折叠，默认折叠
            items: [
              { text: '相关资源', link: '#相关资源' },
            ]
          },
          {
            text: '个人常用 NPM 包',
            collapsed: true,  // 可折叠，默认折叠
            items: [
              { text: '核心依赖', link: '#核心依赖' },
              { text: '样式与构建', link: '#样式与构建' },
              { text: '开发工具', link: '#开发工具' },
              { text: '工具库', link: '#工具库' },
              { text: '推荐理由', link: '#推荐理由' },
            ]
          },
        ]
      }
    ]
  },

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
