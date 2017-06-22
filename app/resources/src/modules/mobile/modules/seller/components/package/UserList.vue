<script type="text/babel">
    import { InfiniteScroll, CellSwipe, MessageBox, Spinner } from 'mint-ui';
    import mapValues from 'lodash/mapValues';
    import { http } from '../../../../../../utils';
    import { mapActions } from 'vuex';
    import { LOAD_PACKAGE, DEL_PACKAGE_USER } from '../../store';

    export default {
        components: {
            [InfiniteScroll.name]: InfiniteScroll,
            [CellSwipe.name]: CellSwipe,
            [MessageBox.name]: MessageBox,
            [Spinner.name]: Spinner,
        },
        data () {
            return {
                package_list: [],
                total_page: 1,
                curpage: null,
                wrapperHeight: 0,
                loading: false
            }
        },
        created() {
            this.loadMore();
        },
        mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - 40;
        },
        methods: {
            ...mapActions({
                loadPackage: LOAD_PACKAGE,
                delPackageUser: DEL_PACKAGE_USER,
            }),
            loadMore () {
                this.loading = true;
                if (this.total_page > this.curpage) {
                    this.curpage++;
                    this._loadPackage(this.curpage);
                } else {
                    this.loading = false;
                }
            },
            _loadPackage (curpage) {
                this.loadPackage({ curpage: curpage })
                    .then(({ data }) => {
                        let datas = data.datas;
                        this.total_page = datas.total_page;
                        mapValues(datas.list, (goods) => {
                            this.package_list.push(goods);
                        })
                        this.loading = false;
                    });
            },
            deletePackageList (id) {
                MessageBox.confirm('确定删除？')
                    .then(action => {
                        this.delPackageUser({ id: id })
                            .then(({ data }) => {
                                this.loading = true;
                                this.package_list = [];
                                this._loadPackage(this.curpage);
                            });
                    })
                    .catch(() => {});
            },
            loadUser (id) {
                this.$router.push('/m/seller/package/user/' + id);
            }
        }
    }
</script>

<style scoped>
    #userList { padding-top: 40px; }
    .page-infinite-wrapper { overflow: scroll; }
    .no-list { text-align: center; padding-top: 50px; }
</style>
<style>
    .package-item .mint-cell-wrapper { background-image: none; }
    .package-item .mint-cell-right { z-index: 1; }
    .package-item .mint-cell-value { width: 100%; position: relative; color: inherit; display: block; }
    .package-item .mint-cell-value .mint-cell-label { overflow: hidden; text-overflow: ellipsis; white-space: normal; word-break: break-all; }
    .package-item .mint-cell-allow-right:after { -webkit-box-sizing: content-box; box-sizing: content-box; }
    .page-infinite-loading { text-align: center; height: 50px; line-height: 50px; }
    .page-infinite-loading div { display: inline-block; vertical-align: middle; margin-right: 5px; }

    .mint-msgbox-wrapper { z-index: 5000!important; }
</style>

<template>
    <div id="userList">
        <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                <li v-for="list in package_list" @click="loadUser(list.id)" class="package-item">
                    <mt-cell-swipe
                            is-link
                            :right="[
                                {
                                    content: '删除',
                                    style: { background: 'red', color: '#fff' },
                                    handler: () => deletePackageList(list.id)
                                }
                            ]"
                            >
                        <span class="mint-cell-text">{{ list.name }}</span>
                        <span class="mint-cell-label">电话：{{ list.phone }}&nbsp;&nbsp;地址：{{ list.address }}</span>
                    </mt-cell-swipe>
                </li>
            </ul>
            <p v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
                加载中...
            </p>
            <div v-if="!loading && package_list==0" class="no-list">没有找到您的客户模板！</div>
        </div>

    </div>
</template>