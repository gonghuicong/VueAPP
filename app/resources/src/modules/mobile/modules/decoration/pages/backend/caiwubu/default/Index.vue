<script type="text/babel">

</script>

<style>
    .designer-comment{width: 35%;height: 50px;font-size:13px;border-radius:0 25px 25px 0;color: #ffffff;margin:5% 0 10% 0;padding-left: 8% }
    .designer-comment .comment{ opacity: 0.8;line-height: 26px; letter-spacing: 3px}
    .search{ width: 100%;border-color:#000;text-align: center;margin: 0 auto;}
    .search input { padding: 5px;width: 96%;font-size: 0.6rem;border: 1px solid #a8a8a8;border-radius: 3px ;}
    .card-list span,.card-list a{ font-size: 0.7rem;text-align: center }
</style>
<template>
    <div class="wrap">
        <div class="designer-comment">

        </div>
        <div class="wrap-align mb20">
            <div class="search"><input type="text" placeholder="搜索设计师 客户 业务员"></div>
        </div>
        <ul class="card-list">
            <li>
                <router-link to="caiwubu/gongchengkuan">
                    <img src="../../../../assets/images/package_logo_02.png">
                    <span>收工程款</span>
                    <a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="caiwubu/gongyingshang">
                    <img src="../../../../assets/images/package_logo_02.png"><span>应付供应商</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="caiwubu/cailiao">
                    <img src="../../../../assets/images/package_logo_02.png"><span>零星材料</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="caiwubu/pay">
                    <img src="../../../../assets/images/package_logo_02.png"><span>工人工资</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="caiwubu/wallet">
                    <img src="../../../../assets/images/package_logo_02.png"><span>公司钱包</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="caiwubu/cost">
                    <img src="../../../../assets/images/package_logo_02.png"><span>运营费用</span><a>11</a>
                </router-link>
            </li>
        </ul>
    </div>
</template>
