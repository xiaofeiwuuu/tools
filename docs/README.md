---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    background: tint-plate
    hero:
      name: wuuuu
      tagline: 全能线上工具合集
      text: 这里收录了精选的实用软件、AI 工具、效率神器、趣味小站……  
            让工作、学习和生活更高效有趣。  
            关注公众号【无忧不忧】，发现更多隐藏宝藏！
      actions:
        -
          theme: brand
          text: 立即探索 →
          link: /notes/tools/
        -
          theme: alt
          text: AI工具集合
          link: /notes/tools/ai-tools.md
        -
          theme: alt
          text: 关注公众号
          link: '#wechat'

  # - type: features
  #   features:
  #     - title: 🖼️ 图片工具
  #       details: 40+ 图片处理工具：抠图、修复、压缩、格式转换、特效生成、商业应用等一站式图片解决方案
  #       link: /notes/tools/image-tools.md
  #     - title: 🎬 视频工具  
  #       details: 30+ 视频创作工具：剪辑软件、AI生成、特效处理、配音字幕、数字人等专业视频制作工具
  #       link: /notes/tools/video-tools.md
  #     - title: 🤖 AI工具
  #       details: 60+ AI应用：ChatGPT、AI绘画、AI视频、AI写作、智能办公等前沿人工智能工具集合
  #       link: /notes/tools/ai-tools.md
  #     - title: 💼 办公工具
  #       details: 15+ 办公神器：PDF处理、PPT制作、文件传输、格式转换、协作工具等提升工作效率
  #       link: /notes/tools/office-tools.md
  #     - title: 📥 资源下载
  #       details: 30+ 资源平台：影视资源、学习资料、软件下载、素材库等各类资源一网打尽
  #       link: /notes/tools/resource-download.md
  #     - title: 🚀 更多工具
  #       details: 持续更新中，收集更多实用、有趣、高效的在线工具，打造你的专属工具箱
  #       link: /notes/tools/

  # - type: text-image
  #   title: 📚 精选工具分类
  #   description: 所有工具都经过精心筛选和分类，让你快速找到需要的工具
  #   image: https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80
  #   list:
  #     - title: 创作者工具
  #       description: 图片编辑、视频制作、音频处理等创意工具
  #     - title: AI智能助手  
  #       description: 聊天机器人、AI绘画、智能写作等AI应用
  #     - title: 效率提升
  #       description: 办公自动化、文件处理、协作工具等
  #     - title: 学习资源
  #       description: 教程资料、在线课程、知识库等学习平台

  # - type: image-text  
  #   title: 🌟 特色推荐
  #   description: 每一个工具都是精心挑选，确保实用、免费、易用
  #   image: https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80
  #   list:
  #     - title: 🔥 热门工具
  #       description: Remove.bg抠图、剪映、Kimi Chat等热门实用工具
  #     - title: 🆓 免费资源
  #       description: 大部分工具完全免费，个别高级功能可能收费
  #     - title: 📱 全平台支持
  #       description: 网页版、桌面版、移动版多端适配
  #     - title: 🔄 持续更新
  #       description: 定期更新工具列表，移除失效链接，添加新工具

  - type: custom
---

<!-- ## 🎯 快速开始

<div class="quick-links">
  <a href="/notes/tools/ai-tools.md" class="quick-link">
    <span class="icon">🤖</span>
    <span class="title">AI工具大全</span>
    <span class="desc">ChatGPT、AI绘画、AI视频等60+工具</span>
  </a>
  <a href="/notes/tools/image-tools.md" class="quick-link">
    <span class="icon">🖼️</span>
    <span class="title">图片处理</span>
    <span class="desc">抠图、修复、压缩等40+工具</span>
  </a>
  <a href="/notes/tools/video-tools.md" class="quick-link">
    <span class="icon">🎬</span>
    <span class="title">视频制作</span>
    <span class="desc">剪辑、特效、配音等30+工具</span>
  </a>
</div> -->

## 📌 使用提示

- 🔗 **所有链接可直接点击跳转** - 每个工具都提供了直接访问链接
- 💡 **工具说明清晰明了** - 每个工具都有功能说明，帮你快速了解
- 🏷️ **分类整理便于查找** - 按功能分类，轻松找到需要的工具
- ⚠️ **部分工具需要科学上网** - 已在工具说明中标注

## 🤝 关于本站

本站由 **无忧不忧** 维护更新，致力于收集和分享优质的在线工具资源。

- 📧 联系方式：公众号【无忧不忧】
- 🔄 更新频率：持续更新，定期维护
- 💬 反馈建议：欢迎通过公众号提供工具推荐和建议

---
<style>
/* 快速链接样式 */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.quick-link {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

html.dark .quick-link {
  background: rgba(30, 30, 30, 0.9);
}

.quick-link:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.quick-link .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.quick-link .title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.quick-link .desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>