<script>
  import HelloWorld from './components/HelloWorld.vue'
  import ShowName from './components/ShowName.vue'

  export default {
    data: () => {
      return {
        mobileView: true,
        showNav: false
      }
    },
    components: {
      HelloWorld,
      ShowName
    }
  }
</script>

<template>
  <HelloWorld v-if="!mobileView" />

  <main>
    <RouterView />
  </main>

  <ShowName />

  <LandPage v-if="!mobileView" />

  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
  import Sidebar from './components/MobileNav.vue'
</script>

<style lang="scss">
  :root {
    --gray: #464646;
    --dark-blue: #073c83;
    --maincolor: #00ffdd;
    --ljus: #f1e4e4f8;
    --sidebar-width: 230px;
    --primary-alt: #0a665a;
    --dark-alt: #20201e;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', sans-serif;
  }

  body {
    background: var(--light);
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  .app {
    display: flex;
    main {
      flex: 1 1 0;
      padding: 2rem;

      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }
  }
</style>
