<template>
    <div class="app-home">
        <div class="app-header">
            <div class="app-header-warpper">
                <div class="app-logo img-box">
                    <router-link to='/'>
                        <img src="../assets/img/m_block98k_03.png" alt="">
                    </router-link>
                </div>
                <div class="app-search">
                    <div class="search-group">
                        <input type="text" placeholder="区块链">
                        <i class="icon-img icon-img-search"></i>
                    </div>
                </div>
            </div>
            <div class="app-home-menu">
                <ul class="menu-list">
                    <li class="list-item">
                        <router-link to='/home/topline' exact>K头条</router-link>
                    </li>
                    <li class="list-item">
                        <router-link to='/home/project'>专访</router-link>
                    </li>
                    <li class="list-item">
                        行情
                    </li>
                    <li class="list-item">
                        项目
                    </li>
                    <li class="list-item">
                        国际
                    </li>
                    <li class="list-item">
                        专栏
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    // import { swiper, swiperSlide } from 'vue-awesome-swiper' 
    // import '../assets/lib/swiper-3.4.1.min.css'
    // import BetterScroll from 'better-scroll'
    // export default {
    //     mounted() {
    //         this.$nextTick(() => {
    //             this.scroll = new BetterScroll(this.$refs.scrollDom, {
    //                 probeType: 2,
    //                 click: true
    //             })
    //             // this.scroll.scrollTo(0, 50,1000)
    //             // console.log(this.scroll)
    //             this.scroll.on('scroll',(pos)=>{
    //                 // console.log(pos.y)
    //                 // if(pos >= 50){
    //                 //     this.scroll.scrollTo(0,50)
    //                 //     setTimeOut(()=>{
    //                 //         this.scroll.scrollTo(0,0)
    //                 //     },1500)
    //                 // }
    //             })
    //             this.scroll.on('beforeScrollStart',(pos)=>{
    //                 // console.log('start',pos)
    //             })
    //             this.scroll.on('touchEnd',(pos)=>{
    //                 // console.log(this.scroll)
    //                 if(pos.y >= 50){
    //                     this.$refs.scrollDom.classList.add('drop-down')
    //                     this.$refs.dromDown.innerText = '正在刷新'
    //                     setTimeout(()=>{
    //                         this.$refs.scrollDom.classList.remove('drop-down')
    //                         this.$refs.dromDown.innerText = '下拉刷新'
    //                     },1500)
    //                 }
    //                 if((Math.abs(pos.y)+this.scroll.wrapperHeight) - this.scroll.scrollerHeight >= 50){
    //                     console.log('上拉刷新')
    //                     this.$refs.scrollDom.classList.add('pull-up')
    //                     this.$refs.pullUp.innerText = '正在刷新'
    //                     setTimeout(()=>{
    //                         this.$refs.scrollDom.classList.remove('pull-up')
    //                         this.$refs.pullUp.innerText = '上拉刷新'
    //                     },1500)
    //                 }
    //             })
    //         })
    //     },
    //     data(){
    //         return{
    //             bannerList:[{
    //                 url:'',
    //                 type: 0,
    //                 id: 25
    //             },{
    //                 url:'',
    //                 type: 1,
    //                 id: 15
    //             },{
    //                 url:'',
    //                 type: 0,
    //                 id: 54
    //             },{
    //                 url:'',
    //                 type: 1,
    //                 id: 23
    //             }],
    //             flashList:[{
    //                 id: 10,
    //                 text:'1数字货币交易所黑马，币倍8月11日开启创世矿工'
    //             },{
    //                 id: 20,
    //                 text:'2数字货币交易所黑马，币倍8月11日开启创世矿工'
    //             },{
    //                 id: 30,
    //                 text:'3数字货币交易所黑马，币倍8月11日开启创世矿工'
    //             },{
    //                 id: 40,
    //                 text:'4数字货币交易所黑马，币倍8月11日开启创世矿工'
    //             }],
    //             bannerOption:{},
    //             flashOption:{
    //                 direction: 'vertical',
    //                 autoplay: 5000,
    //                 loop: true
    //             }
    //         }
    //     },
    //     components: {
    //         swiper,
    //         swiperSlide
    //     },
    // }    
</script>

<style lang="scss" >
    @import '../style/layout';
    .app-home {
        padding-top: .9rem;
        max-width: 750px;
        margin: 0 auto;
    }

    .app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 1.8rem;
        z-index: 99;
        .app-logo {
            width: 1.6rem; 
            height: .58rem;
            background: #fff;
            margin-right: .12rem;
        }
        .app-search {
            height: .58rem;
            flex-grow: 1;
        }
        .search-group {
            position: relative;
            input {
                width: 100%;
                height: 100%;
                padding: .15rem .3rem .15rem .8rem;
                border-radius: .29rem;
                background: #f1f1f1;
                font-size: .3rem;
                border: none;
            }
            input:focus{
                padding-left: .3rem;
            }
            input:focus + i {
                display: none;
            }
            .icon-img {
                position: absolute;
                top: .15rem;
                left: .3rem;
            }
        }
    }
    .app-header-warpper{
        display: flex;
        height: .9rem;
        width: 100%;
        padding: .15rem .2rem;
        max-width: 750px;
        margin: 0 auto;
        background: #fff;
    }

    .app-home-menu {
        max-width: 750px;
        margin: 0 auto;
        height: .9rem;
        line-height: .9rem;
        font-size: .32rem;
        background: #fff;
        .menu-list{
            display: flex;
            padding: 0 .2rem;
            white-space:nowrap;
            overflow: hidden;
        }
        .list-item {
            position: relative;
            margin-right: .6rem;
            &>a {
                color: #4e4e4e;
            }
            &>.router-link-active {
                color: #ff6c25;
                &:after {
                    position: absolute;
                    bottom: .1rem;
                    left: 0;
                    content:'';
                    display: block;
                    width: 100%;
                    height: .04rem;
                    border-radius: .02rem;
                    background: #ff6c25;
                }
            }
        }
    }

</style>