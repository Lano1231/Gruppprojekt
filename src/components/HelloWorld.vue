<script>
  export default {
    data() {
      return {
        showManNav: false,
        showKviNav: false,
        showLogNav: false
      }
    },
    methods: {
      maleFunction() {
        this.showManNav = !this.showManNav
        this.showKviNav = false
      },
      kvinnaFunction() {
        this.showKviNav = !this.showKviNav
        this.showManNav = false
      },
      navFunction() {
        this.showLogNav = !this.showLogNav
      }
    }
  }
</script>

<template>
  <div>
    <!--Main Navigation-->
    <header>
      <!-- Jumbotron -->
      <div class="p-3 text-center bg-white border-bottom">
        <div class="container">
          <div class="row">
            <!-- Left elements -->
            <div
              class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
            >
              <a href="#!" class="ms-md-2">
                <img src="Logo.png" height="35" />
              </a>
              <div
                class="Man col-md-3 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
              >
                <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                  <a class="nav-link" id="hover-man">
                    <b-button
                      @click="maleFunction()"
                      pill
                      variant="outline-secondary"
                      >Man</b-button
                    >
                  </a>
                </li>
              </div>
              <div
                class="col-md-2 w-auto my-autocol-md-1 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
              >
                <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                  <a class="nav-link" id="hover-kvinna">
                    <b-button
                      @click="kvinnaFunction()"
                      pill
                      variant="outline-secondary"
                      >Kvinna</b-button
                    >
                  </a>
                </li>
              </div>
            </div>
            <!-- Left elements -->

            <!-- Center elements -->
            <div class="col-md-4">
              <form class="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <input
                  autocomplete="off"
                  type="search"
                  class="form-control rounded"
                  placeholder="Sök efter artiklar"
                />
                <span class="input-group-text border-0 d-none d-lg-flex"
                  ><i class="fas fa-search"
                /></span>
              </form>
            </div>
            <!-- Center elements -->

            <!-- Right elements -->

            <div
              class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center"
            >
              <div class="d-flex">
                <!-- Cart -->
                <div>
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                        height="22"
                        alt=""
                        loading="lazy"
                      />
                      <b-badge style="font-size: 10px" pill variant="danger"
                        >1</b-badge
                      >
                    </template>

                    <b-dropdown-item href="#">My cart</b-dropdown-item>
                    <b-dropdown-item href="#">Checkout</b-dropdown-item>
                  </b-dropdown>
                </div>

                <div>
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                        class="rounded-circle"
                        height="22"
                        alt=""
                        loading="lazy"
                      />
                    </template>
                    <b-dropdown-item :to="'/login'">My profile</b-dropdown-item>
                    <b-dropdown-item href="#">Settings</b-dropdown-item>
                    <b-dropdown-item href="#">Logout</b-dropdown-item>
                  </b-dropdown>
                </div>

                <!-- Notification -->

                <!-- User -->
              </div>
            </div>
            <!-- Right elements -->
          </div>
        </div>
      </div>
    </header>
  </div>
  <header>
    <!--Main Navigation-->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white"
      v-show="showKviNav"
    >
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
            </a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/Womensjackets">Jackor</RouterLink>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/Womensjeans">Jeans</RouterLink>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/klänningar"
              >Klänningar</RouterLink
            >
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/skor">Skor</RouterLink>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Container wrapper -->
    </nav>

    <nav
      class="navbar navbar-expand-lg navbar-light bg-white"
      v-show="showManNav"
    >
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
            </a>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/shirts">Skjortor</RouterLink>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/jackets">Jackor</RouterLink>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/jeans">Jeans</RouterLink>
          </li>
          <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <RouterLink class="nav-link" to="/tracksuits"
              >Träningsoveraller</RouterLink
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Container wrapper -->
    </nav>
  </header>
</template>
