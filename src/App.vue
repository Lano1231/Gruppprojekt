<script>
  import LandPage from './components/LandPage.vue'

  import HelloWorld from './components/HelloWorld.vue'
  import ShowName from './components/ShowName.vue'

  export default {
    components: {
      HelloWorld,
      LandPage,
      ShowName
    }
  }
</script>

<template>
  <HelloWorld />
  <ShowName />

  <LandPage />
  <main>
    <RouterView />
  </main>
</template>
