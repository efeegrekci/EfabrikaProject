<template>
  <main class="py-10 lg:py-28">
    <Title />
    <SwitchButton @switchWasEdited="switchVal = $event" :switchValData="switchVal" />
    <Plans :switchValData="switchVal" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      switchVal: false,
    }
  },
}
</script>
