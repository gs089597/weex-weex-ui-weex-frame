<template>
    <div style="flex-direction: column;">
        <osc-tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></osc-tabbar>
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
        methods: {
            tabBarOnClick(e) {
                console.log('tabBarOnClick', e.index)
            }
        }
    }
</script>