<script>
  import { Header, Search, Button } from 'mint-ui';

  export default{
    components: {
      [Search.name]: Search,
      [Header.name]: Header,
      [Button.name]: Button
    },
    methods: {
      handleBack () {
        this.$router.back();
      }
    }
  };

</script>

<style scoped>
  .mint-header { background-color: transparent!important; color: #333!important; border-bottom: 1px solid #bfbfbf; }
  .spec-item { display: -webkit-box; display: -ms-flexbox; display: flex; padding: 15px; border-bottom: 1px solid #ececec; overflow: hidden; }
  .spec-item .spec-left { width: 100px; height: 100px; background-color: #00C1B3; margin-right: 10px; box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); }
  .spec-item .spec-right { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; font-size: 12px; }
  .spec-item .spec-right dl { overflow: hidden; }
  .spec-item .spec-right dd, .spec-right dt { float: left; }
  .spec-item .spec-right dd { width: 50px; color: #0068b6; }
  .spec-item .spec-right dt { color: #333; }
  .spec-item .spec-right .goods-name { height: 20px; line-height: 20px; white-space: normal; text-overflow: ellipsis; }
  .spec-item .spec-right .goods-name .el-tag { background-color: #f5f5f5; display: inline-block; width: 45px; text-align: center; height: 20px; line-height: 20px; font-size: 12px; color: #333; border-radius: 4px; box-sizing: border-box; white-space: nowrap; }
  .spec-item .spec-right .goods-price { height: 20px; line-height: 20px; }
  .spec-item .spec-right .goods-unit { height: 20px; line-height: 20px; }
  .spec-item .spec-right .goods-unit dl { float: left; }
  .spec-item .spec-right .goods-unit dl + dl { margin-left: 10px; }
  .spec-item .spec-right .goods-unit dl dd { width: 40px; }
  .spec-item .spec-right .goods-unit dl dt { width: 40px; background-color: #f5f5f5; text-align: center; }
</style>

<style>
  .mint-header .is-right .fa { font-family: FontAwesome!important; color: #ec5566; }
</style>

<template>
  <div>
    <mt-header title="客厅" fixed>
      <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
      <mt-button icon="a fa fa-plus-circle" slot="right"></mt-button>
    </mt-header>
    <div class="mt40">
      <div class="spec-item">
        <div class="spec-left"></div>
        <div class="spec-right">
          <dl class="goods-name">
            <dd><span class="el-tag">瓷砖</i></span></dd>
            <dt>新中源</dt>
          </dl>
          <dl class="goods-price">
            <dd>市场价：</dd>
            <dt>￥12.80</dt>
          </dl>
          <dl class="goods-price">
            <dd>套餐价：</dd>
            <dt>￥12.80</dt>
          </dl>
          <dl class="goods-price">
            <dd>增减价：</dd>
            <dt>￥12.80</dt>
          </dl>
          <div class="goods-unit">
            <dl>
              <dd>数量：</dd>
              <dt>1</dt>
            </dl>
            <dl class="goods-price">
              <dd>单位：</dd>
              <dt>个</dt>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>