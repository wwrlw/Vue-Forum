<script>
import HomeComponent from "@/components/HomeComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
export default {
  name: "HomeView",
  components: {
    HomeComponent,
    AboutComponent,
    MainComponent
  }
}
</script>

<template>
  <HomeComponent/>
  <MainComponent/>
</template>

<style scoped>

</style>