<template>
    <div>
        <search></search>
        <tabpage></tabpage>
    </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
    import slider from '../../components/osc-slider.vue'
    import search from './search.vue'
    import C from '../../config'
    import mixins from '../../utils/mixins'
    import tabpage from './tabpage.vue'

    export default {
        components: {
            search: search,
            tabpage:tabpage
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
            }]
        }),
        created() {
            this.sliderData[0].src = C.Resource.imageUrl + 'aa2.jpg'
            this.sliderData[1].src = C.Resource.imageUrl + 'aa1.jpg'
            this.sliderData[2].src = C.Resource.imageUrl + 'aa2.jpg'
        },
        methods: {
        }
    };
</script>
