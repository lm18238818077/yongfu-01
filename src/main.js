import { createApp } from 'vue'
import IconSvg from '@/components/IconSvg/index.vue'
import router from './router'
import '@/styles/index.less'
import App from './App.vue'
import i18n from './language'
import VueLazyload from 'vue-lazyload'
const app = createApp(App)
app.component('IconSvg', IconSvg)
app.use(i18n).use(VueLazyload).use(router).mount('#app')
