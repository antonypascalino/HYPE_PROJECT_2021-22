<!--
  Component: TheFooter
  Description: Footer of the website with company icon and social icons
-->

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img class ="image-container" src="/logoCompatto_bianco.png" alt="logo-bianco-compatto">

      </div>
    <br>
      <!-- Company Icon and Copyright-->
     <div class="footer-label">
       <hr>
       &copy;{{ new Date().getFullYear() }} insideBO Tutti i diritti sono riservati.     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <a href="url">Informativa sulla privacy</a> &nbsp;&nbsp;| &nbsp;&nbsp; <a href="url">Area Legale</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="url">Cookie</a>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <!-- Social list -->
      <div class="icon-list">
        Follow us:
        <div
          v-for="(item, itemIndex) of socialList"
          :key="'icon-item-' + itemIndex"
          class="icon-item"
        >
          <a
            :href="item.link"
            target="_blank"
            rel="noopener"
            :aria-label="item.name"
          >
            <span :class="item.icon"></span>
          </a>
        </div>
      </div>
     </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      /** Social names and usernames */
      socialList: [
        {
          name: 'Facebook',
          icon: 'mdi mdi-facebook',
          link: 'http://www.facebook.com/',
        },
        {
          name: 'Twitter',
          icon: 'mdi mdi-twitter',
          link: 'http://www.twitter.com/',
        },
        {
          name: 'Instagram',
          icon: 'mdi mdi-instagram',
          link: 'http://www.instagram.com/',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Positioning and colors of the whole component */
.footer {
  width: 100%;
  background: rgb(193, 57, 57);
  height: 180px;
  position: absolute;

}
/* Foreground components black */
.footer * {
  color: white;

}
/* Main footer containers */
.footer-content {
  margin-left: 8vw;
  width: 82vw;

  margin-right: 8vw;
}
.footer-label {
  margin-top: 100px;
  text-align: center;
  font-size: 11px;
}

.icon-list {
  display: inline-flex;
  align-items: center;
}
.icon-item {
  margin-left: 1vw;
  font-size: 20px;
}
.icon-list {

}


/* Colored social icons on mouse hover */
.mdi-twitter:hover {
  color: #9a9a9a;
}
.mdi-instagram:hover {
  color: #9a9a9a;
}
.mdi-facebook:hover {
  color: #9a9a9a;
}


.image-container {
  margin-top:30px;
  width:10%
}

</style>
