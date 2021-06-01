import DefaultTheme from 'vitepress/dist/client/theme-default';
import tag from './component/tag.vue';
import text from './component/text.vue';

export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('tag', tag); // 注册组件
        app.component('wx', text);
    },
}
