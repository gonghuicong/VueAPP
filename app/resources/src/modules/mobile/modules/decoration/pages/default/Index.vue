<script type="text/babel">
    import { Cell } from 'mint-ui';

    export default {
        components: {
            [Cell.name]: Cell
        },
    }
</script>

<style>
  @import "../../assets/sass/default.scss";
</style>

<template>
  <div class="wrap">
    <div class="role-choice">选择需求</div>
    <mt-cell title="后台管理" is-link to="m/decoration/backend"></mt-cell>
    <mt-cell title="用户中心" is-link to="m/decoration/frontend"></mt-cell>
  </div>
</template>
