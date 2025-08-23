import comp from "/Users/xiaofeiwu/Documents/my-test/my-tools/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"wuuuu\",\"tagline\":\"全能线上工具合集\",\"text\":\"这里收录了精选的实用软件、AI 工具、效率神器、趣味小站…… 让工作、学习和生活更高效有趣。 关注公众号【无忧不忧】，发现更多隐藏宝藏！\",\"actions\":[{\"theme\":\"brand\",\"text\":\"立即探索 →\",\"link\":\"/notes/tools/\"},{\"theme\":\"alt\",\"text\":\"AI工具集合\",\"link\":\"/notes/tools/ai-tools.md\"},{\"theme\":\"alt\",\"text\":\"关注公众号\",\"link\":\"#wechat\"}]}},{\"type\":\"custom\"}]},\"readingTime\":{\"minutes\":3.42,\"words\":1026},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
