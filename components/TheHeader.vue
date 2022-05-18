<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <nuxt-link to="/" class="logo">
      <img src="~/static/logo_rosso.png" alt="Plug-IT" />
    </nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.header {
  background: white;
  font-family: "Josefin Sans";
  font-weight: 550;
}

/* Logo layout */
img {
  height: 45px;
  width: 144px;
  float: left;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
}
.logo {
  display: block;
}
</style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'PUNTI DI INTERESSE',
          path: '/poi',
        },
        {
          name: 'EVENTI',
          path: '/eventi',
        },
        {
          name: 'ITINERARI',
          path: '/itinerari',
        },
        {
          name: 'SERVIZI',
          path: '/servizi',
        },
        {
          name: 'ABOUT',
          path: '/about',
        },
      ],
    }
  },
}
</script>
