import Vue from 'vue'
import VueResource from 'vue-resource'
import urls from '../urls'

Vue.use(VueResource)

export default {
    fetchMember (cb, successCb, errorCb) {
        return Vue.http.get(urls.member + '?opt_expand=1').then((response) => {
            cb(response.data)
            if (successCb) {
                successCb(response.data)
            }
        }, (response) => {
            if (errorCb) {
                errorCb(response)
            }
        })
    }
}
