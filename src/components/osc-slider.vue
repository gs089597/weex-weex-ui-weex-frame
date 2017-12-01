<template>
    <div>
        <slider class="slider" interval="3000">
            <div class="frame" v-for="img in imageList">
                <div @click="onclickitem(img.index)">
                    <image class="image" resize="cover" :src="img.src"></image>
                    <text v-if="img.title" class="title">{{img.title}}</text>
                </div>
            </div>
            <indicator class="indicator"></indicator>
        </slider>
    </div>
</template>
<style lang="stylus" scoped>
    .image {
        width: 750px;
        height: 300px;
    }

    .slider {
        width: 750px;
        height: 300px;
        position: relative;
    }

    .title {
        position: absolute;
        top: 20px;
        left: 20px;
        padding-left: 20px;
        width: 200px;
        color: #FFFFFF;
        font-size: 36px;
        line-height: 60px;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .frame {
        width: 750px;
        height: 300px;
        position: relative;
    }

    .indicator {
        width: 750px;
        height: 300px;
        item-color: #ffe5eb;
        item-selected-color: #ffb0c5;
        item-size: 20px;
        position: absolute;
        top: 130px;
        left: 0px;
    }
</style>
<script>
    export default {
        props: {
            imageList: {
                type: Array,
                default: () => ([])
            }
        },
        created() {
            //console.log(this.imageList)
        },
        methods: {
            onclickitem(e) {
                console.log(e)
                this.$emit('sliderOnClick', e)
            }
        }
    }
</script>