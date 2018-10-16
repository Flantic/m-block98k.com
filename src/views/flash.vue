<template>
    <div class="app-news-flash">
        <div class="app-flash-header">
            <div class="app-top-logo">
                <div class="app-logo">
                    <img src="../assets/img/m_block98k_03.png" alt="">
                </div>
            </div>
            <div class="flash-header">
                <div class="app-newsflash">
                    <div class="flash-logo"></div>
                    <div class="flash-preview">
                        <div class="time-month">
                            <p>8月</p>
                            10
                        </div> 
                        <div class="time-day">
                            <p>今天</p>
                            星期五
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flash-list-warpper">
            <div class="flash-content">
                <ul class="flash-list">
                    <li class="list-item">
                        <div class="time">11:32</div>
                        <h1 class="title text-ov3">动态丨D star 社区代表们和风末科技CEO张冰在肯尼亚展开的区块链行业交流访问活动圆满结束。</h1>
                        <p class="content">D star 社区代表们和风末科技CEO张冰在肯尼亚展开的区块链行业交流访问活动圆满结束。本次交流访问得到了肯尼亚政府相关部门高度重视。访问活动全程参与官员有肯尼亚总统办公室、通讯部部长，肯尼亚区块链联盟主席，Nurucoin全球CEO等。两国区块链业者在政府部门大力支持下，就此达成全球战略布局。</p>
                        <div class="search">
                            <i class="icon-img icon-img-search2"></i>
                            分享
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="time">11:32</div>
                        <h1 class="title text-ov3">动态丨D star 社区代表们和风末科技CEO张冰在肯尼亚展开的区块链行业交流访问活动圆满结束。</h1>
                        <p class="content">D star 社区代表们和风末科技CEO张冰在肯尼亚展开的区块链行业交流访问活动圆满结束。本次交流访问得到了肯尼亚政府相关部门高度重视。访问活动全程参与官员有肯尼亚总统办公室、通讯部部长，肯尼亚区块链联盟主席，Nurucoin全球CEO等。两国区块链业者在政府部门大力支持下，就此达成全球战略布局。</p>
                        <div class="search">
                            <i class="icon-img icon-img-search2"></i>
                            分享
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

    .app-flash-header {
        margin-bottom: .1rem;
        height: 1.9rem;
        background: #fff;
        .app-top-logo {
            height: .9rem;
            padding: .25rem 0;
        }
        .app-logo{
            width: 2rem;
            margin: 0 auto;
            &>img{
                display: block;
                width: 100%;
            }
        }
    }

    .app-newsflash {
        display: flex;
        overflow: hidden;
        height: 1rem;
        padding: .25rem .2rem;
        .flash-logo {
            width: 1.4rem;
            height: .5rem;
            margin-right: .1rem;
            background: url('../assets/img/m_block98k_13.png') no-repeat;
            background-size: 100% auto;
        }
        .flash-preview {
            display: flex;
            border-left: .01rem solid #eee;
            .time-month{
                position: relative;
                margin-left: .35rem;
                padding-top: .25rem;
                width: .5rem;
                height: .5rem;
                line-height: .25rem;
                text-align: center;
                color: #4e4e4e;
                font-size: .18rem;
                border: .01rem solid #f1f1f1;
                border-radius: .05rem;
                &>p{
                    position: absolute;
                    top: -.01rem;
                    left: -.01rem;
                    width: 104%;
                    height: .27rem;
                    padding-top: .01rem;
                    color: #fff;
                    background: #ff6c25;
                    border-radius: .05rem;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: .01rem solid #ff6c25;
                }
            }
            .time-day{
                margin-left: .35rem;
                height: .5rem;
                color: #4e4e4e;
                text-align: center;
                line-height: .25rem;
                font-size: .18rem;
                &>p{
                    font-size: .24rem;
                    font-weight: 700;
                }
            }
        }
    }

    .flash-list-warpper{
        background: #fff;
        padding: .4rem .3rem 1rem .7rem;
        .list-item{
            position: relative;
            padding-bottom: 1.08rem;
            &:before,
            &:after{
                position: absolute;
                content: '';
                display: block;
            }
            &:before{
                top: 0;
                left: -.5rem;
                width: .24rem;
                height: .24rem;
                border-radius: 50%;
                background: #ff6c25;
                z-index: 2;
            }
            &:after{
                top: 0;
                left: -.4rem;
                width: .01rem;
                height: 100%;
                background: #ccc;
                z-index: 1;
            }
            .time{
                font-size: .3rem;
                margin-bottom: .26rem;
            }
            .title{
                font-size: .32rem;
                font-weight: 700;
                line-height: .5rem;
                margin-bottom: .2rem;
                color: #292e32;
            }
            .content{
                font-size: .26rem;
                line-height: 1.5;
                text-align: justify;
                color: #545454;
            }
            .search{
                position: absolute;
                right: 0;
                bottom: .4rem;
                color: #ccc;
                padding: .2rem 0;
                height: .66rem;
                &>.icon-img {
                    margin-right: .24rem;
                    vertical-align: bottom;
                }
            }
        }
    }
</style>