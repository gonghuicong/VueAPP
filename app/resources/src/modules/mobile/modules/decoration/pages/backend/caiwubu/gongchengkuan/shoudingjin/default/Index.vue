<script type="text/babel">
    import { Navbar, TabItem,TabContainerItem,TabContainer,Cell,Button } from 'mint-ui';
    export default{
        components:{
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
    .nav span{ text-align: left }
    .mint-button--small{ background-color: #ffffff }
    .mint-field-core{ width: 20% }
    .mint-tab-container-item .money{ padding: 4% ;opacity: 0.9;font-size: 0.64rem}
    .mint-tab-container-item .money input{ padding: 5px;border:1px solid #a8a8a8;border-radius:3px;width: 18%;margin-left: 4% }
    .mint-tab-container-item .money .type span{ margin-left:4% }
    .mint-tab-container-item .money ul li{margin-top: 0.5rem}
    .mint-tab-container-item .money ul li .proof span{ margin-left: 80%}
    .mint-button--large {width: 90%;margin: 0 auto;background-color: #ff6940;color: #ffffff;font-size: 0.7rem;font-weight: 600;height: 35px;border-radius:6px}

</style>

<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">线下收款</mt-tab-item>
            <mt-tab-item id="2">线上收款</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="money">
                    <ul>
                        <li><div class="collect">收款额:<input type="text" placeholder="5000.00"></div></li>
                        <li><div class="type">收款类型:<span>定金</span></div></li>
                        <li><div class="proof">凭证:<span>+</span></div></li>
                    </ul>
                </div>
                <mt-button size="large">提交</mt-button>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="money">
                    <ul>
                        <li><div class="collect">收款额:<input type="text" placeholder="5000.00"></div></li>
                        <li><div class="type">收款类型:<span>定金</span></div></li>
                        <li><div class="proof">凭证:</div></li>
                    </ul>
                </div>
                <mt-button size="large">提交</mt-button>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>

</template>