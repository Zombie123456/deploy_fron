<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    },
    components: {
        CommonStyle: require('components/style.vue')
    }
}
</script>

<style @lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
</style>
