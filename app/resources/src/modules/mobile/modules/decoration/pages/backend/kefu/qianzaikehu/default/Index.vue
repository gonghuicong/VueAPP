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
    .mint-button--small{ font-size: 0.5rem;background-color: #ffffff }
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
                        <router-link to="qianzaikehu/fanganjilu">
                            <mt-button size="small">参考记录</mt-button>
                            <mt-badge type="error" size="small">1</mt-badge>
                        </router-link>
                    </div>
                    <router-link to="qianzaikehu/cankaofangan">
                        <div class="right">
                            <div class="data">2016.02.03</div>
                            <div class=""></div>
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
