import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  ip: '',
  project: '/czxt/',
  page: 'user'
}
const getters = {
  ip (state) {
    return state.ip
  },
  project (state) {
    return state.project
  },
  page (state) {
    return state.page
  }
}
const mutations = {
  setIp (state, param) {
    state.ip = param
  },
  setPage (state, param) {
    state.page = param
  }
}
const actions = {

}
const vuexStore = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
export default vuexStore
