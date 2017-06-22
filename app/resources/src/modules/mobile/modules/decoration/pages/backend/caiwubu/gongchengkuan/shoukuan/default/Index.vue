<script type="text/babel">
    import { Button } from 'mint-ui';
    export default {
        components:{
            [Button.name]:Button
        }
    }
</script>

<style lang="scss">
    .total .mint-button--small{ margin-left: 65%;padding: 0 10px; }
    .deposit h4{ margin-left: 30% ;display: inline}
    .mint-button--large {width: 90%;margin: 1rem auto;background-color: #ff6940;color: #ffffff;font-size: 0.66rem;font-weight: 600;height: 35px;border-radius:6px}
    div a{ text-decoration: none }
</style>

<template>
    <div>
        <div class="finish">
            <a>收款:</a><span>5000.00</span>
        </div>
        <div class="total">
            <a>合同总价:</a>
            <mt-button size="small">设置</mt-button>
        </div>
        <div class="deposit">
            <a>定金:</a><span>¥5000.00</span><h4>2017-12-10</h4>
        </div>
        <router-link to="shoukuan/way">
            <mt-button size="large">设置收款方式</mt-button>
        </router-link>
    </div>
</template>