<script>
  export default {
    props: {
      // eslint-disable-next-line vue/require-default-prop
      msg: String
    }
  }
</script>

<template>
  <div class="container bg-dark">
    <!-- position: relative; på föräldern. position: absolute; på barnet ("containing block") -->
    <b-row class="g-0">
      <b-col style="display: flex; position: relative">
        <div style="position: absolute; display: flex; align-self: center" />
        <b-img
          class="flex-grow-1 object-fit-cover"
          fluid-grow
          src="https://images.unsplash.com/photo-1677442992191-33e64435ad7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
          alt="men image"
        />
      </b-col>
      <b-col style="display: flex; position: relative">
        <div
          style="
            position: absolute;
            display: flex;
            align-self: center;
            padding: 5%;
          "
        />
        <b-img
          class="flex-grow-1 object-fit-cover"
          fluid-grow
          src="https://images.unsplash.com/photo-1677131619099-1f9615ab1610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80"
          alt="women image"
        />
      </b-col>
    </b-row>
    <!--
    <div class="d-flex align-items-center justify-content-center">


    </div> -->
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
            <h1 bold>
              Sell-IT is a website dedicated to vintage clothing for men and
              women
            </h1>
          </div>
        </div>
      </div>
    </b-container>
  </div>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>About Us</h4>
          <p>
            We are a vintage clothing store dedicated to providing high-quality
            clothing for men and women.
          </p>
        </div>
        <div class="col-md-6">
          <h4>Contact Us</h4>
          <p>Email: contact@sellit.com</p>
          <p>Phone: 555-555-5555</p>
          <p>Address: 123 Main St, Anytown USA</p>
        </div>
      </div>
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
  }
</style>
