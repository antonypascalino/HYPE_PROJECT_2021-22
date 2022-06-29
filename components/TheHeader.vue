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
        <button
          class="mdi mdi-menu menu-button-container"
          v-if="!mobileMenuVisibility"
          title="Apri menu"
          @click="changeMobileMenuVisibility"
        ></button>
        <button
          class="mdi mdi-close menu-button-container"
          v-else
          title="Chiudi menu"
          @click="changeMobileMenuVisibility"
        ></button>
      </nav>
      <!-- Mobile Navbar -->
      <nav
        class="dropdown-list"
        v-if="mobileMenuVisibility"
        @click="changeMobileMenuVisibility"
      >
        <template v-for="(item, itemIndex) of menuOptions">
          <nuxt-link
            :to="item.path"
            :key="'menu-item-' + itemIndex"
            style="text-decoration: none"
          >
            <div class="menu-item-mobile">
              <span class="label-container mobile-label">{{ item.name }}</span>
            </div>
          </nuxt-link>
        </template>
      </nav>
    </div>
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
          name: 'EVENTI',
          path: '/eventi/',
        },
        {
          name: 'ITINERARI',
          path: '/itinerari/',
        },
        {
          name: 'SERVIZI',
          path: '/servizi/',
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
.menu-item-mobile {
  height: 6.5vh;
  display: flex;
  align-items: center;
}
.nuxt-link-active > .menu-item {
  border-bottom: 7px solid #c13939;
  border-top: 7px solid transparent;
}
.menu-item:hover .label-container,
.menu-item.hover .label-container {
  color: #c13939;
}
.menu-item-mobile:hover .label-container.mobile-label,
.menu-item-mobile.hover .label-container.mobile-label {
  color: white;
  transition: color 200ms;
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
  transition: color 200ms;
}
.label-container.mobile-label {
  font-size: 1.8vh;
  transition: color 200ms;
}
.nuxt-link-active .label-container {
  color: #c13939;
}
.nuxt-link-active .label-container.mobile-label {
  color: white;
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
  display: flex;
  width: 100vw;
  height: 40vh;
  background: rgb(193, 57, 57);
  color: white;
  justify-content: center;
  flex-direction: column;
  margin-top: -2px;
}
.menu-button-container {
  display: flex;
  border: none;
  background: transparent;
  align-content: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  vertical-align: center;
  margin: auto;
  cursor: pointer;
  line-height: 50px;
}
.mdi-menu {
  font-size: 50px;
  color: black;
}
.mdi-menu:hover {
  color: #c13939;
  transition: color 300ms;
}
.mdi-close {
  font-size: 50px;
  color: black;
}
.mdi-close:hover {
  color: #c13939;
  transition: color 300ms;
}

.dropdown-list {
  text-align: center;
}
/* Logo layout */
.responsive.center {
  width: 150px;
  float: left;
  margin-top: 7px;
  margin-left: 100px;
}

@media screen and (max-width: 500px) {
  img.responsive.center {
    margin-left: 20px;
  }
}

/* Mobile navbar if viewport <=1270 px */
@media screen and (max-width: 870px) {
  .desktop-nav {
    display: none;
  }
  .responsive.center {
    max-width: 100%;
    height: auto;
    margin-left: calc(50vw - 74px);
  }

  .responsive {
    max-width: 100%;
    max-height: 100%;
  }
}
/* Desktop navbar if viewport >=1271 px */
@media screen and (min-width: 871px) {
  .mobile-nav,
  .dropdown-list {
    display: none;
  }

  .menu-item {
    position: relative;
    transition: border 0.3s, color 0.3s;
    border-bottom: 0 solid #c13939;
    border-top: 0 solid transparent;
  }

  .menu-item:hover {
    border-bottom: 7px solid #c13939;
    border-top: 7px solid transparent;
    transition: border 0.3s, color 0.3s;
    -webkit-transition: border 0.3s, color 0.3s;
  }

  .menu-item:hover::after {
    height: 9px;
    transition: height 0.3s, color 0.3s;
  }
}
</style>
