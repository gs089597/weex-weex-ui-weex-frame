<template>
    <osc-navpage
            :title="title"
            leftItemSrc="https://github.com/osmartian/weex-frame/blob/master/src/views/userinfo/imgs/back.png?raw=true"
            rightItemSrc="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
            @naviBarLeftItemClick="onBack"
            @naviBarRightItemClick="onReload">
        <web class='web' ref='webview' :src='url' @pagestart='start' @pagefinish='finish'></web>
    </osc-navpage>
</template>

<script>
    import mixins from '../../utils/mixins'
    let webview = weex.requireModule('webview')
    export default {
        mixins: [mixins],
        components: {
            oscNavpage: require('../../components/osc-navpage.vue')
        },
        data() {
            return {
                title: 'OsMartian - WebView',
                canGoBack: false,
                url: 'https://weex-project.io/cn/'
            }
        },
        mounted() {
            this.url = this.getQuery('url') || 'https://weex-project.io/cn/'
        },

        methods: {
            onReload(event) {
                webview.reload(this.$refs.webview)
            },

            onBack() {
                this.canGoBack ? webview.goBack(this.$refs.webview) : this.router.pop()
            },

            start(event) {
                console.log('pagestart', event)
            },

            finish(event) {
                console.log('event', event)
                this.canGoBack = event.canGoBack
                this.title = event.title || 'OsMartian - WebView'
            }
        }
    }
</script>
<style scoped>
    .web {
        width: 750px;
        height: 1334px;
        background-color: #f8f8f8;
    }
</style>
