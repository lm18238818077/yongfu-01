<template>
  <header>
    <router-link to="/"
      ><img src="@/assets/nav_1.png" alt="" class="logo"
    /></router-link>
    <div class="item" @mouseenter="enter('product')" @mouseleavel="leavel()">
      <span class="text">{{ $t("headMenus.menu1") }}</span>
      <div class="child product">
        <div
          v-if="curEnter === 'product'"
          class="child_item"
          v-for="v in 5"
          :key="v"
          @click="handleRoute(`/yy/m${v}`)"
        >
          <img :src="imgBase(`product_${v}.png`)" alt="" height="38" />
          <img
            class="p_img"
            :src="imgBase(`product_${v}_${v}.png`)"
            alt=""
            height="197"
          />
        </div>
      </div>
    </div>
    <div class="item">
      <span class="text">{{ $t("headMenus.menu2") }}</span>
      <div class="child video">
        <div class="title_wrap">
          <span
            :class="['text', { active: v.title === videoCurrent.title }]"
            v-for="(v, i) in videoData"
            :key="v"
            @mouseenter="videoCurrentNum = i"
            @mouseleavel="videoCurrentNum = 0"
            >{{ v.title }}</span
          >
        </div>
        <div class="video_wrap">
          <div class="video_item" v-for="v in videoCurrent.video" :key="v.src">
            <video :src="v.src"></video>
            <div class="video_name">{{ v.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item" @mouseenter="enter('product')" @mouseleavel="leavel()">
      <span class="text">{{ $t("headMenus.menu3") }}</span>
      <div class="child instance">
        <div class="instance_wrap">
          <div
            v-if="curEnter === 'product'"
            class="item_wrap"
            v-for="v in instanceData"
            :key="v"
            @click="handleRoute(`/case/${v.id}`)"
          >
            <img :src="imgCaseBase(`${v.id}.jpg`)" alt="" />
            <div class="name">{{ v.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="item about">
      <span class="text">{{ $t("headMenus.menu4") }}</span>
    </div>
    <div class="item">
      <span class="text">{{ $t("headMenus.menu5") }}</span>
    </div>
    <div class="icon">
      <el-dropdown @command="handleCommand">
        <IconSvg name="icon-duoyuyan" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="en-us">ENGLISH(NA)</el-dropdown-item>
            <el-dropdown-item command="zh-cn">简体中文</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const { t, locale } = useI18n();

defineProps({
  msg: String,
});

const curEnter = ref();

const imgBase = (path) => {
  return new URL(`../../assets/${path}`, import.meta.url).href;
};

const imgCaseBase = (path) => {
  return new URL(`../../assets/case/${path}`, import.meta.url).href;
};

const videoCurrentNum = ref(0);
const videoCurrent = computed(() => videoData.value[videoCurrentNum.value]);

const videoData = ref([
  {
    title: t("headMenus.video.m1.t"),
    video: [
      { src: "dd", name: t("headMenus.video.m1.c1") },
      { src: "dd2", name: t("headMenus.video.m1.c2") },
    ],
  },
  {
    title: t("headMenus.video.m2.t"),
    video: [{ src: "dd", name: t("headMenus.video.m2.c1") }],
    video: [{ src: "dd", name: t("headMenus.video.m2.c1") }],
  },
  {
    title: t("headMenus.video.m3.t"),
    video: [{ src: "dd", name: t("headMenus.video.m3.c1") }],
  },
  {
    title: t("headMenus.video.m4.t"),
    video: [{ src: "dd", name: t("headMenus.video.m4.c1") }],
  },
  {
    title: t("headMenus.video.m5.t"),
    video: [{ src: "dd", name: t("headMenus.video.m5.c1") }],
  },
]);

const instanceData = ref([
  {
    id: "m1",
    name: t("headMenus.m3.m1"),
  },
  {
    id: "m2",
    name: t("headMenus.m3.m2"),
  },
  {
    id: "m3",
    name: t("headMenus.m3.m3"),
  },
  {
    id: "m4",
    name: t("headMenus.m3.m4"),
  },
  {
    id: "m5",
    name: t("headMenus.m3.m5"),
  },
]);

const handleCommand = (val) => {
  locale.value = val;
  localStorage.setItem("language", val);
};

const handleRoute = (path) => {
  if (path) {
    router.push(path);
  }
};

const enter = (type) => {
  curEnter.value = type;
};

const leavel = () => {
  curEnter.value = "";
};
</script>

<style scoped lang="less">
header {
  outline: none;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;
  align-items: center;
  position: fixed;
  background: rgb(247, 248, 248);
  top: 0;
  z-index: 10;
  .logo {
    height: 24px;
    margin-right: 20px;
  }
  & > .icon {
    margin-left: 20px;
    cursor: pointer;
    svg {
      outline: none;
    }
  }
  .item {
    margin: 0 20px;
    height: 100%;
    line-height: 60px;
    &.about {
      margin-left: auto;
    }
    & > .text {
      padding: 4px 10px;
      font-size: 13px;
    }
    &:hover {
      cursor: pointer;
      & > .text {
        background: #e6e6e6;
        border-radius: 6px;
      }
      .child {
        transition: all 0.3s;
        &.product {
          height: 300px;
        }
        &.video {
          height: 250px;
        }
        &.instance {
          height: 200px;
        }
      }
    }
    .child {
      height: 0;
      z-index: 10;
      cursor: auto;
      position: absolute;
      background: #fff;
      top: 60px;
      left: 0;
      width: 100vw;
      overflow: hidden;
      &.product {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 50px;
        box-sizing: border-box;
        .child_item {
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
          .p_img {
            transition: all 0.3s;
            &:hover {
              transform: scale(1.1);
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
        .video_wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          .video_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 222px;
            height: 111px;
            border-radius: 12px;
            background: rgb(144, 194, 231);
            margin-right: 20px;
            & > video {
              width: 100%;
            }
            .video_name {
              line-height: 40px;
            }
          }
        }
      }
      &.instance {
        .instance_wrap {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          .item_wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-right: 10px;
            & > img {
              width: 142px;
              height: 80px;
              border-radius: 12px;
              background: rgb(144, 194, 231);
              transition: all 0.3s;
              cursor: pointer;
              &:hover {
                transform: scale(1.05);
              }
            }
            .name {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
