module.exports = {
  title: '苏年璟',
  lang: 'zh-US',
  description: '描述文字',
   markdown: {
    lineNumbers: true,
	anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      // md.use(require('markdown-it-xxx'))
    }
  },
}