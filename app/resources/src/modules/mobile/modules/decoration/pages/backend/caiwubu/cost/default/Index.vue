<script type="text/babel">
    import { Field,Cell } from 'mint-ui';
    export default {
        components:{
            [Field.name]:Field,
            [Cell.name]:Cell
        }
    }
</script>

<style lang="scss">
    .mint-cell-title span{  color: #000 }
</style>

<template>
    <div class="cost">
        <mt-field label="选择日期" placeholder="请输入生日" type="date"></mt-field>
        <router-link to="cost/copy">
            <mt-cell title="2016-10-1" is-link>
                <span style="color:#ff7212">¥50.00</span>
            </mt-cell>
        </router-link>
        <mt-cell title="2016-10-1" is-link>
            <span style="color:#ff7212">¥50.00</span>
        </mt-cell>
    </div>

</template>