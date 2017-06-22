<script type="text/babel">
    import { Button } from 'mint-ui';
    export default {
        components:{
            [Button.name]:Button
        }
    }
</script>

<style lang="scss">
    .mint-button--small{ font-size: 0.6rem }
    .money{ margin-top: 0.5rem }
    .finish .business{ margin-left:11%;background-color: #ff7212;color: #ffffff;border: none;padding: 0 10px }
    .gray { background-color: gray;color: #ffffff;margin-left: 22% }
    .wait .six{ margin-left: 26% }
    .wait .four{ margin-left: 22%;background-color: gray;color: #ffffff;border: none }
    .wait .five{ margin-left: 22%;background-color: #ff7212;color: #ffffff;border: none }
</style>

<template>
    <div>
        <div class="finish">
            <a>收款:</a><span>¥5000.00</span>
        </div>
        <div class="total">
            <a>合同总价:</a><span>¥56000</span>
        </div>
            <mt-button size="small" class="money">线下收款</mt-button>
        <div class="finish">
            <a>定金:</a><span>¥5000.00</span>
        </div>
        <div class="finish">
            <a>第一期款:</a><span>¥5000.00</span>
            <router-link to="add/tocollect">
                <mt-button size="small" class="business">去收款</mt-button>
            </router-link>
        </div>
        <div class="finish">
            <a>第二期款:</a><span>¥5000.00</span>
            <router-link to="add/tocollect">
                <mt-button size="small" class="business">去收款</mt-button>
            </router-link>
        </div>
        <div class="finish">
            <a>第三期款:</a><span>¥5000.00</span>
            <router-link to="add/tocollect">
                <mt-button size="small" class="business">去收款</mt-button>
            </router-link>
        </div>
        <mt-button size="small" class="money">线下保证金</mt-button>
        <div class="wait">
            <a>线上收质保金:</a><span>¥5000.00</span>
            <mt-button size="small" class="gray four">待客户付款</mt-button>
        </div>
        <div class="wait">
            <a>线上收质保金:</a><span>¥5000.00</span>
            <mt-button size="small" class="five">客户已付款</mt-button>
        </div>
        <div class="wait">
            <a>线上收全款:</a><span>¥5000.00</span>
            <mt-button size="small" class="gray six">待付款</mt-button>
        </div>
    </div>
</template>