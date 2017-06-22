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
    form .selectxiaoqu { padding: 2%;width: 70%;border-radius: 3px;margin-left: 5%;opacity: 0.8; }
    form textarea{ resize: none;width:100%; height:100%;border-radius: 2px; }
    form p{margin:0.5rem 0 0.5rem 0;}
    .mint-button--large{ width: 100%;margin: 1rem auto;font-size: 0.7rem;color: #ffffff;background-color: #ff7212;}
    .proportion input{ padding: 2%;  width: 70%;  font-size: 0.6rem;  border: 1px solid #a8a8a8;  border-radius: 3px;  margin: 0 0 5% 4% }
    .VR input{ padding: 2%;  width: 70%;  font-size: 0.6rem;  border: 1px solid #a8a8a8;  border-radius: 3px;  margin: 4% 0 5% 4% }

</style>

<template>
    <form>
        <div class="proportion">
            <span>面积</span>
            <input type="text" placeholder="100读取客户或客服录入的值">
        </div>
        <span>风格</span>
        <select name="selectAge" class="selectxiaoqu">
            <option value="1">现代风格</option>
            <option value="2">美式风格</option>
            <option value="3">新中式风格</option>
        </select>
        <p>效果图</p>
        <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
                           direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
                           style="left:5px;">
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
            <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button>
        <p>设计说明:</p>
        <textarea name="yj" rows="6" placeholder="多行输入">

        </textarea>
        <div class="VR">
            <span>面积</span>
            <input type="text" placeholder="100读取客户或客服录入的值">
        </div>
        <mt-button size="large">提交</mt-button>
    </form>
</template>