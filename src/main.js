import './assets/_normalize.scss';

import Vue  from 'vue'
import App from './App.vue'
import store from './store'
import VueClazyLoad from 'vue-clazy-load'
Vue.use(VueClazyLoad)

new Vue({
    el:'#app',
    store,
    render: h => h(App)
})