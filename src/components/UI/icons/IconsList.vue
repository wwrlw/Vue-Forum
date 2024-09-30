<template>
  <div class="flex justify-between gap-2">
    <HomeIcon class="size-10 p-2 bg-red-700 text-amber-50 rounded-md"></HomeIcon>
    <CalendarIcon class="size-10 p-2 text-amber-50 rounded-md"></CalendarIcon>
    <UserGroupIcon class="size-10 p-2 text-amber-50 rounded-md"></UserGroupIcon>
    <MicrophoneIcon class="size-10 p-2 text-amber-50 rounded-md"></MicrophoneIcon>
    <CameraIcon class="size-10 p-2 text-amber-50 rounded-md"></CameraIcon>
  </div>
</template>

<script>
import {CalendarIcon, CameraIcon, HomeIcon, MicrophoneIcon, UserGroupIcon} from "@heroicons/vue/20/solid/index.js";

export default {
  components: {UserGroupIcon, MicrophoneIcon, CalendarIcon, CameraIcon, HomeIcon}
}

</script>

<style  scoped>

</style>