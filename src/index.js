import router from './router/indexRouter.js';
import Vue from 'vue';

import http from './util/ajax.js';
import echarts from 'echarts';
import Czxt from './czxt.vue';
import store from './store/store.js';
import ElementUI from 'element-ui';
import './css/reset.scss';
import 'element-ui/lib/theme-chalk/index.css';
import './css/media.scss';
import './css/style.scss';
Vue.use(ElementUI);
Vue.prototype.$http = http;
Vue.prototype.$echarts = echarts;
new Vue({
    el: '#main',
    router,
    store,
    render: h => h(Czxt)
});