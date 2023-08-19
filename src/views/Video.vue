<template>
<div class="video">
  <div class="content">
    <div class="title">
      <div class="left">{{ $t('headMenus.menu2') }}</div>
      <div class="right">
        <div class="item" v-for="v in rightData" @click="handleScroll(v)">
          <div class="link">{{ v.name }}</div>
        </div>
      </div>
    </div>
    <div class="block" v-for="v in videoData" :key="v.title" :id="v.title">
      <div class="top">
        <div class="title">{{ v.title }}</div>
      </div>
      <div class="middle">
        <div class="item" v-for="v2 in v.video" :key="v2.id">
          <div class="img"></div>
          <div class="textWrap">
            <div class="m-text">{{ v2.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const { t, locale } = useI18n();

const videoData = computed(() => {
  return [
    {
      title: `${t("headMenus.video.m1.t")}`,
      video: [
        { src: "dd", name: t("headMenus.video.m1.c1") },
        { src: "dd2", name: t("headMenus.video.m1.c2") },
      ],
    },
    {
      title: t("headMenus.video.m2.t"),
      video: [
        { src: "dd", name: t("headMenus.video.m2.c1") },
        { src: "dd", name: t("headMenus.video.m2.c2") },
      ],
    },
    {
      title: t("headMenus.video.m3.t"),
      video: [
        { src: "dd", name: t("headMenus.video.m3.c1"), id: 'gj' },
        { src: "dd", name: t("headMenus.video.m3.c2"), id: 'hss' },
        { src: "dd", name: t("headMenus.video.m3.c3"), id: 'xj' },
        { src: "dd", name: t("headMenus.video.m3.c4"), id: 'ymk' },
        { src: "dd", name: t("headMenus.video.m3.c5"), id: 'nf' },
      ],
    },
    {
      title: t("headMenus.video.m4.t"),
      video: [{ src: "dd", name: t("headMenus.video.m4.c1")}],
    },
    {
      title: t("headMenus.video.m5.t"),
      video: [{ src: "dd", name: t("headMenus.video.m5.c1") }],
    },
  ]
})


const rightData = computed(() => {
  return [
    {
      name: t('footer.video.m1'),
      link: ''
    },
    {
      name: t('footer.video.m2'),
      link: ''
    },
    {
      name: t('footer.video.m3'),
      link: ''
    },
    {
      name: t('footer.video.m4'),
      link: ''
    },
    {
      name: t('footer.video.m5'),
      link: ''
    }
  ]
})

const handleScroll = (data) => {
  let element = document.getElementById(data.name)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const handleRoute = (id) => {
  if (id) {
    router.push(`/case/${id}`)
  }
}

</script>
<style scoped lang='less'>
.video{
  background: rgb(245, 248, 252);
  .content{
    width: 1320px;
    margin: 0 auto;
    padding: 100px 0;
    & > .title{
      display: flex;
      border-bottom: 1px solid rgb(121, 121, 121);
      .left{
        font-size: 40px;
        font-weight: bold;
      }
      .right{
        margin-left: auto;
        font-size: 12px;
        color: #898989;
        display: flex;
        align-items: flex-end;
        .item{
          margin-left: 20px;
          line-height: 28px;
          .link{
            cursor: pointer;
          }
        }
      }
    }
    .block {
      margin-top: 50px;
      border-top: 1px solid transparent;
      .top {
        display: flex;
        align-items: flex-end;
        margin: 50px 0;
        .title {
          font-size: 30px;
        }
      }
      .middle {
        display: flex;
        flex-wrap: wrap;
        .item {
          .wh(307px, 236px);
          position: relative;
          background: rgb(255, 255, 255);
          border-radius: 12px;
          border: 2px solid transparent;
          margin-bottom: 20px;
          margin-right: 20px;
          box-sizing: border-box;
          &:hover {
            border: 2px solid rgb(47, 120, 153);
          }
          .img {
            height: 172px;
            background: pink;
            border-radius: 12px;
          }
          .textWrap {
            padding: 17px 20px 9px;
            box-sizing: border-box;
            .m-text {
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
