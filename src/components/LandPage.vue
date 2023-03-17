<script>
  export default {}
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-..."
  />

  <div class="container">
    <b-row class="g-0">
      <b-col style="display: flex; position: relative">
        <div style="position: absolute; display: flex; align-self: center" />
        <b-img
          class="flex-grow-1 object-fit-cover"
          fluid-grow
          src="https://images.unsplash.com/photo-1677442992191-33e64435ad7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
          alt="men image"
        />
        <div class="position-absolute top-50 start-50 translate-middle">
          <router-link to="/tracksuits">
            <b-button variant="dark" @click="handleClick">Shoppa Man</b-button>
          </router-link>
        </div>
      </b-col>
      <b-col style="display: flex; position: relative">
        <div
          style="
            position: absolute;
            display: flex;
            align-self: center;
            padding: 6%;
          "
        />
        <b-img
          class="flex-grow-1 object-fit-cover"
          fluid-grow
          src="https://images.unsplash.com/photo-1677131619099-1f9615ab1610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80"
          alt="women image"
        />
        <div class="position-absolute top-50 start-50 translate-middle">
          <router-link to="/klänningar">
            <b-button variant="light" @click="handleClick"
              >Shoppa Kvinna</b-button
            ></router-link
          >
        </div>
      </b-col>
    </b-row>
  </div>

  <div>
    <b-container>
      <div>
        <div
          class="parallax"
          style="
            background-image: url('https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/13/09/IMG-3856-1.jpg?width=1300');
          "
        >
          <div class="parallax-text">
            <h3 class="fs-5 text-white font-monospace">
              Sell-IT är en hemsida dedikerad till vintagekläder för män och
              kvinnor. Här kan du hitta unika och autentiska klädesplagg från en
              annan tidsepok, allt från retroinspirerade klänningar till coola
              vintagejeans.
            </h3>
          </div>
        </div>
      </div>
    </b-container>
  </div>

  <footer class="bg-light text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #3b5998"
          href="#!"
          role="button"
          ><i class="fab fa-facebook-f"
        /></a>

        <!-- Twitter -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #55acee"
          href="#!"
          role="button"
          ><i class="fab fa-twitter"
        /></a>

        <!-- Google -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #dd4b39"
          href="#!"
          role="button"
          ><i class="fab fa-google"
        /></a>

        <!-- Instagram -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #ac2bac"
          href="#!"
          role="button"
          ><i class="fab fa-instagram"
        /></a>

        <!-- Linkedin -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #0082ca"
          href="#!"
          role="button"
          ><i class="fab fa-linkedin-in"
        /></a>
        <!-- Github -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #333333"
          href="#!"
          role="button"
          ><i class="fab fa-github"
        /></a>
      </section>
    </div>
    <!-- Grid container -->

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
      Sell-IT vintage clothing
    </div>
  </footer>
</template>

<style>
  .parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    position: relative;
  }

  .parallax-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    text-align: center;
    background-color: #6916c18f;
    padding: 20px;
    border-radius: 5px;
    max-width: 80%;
    margin: 0 auto;
  }
</style>
