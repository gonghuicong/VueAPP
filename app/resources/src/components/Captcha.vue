<script type="text/babel">
    import { mapActions, mapGetters } from 'vuex';
    import { LOAD_CAPTCHA_KEY } from '../store';

    export default {
        props: ['value'],
        created () {
            this.loadCaptchaKey();
        },
        computed: {
            ...mapGetters({
                captchaUrl: 'captchaUrl'
            }),
        },
        watch: {
            value () {
                this.updateCaptchaKey();
            }
        },
        methods: {
            updateCaptchaKey () {
                this.loadCaptchaKey(true);
            },
            ...mapActions({
                loadCaptchaKey: LOAD_CAPTCHA_KEY
            })
        }
    }
</script>

<style>
</style>

<template>
    <img :src="captchaUrl" v-if="captchaUrl" @click="updateCaptchaKey">
</template>