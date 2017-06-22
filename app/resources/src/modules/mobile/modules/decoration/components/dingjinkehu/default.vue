<script type="text/babel">
    import { Button } from 'mint-ui'
    export default {
        components: {
            [Button.name]:Button
     }
    }
</script>

<style lang="scss">

</style>

<template>
    <div class="nav-content nav12">
        <div class="caiwubu-header">
            <ul>
                <li class="first_li"><img src="../../assets/images/package_logo_02.png"></li>
                <li class="second_li"><a>杨先生</a><span>2133123</span></li>
                <li class="third_li">定金客户</li>
            </ul>
        </div>
        <div class="baoming">
            <ul class="gckInformation">
                <li>
                    <div class="information">
                        <img src="../../assets/images/recommended_05.png">
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
        <div class="caiwubu-footer">
            <span class="data">2017-12-10</span>
            <router-link to="gongchengkuan/shoukuan">
                <mt-button size="small">收款</mt-button>
            </router-link>
        </div>
    </div>
</template>