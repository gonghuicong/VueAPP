<script type="text/babel">
    import { Cell } from 'mint-ui';

    export default {
        components: {
            [Cell.name]: Cell
        },

    }
</script>

<style lang="scss">

</style>

<template>
    <div class="wrap">
        <mt-cell title="头像" is-link>
            <span></span>
        </mt-cell>
        <mt-cell title="用户名" is-link>
            <span>龚大大</span>
        </mt-cell>
        <mt-cell title="手机号" is-link>
            <span>110000</span>

        </mt-cell>
        <mt-cell title="性别" is-link>
            <span>男</span>
        </mt-cell>
        <mt-cell title="邮箱" is-link>com
            <span>975843167@11.com</span>
        </mt-cell>

    </div>
</template>