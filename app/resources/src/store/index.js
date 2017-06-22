import Vuex from 'vuex';
import router from '../router';
import { http, setKey, getKey } from '../utils';
import isEmpty from 'lodash/isEmpty';

import mobile from '../modules/mobile/store';
import seller from '../modules/seller/store';

export const SMS_TYPE_REGISTER = 1; // 短信注册
export const SMS_TYPE_LOGIN = 2; // 短信登录
export const SMS_TYPE_RESET = 3; // 短信找回密码

// mutations
export const SET_KEY = 'setKey';
export const SET_CAPTCHA_KEY = 'setCaptchaKey';
export const SET_CAPTCHA_RANDOM = 'setCaptchaRandom';

// actions
export const SET_LAYOUT = 'setLayout';
export const LOAD_CAPTCHA_KEY = 'loadCaptchaKey';
export const USER_LOGIN = 'userLogin';
export const USER_SMS_REGISTER = 'userSMSRegister';
export const USER_SMS_PASSWORD_RESET = 'userSMSPasswordReset';

export default new Vuex.Store({
    state: {
        name: '优居完整家居',
        key: getKey(),
        captchaKey: '',
        _captchaRandom: '',
        // API地址列表
        api: {
            captchaKey: '?app=seccode&wwi=makecodekey', // 验证码key获取
            captcha: '?app=seccode&wwi=makecode', // 验证码
            sendSmsCaptcha: '?app=connect&wwi=get_sms_captcha', // 获取短信验证码
            checkSmsCaptcha: '?app=connect&wwi=check_sms_captcha', // 验证短信验证码
            smsRegiter: '?app=connect&wwi=sms_register', // 手机短信验证方式注册
            smsPasswordReset: '?app=connect&wwi=find_password', // 手机短信方式找回密码
            login: '?app=login',
            categories: '?app=search&wwi=categories', // 商品分类
            goodsSearch: '?app=search', // 商品搜索
            goodsSpec: '?app=search&wwi=goods&category=zhucai', // 商品详情搜索
            goodsDetails: '?app=goods&wwi=body',  //商品详情
            packageAddUser: '?app=store_custom_zhucai_member&wwi=adduser',  //新增用户模板
            packageListUser: '?app=store_custom_zhucai_member&wwi=userlist',  //查询用户订单列表
            packageDelUser: '?app=store_custom_zhucai_member&wwi=userdel',  //查询用户订单列表
            storeInfo: '?app=store_custom_zhucai_member&wwi=store_info',  //商家页店铺信息
            bannerInfo: '?app=store_active&wwi=banner_info',  //店铺幻灯片
            activeList: '?app=store_active&wwi=get_active_list',  //店铺活动
            addUser: '?app=store_active&wwi=apply',  //预约报名
            loadStoreInfo: '?app=store&wwi=store_info',  //客户页店铺信息
        },
        _layout: null, // 为false表示无外层包裹框架样式, 各layouts应该自实现判断getters => layout
    },
    getters: {
        layout (state) {
            return state._layout === null ? router.currentRoute.query.iframe > 0 : state._layout;
        },
        captchaUrl (state) {
            if (!state.captchaKey) {
                return false;
            }
            return G.mApiUrl + state.api.captcha + '&k=' + state.captchaKey + '&t=' + state._captchaRandom;
        }
    },
    mutations: {
        [SET_KEY] (state, key) {
            state.key = key;
            setKey(key);
        },
        [SET_LAYOUT] (state, layout) {
            state._layout = layout;
        },
        [SET_CAPTCHA_KEY] (state, captchaKey) {
            state.captchaKey = captchaKey;
        },
        [SET_CAPTCHA_RANDOM] (state, random) {
            state._captchaRandom = random;
        }
    },
    actions: {
        [SET_LAYOUT] ({commit}, layout) {
            commit(SET_LAYOUT, layout);
        },
        [LOAD_CAPTCHA_KEY] ({state, commit}, force = false) {
            if (isEmpty(state.captcha) || force) {
                http.get(state.api.captchaKey)
                    .then(({ data }) => {
                        commit(SET_CAPTCHA_KEY, data.datas.codekey);
                        commit(SET_CAPTCHA_RANDOM, Math.random());
                    });
            }
        },
        [USER_LOGIN] ({ state, commit}, data) {
            return http.post(state.api.login, data)
                .then((response) => {
                    commit(SET_KEY, response.data.datas.key);
                    return response;
                });
        },
        [USER_SMS_REGISTER] ({ state, commit}, data, login = true) {
            return http.post(state.api.smsRegiter, data)
                .then((response) => {
                    if (login) {
                        commit(SET_KEY, response.data.datas.key);
                    }
                    return response;
                });
        },
        [USER_SMS_PASSWORD_RESET] ({ state, commit}, data, login = true)
        {
            return http.post(state.api.smsPasswordReset, data)
                .then((response) => {
                    if (login) {
                        commit(SET_KEY, response.data.datas.key);
                    }
                    return response;
                });
        }
    },
    modules: {
        seller,
        mobile
    }
});
