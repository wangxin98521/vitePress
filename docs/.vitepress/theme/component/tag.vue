<template>
    <div style="width: 100vw;">
        <span v-for="(item, index) in tagArray" :key="index" @click="goPath(item.path)"> {{ item.name }} </span>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup () {
        const router = useRouter();
       const tagArray = [
            {name: 'vitePress', path: '/TechnologyStack/vitePress/'},
            {name: 'foo', path: '/foo/'},
        ];
        function goPath(path) {
            console.log(location.href)
            // console.log('455', router)

        }

        return { tagArray, goPath }
    }
};
</script>
<style>
span {
    padding: 20px;
}
</style>
