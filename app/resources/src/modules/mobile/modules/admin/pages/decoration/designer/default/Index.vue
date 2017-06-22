<script type="text/babel">

</script>

<style>
  .designer-comment{width: 30%;background-color: #ff8713;height: 50px;font-size:13px;border-radius:0 25px 25px 0;color: #ffffff;margin:5% 0 10% 0;padding-left: 8% }
  .designer-comment .comment{ opacity: 0.8;line-height: 26px; letter-spacing: 3px}
  .commentOne{ letter-spacing: 12px;opacity: 0.8; }
</style>
<template>
  <div class="wrap">
    <div class="designer-comment">
      <div class="comment">好评率:<span>99.7%</span></div>
      <div class="commentOne">口碑:</div>
    </div>
    <div class="wrap-align mb20">
      <div class="search"><input type="text" placeholder="搜索设计师 客户 业务员"></div>
    </div>
    <ul class="card-list">
      <li>
        <router-link to="designer/paidan">
          <img src="aa"><span>派单</span><a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="designer/qianzaikehu">
          <img src="aa"><span>潜在客户</span><a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="designer/dingjinkehu">
          <img src="aa"><span>定金客户</span><a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="designer/daikaigong">
          <img src="aa"><span>待开工客户</span><a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="designer/shigongzhong">
          <img src="aa"><span>施工中客户</span><a>11</a>
        </router-link>
      </li>
      <li>
        <router-link to="designer/dingjinkehu">
          <img src="aa"><span>完工客户</span><a>11</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
