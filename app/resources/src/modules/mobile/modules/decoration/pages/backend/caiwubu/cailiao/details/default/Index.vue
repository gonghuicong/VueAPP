<script type="text/babel">
    import { Cell } from 'mint-ui';
    export default{
        components:{
            [Cell.name]:Cell
        }
    }
</script>

<style lang="scss">
    .mint-cell-value span { margin-right: 0.5rem }
</style>

<template>
    <div class="details">
        <router-link to="details/copy">
            <mt-cell title="2016-10-1" is-link>
                <span>¥50.00</span>
                <span style="color:#ff7212">待付款</span>
            </mt-cell>
        </router-link>
        <mt-cell title="2016-10-1" is-link>
            <span>¥50.00</span>
            <span style="color:#ff7212">待付款</span>
        </mt-cell>
        <mt-cell title="2016-10-1" is-link>
            <span>¥50.00</span>
            <span style="color:gray">已付款</span>
        </mt-cell>
    </div>
</template>