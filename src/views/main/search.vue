<template>
    <div>
        <div class="main-header">
            <div class="search-box">
                <div class="">
                    <image class="image" resize="cover" :src="iconImg.left"></image>
                </div>
                <div class="search-title">
                    <text class="title" @click="toSearch">请输入您要搜索的内容</text>
                </div>
                <div>
                    <image class="image" resize="cover" :src="iconImg.right"></image>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .main-header {
        width: 750px;
        padding: 15px;
    }

    .image {
        width: 55px;
        height: 55px;
    }

    .search-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-width: 2px;
        border-style: solid;
        border-color: #ffd1dd;
    }

    .search-title {
        width: 580px;
    }

    .title {
        color: #cacaca;
        font-size: 30px;
    }

</style>

<script>
    import config from '../../config'
    import mixins from '../../utils/mixins'
    export default {
        mixins: [mixins],
        created() {
            this.iconImg.left = config.Resource.iconUrl + this.iconImg.left
            this.iconImg.right = config.Resource.iconUrl + this.iconImg.right
        },
        data() {
            return {
                iconImg: {
                    left: 'icon-010.png',
                    right: 'icon-011.png'
                }
            }
        },
        methods: {
            toSearch(e) {
                this.router.push({
                    page: this.routerPage.web,
                    query: {
                        url: `http://www.ynddl.com`
                    }
                })
//                this.$emit('toSearch', e)
//                this.model.toast({
//                    message: '跳到搜索'
//                })
            }
        }
    }
</script>
