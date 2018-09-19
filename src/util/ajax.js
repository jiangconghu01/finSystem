import axios from 'axios';
import qs from 'qs';
//import store from '../store/store.js';
//axios.defaults.baseURL = 'http://134.98.100.73:9090';
axios.defaults.timeout = 25000;
axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    console.log(config);
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
});
const http = {
    get(url, params) {
        params = params ? params : {};
        return new Promise((resolve, reject) => {
            axios.get(url, { params: params })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                })
        });
    },
    post(url, params) {
        params = params ? params : {};
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params))
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    reject(err);
                });
        })
    }
}
export default http;