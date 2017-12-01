<template>
    <osc-navpage
            class="personal-root"
            title="个人中心"
            height="100"
            titleColor="#000"
            backgroundColor="#eff3f2"
            leftItemSrc="https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/common_goback.png?raw=true"
            @naviBarLeftItemClick="naviBarLeftItemClick">
        <scroller class="div-scroller">
            <div class="div-scroll-inner">
                <div class="cell" v-for="(item, index) in funcList">
                    <div class="mine-personal-div" :style="item.attr">
                        <image :src="item.iconUrl" class="mine-personal-img"></image>
                        <text class="mine-personal-text">{{ item.name }}</text>
                        <image :src="goIconUrl" class="mine-personal-go"></image>
                    </div>
                </div>
                <div class="personal-logOut-wrap">
                    <text class="personal-logOut-text">退出登录</text>
                </div>
            </div>
        </scroller>
    </osc-navpage>
</template>
<script>
    import mixins from '../../utils/mixins'

    export default {
        mixins: [mixins],
        components: {
            oscNavpage: require('../../components/osc-navpage.vue')
        },
        data() {
            return {
                funcList: [{
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_company.png?raw=true',
                    name: '公司管理',
                    attr: {
                        marginTop: '17px',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_wallet.png?raw=true',
                    name: '钱包',
                    attr: {
                        marginTop: '17px',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_collection.png?raw=true',
                    name: '收藏',
                    attr: {
                        marginTop: '',
                        marginBottom: '17px',
                        borderTopWidth: '0',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_door_guard.png?raw=true',
                    name: '门禁',
                    attr: {
                        marginTop: '',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_beacon.png?raw=true',
                    name: '闪通',
                    attr: {
                        marginTop: '',
                        marginBottom: '17px',
                        borderTopWidth: '0',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_skin.png?raw=true',
                    name: '更换皮肤',
                    attr: {
                        marginTop: '',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '0',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_consult.png?raw=true',
                    name: '常用信息管理',
                    attr: {
                        marginTop: '',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '0',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_address.png?raw=true',
                    name: '常用地址管理',
                    attr: {
                        marginTop: '',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '0',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_feedback.png?raw=true',
                    name: '帮助与反馈',
                    attr: {
                        marginTop: '',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_account.png?raw=true',
                    name: '账户设置',
                    attr: {
                        marginTop: '17px',
                        marginBottom: '17px',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }, {
                    iconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/icon_my_common.png?raw=true',
                    name: '通用设置',
                    attr: {
                        marginTop: '',
                        marginBottom: '',
                        borderTopWidth: '1px',
                        borderBottomWidth: '1px',
                        borderLeftWidth: '0',
                        borderRightWidth: '0',
                        borderColor: '#dfe3e2',
                        borderStyle: 'solid'
                    }
                }],
                goIconUrl: 'https://github.com/osmartian/weex-frame/blob/master/src/views/personal/imgs/jump_arrow_next.png?raw=true'
            }
        },
        methods: {
            toMain (event) {
                this.router.push({
                    page: this.routerPage.main
                })
            },
            naviBarLeftItemClick(){
                this.router.pop()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .div-scroller {
        width: 750px;
        height: 1334px;
        position: absolute;
        bottom: 0;
        top: 0;
    }

    .div-scroll-inner {
        background-color: #eff3f2;
        bottom: 0;
    }

    .mine-personal-div {
        position: relative;
        height: 110px;
        padding-top: 30px;
        background-color: #ffffff;
    }

    .mine-personal-img {
        position: absolute;
        left: 35px;
        width: 52px;
        height: 52px;
    }

    .mine-personal-text {
        position: absolute;
        left: 115px;
        margin-top: 4px;
        font-size: 30px;
    }

    .mine-personal-go {
        position: absolute;
        right: 25px;
        top: 35px;
        width: 15px;
        height: 24px;
    }

    .personal-logOut-wrap {
        height: 100px;
        margin-top: 30px;
        margin-bottom: 40px;
        line-height: 80px;
        background-color: #ffffff;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .personal-logOut-text {
        color: red;
        font-size: 32px;
    }
</style>