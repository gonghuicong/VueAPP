<script>
  import { Header, Button, Popup, Spinner } from 'mint-ui';
  import AddUser from '../../components/package/AddUser.vue';
  import UserList from '../../components/package/UserList.vue';
  import { http } from '../../../../../../utils';
  import { mapActions } from 'vuex';
  import { LOAD_STORE_INFO } from '../../store';

  export default {
    data() {
      return {
        store_info: {},
        addUserPopupVisible: false,
        userListPopupVisible: false
      }
    },
    components: {
      [Header.name]: Header,
      [Button.name]: Button,
      [Popup.name]: Popup,
      [Spinner.name]: Spinner,
      AddUser,
      UserList
    },
    created() {
      this._loadStoreInfo();
    },
    methods: {
      ...mapActions({
        loadStoreInfo: LOAD_STORE_INFO
      }),
      _loadStoreInfo () {
        this.loadStoreInfo()
          .then(({ data }) => {
            this.store_info = data.datas.store_info;
          });
      }
    }
  };

</script>

<style scoped>
  .logo { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; -webkit-justify-content: center; justify-content: center; align-items: center; height: 45vh; }
  .logo img { width: 70%; }
  .title { text-align: center; margin-bottom: 20px; font-size: 24px; font-weight: bold; text-overflow: ellipsis; white-space: normal; width: 100%; overflow: hidden; }
  .add-user { width: 100%; height: 270px; }
  .user-list { width: 100%; height: 100%; }
  .loading { margin-top: 45vh; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: space-between; justify-content: center; }
</style>

<template>
  <div id="root">
    <template v-if="store_info.store_banner">
      <div class="logo"><img :src="store_info.store_banner"></div>
      <div class="container">
        <div class="title">{{ store_info.store_name }}选材系统</div>
        <mt-button class="mb20" type="danger" size="large" @click="addUserPopupVisible = true">添加客户</mt-button>
        <mt-button type="primary" size="large" @click="userListPopupVisible = true">客户详情</mt-button>
      </div>
    </template>
    <div class="loading" v-else>
      <mt-spinner color="#26a2ff" type="fading-circle"></mt-spinner>
      加载中...
    </div>

    <mt-popup v-model="addUserPopupVisible" position="bottom" class="add-user">
      <add-user></add-user>
    </mt-popup>
    <mt-popup v-if="userListPopupVisible" v-model="userListPopupVisible" position="bottom" class="user-list">
      <mt-header fixed title="客户列表">
        <mt-button icon="back" slot="left" @click="userListPopupVisible = false"></mt-button>
      </mt-header>
      <user-list></user-list>
    </mt-popup>
  </div>
</template>