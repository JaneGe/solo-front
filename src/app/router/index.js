
import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/app/views/layout/index'

Vue.use(Router)

export const _CONSTANT_ROUTERS = [
    {
        path: '/login',
        component: () => import('@/app/views/login'),
        hidden: true
    },
    {
        path: '/dashboard',
        component: AppMain,
        redirect: '/dashboard',
        children: [
            {
                name: 'Dashboard',
                path: '/login',
                component: () => import('@/app/views/dashboard'),
                meta: {
                    title: '首页',
                    icon: 'dashboard',
                    noCache: true
                }
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: _CONSTANT_ROUTERS
})