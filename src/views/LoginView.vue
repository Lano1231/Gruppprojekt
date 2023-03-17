<template>
<div class="container">
  <h1 class="title">Login</h1>
  <div v-if="!isLoggedIn" class="form">
    <label class="label">Username(admin):</label>
    <input type="text" class="input" v-model="username" />
    <label class="label">Password(1234):</label>
    <input type="password" class="input" v-model="password" />
    <button class="button" @click="login">Login</button>
  </div>
  <div v-else>
    <p class="welcome">You are logged in as {{ username }}</p>
    <button class="button" @click="logout">Logout</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false
    }
  },
  mounted() {
    const user = localStorage.getItem('user')
    if (user) {
      this.username = user
      this.isLoggedIn = true
    }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '1234') {
        localStorage.setItem('user', this.username)
        this.isLoggedIn = true
      }
    },
    logout() {
      localStorage.removeItem('user')
      this.username = ''
      this.password = ''
      this.isLoggedIn = false
    }
  }
}
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 2rem;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.label {
  font-size: 1.2rem;
  margin-top: 10px;
}

.input {
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.button {
  background-color: #24bec6;
  color: #fff;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0069d9;
}

.welcome {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
}

@media only screen and (max-width: 600px) {
  .input,
  .button {
    font-size: 1rem;
    padding: 5px;
  }
}
</style>
