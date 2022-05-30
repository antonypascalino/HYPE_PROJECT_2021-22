<template>
  <nav class="nav-container">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in crumbs"
        :key="ci"
        class="breadcrumb-item align-items-center"
      >
        <span class = "mdi mdi-menu-right"></span>
        <button class="btn" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
          {{ crumb }}
        </button>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit('selected', crumb);
      if(crumb==='HOME'){
        location.href = '/';
      }
     else {
        const text = crumb.replace(/ /g, "");
        location.href = '/' + text.toLowerCase() + '/';
      }
    },
  },
};
</script>

<style scoped>
  .breadcrumb {
    background-color: transparent;
    font-family: "Josefin Sans";
    font-weight: bolder;
    font-size: 25px;
    width: 100%;
    vertical-align: center;
    margin-bottom: 0;
  }
  .nav-container{
    float: left;
    width: 100%;
    margin-top: 60px;
    height: 38px;
    margin-bottom: 0;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    font-weight: bolder;
    content:"";
    color: #C13939;
  }

  .mdi.mdi-menu-right {
    color: #C13939;
    font-size: 32px;
    line-height: 38px;
    vertical-align: bottom;
  }

  .btn {
    padding-left: 0;
    padding-right: 0;
  }

</style>
