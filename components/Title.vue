<template>
  <div v-if="data" class="mb-10 lg:mb-16 w-full lg:w-566 m-auto text-center px-5 lg:px-16">
    <div class="text-3xl lg:text-4xl font-bold">{{ data.title }}</div>
    <div class="text-3xl lg:text-4xl font-bold mb-4 title-color">{{ data.subTitle }}</div>
    <div class="text-black-100 lg:text-xl font-normal">{{ data.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['data'],
}
</script>