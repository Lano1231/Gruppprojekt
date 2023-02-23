<script>
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      CounterButton,
      HelloWorld
    }
  }
</script>

<template>
  <HelloWorld msg="Hello world:)" />

  <CounterButton />
</template>
