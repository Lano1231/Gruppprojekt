import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ShirtView from './views/ShirtView.vue'
import JeansView from './views/JeansView.vue'
import TracksuitView from './views/TracksuitView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/jackets'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ShirtView,
      path: '/shirts'
    },
    {
      component: JeansView,
      path: '/jeans'
    },
    {
      component: TracksuitView,
      path: '/tracksuits'
    }
  ]
})
