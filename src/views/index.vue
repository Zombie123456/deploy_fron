<template>
    <div>
       <img :src="showImg">
    </div>
</template>
<script>
import urls from '../urls'

export default {
    data() {
        return {
           showImg: '' 
        }
    },
    created() {
        this.getList()
    },
    computed: {
    },
    methods: {
        getList () {
            this.$http.get(urls.getImg)
            .then((res) => {
                if (res.data.code === 2000) {
                    this.showImg = res.data.data.captcha_src
                }
            })
        }
    },
    components: {
    }
};
</script>
<style scoped lang="less">

</style>


