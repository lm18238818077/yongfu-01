<template>
  <div class="wrap">
    <header>
      <img src="@/assets/nav_1.png" alt="" />
      <div class="item">
        <span class="text">{{ $t("headMenus.menu1") }}</span>
        <div class="child product">
          <div class="child_item" v-for="v in 5" :key="v">
            <img :src="imgBase(`product_${v}.png`)" alt="" height="38" />
            <img :src="imgBase(`product_${v}_${v}.png`)" alt="" height="197" />
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
        <span class="text">{{ $t("headMenus.menu3") }}</span>
        <div class="child instance">
          <div class="instance_wrap">
            <div class="item_wrap" v-for="v in instanceData" :key="v">
              <img :src="v.img" alt="" />
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
    <nav>
      <el-carousel height="786px" autoplay>
        <el-carousel-item v-for="(v, i) in enImgs" :key="i">
          <div
            class="img"
            :style="{
              background: `url(${imgBase(v.src)}) center/cover no-repeat`,
            }"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </nav>
    <section>
      <div class="content">
        <div class="block">
          <div class="top">
            <div class="title">视频中心</div>
            <span class="button">展开全部</span>
          </div>
          <div class="middle">
            <div class="item" v-for="v in videoContentData" :key="v.mText">
              <div class="img"></div>
              <div class="textWrap">
                <div class="m-text">{{ v.mText }}</div>
                <div class="s-text">{{ v.sText }}</div>
                <img class="sign" :src="imgBase('sign.png')" />
              </div>
            </div>
          </div>
        </div>
        <div class="block instance">
          <div class="top">
            <div class="title">合作案例</div>
            <span class="button">展开全部</span>
          </div>
          <div class="middle">
            <div class="item" v-for="v in instanceContentData" :key="v.mText">
              <div class="img"></div>
              <div class="textWrap">
                <div class="m-text">{{ v.mText }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="listWrap">
      <div class="content">
        <div
          class="item"
          v-for="v in listWrapData"
          :style="{
            background: `url(${imgBase(v.src)}) center/cover no-repeat`,
          }"
        ></div>
      </div>
    </div>
    <footer>
      <div class="content">
        <div class="left">
          <img src="@/assets/sign.png" alt="" />
        </div>
        <div class="middle">
          <div class="list">
            <div class="item" v-for="v in footerData1" :key="v.text">
              {{ v.text }}
            </div>
          </div>
          <div class="list">
            <div class="item" v-for="v in footerData2" :key="v.text">
              {{ v.text }}
            </div>
          </div>
          <div class="list">
            <div class="item" v-for="v in footerData3" :key="v.text">
              {{ v.text }}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="wx">
            <img src="@/assets/erweima.svg" alt="" />
          </div>
          <div class="link">
            <img src="@/assets/wx_xcx.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
    <div class="bottom">
      <span>版权所有：广州市米邦医疗器械有限公司</span>
      <span>前往主页</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

defineProps({
  msg: String,
});

const imgBase = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

const enImgs = [
  {
    src: "nav_en_1.png",
  },
  {
    src: "nav_en_2.png",
  },
  {
    src: "nav_en_3.png",
  },
];

const videoCurrentNum = ref(0);
const videoCurrent = computed(() => videoData.value[videoCurrentNum.value]);

const videoData = ref([
  {
    title: "概念宣传片",
    video: [
      { src: "dd", name: "米邦M200智能消毒牙椅" },
      { src: "dd2", name: "米邦M200智能消毒牙椅" },
    ],
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
]);

const instanceData = ref([
  {
    img: "aa",
    name: "莞嘉口腔",
  },
  {
    img: "aa",
    name: "红杉树口腔",
  },
  {
    img: "aa",
    name: "贤君口腔",
  },
  {
    img: "aa",
    name: "牙美康口腔",
  },
  {
    img: "aa",
    name: "南方医康",
  },
]);

const videoContentData = ref([
  {
    src: "",
    mText: "米邦M200智能消毒牙椅子",
    sText: "概念宣传片",
  },
  {
    src: "",
    mText: "M100领航款360⁰详解",
    sText: "M系列详解",
  },
  {
    src: "",
    mText: "莞嘉口腔",
    sText: "诊所案例",
  },
  {
    src: "",
    mText: "红杉树口腔",
    sText: "诊所案例",
  },
]);

const instanceContentData = ref([
  {
    src: "",
    mText: "莞嘉口腔",
  },
  {
    src: "",
    mText: "红杉树口腔",
  },
  {
    src: "",
    mText: "贤君口腔",
  },
  {
    src: "",
    mText: "牙美康口腔",
  },
]);

const listWrapData = ref([
  {
    src: "list_1.jpg",
  },
  {
    src: "list_2.jpg",
  },
  {
    src: "list_3.jpg",
  },
  {
    src: "list_4.jpg",
  },
  {
    src: "list_5.jpg",
  },
]);

const footerData1 = ref([
  {
    text: "产品中心",
    link: "",
  },
  {
    text: "M200消毒款",
    link: "",
  },
  {
    text: "M200新锐款",
    link: "",
  },
  {
    text: "M100领航款",
    link: "",
  },
  {
    text: "M100领航款",
    link: "",
  },
  {
    text: "M100精英款",
    link: "",
  },
  {
    text: "M100种植款",
    link: "",
  },
]);

const footerData2 = ref([
  {
    text: "视频中心",
    link: "",
  },
  {
    text: "概念宣传片",
    link: "",
  },
  {
    text: "M系列详解",
    link: "",
  },
  {
    text: "诊所案例",
    link: "",
  },
  {
    text: "操作演示",
    link: "",
  },
  {
    text: "牙椅维护",
    link: "",
  },
]);

const footerData3 = ref([
  {
    text: "合作案例",
    link: "",
  },
  {
    text: "莞嘉口腔",
    link: "",
  },
  {
    text: "红杉树口腔",
    link: "",
  },
  {
    text: "贤君口腔",
    link: "",
  },
  {
    text: "牙美康口腔",
    link: "",
  },
  {
    text: "南方医康",
    link: "",
  },
]);

const handleCommand = (val) => {
  locale.value = val;
  localStorage.setItem("language", val);
};
</script>

<style scoped lang="less">
.wrap {
  background: rgb(245, 248, 252);
  header {
    width: 100%;
    height: 60px;
    display: flex;
    padding: 0 40px;
    box-sizing: border-box;
    align-items: center;
    position: relative;
    & > img {
      height: 24px;
      margin-right: 20px;
    }
    & > .icon{
      margin-left: 20px;
      cursor: pointer;
      
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
  nav {
    .img {
      height: 786px;
      width: 100%;
    }
  }
  section {
    border-top: 20px solid #fff;
  }
  .content {
    width: 1320px;
    margin: 0 auto;
    .block {
      .top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 50px 0;
        .title {
          font-size: 50px;
        }
        .button {
          font-size: 14px;
          height: 20px;
          background: rgb(231, 238, 247);
          padding: 4px 8px;
          border-radius: 6px;
          line-height: 20px;
        }
      }
      .middle {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          width: 650px;
          height: 450px;
          position: relative;
          background: rgb(255, 255, 255);
          border-radius: 12px;
          border: 2px solid transparent;
          margin-bottom: 20px;
          box-sizing: border-box;
          &:hover {
            border: 2px solid rgb(47, 120, 153);
          }
          .img {
            height: 320px;
            background: pink;
            border-radius: 12px;
          }
          .textWrap {
            height: 130px;
            padding: 30px 20px 20px;
            box-sizing: border-box;
            .sign {
              height: 12px;
              position: absolute;
              bottom: 20px;
              right: 17px;
            }
            .m-text {
              font-size: 24px;
              font-weight: bold;
            }
            .s-text {
              color: rgb(181, 181, 182);
              font-size: 14px;
              margin-top: 20px;
            }
          }
        }
      }
      &.instance {
        .item {
          .wh(318px, 390px);
          .img {
            height: 318px;
          }
          .textWrap {
            height: auto;
            padding: 17px 20px 9px;
          }
        }
      }
    }
  }

  .listWrap {
    background: #fff;
    .content {
      width: 1320px;
      margin: 0 auto;
      padding: 100px 0;
      .item {
        width: 100%;
        height: 382px;
        margin-bottom: 40px;
        border-radius: 10px;
      }
    }
  }

  footer {
    background: rgb(247, 248, 248);
    .content {
      width: 1090px;
      margin: 0 auto;
      position: relative;
      padding: 50px 0;
      display: flex;
      border-bottom: 1px solid #000;
      .left {
        img {
          width: 35px;
        }
        margin-right: 70px;
      }
      .middle {
        display: flex;
        .list {
          display: flex;
          flex-direction: column;
          margin-right: 80px;
          .item {
            &:first-child {
              font-size: 16px;
              margin-bottom: 40px;
              cursor: auto;
              color: rgb(0, 0, 0);
            }
            &:last-child {
              margin-bottom: 0;
            }
            font-size: 14px;
            line-height: 14px;
            margin-bottom: 20px;
            cursor: pointer;
            color: rgb(137, 137, 137);
          }
        }
      }
      .right {
        margin-left: auto;
        display: flex;
        img {
          .wh(130px);
          display: none;
          position: absolute;
          right: -180px;
          top: 50px;
        }
        .wx {
          width: 30px;
          height: 30px;
          cursor: pointer;
          background: url(@/assets/wx.png) center/contain no-repeat;
          &:hover {
            background: url(@/assets/wx_hover.png) center/contain no-repeat;
            img {
              display: block;
            }
          }
        }
        .link {
          width: 25px;
          height: 25px;
          margin-left: 40px;
          cursor: pointer;
          background: url(@/assets/link.png) center/contain no-repeat;
          &:hover {
            background: url(@/assets/link_hover.png) center/contain no-repeat;
            img {
              display: block;
            }
          }
        }
      }
    }
  }

  .bottom {
    width: 1090px;
    height: 80px;
    margin: 0 auto;
    background: rgb(247, 248, 248);
    font-size: 14px;
    line-height: 80px;
    color: rgb(137, 137, 137);
    display: flex;
    justify-content: space-between;
    & > span:last-child {
      cursor: pointer;
    }
  }
}
</style>
