import { defineClientConfig } from 'vuepress/client'
import WechatModal from './components/WechatModal.vue'
import WechatListener from './components/WechatListener.vue'

// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
    enhance({ app }) {
    // 注册全局组件
    app.component('WechatModal', WechatModal)
    app.component('WechatListener', WechatListener)
  },
  rootComponents: [
    // 全局监听组件
    WechatListener
  ]
})
