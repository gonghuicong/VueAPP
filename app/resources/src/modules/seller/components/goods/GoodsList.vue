<script type="text/babel">
    import extend from 'lodash/extend';
    import isEmpty from 'lodash/isEmpty';
    import each from 'lodash/each';
    import { http } from '../../../../utils';
    import { mapState } from 'vuex';
    import '../../../../assets/sass/_base.scss';

    import GoodsSpec from './GoodsSpec.vue';
    export default {
        data () {
            return {
                G: G,
                search_params: {
                    category: 'zhucai',
                    brand: null,
                    cate_id: null,
                    keyword: null,
                    curpage: null
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
                loading: false,
                categories: [],
                goods: [],
                goods_spec: [],
                cateMore_1: false,
                cateMore_2: false,
                cateMore_3: false,

                gc_tags: [],
                views: {
                    view: 1,
                    view_sale: 0,
                    view_zhucai: 1,
                    view_sale_price: 0
                },

                goodsSpecDialogVisible: false,
                selectedGoodsSpecs: {},
                goods_id: null,
                goods_list: []
            }
        },
        computed: {
            ...mapState({
                api: 'api'
            })
        },
        created () {
            this.initCategories();
            this.initGoods();
        },
        methods: {
            isEmpty: isEmpty,
            initCategories () {
                var that = this;
                http.get(that.api.categories, { params: that.search_params })
                    .then(({ data }) => {
                        that.categories = data.datas;
                    });
            },
            initGoods: function () {
                var that = this;
                that.loading = true;
                http.get(that.api.goodsSearch, { params: that.search_params })
                    .then(({ data }) => {
                        that.loading = false;
                        that.goods = data.datas;
                        that.search_params.curpage = that.goods.curpage;
                    });
            },
            setSearchParams: function(params, empty) {
                var that = this;
//                var category = that.search_params.category;
                if (empty) { // 清空重置
                    each(that.search_params, (val, key) => {
                        that.search_params[key] = null;
                    });
                    that.search_params.curpage = 1;
                }
                that.search_params = extend({}, this.search_params, params);

                that.initCategories();
                that.initGoods();
            },
            selectZC () {
                this.setSearchParams({
                    category: 'zhucai',
                    brand: null,
                    cate_id: null,
                    keyword: null,
                    curpage: null
                }, true);

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
                }

                this.views = {
                    view: 1,
                    view_sale: 0,
                    view_zhucai: 1
                }
            },
            selectPT () {
                this.setSearchParams({
                    category: null,
                    brand: null,
                    cate_id: null,
                    keyword: null,
                    curpage: null
                }, true);

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
                }

                this.views = {
                    view: 1,
                    view_sale: 1,
                    view_zhucai: 0
                }
            },
            _emptyBrand () {
                this.search_list.brand_id = null;
                this.search_list.brand_name = null;
            },
            unselectBrand () {
                var that = this;
                this.setSearchParams({
                    cate_id: that.search_params.cate_id,
                    brand: null,
                    keyword: that.search_params.keyword,
                    category: that.search_params.category
                }, true);
                this._emptyBrand();
            },
            selectBrand: function(brand){
                var that = this;
                this.setSearchParams({
                    cate_id: that.search_params.cate_id,
                    brand: brand.brand_id,
                    keyword: that.search_params.keyword,
                    category: that.search_params.category
                }, true);

                this.search_list.brand_id = brand.brand_id;
                this.search_list.brand_name = brand.brand_name;
            },
            _emptyCategories: function(index) {
                var cateID, cateName;
                for (var i = index; i <= 3; i++) {  // 清除下级
                    cateID = 'cate_id' + i;
                    cateName = 'cate_name' + i;
                    this.search_list[cateID] = null;
                    this.search_list[cateName] = null;
                }
            },
            unselectCategories: function(index) {
                var that = this;
                switch (index) {
                    case 1 :
                        that.search_params.cate_id = null;
                        that.gc_tags = [];
                        break;
                    case 2 :
                        that.search_params.cate_id = that.search_list.cate_id1;
                        that.gc_tags = that.categories.categories[that.search_list.cate_id1].gc_tags;
                        break;
                    case 3 :
                        that.search_params.cate_id = that.search_list.cate_id2;
                        that.gc_tags = that.categories.categories[that.search_list.cate_id1].class2[that.search_list.cate_id2].gc_tags;
                        break;
                }
                this.setSearchParams({
                    cate_id: that.search_params.cate_id,
                    brand: that.search_params.brand,
                    keyword: that.search_params.keyword,
                    category: that.search_params.category
                }, true);

                this._emptyCategories(index);
            },
            selectCategories: function(cate, index) {
                var that = this;
                this.setSearchParams({
                    cate_id: cate.gc_id,
                    brand: that.search_params.brand,
                    keyword: that.search_params.keyword,
                    category: that.search_params.category
                }, true);

                this.search_list['cate_id' + index] = cate.gc_id;
                this.search_list['cate_name' + index] = cate.gc_name;

                this.views.view_sale_price = cate.view_sale_price;

                this._emptyCategories(index + 1);

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
            },
            _emptyKeyword () {
                this.search_list.keyword = null;
            },
            unsearchKeyword () {
                var that = this;
                this.setSearchParams({
                    cate_id: that.search_params.cate_id,
                    brand: that.search_params.brand,
                    keyword: null,
                    category: that.search_params.category
                }, true);

                this._emptyKeyword();
            },
            searchKeyword: function(keyword) {
                var that = this;
                this.setSearchParams({
                    cate_id: that.search_params.cate_id,
                    brand: that.search_params.brand,
                    keyword: keyword,
                    category: that.search_params.category
                }, true);

                this.search_list.keyword = keyword;
            },
            handlePageChange(page) {
                this.search_params.curpage = page;
                this.initGoods();
            },
            selectGoods: function(index) {
                this.goods_list = this.goods.goods_list[index];
                if (this.goods_list.specs.type == 'succ') { // 有规格
                    this.selectedGoodsSpecs = this.goods_list.specs;
                } else {
                    this.selectedGoodsSpecs = {};
                }
                this.goods_id = this.goods_list.goods_id;
                this.goodsSpecDialogVisible = true;
            }
        },
        components: {
            GoodsSpec: GoodsSpec
        }
    }
</script>

<style scoped>
    .goods-select { min-height: 100%; width: 100%; position: relative; font-size: 14px; }
    .goods-search-box { overflow: hidden; padding: 5px 0; background-color: #fff; border-top: 1px solid #eee; }
    .goods-search-tag { float: left; line-height: 36px; position: relative; }
    .goods-search-tag .cat-text { position: absolute; color: #333; letter-spacing: normal; word-spacing: normal; }
    .goods-search-tag .cat-text .el-icon-arrow-right { font-size: 12px; }
    .goods-search-tag .goods-search-tag-wrap { margin-left: 90px; }
    .goods-search-form { float: right; width: 250px; }

    .goods-categories { padding-top: 15px; padding-bottom: 15px; }
    .goods-brand { overflow: hidden; margin-top: 10px; }
    .goods-brand .goods-val { overflow: hidden; -webkit-transition: height .3s ease-in; transition: height .3s ease-in; }
    .goods-brand .goods-val li { margin: 0 5px 5px 0; border: 1px solid #ddd; padding: 0; width: 78px; text-align: center; height: 30px; overflow: hidden; }
    .goods-brand .goods-val li.on { border-color: #ff6700; }
    .goods-brand .goods-val li span { display: none; }
    .goods-brand .goods-val li:hover { border-color: #ff6700; }
    .goods-brand .goods-val li:hover img { display: none; }
    .goods-brand .goods-val li:hover span { display: inline; }
    .goods-brand .goods-val li a { display: block; height: 30px; line-height: 30px; color: #ff6700; background-color: #fff; }
    .goods-brand .goods-val li a img { width: 60px; height: 20px; margin-bottom: 4px; }
    .goods-key { float: left; width: 60px; padding-right: 10px; text-align: right; color: #333; line-height: 30px; }
    .goods-val { position: relative; margin-left: 80px; margin-right: 10px; }
    .goods-val.on { height: auto;}
    .goods-val .select-all { float: left; line-height: 30px; }
    .goods-val .select-all.on { color: #ff6700; }
    .goods-val ul { overflow: hidden; position: relative; line-height: 20px; }
    .goods-val ul li { float: left; padding: 5px 20px 5px 0; }
    .goods-val li.on a { color: #ff6700; }
    .goods-val a:hover { color: #ff6700; }
    .goods-val .goods-more { position: absolute; right: 0;top: 9px; }
    .goods-val .el-tag { margin-top: 3px; }

    .goods-wrap { padding-top: 15px; padding-bottom: 15px; min-height: 100px; }
    .goods-list { width: 100%; overflow: hidden; }
    .goods-list ul { font-size: 0; width: 1320px; }
    .goods-list ul li { position: relative; background-color: #fff; font-size: 12px; vertical-align: middle;letter-spacing: normal; word-spacing: normal; display: inline-block; width: 206px; margin-right: 14px; margin-bottom: 14px; -webkit-transition: -webkit-box-shadow .5s linear; transition: box-shadow .5s linear; }
    .goods-list ul li:hover { box-shadow: 0 5px 15px rgba(0, 0, 0, .2); }
    .goods-list .sale-price { padding: 0 15px; overflow: hidden; }
    .goods-list .sale-price .pic { width: 113px; height: 32px; background: url("../../assets/images/price.png") no-repeat; float: left; }
    .goods-list .sale-price .pic.default { background-position: 0 0; }
    .goods-list .sale-price .pic.add { background-position: 0 -64px; }
    .goods-list .sale-price .pic.minus { background-position: 0 -32px; }
    .goods-list .sale-price .fr { line-height: 32px; font-size: 14px; float: right; }
    .goods-list .sale-price .yellow { color: #e3d500; }
    .goods-list .sale-price .blue { color: #1899c1; }
    .goods-list .sale-price .green { color: #0eb306; }
    .goods-list .goods-pic { width: 176px; height: 176px; margin: 10px auto; }
    .goods-list .goods-pic img { width: 176px; height: 176px; }
    .goods-list .goods-name { margin-top: 10px; margin-bottom: 10px; padding: 0 15px; height: 36px; overflow: hidden; word-break: break-all; line-height: 20px; }
    .goods-list .goods-info { padding: 0 15px 10px; overflow: hidden; position: relative; }
    .goods-list .goods-info .goods_marketprice { color: #999; }
    .goods-list .goods-info .goods-price { color: #ff6700; }
    .goods-list .goods-info em {font-style: normal;}
    .goods-list .goods-info a.btn { padding: 3px 6px; border: 1px solid #ff6700; border-radius: 3px; position: absolute; right: 15px; margin-top: 4px; }
    .goods-list .goods-info a.btn:hover { background-color: #ff6700; color: #fff; }
    .goods-wrap .no-goods { text-align: center; line-height: 100px; }

    @media (min-width: 768px) {
        .container { width: 676px; }
        .goods-list ul { width: 660px; }
        .goods-search-tag { width: 360px; }
    }
    @media (min-width: 992px) {
        .container { width: 896px; }
        .goods-list ul { width: 880px; }
        .goods-search-tag { width: 580px; }
    }
    @media (min-width: 1350px) {
        .container { width: 1336px; }
        .goods-list ul { width: 1320px; }
        .goods-search-tag { width: 1020px; }
    }
</style>
<style>
    .goods-val .el-tag + .el-tag { margin-left: 10px; }
    .el-tag.orange { background-color: rgba(255, 103, 0, 0.1); border: 1px solid rgba(255, 103, 0, 0.2); color: #ff6700; }
    .el-tag.orange .el-icon-close:hover { background-color: #ff6700; color: #fff; }
    .goods-spec-dialog { width: 1020px; }
    .el-loading-mask { position: fixed; }
</style>

<template>
    <div id="goodsList" class="goods-select">
        <div class="goods-categories">
            <div class="container">
                <transition name="fade" v-if="views.view">
                    <div class="goods-cate">
                        <div class="goods-key">选材 : </div>
                        <div class="goods-val">
                            <ul>
                                <li :class="{on: search_params.category}" @click="selectZC()"><a href="javascript:void(0);">套餐</a></li>
                                <li :class="{on: !search_params.category}" @click="selectPT()"><a href="javascript:void(0);">零售</a></li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="goods-cate">
                        <div class="goods-key">类别 : </div>
                        <div class="goods-val">
                            <!--<a href="javascript:void(0);" @click="unselectCategories(1)" class="select-all" :class="{ on: !search_list.cate_id1 }">不限</a>-->
                            <ul>
                                <template v-if="views.view_zhucai">
                                    <li v-for="(cate, index) in categories.categories" v-if="cate.view_zhucai == views.view_zhucai" :class="{on: cate.gc_id == search_list.cate_id1}" @click="selectCategories(cate, 1)"><a href="javascript:void(0);">{{ cate.gc_name }}</a></li>
                                </template>
                                <template v-if="views.view_sale">
                                    <li v-for="(cate, index) in categories.categories" v-if="cate.view_sale == views.view_sale" :class="{on: cate.gc_id == search_list.cate_id1}" @click="selectCategories(cate, 1)"><a href="javascript:void(0);">{{ cate.gc_name }}</a></li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="goods-cate" v-if="search_list.cate_id1">
                        <div class="goods-key">分类 : </div>
                        <div class="goods-val">
                            <!--<a href="javascript:void(0);" @click="unselectCategories(2)" class="select-all" :class="{ on: !search_list.cate_id2 }">不限</a>-->
                            <ul>
                                <li v-for="(cate, index) in categories.categories[search_list.cate_id1].class2" :class="{on: cate.gc_id == search_list.cate_id2}" @click="selectCategories(cate, 2)"><a href="javascript:void(0);">{{ cate.gc_name }}</a></li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="goods-cate" v-if="search_list.cate_id2">
                        <div class="goods-key">种类 : </div>
                        <div class="goods-val">
                            <!--<a href="javascript:void(0);" @click="unselectCategories(3)" class="select-all" :class="{ on: !search_list.cate_id3 }">不限</a>-->
                            <ul>
                                <li v-for="(cate, index) in categories.categories[search_list.cate_id1].class2[search_list.cate_id2].class3" :class="{on: cate.gc_id == search_list.cate_id3}" @click="selectCategories(cate, 3)"><a href="javascript:void(0);">{{ cate.gc_name }}</a></li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="goods-brand" v-if="categories.brands">
                        <!--<div class="goods-key">品牌 : </div>-->
                        <div class="goods-val">
                            <!--<a href="javascript:void(0);" @click="unselectBrand" class="select-all" :class="{ on: !search_list.brand_id }">不限</a>-->
                            <ul>
                                <li v-for="(brand, index) in categories.brands" :class="{on: brand.brand_id == search_list.brand_id}" @click="selectBrand(brand)">
                                    <a href="javascript:void(0);">
                                        <img :src="G.storageUrl + '/mall/brand/' + brand.brand_pic">
                                        <span>{{ brand.brand_name }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="goods-cate" v-if="gc_tags.length">
                        <div class="goods-key">规格 : </div>
                        <div class="goods-val">
                            <a href="javascript:void(0);" v-for="tag in gc_tags" @click="searchKeyword(tag)" class="el-tag orange">{{ tag }}</a>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="goods-search-box">
            <div class="container">
                <div class="goods-search-tag ml15">
                    <span class="cat-text">搜索字段 <i class="el-icon-arrow-right"></i></span>
                    <div class="goods-search-tag-wrap">
                        <el-tag v-if="search_list.brand_id" class="orange" :closable="true" @close="unselectBrand">品牌：{{search_list.brand_name}}</el-tag>
                        <el-tag v-if="search_list.keyword" class="orange" :closable="true" @close="unsearchKeyword">搜索：{{search_list.keyword}}</el-tag>
                        <el-tag v-if="search_list.cate_id1" class="orange" :closable="true" @close="unselectCategories(1)">类别：{{search_list.cate_name1}}</el-tag>
                        <el-tag v-if="search_list.cate_id2" class="orange" :closable="true" @close="unselectCategories(2)">分类：{{search_list.cate_name2}}</el-tag>
                        <el-tag v-if="search_list.cate_id3" class="orange" :closable="true" @close="unselectCategories(3)">种类：{{search_list.cate_name3}}</el-tag>
                    </div>
                </div>
                <div class="goods-search-form">
                    <el-input placeholder="输入搜索关键字" v-model="search_params.keyword">
                        <el-button slot="append" icon="search" @click="searchKeyword(search_params.keyword)"></el-button>
                    </el-input>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="goods-wrap" v-if="goods.type" v-loading="loading">
                <div v-if="!isEmpty(goods.goods_list)">
                    <div class="goods-list">
                        <ul>
                            <li v-for="(list, index) in goods.goods_list">
                                <div class="goods-pic">
                                    <a href="javascript:void(0);"><img :src="list.goods_image_middle" alt=""></a>
                                </div>
                                <template v-if="search_params.category == 'zhucai'">
                                    <div class="sale-price" v-if="list.goods_floatingprice > 0">
                                        <div class="pic add fl"></div>
                                    </div>
                                    <div class="sale-price" v-else-if="list.goods_floatingprice < 0">
                                        <div class="pic minus fl"></div>
                                    </div>
                                    <div class="sale-price" v-else>
                                        <div class="pic default fl"></div>
                                    </div>
                                </template>
                                <div class="goods-name">{{ list.goods_name }}</div>
                                <div class="goods-info">
                                    <!--<em class="goods-price" v-if="search_params.category == 'zhucai'">{{ '￥' + (list.goods_floatingprice > 0 ? '+' + list.goods_floatingprice : list.goods_floatingprice) }}</em>
                                    <em class="goods-price" v-else-if="search_params.category == 'caigou'">{{ '￥' + list.goods_price }}</em>-->
                                    <div class="fl">
                                        <template v-if="search_params.category == 'zhucai'">
                                            <p class="goods_marketprice"><del>市场价: {{ '￥' + list.goods_marketprice }}</del></p>
                                            <p class="goods-price">增减价: {{ '￥' + (list.goods_floatingprice > 0 ? '+' + list.goods_floatingprice : list.goods_floatingprice) }}</p>
                                        </template>
                                        <template v-else>
                                            <p class="goods_marketprice" v-if="views.view_sale_price == 1"><del>市场价: {{ '￥' + list.goods_marketprice }}</del></p>
                                            <p class="goods-price" style="line-height: 32px;" v-else>市场价: {{ '￥' + list.goods_marketprice }}</p>
                                            <p class="goods-price" v-if="views.view_sale_price == 1">零售价: {{ '￥' + list.goods_price }}</p>
                                        </template>
                                    </div>
                                    <a href="javascript:void(0);" class="btn" @click="selectGoods(index)">商品详情</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <el-pagination
                            @current-change="handlePageChange"
                            layout="prev, pager, next"
                            :total="parseInt(goods.total)"
                            :page-size="24"></el-pagination>
                </div>
                <p v-else class="no-goods">未找到相关商品！</p>
            </div>
        </div>
        <el-dialog title="选择商品" v-model="goodsSpecDialogVisible" custom-class="goods-spec-dialog">
            <goods-spec :specs="selectedGoodsSpecs" :goods_id="goods_id" :category="search_params.category" :goods="goods_list" :view_sale_price="views.view_sale_price"></goods-spec>
            <div slot="footer" class="dialog-footer">
                <el-button @click="goodsSpecDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="goodsSpecDialogVisible=false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>