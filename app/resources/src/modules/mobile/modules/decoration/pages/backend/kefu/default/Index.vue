<script type="text/babel">
  import Vue from 'vue';
  import { Header, Tabbar, TabItem, Button, Badge,Actionsheet } from 'mint-ui';
  export default{
    components: {
      [Header.name]:Header,
      [Tabbar.name]: Tabbar,
      [TabItem.name]: TabItem,
      [Button.name]: Button,
      [Badge.name]: Badge,
      [Actionsheet.name]: Actionsheet
    }
  }
</script>

<style lang="scss">
  .wrap{width: 100%;height: 100%;display: inline-block;}
  .wrap .wrap-align{padding: 0 6% 0 6%;}
  .keFu-img{text-align: center;}
  .keFu-img img{text-align: center;border-radius: 100px ;width: 20%;margin:10px 0 10px 0; }
  .search{ width: 100%;border-color:#000;text-align: center;margin: 0 auto;}
  .search input {padding: 5px;width: 96%;font-size: 0.6rem;border: 1px solid #a8a8a8;border-radius: 3px ;}
</style>

<template>
  <div class="wrap">
    <div class="wrap-align mb20">
      <div class="keFu-img"><img src="../../../../assets/images/recommended_05.png"></div>
      <div class="search"><input type="text" placeholder="搜索设计师 客户 业务员"></div>
    </div>
    <ul class="card-list">
      <li>
        <router-link to="kefu/baomingkehu">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>报名客户</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="kefu/lurukehu">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>录入客户</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="kefu/qianzaikehu">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>潜在客户</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="kefu/dingjinkehu">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>定金客户</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="kefu/daikaigong">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>待开工客户</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="kefu/shigongzhong">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>施工中客户</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="kefu/wangongkehu">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>完工客户</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="kefu/zaixianxiaoxi">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>在线消息</span>
          <a>11</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
