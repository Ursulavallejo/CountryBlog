import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import CommentsView from './views/CommentsView.vue'
import AllCountriesView from './views/AllCountriesView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AllCountriesView,
      path: '/countries',
      name: 'Countries',
    },
    {
      component: CommentsView,
      path: '/comments',
      name: 'Comments',
    },

    {
      component: HomeView,
      path: '/',
      name: 'Home',
    },
  ],
})
