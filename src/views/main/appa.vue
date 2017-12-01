<template>
    <div>
        <search></search>




        <list>
            <cell>
                <div class="top-nav">
                    <div class="top-nav-item" v-for="item in topNav" @click="topNavOnClick(item.index)">
                        <text class="top-nav-text">{{item.title}}</text>
                    </div>
                </div>
            </cell>
            <cell>
                <osc-slider :imageList="sliderData"></osc-slider>
            </cell>
            <cell>
                <usertop></usertop>
            </cell>
        </list>
    </div>
</template>

<style lang="stylus" scoped>
    .top-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    .top-nav-item {
        flex: 1;
    }

    .top-nav-text {
        font-size: 35px;
        color: #6e6e6e;
        text-align: center;
    }
</style>

<script>
    import slider from '../../components/osc-slider.vue'
    import search from './search.vue'
    import usertop from './usertop.vue'
    import config from '../../config'
    import mixins from '../../utils/mixins'
    export default {
        mixins: [mixins],
        components: {
            oscSlider: slider,
            search: search,
            usertop: usertop
        },
        created() {
            this.iconImg.left = config.Resource.iconUrl + this.iconImg.left
            this.iconImg.right = config.Resource.iconUrl + this.iconImg.right
            this.sliderData[0].src = config.Resource.imageUrl + 'aa2.jpg'
            this.sliderData[1].src = config.Resource.imageUrl + 'aa1.jpg'
            this.sliderData[2].src = config.Resource.imageUrl + 'aa2.jpg'
        },
        data() {
            return {
                iconImg: {
                    left: 'icon-010.png',
                    right: 'icon-011.png'
                },
                sliderData: [{
                    index: 0,
                    title: 'item A',
                    src: 'http://mk.jiu97.com/appimages/',
                    url: 'aa'
                }, {
                    index: 1,
                    title: 'item B',
                    src: 'http://mk.jiu97.com/appimages/',
                    url: 'aa'
                }, {
                    index: 2,
                    title: 'item C',
                    src: 'http://mk.jiu97.com/appimages/',
                    url: 'aa'
                }],
                topNav: [{
                    index: 0,
                    title: '推荐',
                    url: 'aa'
                }, {
                    index: 1,
                    title: '视频',
                    url: 'aa'
                }, {
                    index: 2,
                    title: '社会',
                    url: 'aa'
                }, {
                    index: 3,
                    title: '娱乐',
                    url: 'aa'
                }, {
                    index: 4,
                    title: '科技',
                    url: 'aa'
                }]
            }
        },
        methods: {
            sliderOnClick(e) {
                console.log('changed:', e)
            },
            toSearch(e) {
                console.log(this.routerPage.aaa)
                this.router.push({
                    page: this.routerPage.aaa,
                    query: {
                        url: `http://www.ynddl.com`
                    }
                })
//                this.router.push({
//                    page: this.tabItems[e.index].path
//                })
//                this.model.toast({
//                    message: '跳到搜索'
//                })
            },
            topNavOnClick(e) {
//                this.model.toast({
//                    message: '跳到搜索'
//                })
            }
        }
    }
</script>
