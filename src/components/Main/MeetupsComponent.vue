<template>
  <div class="w-[325px] h-[328px] flex flex-col bg-[#262d34] rounded-xl items-start p-5">
    <div class="text-amber-50 text-xl font-semibold ">
      Meetups
    </div>

      <div v-for="meet in meetups" class="flex flex-col">
        <div class="mt-3 flex  justify-between items-start gap-2.5">
          <div class="h-[68px] px-2.5 py-1 bg-[#2c353d] rounded-md shadow border border-[#262d34] flex-col justify-center items-center inline-flex">
            <div class="text-center text-[#f7f7f7] text-sm ">{{ meet.data }}</div>
            <div class="text-center text-[#5d95e8] text-[26px] font-bold ">{{ meet.dateTime }}</div>
          </div>
          <div class="">
            <div class="text-amber-50 text-[13px] font-semibold w-max">
              {{ meet.title }}
            </div>
            <div class="flex justify-start gap-2.5">
              <img src="@/assets/images/Rectangle%2032.svg" alt="123" class="">
              <div class="text-[#97989d] text-[10px] font-semibold mt-1">{{ meet.subtitle }}</div>
            </div>
            <div class="flex  gap-2.5 mt-1">
              <div class="h-[18px] px-2 py-0.5 bg-[#2c353d] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div class="text-[#858ead] text-[9px] font-semibold font-['Source Sans Pro'] leading-[14px]">{{ meet.themes }}</div>
              </div>
              <div class="h-[18px] px-2 py-0.5 bg-[#2c353d] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div class="text-[#858ead] text-[9px] font-semibold font-['Source Sans Pro'] leading-[14px]">{{ meet.themes }}</div>
              </div>
              <div class="h-[18px] px-2 py-0.5 bg-[#2c353d] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                <div class="text-[#858ead] text-[9px] font-semibold font-['Source Sans Pro'] leading-[14px]">{{ meet.themes }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>


  </div>
</template>

<script>
export default {
  name: 'MeetupsComponent',
  data() {
    return {
      meetups : [
        {id: 1, title: 'UIHUT - Crunchbase Company Profile...', subtitle: 'UIHUT  •  Sylhet, Bangladesh', data: 'FEB', themes: 'Remote', dateTime: 7},
        {id: 2, title: 'UIHUT - Crunchbase Company Profile...', subtitle: 'UIHUT  •  Sylhet, Bangladesh', data: 'WEN', themes: '1', dateTime: 10},
        {id: 3, title: 'UIHUT - Crunchbase Company Profile...', subtitle: 'UIHUT  •  Sylhet, Bangladesh', data: 'MON', themes: '1', dateTime: 11},
      ]
    }
  }
}
</script>

<style scoped>

</style>