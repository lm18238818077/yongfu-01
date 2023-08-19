<template>
<div class="video">
  <div class="content">
    <div class="title">
      <div class="left">{{ $t('headMenus.menu3') }}</div>
      <div class="right">
        <div class="item" v-for="v in rightData" @click="handleScroll(v)">
          <div class="link">{{ v.name }}</div>
        </div>
      </div>
    </div>
    <div class="block" v-for="v in caseData" :key="v.id" :id="v.id">
      <div class="c">
        <div class="left">
          <div class="title">{{ v.title }}</div>
          <router-link :to="`/case/${v.id}`" class="more">{{ $t('case.more') }}</router-link>
        </div>
        <div :class="['right', { [v.id]: true }]"/>
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

const caseData = computed(() => {
  return [
    {
      title: t("footer.case.m1"),
      id: 'm1'
    },
    {
      title: t("footer.case.m2"),
      id: 'm2'
    },
    {
      title: t("footer.case.m3"),
      id: 'm3'
    },
    {
      title: t("footer.case.m4"),
      id: 'm4'
    },
    {
      title: t("footer.case.m5"),
      id: 'm5'
    },
    
  ]
})


const rightData = computed(() => {
  return [
    {
      name: t('case.title.m1'),
      link: ''
    },
    {
      name: t('case.title.m2'),
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
    padding: 100px 0;
    & > .title{
      width: 1320px;
      margin: 0 auto;
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
      background: #fff;
      padding: 60px 0;
      margin-bottom: 60px;
      &#m1{
        margin-top: 100px;
      }
      .c{
        width: 1320px;
        margin: 0 auto;
        display: flex;
        .left{
          margin-right: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 40px;
          .title{
            font-size: 40px;
            font-weight: bold;
            color: #000;
          }
          .more{
            background: rgb(47, 120, 153);
            border-radius: 30px;
            height: 50px;
            color: #fff;
            line-height: 50px;
            padding: 0 14px;
            font-size: 20px;
            text-align: center;
            cursor: pointer;
          }
        }
        .right{
          .wh(674px, 390px);
          &.m1{
            background: url('@/assets/case/m1.jpg') center/cover no-repeat;
            border-radius: 10px;
          }
          &.m2{
            background: url('@/assets/case/m2.jpg') center/cover no-repeat;
            border-radius: 10px;
          }
          &.m3{
            background: url('@/assets/case/m3.jpg') center/cover no-repeat;
            border-radius: 10px;
          }
          &.m4{
            background: url('@/assets/case/m4.jpg') center/cover no-repeat;
            border-radius: 10px;
          }
          &.m5{
            background: url('@/assets/case/m5.jpg') center/cover no-repeat;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>
