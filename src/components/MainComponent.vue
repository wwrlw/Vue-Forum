<template>
  <div class="main">
    <div class="item items_1">
      <SideBarComponent/>
    </div>

    <div class="item items_2">

    </div>
    <div class="item items_3">

    </div>
  </div>
</template>

<script>
import SideBarComponent from "@/components/Main/SideBarComponent.vue";
export default {
  name: 'MainComponent',
  components: {
    SideBarComponent,
  }

}
</script>

<style scoped>
  .main {
    justify-content: center;
    margin: 40px 40px 40px 40px;
    display: grid;
    grid-template-columns: 210px 785px 325px;
    grid-template-rows: 842px 950px 880px;
    gap: 20px;
  }

  .item {
    border: 1px solid black;
  }
  .items_1 {

  }
  .main__icons {
    background-color: #2C353D;
  }

</style>