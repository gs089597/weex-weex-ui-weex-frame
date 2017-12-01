<template>
    <wxc-tab-page :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="text"
                  ref="wxc-tab-page"
                  :tab-page-height="tabPageHeight"
                  @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
        <list v-if="index != 0"
              v-for="(v,index) in tabList"
              :key="index"
              class="item-container"
              :style="{ height: (tabPageHeight - tabStyles.height - 100) + 'px' }">
            <cell v-for="(demo,key) in v" class="cell" :key="key">
                <wxc-item url="//h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                          image="https://gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg"
                          image-text="长沙出发"
                          title-line-count="2"
                          desc-line-count="1"
                          title="飞猪专线｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游"
                          :desc="desc"
                          :tags="tags"
                          icon-type="hotel"
                          price="219"
                          :support-slide="supportSlide"
                          price-desc="月售58笔｜999+条评论"
                          :ext-id="'1-' + (demo) + '-' + (key)"
                          :ext-index="key"
                          :ext-total="demoList.length"
                          @wxcItemGoodPan="wxcItemGoodPan"></wxc-item>
            </cell>
        </list>
        <list class="item-container"
              :style="{ height: (tabPageHeight - tabStyles.height - 100) + 'px' }"
              v-else>
            <cell>
                <osc-slider :imageList="sliderData"></osc-slider>
            </cell>
            <cell>
                <usertop></usertop>
            </cell>
        </list>
    </wxc-tab-page>
</template>

<style lang="stylus" scoped>
    .item-container {
        float left;
        width: 750px;
    }

    .cell {
        background-color: #ffffff;
    }
</style>

<script>
    import slider from '../../components/osc-slider.vue'
    import usertop from './usertop.vue'
    import C from '../../config'
    import mixins from '../../utils/mixins'
    import {WxcTabPage, Utils} from '../../components/weexui';
    import WxcItem from './wxc-item.vue';

    export default {
        components: {
            oscSlider: slider,
            usertop: usertop,
            WxcTabPage,
            WxcItem
        },
        data: () => ({
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
            tabTitles: [
                {
                    title: '动态',
                    icon: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png',
                },
                {
                    title: '热门跟团',
                    icon: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png',
                },
                {
                    title: '云南跟团',
                    icon: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
                },
                {
                    title: '四川跟团',
                    icon: 'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png'
                },
                {
                    title: '海南跟团',
                    icon: 'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png'
                },
                {
                    title: '北京跟团',
                    icon: 'https://gw.alicdn.com/tfs/TB1jFsLSXXXXXX_aXXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1_Kc.SXXXXXa8XpXXXXXXXXXX-72-72.png'
                },
                {
                    title: '出境跟团',
                    icon: 'https://gw.alicdn.com/tfs/TB199sPSXXXXXb4XVXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1DR.3SXXXXXc2XpXXXXXXXXXX-72-72.png'
                }, {
                    title: '出境日游',
                    icon: 'https://gw.alicdn.com/tfs/TB1hedfSpXXXXchXXXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1mrXaSpXXXXaqXpXXXXXXXXXX-72-72.png'
                },
                {
                    title: '邮轮',
                    icon: 'https://gw.alicdn.com/tfs/TB1twhkSpXXXXXLXXXXXXXXXXXX-72-72.png',
                    activeIcon: 'https://gw.alicdn.com/tfs/TB1dhlhSpXXXXa8XXXXXXXXXXXX-72-72.png'
                }
            ],
            tabStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#6e6e6e',
                activeTitleColor: '#f64b78',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                height: 80,
                width: 160,
                hasActiveBottom: true,
                activeBottomColor: '#f64b78'
            },
            tabList: [],
            demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            supportSlide: true,
            tabPageHeight: 1334,
            desc: [{
                type: 'text',
                value: '特价机票|班期:清明 3/27-4/2等',
                theme: 'gray'
            }],
            tags: [{
                type: 'tag',
                value: '满100减20',
                theme: 'red'
            }]
        }),
        created() {
            this.sliderData[0].src = C.Resource.imageUrl + 'aa2.jpg'
            this.sliderData[1].src = C.Resource.imageUrl + 'aa1.jpg'
            this.sliderData[2].src = C.Resource.imageUrl + 'aa2.jpg'

            this.tabPageHeight = Utils.env.getPageHeight();
            this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
            Vue.set(this.tabList, 0, this.demoList);
        },
        methods: {
            wxcTabPageCurrentTabSelected(e) {
                const self = this;
                const index = e.page;
                /* 未加载tab模拟数据请求 */
                if (!Utils.isNonEmptyArray(self.tabList[index])) {
                    setTimeout(() => {
                        Vue.set(self.tabList, index, self.demoList);
                    }, 100);
                }
            },
            wxcItemGoodPan(e) {
                if (Utils.env.supportsEBForAndroid()) {
                    this.$refs['wxc-tab-page'].bindExp(e.element);
                }
            }
        }
    };
</script>
