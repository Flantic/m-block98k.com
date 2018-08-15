<template>
    <div class="app-article-detail">
        <div class="app-article-header">
            <div class="header-back" @click="$router.go(-1)">
                <i class="icon-img icon-img-back"></i>
            </div>
        </div>
        <div class="article-content-warpper">
            <h1 class="article-title">数字货币交易所黑马，币倍8月11日开启创世矿工。</h1>
            <div class="article-author">
                <div class="head img-box">
                    <img src="../assets/img/item1.jpg" alt="">
                </div>
                <div class="author-info">
                    <div class="name"><i class="icon-img icon-img-label-v"></i>链鱼</div>
                    <div class="bottom">
                        <span class="time">10分钟前</span>
                        1.6万阅读
                    </div>
                </div>
            </div>
            <div class="article-content">
                <p>币倍（BeBay.io）交易所于2018年3月成立与新加坡，团队主要成员曾担任阿里巴巴，京东，富途，云币等区块链和互联网知名公司的要职，包括多名区块链早期入行者，在数字资产领域拥有丰富的技术研发及全球运营经验。</p>
                <p><img src="../assets/img/m_block98k_10.png" alt=""></p>
                <p>币倍（BeBay.io）交易所于2018年3月成立与新加坡，团队主要成员曾担任阿里巴巴，京东，富途，云币等区块链和互联网知名公司的要职，包括多名区块链早期入行者，在数字资产领域拥有丰富的技术研发及全球运营经验。</p>
                <p>币倍（BeBay.io）交易所于2018年3月成立与新加坡，团队主要成员曾担任阿里巴巴，京东，富途，云币等区块链和互联网知名公司的要职，包括多名区块链早期入行者，在数字资产领域拥有丰富的技术研发及全球运营经验。</p>
            </div>
            <div class="article-footer">
                本文经授权发布，不代表Block 98K立场。如若转载请联系原作则。
            </div>
        </div>
        <div class="other-title">您可能感兴趣的文章</div>
        <div class="app-news-content">
            <ul class="news-list">
                <li class="list-item" v-for="i in 2">
                    <div class="top-info">
                        <div class="head img-box">
                            <router-link :to="`/detail?id=${i}`">
                                <img src="../assets/img/item1.jpg" alt="">
                            </router-link>
                        </div>
                        <div class="name">
                            <i class="icon-img icon-img-label-v"></i>
                            链鱼
                        </div>
                        <div class="time">10分钟前</div>
                    </div>
                    <div class="content">
                        <div class="text">
                            <router-link :to="`/detail?id=${i}`" class="text-ov2">
                                数字货币交易所黑马，币倍8月11日开启创世矿工。
                            </router-link>
                            <div class="ft">
                                <span class="label">置顶</span>
                                1.6万阅读
                            </div>
                        </div>
                        <div class="img img-box">
                            
                            <router-link :to="`/detail?id=${i}`" class="text-ov2">
                                <img src="../assets/img/m_block98k_10.png" alt="">
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .app-article-detail {
        padding: 1rem 0 1.2rem;
    }

    .app-article-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .9rem;
        background: #fff;
        margin-bottom: .1rem;
        .header-back {
            position: absolute;
            top: 0;
            left: 0;
            width: .9rem;
            height: .9rem;
            line-height: .9rem;
            text-align: center;
        }
    }

    .article-content-warpper {
        padding: .15rem .3rem;
        border-bottom: .01rem solid #f1f1f1;
        background: #fff;
        .article-title {
            margin-bottom: .45rem;
            font-size: .4rem;
            font-weight: 400;
            line-height: .6rem;
        }
        .article-author {
            margin: 0 auto;
            margin-bottom: .54rem;
            display: flex;
            width: 6.4rem;
            height: 1rem;
            background: #f8f8f8;
            border-radius: .5rem;
            .head {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                box-shadow: 0 0 5px #000;
            }
        }
        .author-info{
            margin-left: .24rem;
            margin-bottom: .54rem;
            .icon-img-label-v {
                margin-right: .2rem;
            }
            .name {
                color: #4e4e4e;
                font-size: .32rem;
            }
            .bottom {
                color: #989898;
                font-size: .24rem;
            }
            .time {
                margin-right: .48rem;
            }
            .name,
            .bottom{
                line-height: .5rem;
            }
        }
    }

    .article-content {
        p {
            line-height: 1.5;
            margin-bottom: .3rem;
        }
        img {
            display: block;
            margin: 0 auto;
            width: 6.4rem;
        }
    }

    .article-footer {
        margin: 0 auto;
        margin-bottom: .4rem;
        padding: .1rem .33rem;
        width: 6.4rem;
        height: 1rem;
        background: #f8f8f8;
        border-radius: .5rem;
        line-height: 1.5;
    }

    .other-title {
        position: relative;
        padding: .5rem .46rem .25rem;
        line-height: .3rem;
        font-size: .34rem;
        color: #4e4e4e;
        font-weight: 700;
        background: #fff;
        &:after {
            position: absolute;
            top: .5rem;
            left: .2rem;
            content: '';
            display: block;
            width: .06rem;
            height: .3rem;
            background: #ff6c25;
            border-radius: .03rem;
        }
    }

    .app-news-content{
        padding: 0 .3rem 1rem;
        background: #fff;
        .list-item {
            padding: .28rem 0;
            border-bottom: .01rem solid #e7e7e7;
            .text {
                p {
                    font-size: .3rem;
                    line-height: 1.5;
                    margin-right: .15rem;
                }
            }
        }
        .top-info {
            display: flex;
            line-height: .5rem;
            margin-bottom: .2rem;
            .head{
                width: .5rem;
                height: .5rem;
                border-radius: 50%;
                overflow: hidden;
                background: #efefef;
                margin-right: .2rem;
            }
            .name {
                margin-right: .2rem;
                display: inline-block;
                vertical-align: middle;
                &>.icon-img{
                    margin-right: .1rem;
                }
            }
            .time {
                font-size: .2rem;
                color: #989898;
            }
        }
        .content {
            position: relative;
            display: flex;
            .text-ov2 {
                color: #4e4e4e;
                line-height: 1.5;
            }
            .ft {
                position: absolute;
                bottom: 0;
                left: 0;
                line-height: .3rem; 
                font-size: .22rem;
                color: #989797;
            }
            .img {
                margin-top: .07rem;
                width: 4.3rem;
                height: 1.44rem;
                border-radius: .01rem;
                background: #efefef;
                overflow: hidden;
            }
            .label {
                display: inline-block;
                margin-right: .2rem;
                width: .6rem;
                height: .35rem;
                line-height: .35rem;
                text-align: center;
                font-size: .18rem;
                border: 1px solid #ff6c25;
                border-radius: .05rem;
                color: #ff6c25;
                background: #fff;
            }
        }
    }
</style>