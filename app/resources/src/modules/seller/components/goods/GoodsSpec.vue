<script type="text/babel">
    import isEmpty from 'lodash/isEmpty';
    import each from 'lodash/each';
    import { http } from '../../../../utils';
    import { mapState } from 'vuex';

    export default {
        props: ['specs', 'goods_id', 'category', 'goods', 'view_sale_price'],
        data() {
            return {
                G: G,
                spec_sign_list: {},
                spec_detail: {},
                num: 1,
                details_show: false,
                goods_details: null,
                loading: false,
                bool: false
            };
        },
        computed: {
            ...mapState({
                api: 'api'
            })
        },
        created () {
            this._specsChanged();
        },
        watch: {
            specs: {
                deep: true,
                handler () {
                    this._specsChanged();
                }
            },
            goods_id: {
                deep: true,
                handler () {
                    this.details_show = false;
                    this._getGoodsDetails();
                }
            },
            spec_sign_list: {
                deep: true,
                handler () {
                    this.spec_detail = this._getSpec();
                }
            },
            num () {
                if (!(this.num > 0)) {
                    return this.num = 1;
                }
                let spec = this._getSpec();
                var storage = this._getSpec().goods_storage;
                if (this.num > storage) {
                    this.num = storage;
                }
            }
        },
        methods: {
            isEmpty: isEmpty,
            _specsChanged () {
                var that = this;
                var data = {};
                if (!isEmpty(that.specs)) { // 有规格
                    each(that.specs.list, function(list, index) {
                        each(list.spec_value, function(spec, key) {
                            if (!data[index]) {
                                data[index] = {};
                            }
                            data[index][spec.valid] = !!that.specs.current_goods_spec[spec.valid];
                        });
                    });
                } else {
                    return this.spec_detail = this.goods;
                }
                that.num = 1;
                that.spec_sign_list = data;
            },
            _getSpec () {
                var that = this;
                if (isEmpty(that.specs) || isEmpty(that.specs.spec_list_api.list)) { // 没有规格
                    return this.goods;
                }

                var data = [];
                each(this.spec_sign_list, function(list, index) {
                    each(list, function(value, key) {
                        if (value) {
                            data.push(key);
                        }
                    });
                });
                var spec_param = data.sort(function(a, b){
                    return a - b;
                }).join('|');
                return that.specs.spec_list_api.list[spec_param];
            },
            selectGoodsSpec: function(index) {
                var spec = this._getSpec();
                if (spec) {
                    this.onSelectGoodsSpec({
                        spec: spec,
                        num: this.num
                    });
                } else {
                    alert('请正确选择商品规格');
                }
            },
            toggleSpec: function(index, value) {
                var that = this;
                each(this.spec_sign_list[index], function(list, key) {
                    that.spec_sign_list[index][key] = false;
                });
                that.spec_sign_list[index][value] = !that.spec_sign_list[index][value];
            },
            _getGoodsDetails () {
                var that = this;
                that.loading = true;
                http.get(that.api.goodsDetails + '&goods_id=' + that.goods_id)
                    .then(({ data }) => {
                        that.goods_details = data.datas;
                        that.loading = false;
                    });
            },
            getGoodsDetails () {
                this.details_show = !this.details_show;
                if (!this.goods_details) {
                    this._getGoodsDetails();
                }
            },
            onSelectGoodsSpec: function(data) {},
        }
    }
</script>

<style scoped>
    .goods-spec { overflow: hidden; position: relative; }
    .goods-spec-wrap { overflow: hidden; padding-bottom: 15px; }
    .goods-spec-info { width: 720px; float: left; }
    .goods-spec dl { overflow: hidden; line-height: 28px; }
    .goods-spec dl dt { float: left; width: 58px; }
    .goods-spec dl dd { float: left; }
    .goods-spec .name { padding: 15px 20px; font: 500 16px/20px "Microsoft Yahei"; color: #333; text-overflow: ellipsis; white-space: nowrap; display: block; overflow: hidden; }
    .goods-spec .price { color: #666; background: #fafafa; padding: 15px 20px; }
    .goods-spec .price .goods-price { color: #ff6700; }
    .goods-spec .price .mark-price { color: #999; }
    .goods-spec .opts { padding: 15px 20px 0; overflow: hidden; }
    .goods-spec .opts dl { margin-bottom: 10px; }
    .goods-spec .opts ul li { float: left; margin-right: 6px; margin-bottom: 6px; position: relative; }
    .goods-spec .opts ul li a { display: block; border: 2px solid #b9b9b9; margin: 0; line-height: 20px; color: #000; background-color: #fff; text-align: center;min-width: 20px; height: 24px; padding: 0 5px; cursor: pointer; }
    .goods-spec .opts ul li.on a, .goods-spec .opts ul li:hover a { border-color: #ff6700; }
    .goods-spec .opts ul li a img { display: inline-block; max-width: 20px; max-height: 20px; margin-right: 5px; }
    .goods-spec .opts ul li i { font-size: 0; line-height: 0; display: none; width: 11px; height: 11px; position: absolute; z-index: 1; right: 2px; bottom: 2px; }
    .goods-spec .opts ul li.on i, .goods-spec .opts ul li:hover i { display: block; }
    .goods-spec .opts .figure dd { margin-top: 4px; }
    .goods-spec .opts .figure a { float: left;font-size: 18px; width: 20px; height: 20px; line-height: 20px; text-align: center; display: inline-block; border: solid #E6E9EE; }
    .goods-spec .opts .figure a.decrease { border-width: 1px 0 1px 1px; }
    .goods-spec .opts .figure a.increase { border-width: 1px 1px 1px 0; }
    .goods-spec .opts .figure .input-text { color: #333; font-family: Tahoma; text-align: center; width: 32px; height: 20px; line-height: 20px; padding: 0; float: left; border: 1px solid #E6E9EE; }
    .goods-spec .opts .figure span { white-space: nowrap; z-index: 1; line-height: 22px; float: left; margin-left: 12px; }
    .goods-spec .opts .figure span strong { color: #ff6700; margin: 0 2px; }
    .goods-spec-pic { width: 240px; height: 240px; float: right; position: relative; text-align: center; line-height: 240px; }
    .goods-spec-pic img { max-width: 100%; max-height: 100%; }
    .goods-spec .details { text-align: center }
    .goods-spec .details > a { display: block; margin-bottom: 15px; background-color: #f0f0f0; text-align: center; font-size: 16px; padding: 10px 0; }
    .goods-spec .details > a:hover { background-color: #ddd; color: #ff6700 }
    .goods-spec .details img { max-width: 100%; }

    .goods-spec .button { padding: 15px 20px; text-align: right; font-size: 0; }
    .goods-spec .button a.btn { font-size: 16px; padding: 8px 15px; margin-left: 10px; background-color: #d3d3d3; border-radius: 3px; color: #fff; display: inline-block; }
    .goods-spec .button a.on { background-color: #ff6700; }
</style>

<template>
    <div id="goodsSpec" class="goods-spec">
        <div class="goods-spec-wrap">
            <div class="goods-spec-info">
                <div class="name">{{ spec_detail.goods_name }}</div>
                <div class="price">
                    <template v-if="category == 'zhucai'">
                        <dl>
                            <dt>市场价</dt>
                            <dd class="mark-price"><del>{{ '￥' + spec_detail.goods_marketprice }}</del></dd>
                        </dl>
                        <dl>
                            <dt>增减价</dt>
                            <dd class="goods-price">{{ '￥' + (spec_detail.goods_floatingprice > 0 ? '+' + spec_detail.goods_floatingprice : spec_detail.goods_floatingprice) }}</dd>
                        </dl>
                    </template>
                    <template v-else>
                        <dl>
                            <dt>市场价</dt>
                            <dd class="mark-price" v-if="view_sale_price == 1"><del>{{ '￥' + spec_detail.goods_marketprice }}</del></dd>
                            <dd class="goods-price" v-else>{{ '￥' + spec_detail.goods_marketprice }}</dd>
                        </dl>
                        <dl  v-if="view_sale_price == 1">
                            <dt>零售价</dt>
                            <dd class="goods-price">{{ '￥' + spec_detail.goods_price }}</dd>
                        </dl>
                    </template>
                </div>
                <div class="opts">
                    <dl v-for="(list, index) in specs.list" v-if="!isEmpty(specs)">
                        <dt>{{ list.spec_name }}</dt>
                        <dd>
                            <ul>
                                <li v-for="spec in list.spec_value" :class="{on: spec_sign_list[index][spec.valid]}" @click="toggleSpec(index, spec.valid)"><a href="javascript:void(0)"><img :src="spec.img" v-if="spec.img">{{spec.title}}<i></i></a></li>
                            </ul>
                        </dd>
                    </dl>
                    <!--<dl class="figure">
                        <dt>数量</dt>
                        <dd>
                            <a href="javascript:void(0)" class="decrease" @click="num&#45;&#45;">-</a>
                            <input type="text" name="" id="quantity" :value="num" v-model="num" size="3" maxlength="6" class="input-text">
                            <a href="javascript:void(0)" class="increase" @click="num++">+</a>
                            <span>库存：<strong>{{ spec_detail.goods_storage }}</strong>件</span>
                        </dd>
                    </dl>-->
                </div>
            </div>
            <div class="goods-spec-pic">
                <img :src="spec_detail.goods_image_middle">
            </div>
        </div>
        <div class="details">
            <a href="javascript:void(0);" @click="getGoodsDetails">
                详情 <i class="fa" :class="[details_show ? 'fa-angle-up' : 'fa-angle-down']"></i>
            </a>
            <div v-show="details_show" v-html="goods_details"></div>
            <div v-loading="loading"></div>
        </div>
    </div>
</template>