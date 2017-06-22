<script type="text/babel">
    import isEmpty from 'lodash/isEmpty';
    import each from 'lodash/each';
    import { Button, Spinner } from 'mint-ui';
    import { http } from '../../../../../../utils';
    import { mapActions } from 'vuex';
    import { LOAD_GOODS } from '../../store';
    export default {
        props: ['goodsId', 'category', 'viewSalePrice'],
        components: {
            [Button.name]: Button,
            [Spinner.name]: Spinner
        },
        data() {
            return {
                G: G,
                goods: {},
                spec_sign_list: {},
                spec_detail: {},
                goodsBodyShow: false,
                wrapperHeight: null
            };
        },
        created () {
            this.loadGoodsById(this.goodsId);
            this._specsChanged();
        },
        watch: {
            'goods.specs': {
                deep: true,
                handler () {
                    this._specsChanged();
                }
            },
            spec_sign_list: {
                deep: true,
                handler () {
                    this.spec_detail = this._getSpec();
                }
            },
        },
        methods: {
            isEmpty: isEmpty,

            ...mapActions({
                loadGoods: LOAD_GOODS
            }),
            loadGoodsById(id) {
                this.loadGoods({id: id})
                    .then(({ data }) => {
                        this.goods = data.datas;
                    });
            },
            _specsChanged () {
                var that = this;
                var data = {};
                if (!isEmpty(that.goods.specs)) { // 有规格
                    each(that.goods.specs.list, function(list, index) {
                        each(list.spec_value, function(spec, key) {
                            if (!data[index]) {
                                data[index] = {};
                            }
                            data[index][spec.valid] = !!that.goods.specs.current_goods_spec[spec.valid];
                        });
                    });
                }
                that.spec_sign_list = data;
            },
            _getSpec () {
                var that = this;
                if (isEmpty(that.goods.specs)) { // 没有规格
                    return that.goods;
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
                return that.goods.specs.spec_list_api.list[spec_param];
            },
            toggleSpec (index, value) {
                var that = this;
                each(this.spec_sign_list[index], function(list, key) {
                    that.spec_sign_list[index][key] = false;
                });
                that.spec_sign_list[index][value] = !that.spec_sign_list[index][value];
            },
            openGoodsBody () {
                this.goodsBodyShow = !this.goodsBodyShow;
                if (this.goodsBodyShow) {
                    this.wrapperHeight = document.documentElement.clientHeight * 0.8 + 'px';
                } else {
                    this.wrapperHeight = 'auto';
                }
            },
            selectGoodsSpec () {
                if (this.spec_detail) {
                    this.$emit('selectgoodsspec', this.spec_detail);
                } else {
                    alert('请正确选择商品规格');
                }
            }
        }
    }
</script>

<style scoped>
    .goods-spec-wrap { width: 100%; overflow-y: scroll; padding: 10px 10px 60px; }
    .goods-spec-info { display: -webkit-box; display: -ms-flexbox; display: flex;  overflow: hidden; padding-bottom: 10px; }
    .goods-spec-info .spec-left { width: 100px; height: 100px; line-height: 100px; margin-right: 10px; box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15); }
    .goods-spec-info .spec-right { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; font-size: 12px; }
    .goods-spec-info .spec-right dl { position: relative; }
    .goods-spec-info .spec-right dt { position: absolute; width: 45px; }
    .goods-spec-info .spec-right dd { margin-left: 45px; color: #ff6700; }
    .goods-spec-info .spec-right .goods-name { height: 40px; line-height: 20px; white-space: normal; text-overflow: ellipsis; overflow: hidden; }
    .goods-spec-info .spec-right .goods-name span { display: inline-block; padding: 0 10px; margin-right: 5px; text-align: center; height: 20px; font-size: 12px; color: #fff; background-color: #ff6700; border-radius: 4px; box-sizing: border-box; white-space: nowrap; }
    .goods-spec-info .spec-right .price dl { height: 20px; line-height: 20px; }
    .goods-spec-info .spec-right .price .goods_price { color: #ff6700; }
    .goods-spec-info .spec-right .price .mark-price { color: #999; }
    .goods-spec-info .spec-right .goods-unit { line-height: 20px; }
    .goods-spec-info .spec-right .goods-unit dl dd a { display: inline-block; border: 1px solid #b9b9b9; margin: 0 5px 5px 0; color: #000; background-color: #fff; text-align: center; height: 20px; padding: 0 5px; text-decoration: none; overflow: hidden; }
    .goods-spec-info .spec-right .goods-unit dl dd a.on { color: #ff6700; border-color: #ff6700; }
    .goods-spec-info .spec-right .goods-unit dl dd a img { display: inline-block; width: 18px; height: 18px; margin-right: 3px; vertical-align: top; }
    .goods-spec-details { text-align: center }
    .goods-spec-details .details-show { display: block; background-color: #f5f5f5; text-align: center; font-size: 12px; padding: 10px 0; text-decoration: none; }
    .goods-spec-details .details-show.on { background-color: #ff6700; color: #fff; }
    .goods-spec-details img { max-width: 100%; }
    .goods-spec-submit { width: 100%; padding: 10px; background-color: #fff; position: absolute; bottom: 0; }

    .loading { width: inherit; min-height: inherit; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: space-between; justify-content: center; }
</style>

<template >
    <div class="loading" v-if="isEmpty(goods)">
        <mt-spinner color="#26a2ff" type="fading-circle"></mt-spinner>
        加载中...
    </div>
    <div class="goods-spec" v-else>
        <div class="goods-spec-wrap" :style="{ height: wrapperHeight }">
            <div class="goods-spec-info">
                <div class="spec-left"><img :src="spec_detail.goods_image_middle"></div>
                <div class="spec-right">
                    <div class="goods-name">
                        <span>瓷砖</span>{{ spec_detail.goods_name }}
                    </div>
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
                    <div class="goods-unit">
                        <dl v-for="(list, index) in goods.specs.list" v-if="!isEmpty(goods.specs)">
                            <dt>{{ list.spec_name }}</dt>
                            <dd>
                                <a href="javascript:void(0);" v-for="spec in list.spec_value" :class="{on: spec_sign_list[index][spec.valid]}" @click="toggleSpec(index, spec.valid)"><img :src="spec.img" v-if="spec.img">{{spec.title}}</a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="goods-spec-details">
                <a href="javascript:void(0);" class="details-show" :class="{ on: goodsBodyShow }" @click="openGoodsBody()">
                    详情 <i class="fa" :class="[goodsBodyShow ? 'fa-angle-up' : 'fa-angle-down']"></i>
                </a>
                <div v-show="goodsBodyShow" v-html="goods.goods_body" class="mt10"></div>
            </div>
        </div>
        <div class="goods-spec-submit">
            <mt-button type="primary" size="large" @click="selectGoodsSpec">确定</mt-button>
        </div>
    </div>
</template>