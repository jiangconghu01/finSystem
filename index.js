import router from './router/indexRouter.js';
import Vue from 'vue';

import axios from 'axios';
import Czxt from './czxt.vue';
import store from './status/store.js';
Vue.prototype.axios = axios;
new Vue({
    el: '#main',
    router,
    store,
    // components: { Czxt },
    // template: '<Czxt/>'
    render: h => h(Czxt)
});
console.log(44444444444444444);