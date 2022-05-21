<template>
  <nav>
    <ol class="breadcrumb ">
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
    margin-top: 50px;
    /*background-color: #F2F2F2;*/
  }

  .breadcrumb *{
    font-family: "Josefin Sans";
    font-weight: bold;
    color: black;
  }

  .breadcrumb :hover{
    color: #c13939;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    content:">";
    color: #c13939;
  }
</style>
