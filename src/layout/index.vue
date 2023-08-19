<template>
  <div
    class="content-box"
  >
    <Header/>
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition
          name="move"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<style lang="less" scoped>
.content-box {
}

.content {
  padding-top: 60px;
  border-top: 15px solid #fff;
}
</style>
