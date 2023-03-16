<template>
  <div>
    <HelloWorld v-if="showHelloWorld" />
    <main>
      <RouterView />
    </main>
    <nav>
      <router-link to="/landpage" v-if="showLandPage"></router-link>
      <router-link to="/Kassa" v-if="showKassaLink"></router-link>
    </nav>
    <LandPage v-if="showLandPage && isMobileView" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  data() {
    return {
      isMobileView: true,
    };
  },
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
      return (
        this.$route.path !== '/kassa' &&
        this.$route.path !== '/login' &&
        this.$route.path !== '/landpage'
      );
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
