<template>
  <div class="w-[325px] h-[532px] bg-[#262d34] rounded-2xl p-5">
    <div class="flex justify-start items-center gap-2.5 mb-4">
      <div class="text-[#f7f7f7] text-xl font-semibold">Podcasts</div>
      <ArrowRightIcon class="h-7 w-7 text-amber-50 mt-1"/>
    </div>
    <div class="flex flex-col justify-start gap-2.5 ">
     <div class="flex justify-start items-center gap-2.5">
       <img src="@/assets/images/Rectangle%2054.png" alt="123" class="w-[58px] h-[58px] rounded-xl">
       <div class="">
         <div class="w-[193px] text-[#f7f7f7] text-xs font-semibold">
           Selling a Business and Scaling Another Amidst Tragedy.
         </div>
         <div class="text-[#97989d] text-[10px] font-normal ">
           by Michele Hansen
         </div>
       </div>
       <ArrowRightIcon class=" text-amber-50"/>
     </div>

    </div>
  </div>
</template>

<script>

import {ArrowRightIcon} from "@heroicons/vue/20/solid/index.js";

export default {
  name: 'PodcastComponent',
  components: {
    ArrowRightIcon,
  },
}
</script>

<style  scoped>

</style>