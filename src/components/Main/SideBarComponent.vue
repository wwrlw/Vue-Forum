<template>
  <div class=" mb-10 bg-[#262d34] rounded-2xl flex flex-col justify-start ">
    <div class="flex-col justify-start items-start gap-2.5 flex p-2">
      <div class=" py-1.5 bg-[#262d34] rounded-md flex-col justify-start items-start flex">
        <div class="justify-start items-center gap-1.5 inline-flex">
          <div class="p-1 bg-[#2c353d] rounded-md justify-start items-start gap-2.5 flex">
            <div class="w-10 h-10 justify-center items-center flex">
                <img src="@/assets/images/ic_fiber_new_24px%202.svg" class="w-10 h-10">
            </div>
          </div>
          <div class="flex-col  gap-0.5 ">
            <div class="text-white text-s w-[140px] font-semibold"><a href="/">Newest and Recent</a></div>
            <div class="text-[#97989d] text-[12px] font-normal ">Find the latest update</div>
          </div>
        </div>
      </div>

    </div>
    <div class="flex-col justify-start items-start gap-2.5 flex p-2">
      <div class=" py-1.5 bg-[#262d34] rounded-md flex-col justify-start items-start flex">
        <div class="justify-start items-center gap-1.5 inline-flex">
          <div class="p-1 bg-[#2c353d] rounded-md justify-start items-start gap-2.5 flex">
            <div class="w-10 h-10 justify-center items-center flex">
                <img src="@/assets/images/Group.svg " class="w-10 h-10">
            </div>
          </div>
          <div class="flex-col  gap-0.5 ">
            <div class="text-white text-s w-[140px] font-semibold"><a href="/">Popular of the day</a></div>
            <div class="text-[#97989d] text-[12px] font-normal ">Shots featured today by curators</div>
          </div>
        </div>
      </div>

    </div>
    <div class="flex-col justify-start items-start gap-2.5 flex p-2">
      <div class=" py-1.5 bg-[#262d34] rounded-md flex-col justify-start items-start flex">
        <div class="justify-start items-center gap-1.5 inline-flex">
          <div class="p-1 bg-[#2c353d] rounded-md justify-start items-start gap-2.5 flex">
            <div class="w-10 h-10 justify-center items-center flex">
                <img src="@/assets/images/Following%20Icon.svg" class="w-10 h-10">
            </div>
          </div>
          <div class="flex-col  gap-0.5 ">
            <div class="text-white text-s w-[140px] font-semibold"><a href="/">Following</a></div>
            <div class="text-[#97989d] text-[12px] font-normal ">Explore from your favorite person</div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>

</style>