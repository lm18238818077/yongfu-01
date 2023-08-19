<template>
  <div class="wrap">
    <div class="demo-image__lazy">
      <el-image
        v-for="v in 2"
        :key="v"
        :src="imgBase(`${routeId}_${v}.jpg`)"
        lazy
      />
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const route = useRoute();
const routeId = computed(() => route.params?.id);
const imgBase = (path) => {
  return new URL(`../assets/yy/${path}`, import.meta.url).href;
};
</script>
<style scoped lang="less">
.wrap {
  .demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
  }
  .demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
  }
}
</style>
