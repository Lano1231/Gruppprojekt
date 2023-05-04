import { createApp } from 'vue'
// import { createFirestoreInstance } from 'vuefire'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// const firebaseConfig = {
//   apiKey: 'AIzaSyBFXQnGAQ07dJbo-nGMHoMBYLT5S2MWUi0',
//   authDomain: 'group-project23.firebaseapp.com',
//   projectId: 'group-project23',
//   storageBucket: 'group-project23.appspot.com',
//   messagingSenderId: '177217381018',
//   appId: '1:177217381018:web:9b402a6d83b6b90cfcf523',
//   measurementId: 'G-XHERWG2NGS'
// }

// firebase.initializeApp(firebaseConfig)

// const firestore = firebase.firestore()

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(createFirestoreInstance(firestore))

app.mount('#app')
