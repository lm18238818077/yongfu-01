<template>
  <div>
    <footer>
      <div class="content">
        <div class="left">
          <img v-lazy="imgBase('sign.png')" alt="" />
        </div>
        <div class="middle">
          <div class="list">
            <div class="item" v-for="v in footerData1" :key="v.text" @click="handleRoute(`/yy/${v.id}`)">
              {{ v.text }}
            </div>
          </div>
          <div class="list">
            <div class="item" v-for="v in footerData2" :key="v.text">
              {{ v.text }}
            </div>
          </div>
          <div class="list">
            <div class="item" v-for="v in footerData3" :key="v.text" @click="handleRoute(`/case/${v.id}`)">
              {{ v.text }}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="wx">
            <img v-lazy="imgBase('erweima.svg')" alt="" />
          </div>
          <div class="link">
            <img v-lazy="imgBase('wx_xcx.png')" alt="" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <span>{{ $t("bottom.m1") }}</span>
        <span>{{ $t("bottom.m2") }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const { t, locale } = useI18n();

defineProps({
  msg: String,
});

const imgBase = (path) => {
  return new URL(`../../assets/${path}`, import.meta.url).href;
};

const footerData1 = computed(() => [
  {
    text: t("headMenus.menu1"),
    id: "",
  },
  {
    text: t("footer.product.m1"),
    id: "m1",
  },
  {
    text: t("footer.product.m2"),
    id: "m2",
  },
  {
    text: t("footer.product.m3"),
    id: "m3",
  },
  {
    text: t("footer.product.m4"),
    id: "m4",
  },
  {
    text: t("footer.product.m5"),
    id: "m5",
  },
])

const footerData2 = computed(() => [
  {
    text: t("headMenus.menu1"),
    id: "",
  },
  {
    text: t("footer.video.m1"),
    id: "",
  },
  {
    text: t("footer.video.m2"),
    id: "",
  },
  {
    text: t("footer.video.m3"),
    id: "",
  },
  {
    text: t("footer.video.m4"),
    id: "",
  },
  {
    text: t("footer.video.m5"),
    id: "",
  },
]);

const footerData3 = computed(() => [
  {
    text: t("headMenus.menu3"),
    id: "",
  },
  {
    text: t("footer.case.m1"),
    id: "m1",
  },
  {
    text: t("footer.case.m2"),
    id: "m2",
  },
  {
    text: t("footer.case.m3"),
    id: "m3",
  },
  {
    text: t("footer.case.m4"),
    id: "m4",
  },
  {
    text: t("footer.case.m5"),
    id: "m5",
  },
]);

const handleRoute = (path) => {
  if (path) {
    router.push(path)
  }
}

</script>

<style scoped lang="less">
footer {
  background: rgb(247, 248, 248);
  border-top: 20px solid #fff;
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
</style>
