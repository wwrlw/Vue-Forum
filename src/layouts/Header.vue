<template>
  <header class="flex justify-between max-w-100 items-center pr-6 pl-6">
    <div class="header__logo">
      <h3 class="logo__main text-4xl">
        Knowledgechain
      </h3>
    </div>
    <div class="header__logoes">
      <IconsList class=""></IconsList>
    </div>

    <div class="header__search flex items-center">
      <input class="header__input rounded-md" placeholder="Type here to search..."  type="text">
      <MagnifyingGlassIcon class="size-6 search-icon "></MagnifyingGlassIcon>
    </div>
    <div class="flex justify-center gap-7">
      <ChatBubbleOvalLeftIcon class="chat_icon size-10 p-2 text-amber-50 rounded-md "></ChatBubbleOvalLeftIcon>
      <ChatBubbleOvalLeftIcon class="chat_icon size-10 p-2 text-amber-50 rounded-md "></ChatBubbleOvalLeftIcon>
    </div>
    <div class="header__user flex justify-between items-center">
      <UserIcon class="chat_icon size-10 p-2 text-amber-50 rounded-md mr-2"></UserIcon>
      <p class="text-amber-50 text-xl mr-2">AR. Jakir</p>
      <ArrowDownCircleIcon class="size-4"></ArrowDownCircleIcon>
    </div>
  </header>
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
header {
  background-color: #262D34;
  width: 100%;
  height: 80px;
}

.logo__main {
  color: #FF571A;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 146.154% */
}
 .header__input{
   width: 440px;
   padding: 9px 20px;
   background: #2C353D;
 }

.header__search {
  position: relative;
  display: flex;
  align-items: center;
}

.header__input {
  width: 440px;
  padding: 9px 45px 9px 20px; /* Добавляем дополнительное пространство для иконки */
  background: #2C353D;
  border: none;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  right: 15px; /* Расстояние от правого края input */
  top: 50%;
  transform: translateY(-50%); /* Центрируем иконку по вертикали */
  pointer-events: none; /* Чтобы иконка не мешала вводить текст */
  color: #858EAD;
  font-size: 16px;
}
.chat_icon {
  background-color: #2C353D;
}
</style>