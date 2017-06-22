<script type="text/babel">
    import { Cell } from 'mint-ui';
    export default{
        components:{
            [Cell.name]:Cell
        }
    }
</script>

<style lang="scss">

</style>

<template>
    <div>
        <router-link to="details/copy">
            <mt-cell title="2016-10-1" value="¥3000.00" is-link></mt-cell>
        </router-link>
        <mt-cell title="2016-10-1" value="¥3000.00" is-link></mt-cell>
    </div>
</template>