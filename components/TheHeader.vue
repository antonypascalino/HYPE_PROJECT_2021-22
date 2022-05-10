<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand" href="/">insideBO</a>
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
  background: #ffffff;
}
.logo {
  color: white;
  font-size: 32px;
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
          path: '/events',
        },
        {
          name: 'ITINERARI',
          path: '/itineraries',
        },
        {
          name: 'SERVIZI',
          path: '/services',
        },
        {
          name: 'CONTATTI',
          path: '/contacts',
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
