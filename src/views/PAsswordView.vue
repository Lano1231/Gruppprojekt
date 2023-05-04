<template>
  <div>
    <h1>Återställ ditt lösenord</h1>
    <form>
      <label for="email">Din e-mail:</label>
      <input type="email" v-model="mejl" />

      <button @click.prevent="skickaForm">Skicka</button>
    </form>

    <div v-if="submitted">
      <h2>Dina uppgifter har skickats</h2>
      <p>
        Ett e-mail med instruktioner om hur du återställer ditt lösenord har
        sänts till
        {{ mejl }}.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mejl: '',
        submitted: false
      }
    },
    methods: {
      skickaForm: function () {
        this.submitted = true
      }
    }
  }
</script>
