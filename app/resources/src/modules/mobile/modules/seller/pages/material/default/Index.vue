<script>
  import { Header, Button, Popup } from 'mint-ui';
  import AddUser from '../../../components/package/AddUser.vue';

  export default{
    data() {
      return {
        addUserPopupVisible: false,
      }
    },
    components: {
      [Header.name]: Header,
      [Button.name]: Button,
      [Popup.name]: Popup,
      AddUser
    },
  };

</script>

<style scoped>
  .logo { display: -webkit-box; display: -ms-flexbox; display: flex; justify-content: center; align-items: center; height: 50vh; }
  .logo img { width: 70%; }
  .mint-popup {
    width: 100%;
    height: 270px;
  }
</style>

<template>
  <div id="root">
    <div class="logo"><img src="../../../assets/images/logo.png"></div>

    <div class="container">
      <mt-button class="mb20" type="danger" size="large" @click="addUserPopupVisible = true">添加客户</mt-button>
      <mt-button type="primary" size="large">客户详情</mt-button>
    </div>

    <mt-popup v-model="addUserPopupVisible" position="bottom">
      <add-user></add-user>
    </mt-popup>
  </div>
</template>