import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: () => import('@/views/Home') },
      { path: 'about', component:() => import('@/views/Home') },
      { path: 'video', component:() => import('@/views/Video') },
      { path: 'case', component:() => import('@/views/Case') },
      { path: 'case/:id', component:() => import('@/views/CaseDetail') },
      { path: 'yy/:id', component:() => import('@/views/Yy') },
    ]
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router