<script type="text/babel">
    import { Swipe, SwipeItem, Popup } from 'mint-ui';
    import GoodsList from '../../components/GoodsList.vue';
    import Apply from '../../components/Apply.vue';
    import { http } from '../../../../../../utils';
    import { mapActions } from 'vuex';
    import { LOAD_BANNER_INFO, LOAD_STORE_INFO } from '../../store';

    export default {
        components: {
            [Swipe.name] : Swipe,
            [SwipeItem.name] : SwipeItem,
            [Popup.name]: Popup,
            GoodsList : GoodsList,
            Apply : Apply
        },
        data () {
            return {
                store_id: this.$route.params.id,
                banner_info: [],
                applyPopupVisible: false
            }
        },
        created () {
            this._loadBannerInfo();
            this._loadStoreInfo();
        },
        methods: {
            ...mapActions({
                loadBannerInfo: LOAD_BANNER_INFO,
                loadStoreInfo: LOAD_STORE_INFO
            }),
            _loadBannerInfo () {
                this.loadBannerInfo({store_id: this.store_id})
                    .then(({ data }) => {
                        this.banner_info = data.datas.banner_info;
                    });
            },
            handleCase () {
                this.$router.push('/m/store/case/' + this.store_id);
            },
            handleSellerPackage () {
                this.$router.push('/m/seller/package');
            },
            _loadStoreInfo () {
                this.loadStoreInfo({
                    store_id: this.store_id
                })
                .then(function({ data }){
                    let store_info = data.datas.store_info;
                    document.getElementsByTagName('title')[0].innerHTML = store_info.store_name;
                })
            }
        }
    }
</script>

<style scoped>
    .home-col { padding: 15px 0; border-bottom: 1px solid #eee; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: center; justify-content: center; }
    .home-col a { -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: center; text-decoration: none; }
    .home-col a + a { border-left: 1px solid #eee; }
    .green { color: #7ed320; }
    .blue { color: #4b8edf; }
    .yellow { color: #fed000; }
    .appointment-popup { height: 270px; width: 100%; }
</style>
<style>
    .mint-swipe { height: 120px!important; }
</style>

<template>
    <div id="root">
        <mt-swipe :auto="5000">
            <mt-swipe-item v-for="info in banner_info" ref="wrapper"><img :src="info.img"></mt-swipe-item>
        </mt-swipe>
        <div class="home-col">
            <a href="javascript:void(0);" class="btn-a" @click="applyPopupVisible = true"><i class="fa fa-fax mr5 green" aria-hidden="true"></i>预约</a>
            <a href="javascript:void(0);" class="btn-b" @click="handleCase"><i class="fa fa-book mr5 blue" aria-hidden="true"></i>案例</a>
            <a href="javascript:void(0);" class="btn-b" @click="handleSellerPackage"><i class="fa fa-building-o mr5 yellow" aria-hidden="true"></i>选材</a>
        </div>
        <goods-list></goods-list>

        <mt-popup v-if="applyPopupVisible" v-model="applyPopupVisible" position="bottom" class="appointment-popup">
            <Apply :store_id="store_id"></Apply>
        </mt-popup>
    </div>
</template>