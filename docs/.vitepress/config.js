module.exports = {
    title: '苏年璟',
    lang: 'zh-US', // 语言
    description: '描述文字',
    theme: 'theme',
    markdown: {
        lineNumbers: true, // 是否展示行号
    },
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '更新时间', // string | boolean
        displayAllHeaders: true, // 显示所有页面的标题链接
        sidebar: {
            '/vitePress/' : [
                {
                    text: '技术栈',
                    children: [
                        { text: 'vitePress', link: '/foo/'},
                        { text: 'aa', link: '/vitePress/aa'},
                    ]
                }
            ],
            '/tags/': [
                {
                    text: 'vui',
                    children: [
                        {text: '介绍', link: '/'},
                        {text: '日志', link: '/foo/'},
                    ],
                },
                {
                    text: 'vuu',
                    children: [
                        {text: '介绍1', link: '/tags/'},
                    ],
                },
            ],
            '/foo/': [
                {
                    text: 'vui',
                    children: [
                        {text: '介绍', link: '/'},
                        {text: '日志', link: '/foo/'},
                    ],
                },
            ]
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '分类', link: '/tags/' },
        ],
    },
    // 服务配置
    // host: 0.0.0.0, // 指定用于 dev server 的主机名
    // port: 9090, // 运行时的 端口号
}
