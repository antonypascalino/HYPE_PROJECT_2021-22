<template>
  <div class="container mt-5" >
    <div class="jumbotron">
      <h1 class="display-4">{{ title }}</h1>
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 100vw;
  width: 80vw;
  margin: 0px 0;
}
.page {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  background: rgb(193, 57, 57);
}
p {
  text-align: left;
}

</style>

<script>
export default {
  name: 'CustomPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
