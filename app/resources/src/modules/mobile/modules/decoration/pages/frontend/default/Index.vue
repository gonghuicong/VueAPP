<script>
  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    name:'app'
  };
</script>

<style scoped>
  .banner { height: 158px; margin-bottom: 5px; }
  .container { width: 100%; padding: 0 15px; border-top: 1px solid #edf4fb; border-bottom: 1px solid #edf4fb; }
</style>

<template>
  <div>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1"><a href="javascript:void(0);"><img src="../../../assets/images/home/01.jpg"></a></mt-swipe-item>
        <mt-swipe-item class="slide2"><a href="javascript:void(0);"><img src="../../../assets/images/home/01.jpg"></a></mt-swipe-item>
        <mt-swipe-item class="slide3"><a href="javascript:void(0);"><img src="../../../assets/images/home/01.jpg"></a></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="container">

    </div>
  </div>
</template>
