<script type="text/babel">
    import { http } from '../../../../../../utils';

    http.interceptors.response.use(function (response) {
        return response;
    }, function(error) {
        if (error.code == 401) {
            window.location.href = G.baseUrl + '/mall/index.php?app=seller_login&ref_url=' + window.location.href;
        }
        return Promise.reject(error);
    });
</script>

<style>
    @import "../../../../../../assets/sass/normalize.scss";
    @import "../../../../../../assets/sass/_base.scss";
    @import "../../assets/sass/default.scss";
</style>

<template>
    <router-view></router-view>
</template>
