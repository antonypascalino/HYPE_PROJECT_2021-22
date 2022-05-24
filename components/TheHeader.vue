<!--
  Component: TheHeader
  Description: Header of the website with company logo and responsive navbar
-->
<template>
  <header class="header">
    <div class="header-content">

      <!-- Company Logo -->
      <nuxt-link to="/" class="logo">
        <img src="~/static/logo_rosso.png" alt="insideBO" />
      </nuxt-link>

      <!-- Desktop Navbar -->
      <nav class="desktop-nav">
        <div
          v-for="(item, itemIndex) of menuOptions"
          :key="'menu-item-' + itemIndex"
          class="menu-item"
        >
          <nuxt-link :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </div>
      </nav>

      <!-- Mobile Navbar Commands -->
      <nav class="mobile-nav">
        <span
          v-if="!mobileMenuVisibility"
          class="mdi mdi-menu-open"
          title="Open menù"
          @click="changeMobileMenuVisibility"
        ></span>
        <span
          v-else
          class="mdi mdi-close"
          title="Close menù"
          @click="changeMobileMenuVisibility"
        ></span>
      </nav>
    </div>

    <!-- Mobile Navbar -->
    <nav
      v-if="mobileMenuVisibility"
      class="mobile-nav dropdown-list"
      @click="changeMobileMenuVisibility"
    >
      <div
        v-for="(item, itemIndex) of menuOptions"
        :key="'menu-item-' + itemIndex"
        class="menu-item"
      >
        <nuxt-link :to="item.path">
          {{ item.name }}
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      /** Names and paths of the navbar elements */
      menuOptions: [
        {
          name: 'PUNTI DI INTERESSE',
          path: '/list/',
        },
        {
          name: 'SERVIZI',
          path: '/servizi',
        },
        {
          name: 'EVENTI',
          path: '/eventi/',
        },

        {
          name: 'ITINERARI',
          path: '/itinerari/',
        },
        {
          name: 'ABOUT',
          path: '/about/',
        },
      ],
      /** Expansion status of the mobile navbar menu */
      mobileMenuVisibility: false,
    }
  },
  methods: {
    /** Reduce/expand the dropdown menu of the mobile navbar */
    changeMobileMenuVisibility() {
      this.mobileMenuVisibility = !this.mobileMenuVisibility
    },
  },
}
</script>

<style>
/* Positioning and colors of the whole component */
.header {
  width: 100%;
  background: white;
  height:50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  z-index: 90;
}
/*Color of the text inside the menu and elimination of the underline*/
.header *{
  text-decoration: none;
  color:black;
  text-align: center;
  font-size: 15px;
  padding-bottom:9px
}

/* Main header containers */
.header-content {
  height: inherit;
  font-family: "Josefin Sans";
  text-align: center;
}
.header-content .mdi {
  font-size: 50px;
  margin-right: 25px;
}
.header-content .menu-item {
  padding-right: 40px;
  padding-left: 40px ;
}

.menu-item {
  position: relative;
  padding-right:20px;
  padding-top: 19px;
  height: inherit;
}
.menu-item::after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 0;
  background: #C13939;
  transition: height 0.3s, color 0.3s;
  -webkit-transition: height 0.3s, color 0.3s;
}
.menu-item:hover::after {
  height: 9px;
  transition: height 0.3s, color 0.3s;
}

.menu-item:hover {
  color: #C13939;
}

nav {
  align-items: center;
  height: inherit;
  float: right;
  display: flex;
  font-size: 20px;
  text-align: center;
}
/* Appearance of the mobile navbar elements */
.dropdown-list {
  display: block;
  width: 100vw;
  height: 100vw;
  background: rgba(238, 238, 238, 0.9);
  font-size: 28px;
}
.dropdown-list .mdi {
  text-align: center;
}
.dropdown-list .menu-item {
  text-align: center;
  margin-top: 10px;
}
/* Appearance of the landmark to current page */
.nuxt-link-active {
  font-weight: bold;
  color: #C13939;
}
/* Logo layout */
img {
  width: 150px;
  float: left;
  margin-top: 6px;
  margin-left:100px;
}
/* Mobile navbar if viewport <=825 px */
@media screen and (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
}
/* Desktop navbar if viewport >=826 px */
@media screen and (min-width: 901px) {
  .mobile-nav {
    display: none;
  }
}
</style>
