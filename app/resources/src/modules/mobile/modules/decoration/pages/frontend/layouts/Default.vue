<script type="text/babel">
    import Vue from 'vue';
    import { Header, Tabbar, TabItem, Button, Badge } from 'mint-ui';
    export default {
        components: {
            [Header.name]: Header,
            [Tabbar.name]: Tabbar,
            [TabItem.name]: TabItem,
            [Button.name]: Button,
            [Badge.name]: Badge
        },
        data() {
            return {
                selected: '/d'
            };
        },
        methods: {
            isIndex () {
                return this.$router.currentRoute.path == '/d';
            },
            handleInput (location) {
                this.$router.push(location);
            },
            handleBack() {
                this.$router.back();
            }
        }
    };
</script>
<style lang="scss">
    @import "../../../assets/sass/default.scss";
</style>

<template>
  <div id="root">
    <mt-header fixed title="众森装饰">
        <mt-button icon="back" slot="left" @click="handleBack" v-if="!isIndex()">返回</mt-button>
    </mt-header>
    <div class="pt40 pb40">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected" fixed class="footer-tab" @input="handleInput">
      <mt-tab-item id="/m/decoration/frontend">
          <i slot="icon" class="fa fa-home"></i>
          首页
      </mt-tab-item>
      <mt-tab-item id="/m/decoration/frontend/zhucai">
          <i slot="icon" class="fa fa-bandcamp"></i>
          主材
      </mt-tab-item>
      <mt-tab-item id="/m/decoration/frontend/fucai">
          <i slot="icon" class="fa fa-bandcamp"></i>
          辅材
      </mt-tab-item>
      <mt-tab-item id="/m/decoration/frontend/gongdi">
          <i slot="icon" class="fa fa-home"></i>
          工地
      </mt-tab-item>
      <mt-tab-item id="/m/decoration/frontend/my">
          <i slot="icon" class="fa fa-user-circle-o"></i>
          我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

