import './assets/_normalize.scss';

import Vue  from 'vue'
import App from './App.vue'
import store from './store'
import VueClazyLoad from 'vue-clazy-load'
import addPage from './shared/components/add-page.vue'
import editPage from './shared/components/edit-page.vue'
import tabs from './shared/components/tabs.vue'
import tab from './shared/components/tab.vue'
import bookmarkTree from './shared/components/bookmark-tree.vue'
Vue.use(VueClazyLoad)
Vue.component(addPage.name, addPage)
Vue.component(editPage.name, editPage)
Vue.component(tabs.name, tabs)
Vue.component(tab.name, tab)
Vue.component(bookmarkTree.name, bookmarkTree)
new Vue({
    el:'#app',
    store,
    render: h => h(App)
})