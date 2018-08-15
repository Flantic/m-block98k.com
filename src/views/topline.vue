<template>
    <div class="app-scroll-warpper" ref="scrollDom">
        <div class="scroll-content">
            <div class="drop-down" ref="dromDown">下拉刷新</div>
            <div class="app-banner">
                <swiper :options="bannerOption"  ref="bannerSwiper">  
                    <swiper-slide v-for="(item,index) in bannerList" :key="index">
                        <router-link 
                            :to="`${item.type == 0? '/flash':'/detail'}?id=${item.id}`">
                            <img src="../assets/img/m_block98k_10.png" alt="">
                        </router-link>
                        <p class="text-ov1">{{item.text}}</p>
                    </swiper-slide>
                </swiper> 	
            </div>
            <div class="app-newsflash">
                <div class="flash-logo"></div>
                <div class="flash-preview">
                    <swiper 
                        :options="flashOption"  
                        ref="flashSwiper"
                        class="swiper-no-swiping">  
                        <swiper-slide v-for="(item,index) in flashList" :key="index">
                            <router-link :to="`/flash?id=${item.id}`">
                                {{item.text}}
                            </router-link>
                        </swiper-slide>
                    </swiper> 
                </div>
            </div>
            <div class="app-news-content">
                <ul class="news-list">
                    <li class="list-item" v-for="i in 4">
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
            <div class="pull-up" ref="pullUp">上拉刷新</div>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper' 
    import '../assets/lib/swiper-3.4.1.min.css'
    import BetterScroll from 'better-scroll'
    export default {
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BetterScroll(this.$refs.scrollDom, {
                    probeType: 2,
                    click: true
                })
                this.scroll.on('scroll',(pos)=>{

                })
                this.scroll.on('beforeScrollStart',(pos)=>{
                    
                })
                this.scroll.on('touchEnd',(pos)=>{

                    if(pos.y >= 50){
                        this.$refs.scrollDom.classList.add('drop-down')
                        this.$refs.dromDown.innerText = '正在刷新'
                        setTimeout(()=>{
                            this.$refs.scrollDom.classList.remove('drop-down')
                            this.$refs.dromDown.innerText = '下拉刷新'
                        },1500)
                    }

                    if((Math.abs(pos.y)+this.scroll.wrapperHeight) - this.scroll.scrollerHeight >= 50){
                        this.$refs.scrollDom.classList.add('pull-up')
                        this.$refs.pullUp.innerText = '正在刷新'
                        setTimeout(()=>{
                            this.$refs.scrollDom.classList.remove('pull-up')
                            this.$refs.pullUp.innerText = '上拉刷新'
                        },1500)
                    }
                })
            })
        },
        data(){
            return{
                bannerList:[{
                    url:'',
                    type: 0,
                    id: 25,
                    text: '1数字货币交易所黑马,币倍8月11日开启创世矿工'
                },{
                    url:'',
                    type: 1,
                    id: 15,
                    text: '2数字货币交易所黑马,币倍8月11日开启创世矿工'
                },{
                    url:'',
                    type: 0,
                    id: 54,
                    text: '3数字货币交易所黑马,币倍8月11日开启创世矿工'
                },{
                    url:'',
                    type: 1,
                    id: 23,
                    text: '4数字货币交易所黑马,币倍8月11日开启创世矿工'
                }],
                flashList:[{
                    id: 10,
                    text:'1数字货币交易所黑马，币倍8月11日开启创世矿工'
                },{
                    id: 20,
                    text:'2数字货币交易所黑马，币倍8月11日开启创世矿工'
                },{
                    id: 30,
                    text:'3数字货币交易所黑马，币倍8月11日开启创世矿工'
                },{
                    id: 40,
                    text:'4数字货币交易所黑马，币倍8月11日开启创世矿工'
                }],
                bannerOption:{},
                flashOption:{
                    direction: 'vertical',
                    autoplay: 5000,
                    loop: true
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
    }    
</script>

<style lang="scss" scoped>
    
    .app-scroll-warpper{
        position: fixed;
        top: 1rem;
        bottom: 1rem;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        transition: transform .1s;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-duration: 800ms; 
        .scroll-content{
            margin: 0 auto;
            max-width: 750px;
        }
        &.drop-down{
            transform: translate3d(0,.8rem,0);
        }
        &.pull-up{
            transform: translate3d(0,-.8rem,0);
        }
        .pull-up{
            padding-bottom: 2rem;
        }
        .pull-up,
        .drop-down{
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            color: #666;
        }
    }

    .app-banner {
        height: 4.2rem;
        margin-bottom: .1rem;
        background: #efefef;
        .swiper-container {
            height: 100%;
            img {
                width: 100%;
            }
        }
        .swiper-slide {
            position: relative;
            p{
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: .76rem;
                line-height: .76rem;
                padding: 0 .4rem;
                font-size: .3rem;
                color: #fff;
                background: rgba(0,0,0,.5);
            }
        }
    }

    .app-newsflash {
        margin-bottom: .1rem;
        display: flex;
        flex-warp: no-warp;
        overflow: hidden;
        height: 1rem;
        padding: .25rem .2rem;
        background: #fff;
        .flash-logo {
            width: 1.4rem;
            height: .5rem;
            margin-right: .1rem;
            background: url('../assets/img/m_block98k_13.png') no-repeat;
            background-size: 100% auto;
        }
        .flash-preview {
            line-height: .5rem;
            padding: 0 .1rem;
            border-left: .02rem solid #f1f1f1;
            overflow: hidden;
            & a {
                color: #4e4e4e;
            }
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