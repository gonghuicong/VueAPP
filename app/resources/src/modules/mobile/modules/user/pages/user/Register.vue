<script type="text/babel">
    import { Toast, Popup, Cell, Field, Button } from 'mint-ui';
    import { mapActions } from 'vuex';
    import Captcha from '../../../../../../components/Captcha.vue';
    import SendSms from '../../../../../../components/SendSms.vue';
    import { USER_SMS_REGISTER, SMS_TYPE_REGISTER } from '../../../../store';

    export default {
        components: {
            Captcha,
            SendSms,
            [Cell.name]: Cell,
            [Popup.name]: Popup,
            [Field.name]: Field,
            [Button.name]: Button
        },
        data() {
            return {
                postData: {
                    usermobile: '',
                    captcha: '',
                    codekey: '',
                    password: '',
                    smsCaptcha: ''
                },
                smsVisible: false,
                smsType: SMS_TYPE_REGISTER,
                updateCaptcha: 0
            }
        },
        computed: {
            reigsterAvaible () {
                if (!this.postData.smsCaptcha) {
                    return this.postData.usermobile && this.postData.captcha;
                } else if (this.postData.smsCaptcha) {
                    return this.postData.smsCaptcha && this.postData.password
                }
                return false;
            }
        },
        methods: {
            ...mapActions({
                register: USER_SMS_REGISTER
            }),
            handleRegister () {
                let that = this;
                if (!this.postData.smsCaptcha) { // 发送短信
                    this.smsVisible = true;
                } else { // 提交注册
                    this.register({
                        phone: this.postData.usermobile,
                        captcha: this.postData.smsCaptcha,
                        password: this.postData.password,
                        client:'wap'
                    }).then(() => {
                        Toast('恭喜注册成功!');
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
            handleLogin () {
                this.$router.push('/u/login');
            },
        }
    };
</script>

<template>
    <div id="register">
        <div class="tc pt50 mb30">
            <router-link to="/"><img src="../../../../../../assets/images/logo.png"></router-link>
        </div>
        <div class="mb30">
            <mt-field label="手 机 号" placeholder="请输入手机号" v-model="postData.usermobile"></mt-field>
            <mt-field label="验 证 码" placeholder="请输入验证码" v-model="postData.captcha">
                <captcha v-model="updateCaptcha"></captcha>
            </mt-field>
            <mt-field label="密 码" type="password" placeholder="请输入密码" v-model="postData.password" v-if="postData.smsCaptcha"></mt-field>
        </div>
        <div class="ml15 mr15">
            <mt-button size="large" type="primary" class="mb10" @click="handleRegister" :disabled="!reigsterAvaible">注 册</mt-button>
            <mt-button size="large" type="primary" plain @click="handleLogin">登 录</mt-button>
        </div>
        <send-sms v-model="smsVisible" :phone="postData.usermobile" :captcha="postData.captcha" :type="smsType" @submit="handleSMSCaptcha" @error="handleSMSError"></send-sms>
    </div>
</template>