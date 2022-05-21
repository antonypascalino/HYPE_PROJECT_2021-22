<template>
  <div class="page-container">
    <div class ="app-container">
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
    </div>
    <section class="section-container">
      Prossimi Eventi
    </section>
    <section class="section-container">
      Prossimi Eventi
    </section><section class="section-container">
    Prossimi Eventi
  </section><section class="section-container">
    Prossimi Eventi
  </section><section class="section-container">
    Prossimi Eventi
  </section><section class="section-container">
    Prossimi Eventi
  </section><section class="section-container">
    Prossimi Eventi
  </section>
  </div>

</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  layout: 'default',
  components: {Breadcrumb},

  data() {
    return {
      crumbs: ['HOME', 'AREA LEGALE','da'],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
}
</script>
<style>

.app-container {
  float: left;
  position: fixed;
  margin-top: 100px;
  margin-left: 40px;
  z-index: 2;
}
</style>
