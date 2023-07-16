<template>
  <section class="modal">
    <div class="modal__body">
      <div class="flex flex-row justify-between">
        <p class="font-bold">Cat Name</p>
        <button class="font-bold hover:scale-75" @click="closeModal()">
          X
        </button>
      </div>
      <carousel class="relative" v-slot="{ currentSlide }" :arrImage="arrImage">
        <slide v-for="(slide, index) in arrImage" :key="index">
          <div v-show="currentSlide === index + 1">
            <img :src="slide.img" alt="" class="max-w-sm" />
          </div>
        </slide>
      </carousel>
      <div class="flex flex-col my-4">
        <p>Cat Name</p>
        <span>Detail 1</span>
        <span>Detail 2</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(["toggleModal"]);

const closeModal = () => {
  emit("toggleModal");
};

const arrImage = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192347.jpg?w=740&t=st=1689513287~exp=1689513887~hmac=82ff6eec4303ffdb4b18644a0a8a722b205ebfaf6ab5d199beb51fc7df66af00",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/red-white-cat-white-studio-background_155003-22080.jpg?w=740&t=st=1689513312~exp=1689513912~hmac=0026862209dc9e83771bf1c3015bcb0cbe978075d1b23d73d1929cd2c2f44611",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-psd/beautiful-cat-portrait-isolated_23-2150186184.jpg?w=740&t=st=1689513324~exp=1689513924~hmac=6a6d4194bd565c5d5740f43299518da3a5cc121129569b72fb41b6fdf1ba7856",
  },
];
</script>

<style scoped></style>
