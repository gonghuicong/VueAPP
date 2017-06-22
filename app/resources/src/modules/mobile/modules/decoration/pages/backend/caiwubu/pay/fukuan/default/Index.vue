<script type="text/babel">
    import { Button,TabContainer,TabContainerItem } from 'mint-ui';
    export default{
        components:{
            [Button.name]:Button,
            [TabContainer.name]:TabContainer,
            [TabContainerItem.name]:TabContainerItem
        },
        data(){
            return {
                active:false
            }
        },
    }
</script>

<style lang="scss">
    .nav { margin-top: 0.5rem; padding-left: 2% }
    .nav span{ font-size:0.7rem;margin-right: 0.5rem;text-align: center }
    .mint-button--small {font-size: 12px;padding: 0 4px;margin-left: 0.3rem}
    .mint-tab-container-item div input { padding: 5px;border-radius: 2px;border: 1px solid #a8a8a8 ;margin:0.5rem 0 0 0.8rem }
    .mint-button--large {width: 90%;margin: 1rem auto;background-color: #ff6940;color: #ffffff;font-size: 0.66rem;font-weight: 600;height: 35px;border-radius:6px}
    div a{ text-decoration: none }
    .mint-tab-container-item{ margin: 0 auto }
    .mint-tab-container-item div{ margin: 2% 2%; }
    .mint-tab-container-item div input{width: 20%}
    .mint-tab-container-item div a{ font-size: 0.57rem;color: #00a0e9 }
    .proof span{ margin-left: 80%}
    .proof .img img{ height: 10rem;width: 98% }
</style>

<template>
    <div>
        <div class="nav">
            <span>付款方式:</span>
            <mt-button size="small" @click.native.prevent="active = 'tab-container1'">线下付款</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container2'">线上付款</mt-button>
        </div>
        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                <mt-tab-container-item id="tab-container1">
                    <div>
                        <span>付款额:</span><input type="text" placeholder="3000.00"><a>说明:付款额不一定是全额支付</a>
                    </div>
                    <div>
                        <span>付款类型:采购贷款</span>
                    </div>
                    <div>
                        <span>付款日期 : 2017-10-10</span>
                    </div>
                    <div class="proof">
                        凭证:
                        <span>+</span>
                        <div class="img">
                            <img src="12">
                        </div>
                    </div>
                    <mt-button size="large">确认</mt-button>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <div>
                        <span>收款名称:</span><input type="text" placeholder="3000.00">
                    </div>
                    <div>
                        <span>付款类型:货物采购</span>
                    </div>
                    <mt-button size="large">去支付</mt-button>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>