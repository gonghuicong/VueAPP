<script type="text/babel">
    import { Toast, Popup, Cell, Field, Button } from 'mint-ui';
    import { mapActions } from 'vuex';
    import Captcha from '../../../../../../components/Captcha.vue';

    export default {
        components: {
            Captcha,
            [Cell.name]: Cell,
            [Popup.name]: Popup,
            [Field.name]: Field,
            [Button.name]: Button
        },
        data() {
            return {
                postData: {
                    username: '',
                    password: '',
                    captcha: '',
                },
            }
        },
        computed: {

        },
        methods: {

        }
    };
</script>

<style>
    html, body { background-color: #f5f5f5; }
    #login { width: 100%; padding: 0 15px; position: absolute; top: 50%; margin-top: -170px; }
    .title { text-align: center; line-height: 40px; }
    .input-cont { position: relative; width: 100%; height: 43px; line-height: 43px; overflow: hidden; margin-top: 15px; background-color: #fff; border-radius: 5px; -webkit-box-shadow: 0 0 0 1px #d7d7d7; box-shadow: 0 0 0 1px #d7d7d7; }
    .input { width: 100%; height: 100%; padding: 0 10px; border: none; outline: none; display: inline-block; font-size: 14px; }
    .input::-moz-placeholder { color: #999; opacity: 1; }
    .input:-ms-input-placeholder { color: #999; }
    .input::-webkit-input-placeholder { color: #999; }
    .code-img { position: absolute; top: 0; right: 0; }
    .code-img img { height: 43px; width: auto; vertical-align: top; }
</style>

<template>
    <div id="login">
        <p class="title">后台登录</p>
        <div>
            <div class="input-cont">
                <input type="text" class="input" placeholder="请输入用户名" v-model="postData.username">
            </div>
            <div class="input-cont">
                <input type="text" class="input" placeholder="请输入密码" v-model="postData.password">
            </div>
            <div class="input-cont">
                <input type="text" class="input pr120" placeholder="请输入验证码">
                <div class="code-img" v-model="postData.captcha">
                    <captcha></captcha>
                </div>
            </div>
            <div class="mt30">
                <mt-button size="large" type="primary" class="mb10">登 录</mt-button>
            </div>
        </div>
    </div>
</template>