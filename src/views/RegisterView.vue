<template>
  <h1>Här kan du bli ny kund hos oss!</h1>
  <form>
    <label for="name">Namn:</label>
    <input type="text" v-model="namn" />

    <label for="email">E-Mejl::</label>
    <input type="email" v-model="emejl" />

    <label for="password">Lösenord:</label>
    <input type="password" v-model="password" />

    <button @click="register">Registera dig</button>
  </form>
  <div v-if="submitted">
    <h2>Välkommen som ny kund {{ namn }} !</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return { namn: '', emejl: '', password: '', submitted: false }
    },
    methods: {
      register: function () {
        this.submitted = true
      }
    }
  }
</script>
