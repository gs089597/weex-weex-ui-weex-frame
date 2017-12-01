<template>
    <div class="root">
        <!--<div v-if="platform === 'ios'"-->
             <!--:style="{width: '750px', height: '40px', backgroundColor: backgroundColor}"></div>-->
        <osc-navbar
                :dataRole="dataRole"
                :height="height"
                :backgroundColor="backgroundColor"
                :title="title"
                :titleColor="titleColor"
                :leftItemSrc="leftItemSrc"
                :leftItemTitle="leftItemTitle"
                :leftItemColor="leftItemColor"
                :rightItemSrc="rightItemSrc"
                :rightItemTitle="rightItemTitle"
                :rightItemColor="rightItemColor"
                @naviBarRightItemClick="naviBarRightItemClick"
                @naviBarLeftItemClick="naviBarLeftItemClick"></osc-navbar>
        <!--<div class="wrapper" :style="{top: platform === 'ios' ? (40 + height) : height}">-->
        <div class="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .root {
        width: 750px;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        width: 750px;
        position: absolute;
        top: 100px;
        bottom: 0;
    }
</style>

<script>
    export default {
        components: {
            oscNavbar: require('./osc-navbar')
        },
        props: {
            dataRole: {
                type: String,
                default: 'none'
            },
            backgroundColor: {
                type: String,
                default: '#0099FF'
            },
            height: {
                type: [Number, String],
                default: 88
            },
            title: {
                type: String,
                default: ''
            },
            titleColor: {
                type: String,
                default: 'white'
            },
            rightItemSrc: {
                type: String,
                default: ''
            },
            rightItemTitle: {
                type: String,
                default: ''
            },
            rightItemColor: {
                type: String,
                default: 'white'
            },
            leftItemSrc: {
                type: String,
                default: ''
            },
            leftItemTitle: {
                type: String,
                default: ''
            },
            leftItemColor: {
                type: String,
                default: 'white'
            }
        },
        methods: {
            naviBarRightItemClick(e) {
                this.$emit('naviBarRightItemClick', e)
            },

            naviBarLeftItemClick(e) {
                this.$emit('naviBarLeftItemClick', e)
            }
        }
    }
</script>
