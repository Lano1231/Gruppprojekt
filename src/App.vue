<script>
  import HelloWorld from './components/HelloWorld.vue'
  import ShowName from './components/ShowName.vue'

  export default {
    components: {
      HelloWorld,
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
</template>
