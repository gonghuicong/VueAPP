<script type="text/babel">
    import { Cell,Button } from 'mint-ui';
    export default {
        components:{
            [Cell .name]:Cell,
            [Button .name]:Button,
        },
        data(){
            return{
                Show: true
            }
        },
        methods:{
            fn:function () {
                if(this.Show == true){
                    this.Show = false;

                }else {
                    this.Show = true
                }
            }

        }
    }
</script>

<style lang="scss">

</style>

<template>
   <div class="effect">
       <ul class="nav">
           <li>开工</li>
           <li>杂瓦</li>
           <li>水电</li>
           <li>泥工</li>
           <li>木工</li>
           <li class="big">油漆刮瓷</li>
           <li>安装</li>
       </ul>
       <div class="data-plan">
           <div class="click" @click="fn()">
               <mt-cell title="2016-10-12" is-link></mt-cell>
           </div>
           <div v-if="Show"></div>
           <div class="plan" v-else>
               <p>施工内容:.......</p>
               <ul>
                   <li><img src="1"></li>
                   <li><img src="2"></li>
                   <li><img src="3"></li>
               </ul>
           </div>
       </div>
   </div>
</template>