import comp from "/Users/xiaofeiwu/Documents/my-test/my-tools/docs/.vuepress/.temp/pages/demo/x6b6ts7c/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/x6b6ts7c/\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/08/12 12:32:40\",\"permalink\":\"/demo/x6b6ts7c/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"notes/demo/foo.md\",\"headers\":[]}")
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
