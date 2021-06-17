module.exports = {
    title: '苏年璟',
    lang: 'zh-US', // 语言
    description: '描述文字',
    theme: 'theme',
	bese: '/vuepress',
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
                text: '技术栈',
                items: [
                    { text: 'Vue', link: '/TechnologyStack/Vue/vitePress' },
                    { text: '原生', link: '/Classify/' },
                ]
            },
        ],
        sidebar: {
            '/TechnologyStack/' : [
                {
                    text: 'Vue',
                    collapsable: true,
                    children: [
                        { text: 'vitePress', link: '/TechnologyStack/Vue/vitePress', },
                    ]
                },
                {
                    text: '原生',
                    collapsable: true,
                    children: [
                        { text: 'JavaScript', link: '/TechnologyStack/Native/JavaScript', },
                        { text: 'TypeScript', link: '/TechnologyStack/Native/TypeScript', },
                        { text: 'TypeScript1', link: '/Instance/Native/JavaScript/Array', },
                    ]
                },
                {
                    text: '其他',
                    children: [
                        { text: 'Git', link: '/TechnologyStack/Other/git', },
                    ]
                }
            ],
        },
        repo: 'wangxin98521/vitePress', // 仓库
        repoLabel: '查看源码',
    },
    // 服务配置
    // host: 0.0.0.0, // 指定用于 dev server 的主机名
    // port: 9090, // 运行时的 端口号
}
