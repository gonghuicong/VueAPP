<script type="text/babel">
    import { Field,Button } from 'mint-ui'
    export default{
        components: {
            [Field.name]:Field,
            [Button.name]:Button
        }
    }
</script>

<style>
    input {width: 80%;padding: 2%;margin-top: 1rem;}
    .selectxiaoqu,.selecthuxing,.selectPeople,.selectaction{width: 85%;padding: 2%;margin-top: 1rem;}
    .luru-add{text-align: center;margin-bottom: 3rem}
    .mint-cell-wrapper{margin-top: 1rem;}
    .mint-button--large{width: 90%;font-size: 0.7rem;color: #ffffff;background-color: #ff7212;margin: auto 1rem 0 1rem}
    textarea{ resize: none;width:85%; height:100%;margin-top: 0.5rem; }
</style>

<template>
    <div class="luru-add">
        <form>
            <input type="text" placeholder="姓名">
            <select name="selectAge" class="selectxiaoqu">
                <option value="1">A小区名称</option>
                <option value="2">B小区名称</option>
                <option value="3">C小区名称</option>
            </select>
            <select name="selectAge" class="selecthuxing">
                <option value="1">A1户型</option>
                <option value="2">B1户型</option>
                <option value="3">C1户型</option>
            </select>
            <input type="text" placeholder="房间号2-31">
            <select name="selectAge" class="selectPeople">
                <option value="1">A业务员</option>
                <option value="2">B业务员</option>
                <option value="3">C业务员</option>
            </select>
            <select name="selectAge" class="selectaction">
                <option value="1">A无活动</option>
                <option value="2">B无活动</option>
                <option value="3">C无活动</option>
            </select>
        </form>
        <textarea name="yj" rows="5" placeholder="请输入">
        </textarea>
        <mt-button size="large">保存</mt-button>

    </div>
</template>