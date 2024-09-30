<template>
  <div class="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/layouts/Header.vue";
export default {
  name: 'App',
  components: {Header}
}
</script>

<style scoped>

  .app {
    margin: 0 auto;
  }
</style>