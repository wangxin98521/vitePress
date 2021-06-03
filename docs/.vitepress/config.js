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
        sidebarDepth: 1,
        displayAllHeaders: true, // 显示所有页面的标题链接
        nav: [
            { text: '首页', link: '/' },
            { text: '分类', link: '/Classify/' },
            {
                text: 'Languages',
                items: [
                    { text: '首页', link: '/' },
                    { text: '分类', link: '/tags/' },
                ]
            },
        ],
        sidebar: {
            '/TechnologyStack/' : [
                {
                    text: '技术栈',
                    collapsable: false,
                    children: [
                        { text: 'vitePress', link: '/TechnologyStack/vitePress/', collapsable: false, },
                        { text: 'aa', link: '/TechnologyStack/vitePress/aa' },
                    ]
                }
            ],
        },
        repo: 'wangxin98521/vitePress', // 仓库
        repoLabel: '查看源码',
    },

    plugins: [
        [
            '@vuepress/last-updated',
            {
                dateOptions:{
                    hour12: false
                }
            }
        ]
    ],
    // 服务配置
    // host: 0.0.0.0, // 指定用于 dev server 的主机名
    // port: 9090, // 运行时的 端口号
}
