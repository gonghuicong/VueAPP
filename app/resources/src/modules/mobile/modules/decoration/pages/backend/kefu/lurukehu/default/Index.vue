<script>
    import { Button } from 'mint-ui';
    export default{
        components:{
            [Button.name]:Button
        }
    }

</script>

<style>
  .mint-button--large{width: 90%;margin: 1rem auto;font-size: 0.7rem;color: #ffffff;background-color: #ff7212;}
  .baoming a{ text-decoration: none }
</style>

<template>
  <div class="baoming">
    <ul class="keHuInformation">
      <li>
        <router-link to="lurukehu/detail">
          <div class="information">
            <img src="../../../../../assets/images/recommended_05.png">
            <div class="mid">
              <div class="people">黄先生<span>150101510150</span></div>
              <div>100m²<span>¥112300.00</span></div>
              <div>户型:A4<span>小区:桂花苑花园</span></div>
              <div>楼号:3栋2单元1503<span></span></div>
            </div>
            <div class="right">
              <div class="data">2016.02.03</div>
              <div class=""></div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <div class="information">
          <img src="../../../../../assets/images/recommended_05.png">
          <div class="mid">
            <div class="people">黄先生<span>150101510150</span></div>
            <div>100m²<span>¥112300.00</span></div>
            <div>户型:A4<span>小区:桂花苑花园</span></div>
            <div>楼号:3栋2单元1503<span></span></div>
          </div>
          <div class="right">
            <div class="data">2016.02.03</div>
            <div class=""></div>
          </div>
        </div>
      </li>
    </ul>
    <router-link to="lurukehu/add">
      <mt-button size="large">新增客户</mt-button>
    </router-link>
  </div>
</template>
