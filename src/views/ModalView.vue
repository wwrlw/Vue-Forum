<template>
  <div class="fixed inset-0 bg-opacity-50 flex items-center justify-center">
    <div class="bg-[#262d34] p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-amber-50 font-bold mb-4 ">Create New Post</h2>
      <!-- Форма создания поста -->
      <textarea class="w-full p-3 border rounded-md" placeholder="Write your post..."></textarea>
      <div class="mt-4 flex justify-end gap-2">
        <button class="px-4 py-2 bg-gray-300 font-semibold rounded-md hover:bg-gray-100" @click="closeModal">Cancel</button>
        <button class="px-4 py-2 bg-[#ff6934] hover:bg-[red] text-white rounded-md font-semibold">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalView',
  methods: {
    closeModal() {
      this.$emit('close'); // Отправляем событие 'close' родителю
    }
  }
}
</script>
