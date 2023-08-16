<template>
  <div class="wrap">
    <header>
      <img src="@/assets/nav_1.png" alt="" />
      <div class="center">
        <div class="item">
          <span class="text">{{ $t('headMenus.menu1') }}</span>
          <div class="child product">
            <div class="child_item" v-for="v in 5" :key="v">
              <img :src="imgBase(`product_${v}.png`)" alt="" height="38">
              <img :src="imgBase(`product_${v}_${v}.png`)" alt="" height="197">
            </div>
          </div>
        </div>
        <div class="item">
          <span class="text">{{ $t('headMenus.menu2') }}</span>
          <div class="child video">
            <div class="title_wrap">
              <span
                :class="['text', { active: v.title === videoCurrent.title }]"
                v-for="v, i in videoData"
                :key="v"
                @mouseenter="videoCurrentNum = i"
                @mouseleavel="videoCurrentNum = 0"
                >{{ v.title }}</span
              >
            </div>
            <div class="video_wrap">
              <div
                class="video_item"
                v-for="v in videoCurrent.video"
                :key="v.src"
              >
                <video :src="v.src"></video>
                <div class="video_name">{{ v.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <span class="text">{{ $t('headMenus.menu3') }}</span>
          <div class="child instance">
            <div class="instance_wrap">
              <div class="item_wrap" v-for="v in instanceData" :key="v">
                <img :src="v.img" alt="">
                <div class="name">{{ v.name }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <span class="text">{{ $t('headMenus.menu4') }}</span>
        </div>
        <div class="item">
          <span class="text">{{ $t('headMenus.menu5') }}</span>
        </div>
        <div>
          <el-dropdown @command="handleCommand">
            <IconSvg name="icon-duoyuyan" class="icon"/>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="en-us">ENGLISH(NA)</el-dropdown-item>
                <el-dropdown-item command="zh-cn">简体中文</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          
        </div>
      </div>
    </header>
    <nav></nav>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()

defineProps({
  msg: String,
});

const imgBase = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

const videoCurrentNum = ref(0)
const videoCurrent = computed(() => videoData.value[videoCurrentNum.value])

const videoData = ref([
  {
    title: "概念宣传片",
    video: [{ src: "dd", name: "米邦M200智能消毒牙椅" }, { src: "dd2", name: "米邦M200智能消毒牙椅" }],
  },
  {
    title: "M系列详解",
    video: [{ src: "dd", name: "米邦M200智能消毒牙椅" }],
  },
  {
    title: "诊所案例",
    video: [{ src: "dd", name: "米邦M200智能消毒牙椅" }],
  },
  {
    title: "操作演示",
    video: [{ src: "dd", name: "米邦M200智能消毒牙椅" }],
  },
  {
    title: "牙椅维护",
    video: [{ src: "dd", name: "米邦M200智能消毒牙椅" }],
  },
])

const instanceData = ref([
  {
    img: 'aa',
    name: '莞嘉口腔'
  },
  {
    img: 'aa',
    name: '红杉树口腔'
  },
  {
    img: 'aa',
    name: '贤君口腔'
  },
  {
    img: 'aa',
    name: '牙美康口腔'
  },
  {
    img: 'aa',
    name: '南方医康'
  }
])

const handleCommand = (val) => {
  locale.value = val
  localStorage.setItem('language', val)
}

</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100vh;
  background: rgb(245, 248, 252);
  header {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 100px;
    box-sizing: border-box;
    align-items: center;
    position: relative;
    & > img {
      height: 24px;
    }
    .center {
      margin-left: 20px;
      height: 100%;
      display: flex;
      .item {
        margin: 0 30px;
        height: 100%;
        line-height: 80px;
        & > .text {
          padding: 4px 10px;
        }
        &:hover {
          cursor: pointer;
          & > .text {
            background: #e6e6e6;
            border-radius: 6px;
          }
          .child {
            transition: all .3s;
            &.product{
              height: 300px;
            }
            &.video{
              height: 250px;
            }
            &.instance{
              height: 200px;
            }
          }
        }
        .child {
          height: 0;
          cursor: auto;
          position: absolute;
          background: #fff;
          top: 80px;
          left: 0;
          width: 100vw;
          overflow: hidden;
          &.product {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 0 50px;
            box-sizing: border-box;
            &_item {
              position: relative;
              width: 250px;
              cursor: pointer;
              & > img {
                &:first-child {
                  position: absolute;
                  top: 0;
                  left: 2px;
                }
              }
            }
          }
          &.video {
            .title_wrap {
              display: flex;
              justify-content: center;
              font-size: 12px;
              margin-top: 20px;
              .text {
                cursor: pointer;
                line-height: 40px;
                margin: 0 40px;
                &.active {
                  color: rgb(200, 22, 29);
                }
                &:hover {
                  color: rgb(200, 22, 29);
                }
              }
            }
            .video_wrap{
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 30px;
              .video_item{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 222px;
                height: 111px;
                border-radius: 12px;
                background: rgb(144, 194, 231);
                margin-right: 20px;
                & > video{
                  width: 100%;
                }
                .video_name{
                  line-height: 40px;
                }
              }
            }
          }
          &.instance{
            .instance_wrap{
              display: flex;
              justify-content: center;
              margin-top: 40px;
              .item_wrap{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-right: 10px;
                & > img{
                  width: 142px;
                  height: 80px;
                  border-radius: 12px;
                  background: rgb(144, 194, 231);
                }
                .name{
                  font-size: 14px;
                  line-height: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
  nav {
  }
}
</style>
