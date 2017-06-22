<script type="text/babel">
    import { Cell } from 'mint-ui';
    export default {
        components:{
            [Cell.name]:Cell
        }
    }
</script>

<style lang="scss">

</style>

<template>
    <div class="purchase">
        <mt-cell
                title="历史申购清单"
                to="purchase/history"
                is-link
                value="带链接">
        </mt-cell>
    </div>
</template>