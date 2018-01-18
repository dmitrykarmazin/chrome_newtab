import Vue from 'vue'
import Vuex from 'vuex'

import { default as bgModule } from './modules/bg'
import { default as forecastModule}   from './modules/forecast'
import { default as pagesModule }  from './modules/pages'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      forecast:forecastModule,
      photo:bgModule,
      pages:pagesModule
    }
})
