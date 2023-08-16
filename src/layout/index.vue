<template>
  <div
    class="content-box"
  >
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
  </div>
</template>
<style lang="less" scoped>
.content-box {
  position: absolute;
  left: 0px;
  right: 0;
  top: 0px;
  bottom: 0;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: rgb(245, 248, 252);
}

.content {
  width: auto;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
