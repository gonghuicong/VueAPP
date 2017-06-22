<script type="text/babel">
    export default {
        props: ['activeContent']
    }
</script>

<style scoped>
    #activeContent { position: relative; padding: 60px 15px 15px; }
    .active-name { margin-bottom: 10px; line-height: 1.4; font-size: 24px; }
    .active-mate { position: relative; line-height: 20px; margin-bottom: 18px; color: #888; }
</style>

<template>
    <div id="activeContent">
        <h2 class="active-name">{{ activeContent.active_name }}</h2>
        <div class="active-mate">{{ activeContent.active_des }}</div>
        <div>{{ activeContent.active_content }}</div>
    </div>
</template>