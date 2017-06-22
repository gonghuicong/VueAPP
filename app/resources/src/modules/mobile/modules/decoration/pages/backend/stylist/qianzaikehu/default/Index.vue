<script type="text/ecmascript-6">
    import { Navbar, TabItem,TabContainerItem,TabContainer,Cell,Button,Popup,Badge } from 'mint-ui';
    export default {
        components: {
            [Navbar.name]: Navbar,
            [TabItem .name]: TabItem,
            [TabContainerItem.name]: TabContainerItem,
            [TabContainer.name]: TabContainer,
            [Cell.name]:Cell,
            [Button.name]:Button,
            [Popup.name]:Popup,
            [ Badge.name ]:Badge
        },
        data(){
            return{
                selected: false,
                propupVisible: false
            }
        },
        methods:{
            propupClick: function () {
                this.propupVisible =true
            }
        },
        component:{
            child:{
                template:"<div>123213231</div>"
            }
        }
    }
</script>

<style>
    .mint-button--small{ font-size: 0.5rem;color: #00a0e9;height: 25px;margin-top: 0.4rem }
    .children-home {margin:0 0 0.5rem 1rem ;color: #ff9119;border-radius: 0 ;font-size: 0.6rem}
    .mint-button--large {width: 90%;margin: 0 auto;background-color: #ff6940;color: #ffffff;font-size: 0.7rem;font-weight: 600;height: 35px;border-radius:6px}
    .alert {font-size: 0.5rem;background-color: #fffea9;display: inline-block; }
    .alert p,.alert h4{ padding: 0.2rem;opacity: 0.7 }
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
                        <div>楼号:3栋2单元1503<span></span></div>
                        <router-link to="qianzaikehu/fanganjilu">
                            <mt-button size="small">沟通日志</mt-button>
                            <mt-badge size="small" color="red">1</mt-badge>
                        </router-link>
                    </div>
                    <router-link to="qianzaikehu/cankaofangan">
                        <div class="right">
                            <div class="data">2016.02.03</div>
                            <mt-popup v-model="propupVisible" position="bottom">
                                <child></child>
                            </mt-popup>
                            <mt-button size="small" class="business" @click.native="propupClick">设计师</mt-button>
                            <mt-button size="small" class="business">业务</mt-button>
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
