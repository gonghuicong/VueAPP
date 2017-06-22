<script type="text/babel">
    import { Button } from 'mint-ui';
    export default {
        components:{
            [Button.name]:Button
        }
    }
</script>

<style lang="scss">
    .customer .keHuInformation .information .mid { width: 75% }
    .customer .keHuInformation .information .mid .people ul li { float: left;width: 30%;line-height: 1rem;color: #ff7212 }
    .baoming .keHuInformation{ display: inline-block;background-color: #ededed ;color: #000;width: 100%;}
    .customer .keHuInformation li{ float: left;font-size: 0.65rem;background-color: #ffffff;color: #000;border-bottom: 1px solid #b4b4b4  }
    .customer .keHuInformation li .information img{ width: 18%;border-radius: 8px;float: left;margin-top: 3% }
    .customer .keHuInformation .information .mid div{ line-height: 150%;opacity: 0.7;font-size: 0.55rem;margin-top: 2%; }
    .customer .keHuInformation .information .mid .name{ margin-left: 2% }
    .customer .keHuInformation .information .mid div span{ margin: 0 10% 0 10%;}
    .customer .keHuInformation .information .mid .people{ color: #ff7212; }
    .customer .keHuInformation .information .mid .mint-button--small{ text-align: center;background-color: #ff7212;color: white;float: right;font-size: 13px;height: 24px }
    .customer .keHuInformation .information .right{ float: left;width: 28%;text-align: center }
</style>

<template>
    <div class="customer">
        <ul class="keHuInformation">
            <li>
                <div class="information">
                    <img src="../../../../../../assets/images/recommended_05.png">
                    <div class="mid">
                        <div class="name">李建喜<span>从业八年</span>星级:</div>
                        <div class="people">
                            <ul>
                                <li>待开工<span>2</span></li>
                                <li>施工中<span>2</span></li>
                                <li>延期工程<span>2</span></li>
                            </ul>
                        </div>
                        <mt-button size="small">选择</mt-button>
                    </div>
                </div>
            </li>
            <li>
                <div class="information">
                    <img src="../../../../../../assets/images/recommended_05.png">
                    <div class="mid">
                        <div class="name">李建喜<span>从业八年</span>星级:</div>
                        <div class="people">
                            <ul>
                                <li>待开工<span>2</span></li>
                                <li>施工中<span>2</span></li>
                                <li>延期工程<span>2</span></li>
                            </ul>
                        </div>
                        <mt-button size="small">选择</mt-button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>