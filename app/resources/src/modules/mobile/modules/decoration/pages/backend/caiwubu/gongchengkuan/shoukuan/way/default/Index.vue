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
        }
    }
</script>

<style lang="scss">
    .nav { margin-top: 0.5rem; padding-left: 2% }
    .nav span{ font-size:0.7rem;margin-right: 0.5rem;text-align: center }
    .mint-button--small {font-size: 12px;padding: 0 4px;margin-left: 0.3rem}
    .mint-tab-container-item div input { padding: 5px;border-radius: 2px;border: 1px solid #a8a8a8 ;margin:0.5rem 0 0 0.8rem }
    .page-tab-container .mint-tab-container-item{ padding-left:2% }
    .mint-button--large {width: 90%;margin: 1rem auto;background-color: #ff6940;color: #ffffff;font-size: 0.66rem;font-weight: 600;height: 35px;border-radius:6px}
    div a{ text-decoration: none }
</style>

<template>
    <div>
        <div class="finish">
            <a>收款:</a><span>5000.00</span>
        </div>
        <div class="total">
            <a>合同总价:</a><span>560000</span>
        </div>
        <div class="nav">
            <span>收款方式:</span>
            <mt-button size="small" @click.native.prevent="active = 'tab-container1'">线下收款</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container2'">线上收质保金</mt-button>
            <mt-button size="small" @click.native.prevent="active = 'tab-container3'">线上收全款</mt-button>
        </div>
        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                <mt-tab-container-item id="tab-container1">
                    <div>
                        <span>收款名称:</span><input type="text" placeholder="第一期款">
                    </div>
                    <div>
                        <span>收款数额:</span><input type="text" placeholder="¥30000.00">
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <div>
                        <span>收款名称:</span><input type="text" placeholder="质保金">
                    </div>
                    <div>
                        <span>收款数额:</span><input type="text" placeholder="¥50000.00">
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                    <div>
                        <span>收款名称:</span><input type="text" placeholder="合同全款">
                    </div>
                    <div>
                        <span>收款数额:</span><input type="text" placeholder="¥80000.00">
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <router-link to="way/add">
            <mt-button size="large">添加</mt-button>
        </router-link>
    </div>
</template>