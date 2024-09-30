<script>
import HomeComponent from "@/components/HomeComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
export default {
  name: "HomeView",
  components: {
    HomeComponent,
    AboutComponent
  }
}
</script>

<template>
  <div><h1>This is HomePage</h1></div>
  <HomeComponent/>
  <AboutComponent/>
</template>

<style scoped>

</style>