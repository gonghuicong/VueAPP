<script type="text/babel">
    import { Field,Button } from 'mint-ui'
    export default{
        components:{
            [Field.name]:Field,
            [Button.name]:Button
        }
    }
</script>

<style lang="scss">
    .baoming .kehuneed .need{ padding: 0 0.5rem;opacity: 0.7;color: #ff7212;font-size: 0.65rem}
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
                            <mt-button size="small" class="business">业务</mt-button>
                        </div>
                    </div>
            </li>
        </ul>
        <div class="kehuneed">
            <div class="need">客户要求:</div>
            <mt-field type="textarea" rows="4"></mt-field>
        </div>
    </div>
</template>