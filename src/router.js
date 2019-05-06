import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
    {
        path: '/home',
        redirect: { name: 'home' }
    },
    {
        path: '/',
        component: function (resolve) {
            require(['./views/index.vue'], resolve)
        },
        name: 'home'
    }]
})
