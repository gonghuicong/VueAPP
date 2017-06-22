<script>
  import { Header, Button } from 'mint-ui';

  export default{
    components: {
      [Header.name]: Header,
      [Button.name]: Button
    },
  };

</script>

<style scoped>
  .header { background-color: transparent!important; color: #333!important; border-bottom: 1px solid #bfbfbf; }
  .select-bar { min-height: 160px; padding: 40px 30px; }
  .el-tag { background-color: #f5f5f5; display: inline-block; padding: 0 5px; height: 28px; text-align: center; line-height: 28px; font-size: 14px; color: #333; border-radius: 4px; box-sizing: border-box; border: 1px solid transparent; white-space: nowrap; }
  .select-bar-tag { display: -webkit-box; display: -ms-flexbox; display: flex; justify-content: space-between; flex-wrap: wrap; }
  .select-bar-tag .el-tag { width: 28%; margin-bottom: 10px; }
  .package-summary { padding: 30px; margin: 0 auto; font-size: 14px; }
  .package-summary li { height: 40px; color: #0168b7; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
  .package-summary li input { width: 40px; border-width: 0 0 1px 0; border-style: solid; border-color: #666666; outline: none; text-align: center; }
  .package-summary li span { color: #666; }
  .cpj { display: inline-block; width: 75px; overflow: hidden; }
  .submit a { text-decoration: none; width: 100%; display: block; }
</style>

<template>
  <div>
    <mt-header title="装修清单" class="header">
      <router-link to="adduser" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="select-bar">
      <div class="select-bar-tag">
        <span class="el-tag">客厅</span>
        <span class="el-tag">餐厅</span>
        <span class="el-tag">卫生间</span>
        <span class="el-tag">卧室</span>
        <span class="el-tag">厨房</span>
        <span class="el-tag">阳台</span>
      </div>
      <span class="el-tag">添加更多房间</span>
    </div>
    <ul class="package-summary">
      <li>
        <div>超配洗手间：</div>
        <div>
          <input type="text" class="w30"> * <input type="text"> = <span class="cpj">￥00000000</span>
        </div>
      </li>
      <li>
        <div>套餐增减小计：</div>
        <div>
          <span>￥0.00</span>
        </div>
      </li>
      <li>
        <div>市场价：</div>
        <div>
          <span>￥0.00</span>
        </div>
      </li>
      <li>
        <div>需补差价：</div>
        <div>
          <span>￥0.00</span>
        </div>
      </li>
      <li>
        <div>装修面积：</div>
        <div>
          <input type="text"> m²
        </div>
      </li>
    </ul>
    <div class="container submit">
      <router-link to="/m/seller">
        <mt-button type="primary" size="large">保存装修清单</mt-button>
      </router-link>
    </div>
  </div>
</template>