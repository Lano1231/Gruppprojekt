<script>
  export default {
    props: {
      // eslint-disable-next-line vue/require-default-prop
      msg: String
    }
  }
</script>

<template>
  <div class="container">
    <!-- position: relative; på föräldern. position: absolute; på barnet ("containing block") -->
    <b-row class="g-0">
      <b-col style="display: flex; position: relative">
        <div
          style="
            position: absolute;
            display: flex;
            align-self: center;
            padding: 90%;
          "
        >
          <button>Herr</button>
        </div>
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
            padding: 4%;
          "
        >
          <button>Dam</button>
        </div>
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
</template>
