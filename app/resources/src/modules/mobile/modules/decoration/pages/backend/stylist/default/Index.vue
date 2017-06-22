<script type="text/babel">

</script>

<style>
    .stylist-comment{ float:left;display:inline-block;width: 30%;background-color: #ff8713;height: 50px;font-size:13px;border-radius:0 25px 25px 0;color: #ffffff;margin:5% 0 10% 0;padding-left: 3% }
    .stylist-comment .comment{ opacity: 0.8;line-height: 26px; letter-spacing: 1px}
    .commentOne{ letter-spacing: 8px;opacity: 0.8; }
    .search{ width: 100%;border-color:#000;text-align: center;margin: 0 auto;}
    .search input { padding: 5px;width: 96%;font-size: 0.6rem;border: 1px solid #a8a8a8;border-radius: 3px ;}
    .card-list span,.card-list a{ font-size: 0.7rem;text-align: center }
    .align-img { width: 64%;float: left; }
    .align-img img{ text-align: center;border-radius: 100px ;width: 35%;margin:10px 0 10px 0;float: left }
    .stylist { width: 65%;font-size: 0.5rem;float: left;line-height: 1.5rem;margin: 16px 0 }
    .stylist span { margin-left:4px  }
    .stylist p { margin-left: 3px }
    .wrap-stylist { padding: 0 0 0 2%;display: inline-block }
    .stylist-search { width: 88%;margin: 0 auto }
</style>
<template>
    <div class="wrap">
        <div class="stylist-comment">
            <div class="comment">好评率:<span>99.7%</span></div>
            <div class="commentOne">口碑:</div>
        </div>
        <div class="wrap-stylist align-img">
            <img src="../../../../assets/images/recommended_05.png">
            <div class="stylist">
                <p>肖小峰 30岁<span>从业十年</span></p>
                <p>项目总数80<span>累计评价40</span></p>
            </div>
        </div>

        <div class="stylist-search mb20">
            <div class="search"><input type="text" placeholder="搜索设计师 客户 业务员"></div>
        </div>
        <ul class="card-list">
            <li>
                <router-link to="stylist/NewCustomer">
                    <img src="../../../../assets/images/package_logo_02.png">
                    <span>接单</span>
                    <a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="stylist/qianzaikehu">
                    <img src="../../../../assets/images/package_logo_02.png"><span>潜在客户</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="stylist/dingjinkehu">
                    <img src="../../../../assets/images/package_logo_02.png"><span>定金客户</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="stylist/daikaigong">
                    <img src="../../../../assets/images/package_logo_02.png"><span>待开工客户</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="stylist/shigongzhong">
                    <img src="../../../../assets/images/package_logo_02.png"><span>施工中客户</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="stylist/dingjinkehu">
                    <img src="../../../../assets/images/package_logo_02.png"><span>完工客户</span><a>11</a>
                </router-link>
            </li>
        </ul>
    </div>
</template>
