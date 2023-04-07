<!-- Please remove this file from your project -->
<template>
    <div v-if="data"
        class="w-full font-manrope px-5 grid justify-center grid-cols-1 gap-6 lg:container xl:grid-cols-3 xl:px-0 lg:m-auto">
        <div v-for="(item, index) in data" :key="index"
            class="w-full py-10 px-6 rounded-xl transition-shadow group even:bg-blue-100 shadow-3xl xl:shadow-none xl:hover:shadow-3xl cursor-pointer">
            <h2 class="text-black-100 group-even:text-white font-bold text-2xl mb-2.5">{{ item.title }}</h2>
            <h3 class="text-gray-200 group-even:text-gray-500 mb-5">{{ item.description }}</h3>
            <div class="mb-5 flex items-center">
                <span class="text-black-100 group-even:text-white text-5xl font-semibold mr-2">${{ switchValData ?
                    item.price * 0.75 : item.price }}</span>
                <span class="text-gray-200 group-even:text-gray-500 font-light">/ {{ item.payTime }}</span>
            </div>
            <div class="w-full">
                <a href="javascript:;"
                    class="w-full flex justify-center p-2 cursor-pointer text-blue-100 font-semibold hover:text-white border-2 border-blue-100 mb-5 hover:bg-blue-100 rounded transition-colors group-even:border-white group-even:bg-white group-even:text-blue-100 group-even:hover:bg-blue-100 group-even:hover:text-white">{{
                        item.button }}</a>
            </div>
            <ul class="w-full">
                <li v-for="(item, index) in item.ingredients" :key="index"
                    class="flex items-center mb-3 font-medium text-black-100 group-even:text-white last:mb-0">
                    <div class="w-8 h-8 flex items-center justify-center mr-3 bg-gray-300 rounded-full">
                        <i :class="item.icon ? 'tick-icon' : 'close-icon'"></i>
                    </div>
                    {{ item.description }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Plans',
    props: ['switchValData', 'data'],
}
</script>
  