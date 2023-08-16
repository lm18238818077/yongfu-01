import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: () => import('@/views/Home') },
      { path: 'about', component:() => import('@/views/Home') },
    ]
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router