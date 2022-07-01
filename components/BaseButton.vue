<!--
  Component: BaseButton
  Description: This is the component for the design and the implementation of a button. The component receives th
-->
<template>
  <button type="button" class="btn btn-outline-secondary btn-lg" @click="gotoFunction">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    goto: {
      type: String,
      required: false,
    },
  },
  methods: {
    gotoFunction() {
      this.$router.push(this.goto)
    },
  },
}
</script>

<style scoped>
/*Button color*/
.btn {
  background-color: #c13939;
  color: #ffffff;
  border: 2px solid #c13939;
  outline: none;
}
/*Change the color of the button with the mouse hover*/
.btn:hover {
  background-color: #ffffff;
  color: black;
  cursor: pointer;
}
.btn:active,
.btn:focus {
  outline: none !important;;
  border: none;
}
.btn:visited {
  outline: none !important;;
  border: none;
}
</style>
