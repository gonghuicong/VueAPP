<script type="text/babel">
    import {PaletteButton,Button,MessageBox } from 'mint-ui';
    export default {
        components:{
            [PaletteButton .name]:PaletteButton,
            [Button.name]:Button,
            [MessageBox .name]:MessageBox
        }
    }
</script>

<style lang="scss">
    form{ padding: 0.6rem }
    form span{ width: 20%;display: inline-block }
    form .selectxiaoqu { padding: 2%;width: 70%;border-radius: 6px;margin-left: 5%;opacity: 0.8; }
    form textarea{ resize: none;width:100%; height:100%;border-radius: 2px; }
    form p{margin:0.5rem 0 0.5rem 0;}
    .mint-button--large{ width: 100%;margin: 1rem auto;font-size: 0.7rem;color: #ffffff;background-color: #ff7212;}

</style>

<template>
    <form>
        <span>选择日期</span>
        <select name="selectAge" class="selectxiaoqu">
            <option value="1">A小区名称</option>
            <option value="2">B小区名称</option>
            <option value="3">C小区名称</option>
        </select>
        <p>沟通情况:</p>
        <textarea name="yj" rows="6" placeholder="多行输入">

        </textarea>
        <p>沟通草稿</p>
        <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
                           direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
                           style="left:5px;">
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button>
        <mt-button size="large">提交</mt-button>
    </form>
</template>