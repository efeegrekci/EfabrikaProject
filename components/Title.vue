<template>
  <div v-if="data" class="mb-10 lg:mb-16 w-full lg:w-566 m-auto text-center px-5 lg:px-16">
    <div class="text-ef-md-2 lg:text-ef-xl font-bold mb-4">{{ data.title }}</div>
    <div class="text-ef-black text-sm font-normal">{{ data.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      data: {
        title: "Powerful features for powerful creators",
        description: "Choose a plan that’s right for you"
      }
    }
  }
}
</script>