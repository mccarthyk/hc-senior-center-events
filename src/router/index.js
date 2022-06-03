import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/index.vue'
import Location from '../views/_location.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:sitecoreItemId',
    name: 'Location',
    component: Location,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return to.hash !== ''
      ? {
          el: to.hash,
        }
      : {}
  },
})

export default router
