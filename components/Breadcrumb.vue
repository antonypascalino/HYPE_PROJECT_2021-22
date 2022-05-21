<template>
  <nav>
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
     else location.href='/'+crumb.toLowerCase()+'/';

    },
  },
};
</script>

<style scoped>
  .breadcrumb {
    background-color: white;
  }

</style>
