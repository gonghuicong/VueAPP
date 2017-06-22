import { http, defaultPromiseIfTrue } from '../../../../../utils';

// mutations
export const SET_GOODS_CATEGORIES =  'mobile/store/setGoodsCategories';

// actions
export const LOAD_GOODS_CATEGORIES = 'mobile/store/loadGoodsCategories';
export const LOAD_GOODS_LIST = 'mobile/store/loadGoodsList';
export const LOAD_GOODS = 'mobile/store/loadGoods';
export const LOAD_GOODS_SPEC = 'mobile/store/loadGoodsSpec';
export const LOAD_STORE_INFO = 'mobile/store/loadStoreInfo';
export const LOAD_ACTIVE_LIST = 'mobile/store/loadActiveList';
export const LOAD_BANNER_INFO = 'mobile/store/loadBannerInfo';
export const ADD_USER = 'mobile/store/addUser';

export default {

  state: {
    goods_categories: []
  },
  mutations: {
    [SET_GOODS_CATEGORIES] (state, categories) {
      state.goods_categories = categories;
    }
  },
  actions: {
    [LOAD_GOODS_CATEGORIES] ({state, commit, rootState}, params) {
      return defaultPromiseIfTrue(state.goods_categories.length) || http.get(rootState.api.categories, { params })
          .then((response) => {
            commit(SET_GOODS_CATEGORIES, response.data);
            return response;
          });
    },
    [LOAD_GOODS_LIST] ({　rootState　}, params) {
      return http.get(rootState.api.goodsSearch, { params });
    },
    [LOAD_GOODS] ({　rootState　}, params) {
      return http.get(rootState.api.goodsSpec, { params });
    },
    [LOAD_GOODS_SPEC] ({　rootState　}, params) {
      return http.get(rootState.api.goodsDetails, { params });
    },
    [LOAD_STORE_INFO] ({　rootState　}, params) {
      return http.get(rootState.api.loadStoreInfo, { params });
    },
    [LOAD_ACTIVE_LIST] ({　rootState　}, params) {
      return http.get(rootState.api.activeList, { params });
    },
    [LOAD_BANNER_INFO] ({　rootState　}, params) {
      return http.get(rootState.api.bannerInfo, { params });
    },
    [ADD_USER] ({　rootState　}, config) {
      return http.post(rootState.api.addUser, {}, config);
    },
  },
  getters: {}
};
