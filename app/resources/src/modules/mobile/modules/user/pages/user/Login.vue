<script type="text/babel">
    import { Field, Button } from 'mint-ui';
    import { mapState, mapActions } from 'vuex';
    import { USER_LOGIN } from '../../../../store';

    export default {
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
        },
        data() {
            return {
                postData: {
                    username: null,
                    password: null,
                    client: 'wap'
                }
            }
        },
        computed: mapState([
            'api',
            'key',
        ]),
        methods: {
            ...mapActions({
                'login': USER_LOGIN
            }),
            handleLogin () {
                let that = this;
                this.login(this.postData)
                    .then(() => {
                        that.$router.push('/my');
                    });
            },
            handleRegister () {
                this.$router.push('/u/register');
            },
        },
        watch: {
            key() {
                if (this.key) {
                    this.$router.push('/');
                }
            }
        }

    };
</script>

<style>
</style>
<template>
    <div id="login">
        <div class="tc pt50 mb30" >
            <router-link to="/"><img src="../../../../../../assets/images/logo.png"></router-link>
        </div>
        <div class="mb30">
            <mt-field label="账户" placeholder="请输入手机号/用户名" v-model="postData.username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="postData.password"></mt-field>
        </div>
        <div class="ml15 mr15">
            <div class="mb20 tr">
                <router-link to="/u/password-reset">忘记密码?</router-link>
            </div>
            <mt-button size="large" type="primary" class="mb10" :disabled="!(postData.username && postData.password)" @click="handleLogin">登 录</mt-button>
            <mt-button @click="handleRegister" size="large" type="primary" plain>注 册</mt-button>
        </div>
    </div>
</template>