import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Show from './views/Show.vue'

Vue.use(Router)

let specialSheetId = '1zStRVKbrYF3qa_ORDtVc4Ov--ihE1IQLFKAiM62914A'
let ongoingSheetId = '1ljyQ1bjC9PhuM3H__ELYBCIuY_fab9SU3IO7M8O8hW8'

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/special',
      name: 'Special',
      component: Index,
      props: { sheetId: specialSheetId }
    },
    {
      path: '/ongoing',
      name: 'Ongoing',
      component: Index,
      props: { sheetId: ongoingSheetId }
    },
    {
      path: '/special/:id',
      name: 'Special Events',
      component: Show,
      props: { sheetId: specialSheetId }
    },
    {
      path: '/ongoing/:id',
      name: 'Ongoing Events',
      component: Show,
      props: { sheetId: ongoingSheetId }
    },
  ]
})
