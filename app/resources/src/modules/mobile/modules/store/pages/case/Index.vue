<script type="text/babel">
    import { Header, Button, InfiniteScroll, CellSwipe, MessageBox, Spinner, Popup } from 'mint-ui';
    import mapValues from 'lodash/mapValues';
    import { http } from '../../../../../../utils';
    import { mapActions } from 'vuex';
    import { LOAD_ACTIVE_LIST } from '../../store';
    import ActiveContent from '../../components/ActiveContent.vue';

    export default {
        components: {
            [Header.name]: Header,
            [Button.name]: Button,
            [InfiniteScroll.name]: InfiniteScroll,
            [CellSwipe.name]: CellSwipe,
            [MessageBox.name]: MessageBox,
            [Spinner.name]: Spinner,
            [Popup.name]: Popup,
            ActiveContent: ActiveContent
        },
        data () {
            return {
                active_list: [],
                total_page: 1,
                curpage: null,
                wrapperHeight: 0,
                loading: false,
                activeContentPopupVisible: false,
                active_content: [],
                store_id: this.$route.params.id
            }
        },
        created () {
            this.loadMore();
        },
        mounted () {
            this.wrapperHeight = document.documentElement.clientHeight - 40;
        },
        methods: {
            handleBack () {
                this.$router.back();
            },
            ...mapActions({
                loadActiveList: LOAD_ACTIVE_LIST,
            }),
            loadMore () {
                this.loading = true;
                if (this.total_page > this.curpage) {
                    this.curpage++;
                    this._loadActiveList(this.curpage);
                } else {
                    this.loading = false;
                }
            },
            _loadActiveList (curpage) {
                this.loadActiveList({ store_id: this.store_id, curpage: curpage })
                    .then(({ data }) => {
                        let datas = data.datas;
                        this.total_page = datas.total_page;
                        mapValues(datas.active_list, (goods) => {
                            this.active_list.push(goods);
                        })
                        this.loading = false;
                    });
            },
            handleActiveContent (index) {
                this.activeContentPopupVisible = true;
                this.active_content = this.active_list[index];
            }
        }
    }
</script>

<style scoped>
    #case { width: 100%; height: 100%; padding-top: 40px; }
    .page-infinite-wrapper { overflow: scroll; }
    .no-list { text-align: center; padding-top: 50px; }
    .active-item { display: -webkit-box; display: -ms-flexbox; display: flex; padding: 10px; border-bottom: 1px solid #ececec; }
    .active-item .item-left { width: 65px; height: 65px; margin-right: 10px; }
    .active-item .item-right { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; }
    .active-item .item-right .active-name { height: 20px; line-height: 20px; margin-bottom: 5px; white-space: normal; text-overflow: ellipsis; overflow: hidden; word-break: break-all; }
    .active-item .item-right .active-info { height: 40px; line-height: 20px; font-size: 14px; color: #888; white-space: normal; text-overflow: ellipsis; overflow: hidden; word-break: break-all; }
    .active-content { width: 100%; height: 100%; overflow-x: hidden; overflow-y: scroll; }
</style>
<style>
    .page-infinite-loading { text-align: center; height: 50px; line-height: 50px; }
    .page-infinite-loading div { display: inline-block; vertical-align: middle; margin-right: 5px; }
</style>

<template>
    <div id="case">
        <mt-header title="案例" fixed>
            <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
        </mt-header>
        <div class="page-infinite-wrapper" :style="{ height: wrapperHeight + 'px' }">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                <li v-for="(list, index) in active_list" class="active-item" @click="handleActiveContent(index)">
                    <div class="item-left"><img :src="list.active_img"></div>
                    <div class="item-right">
                        <div class="active-name">{{ list.active_name }}</div>
                        <div class="active-info">{{ list.active_des }}</div>
                    </div>
                </li>
            </ul>
            <p v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
                加载中...
            </p>
            <div v-if="!loading && active_list==0" class="no-list">没有找到您的客户模板！</div>
        </div>

        <mt-popup v-if="activeContentPopupVisible" v-model="activeContentPopupVisible" position="right" class="active-content">
            <mt-header :title="active_content.active_name" fixed>
                <mt-button icon="back" slot="left" @click="activeContentPopupVisible = !activeContentPopupVisible"></mt-button>
            </mt-header>
            <active-content :activeContent="active_content"></active-content>
        </mt-popup>
    </div>
</template>