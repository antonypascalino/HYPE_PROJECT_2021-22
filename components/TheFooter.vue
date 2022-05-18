<!--
  Component: TheFooter
  Description: Footer of the website with company icon and social icons
-->

<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Company Icon and Copyright-->
     <div class="footer-label"> &copy;{{ new Date().getFullYear() }} insideBO</div>

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
          name: 'Linkedin',
          icon: 'mdi mdi-linkedin',
          link: 'http://www.linkedin.com/',
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
  height: 165px;
  bottom: 0px;
}
/* Foreground components black */
.footer * {
  color: black;
}
/* Main footer containers */
.footer-content {
  margin-left: 8vw;
  width: 82vw;
  height: inherit;
  margin-right: 8vw;
}
.footer-label,
.icon-list {
  display: inline-flex;
  align-items: center;
  height: inherit;
}
.icon-item {
  margin-left: 1.5vw;
  font-size: 25px;
}
.icon-list {
  float: right;
}

/* Colored social icons on mouse hover */

.mdi-twitter:hover {
  color: #00d9ff;
}
.mdi-linkedin:hover {
  color: #137ffa;
}
.mdi-facebook :hover {
  color: #005eff;
}
/* Footer logo layout */
img.logo {
  height: 50px;
  width: 50px;
  float: left;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
}
</style>
