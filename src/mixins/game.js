import Vue from 'vue'
import urls from '../urls'

function getGameLink (route, providerCode, gamecode) {
    let authCookie = Vue.http.headers.common['Authorization']
    if (authCookie) {
        // return external links to provider's website
        return `${urls.launchgame}?provider=${providerCode}&game=${gamecode}&token=${authCookie.split(' ').pop()}&platform=0`
    } else {
        let location = window.location
        // return internal links
        return `${location.protocol}//${location.hostname}:${location.port}/#/login?next=${encodeURIComponent(route.fullPath)}`
    }
}

export default {
    methods: {
        launch: (route, providerCode, gamecode, event) => {
            let link = getGameLink(route, providerCode, gamecode)
            let authCookie = Vue.http.headers.common['Authorization']
            event.preventDefault()
            if (authCookie) {
                let accessToken = authCookie.split(' ').pop()
                let gameWindow = window.open(link, '_blank')
                let interval = setInterval(() => {
                    try {
                        if (gameWindow === null || gameWindow.closed) {
                            clearInterval(interval)
                            let url = `${urls.notify}?access_token=${accessToken}&provider=${providerCode}`
                            Vue.http.get(url).then(() => {
                                console.log(`Page from provider ${providerCode} and gamecode ${gamecode} colosed, notify successfully.`)
                            }, () => {
                                console.log(`Page from provider ${providerCode} and gamecode ${gamecode} colosed, but notify failed.`)
                            })
                        }
                    } catch (e) { }
                }, 500)
            } else {
                window.location = link
            }
        }
    }
}
