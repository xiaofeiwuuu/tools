import comp from "/Users/xiaofeiwu/Documents/my-test/my-tools/docs/.vuepress/.temp/pages/demo/8gvvgsf3/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/8gvvgsf3/\",\"title\":\"bar\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2025/08/12 12:32:40\",\"permalink\":\"/demo/8gvvgsf3/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"notes/demo/bar.md\",\"headers\":[]}")
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
