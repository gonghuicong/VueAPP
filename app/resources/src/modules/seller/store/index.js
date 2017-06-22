import isEmpty from 'lodash/isEmpty';
import extend from 'lodash/extend';
import { http } from '../../../utils';

// actions
export const LOAD_MENU = 'seller/loadMenu';
export const LOAD_USER = 'seller/loadUser';
export const LOAD_STORE = 'seller/loadStore';
export const SET_CURRENT_MENU = 'seller/setCurrentMenu';

// mutataions
export const SET_MENU = 'seller/setMenu';
export const SET_USER = 'seller/setUser';
export const SET_STORE = 'seller/setStore';
export const SET_PAGE = 'seller/setPage';

export default {
  state: {
    menu: {},
    user: {},
    store: {},

    page: { // 页面设置
      currentMenu: '', // 当前二级页
      currentSubmenu: '' // 当前三级页
    }
  },
  mutations: {
    [SET_MENU] (state, menu) {
      state.menu = menu;
    },
    [SET_USER] (state, user) {
      state.user = user;
    },
    [SET_STORE] (state, store) {
      state.store = store;
    },
    [SET_PAGE] (state, page) {
      state.page = page;
    }
  },
  actions: {
    [LOAD_MENU] ({ state, commit }) {
      if (isEmpty(state.menu)) {
        http.get('?app=seller&wwi=menu')
          .then((response) => {
            commit(SET_MENU, response.data.datas);
          });
      }
    },
    [LOAD_USER] ({ state, commit }) {
      if (isEmpty(state.user)) {
        http.get('?app=seller&wwi=user')
          .then((response) => {
            commit(SET_USER, response.data.datas);
          });
      }
    },
    [LOAD_STORE] ({ state, commit }) {
      if (isEmpty(state.store)) {
        http.get('?app=seller&wwi=info')
          .then((response) => {
            commit(SET_STORE, response.data.datas);
          })
      }
    },
    [SET_CURRENT_MENU] ({ state, commit }, currentSubmenu, currentMenu = state.page.currentMenu) {
      commit(SET_PAGE, extend(state.page, {
        currentMenu: currentMenu,
        currentSubmenu: currentSubmenu
      }));
    }
  },
  getters: {  }
};
