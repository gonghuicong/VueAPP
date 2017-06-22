<script type="text/babel">
    import { Cell } from 'mint-ui';

    export default {
        components: {
            [Cell.name]: Cell
        },
    }
</script>

<style lang="scss">
    .wrap-align .name{ text-align: center;margin-bottom: 0.5rem }
</style>

<template>
    <div class="wrap">
        <div class="wrap-align mb20">
            <div class="keFu-img"><img src="../../../../assets/images/recommended_05.png"></div>
            <div class="name">小小风</div>
        </div>
        <div class="cell">
            <router-link to="my/personalData">
                <mt-cell title="个人资料" is-link>
                    <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
                </mt-cell>
            </router-link>
            <router-link to="my/company">
                <mt-cell title="我的公司" is-link>
                    <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
                </mt-cell>
            </router-link>
            <mt-cell title="邀请好友" is-link>
                <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
            </mt-cell>
            <mt-cell title="钱包" is-link>
                <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
            </mt-cell>
            <mt-cell title="我的地址" is-link>
                <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
            </mt-cell>
            <mt-cell title="个人认证" is-link>
                <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
            </mt-cell>
            <mt-cell title="我的订单" is-link>
                <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
            </mt-cell>
            <mt-cell title="修改密码" is-link>
                <img slot="icon" src="../../../../assets/images/package_logo_02.png" width="35" height="35">
            </mt-cell>
        </div>

    </div>
</template>