<script type="text/babel">
    import { Button } from 'mint-ui';
    export default{
        components:{
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
     .money ul li{margin-top: 0.5rem}
     .money{ padding: 4% ;opacity: 0.9;font-size: 0.64rem}
     .money ul li .proof span{ margin-left: 80%}
    .mint-button--large {width: 90%;margin: 0 auto;background-color: #ff6940;color: #ffffff;font-size: 0.7rem;font-weight: 600;height: 35px;border-radius:6px}
</style>

<template>
    <div>
        <div class="money">
            <ul>
                <li><div class="proof">凭证:<span>+</span></div></li>
            </ul>
        </div>
        <mt-button size="large">提交</mt-button>
    </div>
</template>