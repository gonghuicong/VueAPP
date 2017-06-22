<script type="text/babel">
    import { Button } from 'mint-ui';
    export default {
        components:{
            [Button.name]:Button
        }
    }
</script>

<style lang="scss">
    .project { background-color: #dfe0df  }
    .project .card { display:inline-block;width: 100%;margin-top:3px;background-color: #ffffff  }
    .project .card header { font-size: 0.66rem;opacity: 0.7;padding: 10px 10px; }
    .project .card header .tel span { float: left; }
    .project .card header .tel a { float: right }
    .project .information { margin-top: 0.2rem;padding: 10px 10px;display: inline-block }
    .project .information .img { display: inline-block;float: left;width: 30% }
    .project .information .img img { width: 100%;border-radius: 12px }
    .project .information .building { float: left;width: 60%;margin-left: 4%;padding: 0 6px }
    .project .information .building ul li{ line-height: 180%;opacity: 0.8 }
    .project .information .building ul li strong{ font-size: 0.7rem;text-align: center }
    .project .information .building ul li span{ font-size: 0.6rem;margin-right: 0.5rem }
    .project .information .building ul .data { font-size: 0.6rem }
    .project .information .building ul .data span { color: #ff4819  }
    .project .information .building .mint-button--small{ margin-right:3%;font-size: 0.6rem }
    .project .information .building .agree{ background-color: #ff7212;color: #ffffff }
</style>

<template>
    <div class="project">
        <div class="card">
            <header>
                <div class="tel">
                    <span>黄先生 1210321302193</span>
                    <a>2016-10-10</a>
                </div>
            </header>
            <div class="information">
                <router-link to="customer/chakanfangan">
                    <div class="img">
                        <img src="../../../../../assets/images/recommended_05.png">
                    </div>
                </router-link>
                <div class="building">
                    <ul>
                        <li><strong>桂花苑三栋120房</strong></li>
                        <li><span>2500.00m²</span><span>23213.0元</span></li>
                        <li class="data">开工倒计时: <span>123天10时30分</span></li>
                    </ul>
                    <router-link to="daikaigong/purchase">
                        <mt-button size="small" class="agree">材料申购</mt-button>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>