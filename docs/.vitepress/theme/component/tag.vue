<template>
    <div class="tagBox">
        <a v-for="(item, index) in tagArray" :key="index" :href="item.path"> {{ item.name }} </a>
    </div>
</template>

<script setup>
const tagArray = [
    { name: 'vitePress', path: '/TechnologyStack/vitePress/' },
    { name: 'foo', path: '/foo/' },
];
</script>
<style scoped>
.tagBox {
    padding: 20px 0;
    border: 1px solid red;
}
a {
    padding: 20px;
}
</style>
