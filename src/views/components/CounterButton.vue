<script>
  export default {
    props: {
      // eslint-disable-next-line vue/require-default-prop
      msg: String
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>
<template>
  <header>
    <!--Main Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <!-- Container wrapper -->
      <div class="container justify-content-center justify-content-md-between">
        <!-- Left links -->
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-2 me-lg-0">
            <a
              role="button"
              data-mdb-toggle="sidenav"
              data-mdb-target="#sidenav-1"
              class="btn shadow-0 p-0 me-3 nav-link"
              aria-controls="#sidenav-1"
              aria-haspopup="true"
              @click="kvinnaFunction"
            >
              <i class="fas fa-bars me-1" />
              <span>Nyheter</span>
            </a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <a class="nav-link" href="">Kläder</a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <a class="nav-link" href="">Klänningar</a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <a class="nav-link" href="">Skor</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Container wrapper -->
    </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-white" v-show="showManNav">
      <!-- Container wrapper -->
      <div class="container justify-content-center justify-content-md-between">
        <!-- Left links -->
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-2 me-lg-0">
            <a

              role="button"
              data-mdb-toggle="sidenav"
              data-mdb-target="#sidenav-1"
              class="btn shadow-0 p-0 me-3 nav-link"
              aria-controls="#sidenav-1"
              aria-haspopup="true"
              @click="maleFunction"
            >
              <i class="fas fa-bars me-1" />
              <span>Nyheter</span>
            </a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <a class="nav-link" href="">Kläder</a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <a class="nav-link" href="">Jeans</a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <a class="nav-link" href="">Skor</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Container wrapper -->
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showManNav: false,
    };
  },
  methods: {
    maleFunction() {
      this.showManNav = !this.showManNav;
    },
    kvinnaFunction() {
      this.showManNav = false;
    },
  },
};
</script>
