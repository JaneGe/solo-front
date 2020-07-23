import Vue from 'vue'
import App from './App'
import Router from './router'
import { getToken } from '../utils/cookie'

Router.beforeEach((to, from, next) => {
    NProgress.start()
    if (!getToken()) { }
    else { }
})

new Vue({
    el: '#app',
    Router,
    template: '<App />',
    components: { App }
})