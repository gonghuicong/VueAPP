<script type="text/babel">
    import mapValues from 'lodash/mapValues';
    import extend from 'lodash/extend';
    import isEmpty from 'lodash/isEmpty';
    import each from 'lodash/each';
    import { Header, Button, Popup, InfiniteScroll, Spinner, Toast } from 'mint-ui';
    import GoodsView from './GoodsView.vue';
    import { mapState, mapActions } from 'vuex';
    import { LOAD_STORE_INFO, LOAD_GOODS_CATEGORIES, LOAD_GOODS_LIST } from '../../store';

    export default {
        components: {
            [Header.name]: Header,
            [Button.name]: Button,
            [Popup.name]: Popup,
            [InfiniteScroll.name]: InfiniteScroll,
            [Spinner.name]: Spinner,
            [Toast.name]: Toast,
            GoodsView: GoodsView
        },
        props: ['goodsType'],
        data () {
            return {
                G: G,
                store_info: {},

                siftGoodsPopupVisible: false,
                goodsViewPopupVisible: false,
                loading: false,
                noGoods: false,
                allLoaded: false,
                wrapperHeight: 0,
                siftBodyHeight: 0,

                goods_list: [],
                gc_tags: [],
                search_params: {
                    category: 'zhucai',
                    brand: null,
                    cate_id: null,
                    keyword: null,
                    curpage: 0
                },
                search_list: {
                    brand_name: null,
                    brand_id: null,
                    keyword: null,
                    cate_id1: null,
                    cate_name1: null,
                    cate_id2: null,
                    cate_name2: null,
                    cate_id3: null,
                    cate_name3: null
                },
                total_page: 1,
                cateMore_1: false,
                cateMore_2: false,
                cateMore_3: false,
                cateMore_4: false,

                views: {
                    view: 1,
                    view_sale: 0,
                    view_zhucai: 1,
                    view_sale_price: 0
                }
            }
        },
        created () {
            this.search_params.category = this.goodsType == 1 ? 'zhucai' : null;
            this.views.view_zhucai = this.goodsType == 1 ? 1 : 0;
            this.views.view_sale = this.goodsType == 1 ? 0 : 1;
            this._loadStoreInfo();
            this.loadGoodsCategories();
            this.loadMore();
        },
        mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - 40;
            this.siftBodyHeight = document.documentElement.clientHeight - 92;
        },
        computed: {
            ...mapState({
                categories (state) {
                    return state.mobile.seller.goods_categories.datas;
                }
            })
        },
        methods: {
            ...mapActions({
                loadStoreInfo: LOAD_STORE_INFO,
                loadGoodsCategories: LOAD_GOODS_CATEGORIES,
                loadGoodsList: LOAD_GOODS_LIST,
            }),
            _loadStoreInfo () {
                this.loadStoreInfo()
                    .then(({ data }) => {
                        this.store_info = data.datas.store_info;
                    });
            },
            closeGoodsListPopup () {
                this.$emit('closegoodslistpopup', true);
            },
            loadMore () {
                this.loading = true;
                if (this.total_page > this.search_params.curpage) {
                    this.search_params.curpage++;
                    this._loadGoodsList(this.search_params);
                } else {
                    this.loading = false;
                }
            },
            _loadGoodsList (search_params) {
                this.loadGoodsList(search_params)
                    .then(({ data }) => {
                        let datas = data.datas;
                        this.total_page = datas.total_page;
                        mapValues(datas.goods_list, (goods) => {
                            this.goods_list.push(goods);
                        })
                        this.loading = false;
                    })
                    .catch(() => {
                        this.loading = false;
                    });
            },

            setSearchParams (params, empty) {
                var that = this;
                var category = that.search_params.category;
                if (empty) { // 清空重置
                    each(that.search_params, (val, key) => {
                        that.search_params[key] = null;
                    });
                    that.search_params.curpage = 1;
                }
                that.search_params = extend({}, this.search_params, params, {
                    category: category // 主材分类查询不能重置
                });

            },
            selectCategories (cate, index) {
                var that = this;
                this.setSearchParams({
                    cate_id: cate.gc_id,
                    brand: null,
                    keyword: null
                }, true);

                this.search_list['cate_id' + index] = cate.gc_id;
                this.search_list['cate_name' + index] = cate.gc_name;

                this.views.view_sale_price = cate.view_sale_price;

                this._emptyCategories(index + 1);
                this._emptyBrand();
                this._emptyKeyword();

                switch (index) {
                    case 1 :
                        that.gc_tags = that.categories.categories[that.search_list.cate_id1].gc_tags;
                        break;
                    case 2 :
                        that.gc_tags = that.categories.categories[that.search_list.cate_id1].class2[that.search_list.cate_id2].gc_tags;
                        break;
                    case 3 :
                        that.gc_tags = that.categories.categories[that.search_list.cate_id1].class2[that.search_list.cate_id2].class3[that.search_list.cate_id3].gc_tags;
                        break;
                }

                that.loadGoodsCategories({cate_id: cate.gc_id});
            },
            selectBrand (brand) {
                var that = this;
                this.setSearchParams({
                    cate_id: that.search_params.cate_id,
                    brand: brand.brand_id,
                    keyword: that.search_params.keyword
                }, true);

                this.search_list.brand_id = brand.brand_id;
                this.search_list.brand_name = brand.brand_name;
            },
            searchKeyword (keyword) {
                var that = this;
                this.setSearchParams({
                    cate_id: that.search_params.cate_id,
                    brand: that.search_params.brand,
                    keyword: keyword
                }, true);

                this.search_list.keyword = keyword;
            },
            _emptyCategories (index) {
                var cateID, cateName;
                for (var i = index; i <= 3; i++) {  // 清除下级
                    cateID = 'cate_id' + i;
                    cateName = 'cate_name' + i;
                    this.search_list[cateID] = null;
                    this.search_list[cateName] = null;
                }
            },
            _emptyBrand () {
                this.search_list.brand_id = null;
                this.search_list.brand_name = null;
            },
            _emptyKeyword () {
                this.search_list.keyword = null;
            },
            search () {
                if (this.search_params.keyword) {
                    this.submit();
                }
            },
            emptySearchParams () {
                this.search_params = {
                    category: null,
                    brand: null,
                    cate_id: null,
                    keyword: null,
                    curpage: 1
                };
                this.search_list = {
                    brand_name: null,
                    brand_id: null,
                    keyword: null,
                    cate_id1: null,
                    cate_name1: null,
                    cate_id2: null,
                    cate_name2: null,
                    cate_id3: null,
                    cate_name3: null
                };
                this.gc_tags = [];
                this.loadGoodsCategories();
            },
            submit () {
                this.goods_list = [];
                this.siftGoodsPopupVisible = false;
                this.loading = true;
                this._loadGoodsList(this.search_params);
            },

            selectGoods (data) {
                if (data.specs.type == 'succ') { // 有规格
                    this.goods_id = data.goods_id;
                    this.goodsViewPopupVisible = true;
                } else {
                    this.$emit('onSelectGoods', data);
                }
            },
            selectGoodsSpec (data) {
                this.$emit('selectgoods', data);

                this.goodsViewPopupVisible = false;
            }
        }
    }
</script>

<style scoped>
    #GoodsList { width: 100%; height: 100%; position: absolute; }
    .fa { font-size: 16px; }
    /* search */
    .sift-panel  { width: 90%; height: 100%; overflow: hidden; }
    .sift-top, .searchbar { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
    .sift-top { background-color: #e4e8f1; padding: 8px 10px; }
    .sift-top .searchbar { background-color: #fff; border-radius: 14px; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; height: 28px; padding: 4px 6px; }
    .sift-top .searchbar i { margin-right: 5px; font-style: normal; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: .2px; -moz-osx-font-smoothing: grayscale; font-size: 12px; color: #d9d9d9; }
    .sift-top .searchbar .searchbar-core { -webkit-appearance: none; -moz-appearance: none; appearance: none; border: 0; width: 100%; height: 100%; outline: 0; font-size: 14px; }
    .sift-top .searchbar-cancel { color: #48576a; margin-left: 10px; text-decoration: none; font-size: 14px; }
    .sift-body { overflow-y: scroll; }
    .sift-body .content { background-color: #fff; }
    .sift-body .sift-row { padding: 10px; border-top: 1px solid #e7e7e7; }
    .sift-body .sift-row .row-head { line-height: 28px; height: 28px; margin-bottom: 10px; }
    .sift-body .sift-row .row-head span { display: inline-block; vertical-align: middle; height: inherit; line-height: inherit; font-size: 14px; }
    .sift-body .sift-row .row-head span.selected-items { color: #ff6700; max-width: 70%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sift-body .sift-row .row-head span.fa { font-size: 20px; float: right; }
    .sift-body .sift-row .row-body { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-justify-content: space-between; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; height: 38px; overflow: hidden; }
    .sift-body .sift-row .row-body.expand { height: auto; }
    .sift-body .sift-row .row-body span { display: inline-block; width: 31%; height: 28px; line-height: 28px; margin-bottom: 10px; font-size: 14px; text-align: center; background-color: #e4e8f1; color: #48576a; border-radius: 5px; box-sizing: border-box; border: 1px solid #e4e8f1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sift-body .sift-row .row-body span.on { background-color: #ff6700; color: #fff; border-color: #ff6700; }
    .sift-body .sift-row .row-body span.brand { background-color: transparent; }
    .sift-body .sift-row .row-body span.brand.on { background-color: transparent; }
    .sift-body .sift-row .row-body span.brand img { display: inline-block; vertical-align: middle; width: 60px; height: 20px; }
    .sift-body .sift-body-loading { width: 100%; min-height: 100%; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: space-between; justify-content: center; }
    .sift-bottom { width: 100%; overflow: hidden; }
    .sift-bottom .sift-btn { width: 50%; height: 48px; background: #FFF; line-height: 48px; float: left; text-align: center; border-top: 1px solid #e7e7e7; }
    .sift-bottom .sift-ok { color: #fff; background: #ff5000; border-top-color: #e7e7e7; }
    /* goodsList */
    .no-goods { text-align: center; padding-top: 50px; }
    .page-infinite-wrapper { margin-top: 40px; overflow: scroll; }
    .goods-item { display: -webkit-box; display: -ms-flexbox; display: flex; padding: 10px; border-bottom: 1px solid #ececec; }
    .goods-item .item-left { width: 70px; height: 70px; margin-right: 10px; }
    .goods-item .item-right { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; font-size: 14px; }
    .goods-item .item-right .goods-name { height: 40px; line-height: 20px; margin-bottom: 6px; white-space: normal; text-overflow: ellipsis; overflow: hidden; word-break: break-all; }
    .goods-item .item-right .goods-info { height: 24px; line-height: 1; position: relative; overflow: hidden; }
    .goods-item .item-right .goods-info .goods-price { color: #ff6700; }
    .goods-item .item-right .goods-info .goods_marketprice { color: #999; }
    .goods-item .item-right .goods-info .mint-button { height: 24px; border-color: #ff6700; font-size: 12px; float: right; }

    .goods-view-popup { width: 100%; min-height: 220px; background-color: #fff; }
</style>
<style>
    .page-infinite-loading { text-align: center; height: 50px; line-height: 50px; }
    .page-infinite-loading div { display: inline-block; vertical-align: middle; margin-right: 5px; }
</style>

<template>
    <div id="GoodsList">
        <mt-header fixed :title="store_info.seller_name">
            <mt-button icon="back" slot="left" @click="closeGoodsListPopup"></mt-button>
            <mt-button slot="right" @click="siftGoodsPopupVisible = !siftGoodsPopupVisible"><i class="fa fa-filter" aria-hidden="true"></i></mt-button>
        </mt-header>
        <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                <li class="goods-item" v-for="(list, index) in goods_list" @click="selectGoods(list)">
                    <div class="item-left"><img :src="list.goods_image_middle"></div>
                    <div class="item-right">
                        <div class="goods-name">{{ list.goods_name }}</div>
                        <div class="goods-info">
                            <div style="position: absolute; font-size: 12px;">
                                <template v-if="search_params.category == 'zhucai'">
                                    <p class="goods_marketprice"><del>市场价: {{ '￥' + list.goods_marketprice }}</del></p>
                                    <p class="goods-price">增减价: {{ '￥' + (list.goods_floatingprice > 0 ? '+' + list.goods_floatingprice : list.goods_floatingprice) }}</p>
                                </template>
                                <template v-else>
                                    <template v-if="views.view_sale_price == 1">
                                        <p class="goods_marketprice"><del>市场价: {{ '￥' + list.goods_marketprice }}</del></p>
                                        <p class="goods-price">零售价: {{ '￥' + list.goods_price }}</p>
                                    </template>
                                    <p class="goods-price" style="line-height: 24px;" v-else>市场价: {{ '￥' + list.goods_marketprice }}</p>
                                </template>
                            </div>
                            <mt-button plain>选择商品</mt-button>
                        </div>
                    </div>
                </li>
            </ul>
            <p v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
                加载中...
            </p>
            <div v-if="!loading && goods_list==0" class="no-goods">没有找到您需要的商品！</div>
        </div>

        <mt-popup v-if="siftGoodsPopupVisible" v-model="siftGoodsPopupVisible" position="right" class="sift-panel">
            <div class="sift-top">
                <div class="searchbar">
                    <i class="fa fa-search"></i>
                    <input v-model="search_params.keyword" type="text" placeholder="输入搜索关键字" autocomplete="off" class="searchbar-core">
                </div>
                <a class="searchbar-cancel" @click="search()">搜索</a>
            </div>
            <div class="sift-body" :style="{ height: siftBodyHeight + 'px' }">
                <div class="content" v-if="categories">
                    <div class="sift-row">
                        <div class="row-head" @click="cateMore_1 = !cateMore_1">
                            <span class="title">类别：</span>
                            <span class="selected-items">{{ search_list.cate_name1 }}</span>
                            <span class="fa" :class="[cateMore_1 ? 'fa-angle-up' : 'fa-angle-down']"></span>
                        </div>
                        <div class="row-body" :class="{ expand: cateMore_1 }">
                            <template v-if="views.view_zhucai">
                                <span v-for="(cate, index) in categories.categories" v-if="cate.view_zhucai == views.view_zhucai" :class="{on: cate.gc_id == search_list.cate_id1}" @click="selectCategories(cate, 1)">{{ cate.gc_name }}</span>
                            </template>
                            <template v-if="views.view_sale">
                                <span v-for="(cate, index) in categories.categories" v-if="cate.view_sale == views.view_sale" :class="{on: cate.gc_id == search_list.cate_id1}" @click="selectCategories(cate, 1)">{{ cate.gc_name }}</span>
                            </template>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="sift-row" v-if="search_list.cate_id1 && categories.categories[search_list.cate_id1].class2">
                            <div class="row-head" @click="cateMore_2 = !cateMore_2">
                                <span class="title">分类：</span>
                                <span class="selected-items">{{ search_list.cate_name2 }}</span>
                                <span class="fa" :class="[cateMore_2 ? 'fa-angle-up' : 'fa-angle-down']"></span>
                            </div>
                            <div class="row-body" :class="{ expand: cateMore_2 }">
                                <span v-for="(cate, index) in categories.categories[search_list.cate_id1].class2" :class="{on: cate.gc_id == search_list.cate_id2}" @click="selectCategories(cate, 2)">{{ cate.gc_name }}</span>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div class="sift-row" v-if="search_list.cate_id2 && categories.categories[search_list.cate_id1].class2[search_list.cate_id2].class3">
                            <div class="row-head" @click="cateMore_3 = !cateMore_3">
                                <span class="title">种类：</span>
                                <span class="selected-items">{{ search_list.cate_name3 }}</span>
                                <span class="fa" :class="[cateMore_3 ? 'fa-angle-up' : 'fa-angle-down']"></span>
                            </div>
                            <div class="row-body" :class="{ expand: cateMore_3 }">
                                <span v-for="(cate, index) in categories.categories[search_list.cate_id1].class2[search_list.cate_id2].class3" :class="{on: cate.gc_id == search_list.cate_id3}" @click="selectCategories(cate, 3)">{{ cate.gc_name }}</span>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div class="sift-row" v-if="categories.brands">
                            <div class="row-head" @click="cateMore_4 = !cateMore_4">
                                <span class="title">品牌：</span>
                                <span class="selected-items">{{ search_list.brand_name }}</span>
                                <span class="fa" :class="[cateMore_4 ? 'fa-angle-up' : 'fa-angle-down']"></span>
                            </div>
                            <div class="row-body" :class="{ expand: cateMore_4 }">
                                <span v-for="(brand, index) in categories.brands" :class="{on: brand.brand_id == search_list.brand_id}" @click="selectBrand(brand)" class="brand"><img  :src="G.storageUrl + '/mall/brand/' + brand.brand_pic"></span>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div class="sift-row" v-if="gc_tags.length">
                            <div class="row-head">
                                <span class="title">规格：</span>
                                <span class="selected-items">{{ search_list.keyword }}</span>
                            </div>
                            <div class="row-body">
                                <span v-for="tag in gc_tags" :class="{on: tag == search_list.keyword}" @click="searchKeyword(tag)">{{ tag }}</span>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="sift-body-loading" v-else>
                    <mt-spinner color="#26a2ff" type="fading-circle"></mt-spinner>
                    加载中...
                </div>
            </div>
            <div class="sift-bottom">
                <div class="sift-clear sift-btn" @click="emptySearchParams()">重置</div>
                <div class="sift-ok sift-btn" @click="submit()">确定</div>
            </div>
        </mt-popup>

        <mt-popup v-if="goodsViewPopupVisible" v-model="goodsViewPopupVisible" position="bottom" class="goods-view-popup">
            <goods-view :goodsId="goods_id" :category="search_params.category" :viewSalePrice="views.view_sale_price" @selectgoodsspec="selectGoodsSpec"></goods-view>
        </mt-popup>
    </div>
</template>