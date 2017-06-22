<script type="text/babel">
  import { Header, Tabbar, TabItem, Button, Badge, Actionsheet } from'mint-ui';
  export default{
    components: {
      [Header.name]:Header,
      [Tabbar.name]: Tabbar,
      [TabItem.name]: TabItem,
      [Button.name]: Button,
      [Badge.name]: Badge,
      [Actionsheet.name]: Actionsheet
    },
    methods: {
      handleBack(){
        this.$router.back();
      }
    }
  }
</script>

<style>
</style>

<template>
  <div class="wrap">
    <mt-header title="设计部管理">
      <mt-button icon="back" slot="left" @click="handleBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed class="footer-tab" @input="handleInput">
      <mt-tab-item id="" >
        <i slot="icon" class="fa fa-home"></i>
        首页
      </mt-tab-item>
      <mt-tab-item>
        <i slot="icon" class="fa fa-bandcamp"></i>
        工作
      </mt-tab-item>
      <mt-tab-item id="">
        <i slot="icon" class="fa fa-user-circle-o"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
