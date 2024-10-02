<template>
  <div class="main">
    <div class="item items_1">
      <SideBarComponent/>
      <PopularTags class="mb-10"/>
      <PinnedGroup/>
    </div>

    <div class="item items_2">
      <CreatePostComponent class="mb-10"/>

      <PostComponent/>
    </div>
    <div class="item items_3">
      <MeetupsComponent class="mb-10"/>
      <PodcastComponent/>
    </div>
  </div>
</template>

<script>
import CreatePostComponent from "@/components/Main/CreatePostComponent.vue";
import PodcastComponent from "@/components/Main/PodcastComponent.vue";
import MeetupsComponent from "@/components/Main/MeetupsComponent.vue";
import PostComponent from "@/components/Main/PostComponent.vue";
import PopularTags from "@/components/Main/PopularTags.vue";
import SideBarComponent from "@/components/Main/SideBarComponent.vue";
import PinnedGroup from "@/components/Main/PinnedGroup.vue";
export default {
  name: 'MainComponent',
  components: {
    SideBarComponent,
    PopularTags,
    PinnedGroup,
    PostComponent,
    MeetupsComponent,
    PodcastComponent,
    CreatePostComponent,
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
  }
  .items_1 {

  }
  .main__icons {
    background-color: #2C353D;
  }

</style>