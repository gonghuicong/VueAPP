<script type="text/babel">
    import { Cell } from 'mint-ui';

    export default {
        components: {
            [Cell.name]: Cell
        },

    }
</script>
<style>
  .wrap{width: 100%;height: 100%;}
  .role-choice {background-color: #e2e2e2;margin: 0 auto;text-align: center;height: 40px;width: 100%;line-height: 36px}
</style>

<template>
    <div class="wrap">
      <div class="role-choice">角色选择</div>
      <mt-cell title="客服" is-link to="m/decoration/backend/kefu"></mt-cell>
      <mt-cell title="设计部管理" is-link to="m/decoration/backend/designer"></mt-cell>
      <mt-cell title="设计师" is-link to="m/decoration/backend/stylist"></mt-cell>
      <mt-cell title="项目经理" is-link to="m/decoration/backend/project"></mt-cell>
      <mt-cell title="工程经理" is-link to="m/decoration/backend/manager"></mt-cell>
      <mt-cell title="财务部" is-link to="m/decoration/backend/caiwubu"></mt-cell>
    </div>
</template>
