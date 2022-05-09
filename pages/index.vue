<template>
  <div>
    <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
  </div>
  <custom-page :title="title" :image="image" :description="description" />
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    CustomPage,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
}
</script>
