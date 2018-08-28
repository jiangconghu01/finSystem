import router from '../router/indexRouter.js';
import Vue from 'vue';

import axios from 'axios';
import echarts from 'echarts';
import Czxt from './czxt.vue';
import store from '../status/store.js';
import './css/reset.scss'
Vue.prototype.axios = axios;
Vue.prototype.echarts = echarts;
new Vue({
    el: '#main',
    router,
    store,
    render: h => h(Czxt)
});