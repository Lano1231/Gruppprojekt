<script>
  import LandPage from './components/LandPage.vue'

  import HelloWorld from './components/HelloWorld.vue'
  import ShowName from './components/ShowName.vue'

  export default {
    data: () => {
      return {
        mobileView: true
      }
    },
    components: {
      HelloWorld,
      LandPage,
      ShowName
    }
  }
</script>

<template>
  <HelloWorld />

  <main>
    <RouterView />
  </main>

  <ShowName />

  <LandPage v-if="!mobileView" />
</template>
