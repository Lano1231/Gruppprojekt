<template>
  <h1 class="text-center">Logga in</h1>

  <b-container fluid>
    <b-row
      class="d-flex justify-content-center text-center"
      v-for="type in types"
      :key="type"
    >
      <b-col sm="8">
        <label :for="`type-${type}`"
          >Your <code>{{ type }} </code>:</label
        >
      </b-col>
      <b-col sm="8">
        <b-form-input
          :id="`type-${type}`"
          :type="type"
          :placeholder="'Enter your ' + [[type]]"
        />
      </b-col>
    </b-row>
  </b-container>

  <div class="d-flex justify-content-center mt-3">
    <button class="btn-primary btn">Logga in</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        types: ['email', 'password']
      }
    }
  }
</script>
