import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/xiaofeiwu/Documents/my-test/my-tools/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.160_esbuild@0.25.8_markdown-it@14.1.0_typescript@5.9.2_vuep_kuiptybubsx2rflkv2apsgslsm/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/xiaofeiwu/Documents/my-test/my-tools/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.160_esbuild@0.25.8_markdown-it@14.1.0_typescript@5.9.2_vuep_kuiptybubsx2rflkv2apsgslsm/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/xiaofeiwu/Documents/my-test/my-tools/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.160_esbuild@0.25.8_markdown-it@14.1.0_typescript@5.9.2_vuep_kuiptybubsx2rflkv2apsgslsm/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/xiaofeiwu/Documents/my-test/my-tools/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.160_esbuild@0.25.8_markdown-it@14.1.0_typescript@5.9.2_vuep_kuiptybubsx2rflkv2apsgslsm/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/Users/xiaofeiwu/Documents/my-test/my-tools/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.160_esbuild@0.25.8_markdown-it@14.1.0_typescript@5.9.2_vuep_kuiptybubsx2rflkv2apsgslsm/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
