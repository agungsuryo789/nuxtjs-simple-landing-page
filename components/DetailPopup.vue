<template>
  <section class="modal">
    <div class="modal__body relative p-2">
      <button
        class="absolute right-0 top-0 z-10 mx-2 text-xl font-bold hover:scale-75"
        @click="closeModal()"
      >
        X
      </button>
      <carousel v-slot="{ currentSlide }" :arrImage="props.modalData.images">
        <slide v-for="(slide, index) in props.modalData.images" :key="index">
          <div v-show="currentSlide === index + 1">
            <img :src="slide.path" alt="" class="max-w-lg object-fit" />
          </div>
        </slide>
      </carousel>
      <div
        class="flex flex-col w-full bg-white p-4 font-mono font-medium text-lg z-10"
      >
        <p class="font-bold">{{ props.modalData.name }}</p>
        <span>Breed: {{ props.modalData.breed }}</span>
        <span>Color: {{ props.modalData.color }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["modalData"]);
const emit = defineEmits(["toggleModal"]);

const closeModal = () => {
  emit("toggleModal");
};

</script>

<style scoped></style>
