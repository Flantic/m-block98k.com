<template>
    <div class="app-footer">
        <div class="footer-nav-menu">
            <router-link to='/' tag="span" class="nav-item">
                <i class="icon-img icon-img-nav"></i>
                <p>资讯</p>
            </router-link>
            <router-link to='/flash' tag="span" class="nav-item">
                <i class="icon-img icon-img-flash"></i>
                <p>快讯</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .app-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 1.2rem;
        width: 100%;
        z-index: 98;
        .footer-nav-menu{
            display: flex;
            justify-content: space-around;
            height: 1.2rem;
            max-width: 750px;
            margin: 0 auto;
            background: #fff;
            border-top: 0.02rem solid #e7e7e7;
        }
        .nav-item{
            padding: .2rem;
            text-align: center;
            width: 50%;
            color: #989898;
            &.router-link-active {
                color: #fc6625;
            }
        }
    }
</style>