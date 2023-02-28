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
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKO88cBrOUKw7-3RmDkkeaiGlGZ9twdy40bIjSHpQMdzGexY1q"
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
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSK3UceI4uNF7c6VTQNDysmktTKInWfT0FvDQhdK8OCyTgJQRcD"
          alt="women image"
        />
      </b-col>
    </b-row>
    <!--
    <div class="d-flex align-items-center justify-content-center">


    </div> -->
  </div>
</template>
