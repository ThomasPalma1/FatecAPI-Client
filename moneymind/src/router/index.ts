import DashboardView from '@/views/DashboardView.vue'
import PanelView from '@/views/PanelView.vue'
import ComparatorView from '@/views/ComparatorView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/panel',
      name: 'panel',
      component: PanelView
    },
    {
      path: '/comparator',
      name: 'comparator',
      component: ComparatorView
    }
  ]
})

export default router
