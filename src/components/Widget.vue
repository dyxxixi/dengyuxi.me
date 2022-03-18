<template></template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {L2Dwidget} from "live2d-widget";
onMounted(() => {
    L2Dwidget.init({
        model: {
          jsonPath:
            "https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-hijiki/assets/hijiki.model.json",
        },
        // "shizuku"：课桌妹 ;"unitychan";"wanko":碗里的狗; "tororo":白猫;"z16":金发女;"miku":初音未来;"ni-j";"nico";"nipsilon";"nito";"haruto":海军男孩;"koharu":海军女孩;"chitose";"hibiki":短裙女;"hijiki":黑猫;"izumi":长发女;
        display: {
          position: "right", //定位
          width: 70, //宽度
          height: 100, //高度
          hOffset: -20, //左右
          vOffset: -10, //上下
        },
      });
	})
</script>

<style>
</style>