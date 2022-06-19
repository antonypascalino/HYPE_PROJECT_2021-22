<!--
  Component: TheHeader
  Description: Header of the website with company logo and responsive navbar
-->
<template>
  <header class="header">
    <div class="header-content">
      <!-- Company Logo -->
      <nuxt-link to="/" class="logo">
        <img
          class="responsive center"
          src="~/static/logo_rosso.png"
          alt="insideBO"
        />
      </nuxt-link>

      <!-- Desktop Navbar -->
      <nav class="desktop-nav">
        <template v-for="(item, itemIndex) of menuOptions">
          <nuxt-link
            :to="item.path"
            :key="'menu-item-' + itemIndex"
            style="text-decoration: none"
          >
            <div class="menu-item">
              <span class="label-container">{{ item.name }}</span>
            </div>
          </nuxt-link>
        </template>
      </nav>

      <!-- Mobile Navbar Commands -->
      <nav class="mobile-nav">
        <span
          v-if="!mobileMenuVisibility"
          class="mdi mdi-menu"
          title="Apri menu"
          @click="changeMobileMenuVisibility"
        ></span>
        <span
          v-else
          class="mdi mdi-close"
          title="Chiudi menu"
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
        class="mobile-menu-item"
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
          path: '/pois/',
        },
        {
          name: 'SERVIZI',
          path: '/servizi/',
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
          name: 'CONTATTACI',
          path: '/contattaci/',
        },
        {
          name: 'BOLOGNA IN BREVE',
          path: '/bolognainbreve/',
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
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  z-index: 90;
  text-align: center;
}

.desktop-nav {
  margin-right: 1vw;
}

.menu-item {
  width: auto;
  padding: 0;
  margin-right: 4vw;
  height: 50px;
  display: flex;
  align-items: center;
  border-color: transparent;
}

.nuxt-link-active > .menu-item {
  border-bottom: 9px solid #c13939;
  border-top: 9px solid transparent;
}

.menu-item:hover .label-container,
.menu-item.hover .label-container {
  color: #c13939;
}

.label-container {
  font-family: 'Josefin Sans';
  font-size: 1vw;
  color: black;
  height: 20px;
  width: auto;
  text-underline: none;
  /*border: blue 2px solid;*/
  margin-bottom: 10px;
  margin-top: 13px;
}

.nuxt-link-active .label-container {
  color: #c13939;
}

.header-content .mdi {
  font-size: 50px;
  margin-right: 20px;
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
  height: 350px;
  background: rgb(193, 57, 57);
  color: white;
}
.dropdown-list .mdi {
  text-align: center;
  vertical-align: bottom;
  margin-left: 0px;
}
.mdi-menu {
  padding-top: 25px;
  cursor: pointer;
}
.mdi-close {
  padding-top: 25px;
  cursor: pointer;
}
.dropdown-list .menu-item {
  text-align: center;
  margin-top: 25px;
}
.mobile-nav {
  margin-top: -2px;
}
/* Appearance of the landmark to current page */

/* Logo layout */
.responsive.center {
  width: 150px;
  float: left;
  margin-top: 6px;
  margin-left: 100px;
}
/* Mobile navbar if viewport <=1270 px */
@media screen and (max-width: 1270px) {
  .desktop-nav {
    display: none;
  }
  .responsive.center {
    max-width: 100%;
    height: auto;
    display: table;
    margin: 5px auto 0;
  }

  .responsive {
    max-width: 100%;
    max-height: 100%;
  }
}
/* Desktop navbar if viewport >=1271 px */
@media screen and (min-width: 1271px) {
  .mobile-nav {
    display: none;
  }
  .menu-item {
    position: relative;
  }

  .menu-item:hover {
    border-bottom: 9px solid #c13939;
    border-top: 9px solid transparent;
    transition: border 0.3s, color 0.3s;
    -webkit-transition: border 0.3s, color 0.3s;
  }

  .menu-item:hover::after {
    height: 9px;
    transition: height 0.3s, color 0.3s;
  }
}
</style>
