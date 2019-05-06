'use strict'
import VueCookie from 'vue-cookie'

export default {
    isLoggedIn () {
        let token = VueCookie.get('access_token')
        return token
    }
}
