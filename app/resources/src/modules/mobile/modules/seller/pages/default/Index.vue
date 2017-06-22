<script type="text/babel">
    import { Header, Button, Popup, Search } from 'mint-ui';

    export default {
        components: {
            [Header.name]: Header,
            [Button.name]: Button,
            [Popup.name]: Popup,
            [Search.name]: Search,
        },
        data() {
            return {
                popupVisible: false
            }
        },
        methods: {
            handleSpec () {
                this.$router.push('/m/seller/package/spec');
            }
        }
    }
</script>

<style scoped>
    .header { width: 100%; position: fixed; top: 0; left: 0; right: 0; z-index: 3000; background-color: #fafafa; }
    .header .mint-header { height: 50px!important; border-bottom: 1px solid #bfbfbf; background: transparent!important; }
    .header .mint-header .mint-header-button { -webkit-box-flex: .2!important; -ms-flex: .2!important; flex: .2!important; }
    .header .mint-header .is-left i { color: #45cfad; font-size: 1.5em; }
    .header .mint-header .is-right i { color: #ec5566; font-size: 1.5em; }
    .header .page-search { margin: 0 auto; height: 30px; flex: 1; }
    .header .page-search .mint-search { height: 100%!important; }
    .header .page-search .mint-searchbar { padding: 0!important; border-radius: 15px; background-color: #ebecee!important; }
    .header .page-search .mint-searchbar .mint-searchbar-inner { height: 30px!important; background-color: transparent!important; }
    .header .page-search .mint-searchbar .mint-searchbar-inner input { background-color: transparent; }
    .header .page-search .mint-searchbar .mint-searchbar-cancel { margin-right: 10px; margin-left: 0!important; }
    .header .navbar { display: -webkit-box; display: -ms-flexbox; display: flex; text-align: center; border-bottom: 1px solid #ececec; }
    .header .navbar .tab-item { display: block; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; padding: 10px 0; font-size: 14px; color: #666; }
    .popup { width: 100%; top: 87px!important; min-height: 70vh; z-index: 10; }
    .popup li { height: 40px; line-height: 40px; border-bottom: 1px solid #ececec; padding: 0 15px; font-size: 14px; }
    .popup li.active { color: #ff6700; }
    .main { margin-top: 87px; }
    .goods-item { display: -webkit-box; display: -ms-flexbox; display: flex; padding: 10px 0; border-bottom: 1px solid #ececec; }
    .goods-item .item-left { width: 70px; height: 70px; background-color: #00C1B3; margin-right: 10px; }
    .goods-item .item-right { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; font-size: 12px; }
    .goods-item .item-right .goods-name { height: 20px; line-height: 20px; white-space: normal; text-overflow: ellipsis; }
    .goods-item .item-right .goods-price { height: 20px; line-height: 20px; color: #ff6700; }
    .goods-item .item-right .mint-button { height: 26px; margin-top: 4px; border-color: #ff6700!important; font-size: 12px; }
</style>

<template>
    <div>
        <header class="header">
            <div class="mint-header">
                <div class="mint-header-button is-left">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                </div>
                <div class="page-search">
                    <mt-search v-model="value" placeholder="搜索"></mt-search>
                </div>
                <div class="mint-header-button is-right">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
            </div>
            <div class="navbar">
                <a class="tab-item" @click="popupVisible = !popupVisible">全部 <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <a class="tab-item" @click="popupVisible = !popupVisible">种类 <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <a class="tab-item" @click="popupVisible = !popupVisible">规格 <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <a class="tab-item" @click="popupVisible = !popupVisible">小类 <i class="fa fa-caret-down" aria-hidden="true"></i></a>
            </div>
        </header>
        <mt-popup v-model="popupVisible" position="top" class="popup">
            <ul>
                <li class="active">墙地面类</li>
                <li>厨房类</li>
                <li>门窗类</li>
                <li>洁具卫浴</li>
                <li>吊顶类</li>
                <li>衣柜类</li>
                <li>装饰辅料</li>
                <li>照明类</li>
                <li>家用电器</li>
            </ul>
        </mt-popup>
        <div class="container main">
            <div class="goods-item" v-for="n in 10" @click="handleSpec">
                <div class="item-left"></div>
                <div class="item-right">
                    <div class="goods-name">新中源</div>
                    <div class="goods-price">优居价：￥12.80</div>
                    <mt-button plain>商品详情</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
