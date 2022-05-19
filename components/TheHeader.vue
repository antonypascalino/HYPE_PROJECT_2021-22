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
          class="mdi mdi-menu"
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
          <span :class="item.icon"></span>
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
          icon: 'mdi mdi-sign-direction',
          path: '/poi/',
        },
        {
          name: 'SERVIZI',
          icon: 'mdi mdi-account-group',
          path: '/servizi',
        },
        {
          name: 'EVENTI',
          icon: 'mdi mdi-calendar-month',
          path: '/eventi/',
        },

        {
          name: 'ITINERARI',
          icon: 'mdi mdi-view-grid',
          path: '/itinerari/',
        },
        {
          name: 'ABOUT',
          icon: 'mdi mdi-email',
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
  position: fixed;
  width: 100vw;
  background: white;
  height:50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
}

/*Color of the text inside the menu and elimination of the underline*/
.header *{
  color:black;
  text-decoration: none;
  color:black;
  text-align: center;
  font-size: 15px;

}

/* Main header containers */
.header-content {
  height: inherit;
  margin-left: 8vw;
  margin-right: 2vw;
  font-family: "Josefin Sans";
  text-align: center;
}

.header-content .mdi {
  font-size: 50px;
  margin-right: 25px;
}
.header-content .menu-item {
  margin-left: 1.5vw;
}

/**/
.menu-item :hover {
  border-bottom: 9px solid #c13939;
  color: #c13939 ;
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
  vertical-align: bottom;
  margin-left: 5px;
}
.dropdown-list .menu-item {
  text-align: right;
  margin-right: 8vw;
  margin-top: 10px;
}
/* Appearance of the landmark to current page */
.nuxt-link-active {
  font-weight: bold;
}
/* Logo layout */
img {
  width: 150px;
  float: left;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
}
.logo {
  display: block;
}
/* Mobile navbar if viewport <=825 px */
@media screen and (max-width: 825px) {
  .desktop-nav {
    display: none;
  }
}
/* Desktop navbar if viewport >=826 px */
@media screen and (min-width: 826px) {
  .mobile-nav {
    display: none;
  }
}
</style>
