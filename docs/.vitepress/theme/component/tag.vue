<template>
    <div class="pageBox">

        <div class="tagBox" v-for="(tag, index) in tagArray" :key="index">
            <h4>{{ tag.name }}</h4>
            <div v-for="content in tag.childList">
                <a v-for="(item, idx) in content" :key="idx" :href="item.path" :target=" tag.target || item.target ? '_blank' : '_self' "> {{ item.name }} </a>
            </div>
        </div>

    </div>
</template>

<script setup>
// target 是否在新窗口中打开
const tagArray = [
    {
        name: '官网:',
        target: true,
        childList: [
            [
                { name: 'Vue', path: 'https://cn.vuejs.org/' },
                { name: 'Vue-Router', path: 'https://router.vuejs.org/zh/' },
                { name: 'Vuex', path: 'https://vuex.vuejs.org/zh/' },
                { name: 'Ant Design Vue', path: 'https://www.antdv.com/docs/vue/introduce-cn/' },
            ],
            [
                { name: 'Vue', path: 'https://cn.vuejs.org/' },
                { name: 'Vue-Router', path: 'https://router.vuejs.org/zh/' },
            ]
        ]
    },
    {
        name: '技术:',
        childList: [
            [
                { name: 'vitePress', path: '/TechnologyStack/Vue/vitePress' },
                { name: 'foo', path: '/foo/' },
            ]
        ]
    },
    {
        name: '工具:',
        childList: [
            [
                { name: 'vitePress', path: '/TechnologyStack/Vue/' },
                { name: 'foo', path: '/foo/' },
            ]
        ]
    }

];
</script>
<style scoped>
.tagBox {
    padding: 20px 0;
    /*border: 1px solid red;*/
}
h4 {
    margin-bottom: 12px;
}
a {
    display: inline-block;
    padding: 20px;
}
</style>
