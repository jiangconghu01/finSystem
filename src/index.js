import router from './router/indexRouter.js';
import Vue from 'vue';

//import axios from 'axios';
import http from './util/ajax.js';
import echarts from 'echarts';
import Czxt from './czxt.vue';
import store from '../status/store.js';
import './css/reset.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$http = http;
Vue.prototype.$echarts = echarts;
new Vue({
    el: '#main',
    router,
    store,
    render: h => h(Czxt)
});