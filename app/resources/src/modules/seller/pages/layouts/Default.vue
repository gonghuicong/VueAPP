<script type="text/babel">
import Vue from 'vue';
import 'normalize.css';
import 'element-theme-default';
import ElementUI from 'element-ui';
Vue.use(ElementUI); // 引入 element-ui

import isEmpty from 'lodash/isEmpty';
import { mapState, mapActions, mapGetters } from 'vuex';
import { LOAD_MENU, LOAD_USER, LOAD_STORE, SET_CURRENT_MENU } from '../../store';

export default {
    data () {
        return {
            G: window.G,
            isEmpty
        }
    },
    created: function() {
        this.loadMenu();
//        this.loadUser();
        this.loadStore();
    },
    computed: {
        ...mapGetters({
            layout: 'layout'
        }),
        ...mapState({
            page (state) {
                return state.seller.page;
            },
            menus (state) {
                return state.seller.menu;
            },
            user (state) {
                return state.seller.user;
            },
            store (state) {
                return state.seller.store;
            }
        })
    },
    methods: mapActions({
        loadMenu: LOAD_MENU,
        loadUser: LOAD_USER,
        loadStore: LOAD_STORE,
        setCurrentMenu: SET_CURRENT_MENU,
    })
};
</script>

<template>
    <div id="root">
        <template v-if="layout">
            <router-view></router-view>
        </template>
        <template v-else>
            <header class="wwist-head-layout">
                <div class="topbar">
                    <div class="wwist-admin">
                        <dl class="wwist-admin-info">
                            <dt class="admin-avatar"><img src="" width="32" class="pngFix" alt=""></dt>
                            <dd class="admin-permission">当前用户</dd>
                            <dd class="admin-name">123</dd>
                        </dl>
                        <div class="wwist-admin-function">
                            <a :href="G.baseUrl + '/mall/t-12.html'" title="前往店铺"><i class="fa fa-home"></i></a>
                            <a :href="G.baseUrl + '/member/index.php?app=member_security&wwi=auth&type=modify_pwd'" title="修改密码" target="_blank"><i class="fa fa-wrench"></i></a>
                            <a :href="G.baseUrl + '/mall/index.php?app=seller_logout&wwi=logout'" title="安全退出"><i class="fa fa-sign-out"></i></a>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="center-logo">
                        <a href="http://yjs5.com/mall" target="_blank">
                            <img src="http://s.youjhome.com/mall/common/05275102499218556.png" class="pngFix" alt="">
                        </a>
                    </div>
                    <nav class="wwist-nav">
                        <dl v-for="(menu, key) in menus">
                            <dt><a :href="menu.url || 'javascript:;'">{{menu.name}}</a></dt>
                            <dd v-if="!isEmpty(menu.child)">
                                <ul :data-type="key">
                                    <li v-for="(childMenu, index) in menu.child">
                                        <a :href="childMenu.url" v-if="childMenu.url"> {{childMenu.name}} </a>
                                        <router-link @click="setCurrentMenu(index, key)" v-else></router-link>
                                    </li>
                                </ul>
                            </dd>
                            <dd class="arrow" v-else></dd>
                        </dl>
                    </nav>
                </div>
            </header>
            <div class="wwist-layout wrapper">
                <div id="layoutLeft" class="wwist-layout-left">
                    <div class="sidebar" id="sidebar">
                        <template v-if="menus[page.currentMenu] && !isEmpty(menus[page.currentMenu]['child'])">
                            <div class="column-title" id="main-nav"><span :class="'ico-' + page.currentMenu"></span>
                                <h2>{{ menus[page.currentMenu]['name'] }}</h2>
                                <h4>{{ page.currentMenu }}</h4>
                            </div>
                            <div class="column-menu">
                                <ul id="seller_center_left_menu" v-if="menus[page.currentMenu] && !isEmpty(menus[page.currentMenu]['child'])">
                                    <li v-for="menu in menus[page.currentMenu]['child']" style="display: block;">
                                        <a :href="menu.url"> {{ menu.name }} </a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </div>
                </div>
                <div id="layoutRight" class="wwist-layout-right">
                    <div class="wwist-path">
                        <i class="fa fa-desktop"></i>商家管理中心
                        <template v-if="menus[page.currentMenu]">
                            <i class="fa fa-angle-right"></i>{{ menus[page.currentMenu]['name'] }}
                            <template v-if="menus[page.currentMenu]['child'][page.currentSubmenu]">
                                <i class="fa fa-angle-right"></i>{{ menus[page.currentMenu]['child'][page.currentSubmenu]['name'] }}
                            </template>
                        </template>
                    </div>
                    <div class="main-content" id="mainContent">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<style>
    body { background-color: #f6f7f8; }
    /* 商家后台通用样式 */
    a { color: #666; text-decoration: none; }
    a:hover { color: #ff6801; }

    /* element-ui */
    .el-pagination {text-align: center;}

    /*---- 商家中心头部区域 ----*/
    /* 头部布局 */
    .wwist-head-layout { position: fixed; z-index: 2; top: 0; width: 100%; height: 90px; zoom: 1; }
    .wwist-head-layout .wrapper { display: block; background-color: #0E90D2; height: 50px; }
    .wwist-head-layout .topbar { display: block; background-color: #444; width: 100%; height: 40px; }
    /* 头部LOGO、标题 */
    .wwist-head-layout .center-logo { float: left; display: block; width: 220px; height: 50px; padding-left: 10px; }
    /* 头部导航条 */
    .wwist-head-layout .wwist-nav { font-size: 0; height: 50px; float: left; margin-left: 40px; }
    .wwist-head-layout .wwist-nav dl { vertical-align: top; letter-spacing: normal; word-spacing: normal; display: inline-block; text-align: center; position: relative; z-index: 2; zoom: 1; margin-bottom: 0; }
    .wwist-head-layout .wwist-nav dl:hover { z-index: 3; }
    .wwist-head-layout .wwist-nav dl dt { text-align: center; height: 50px; }
    .wwist-head-layout .wwist-nav dl dt a { position: relative; display: block; height: 50px; padding: 0 20px; font: normal 16px/50px "microsoft yahei"; color: #C3E3F4; text-decoration: none; }
    .wwist-head-layout .wwist-nav dl:hover dt { background-color: #F0F8FC; }
    .wwist-head-layout .wwist-nav dl:hover dt a { color: #0B76AC !important; text-shadow: none; }
    .wwist-head-layout .wwist-nav dl:hover dt a:hover { text-decoration: none; color: #0B76AC; }
    .wwist-head-layout .wwist-nav dl.current dt a { background-color: #0B76AC; font-weight: bold; color: #FFF; }
    .wwist-head-layout .wwist-nav dl.current:hover dt a { background-color: #F0F8FC; }
    .wwist-head-layout .wwist-nav dl dd { background-color: #F0F8FC; display: none; margin-left: 0; border-style: none solid solid; border-color: transparent #0E90D2 #0E90D2; border-width: 0 1px 1px; position: absolute; z-index: 2; top: 50px; left: -1px; box-shadow: 4px 4px 0 rgba(0,0,0,0.08); }
    .wwist-head-layout .wwist-nav dl:hover dd{ display: block; }
    .wwist-head-layout .wwist-nav dl.current dd.arrow { font-size: 0; line-height: 0; background-color: transparent; display: block; width: 0; height: 0; margin-left: -6px; border-width: 6px; border-color: transparent transparent #F0F8FC transparent; border-style: dashed dashed solid dashed; position: absolute; z-index: 1; top: 38px; left: 50%; box-shadow: none; }
    .wwist-head-layout .wwist-nav dl.current:hover dd.arrow { border-color: transparent transparent #F0F8FC transparent; }
    .wwist-head-layout .wwist-nav dl dd ul { padding: 0; margin: 0; border: 0; }
    .wwist-head-layout .wwist-nav dl dd ul li  { display: block; clear: both; }
    .wwist-head-layout .wwist-nav dl dd ul li a { font: 12px/24px "microsoft yahei"; color: #0B76AC; text-align: left; white-space: nowrap; display: block; clear: both; padding: 4px 12px; }
    .wwist-head-layout .wwist-nav dl dd ul li a:hover { text-decoration: none; color: #FFF; background-color: #0E90D2; }
    /* 头部管理员身份 */
    .wwist-head-layout .wwist-admin { width: 120px; height: 72px; float: right; }
    .wwist-head-layout .wwist-admin-info { width: 108px; height: 32px; margin: 4px 6px 3px 6px; position: relative; z-index: 1; }
    .wwist-head-layout .wwist-admin-info .admin-avatar { background-color: #FFF; width: 32px; height: 32px; }
    .wwist-head-layout .wwist-admin-info .admin-permission { margin-left: 0; font-size: 12px; font-weight: 600; line-height: 16px; color: #EDAA97; text-overflow: ellipsis; white-space: nowrap; width: 72px; height: 16px; position: absolute; z-index: 1; top: -1px; left: 36px; overflow: hidden; }
    .wwist-head-layout .wwist-admin-info .admin-name { margin-left: 0; line-height: 16px; color: #FFF; text-overflow: ellipsis; white-space: nowrap; width: 72px; height: 16px; position: absolute; z-index: 1; top: 17px; left: 36px; overflow: hidden; }
    .wwist-head-layout .wwist-admin-function { font-size: 0; padding: 5px; }
    .wwist-head-layout .wwist-admin-function a { font-size: 14px; color: #FFF; vertical-align: top; letter-spacing: normal; word-spacing: normal; display: inline-block; margin: 5px 9px 0 11px; width: 16px; height: 16px; opacity: .65; }
    .wwist-head-layout .wwist-admin-function a em { font: bold 10px/10px Arial; color: #DA542E; background-color: #FFF; text-align: center; min-width: 10px; height: 10px; padding: 2px; border-radius: 5px; position: absolute; z-index: auto; top: -6px; left: 12px; opacity: 1 !important; }
    .wwist-head-layout .wwist-admin-function a:hover { text-decoration: none; opacity: 1; }
    .wwist-head-layout .wwist-admin-function a i { font-size: 1.2em; }

    /* 商家中心内容区域
------------------------------------------- */
    /* 店铺关闭 */
    .store-closed { background:rgba(218,84,46,0.1); width: 100%; padding: 20px; border-bottom: solid 2px #DA542E; }
    .store-closed i { font-size: 48px; color: #DA542E; vertical-align: middle; display: inline-block; margin-right: 20px; }
    .store-closed dl { vertical-align: middle; display: inline-block; }
    .store-closed dt { font: 20px/20px "microsoft yahei"; color: #000; height: 20px; margin-bottom: 4px; }
    .store-closed dd { font: 12px/18px "microsoft yahei"; color: #555; height: 18px; }
    /* 布局 */
    .wwist-layout { overflow: hidden; margin-top: 90px; }
    .wwist-layout-left { position: fixed; z-index: 1; top: 110px; bottom: 10px; left: 0; width: 218px; border-right: solid 1px #E6E6E6; box-shadow: 1px 0 0 rgba(255,255,255,0.75); }
    .wwist-layout-right {  z-index: 1; padding-left: 220px; }
    /* 内容其余左侧边栏 */
    .wwist-layout-left .sidebar { width: 100%; overflow: hidden; }
    .wwist-layout-left .sidebar .column-title { width: 72px; height: 110px; float: left; margin: 0 0 0 10px; text-transform:capitalize; }
    .wwist-layout-left .sidebar .column-title span { display: block; width: 64px; height: 64px; }
    .wwist-layout-left .sidebar .column-title .ico-index { background-position:0 -30px; }
    .wwist-layout-left .sidebar .column-title .ico-goods { background-position: -128px -100px; }
    .wwist-layout-left .sidebar .column-title .ico-order { background-position: -128px -170px; }
    .wwist-layout-left .sidebar .column-title .ico-promotion { background-position: -64px -100px; }
    .wwist-layout-left .sidebar .column-title .ico-store { background-position: -64px -30px; }
    .wwist-layout-left .sidebar .column-title .ico-message { background-position: 0 -100px; }
    .wwist-layout-left .sidebar .column-title .ico-statistics { background-position: -192px -30px; }
    .wwist-layout-left .sidebar .column-title .ico-consult { background-position: -128px -30px; }
    .wwist-layout-left .sidebar .column-title .ico-account { background-position: 0 -170px; }
    .wwist-layout-left .sidebar .column-title .ico-shopwwi { background-position: -64px -170px; }
    .wwist-layout-left .sidebar .column-title h2 { font-family: "microsoft yahei"; font-size: 20px; line-height: 20px; font-weight: lighter; color: #0D90D2; margin-top: 6px; margin-bottom: 0; }
    .wwist-layout-left .sidebar .column-title h4 { font: 10px/16px Tahoma; color: #444; margin: 0; }
    .wwist-layout-left .sidebar .column-menu { position: relative; z-index: 2; width: 120px; float: right; margin: 0 10px 0 0; padding: 20px 0 0; }
    .wwist-layout-left .sidebar .column-menu ul { display: block; overflow: hidden; }
    .wwist-layout-left .sidebar .column-menu li { display: block; clear: both; margin: 2px 0; }
    .wwist-layout-left .sidebar .column-menu li a { line-height: 28px; color: #666; display: block; height: 28px; padding: 0 0 0 10px; }
    .wwist-layout-left .sidebar .column-menu li a:hover { color: #27A9E3; text-decoration: none; }
    .wwist-layout-left .sidebar .column-menu li.current a { font-weight: 600; line-height: 28px; color: #FFF; background-color: #0E90D2; border-left: solid #0B76AC 3px; }
    .wwist-layout-left .sidebar .add-quickmenu { padding-top: 15px; margin: 15px 20px 0 0; border-top: dashed 1px #DDD; }
    .wwist-layout-left .sidebar .add-quickmenu a { font-size: 12px; line-height: 30px; color: #27A9E3; background-color: #FFF; text-align: center; display: block; height: 30px; border: solid 1px #27A9E3; box-shadow: 3px 3px 0 rgba(204,204,204,0.2); }
    .wwist-layout-left .sidebar .add-quickmenu a i { margin-right: 4px; }
    .wwist-layout-left .sidebar .add-quickmenu a:hover { text-decoration: none; color: #FFF; background-color: #27A9E3; }
    /* 内容区域右侧当前位置 */
    .wwist-path { padding: 10px 20px 0 20px; text-align: right; border-bottom: solid 1px #F5F5F5; font-size: 12px; line-height: 20px; color: #555; }
    .wwist-path i { font-size: 12px; color: #999; margin: 0 6px; }
    /* 内容区域右侧默认内容 */
    .wwist-layout-right .main-content { display: block; min-height: 600px; margin: 10px 20px; padding: 15px; border-radius: 3px; background-color: #FFF; }
</style>