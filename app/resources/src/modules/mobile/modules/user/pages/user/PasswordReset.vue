<script type="text/babel">
    import { Toast, Field, Button } from 'mint-ui';
    import Captcha from '../../../../../../components/Captcha.vue';
    import { USER_SMS_PASSWORD_RESET, SMS_TYPE_RESET } from '../../../../store';
    import SendSms from '../../../../../../components/SendSms.vue';
    import { mapActions } from 'vuex';

    export default {
        components: {
            Captcha,
            SendSms,
            [Field.name]: Field,
            [Button.name]: Button
        },
        data() {
            return {
                postData: {
                    phone: '',
                    captcha: '',
                    smsCaptcha: ''
                },
                smsVisible: false,
                smsType: SMS_TYPE_RESET,
                updateCaptcha: 0
            }
        },
        methods: {
            ...mapActions({
                passwordReset: USER_SMS_PASSWORD_RESET
            }),
            handleLogin () {
                this.$router.push('/u/login');
            },
            handlePasswordReset () {
                let that = this;
                if (!this.postData.smsCaptcha) { // 发送短信
                    this.smsVisible = true;
                } else {
                    this.passwordReset({
                        phone: this.postData.phone,
                        captcha: this.postData.smsCaptcha,
                        password: this.postData.password,
                        client:'wap'
                    }).then(() => {
                        Toast('密码重置成功!');
                        setTimeout(() => {
                            that.$router.push('/my');
                        }, 3000);
                    }).catch(this.handleSMSError); // 注册失败刷新验证码重来
                }
            },
            handleSMSCaptcha (smsCaptcha) {
                this.postData.smsCaptcha = smsCaptcha;
                Toast('短信验证成功, 请设置密码完成最后注册.');
            },
            handleSMSError () {
                this.updateCaptcha++;
            },
        }
    };
</script>

<style>
</style>

<template>
    <div id="passwordReset">
        <div class="tc pt50 mb30">
            <router-link to="/"><img src="../../../../../../assets/images/logo.png"></router-link>
        </div>
        <div class="mb30">
            <mt-field label="手 机 号" placeholder="请输入手机号" v-model="postData.phone"></mt-field>
            <mt-field label="验 证 码" placeholder="请输入验证码" v-model="postData.captcha">
                <captcha v-model="updateCaptcha"></captcha>
            </mt-field>
            <mt-field label="新 密 码" type="password" placeholder="请输入新密码" v-model="postData.password" v-if="postData.smsCaptcha"></mt-field>
        </div>
        <div class="ml15 mr15">
            <mt-button size="large" type="primary" :disabled="!(postData.phone && postData.captcha)" v-if="!postData.smsCaptcha" class="mb10" @click="handlePasswordReset">发送验证短信</mt-button>
            <mt-button size="large" type="primary" :disabled="!(postData.phone && postData.smsCaptcha)" v-if="postData.smsCaptcha" class="mb10" @click="handlePasswordReset">重置密码</mt-button>
            <mt-button @click="handleLogin" size="large" type="primary" plain>登 录</mt-button>
        </div>
        <send-sms v-model="smsVisible" :phone="postData.phone" :captcha="postData.captcha" :type="smsType" @submit="handleSMSCaptcha" @error="handleSMSError"></send-sms>
    </div>
</template>