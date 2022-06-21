<!--
  Component: SelectFilter
  Description: A select filter for the areas that emits 'filter-change' events on selection
-->

<template>
  <form class="component-container">
    <!--<label for="filter">Filter</label> -->
    <select id="filter" ref="select" name="filter" @change="onChange">
      <option value="Tutti">Tutti</option>
      <option value="Estate">Estivi</option>
      <option value="Inverno">Invernali</option>
    </select>
  </form>
</template>

<script>
export default {
  methods: {
    /** Emit the filter-change event */
    onChange(event) {
      this.$emit('filter-change', event.target.value)
    },
  },
}
</script>

<style scoped>
/* Componetn container */
.component-container {
  margin-top: 15px;
  margin-bottom: 15px;
}
/*Appearence of the label
label {
  width: auto;
  min-width: 40px;
  display: inline-block;
  margin: 8px;
  font-weight: 500;
  font-size: 18px;
  vertical-align: top;
  float: right;
} */
/* Appearance of the select item */
select {
  width: auto;
  min-width: 60px;
  display: inline-block;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #C13939;
  color: #ffffff;
  border: 2px solid #C13939;
  font-family: "Josefin Sans";
  font-size: 1.1vw;
  float: right;
  width: 50%;
  height: 3.8vh;
  transition: 200ms;
}
/* Prevent blue borders on focus/hover */
select:focus,
select:hover {
  background-color: white;
  color: #C13939;
  font-family: "Josefin Sans";
  font-size: 1.1vw;
  height: 3.8vh;
  transition: 200ms;
}

</style>
