import navigator from './navigator'
// import model from 'utils/modules/model'
import routerPage from '@/router/page'
import {getQueryStringByName} from './function'
export default {
    data() {
        return {
            // model,
            routerPage,
            router: {},
            platform: weex.config.env.platform.toLowerCase()
        }
    },

    created() {
        let self = this
        this.router.push = function ({page, params, query}) {
            if (self.platform === 'web') {
                if (page === self.routerPage.web) {
                    navigator.pushByUrl(query.url)
                    return
                }
                self.$router.push({
                    path: page.path,
                    params: params,
                    query: query
                })
                return
            }
            navigator.push(page, query)
        }

        this.router.replace = function ({page, params, query}) {
            if (self.platform === 'web') {
                self.$router.replace({
                    path: page.path,
                    params: params,
                    query: query
                })
                return
            }
            navigator.push(page, query)
            navigator.pop()
        }

        this.router.pop = function () {
            if (self.platform === 'web') {
                self.$router.back()
                return
            }
            navigator.pop()
        }
    },

    methods: {
        getQuery(key) {
            return this.platform === 'web' ? this.$route.query[key] : getQueryStringByName(key)
        }
    }
}