<template>
    <div>
        <div class="list" ref='list'>
            <div class="row" v-for="(item, i) in lists" :index="i">
                <div class="item">
                    <div class="userinfo">
                        <div class="headbox">
                            <image class="head-image" resize="cover" :src="item.userinfo.img"></image>
                        </div>
                        <div class="info">
                            <text class="username">{{item.userinfo.username}}</text>
                            <text class="position">{{item.userinfo.position}}</text>
                        </div>
                    </div>
                    <div content="content-box">
                        <text class="content">{{item.content}}</text>
                    </div>
                    <div class="images">
                        <osc-nine-grid :imgList="item.images"></osc-nine-grid>
                    </div>
                    <div class="comments">
                        <div class="comment-item" v-for="c in item.comments">
                            <text class="comment-username">{{c.username}}：</text>
                            <text class="comment-usercontent">{{c.comment}}</text>
                        </div>
                        <a href="#" class="allcomments"><text>查看全部评论</text></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .row {
        width: 750px;
    }

    .item {
        justify-content: center;
        border-bottom-width: 10px;
        border-bottom-color: #f3f6f7;
        padding: 25px;
    }

    .userinfo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 100px;
    }

    .headbox {
        margin-right: 10px;
    }

    .head-image {
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }

    .username {
        color: #6e6e6e;
        font-size: 35px;
        margin-bottom: 10px;
    }

    .position {
        font-size: 25px;
        color: #a6a6a6;
    }

    .content {
        font-size: 30px;
        color: #999999;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .comments {
        border-top-width: 2px;
        border-style: solid;
        border-color: #eeeeee;
        padding-top: 30px;
    }
    .comment-item{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .comment-username {
        color: #6e6e6e;
    }

    .comment-usercontent {
        color: #a6a6a6
    }
    .allcomments{ margin-top: 10px}
</style>

<script>
    import oscNineGrid from '../../components/osc-nine-rectangle-grid.vue'

    let user = {
        userinfo: {
            img: 'http://mk.jiu97.com/appimages/imgs/img7.jpg',
            username: '奔跑中的蜗牛',
            position: '美容顾问',
            isvip: 1
        },
        comments: [{
            userid: 1,
            username: '健康好',
            comment: '了解对方'
        }, {
            userid: 1,
            username: '结合',
            comment: '德国和 i 哦额工具'
        }, {
            userid: 1,
            username: '过后就哭',
            comment: 'i 哦呜额头上才女'
        }, {
            userid: 1,
            username: '婆婆',
            comment: '客家话开始'
        }],
        id: 1,
        content: '阿里对方就够了时间的富拉尔基哦阿里对方就够了时间的富拉尔基哦对方就够了时间的富拉对方就够了时间的富拉尔基哦 i 阿里对方就够了时间的富拉尔基哦 i 阿里对方就够了时间的富拉尔基哦 i 阿里尔基哦 i 阿里； 句',
        images: [{
            url: 'http://mk.jiu97.com/appimages/imgs/img7.jpg'
        }, {
            url: 'http://mk.jiu97.com/appimages/imgs/img8.jpg'
        }, {
            url: 'http://mk.jiu97.com/appimages/imgs/img9.jpg'
        }, {
            url: 'http://mk.jiu97.com/appimages/imgs/img10.jpg'
        }]
    }
    let users = []
    for (let i = 0; i < 10; i++) {
        users[i] = user
    }
    export default {
        components: {
            oscNineGrid: oscNineGrid
        },
        data() {
            return {
                contentImg: [],
                lists: users
            }
        },
        methods: {}
    }
</script>
