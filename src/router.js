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
      name: 'special',
      component: Index,
      props: { sheetId: specialSheetId, routeName: 'special', title: 'Special Senior Center Events' },
      children: [{
        path: ':id',
        name: 'specialEvents',
        component: Show,
        props: true
      }]
    },
    {
      path: '/ongoing',
      name: 'ongoing',
      component: Index,
      props: { sheetId: ongoingSheetId, routeName: 'ongoing', title: 'Ongoing Senior Center Events' },
      children: [{
        path: ':id',
        name: 'ongoingEvents',
        component: Show,
        props: true
      }]
    }
  ]
})
