import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

let element = document.querySelector('#hover-man')

element.addEventListener('mouseover', console.log)

createApp(App).use(router).use(store).mount('#app')
