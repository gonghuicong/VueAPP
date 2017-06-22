<script type="text/babel">

</script>

<style>
  .manager-comment{width: 35%;background-color: #ff8713;height: 50px;font-size:13px;border-radius:0 25px 25px 0;color: #ffffff;margin:5% 0 10% 0;padding-left: 8% }
  .manager-comment .comment{ opacity: 0.8;line-height: 26px; letter-spacing: 3px}
  .commentOne{ letter-spacing: 12px;opacity: 0.8; }
  .search{width: 100%;border-color:#000;text-align: center;margin: 0 auto;}
  .search input {padding: 5px;width: 96%;font-size: 0.6rem;border: 1px solid #a8a8a8;border-radius: 3px;}
  .card-list span,.card-list a{font-size: 0.7rem;text-align: center }
  .card-list .manager-approval,.card-list .manager-thing  { width: 100% }
  .wrap .card-list .manager-approval img,.wrap .card-list .manager-thing img { width:13% }
  .wrap .card-list .manager-approval .word1 { display: inline-block }
  .manager-nav { width:100%;display: inline-block;text-align: center }
  .manager-down img { width: 15%;float: left }
  .manager-down p { float: left;margin-left: 1.6rem }
  .manager-down { width:85%;margin-bottom:1rem;display: inline-block;  font-size: 15px;  padding: 2%;  height: 2.5rem;   border-radius: 3px;  border: 1px solid #a8a8a8;  text-decoration: none;  color: #000; }
  .manager-down .word ul li { float: left;line-height: 2rem;margin-left: 0.5rem }
  .manager-down .word ul{ display: inline-block;width: 70% }
  .stylist { width: 65%;font-size: 0.5rem;float: left;line-height: 1.5rem;margin: 16px 0 }
  .stylist span { margin-left:4px  }
  .stylist p { margin-left: 3px }
  .wrap-stylist { padding: 0 0 0 2%;display: inline-block }
  .stylist-search { width: 88%;margin: 0 auto }
</style>
<template>
  <div class="wrap">
    <div class="manager-comment">
      <div class="comment">好评率:<span>99.7%</span></div>
      <div class="commentOne">口碑:</div>
    </div>
    <div class="wrap-align mb20">
      <div class="search"><input type="text" placeholder="搜索设计师 客户 业务员"></div>
    </div>
    <ul class="card-list">
      <li>
        <router-link to="manager/customer">
          <img src="../../../../assets/images/package_logo_02.png">
          <span>派单</span>
          <a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="manager/qianzaikehu">
          <img src="../../../../assets/images/package_logo_02.png"><span>待开工</span><a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="manager/dingjinkehu">
          <img src="../../../../assets/images/package_logo_02.png"><span>施工中</span><a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="manager/daikaigong">
          <img src="../../../../assets/images/package_logo_02.png"><span>完工客户</span><a>11</a>
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
           </ul>
        </div>
      </div>
      <div class="manager-down">
        <img src="../../../../assets/images/package_logo_02.png">
        <div class="word">
          <p>售后事件</p>
          <ul>
            <li>待安排4</li>
            <li>已安排3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
