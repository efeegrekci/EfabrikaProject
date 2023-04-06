<template>
  <main class="py-10 lg:py-28">
    <Title :data="data.titleComponent" />
    <SwitchButton @switchWasChanged="switchVal = $event" :switchValData="switchVal" :data="data.switchComponent" />
    <Plans :switchValData="switchVal" :data="data.plannerList" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      switchVal: false,
      data: {
        titleComponent: {
          title: "Powerful features for",
          subTitle: "powerful creators",
          description: "Choose a plan that’s right for you"
        },
        switchComponent: {
          textFirst: "Pay Monthly",
          textSecond: "Pay Yearly",
        },
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
}
</script>
