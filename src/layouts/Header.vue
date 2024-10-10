<template>
    <div class="w-max h-[80px] bg-[#262d34] flex justify-start items-center p-10">
      <div class="flex justify-start gap-2.5">
        <div class="w-[30px] h-[30px] bg-white rounded-[5px] p-1" >
          <img src="@/assets/images/logo.svg" alt="logo" class="">
        </div>
        <div class="text-red-700 text-2xl font-bold">Knowledgechain</div>
      </div>
      <IconsList class="ml-[84px]"/>

      <div class="w-[440px] h-10 px-5 py-[9px] bg-[#2c353d] rounded-lg flex-col justify-start items-start gap-2.5 inline-flex ml-10">
        <div class="justify-start items-center gap-60 inline-flex">
          <div class="w-[140px] text-[#858ead] text-sm font-normal font-['Source Sans Pro'] leading-snug">Type here to search...</div>
          <div class="w-5 h-5 pl-px pr-[0.50px] pb-[0.50px] justify-center items-center flex">
            <div class="w-[18.50px] h-[19.50px] relative">
              <div class="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border-2 border-[#858ead]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import IconsList from "@/components/UI/icons/IconsList.vue";
import {MagnifyingGlassIcon} from "@heroicons/vue/24/outline/index.js";

import {ChatBubbleOvalLeftIcon} from "@heroicons/vue/24/solid/index.js";

import {UserIcon} from "@heroicons/vue/24/solid/index.js";
import {ArrowDownCircleIcon } from "@heroicons/vue/24/solid/index.js";

export default {
  name: 'Header',
  components: {
    IconsList,
    MagnifyingGlassIcon,
    ChatBubbleOvalLeftIcon,
    UserIcon,
    ArrowDownCircleIcon,
  },
}
</script>

<style scoped>

</style>