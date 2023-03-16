<script>
  export default {

  }
</script>

<template>
  <div class="container bg-dark">
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
              Sell-IT är en webbplats dedikerad till vintagekläder för män och
              kvinnor
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
          <h4>Om oss</h4>
          <p>
            Vi är en vintageklädbutik som är dedikerad till att tillhandahålla hög kvalitet
            kläder för män och kvinnor.
          </p>
        </div>
        <div class="col-md-6">
          <h4>Kontakta oss</h4>
          <p>E-post: contact@sellit.com</p>
          <p>Telefon: 555-555-5555</p>
          <p>Adress: 123 Main St, Anytown USA</p>
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
