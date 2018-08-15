import Vue from 'vue'
import Router from 'vue-router'
//-----------page router----------------
import Home from '../views/home'
import NewsFlash from '../views/flash'
import ArticleDetail from '../views/detail'
import TopLine from '../views/topline'
import Project from '../views/project'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/home',
            component: Home,
            children:[{
                path:'topline',
                component: TopLine
            },{
                path:'project',
                component: Project
            }]
        },{
            path:'/flash',
            component: NewsFlash
        },{
            path:'/detail',
            component: ArticleDetail
        },
        {path:'*', redirect: '/home/topline'}
    ]
})