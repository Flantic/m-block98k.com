<template>
    <div class="app-footer">
        <div class="footer-nav-menu">
            <router-link to='/' class="nav-item">
                <i class="icon-img icon-img-nav"></i>
                <p>资讯</p>
            </router-link>
            <router-link to='/flash' class="nav-item">
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
        width: 100%;
        .footer-nav-menu{
            display: flex;
            justify-content: space-around;
            height: 1rem;
            max-width: 750px;
            margin: 0 auto;
            background: #fff;
            border-top: 0.02rem solid #e7e7e7;
        }
        .nav-item{
            padding: .1rem;
            text-align: center;
            width: 50%;
            color: #989898;
            &.router-link-active {
                color: #fc6625;
            }
        }
    }
</style>