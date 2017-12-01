import App from './web.vue'
import router from './router'
import VueProgressBar from 'vue-progressbar'
// 安装全局配置module
weex.registerModule('user', {
    getUser(callBack) {
        callBack({
            userId: '312790',
            token: 'b636f162-ef52-47a1-aeb6-76323f294a79'
        })
    }
})

Vue.use(VueProgressBar, {
    thickness: '5px',
    color: '#f64b78',
    autoRevert: true,
    location: 'top',
    inverse: false
})

new Vue({
    el: '#root',
    router,
    template: '<App/>',
    components: {
        App
    }
})