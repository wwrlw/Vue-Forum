<template>
  <div class=" pl-5 pr-[25px] py-5 bg-[#262d34] rounded-2xl justify-start items-start gap-2.5 inline-flex">
    <div class="flex-col justify-start items-start gap-5 inline-flex">
        <div class="justify-center items-end gap-[3px] flex">
          <div class="text-amber-50 text-xl font-semibold w-max">Pinned Group
          </div>
          <div class="">
            <ArrowRightIcon class="w-5 h-5 text-amber-50"/>
          </div>


        </div>
      <div class="flex-col justify-start items-start gap-2.5 flex">
        <div class="justify-start items-start gap-2.5 inline-flex">

          <img src="@/assets/images/Icon.svg" alt="">
          
          <div class="flex-col justify-start items-start inline-flex">
            <div class="text-amber-50 text-xs font-semibold">#javascript</div>
            <div class="text-[#97989d] text-[10px] font-normal ">82,645 Posted by this tag</div>
          </div>
        </div>
        <div class="justify-start items-start gap-2.5 inline-flex">

          <img src="@/assets/images/Icon-1.svg" alt="">
          
          <div class="flex-col justify-start items-start inline-flex">
            <div class="text-[#f7f7f7] text-xs ">#bitcoin</div>
            <div class="text-[#97989d] text-[10px] ">65,523 Posted • Trending</div>
          </div>
        </div>
        <div class="justify-start items-start gap-2.5 inline-flex">
          <img src="@/assets/images/Icon-2.svg" alt="">
          <div class="flex-col justify-start items-start inline-flex">

            <div class="text-[#f7f7f7] text-xs font-semibold font-['Source Sans Pro'] leading-[18px]">#design</div>
            <div class="text-[#97989d] text-[10px] font-normal font-['Source Sans Pro'] leading-[14px]">51,354 • Trending in Bangladesh</div>
          </div>
        </div>
        <div class="justify-start items-start gap-2.5 inline-flex">
          <img src="@/assets/images/Icon-3.svg" alt="">
          <div class="flex-col justify-start items-start inline-flex">
            <div class="text-[#f7f7f7] text-xs font-semibold font-['Source Sans Pro'] leading-[18px]">#blogging</div>
            <div class="text-[#97989d] text-[10px] font-normal font-['Source Sans Pro'] leading-[14px]">48,029 Posted by this tag</div>
          </div>
        </div>
        <div class="justify-start items-start gap-2.5 inline-flex">
          <img src="@/assets/images/Icon-4.svg" alt="">
          <div class="flex-col justify-start items-start inline-flex">
            <div class="text-[#f7f7f7] text-xs font-semibold font-['Source Sans Pro'] leading-[18px]">#tutorial</div>
            <div class="text-[#97989d] text-[10px] font-normal font-['Source Sans Pro'] leading-[14px]">51,354 • Trending in Bangladesh</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ArrowRightIcon} from "@heroicons/vue/20/solid/index.js";
export default {
  name: 'PinnedGroup',
  components: {
    ArrowRightIcon,
  }
}

</script>

<style scoped>

</style>