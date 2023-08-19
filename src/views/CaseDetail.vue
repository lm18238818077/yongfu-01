<template>
<div class="wrap">
  <div class="imgWrap">
    <img :src="imgBase(`${routeId}.png`)" alt="" >
    <div class="text">{{ detailName }}</div>
  </div>
</div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const route = useRoute()
const routeId = computed(() => route.params?.id)

const imgBase = (path) => {
  return new URL(`../assets/detail/${path}`, import.meta.url).href;
};
const detailName = computed(() => t(`footer.case.${routeId.value}`))
</script>
<style scoped lang='less'>
.wrap{
  .imgWrap{
    position: relative;
    & > img{
      width: 100%;
    }
    .text{
      .wh(100%, 50px);
      position: absolute;
      inset: 0;
      margin: auto;
      font-size: 30px;
      z-index: 1;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
  }
  
}
</style>
