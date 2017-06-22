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
    .wrap .caiwubu-nav { display: inline-block;width: 100% }
    .nav-content .caiwubu-footer .mint-button--small{ margin-right:0; background-color: #ff9724 ;padding: 0 2% ;color: #ffffff;font-size: 0.6rem;width: 17%}
    .wrap .caiwubu-nav ul li { float: left; list-style: none; font-size: 0.6rem;padding: 4% 0;display: inline-block;width: 25%;text-align: center }
    .wrap .gckInformation .information .mid div span{ margin: 0 5% 10% 4%;}
    .caiwubu-footer-one{ border-top: 1px solid #cbcbcb;padding: 2% 1% }
    .caiwubu-footer-one span{ color: #ff7212; }
    .wrap .gckInformation .information .mid{ width: 50%;float: left }
    .wrap .baoming .right {float: left;line-height: 2.5rem;margin-left: 5%;color: #00a0e9 }
    .nav-content .caiwubu-footer-one .mint-button--small{ margin-right:0; background-color: #ff6130 ;padding: 0 2% ;color: #ffffff;font-size: 0.6rem;width: 17%;height: 25px}
    .nav-content .caiwubu-footer-one .data { margin-right:56%; }
</style>

<template>
    <div>
        <div class="caiwubu-nav">
            <ul>
                <li>全部</li>
                <li>未出账</li>
                <li>已出账待付</li>
                <li>已付</li>
            </ul>
        </div>
        <div class="all">
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
                                    <h4>光祥五金</h4>
                                    <div>起送:<span>¥20</span>| 配送:<span>¥5</span></div>
                                    <div>25km<span>30分钟</span></div>
                                </div>
                                <div class="right">
                                    <span>待出账</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <router-link to="gongyingshang/details">
                    <div class="caiwubu-footer-one">
                        <span class="data">¥6000.00</span>
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
                                    <h4>光祥五金</h4>
                                    <div>起送:<span>¥20</span>| 配送:<span>¥5</span></div>
                                    <div>25km<span>30分钟</span></div>
                                </div>
                                <div class="right">
                                    <span>待出账</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="caiwubu-footer-one">
                    <span class="data">¥2000.00</span>
                    <router-link to="gongyingshang/fukuan">
                        <mt-button size="small">去付款</mt-button>
                    </router-link>
                </div>
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
                                    <h4>光祥五金</h4>
                                    <div>起送:<span>¥20</span>| 配送:<span>¥5</span></div>
                                    <div>25km<span>30分钟</span></div>
                                </div>
                                <div class="right">
                                    <span>待出账</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="caiwubu-footer-one">
                    <span class="data">¥3000.00</span>
                    <router-link to="gongyingshang/fukuan">
                        <mt-button size="small">去付款</mt-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>