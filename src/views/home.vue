<template>
    <div class="app-home">
        <div class="app-header" ref='appHeader'>
            <div class="app-header-warpper">
                <div class="app-logo img-box">
                    <router-link to='/'>
                        <img src="../assets/img/m_block98k_03.png" alt="">
                    </router-link>
                </div>
                <div class="app-search">
                    <div class="search-group">
                        <input type="text" 
                            @focus="$refs['appHeader'].classList.add('isSearch')"
                            placeholder="区块链">
                        <i class="icon-img icon-img-search"></i>
                    </div>
                </div>
                <div class="app-search-cancel"
                    @click="$refs['appHeader'].classList.remove('isSearch')">取消</div>
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
            <div class="app-search-bg">
                <p class="title">热门搜索</p>
                <span class="label">比特币</span>
                <span class="label">区块链</span>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchShow: false
            }
        }
    }
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
        box-shadow: 0 2px 6px 0 rgba(117,117,117,0.10);
        z-index: 99;
        .app-search-cancel{
            display: none;
            width: 1rem;
            line-height: .6rem;
            text-align: center;
        }
        .app-search-bg{
            display: none;
            width: 100%;
            height: 100vh;
            background: #f1f1f1;
            padding: .15rem .2rem;
            .title{
                margin-bottom: .1rem;
                font-size: .3rem;
                color: #4e4e4e;
                line-height: .6rem;
            }
            .label{
                display: inline-block;
                vertical-align: top;
                margin: 0 .2rem .2rem 0;
                font-size: .26rem;
                background: #e7e7e7;
                height: .5rem;
                padding: 0 .3rem;
                line-height: .5rem;
                border-radius: .25rem;
            }
        }
        &.isSearch {
            .app-logo{
                display: none;
            }
            .app-home-menu{
                display: none;
            }
            .app-search-bg{
                display: block;
            }
            .app-search-cancel{
                display: block;
            }
        }
        .app-logo {
            width: 1.6rem; 
            height: .6rem;
            background: #fff;
            margin-right: .12rem;
        }
        .app-search {
            height: .6rem;
            flex-grow: 1;
            transition: all .5s;
        }
        .search-group {
            position: relative;
            height: 100%;
            input {
                width: 100%;
                height: 100%;
                padding: .15rem .3rem .15rem .8rem;
                border-radius: .29rem;
                background: #f1f1f1;
                font-size: .3rem;
                line-height: .3rem;
                border: none;
            }
            input::-ms-input-placeholder{
                line-height: .4rem;
            }
            input::-webkit-input-placeholder{
                line-height: .4rem;
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