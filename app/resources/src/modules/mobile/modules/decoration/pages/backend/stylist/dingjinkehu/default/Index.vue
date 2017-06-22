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
  .mint-button--small{ font-size: 0.5rem;background-color: #ffffff;padding: 0.1rem 0.4rem 0.1rem 0.4rem  }
  .mint-button.is-disabled{ font-size: 0.5rem;background-color: #ffffff;padding: 0.1rem 0.4rem 0.1rem 0.4rem; height: 25px;  margin-top: 0.4rem;  }
  .mid a { text-decoration: none }

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
            <router-link to="dingjinkehu/chakanfangan">
              <mt-button size="small">查看方案</mt-button>
              <mt-badge type="error" size="small">1</mt-badge>
            </router-link>
          </div>
          <div class="right">
            <div class="data">2016.02.03</div>
            <mt-button size="small">业务</mt-button>
          </div>
        </div>
      </li>
      <li>
        <div class="information">
          <img src="../../../../../assets/images/recommended_05.png">
          <div class="mid">
            <div class="people">黄先生<span>150101510150</span></div>
            <div>户型:A4<span>小区:桂花苑花园</span></div>
            <div>楼号:3栋2单元1503</div>
            <router-link to="dingjinkehu/chakanfangan">
              <mt-button disabled>查看方案</mt-button>
              <mt-badge type="error" size="small">1</mt-badge>
            </router-link>
          </div>
          <div class="right">
            <div class="data">2016.02.03</div>
            <mt-button size="small">业务</mt-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
