<script type="text/babel">
    import { Field , Button, Cell, Toast } from 'mint-ui';
    import { mapState, mapActions } from 'vuex';
    import { ADD_USER } from '../store';

    export default{
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
            [Cell.name]: Cell,
            [Toast.name]: Toast
        },
        props: ['store_id'],
        data() {
            return {
                form: {
                    username: '',
                    mobile: '',
                    address: ''
                }
            }
        },
        methods: {
            ...mapActions({
                addUser: ADD_USER
            }),
            submit () {
                if (this.form.username == '') {
                    return Toast({
                        message: '请求输入您的姓名',
                        position: 'bottom',
                        duration: 3000
                    })
                }
                if (this.form.mobile == '') {
                    return Toast({
                        message: '请求输入您的联系电话',
                        position: 'bottom',
                        duration: 3000
                    })
                }
                if (this.form.address == '') {
                    return Toast({
                        message: '请求输入您的地址',
                        position: 'bottom',
                        duration: 3000
                    })
                }
                this.addUser({
                    data: {
                        store_id: this.store_id,
                        username: this.form.username,
                        mobile: this.form.mobile,
                        address: this.form.address
                    }
                })
            }
        }
    }
</script>

<style scope>

</style>

<template>
    <div id="appointment">
        <mt-cell title="请输入用户信息" style="font-weight: bold;"></mt-cell>
        <div class="mb20">
            <mt-field label="用户名称" placeholder="请输入用户真实姓名" v-model="form.username"></mt-field>
            <mt-field label="联系电话" placeholder="请输入用户联系电话" v-model="form.mobile"></mt-field>
            <mt-field label="用户地址" placeholder="请输入用户地址" v-model="form.address"></mt-field>
        </div>
        <div class="pl10 pr10">
            <mt-button type="primary" size="large" plain @click="submit">立即预约</mt-button>
        </div>
    </div>
</template>