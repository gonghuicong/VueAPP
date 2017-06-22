import extend from 'lodash/extend';
import axios from 'axios';
/**
 * Api请求http服务
 */
export let http = axios.create({
    params: {key: getKey()},
    headers: {
        'X-CSRF-TOKEN': G.csrfToken
    }
});
http.interceptors.request.use(function (config) {
    // 判断 是否mo_bile API地址, 否则使用新系统API地址
    if (!/https?:\/\//.test(config.url)) {
        config.url = (config.url.indexOf('?app=') >= 0 ? G.mApiUrl : G.mApiUrl) + config.url;
    }
    return config;
});

/**
 * 获取本地存储的用户身份key
 * @returns {null}
 */
export function getKey() {
    let keyExpires = localStorage.getItem('keyExpires');
    return keyExpires && (keyExpires > new Date().getTime()) ? localStorage.getItem('key') : null;
}
/**
 * 存储用户身份key到本地存储中
 * @param key
 * @param keyExpires
 */
export function setKey(key, keyExpires = new Date().getTime() + 60 * 60 * 24 * 7 * 1000) {
    localStorage.setItem('key', key);
    localStorage.setItem('keyExpires', keyExpires);
    // 更新http的用户访问key
    http.defaults.data = extend({key: key}, http.defaults.data || {});
}
/**
 * 如果值为true则返回默认Promise对象
 *
 * @param $true
 * @returns {*}
 */
export function defaultPromiseIfTrue($true = false) {
    return !!$true ? Promise.resolve() : false;
}