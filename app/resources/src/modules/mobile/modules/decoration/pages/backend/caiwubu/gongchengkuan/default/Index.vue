<script type="text/babel">
    import qianzaikehu from '../../../../../components/qianzaikehu/default.vue';
    import dingjinkehu from '../../../../../components/dingjinkehu/default.vue';
    import shigongzhong from '../../../../../components/shigongzhong/default.vue';
    import { Cell,Button } from 'mint-ui';
    export default{
        data(){
            return{
                currentView:'qianzaikehu',
            }
        },
        components:{
            [Cell.name]:Cell,
            [Button.name]:Button,
            qianzaikehu,
            shigongzhong,
            dingjinkehu
        },

        methods:{
            tab:function (tabText) {
                this.currentView = tabText
            }
        }
    }
</script>

<style lang="scss">
    .wrap .wrap .caiwubu-nav ul li { float: left; list-style: none; font-size: 0.6rem;padding: 4% 0;display: inline-block;width: 33% }
    .nav-content .caiwubu-footer .mint-button--small{ margin-right:0; background-color: #ff9724 ;padding: 0 2% ;color: #ffffff;font-size: 0.6rem;width: 17%}
</style>

<template>
    <div class="wrap">
        <div class="caiwubu-nav">
            <ul>
                <li @click="tab('qianzaikehu')">潜在客户</li>
                <li @click="tab('dingjinkehu')">定金客户</li>
                <li @click="tab('shigongzhong')">施工中</li>
            </ul>
        </div>
        <div class="all">
            <component :is='currentView'></component>
        </div>
    </div>
</template>