<script>

import { HeartIcon } from '@heroicons/vue/20/solid/index.js'
import axios from "axios";
import api from "@/api.js";

export default {
  name: 'PostComponent',
  components: {
    HeartIcon,
  },
  data() {
    return {
      posts: [],
      comments: [],
      photos: [],
      users: [],
    }
  },
  mounted() {
    this.fetchPostsInfo();
    this.fetchUsers();
    this.fetchPhotos();
  },
  methods: {

    // sliceStringTitle() {
    //   if (this.posts.body.length > 20) {
    //     this.posts.body.slice()
    //   }
    // },

    async fetchPostsInfo() {
      try {
        const  response = await api.getPosts(4)
        this.posts = response.data;

        console.log(this.posts)

      } catch (error) {
        console.error('Error fetching posts: ', error)
      }
    },
    async fetchUsers () {
      try {
        const response = await api.getUsers()
        this.users = response.data;
        console.log(this.users)
      } catch (error) {
        console.error('Error fetching users: ', error)
      }
    },
    async fetchPhotos () {
      try {
        const response = await api.getPhotos()
        this.photos = response.data;
        console.log(this.photos)
      } catch (e) {
        console.error(e)
      }
    }
  },
}
</script>




<template>
  <div v-for="post in posts" class="w-[785px] h-[196px] rounded-2xl bg-[#262d34] mb-10 flex gap-2.5 p-5">
    <img src="@/assets/images/Rectangle%2024.png" alt="123" class="w-[156px] h-[156px]">
    <div class="flex flex-col mr-14">
      <div class="flex justify-between items-center gap-10  ">
        <div class="text-amber-50 text-lg text-bold ">
          <a href="/">
            {{ post.body.slice(0,100) + '...' }}
          </a>
        </div>
        <div class="h-[25px] w-[25px] rounded-3xl bg-[#2C353D] flex items-center justify-center">
          <HeartIcon class="w-5 h-5 text-white"/>
        </div>
      </div>
        <div class="flex justify-start items-center gap-2.5 pt-2">
          <div class="h-6 px-2.5 py-1 bg-[#2c353d] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
            <div class="text-[#c5d0e6] text-[10px] font-semibold font-['Source Sans Pro'] leading-none">finance</div>
          </div>
          <div class="h-6 px-2.5 py-1 bg-[#2c353d] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
            <div class="text-[#c5d0e6] text-[10px] font-semibold font-['Source Sans Pro'] leading-none">Bitcoin</div>
          </div>
          <div class="h-6 px-2.5 py-1 bg-[#2c353d] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
            <div class="text-[#c5d0e6] text-[10px] font-semibold font-['Source Sans Pro'] leading-none">Crypto</div>
          </div>
        </div>

        <div class="flex justify-between items-center">

          <div class="mt-10 flex justify-start">
            <div class="w-10 h-10 bg-white rounded-3xl flex justify-center items-center">
              <img src="@/assets/images/Memoji%20Boys%203-15.png" alt="Boy">
            </div>
            <div class="flex flex-col  ml-2 ">
              <div class=" text-amber-50 text-bold">{{ post.user}}</div>
              <div class="text-xs text-[#c5d0e6]">3 weeks ago</div>
            </div>
          </div>
          <div class="mt-10 flex justify-between items-center gap-3">
              <div class="text-[#c5d0e6] text-sm ">
                651,324 Views
              </div>
              <div class="text-[#c5d0e6] text-sm ">
                36,6545 Likes
              </div>
              <div class="text-[#c5d0e6] text-sm ">
                {{ post.comment }} comments
              </div>
          </div>

        </div>
    </div>


  </div>

</template>


<style  scoped>

</style>