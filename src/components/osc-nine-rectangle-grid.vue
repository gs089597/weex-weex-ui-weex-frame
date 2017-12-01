<template>
    <div>
        <div class="item" v-for="(item, i) in images">
            <div class="image-item" v-for="img in item">
                <image class="image" resize="cover" :src="img.url"></image>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .image {
        width: 220px;
        height: 220px;
    }
</style>

<script>
    export function splitArray(arr, len) {
        let aLen = arr.length
        let result = []
        for (let i = 0; i < aLen; i += len) {
            result.push(arr.slice(i, i + len))
        }
        return result
    }

    export default {
        data() {
            return {
                refreshDisplay: {
                    type: String,
                    default: 'hide'
                },
                images: {
                    type: Array,
                    default: () => ([])
                }

            }
        },
        created() {
            let images = splitArray(this.imgList, this.row)
            this.images = images
        },
        props: {
            imgList: {default: []},
            row: {default: 3}
        },
        methods: {}
    }
</script>
