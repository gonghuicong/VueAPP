<script type="text/babel">
    import { Cell,Button } from 'mint-ui';
    export default {
        components:{
            [Cell .name]:Cell,
            [Button .name]:Button,
        },
        data(){
            return{
                Show: true
            }
        },
        methods:{
            fn:function () {
                if(this.Show == true){
                    this.Show = false;

                }else {
                    this.Show = true
                }
            }

        }
    }
</script>

<style lang="scss">
    .mint-button--small{ font-size: 0.3rem;  height: 20px;  text-align: center;  padding: 0.1rem 0.4rem 0.1rem 0.4rem;margin:0 2rem 0 1rem;background-color: #ffffff;color: #ff7212 }

</style>

<template>
    <div class="effect">
        <ul class="nav">
            <li>开工</li>
            <li>杂瓦</li>
            <li>水电</li>
            <li>泥工</li>
            <li>木工</li>
            <li class="big">油漆刮瓷</li>
            <li>安装</li>
        </ul>
        <div class="data-plan">
            <div class="click" @click="fn()">
                <mt-cell title="2016-10-12" is-link>
                    <span>防水验收</span>
                    <mt-button size="small">待验收</mt-button>
                </mt-cell>
            </div>
            <div v-if="Show"></div>
            <div class="plan" v-else>
                <p>施工内容:.......</p>
                <ul>
                    <li><img src="1"></li>
                    <li><img src="2"></li>
                    <li><img src="3"></li>
                </ul>
            </div>
        </div>
    </div>
</template>