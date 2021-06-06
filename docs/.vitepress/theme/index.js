import DefaultTheme from 'vitepress/dist/client/theme-default';
import tag from './component/tag.vue';

export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('tag', tag); // 注册组件
    },
}
