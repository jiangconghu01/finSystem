import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    month: '',
    chartsArr: [],
    systemType: '',
    module: 'dev'

};
const getters = {
    month(state) {
        return state.month;
    },
    chartsArr() {
        return state.chartsArr;
    },
    module(state) {
        return state.module;
    },
    systemType() {
        return state.systemType;
    }
};
const mutations = {

};
const actions = {

};
var vuexStore = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default vuexStore;