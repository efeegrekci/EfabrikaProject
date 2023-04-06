<!-- Please remove this file from your project -->
<template>
  <div v-if="data" class="w-full lg:w-566 m-auto flex justify-center items-center mb-7 lg:mb-17 relative px-5">
    <span>{{ data.textFirst }}</span>
    <label for="switchBtn" class="flex cursor-pointer select-none items-center mx-6">
      <div class="relative">
        <input type="checkbox" id="switchBtn" class="sr-only" @click="clickSwitch()" />
        <div class="block h-6 w-11 rounded-full " :class="switchValDataClone ? 'bg-blue-100' : 'bg-gray-400'"></div>
        <div class="absolute h-5 w-5 rounded-full top-[2px] bg-white transition-all"
          :class="switchValDataClone ? 'left-[22px]' : 'left-[2px]'"></div>
      </div>
    </label>
    <span>{{ data.textSecond }}</span>
    <div class="absolute -bottom-[60px] -right-[30px] items-end hidden lg:flex ">
      <i class="arrow-icon"></i>
      <span class="font-medium text-blue-100 text-lg pb-4">Save 25%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchButton',
  props: ['switchValData', 'data'],
  data(){
    return{
      switchValDataClone: this.switchValData
    }
  },
  methods: {
    clickSwitch() {
      this.switchValDataClone = !this.switchValDataClone
      this.$emit("switchWasChanged", this.switchValDataClone)
    }
  }
}
</script>
