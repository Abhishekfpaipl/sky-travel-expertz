<template>
  <div class="container mt-4 text-start">
    <div class="row border my-2" v-for="(exclusion, index) in product.exclusions" :key=index>
      <div v-if="exclusion.title" class="col-12 d-flex align-items-center bg-light p-2 col-md-4">{{ exclusion.title }}
      </div>
      <div v-else class="col-12 d-flex align-items-center bg-light p-2 col-md-4">Title {{ index + 1 }}</div>
      <div class="col-12 d-flex align-items-center col-md-8 p-2">{{ exclusion.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradeFairExclusionSection',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
<style lang="">

</style>