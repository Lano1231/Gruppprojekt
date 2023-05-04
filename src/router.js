import { createRouter, createWebHashHistory } from 'vue-router'
import KassaView from './views/KassaView.vue'
import WomenDressView from './views/WomenDressView.vue'
import JacketsView from './views/JacketsView.vue'

import ShirtView from './views/ShirtView.vue'
import JeansView from './views/JeansView.vue'
import WomensJeansView from './views/WomensJeansView.vue'
import WomensJacketsView from './views/WomensJacketsView.vue'
import WomenShoesView from './views/WomenShoesView.vue'
import LoginView from './views/LoginView.vue'
import TracksuitView from './views/TracksuitView.vue'
import LandPage from './components/LandPage.vue'
import LikesView from './views/LikesView.vue'
import RegisterView from './views/RegisterView.vue'
import PasswordView from './views/PAsswordView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: KassaView,
      path: '/Kassa'
    },
    {
      component: WomenShoesView,
      path: '/skor'
    },
    {
      component: WomensJacketsView,
      path: '/womensjackets'
    },
    {
      component: WomenDressView,
      path: '/klänningar'
    },
    {
      component: WomensJeansView,
      path: '/womensjeans'
    },
    {
      component: JacketsView,
      path: '/jackets'
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
    },

    {
      component: LandPage,
      path: '/landpage'
    },
    {
      component: LikesView,
      path: '/likes'
    },
    {
      component: LandPage,
      path: '/'
    },
    {
      component: RegisterView,
      path: '/register'
    },
    {
      component: PasswordView,
      path: '/password'
    }
  ]
})
