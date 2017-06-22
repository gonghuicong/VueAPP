<script type="text/babel">
    import { mapState } from 'vuex';
    import { http } from '../utils';
    import { Toast, Popup, Cell, Field, Button } from 'mint-ui';

    export default {
        props: {
            'phone': {
                type: [Number, String],
                required: true
            },
            'type': {
                type: [Number, String],
                required: true
            },
            'value': {
                type:Boolean,
                required: true
            },
            'captcha': {
                type: String,
                required: true
            },
            sendAtVisible: {
                type: Boolean,
                default: true
            },
            waitSecond: {
                type: Number,
                default: 60
            }
        },
        data () {
            return {
                smsCaptcha: '',
                visible: false,
                limitSecond: 0
            }
        },
        components: {
            [Cell.name]: Cell,
            [Popup.name]: Popup,
            [Field.name]: Field,
            [Button.name]: Button
        },
        watch: {
            value(val) {
                this.visible = val;
            },
            visible(val) {
                let that = this;
                if (val && this.sendAtVisible) {
                    that.sendSms();
                }
                this.$emit('input', val);
            }
        },
        computed: mapState({
            api: 'api',
            captchaKey: 'captchaKey'
        }),
        methods: {
            submiSmsCaptcha () {
                let that = this;
                http.get(this.api.checkSmsCaptcha, {
                    params: {
                        type: this.type,
                        phone: this.phone,
                        captcha: this.smsCaptcha
                    }
                }).then(({ data }) => {
                    that.$emit('submit', that.smsCaptcha);
                    that.close();
                }).catch(this.error);
            },
            sendSms () {
                let that = this;
                if (!(this.phone && this.limitSecond <= 0)) {
                    return false;
                }
                this.limitSecond = this.waitSecond;
                http.get(this.api.sendSmsCaptcha, {
                        params: {
                            type: this.type,
                            phone: this.phone,
                            sec_key: this.captchaKey,
                            sec_val: this.captcha,
                        },
                    }).then(() => {
                        Toast('短信已成功发送!');
                    }).catch(this.error);
                let countdown = setInterval(() => {
                    if (that.limitSecond > 0) {
                        that.limitSecond --;
                    } else {
                        clearInterval(countdown);
                    }
                }, 1000);
            },
            close () {
                this.visible = false;
            },
            error () {
                var that = this;
                setTimeout(function() {
                    that.close();
                    that.limitSecond = 0;
                    that.$emit('error');
                }, 3000);
            }
        },
    }
</script>

<style scoped>
    .mint-popup {
        width: 100%;
        min-height: 235px;
    }
</style>

<template>
    <mt-popup v-model="visible" position="bottom">
        <mt-cell title="提交手机验证码" :label="'请输入手机号: ' + phone + ' 收到的短信验证码'"></mt-cell>
        <mt-field class="mb30" label="短信码" placeholder="请输入短信码" v-model="smsCaptcha"></mt-field>
        <div class="ml15 mr15">
            <mt-button size="large" type="primary" class="mb10" :disable="!smsCaptcha" @click="submiSmsCaptcha">提交</mt-button>
            <mt-button size="large" type="primary" class="mb10" plain @click="sendSms" v-if="limitSecond <= 0">再次短信获取</mt-button>
            <mt-button size="large" type="danger" class="mb10" plain @click="sendSms" v-else>{{limitSecond}}秒后再次发送</mt-button>
        </div>
    </mt-popup>
</template>