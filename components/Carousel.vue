<template>
  <div class="flex flex-row justify-center items-center relative">
    <button
      v-show="props.arrImage.length > 1"
      class="absolute left-0 hover:scale-150 rounded-full p-3"
      @click="prevSlide()"
    >
      <i class="arrow left"></i>
    </button>
    <slot :currentSlide="currentSlide" />
    <button
      v-show="props.arrImage.length > 1"
      class="absolute right-0 hover:scale-150 rounded-full p-3"
      @click="nextSlide()"
    >
      <i class="arrow right"></i>
    </button>
  </div>
</template>

<script setup>
const currentSlide = ref(1);
const getSlideCount = ref(null);
const props = defineProps(["arrImage"]);

// next slide
const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

// prev slide
const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value -= 1;
};

onMounted(() => {
  getSlideCount.value = props.arrImage.length;
});
</script>

<style scoped>
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>
