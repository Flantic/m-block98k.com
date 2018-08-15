// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import '@/assets/lib/rem'
import FastClick from 'fastclick'

import AppFooter from '@/views/footer'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

let bus = new Vue({})
/* eslint-disable no-new */
new Vue({
    router,
    components:{
       AppFooter 
    }
}).$mount('#root')

