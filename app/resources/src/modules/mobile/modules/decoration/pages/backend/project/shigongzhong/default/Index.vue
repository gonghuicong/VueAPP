<script>
    import { Button,Badge } from 'mint-ui';
    export default{
        components:{
            [Button.name]:Button,
            [Badge.name]:Badge
        }
    }
</script>

<style>
  .mint-button--small{ font-size: 0.5rem;background-color: #ffffff;height: 25px  }
  .mid a { text-decoration: none }
  .baoming .keHuInformation .footer { text-align: center }

</style>
<template>
  <div class="baoming">
    <ul class="keHuInformation">
      <li>
        <div class="information">
          <img src="../../../../../assets/images/recommended_05.png">
          <div class="mid">
            <div class="people">黄先生<span>150101510150</span></div>
            <div>户型:A4<span>小区:桂花苑花园</span></div>
            <div>楼号:3栋2单元1503</div>
          </div>
          <div class="right">
            <router-link to="shigongzhong/chakanfangan">
              <div class="data">2016.02.03</div>
              <div class=""></div>
            </router-link>
          </div>
        </div>
        <div class="footer">
          <mt-button size="small">材料申购</mt-button>
          <mt-button size="small">工程播报</mt-button>
          <mt-button size="small">工程验收</mt-button>
        </div>
      </li>
    </ul>
  </div>
</template>
