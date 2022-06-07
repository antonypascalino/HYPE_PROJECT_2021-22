<template>
  <nav class="nav-container">
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in crumbs"
        :key="ci"
        class="breadcrumb-item align-items-center"
      >
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
    background-color:#F2F2F2  ;
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
    margin-top: 0;
    height: 38px;
    margin-bottom: 0;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    content:"/";
    color: #C13939;
  }
  .btn{
    background-color: transparent;
    color:black
  }
</style>
