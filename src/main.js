import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import VueI18n from 'vue-i18n'
import locales from './i18n/locales'
import VueMoment from 'vue-moment'
import VeeValidate from 'vee-validate'
import scroll from 'vue-seamless-scroll'

import App from './App'

Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(VueI18n)
Vue.use(VueMoment)
Vue.use(scroll)
Vue.use(VeeValidate, {
  errorBagName: 'vErrors'
})

Vue.use(VeeValidate)

let navLang = navigator.language || navigator.userLanguage
if (navLang === 'zh-CN' || navLang === 'zh-cn') {
    Vue.config.lang = 'cn'
} else if (navLang === 'en-US' || navLang === 'en-us') {
    Vue.config.lang = 'en'
} else {
    Vue.config.lang = 'cn'
}
Object.keys(locales).forEach(lang => {
    Vue.locale(lang, locales[lang])
})

let token = VueCookie.get('access_token')
if (token) {
    Vue.http.headers.common['Authorization'] = 'Bearer ' + token
}

const app = new Vue({
    router,
    ...App
}).$mount('#app')

export { app, router }
