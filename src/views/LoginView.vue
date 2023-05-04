<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <div v-if="!isLoggedIn" class="form">
      <label class="label">Username(user):</label>
      <input type="text" class="input" v-model="username" />
      <label class="label">Password(1234):</label>
      <input type="password" class="input" v-model="password" />
      <button class="button" @click="login">Login</button>
    </div>

    <div v-else>
      <p class="welcome">You are logged in as {{ username }}</p>

      <div class="review-form">
        <h2>Write a Review</h2>
        <form>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="rating">Rating:</label>
            <select id="rating" v-model="rating" required>
              <option value="">--Select--</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
          </div>
          <div>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review" required />
          </div>
          <button type="submit" @click.prevent="submitReview">
            Submit Review
          </button>
        </form>
      </div>
      <button class="button" @click="logout">Logout</button>
    </div>
  </div>
  <div>
    <router-link :to="'/password'"
      ><button>Glömt lösenordet?</button></router-link
    >
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        isLoggedIn: false,
        name: '',
        email: '',
        rating: '',
        review: ''
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
        if (this.username === 'user' && this.password === '1234') {
          localStorage.setItem('user', this.username)
          this.isLoggedIn = true
        }
      },
      logout() {
        localStorage.removeItem('user')
        this.username = ''
        this.password = ''
        this.isLoggedIn = false
      },
      submitReview() {
        let review = {
          name: this.name,
          email: this.email,
          rating: this.rating,
          review: this.review
        }
        console.log(review)
        // Clear the form fields
        this.name = ''
        this.email = ''
        this.rating = ''
        this.review = ''
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
  .review-form {
    max-width: 600px;
    margin: 0 auto;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type='submit'] {
    background-color: #4caf50;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button[type='submit']:hover {
    background-color: #3e8e41;
  }
</style>
