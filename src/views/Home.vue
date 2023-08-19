<template>
  <div class="wrap">
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
            <div class="title">{{ $t('headMenus.menu2') }}</div>
            <router-link to="/video" class="button">{{ $t('home.clickMore') }}</router-link>
          </div>
          <div class="middle">
            <div class="item" v-for="v in videoContentData" :key="v.mText">
              <div class="img"></div>
              <div class="textWrap">
                <div class="m-text">{{ v.mText }}</div>
                <div class="s-text">{{ v.sText }}</div>
                <img class="sign" v-lazy="imgBase('sign.png')" />
              </div>
            </div>
          </div>
        </div>
        <div class="block instance">
          <div class="top">
            <div class="title">{{ $t('headMenus.menu3') }}</div>
            <router-link to="/case" class="button">{{ $t('home.clickMore') }}</router-link>
          </div>
          <div class="middle">
            <div class="item" v-for="v in instanceContentData" :key="v.mText" @click="handleRoute(`/case/${v.id}`)">
              <div class="img"
                v-lazy:background-image="imgCaseBase(`${v.id}.jpg`)"
              />
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
          v-lazy:background-image="imgBase(v.src)"
          @click="handleRoute(`/yy/${v.id}`)"
        ></div>
      </div>
    </div>
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


const handleRoute = (path) => {
  if (path) {
    router.push(path)
  }
}

const imgBase = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

const imgCaseBase = (path) => {
  return new URL(`../assets/case/${path}`, import.meta.url).href;
};

const enImgs = [
  {
    src: "nav_en_1.jpg",
  },
  {
    src: "nav_en_2.jpg",
  },
  {
    src: "nav_en_3.jpg",
  },
];

const videoContentData = computed(() => [
  {
    src: "",
    mText: t('headMenus.video.m1.c1'),
    sText: t('home.ConceptVideo'),
  },
  {
    src: "",
    mText: t('headMenus.video.m2.c2'),
    sText: t('home.UnitVideo'),
  },
  {
    src: "",
    mText: t('headMenus.video.m3.c1'),
    sText: t('home.ClinicCases'),
  },
  {
    src: "",
    mText: t('headMenus.video.m3.c2'),
    sText: t('home.ClinicCases'),
  },
]);

const instanceContentData = computed(() => [
  {
    id: "m1",
    mText: t('footer.case.m1'),
  },
  {
    id: "m2",
    mText: t('footer.case.m2'),
  },
  {
    id: "m3",
    mText: t('footer.case.m3'),
  },
  {
    id: "m4",
    mText: t('footer.case.m4'),
  },
]);

const listWrapData = ref([
  {
    src: "list_1.jpg",
    id: 'm1'
  },
  {
    src: "list_2.jpg",
    id: 'm2'
  },
  {
    src: "list_3.jpg",
    id: 'm3'
  },
  {
    src: "list_4.jpg",
    id: 'm4'
  },
  {
    src: "list_5.jpg",
    id: 'm5'
  },
]);

</script>

<style scoped lang="less">
.wrap {
  background: rgb(245, 248, 252);
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
          font-size: 40px;
        }
        .button {
          font-size: 12px;
          height: 20px;
          background: rgb(231, 238, 247);
          padding: 4px 8px;
          border-radius: 6px;
          line-height: 20px;
          color: #000;
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
              font-size: 22px;
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
          cursor: pointer;
          .img {
            height: 318px;
            background: center/cover no-repeat;
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
        cursor: pointer;
        background: center/cover no-repeat;
      }
    }
  }
}
</style>
