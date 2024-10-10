<template>
  <div class="">
    <div class="h-[86px] w-max p-5 bg-[#262d34] rounded-2xl flex-col justify-start  gap-2.5 ">
      <div class="justify-start items-center gap-5 inline-flex">
        <div class="w-10 h-10 relative">
          <div class="w-10 h-10 bg-white flex justify-center items-center rounded-full">
            <img src="@/assets/images/Memoji%20Boys%203-15.png" alt="">
          </div>
          <div class="w-[30px] h-8 left-[5px] top-[4px] absolute">
          </div>
        </div>
        <div class="text-[#858ead] text-sm font-normal font-['Source Sans Pro'] leading-snug">Let’s share what going on your mind...</div>
        <button @click="openModal" class="text-white text-sm font-bold px-4 py-3 bg-red-700
        rounded-md hover:bg-[red]">
          Create Post
        </button>
      </div>
    </div>
    <div v-if="showModal">
      <ModalView @close="closeModal"/>
    </div>

  </div>


</template>

<script>
import axios from "axios";
import ModalView from "@/views/ModalView.vue";
export default {
  name: 'CreatePostComponent',
  data() {
    return {
      showModal: false,
      response: '',
    }
  },
  methods: {
    openModal () {
      this.showModal = true;
    },
    closeModal () {
      this.showModal = false;
    },
    async fetchPosts () {
      try {
        const response = await axios.get('')

      } catch (error) {
        console.error('Error fetching posts info: ', error)
      }
    },
  },
  mounted() {

  },
  components: {
    ModalView,
  }
}
</script>

<style scoped>

</style>