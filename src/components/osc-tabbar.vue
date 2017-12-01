<template>
    <div class="wrapper">
        <embed
                v-if="router == false"
                class="content"
                :style="{ visibility: item.visibility }"
                v-for="(item, index) in tabItems"
                :key="index"
                :src="item.src"
                type="weex">
        </embed>
        <transition
                v-if="router == true"
                name="fade" mode="out-in">
            <router-view class="root"></router-view>
        </transition>
        <div class="tabbar" append="tree">
            <tabitem
                    v-for="(item, index) in tabItems"
                    :key="index"
                    :index="item.index"
                    :icon="item.icon"
                    :title="item.title"
                    :titleColor="item.titleColor"
                    @tabItemOnClick="tabItemOnClick">
            </tabitem>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .wrapper {
        width: 750px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 0;
        margin-bottom: 100px;
    }

    .tabbar {
        flex-direction: row;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
    }

    .root {
        padding-bottom: 100px;
    }
</style>
<script>
    export default {
        props: {
            tabItems: {
                type: Array,
                default: () => ([])
            },
            selectedColor: {
                type: String,
                default: '#f64b78'
            },
            unselectedColor: {
                type: String,
                default: '#b7b7b7'
            },
            // 是否使用路由模式，如果是，则点击item时使用item的index进行跳转
            router: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                selectedIndex: 0
            }
        },
        components: {
            tabitem: require('./osc-tabitem')
        },
        created() {
            this.select(this.selectedIndex)
        },
        methods: {
            tabItemOnClick(e) {
                this.selectedIndex = e.index
                this.select(e.index)
                this.$emit('tabBarOnClick', e)
            },
            select(index) {
                for (let i = 0; i < this.tabItems.length; i++) {
                    let tabItem = this.tabItems[i]
                    if (i == index) {
                        tabItem.icon = tabItem.selectedImage
                        tabItem.titleColor = this.selectedColor
                        tabItem.visibility = 'visible'
                    } else {
                        tabItem.icon = tabItem.image
                        tabItem.titleColor = this.unselectedColor
                        tabItem.visibility = 'hidden'
                    }
                }
            }
        }
    }
</script>