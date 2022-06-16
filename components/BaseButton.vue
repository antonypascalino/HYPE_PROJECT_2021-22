<!--
  Component: BaseButton
  Description: This is the component for the design and the implementation of a button
-->
<template>
  <button type="button" class="btn btn-outline-secondary btn-lg" @click="gotoFunction">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title:{
      type:String,
      required: true
    },
    goto:{
      type:String,
      required: false
    },
  },
  methods: {
    gotoFunction() {
      this.$router.push(this.goto)
    },
  }
}
</script>

<style scoped>
.btn{
  background-color: #C13939;
  color: #ffffff;
  border: 2px solid #C13939;
}
.btn:hover{
  background-color: #ffffff;
  color: black;
}

</style>
