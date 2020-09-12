import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import pageTwo from '@/store/modules/pageTwo.ts'
import pageThree from '@/store/modules/pageThree.ts'


export default new Vuex.Store({
  modules: {
    pageTwo,
    pageThree,
  }
})
