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
    .align-img img{ text-align: center;border-radius: 100px ;width: 35%;margin:10px 0 10px 5%;float: left }
    .stylist { width: 65%;font-size: 0.5rem;float: left;line-height: 1.5rem;margin: 16px 0 }
    .stylist span { margin-left:4px  }
    .stylist p { margin-left: 3px }
    .wrap-stylist { padding: 0 0 0 2%;display: inline-block }
    .stylist-search { width: 88%;margin: 0 auto }
    .wrap-exprience { display: inline-block;text-align: center;margin-left: 5% }
    .wrap-exprience span{ opacity: 0.8;font-size: 0.5rem }
    .wrap-assess { width: 100%;display: inline-block; list-style:none; margin: 0; }
    .wrap-assess li { width: 50%;text-align: center; float:left;vertical-align: middle; }
    .wrap-assess li p { opacity: 0.8;font-size: 0.5rem }
    .manager-nav { width:100%;display: inline-block;text-align: center;margin-bottom: 3rem }
    .manager-down img { width: 15%;float: left }
    .manager-down p { float: left;margin-left: 1.2rem }
    .manager-down { width:85%;margin-bottom:1rem;display: inline-block;  font-size: 15px;  padding: 2%;  height: 2.5rem;   border-radius: 3px;  border: 1px solid #a8a8a8;  text-decoration: none;  color: #000; }
    .manager-down .word ul li { float: left;line-height: 2rem;margin-left: 0.5rem;font-size: 0.6rem }
    .manager-down .word ul{ display: inline-block;width: 77% }
</style>
<template>
    <div class="wrap">
        <div class="stylist-comment">
            <div class="comment">好评率:<span>99.7%</span></div>
            <div class="commentOne">口碑:</div>
        </div>
        <div class="wrap-stylist align-img">
            <img src="../../../../assets/images/recommended_05.png">
        </div>
        <div class="wrap-exprience">
            <p>李建喜</p>
            <span>32岁 从业13年</span>
        </div>
        <ul class="wrap-assess">
            <li>
                <span>48</span>
                <p>项目总数</p>
            </li>
            <li>
                <span>48</span>
                <p>累计评价</p>
            </li>
        </ul>
        <ul class="card-list">
            <li>
                <router-link to="project/customer">
                    <img src="../../../../assets/images/package_logo_02.png"><span>新客户</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="project/daikaigong">
                    <img src="../../../../assets/images/package_logo_02.png"><span>待开工</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="project/shigongzhong">
                    <img src="../../../../assets/images/package_logo_02.png"><span>施工中</span><a>11</a>
                </router-link>
            </li>
            <li>
                <router-link to="project/wangong">
                    <img src="../../../../assets/images/package_logo_02.png"><span>完工客户</span>
                </router-link>
            </li>
        </ul>
        <div class="manager-nav">
            <div class="manager-down">
                <img src="../../../../assets/images/package_logo_02.png">
                <div class="word">
                    <p>材料申购</p>
                    <ul>
                        <li>待批4</li>
                        <li>已批4</li>
                        <li>现金待付4</li>
                        <li>待收货1</li>
                    </ul>
                </div>
            </div>
            <div class="manager-down">
                <img src="../../../../assets/images/package_logo_02.png">
                <div class="word">
                    <p>售后事件</p>
                    <ul>
                        <li>10</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
