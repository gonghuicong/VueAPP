<script type="text/babel">
    import { Button } from 'mint-ui';
    export default {
        components:{
            [Button.name]:Button
        }
    }
</script>

<style lang="scss">
    .allow { background-color: #d85712!important; }
    .allow .mint-button-text { color: #ffffff }
    .refuse .mint-button-text { color: #ffffff }
    .refuse { background-color: #898989!important; }
    .mint-button--small{ font-size: 13px;height: 24px }
</style>

<template>
    <div class="baoming">
        <ul class="keHuInformation">
            <li>
                <div class="information">
                    <img src="../../../../../assets/images/recommended_05.png">
                    <div class="mid">
                        <div class="people">黄先生<span>150101510150</span></div>
                        <div>100m²<span>¥112300.00</span></div>
                        <div>户型:A4<span>小区:桂花苑花园</span></div>
                        <div>楼号:3栋2单元1503<span></span></div>
                        <router-link to="customer/paidan">
                            <mt-button size="small"  class="allow">派单</mt-button>
                        </router-link>
                        <mt-button size="small" class="refuse">资料不全</mt-button>
                    </div>
                    <router-link to="customer/chakanfangan">
                        <div class="right">
                            <div class="data">2016.02.03</div>
                            <div class=""></div>
                        </div>
                    </router-link>
                </div>
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
                    <router-link to="NewCustomer/cankaofangan">
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