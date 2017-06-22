<script type="text/babel">
    import { Header, Button, Popup, CellSwipe, MessageBox, Spinner } from 'mint-ui';
    import GoodsList from '../../components/package/GoodsList.vue';
    import extend from 'lodash/extend';
    import cloneDeep from 'lodash/cloneDeep';
    import { http } from '../../../../../../utils';
    import { mapState, mapActions } from 'vuex';
    import { LOAD_STORE_INFO, LOAD_PACKAGE, ADD_PACKAGE_USER } from '../../store';

    export default {
        components: {
            [Header.name]: Header,
            [Button.name]: Button,
            [Popup.name]: Popup,
            [CellSwipe.name]: CellSwipe,
            [MessageBox.name]: MessageBox,
            [Spinner.name]: Spinner,
            GoodsList: GoodsList
        },
        data () {
            return {
                store_info: {},

                id: this.$route.params.id,

                template: false,
                select: 0,

                unitTypes:['个', '片', '套', 'm', '㎡', '条'],
                areaTypes:['入户花园', '客厅', '餐厅', '客餐厅', '厨房', '生活阳台', '景观阳台', '卫生间', '公共洗手间', '主卫洗手间', '主卧', '卧室', '卧室1', '卧室2', '卧室3', '其他'],
                defaultLine: {
                    'select': 0,
                    'g_id': 1,
                    'g_pic': '',
                    'g_pic_m': '',
                    'g_name': '',
                    'g_type': '',
                    'g_price': 0,
                    'g_marketprice': 0,
                    'g_floatingprice': 0,
                    'g_installprice': 0,
                    'g_processprice': 0,
                    'g_extraprice': 0,
                    'g_unit': 0,
                    'g_num': 1,
                    'g_usespace': 0,
                    'g_main_material': 0,
                    'g_standard': 0,
                    'g_attachment': '',
                    'g_goods_type': 1
                },
                defaultArea: {
                    select: 0,
                    type: 1,
                    list: []
                },
                package: {
                    user: {
                        name: null,
                        address: null,
                        phone: null,
                        add_time: null,
                    },
                    price: 399, // 套餐价
                    washroomPrice: 7000, // 超配洗手间单价
                    area: 0, // 装修面积
                    washroomNum: 0, // 超配洗手间数量
                    areaList: [
                        {
                            select: 0,
                            type: 1,
                            list: []
                        }
                    ]
                },
                index: {
                    a: null,
                    b: null
                },

                selectGoodsPopupVisible: false,
                goods_type: 1,
                loading: false
            }
        },
        created() {
            this._loadStoreInfo();
            this._loadPackageById(this.id);
        },
        computed: {
            cpxsj () {
                return this._toInt(this.package.washroomNum) * this._toFloat(this.package.washroomPrice);
            },
            // 套餐增减小计
            tczjxj () {
                var result = 0.00;
                this._mapLine(function(l) {
                    if (l.g_goods_type == 1) {
                        if (l.g_main_material == 0) {
                            result += parseFloat(l.g_price) * parseFloat(l.g_num);
                        } else {
                            result += parseFloat(l.g_floatingprice) * parseFloat(l.g_num);
                        }
                    }
                });
                return result.toFixed(2);
            },
            // 零售小计 || 增项小计
            zxxj () {
                var result = 0.00;
                this._mapLine(function(l) {
                    if (l.g_goods_type >= 2) {
                        result += parseFloat(l.g_price ? l.g_price : 0) * parseFloat(l.g_num);
                    }
                });
                return result.toFixed(2);
            },
            // 总价
            zj () {
                return (parseFloat(this.cpxsj) + parseFloat(this.tczjxj) + parseFloat(this.zxxj)).toFixed(2);
            },
            // 市场价
            scj () {
                var price = 0.00;
                this._mapLine(function(l) {
                    if (l.g_id > 0 && l.g_num > 0) {
                        price += parseFloat(l.g_marketprice ? l.g_marketprice : 0) * parseFloat(l.g_num);
                    }
                })
                return price.toFixed(2);
            }
        },
        methods: {
            ...mapActions({
                loadStoreInfo: LOAD_STORE_INFO,
                loadPackage: LOAD_PACKAGE,
                addPackageUser: ADD_PACKAGE_USER,
            }),
            _loadStoreInfo () {
                this.loadStoreInfo()
                    .then(({ data }) => {
                        this.store_info = data.datas.store_info;
                    });
            },
            _loadPackageById (id) {
                this.loading = true;
                this.loadPackage({id: id})
                    .then(({ data }) => {
                        let packages = data.datas.custom.package;
                        if (packages) {
                            this.package = packages;
                        }
                        this.loading = false;
                    });
            },
            _toInt: function(num) {
                num = parseInt(num);
                return num >= 0 ? num : 0;
            },
            _toFloat: function(num) {
                num = parseFloat(num).toFixed(2);
                return num >= 0.00 ? num : 0.00;
            },
            _mapLine: function(cb) {
                for (var i = 0; i < this.package.areaList.length; i++) {
                    for (var n = 0; n < this.package.areaList[i].list.length; n++) {
                        cb(this.package.areaList[i].list[n]);
                    }
                }
            },
            handleBack () {
                this.$router.back();
            },
            addLine (list, val) {
                var line = extend(cloneDeep(this.defaultLine), {'g_goods_type': val});
                list.push(line);
            },
            addArea () {
                this.package.areaList.push(cloneDeep(this.defaultArea));
            },
            changeNum (l) {
                if (!(l.g_num > 0)) {
                    l.g_num = 0;
                }
            },
            addNum (l) {
                l.g_num++;
            },
            decreaseNum (l) {
                if (l.g_num > 0) {
                    l.g_num--;
                }
            },
            deleteArea (i) {
                MessageBox.confirm('确定删除?')
                    .then(action => {
                        this.package.areaList.splice(i, 1);
                    })
                    .catch(() => {});
            },
            deleteList (i, index) {
                MessageBox.confirm('确定删除?')
                        .then(action => {
                    this.package.areaList[i].list.splice(index, 1);
                })
            .catch(() => {});
            },
            selectGoods (l, i, index) {
                this.selectGoodsPopupVisible = true;
                this.goods_type = l.g_goods_type;
                this.index.a = i;
                this.index.b = index;
            },
            onSelectGoods (data) {
                this.selectGoodsPopupVisible = false;
                this.package.areaList[this.index.a].list[this.index.b].g_pic = data.goods_image_small;
                this.package.areaList[this.index.a].list[this.index.b].g_name = data.goods_name;
                this.package.areaList[this.index.a].list[this.index.b].g_id = data.goods_id;
                this.package.areaList[this.index.a].list[this.index.b].g_marketprice = data.goods_marketprice;
                this.package.areaList[this.index.a].list[this.index.b].g_price = data.goods_price;
                this.package.areaList[this.index.a].list[this.index.b].g_floatingprice = data.goods_floatingprice || 0;
                this.package.areaList[this.index.a].list[this.index.b].g_main_material = data.main_material;
            },
            submitTemplate () {

            },
            submitData () {
                this.addPackageUser({
                    params: {
                        id: this.id
                    },
                    data: {
                        package: this.package
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .el-tag { background-color: #8391a5; display: inline-block; padding: 0 5px; height: 20px; line-height: 20px; font-size: 12px; color: #fff; border-radius: 4px; box-sizing: border-box; border: 1px solid transparent; white-space: nowrap;}
    .el-tag.red { background-color: #ED5564; }
    .el-tag.blue { background-color: #5D9CEC; }
    .el-tag.green { background-color: #48CFAE; }
    .btn { -webkit-appearance: none; -moz-appearance: none; appearance: none; border-radius: 4px; border: 0; box-sizing: border-box; background-color: #CCD0D9; color: #fff; display: inline-block; font-size: 12px; padding: 3px 7px; height: 26px; line-height: 20px; text-align: center; vertical-align: middle; outline: 0; overflow: hidden; position: relative; text-align: center; text-decoration: none; }
    .btn-red { background-color: #ED5564; }
    .btn-blue { background-color: #5D9CEC; }
    .btn-green { background-color: #48CFAE; }
    .btn-equa { background-color: #4FC0E8; }
    .input { display: inline-block; border-width: 0 0 1px 0; border-style: solid; border-color: #ddd; outline: none; height: 20px; line-height: 20px; padding: 0; color: #333; font-size: 14px; text-align: center; }

    #user { position: absolute; width: 100%; height: 100%; }
    .package { padding: 40px 0 90px; }
    .package-wrap .package-title select { border: 1px solid #ccc; border-radius: 3px; color: #666; outline: 0; }
    .package-wrap .package-item .item-name { position: relative; width: 100%; line-height: 20px; margin-bottom: 5px; font-size: 14px; word-break: break-all; }
    .package-wrap .package-item .item-name input { width: -moz-calc(100% - 77px); width: -webkit-calc(100% - 77px); width: calc(100% - 77px); float: right; text-align: left; }
    .package-wrap .package-item .item-info { position: relative; width: 100%; }
    .package-wrap .package-item .item-left { width: 70px; height: 70px; background-color: #eee; position: absolute; }
    .package-wrap .package-item .item-right { width: 100%; min-height: 70px; padding-left: 80px; line-height: 20px; font-size: 12px; }
    .package-wrap .package-item .item-right dl { position: relative; overflow: hidden; height: 20px; line-height: 20px; margin-bottom: 5px; }
    .package-wrap .package-item .item-right dl:last-child { margin-bottom: 0; }
    .package-wrap .package-item .item-right dt { position: absolute; width: 36px; text-align: justify; text-align-last:justify; }
    .package-wrap .package-item .item-right dd { margin-left: 50px; color: #ff6700; }
    .package-wrap .package-item .item-price .input { width: 60px; }
    .package-wrap .package-item .item-unit .figure span { display: inline-block; width: 20px; height: 20px; line-height: 20px; text-align: center; display: inline-block; color: #888; border: 1px solid #ddd; border-radius: 3px; }
    .package-wrap .package-item .item-unit .figure .input{ width: 40px; border: none; }
    .package-wrap .package-item .item-unit dd select { border: 1px solid #ddd; border-radius: 3px; color: #666; outline: 0; width: 50px; padding: 0 5px; }
    .package-wrap .package-add { width: 100%; overflow: hidden; text-align: center; padding: 10px; border-bottom: 1px solid #e5e5e5; }
    .package-submit-wrap { text-align: center; padding-top: 10px; }
    .package-submit-wrap .package-submit { text-align: center; padding: 10px; }
    .package-summary { position: fixed; bottom: 0; left: 0; right: 0; background-color: #fff; font-size: 12px; line-height: 20px; }
    .package-summary .package-panel { width: 100%; padding: 10px; border-top: 1px solid #efefef; overflow: hidden; }
    .package-summary .package-panel .wc { float: left; height: 20px; line-height: 20px; margin-bottom: 5px; }
    .package-summary .package-panel .wc .input { font-size: 12px; }
    .package-summary .package-panel .wc i { font-size: 18px; vertical-align: text-top; margin: 0 5px; }
    .package-summary .package-panel .half { width: 50%; float: left; overflow: hidden; }
    .package-summary .package-panel .area .input { width: 30px; font-size: 12px; }

    .goods-list-popup { width: 100%; height: 100%; background-color: #fff; }

    .loading { width: 100%; height: 100%; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: space-between; justify-content: center; }
</style>
<style>
    html, body { width: 100%; height: 100%; }
    .mint-header .mint-button { width: 40px; text-align: inherit; }
    .mint-indicator-wrapper { z-index: 10000; }
    .package-wrap .package-title .mint-cell-value { position: relative; width: 100%; -webkit-justify-content: center; justify-content: center; }
    .package-wrap .mint-cell-wrapper { background-image: none; padding: 10px; border-bottom: 1px solid #e5e5e5; }
    .package-wrap .package-item .mint-cell-wrapper .mint-cell-value { width: 100%; -webkit-flex-direction: column; flex-direction: column; color: #333; }
    .package-wrap .package-item .mint-cell-right .mint-cell-swipe-buttongroup { display: table; }
</style>

<template>
    <div id="user">
        <mt-header fixed :title="store_info.seller_name">
            <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
        </mt-header>
        <div class="loading" v-if="loading">
            <mt-spinner color="#26a2ff" type="fading-circle"></mt-spinner>
            加载中...
        </div>
        <template v-else>
            <div class="package">
                <div class="package-wrap" v-for="(area, i) in package.areaList">
                    <mt-cell-swipe
                            :right="[
                                {
                                    content: '删除',
                                    style: { backgroundColor: 'red', color: '#fff' },
                                    handler: () => deleteArea(i)
                                }
                            ]"
                            class="package-title">
                        <select v-model="area.type">
                            <option v-for="(areaType, key) in areaTypes" :value="key">{{areaType}}</option>
                        </select>
                    </mt-cell-swipe>
                    <mt-cell-swipe
                            :right="[
                                {
                                    content: '删除',
                                    style: { background: 'red', color: '#fff', display: 'table-cell', verticalAlign: 'middle' },
                                    handler: (l) => deleteList(i, index)
                                }
                            ]"
                            class="package-item" v-for="(l, index) in area.list">
                        <div class="item-name" v-if="l.g_goods_type == 3">
                            <span class="el-tag green mr5">自定义商品</span>
                            <input class="input" type="text" v-model="l.g_name" placeholder="请输入商品名称">
                        </div>
                        <div class="item-name" v-else @click="selectGoods(l, i, index)">
                            <span class="el-tag red mr5" v-if="l.g_goods_type == 1">套餐商品</span>
                            <span class="el-tag blue mr5" v-if="l.g_goods_type == 2">普通商品</span>
                            <template v-if="l.g_name">{{l.g_name}}</template>
                            <template v-else><span class="el-tag">点击选择商品</span></template>
                        </div>
                        <div class="item-info">
                            <div v-if="l.g_goods_type == 3" class="item-left"></div>
                            <div v-else class="item-left" @click="selectGoods(l, i, index)">
                                <img :src="l.g_pic" v-if="l.g_pic">
                            </div>
                            <div class="item-right">
                                <dl v-if="l.g_goods_type == 3" class="item-price">
                                    <dt>市场价</dt>
                                    <dd><input class="input" type="text" v-model="l.g_marketprice"></dd>
                                </dl>
                                <dl v-if="l.g_goods_type == 3" class="item-price">
                                    <dt>零售价</dt>
                                    <dd><input class="input" type="text" v-model="l.g_price"></dd>
                                </dl>
                                <dl v-if="l.g_goods_type == 1" class="item-price">
                                    <dt>套餐价</dt>
                                    <dd>
                                        <template v-if="l.g_main_material == 0">{{ l.g_price }}</template>
                                        <template v-else-if="l.g_floatingprice > 0">{{ "+" + l.g_floatingprice }}</template>
                                        <template v-else-if="l.g_floatingprice < 0">{{ l.g_floatingprice }}</template>
                                        <template v-else>{{ l.g_floatingprice }}</template>
                                    </dd>
                                </dl>
                                <dl class="item-unit">
                                    <dt>数量</dt>
                                    <dd class="figure">
                                        <span class="decrease" @click="decreaseNum(l)">-</span>
                                        <input class="input" type="text" v-model="l.g_num" @keyup="changeNum(l)">
                                        <span class="increase" @click="addNum(l)">+</span>
                                    </dd>
                                </dl>
                                <dl class="item-unit">
                                    <dt>单位</dt>
                                    <dd>
                                        <select v-model="l.g_unit">
                                            <option v-for="(unitType, key) in unitTypes" :value="key">{{unitType}}</option>
                                        </select>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </mt-cell-swipe>
                    <div class="package-add">
                        <a href="javascript:void(0);" class="btn btn-red" @click="addLine(area.list, 1)" v-if="template"><i class="icon-level-up"></i>添加套餐商品</a>
                        <a href="javascript:void(0);" class="btn btn-blue" @click="addLine(area.list, 2)"><i class="fa fa-level-up"></i>添加普通商品</a>
                        <a href="javascript:void(0);" class="btn btn-green" @click="addLine(area.list, 3)"><i class="fa fa-level-up"></i>添加自定义商品</a>
                    </div>
                </div>
                <div class="package-submit-wrap">
                    <div class="package-add">
                        <a href="javascript:void(0);" class="btn" @click="addArea">添加房间区域</a>
                    </div>
                    <div class="package-submit">
                        <a href="javascript:void(0);" class="btn btn-green" v-if="template" @click="submitTemplate">提交修改</a>
                        <a href="javascript:void(0);" class="btn btn-equa" v-else @click="submitData">保存到我的装修清单</a>
                    </div>
                </div>
            </div>
            <div class="package-summary">
                <div class="package-panel">
                    <div class="wc">
                        <span>超配洗手间:</span>
                        <input class="input w20" type="text" v-model="package.washroomNum"><i>*</i>
                        <input class="input w40" type="text" v-model="package.washroomPrice"> = ¥ {{cpxsj}}
                    </div>
                    <div class="area fr"><span>装修面积:</span><input class="input" type="text" placeholder="面积" v-model="package.area"> ㎡</div>
                    <div class="half"><span>套餐增减小计:</span> ¥ {{tczjxj}}</div>
                    <div class="half"><span>增项小计:</span> ¥ {{zxxj}}</div>
                    <div class="half"><span>总价:</span> ¥ {{zj}}</div>
                    <div class="half"><span>市场价:</span> ¥ {{scj}}</div>
                </div>
            </div>
        </template>
        <mt-popup v-if="selectGoodsPopupVisible" v-model="selectGoodsPopupVisible" position="bottom" :modal="false" class="goods-list-popup">
            <goods-list :goodsType="goods_type" @closegoodslistpopup="selectGoodsPopupVisible = false" @selectgoods="onSelectGoods"></goods-list>
        </mt-popup>
    </div>
</template>