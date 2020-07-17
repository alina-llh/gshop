import Vue from "vue"
import Vuex from "vuex"
import home from '@/store/home'
import search from '@/store/search'
Vue.use(Vuex)
//初始化数据
const state = {}
const mutations = {}
const actions = {}
const getters = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    search
  }
})