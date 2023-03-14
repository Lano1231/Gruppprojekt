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
        console.log('hej')
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
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="logo.png" alt="" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined">Menu</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div
      class="Man col-md-3 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
    >
      <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
        <a class="material-symbols-outlined">
          <button @click="maleFunction()">Man</button>
        </a>
      </li>
    </div>
    <div
      class="col-md-2 w-auto my-autocol-md-1 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
    >
      <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
        <a class="material-symbols-outlined">
          <button @click="kvinnaFunction()">woman</button>
        </a>
      </li>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light" v-show="showKviNav">
      <!-- Container wrapper -->
      <div class="container justify-content-center justify-content-md-between">
        <!-- Left links -->
        <ul class="navbar-nav">
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

    <nav class="navbar navbar-expand-lg navbar-light" v-show="showManNav">
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
  </aside>
</template>

<script setup>
  import { ref } from 'vue'
  const is_expanded = ref(false)
  const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
  }
</script>

<style lang="scss" scoped>
  aside {
    min-height: 100vh;
    padding: 1rem;
    overflow: hidden;
    flex-direction: column;
    width: calc(2rem + 2rem);
    transition: 0.2s ease-out;
    background-color: var(--dark-blue);
    color: var(--ljus);
    display: flex;

    .logo {
      margin-bottom: 1rem;
      img {
        width: 2.5rem;
      }
    }

    .menu-toggle-wrap {
      margin-bottom: 1rem;
      position: relative;
      transition: 0.2s ease-out;
      display: flex;
      justify-content: flex-end;

      .menu-toggle {
        transition: 0.2s ease-out;
        .material-symbols-outlined {
          color: var(--ljus);
          font-size: 2rem;
        }
      }
    }

    h3,
    .button .text {
      opacity: 0;
      transition: 0.25s ease-out;
    }

    h3 {
      font-size: 1rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      color: var(--ljus);
    }
    .menu {
      margin: 0 -1rem;

      .button {
        display: flex;
        align-items: center;
        text-decoration: none;

        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;

        .material-symbols-outlined {
          font-size: 2rem;
          color: var(--ljus);

          transition: 0.2s ease-out;
        }
        .text {
          color: var(--ljus);
        }
        &:hover {
          background-color: var(--dark-alt);

          .material-symbols-outlined,
          .text {
            color: var(--maincolor);
          }
        }
      }
    }

    &.is-expanded {
      width: var(--sidebar-width);

      .menu-toggle-wrap {
        top: -3rem;
      }
      h3,
      .button .text {
        opacity: 1;
      }
      .button {
        .material-symbols-outlined {
          margin-right: 1rem;
        }
      }

      .logo {
        margin-bottom: 1rem;
        img {
          width: 10rem;
          transition: 0.3s ease-out;
        }
      }
    }

    @media (max-width: 768px) {
      z-index: 99;
      position: fixed;
    }
  }
</style>
