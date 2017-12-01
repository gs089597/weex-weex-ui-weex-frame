<template>
    <div style="flex-direction: column;">
        <vue-progress-bar/>
        <osc-tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick" router></osc-tabbar>
    </div>
</template>
<script>
    import route from '@/router/page'
    import config from '@/config'
    import tabbar from '@/components/osc-tabbar'
    import navigator from '@/utils/navigator'
    import mixins from '@/utils/mixins'
    export default {
        mixins: [mixins],
        components : {
            oscTabbar : tabbar
        },
        data() {
            return {
                tabItems: [
                    {
                        index: 0,
                        title: '首页',
                        titleColor: '#b7b7b7',
                        icon: '',
                        image: `${config.Resource.iconUrl}icon-005.png`,
                        selectedImage: `${config.Resource.iconUrl}icon-006.png`,
                        src: `${navigator.getBaseUrl()}${route.main.jsPath}.js`,
                        path: route.main,
                        visibility: 'visible'
                    },
                    {
                        index: 1,
                        title: '记账',
                        titleColor: '#b7b7b7',
                        icon: '',
                        image: `${config.Resource.iconUrl}icon-007.png`,
                        selectedImage: `${config.Resource.iconUrl}icon-008.png`,
                        src: `${navigator.getBaseUrl()}${route.aaa.jsPath}.js`,
                        path: route.aaa,
                        visibility: 'hidden'
                    },
                    {
                        index: 2,
                        title: '好友',
                        titleColor: '#b7b7b7',
                        icon: '',
                        image: `${config.Resource.iconUrl}icon-031.png`,
                        selectedImage: `${config.Resource.iconUrl}icon-032.png`,
                        src: `${navigator.getBaseUrl()}${route.main.jsPath}.js`,
                        path: route.main,
                        visibility: 'hidden'
                    },
                    {
                        index: 3,
                        title: '我的',
                        titleColor: '#b7b7b7',
                        icon: '',
                        image: `${config.Resource.iconUrl}icon-026.png`,
                        selectedImage: `${config.Resource.iconUrl}icon-030.png`,
                        src: `${navigator.getBaseUrl()}${route.main.jsPath}.js`,
                        path: route.main,
                        visibility: 'hidden'
                    }
                ]
            }
        },
        created() {
            this.$Progress.start()
            // 钩进度条开始之前router-view移动
            this.$router.beforeEach((to, from, next) => {
                // 设置转场参数
                this.$Progress.parseMeta({
                    func: [
                        {call: 'color', modifier: 'temp', argument: '#f64b78'},
                        {call: 'fail', modifier: 'temp', argument: '#f64b78'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.0s', opacity: '0.2s'}}
                    ]
                })
                // 启动动画
                this.$Progress.start()
                // 跳转目标路由
                next()
            })
            // 路由进度条完成后完成router-view移动
            this.$router.afterEach((to, from) => {
                this.$Progress.finish()
            })
        },
        mounted() {
            this.$Progress.finish()
        },
        methods: {
            tabBarOnClick(e) {
                this.router.push({
                    page: this.tabItems[e.index].path
                })
            }
        }
    }
</script>