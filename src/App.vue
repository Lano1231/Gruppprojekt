<script>
  import LandPage from './components/LandPage.vue'
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      LandPage,
      CounterButton,
      HelloWorld
    }
  }
</script>

<template>
  <HelloWorld msg="Hello world:)" />

  
  <CounterButton />
  <LandPage />
  <main>
    <RouterView />
  </main>
</template>
