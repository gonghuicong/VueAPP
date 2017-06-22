<script type="text/babel">
    import { Button,Badge,Cell } from 'mint-ui';
    export default{
        components:{
            [Button.name]:Button,
            [Badge.name]:Badge,
            [Cell.name]: Cell
        },
        data(){
            return{
                Show: true
            }
        },
        methods:{
            fn:function () {
                if(this.Show == true){
                    this.Show = false
                }else {
                    this.Show = true
                }
            },
            handleBack(){
                this.$router.back();
            }

        }
    }
</script>

<style lang="scss">
    .mint-button--small{ font-size: 0.5rem;color: #00a0e9;padding: 0 0.3rem 0 0.3rem; }
    .information .right a{text-decoration: none}
    .data-plan .click{ opacity: 0.7}
    .information .designer{ margin-top: 0.3rem;float: left;margin-left: 4% }
    .data-plan .plan{ padding: 0 0.5rem }
    .data-plan .plan button{padding: 1.5%;background-color: #ffffff}
    .data-plan .plan p{padding: 2% 1%;font-size: 0.7rem;opacity: 0.7 }
    .data-plan .plan ul li{ float: left;width: 30%;list-style: none;text-align: center;margin-left: 3% }
    .data-plan .plan input{ width: 80%;height: 1.2rem; }

</style>

<template>
    <div class="baoming">
        <ul class="keHuInformation">
            <li>
                <div class="information">
                    <img src="../../../../../../../assets/images/recommended_05.png">
                    <div class="mid">
                        <div class="people">黄先生<span>150101510150</span></div>
                        <div>户型:A4<span>小区:桂花苑花园</span></div>
                        <div>楼号:3栋2单元1503<span></span></div>
                            <mt-button size="small" @click="handleBack">查看方案</mt-button>
                    </div>
                    <div class="right">
                            <div class="data">2016.02.03</div>
                    </div>
                    <div class="designer">
                        <mt-button size="small">设计师</mt-button>
                        <mt-button size="small">业务</mt-button>
                    </div>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="data-plan">
                    <div class="click" @click="fn()">
                        <mt-cell title="2016-10-12" is-link></mt-cell>
                    </div>
                    <div v-if="Show"></div>
                    <div class="plan" v-else>
                        <p>第一次约见,看平面方案,给客户找了些原因</p>
                        <ul>
                            <li><img src="1"></li>
                            <li><img src="2"></li>
                            <li><img src="3"></li>
                        </ul>
                        <input type="text" placeholder="输入阅读后的建议;">
                        <button>回复</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>