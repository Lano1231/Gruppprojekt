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
                    <button @click="maleFunction()">Man</button>
                  </a>
                </li>
              </div>
              <div
                class="col-md-2 w-auto my-autocol-md-1 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
              >
                <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                  <a class="nav-link" id="hover-kvinna">
                    <button @click="kvinnaFunction()">Kvinna</button>
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
                  ><i class="fas fa-search" /></span>
              </form>
            </div>
            <!-- Center elements -->

            <!-- Right elements -->
            <div
              class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center"
            >
              <div class="d-flex">
                <!-- Cart -->
                <a class="text-reset me-3" href="#">
                  <span><i class="fas fa-shopping-cart" /></span>
                  <span class="badge rounded-pill badge-notification bg-danger"
                    >1</span
                  >
                </a>

                <!-- Notification -->
                <div class="dropdown">
                  <a
                    class="text-reset me-3 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    @click="showNotifications = !showNotifications"
                    aria-expanded="false"
                  >
                    <i class="fas fa-bell" />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    v-if="showNotifications"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li><a class="dropdown-item" href="#">Some news</a></li>
                    <li><a class="dropdown-item" href="#">Another news</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>

                <!-- User -->
                <div class="dropdown">
                  <a
                    class="text-reset dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                      class="rounded-circle"
                      height="22"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li><a class="dropdown-item" href="#">My profile</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Right elements -->
          </div>
        </div>
      </div>
    </header></div>
    </template>
