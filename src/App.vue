<template>
  <div>
    <HelloWorld v-if="showHelloWorld" />
    <main>
      <RouterView />
    </main>
    <nav>
      <router-link v-if="showLandPage && $route.path !== '/landpage'" to="/landpage"></router-link>
      <router-link v-if="showKassaLink" to="/Kassa"></router-link>
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  computed: {
    showHelloWorld() {
      return this.$route.path !== '/Kassa';
    },
    showKassaLink() {
      return this.$route.path !== '/Kassa';
    },
    showLandPage() {
      const excludedPaths = ['/kassa', '/login', '/tracksuits', '/jeans', '/shirts', '/jackets', '/womensjeans' , '/klänningar' , '/womensjackets', '/skor'];
      return !excludedPaths.includes(this.$route.path) || this.$route.path === '/landpage';
    },
  },
  watch: {
    $route(to) {
      if (to.path === '/Kassa') {
        this.isMobileView = false;
      } else {
        this.isMobileView = true;
      }
    },
  },
};
</script>
