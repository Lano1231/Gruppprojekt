import { createRouter, createWebHashHistory } from 'vue-router'

import WomenClothesView from './views/WomenClothesView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ShirtView from './views/ShirtView.vue'
import JeansView from './views/JeansView.vue'
import WomensJeansView from './views/WomensJeansView.vue'
import WomensJacketsView from './views/WomensJacketsView.vue'
import WomenShoesView from './views/WomenShoesView.vue'
import LoginView from './views/LoginView.vue'

import TracksuitView from './views/TracksuitView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: WomenShoesView,
      path: '/skor'
    },
    {
      component: WomensJacketsView,
      path: '/womensjackets'
    },
    {
      component: WomenClothesView,
      path: '/klänningar'
    },
    {
      component: WomensJeansView,
      path: '/WomensJeans'
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
    },
    {
      component: LoginView,
      path: '/login'
    }
  ]
})
