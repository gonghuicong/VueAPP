<script type="text/babel">
    import { Header, Tabbar,  TabItem, Button, Badge, Actionsheet } from 'mint-ui';

    export default{
        components: {
            [Header.name]:Header,
            [Tabbar.name]: Tabbar,
            [TabItem.name]: TabItem,
            [Button.name]: Button,
            [Badge.name]: Badge,
            [Actionsheet.name]: Actionsheet
        },
        data () {
            return {
                selected: false
            };
        },
        methods: {
            handleBack() {
                this.$router.back();
            },
        }
    }
</script>

<style lang="scss">

</style>

<template>
    <div class="wrap">
        <mt-header title="个人中心">
            <mt-button icon="back" @click="handleBack" slot="left">返回</mt-button>
        </mt-header>
        <router-view></router-view>
        <mt-tabbar v-model="selected" fixed class="footer-tab">
            <mt-tab-item id="/m/decoration/backend">
                <i slot="icon" class="fa fa-home"></i>
                首页
            </mt-tab-item>
            <mt-tab-item id="/m/decoration/backend/kefu">
                <i slot="icon" class="fa fa-bandcamp"></i>
                工作
            </mt-tab-item>
            <mt-tab-item id="/m/decoration/backend/my">
                <i slot="icon" class="fa fa-user-circle-o"></i>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
