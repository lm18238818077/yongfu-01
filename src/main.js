import { createApp } from 'vue'
import IconSvg from '@/components/IconSvg/index.vue'
import './style.css'
import App from './App.vue'
import i18n from './language'
const app = createApp(App)
app.component('IconSvg', IconSvg)
app.use(i18n).mount('#app')
