import router from './router/indexRouter.js';
import Vue from 'vue';

import axios from 'axios';
import Index from './index.vue';
import store from './status/store.js';
Vue.use(iView);
Vue.prototype.axios = axios;
new Vue({
    el: '#main',
    router,
    store,
    render: h => h(Index)
});