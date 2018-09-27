import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    ip: 'http://134.98.100.73:9090',
    project: '/czxt_war/'
};
const getters = {
    ip(state) {
        return state.ip;
    },
    project(state) {
        return state.project;
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