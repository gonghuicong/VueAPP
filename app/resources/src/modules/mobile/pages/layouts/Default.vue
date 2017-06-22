<script type="text/babel">
    import { http } from '../../../../utils';
    import { Toast } from 'mint-ui';

    http.interceptors.response.use(function (response) {
        let data = response.data;
        let datas = data.datas;
        if ((data.code && data.code != 200) || (datas.type && datas.type != 'succ')) {
            Toast({
                message: datas.error ? datas.error : '请求失败',
                position: 'bottom',
                duration: 3000
            });
            return Promise.reject(response.data);
        }
        if (datas.msg) {
            Toast({
                message: datas.msg ? datas.msg : '请求成功',
                position: 'bottom',
                duration: 3000
            });
        }
        return response;
    });

    export default {
    };
</script>

<style>
    .mint-toast.is-placebottom { z-index: 5000; }
</style>

<template>
    <router-view></router-view>
</template>