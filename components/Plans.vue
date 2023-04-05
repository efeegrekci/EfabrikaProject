<!-- Please remove this file from your project -->
<template>
    <ul v-if="plannerList" class="w-full flex gap-6 justify-center font-manrope flex-wrap px-5 lg:py-0">
        <li v-for="(item, index) in plannerList" :key="index"
            class="w-full lg:w-380 py-10 px-6 rounded-xl transition-shadow group even:bg-ef-blue shadow-3xl lg:shadow-none lg:hover:shadow-3xl cursor-pointer">
            <div class="text-ef-black group-even:text-white font-bold text-ef-md mb-2.5">{{ item.title }}</div>
            <div class="text-ef-gray group-even:text-ef-gray-4 mb-5">{{ item.description }}</div>
            <div class="mb-5 flex items-center">
                <span class="text-ef-black group-even:text-white text-ef-2xl font-semibold mr-2">${{ switchValData ?
                    item.price * 0.75 : item.price }}</span>
                <span class="text-ef-gray group-even:text-ef-gray-4 font-light">/ {{ item.payTime }}</span>
            </div>
            <div class="w-full">
                <span
                    class="w-full flex justify-center p-2 cursor-pointer text-ef-blue font-semibold hover:text-white border-2 border-ef-blue mb-5 hover:bg-ef-blue rounded transition-colors group-even:border-white group-even:bg-white group-even:text-ef-blue group-even:hover:bg-ef-blue group-even:hover:text-white">{{
                        item.button }}</span>
            </div>
            <div class="w-full">
                <div v-for="(item, index) in item.ingredients" :key="index"
                    class="flex items-center mb-3 font-medium text-ef-black group-even:text-white last:mb-0">
                    <div class="w-8 h-8 flex items-center justify-center mr-3 bg-ef-gray-2 rounded-full">
                        <i :class="item.icon ? 'tick-icon' : 'close-icon'"></i>
                    </div>
                    {{ item.description }}
                </div>
            </div>
        </li>
    </ul>
</template>
  
<script>
export default {
    name: 'Plans',
    props: ['switchValData'],
    data() {
        return {
            plannerList: [
                {
                    title: "Freebie",
                    description: "Ideal for individuals who need quick access to basic features.",
                    price: 0,
                    payTime: "Month",
                    button: "Get Started Now",
                    ingredients: [
                        {
                            icon: true,
                            description: "20,000+ of PNG & SVG graphics",
                        },
                        {
                            icon: true,
                            description: "Access to 100 million stock images",
                        },
                        {
                            icon: false,
                            description: "Upload custom icons and fonts",
                        },
                        {
                            icon: false,
                            description: "Unlimited Sharing",
                        },
                        {
                            icon: false,
                            description: "Upload graphics & video in up to 4k",
                        },
                        {
                            icon: false,
                            description: "Unlimited Projects",
                        },
                        {
                            icon: false,
                            description: "Instant Access to our design system",
                        },
                        {
                            icon: false,
                            description: "Create teams to collaborate on designs",
                        }
                    ]
                },
                {
                    title: "Professional",
                    description: "Ideal for individuals who who need advanced features and tools for client work.",
                    price: 25,
                    payTime: "Month",
                    button: "Get Started Now",
                    ingredients: [
                        {
                            icon: true,
                            description: "20,000+ of PNG & SVG graphics",
                        },
                        {
                            icon: true,
                            description: "Access to 100 million stock images",
                        },
                        {
                            icon: true,
                            description: "Upload custom icons and fonts",
                        },
                        {
                            icon: true,
                            description: "Unlimited Sharing",
                        },
                        {
                            icon: true,
                            description: "Upload graphics & video in up to 4k",
                        },
                        {
                            icon: true,
                            description: "Unlimited Projects",
                        },
                        {
                            icon: false,
                            description: "Instant Access to our design system",
                        },
                        {
                            icon: false,
                            description: "Create teams to collaborate on designs",
                        }
                    ]
                },
                {
                    title: "Enterprise",
                    description: "Ideal for businesses who need personalized services and security for large teams. ",
                    price: 100,
                    payTime: "Month",
                    button: "Get Started Now",
                    ingredients: [
                        {
                            icon: true,
                            description: "20,000+ of PNG & SVG graphics",
                        },
                        {
                            icon: true,
                            description: "Access to 100 million stock images",
                        },
                        {
                            icon: true,
                            description: "Upload custom icons and fonts",
                        },
                        {
                            icon: true,
                            description: "Unlimited Sharing",
                        },
                        {
                            icon: true,
                            description: "Upload graphics & video in up to 4k",
                        },
                        {
                            icon: true,
                            description: "Unlimited Projects",
                        },
                        {
                            icon: true,
                            description: "Instant Access to our design system",
                        },
                        {
                            icon: true,
                            description: "Create teams to collaborate on designs",
                        }
                    ]
                }
            ]
        }
    }
}
</script>
  