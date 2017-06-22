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
    .children-home {margin:0 0 0.5rem 1rem ;color: #ff9119;border-radius: 0 ;font-size: 0.6rem}
    .business { color: #00a0e9;font-size: 0.6rem;margin-top: 0.5rem;background-color: #ffffff;border: 1px solid #00a0e9;}
</style>

<template>
    <div class="baoming">
        <ul class="keHuInformation">
            <li>
                 <div class="information">
                        <img src="../../../../../../assets/images/recommended_05.png">
                        <div class="mid">
                            <div class="people">黄先生<span>150101510150</span></div>
                            <div>100m²<span>¥112300.00</span></div>
                            <div>户型:A4<span>小区:桂花苑花园</span></div>
                            <div>楼号:3栋2单元1503<span></span></div>
                        </div>
                        <div class="right">
                            <div class="data">2016.02.03</div>
                            <div class="biaoQian">身份</div>
                            <mt-button size="small" class="business">业务</mt-button>
                        </div>
                 </div>
            </li>
        </ul>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">方案效果</mt-tab-item>
            <mt-tab-item id="2">价格配置</mt-tab-item>
            <mt-tab-item id="3">功能配置</mt-tab-item>
        </mt-navbar>
            <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="result">
                    <img src="a">
                    <div class="activity">参与的活动:暂时没有活动信息 否则 <a><span>5.1大促[详情]</span></a></div>
                    <div class="contact">联系客户<span> > </span></div>
                    <div class="customer"><ul><li>有效客户</li><li>无效客户</li></ul></div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
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
            <mt-tab-container-item id="3">
                <div class="function">
                    <div class="home">2室1客餐厅 1厨 1卫 2 阳台</div>
                    <div class="children">
                        <div>除主卧外,另外一个功能为:</div>
                        <mt-button size="small" class="children-home">儿童房</mt-button>
                    </div>
                    <div class="children">
                        <div>2个阳台用作:</div>
                        <mt-button size="small" class="children-home">厨房阳台</mt-button>
                        <mt-button size="small" class="children-home">客厅阳台</mt-button>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>