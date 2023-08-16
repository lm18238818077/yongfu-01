<template>
  <el-config-provider
    :message="config"
    :locale="zhCn"
  >
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const config = reactive({
  max: 3
})

</script>
