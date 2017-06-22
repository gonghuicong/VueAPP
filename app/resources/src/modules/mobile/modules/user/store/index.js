import isEmpty from 'lodash/isEmpty';
import { SET_KEY } from '../../../store';
import { http } from '../../../../../utils';

// actions
export const LOAD_USER = 'mobile/user/loadUser';
export const LOGIN = 'mobile/user/login';

// mutations
export const SET_USER = 'mobile/user/setUser';

export default {
  state: {
    // 当前用户
    user: {}
  },
  mutations: {
    /**
     * 更新用户信息
     * @param state
     * @param user
     */
    [SET_USER] (state, user) {
      state.user = user;
    },
  },
  actions: {
    // 加载用户数据
    [LOAD_USER] ({ rootState, commit }) {
      if (rootState.key) {
        http
          .post('?app=member_index')
          .then((response) => {
            commit(SET_USER, response.data.datas.member_info);
          });
      }
    },
    // 提交登录参数
    [LOGIN] ({ dispatch, state, commit }, data) {
      if (isEmpty(state.user)) {
        http
          .post('?app=login', data)
          .then((response) => {
            commit(SET_KEY, response.data.datas.key);
            dispatch(LOAD_USER);
          });
      }
    }
  },
  getters: {  }
};