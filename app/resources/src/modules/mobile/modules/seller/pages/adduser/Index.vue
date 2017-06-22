<script>
  import { Field , Button } from 'mint-ui';

  export default{
    components: {
      [Field.name]: Field,
      [Button.name]: Button
    }
  };

</script>

<style scoped>
  .wrap { width: 100%; height: 100%; }
  .logo { height: 35vh; display: -webkit-box; display: -ms-flexbox; display: flex; justify-content: center; align-items: center; }
  .logo img { width: 30%; margin-top: 10vh; }
  .info { height: 45vh; display: -webkit-box; display: -ms-flexbox; display: flex; justify-content: center; align-items: center; }
  .info .info-wrap { width: 100%; }
  .submit { height: 20vh; display: -webkit-box; display: -ms-flexbox; display: flex; justify-content: center; align-items: center; }
  .submit a { text-decoration: none; width: 100%; display: block; }
</style>

<style>
  html, body { width: 100%; height: 100%; }
</style>

<template>
  <div class="wrap">
    <div class="logo"><img src="../../assets/images/logo.png"></div>
    <div class="info">
      <div class="info-wrap">
        <mt-field label="用户名称" placeholder=""></mt-field>
        <mt-field label="联系电话" placeholder=""></mt-field>
        <mt-field label="用户地址" placeholder=""></mt-field>
        <mt-field label="创建时间" placeholder=""></mt-field>
      </div>
    </div>
    <div class="container submit">
      <router-link to="metarial">
        <mt-button type="primary" size="large">进入选材系统</mt-button>
      </router-link>
    </div>
  </div>
</template>