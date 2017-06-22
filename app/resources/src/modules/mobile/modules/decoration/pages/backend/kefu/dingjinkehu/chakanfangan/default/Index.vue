<script type="text/babel">
    import { Navbar, TabItem,TabContainerItem,TabContainer,Cell,Button } from 'mint-ui';
    export default {
        components: {
            [Navbar.name]: Navbar,
            [TabItem .name]: TabItem,
            [TabContainerItem.name]: TabContainerItem,
            [TabContainer.name]: TabContainer,
            [Cell.name]:Cell,
            [Button.name]:Button
        },
        data(){
            return{
                selected: false
            }
        }
    }
</script>

<style lang="scss">
    .wrap .keHuInformation .information .mid{margin-left: 3%;width: 46%}
    .wrap .keHuInformation .information .right{ width: 32% }
    .wrap .keHuInformation .information .right .data{text-align: center}
    .wrap .keHuInformation .information .right .mint-button--small{font-size: 0.3rem;height: 20px;margin-top: 1.5rem;text-align: center}
    .mint-button--small{ font-size: 0.5rem;color: #00a0e9;height: 25px;margin-top: 0.4rem }
    .children-home {margin:0 0 0.5rem 1rem ;color: #ff9119;border-radius: 0 ;font-size: 0.6rem}
    .mint-button--large {width: 90%;margin: 0 auto;background-color: #ff6940;color: #ffffff;font-size: 0.7rem;font-weight: 600;height: 35px;border-radius:6px}
</style>

<template>
    <div class="baoming">
        <ul class="keHuInformation">
            <li>
                <div class="information">
                    <img src="../../../../../../assets/images/recommended_05.png">
                    <div class="mid">
                        <div class="people">黄先生<span>150101510150</span></div>
                        <div>户型:A4<span>小区:桂花苑花园</span></div>
                        <div>楼号:3栋2单元1503<span></span></div>
                        <router-link to="chakanfangan/fanganjilu">
                            <mt-button size="small">方案记录</mt-button>
                        </router-link>
                    </div>
                    <div class="right">
                        <div class="data">2016.02.03</div>
                        <mt-button size="small" class="business">设计师</mt-button>
                        <mt-button size="small" class="business">业务</mt-button>
                    </div>
                </div>
            </li>
        </ul>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">方案效果</mt-tab-item>
            <mt-tab-item id="2">VR全景</mt-tab-item>
            <mt-tab-item id="3">价格配置</mt-tab-item>
            <mt-tab-item id="4">施工图</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="result">
                    <img src="a">
                    <div class="activity">整体空间以蓝 米 金色合成一气,没有太多累赘的装饰,简约但不失个性,点点细节透露着美式风情</div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">

            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="budget">
                    <div class="header">全包预算:<span>70121</span></div>
                    <div class="nav">
                        <ul>
                            <li>基础包:¥<span>12121</span></li>
                            <li>升级包:¥<span>72321</span></li>
                            <li>主材包:¥<span>56121</span></li>
                        </ul>
                    </div>
                    <ul class="homeInformation">
                        <li>
                            <div class="information">
                                <img src="../../../../../../assets/images/recommended_05.png">
                                <div class="mid">
                                    <div class="people">主卧|预估¥<span>15110</span></div>
                                    <div class="area">净面积约<span>15.18m²</span>,精准数据测量后修正</div>
                                </div>
                                <div class="right">
                                    <div class="biaoQian"> ＞ </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="function">
                    <img src="a">
                </div>
                <mt-button size="large">施工图下载</mt-button>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>

</template>