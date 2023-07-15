<template>
  <section
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex flex-col justify-center items-center p-3 z-50"
  >
    <div
      class="bg-white border border-solid rounded shadow-lg max-w-lg p-2 my-3"
    >
      <div class="flex flex-row justify-between">
        <p class="font-bold">Cat Name</p>
        <button @click="closeModal()">X</button>
      </div>
      <img
        src="https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000"
        alt=""
        class="w-full"
      />
      <div class="flex flex-col my-4">
        <p>Cat Name</p>
        <span>Detail 1</span>
        <span>Detail 2</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { id } = useRoute();
const emit = defineEmits(["toggleModal"]);

const closeModal = () => {
  emit("toggleModal");
};
</script>

<style lang="scss" scoped></style>
