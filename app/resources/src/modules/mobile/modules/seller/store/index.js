import { http, defaultPromiseIfTrue } from '../../../../../utils';

// mutations
export const SET_GOODS_CATEGORIES =  'mobile/seller/setGoodsCategories';

// actions
export const LOAD_GOODS_CATEGORIES = 'mobile/seller/loadGoodsCategories';
export const LOAD_GOODS_LIST = 'mobile/seller/loadGoodsList';
export const LOAD_GOODS = 'mobile/seller/loadGoods';
export const LOAD_GOODS_SPEC = 'mobile/seller/loadGoodsSpec';
export const LOAD_PACKAGE = 'mobile/seller/loadPackage';
export const ADD_PACKAGE_USER = 'mobile/seller/addPackageUser';
export const DEL_PACKAGE_USER = 'mobile/seller/delPackageUser';
export const LOAD_STORE_INFO = 'mobile/seller/loadStoreInfo';

export default {

  state: {
    goods_categories: [],
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
    [LOAD_PACKAGE] ({　rootState　}, params) {
      return http.get(rootState.api.packageListUser, { params });
    },
    [ADD_PACKAGE_USER] ({　rootState　}, config) {
      return http.post(rootState.api.packageAddUser, {}, config);
    },
    [DEL_PACKAGE_USER] ({　rootState　}, params) {
      return http.get(rootState.api.packageDelUser, { params });
    },
    [LOAD_STORE_INFO] ({　rootState　}, params) {
      return http.get(rootState.api.storeInfo, { params });
    },
  },
  getters: {}
};
