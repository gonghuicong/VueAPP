<script type="text/babel">
    import { Cell,Button } from 'mint-ui';
    export default{
        components:{
            [Cell.name]:Cell,
            [Button.name]:Button
        }
    }
</script>

<style lang="scss">
    .pay .caiwubu-nav { display: inline-block;width: 100% }
    .nav-content .caiwubu-footer .mint-button--small{ margin-right:0; background-color: #ff9724 ;padding: 0 2% ;color: #ffffff;font-size: 0.6rem;width: 17%}
    .pay .caiwubu-nav ul li { float: left; list-style: none; font-size: 0.6rem;padding: 4% 0;display: inline-block;width: 25%;text-align: center }
    .pay .gckInformation .information .mid div span{ margin: 0 5% 10% 4%;}
    .caiwubu-footer-one{ border-top: 1px solid #cbcbcb;padding: 2% 1% }
    .caiwubu-footer-one span{ color: #ff7212; }
    .pay .gckInformation .information .mid{ width: 60%;float: left }
    .pay .baoming .right {float: left;line-height: 2.5rem;margin-left: 5%;color: #00a0e9 }
    .nav-content .caiwubu-footer-one .mint-button--small{ margin-right:0; background-color: #ff6130 ;padding: 0 2% ;color: #ffffff;font-size: 0.6rem;width: 17%;height: 25px}
    .nav-content .caiwubu-footer-one .data { margin-right:56%; }
    .nav-content-two { margin-bottom: 0!important; }
</style>

<template>
    <div class="pay">
        <div class="caiwubu-nav">
            <ul>
                <li>全部</li>
                <li>结算待付</li>
                <li>已付</li>
                <li>借资</li>
            </ul>
        </div>
        <div class="all">
            <div class="nav-content nav-content-two">
                <div class="caiwubu-header">
                    <ul>
                        <li class="first_li"><img src="../../../../../assets/images/package_logo_02.png"></li>
                        <li class="second_li"><a>杨先生</a><span>121321231133</span></li>
                        <li class="third_li">五金水电</li>
                    </ul>
                </div>
            </div>
            <div class="nav-content">
                <div class="caiwubu-header">
                    <ul>
                        <li class="first_li"><img src="../../../../../assets/images/package_logo_02.png"></li>
                        <li class="second_li"><a>杨先生</a><span>121321231133</span></li>
                        <li class="third_li">施工中</li>
                    </ul>
                </div>
                <div class="baoming">
                    <ul class="gckInformation">
                        <li>
                            <div class="information">
                                <img src="../../../../../assets/images/recommended_05.png">
                                <div class="mid">
                                    <div class="area">面积 :<span>121m²</span>预算 :<span>¥2132.00</span></div>
                                    <div>小区:<span>桂花花园</span></div>
                                    <div>户型:<span>B2</span>房号:<span>31栋22单元30室</span></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="caiwubu-people">
                    <ul>
                        <li>设计师:<span>小小风</span></li>
                        <li>业务员:<span>小小风</span></li>
                        <li>项目经理:<span>小小风</span></li>
                    </ul>
                </div>
                <router-link to="gongyingshang/details">
                    <div class="caiwubu-footer-one">
                        <span class="data">¥6000.00</span>
                        <router-link to="pay/fukuan">
                            <mt-button size="small">去付款</mt-button>
                        </router-link>
                    </div>
                </router-link>
            </div>
            <div class="nav-content">
                <div class="caiwubu-header">
                    <ul>
                        <li class="first_li"><img src="../../../../../assets/images/package_logo_02.png"></li>
                        <li class="second_li"><a>杨先生</a><span>121321231133</span></li>
                        <li class="third_li">五金水电</li>
                    </ul>
                </div>
                <div class="baoming">
                    <ul class="gckInformation">
                        <li>
                            <div class="information">
                                <img src="../../../../../assets/images/recommended_05.png">
                                <div class="mid">
                                    <div class="area">面积 :<span>121m²</span>预算 :<span>¥2132.00</span></div>
                                    <div>小区:<span>桂花花园</span></div>
                                    <div>户型:<span>B2</span>房号:<span>31栋22单元30室</span></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="caiwubu-people">
                    <ul>
                        <li>设计师:<span>小小风</span></li>
                        <li>业务员:<span>小小风</span></li>
                        <li>项目经理:<span>小小风</span></li>
                    </ul>
                </div>
                <div class="caiwubu-footer-one">
                    <span class="data">¥2000.00</span>
                    <router-link to="pay/fukuan">
                        <mt-button size="small">去付款</mt-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>