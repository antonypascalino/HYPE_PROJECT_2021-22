<!--
  Component: TheHeader
  Description: Header of the website with company logo and responsive navbar
-->
<template>
  <header class="header">
    <div class="header-content">

      <!-- Company Logo -->
      <nuxt-link to="/" class="logo">
        <img class="responsive center" src="~/static/logo_rosso.png" alt="insideBO" />
      </nuxt-link>

      <!-- Desktop Navbar -->
      <nav class="desktop-nav">
        <div
          v-for="(item, itemIndex) of menuOptions"
          :key="'menu-item-' + itemIndex"
          class="menu-item"
        >
          <nuxt-link style="text-decoration: none; color: inherit;" :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </div>
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
        class="menu-item"
      >
        <nuxt-link style="text-decoration: none; color: inherit;" :to="item.path">
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
          path: '/poi/',
        },
        {
          name: 'SERVIZI',
          path: '/list',
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
  height:50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  z-index: 90;
  text-align: center;
}
/*Color of the text inside the menu and elimination of the underline*/
.header *{
  text-decoration: none;
  color:inherit;
  text-align: center;
  font-size: 13px;
  padding-bottom:9px;

}


/* Main header containers */
.header-content {
  height: inherit;
  font-family: "Josefin Sans";
  text-align: center;
}
.header-content .mdi {
  font-size: 50px;
  margin-right: 20px;
}
.header-content .menu-item {
  padding-right: 40px;
  padding-left: 40px ;
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
.mdi-menu{
  padding-top: 25px;
  cursor: pointer;
}
.mdi-close{
  padding-top: 25px;
  cursor: pointer;
}
.dropdown-list .menu-item {
  text-align: center;
  margin-top: 25px;
}
.mobile-nav{
  margin-top: -2px;
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
/* Mobile navbar if viewport <=1270 px */
@media screen and (max-width: 1270px) {
  .desktop-nav {
    display: none;
  }
  img{
    max-width: 100%;
    height: auto;
    display: table;
    margin: 0 auto;
    margin-top: 5px;
  }

  .responsive{
    max-width:100%;
    max-height:100%;
  }

  .center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu-item:hover {
    color: #000000;
    cursor: pointer;
    font-weight: bold;
  }
}
/* Desktop navbar if viewport >=1271 px */
@media screen and (min-width: 1271px) {
  .mobile-nav {
    display: none;
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
    -webkit-text-decoration-color: #C13939;
    cursor: pointer;
  }
}
</style>
