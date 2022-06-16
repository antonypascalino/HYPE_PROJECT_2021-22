<!--
  Component: BaseButton
  Description: This is the component for the design and the implementation of a button.
-->
<template>
  <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image" :style="{'background-image': 'url(' + img + ')'}"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <nuxt-link :to="`/${link}/${id}`">
       <base-button title="Vedi dettagli"></base-button>
      </nuxt-link>
    </div>
  </div>
</template>


<style scoped>
.card {
  border: 2px solid lightgray;
  background-color: #EBEBEB;
}

.card-image {
  margin-top: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>

<script>
import baseButton from "~/components/BaseButton";
export default {
  name: 'CardInfo',
  components:{
      baseButton
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
