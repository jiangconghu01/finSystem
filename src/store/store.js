import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    ip: 'http://134.98.100.73:9090'

};
const getters = {
    ip(state) {
        return state.ip;
    }
};
const mutations = {
    setIp(state, param) {
        state.ip = param;
    }
};
const actions = {

};
const vuexStore = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
export default vuexStore;