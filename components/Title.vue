<template>
  <div v-if="data" class="mb-10 lg:mb-16 w-full lg:w-566 m-auto text-center px-5 lg:px-16">
    <h1 class="text-3xl lg:text-4xl font-bold mb-4 ">{{ data.title }}
      <span class="text-3xl lg:text-4xl font-bold title-color">{{ data.subTitle }}</span>
    </h1>
    <p class="text-black-100 lg:text-xl font-normal">{{ data.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['data'],
}
</script>